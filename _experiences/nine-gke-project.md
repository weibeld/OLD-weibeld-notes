---
title: Nine Managed Kubernetes Project
author: Daniel Weibel
date: 21 May 2019
last_updated: 21 May 2019
hidden: true
---

The idea of the project is to create and manage GKE clusters for customers. The clusters run in nine's GCP account and customers get access to them via kubectl. The added value for the customers consists in pre-installed nine-managed services on the clusters (e.g. backups, monitoring, logging).

From a technical point of view, the goal is to bring up a cluster for a new customer with minimal effort. This is achieved with Terraform. Everything, from the creation of a GCP project, to the creation of a GKE cluster, to the deployment of the provided services on the cluster, is defined in Terraform code and thus can be applied with a single command in a reproducible way.

The Terraform files for all the clusters are maintained in separate GitLab repositories (they basically look the same for all the clusters). For creating a new cluster, there is a `bootstrap.sh` script that creates a new repository containing the required Terraform files.

# Overview

![Nine GKE Project](assets/nine-gke-project.png)

# GCP concept

- Each customer gets a GCP project in the nine GCP account
- Each customer GCP project contains one GKE cluster
    - May be multiple clusters per project in the future
- Two special GCP projects, each containing one GKE cluster
    - Admin
        - The admin cluster contains centralised information (user base in Keycloak, secrets in Vault)
    - Infra
        - The infra cluster contains services that are used for all customer clusters

# Provided services in customer cluster

- Backup: daily backup of cluster state and persistent disks with **Velero** to GCS bucket
- Persistent storage: read-many/write-many **NFS** storage disks
- Application deployment stack: **Helm**/**Tiller**/**ChartMuseum**
- Monitoring: **Prometheus** with **Grafana** dashboards
- Log management: **Loki**
- Ingress: **NGINX Ingress Controller**
- TLS certificates for public endpoints: **cert-manager** (requests and manages TLS certificates for ingresses)
- Visibility: **Kubernetes Dashboard**

# Infrastructure as Code concept

- One GitLab repository per customer cluster
- Repository contains Terraform code for spinning up a whole customer cluster in three sections (directories):
  - `gcp-project`: creates a new GCP project for the cluster
  - `gcp-infrastructure`: creates a GKE cluster in the GCP project (including GCS bucket for backups)
  - `kubernetes`: deploys all the provided services to the GKE cluster
    - A Terraform module for each service to be deployed
- Requires three runs of `terraform apply` to spin up a complete cluster
  - Not possible to do it in a single step, because initialisation of certain Terraform providers requires that GCP project or GKE cluster already exists

## Creation of the GitLab repository

- A `bootstrap.sh` script creates a new GitLab repository for a new customer cluster
- The script populates the repository with all the required Terraform files
- To this end, the script copies and customises the files from a set of template files
- Both the bootstrap script and the template files live in their own repository

## Organisation of Terraform code

- Each task to be done to spin up a cluster (e.g. deploying a provided service in the cluster) is encapsulated in a Terraform module
- Each module is maintained in a separate GitLab repository
- Modules for each of the three `terraform apply` steps (see above) are aggregated in three wrapper modules
  - The Terraform code in the three directories in the customer cluster repositories references these wrapper modules
