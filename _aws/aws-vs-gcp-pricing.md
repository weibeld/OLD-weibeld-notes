---
title:  Pricing of Amazon Web Services vs. Google Cloud Platform
author: Daniel Weibel
date:   1 February 2018
last_updated: 1 February 2018
---

This is a comparison of the pricings of computing instances of Amazon Web Services (AWS) and Google Cloud Platform (GCP) for a small example use case.

The use case is a text analysis application (using [sent2vec](https://github.com/ryankiros/skip-thoughts)) that uses a machine learning model of about 5 GB. The application thus requires a machine with at least 5 GB memory. There are no particular requirements for the CPU performance, since the application does not do heavy computations when using the model.

In the following, we list candidate computing instance types of AWS and GCP that fit the criteria for our application along with the corresponding prices per hour and per month (assuming a running time of 730 hours per month).

Notes:

- The IaaS computing instance service of AWS is called [EC2](https://aws.amazon.com/ec2), whereas the corresponding service of GCP is called [Compute Engine](https://cloud.google.com/compute/). Computing instances are called "instances" on AWS EC2, and "machines" on GCP Compute Engine.
- The price for computing instances varies depending on the region/location of the data centre. The following prices are for the cheapest region, which is "US East, North Virginia (us-east-1)" for AWS, and "Iowa (us-central1)" for GCP.
- **The following instance types and prices date from 1 February 2018 and are subject to relatively frequent change.**

# AWS EC2 On-Demand

On-demand instances are just the "normal" instances of AWS EC2, that is, the ones that you use by default. They are billed by the second only as long as they are running.

- See **pricing overview** of all on-demand instances [here](https://aws.amazon.com/ec2/pricing/on-demand/).
- A monthly price calculator can be found [here](https://calculator.s3.amazonaws.com/index.html).
- The following monthly prices assume the instances are running 730 hours per month

## t2.large

- Spec
    - 2 CPUs
    - 8 GB memory
- Price
    - $0.0928/hour
    - **$67.74/month**

## m5.large

- Spec
    - 2 CPUs
    - 8 GB memory
- Price
    - $0.096/hour
    - **$70.08/month**

## r4.large

- Spec
    - 2 CPUs
    - 15.25 GB
- Price
    - $0.133/hour
    - **$97.09/month**


# AWS EC2 Reserved Instances (RI)

Reserved instances require a commitment to "rent" an instance for a set amount of time (1 or 3 years) in return for significantly lower prices. Note that you pay the reserved instances full time, that is, you pay 24/7 no matter whether the instance is running or not.
What are reserved instances?

Details:

- When you purchase a reserved instance, you buy it for 1 or 3 years.
- Reserved instances are billed 100% of the time, no matter whether they are running or not.
- The price for reserved instances is **significantly lower** than for on-demand instances.
- You can pay eiter **all upfront**, **partially upfront**, or **no upfront**. The hourly rate is lowest for "all upfront" and highest for "no upfront".
- You buy reserved instances in the [Reserved Instance Marketplace](https://us-east-2.console.aws.amazon.com/ec2/v2/home?region=us-east-2#ReservedInstances:sort=reservedInstancesId).
- At any time before the end of your term of 1 or 3 years, you can **sell your reserved instance on the Reserved Instance Marketplace**, see [here](https://aws.amazon.com/ec2/purchasing-options/reserved-instances/marketplace/).
- Read more about reserved instances [here](https://aws.amazon.com/ec2/pricing/reserved-instances/).

Reserved instances make sense if you have an application in production that runs 24/7, because your instances are billed 24/7. It doesn't make sense if you want to use an instance just sporadically (that is, start it up for some task and then shut it down again), because then you pay for the time that you don't use the instance (although a much lower price).

- See **pricing overview** of all reserved instance types [here](https://aws.amazon.com/ec2/purchasing-options/reserved-instances/marketplace/).
- The following prices are for a 3-year term. A 1-year term would be more expensive.
- The following monthl prices assume 730 hours per month

## t2.large

- Spec
    - 2 CPUs
    - 8 GB memory
- Price "no upfront"
    - $0.040/hour
    - $29.20/month for 3 years
- Price "all upfront"
    - $917 upfront payment for 3 years
    - $0.035/hour
    - **$25.55/month**

## m5.large

- Spec
    - 2 CPUs
    - 8 GB memory
- Price "no upfront"
    - $0.042/hour
    - $30.66/month for 3 years
- Price "all upfront"
    - $968 upfront payment for 3 years
    - $0.037/hour
    - **$27.01/month**

## r4.large

- Spec
    - 2 CPUs
    - 15.25 GB
- Price "no upfront"
    - $0.057/hour
    - $41.61/month for 3 years
- Price "all upfront"
    - $1314 upfront payment for 3 years
    - $0.050/hour
    - **$36.50/month**


# GCP Compute Engine

- GCP machines are billed by the second, only when they are running.
- All prices include the [Sustained Use Discount (SUD)](https://cloud.google.com/compute/docs/sustained-use-discounts) of 30% assuming that the machine is running 730 hours (100%) per month. Using SUD is about the cheapest you can get with GCP (except preemptible machines etc., which are not an option here).
    - If your machines run less than 730 hours per month, then the price per hour will be higher.
- See **pricing overview** of all machine types [here](https://cloud.google.com/compute/pricing).
- A pricing calculator can be found [here](https://cloud.google.com/products/calculator/).

## Custom Machine

Info about custom machines [here](https://cloud.google.com/compute/pricing#custommachinetypepricing).

- Spec
    - 1 CPU
    - 6.5 GB memory
- Price
    - $0.043/hour
    - **$31.72/month**

## n1-standard-2

- Spec
    - 2 CPUs
    - 7.5 GB memory
- Price
    - $0.0950/hour
    - **$48.55/month**

## n1-highmem-2

- Spec
    - 2 CPUs
    - 13 GB memory
- Price
    - $0.1184/hour
    - **$60.50/month**

## Information About Custom Machines

GCP allows you to compose a custom machine by freely choosing the number of CPUs and amount of memory you need in your machine. For each CPU you can choose up to 6.5 GB of memory.

You can actually add more ["extended memory"](https://cloud.google.com/compute/docs/instances/creating-instance-with-custom-machine-type#extendedmemory) than 6.5 GB to each CPU, although at a higher price.

Read more about custom machine pricing [here](https://cloud.google.com/compute/pricing#custommachinetypepricing) and about how to create a custom machine [here](https://cloud.google.com/compute/docs/instances/creating-instance-with-custom-machine-type).