- Module versions are managed with [Terrafile](https://github.com/coretech/terrafile) (`Terrafile` lives in its own GitLab repository)
- Most of the work shaping the customer cluster is done in these Terraform modules

# CI/CD concept

- Using GitLab CI/CD pipelines
- Tests are run on the level of Terraform modules
  - Each Terraform module repository contains a `test` directory that specifies a test using [Terratest](https://github.com/gruntwork-io/terratest)
- The pipeline executes the Terratest test on every push
- For in-cluster Terraform modules, the tests assume the existence of a GCP project and a GKE cluster (testing cluster)
  - The test is responsible for deploying a minimum set of resources to the cluster that allow to test whether the Terraform module does what it is supposed to do

# Authentication concept

- All users for any customer cluster are stored in a Keycloak instance in the central admin cluster
- Users must somehow authenticate (via OAuth) to Keycloak and then get a token into their kubeconfig file
  - Similar to how `gcloud container clusters get-credentials` works

# Monitoring concept

- An instance of Prometheus runs on the admin nodes (in a `nine-*` namespace) and monitors the nine-managed services
- There are plans to also pre-install a Prometheus instance for the customer which the customers can configure to monitor their own applications

# In-cluster security concept

## Namespaces

- All resources deployed by nine are in namespaces starting with `nine-*`
- Customers should have no access to resources in `nine-*` namespaces
  - Implemented with RBAC by **namespace-admin** admission controller and **namespace-controller** (see below)
- Customers should not be able to create, update or delete `nine-*` namespaces
  - Implemented with **access-guard** admission controller (see below)
- No traffic should be allowed to flow from customer Pods to nine-managed Pods
  - Implemented with **namespace-controller** (see below)

## Nodes

- The admin nodes are labelled with `nine-node-type=nine`
- The customer nodes are labelled with `nine-node-type=customer`
- All Pods managed by nine should run on admin nodes, and all Pods managed by the customer should run on customer nodes
  - Implemented with **node-admssion** admission controller (see below)


## access-guard

A service that provides the following three **webhook admission controllers**:

- **node-admission** (mutating)
  - Adds tolerations and affinities to newly created Pods, so that nine-managed Pods are scheduled to admin nodes, and customer-managed Pods are scheduled to customer nodes.
- **access-guard** (validating)
  - Prevents customers from creating, updating, or deleting `nine-*` namespaces
- **namespace-admin** (mutating)
    - Adds the `nine.ch/namespace-admin` annotation to newly created customer namespaces, setting the value to the user who issused the request. This annotation will be picked up by the namespace controller (see below), which creates a RoleBinding in the namespace, granting this user admin rights for this namespace.

## namespace-controller

A controller that watches for the creation of namespaces.

- If a customer namespace is created, grants admin rights to a specified set of customer users for this namespace (by creating a RoleBinding).
- If a nin namespace is created, blocks ingress traffic from customer-managed Pods to all Pods in this new nine namespace (by creating NetworkPolicies).

### Details

- <https://gitlab.nine.ch/gcp/infra/namespace-controller>
- A normal controller (not an admission control plugin, not an operator) deployed in the cluster
Listens for the creation of new namespaces and, depending on annotations and labels of the namespace, creates a RoleBinding and/or NetworkPolicies in the new namespace
- If the namespace has the `nine.ch/namespace-admin` annotation:
  - Create a RoleBinding called `namespace-admins` in the new namespace
    - Binds the `admin` ClusterRole to the namespace administrator (value of `nine.ch/namespace-admin` annotation) plus a preconfigured set of additional administrators (see [controller/config.go](https://gitlab.nine.ch/gcp/infra/namespace-controller/blob/master/controller/config.go))
    - This means, the administrators get admin access to all resources in the new namespace.
      - `admin` is a default ClusterRole that grants access to all resources in a namespace (except ResourceQuotas and the Namespace resource itself).
      - When a RoleBinding (namespaced) references a ClusterRole (non-namespaced), the permissions apply to the resources in the namespace of the RoleBinding.
      - This pattern (referencing a ClusterRole from a RoleBinding) is often used for reusing a role in multiple namespaces to avoid to have to define the role in each namespace.
  - **Background:** customer namespaces can specify the administrator of a namespace with the `nine.ch/namespace-admin` annotation. If the user does not add this annotation explicitly, it is added automatically by the **namespace-admin** admission controller (see above). The value of the annotation is set to the user who created the namespace, that is, the user who creates a namespace by default gets admin rights for this namespace.
- If the namespace has a `nine-namespace-type=nine` label:
  - Create a NetworkPolicy that denies all ingress traffic to all Pods, except from Pods in nine namespaces (i.e. namespaces with the `nine-namespace-type=nine` label).
  - **Background:** every namespace has the `nine-namespace-type` label with a value of either `nine`, which means that it is a nine namespace, or `customer`, which means that it is a customer namespace.
- The handler function handling namespace creations is `handleNamespaceAdded` in [controller/controller.go](https://gitlab.nine.ch/gcp/infra/namespace-controller/blob/master/controller/controller.go)
