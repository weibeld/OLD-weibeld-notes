---
title: mmWave Hardware in 2016
author: Daniel Weibel
bibliography:
date: April 2016
last_updated: 14 July 2016
---

This is an overview of the available millimetre wave (mmWave) hardware from the point of view of mid-2016.

The focus is on 802.11 ad, which is the new WiFi standard in the mmWave spectrum. Note that 802.11 ad is also known as "WiGig".

802.11 ad
=================

Chipsets/Cards
--------------

-   **Intel**
    -   Specialised on [wireless docking](http://www.intel.com/content/www/us/en/wireless-products/wireless-docking.html)
    -   M.2 cards for client (notebook)
        -   [Intel Tri-Band Wireless-AC 17265](http://www.intel.com/content/www/us/en/wireless-products/tri-band-wireless-ac-17265.html) (2015)
        -   [Intel® Tri-Band Wireless-AC 18260](http://www.intel.com/content/www/us/en/wireless-products/tri-band-wireless-ac.html) (2015)
        -   [Intel Tri-Band Wireless-AC 18265](http://www.intel.com/content/www/us/en/wireless-products/tri-band-wireless-ac-18265.html) (2016)
    -   M.2 card for server (docking station)
        -   [Intel Wireless Gigabit Sink W13100](http://www.intel.com/content/www/us/en/wireless-products/wigig-sink-w13100.html)
            -   Interfaces with up to two Intel Wireless Gigabit Antenna-M 10041R modules
-   **Qualcomm Atheros**
    -   QCA9006NFC and QCA9006WBD (2013)
        -   Cards with M.2 and Mini PCIe interface, respectively, combining 802.11 ac and 802.11 ad
        -   Developed [in collaboration with Wilocity](https://www.qualcomm.com/news/releases/2013/01/08/qualcomm-and-wilocity-launch-industrys-first-tri-band-reference-design)
    -   [Qualcomm VIVE 802.11 ad](https://www.qualcomm.com/products/vive/11ad) -   802.11 ad solution for access points, notebooks, and smartphones
    -   [Snapdragon 810](https://www.qualcomm.com/products/snapdragon/processors/810) (released [7 April 2014](https://www.qualcomm.com/news/releases/2014/04/07/qualcomm-announces-ultimate-connected-computing-next-generation-snapdragon), announced to include 802.11 ad, but apparently does not)
    -   [Snapdragon 820](https://www.qualcomm.com/products/snapdragon/processors/820)
        (802.11 ad support)
    -   [Collaborates with Intel](https://www.qualcomm.com/news/onq/2016/02/02/intel-and-qualcomm-collaborate-build-robust-80211ad-ecosystem)
        to ensure interoperability of Qualcomm and Intel products
    -   Products used in various consumer devices: [link 1](https://www.qualcomm.com/news/releases/2016/01/05/qualcomm-80211ad-products-lead-way-multi-band-wi-fi-ecosystem),
        [link 2](https://www.qualcomm.com/news/onq/2016/01/07/wireless-ecosystem-qualcomm-leads-80211ad-solutions)
-   **Dell**
    -   Dell Wireless 1601 WiGig (DW1601) card (Mini PCIe)
        -   Wireless card for notebooks for connectivity to Dell Wireless Dock (D5000)
        -   Based on a Wilocity IEEE 802.11 ad chip
-   **Wilocity** (on 3 July 2014 [acquired by Qualcomm Atheros](https://www.qualcomm.com/news/releases/2014/07/02/qualcomm-bolsters-wi-fi-leadership-60-ghz-wireless-mobile-computing-and))
    -   [Wil6100](http://wilocity.com/resources/Wil6100-Brief.pdf), [Wil6200](http://wilocity.com/resources/Wil6200-Brief.pdf), Wil6300 (chipsets)
-   **Peraso**
    -   Radio chips
        -   [PRS1025](http://www.perasotech.com/wp-content/uploads/2015/03/prs1025_1125_215x-product_brief-rev0-15-03.pdf)
        -   [PRS1125](http://www.perasotech.com/wp-content/uploads/2015/03/prs1025_1125_215x-product_brief-rev0-15-03.pdf)
        -   PRS1126
        -   [PRS2152 and PRS2153](http://www.perasotech.com/gp_product/backhaul-module-products/) (reference design for small-cell backhaul)
    -   Baseband chips
        -   PRS4001
        -   PRS4601
    -   [W110](http://www.perasotech.com/wp-content/uploads/2015/12/W110-product_brief-rev0-15-12.pdf)
        -   Releasd [21 December 2015](http://www.perasotech.com/wp-content/uploads/2015/12/CES-2016-Press-Release-21-Dec-2015.pdf)
        -   Chipset with USB 3.0 interface
        -   Incorporates PRS4001 and PRS1125
    -   X610
        -   Released [22 February 2016](http://www.perasotech.com/wp-content/uploads/2016/02/MWC-2016-Press-Release-22-Feb-2016.pdf)
        -   Chipset with USB 3.0 interface for outdoor/infrastructure usage
        -   Incorporates PRS4601 and PRS1126
    -   Development kits
        -   [Consumer-oriented](http://www.perasotech.com/gp_product/consumer-development-kits/)
        -   [Backhaul-oriented](http://www.perasotech.com/gp_product/consumer-development-kits/)
-   **SiBEAM** (belongs to [Lattice
    Semiconductor](http://www.latticesemi.com/))
    -   Baseband chips
        -   SB6501
    -   Radio chips
        -   SiI6312 (high range)
        -   SB6510 (low power)
    -   USB 3.0 802.11 ad adapter reference design
        -   Released [4 January
            2016](http://www.sibeam.com/News/2016/20160104SiBEAMUSB3080211ad.aspx)
        -   Compatible with Qualcomm VIVE 802.11 ad access points (i.e.
            TP-LINK Talon AD7200)
-   **Blu Wireless**
    -   [HYDRA baseband
        chipset](http://www.bluwirelesstechnology.com/technology/)
-   **Tensorcom**
    -   Complete 802.11 ad chipsets
        -   [TC-60G1324UE](http://tensorcom.com/wp-content/uploads/2016/02/TC-60G1324UE-1pg-pb-v00.pdf)
            (with USB 3.0 controller and PHY)
        -   [TC60G1115GE](http://tensorcom.com/wp-content/uploads/2016/02/TC-60G1115GE-1pg-pb.pdf)
            (low power)
        -   [TC-60G-USB3.0 Evaluation
            Board](http://tensorcom.com/technology/) (TC-60G1115GE with
            USB 3.0, drivers, and test software)

Consumer Products
-----------------

-   **Routers**
    -   TP-LINK [Talon
        AD7200](http://www.tp-link.com/en/products/details/AD7200.html)
        -   Released [6 January
            2016](http://www.tp-link.us/news-details-16352.html)
        -   First tri-band (2.4 GHz, 5 GHz, 60 GHz) router
        -   Based on Qualcomm Atheros [VIVE 802.11
            ad](https://www.qualcomm.com/products/vive/11ad) solution
        -   Price: unknown
    -   Elecom ([to expect in
        2016](https://www.qualcomm.com/news/releases/2016/01/05/qualcomm-80211ad-products-lead-way-multi-band-wi-fi-ecosystem))
    -   NEC ([to expect in
        2016](https://www.qualcomm.com/news/releases/2016/01/05/qualcomm-80211ad-products-lead-way-multi-band-wi-fi-ecosystem))
-   **Notebooks**
    -   Acer TravelMate P648
        -   Released [4 January
            2016](http://us.acer.com/ac/en/US/press/2016/175243)
        -   First notebook with 802.11 ad support (based on Qualcomm
            Atheros technology)
        -   Price: $\geq$999 EUR (available from April 2016)
    -   Asus ([to expect in
        2016](https://www.qualcomm.com/news/releases/2016/01/05/qualcomm-80211ad-products-lead-way-multi-band-wi-fi-ecosystem))
-   **Tablets**
    -   Qualcomm
        -   [Prototype tablet with Snapdragon 810 and QCA9500 802.11
            ad](http://www.androidcentral.com/qualcomm-wigig-prototype-snapdragon-810),
            presented on 16 Oct. 2016
-   **Smartphones**
    -   [LeEco](http://www.leeco.com/) (former Letv) Le Max Pro X910
        -   Released [23 February
            2016](http://www.techgrapple.com/letv-x910-with-snapdragon-820-certified-by-tenaa/)
        -   [First phone including Qualcomm Snapdragon
            820](http://www.theinquirer.net/inquirer/news/2440657/ces-2016-first-snapdragon-820-smartphone-announced-and-it-s-not-from-samsung)
        -   Price: [699
            USD](http://www.banggood.com/Letv-Max-Pro-X910-6_33-Inch-64GB-ROM-4GB-RAM-Snapdragon-820-Quad-Core-Dual-4G-Smartphone-p-1027843.html)
    -   [Samsung Galaxy S7 and S7
        edge](http://www.samsung.com/us/explore/galaxy-s7-features-and-specs/)
        -   US/China version [includes Qualcomm Snapdragon
            820](https://www.qualcomm.com/news/releases/2016/02/21/qualcomm-snapdragon-820-processor-powers-next-generation-samsung-galaxy-s7),
            but 802.11 ad is [not
            activated](http://www.pcworld.com/article/3036144/these-three-future-looking-technologies-are-missing-from-samsungs-galaxy-s7s.html)
        -   Released [11 March
            2016](http://arstechnica.com/gadgets/2016/02/samsung-galaxy-s7-and-s7-edge-curvier-faster-micro-sd-expansion-available-march-11/)
    -   [HTC 10](http://www.htc.com/us/smartphones/htc-10/)
        -   [Includes Qualcomm Snapdragon
            820](https://www.qualcomm.com/news/snapdragon/2016/04/12/htc-10-takes-performance-new-level-power-snapdragon-820),
            but apparently 802.11 ad not activated
        -   Released April 2016
    -   [HP Elite
        x3](http://store.hp.com/us/en/ContentView?storeId=10151&catalogId=10051&langId=-1&eSpotName=Elite-x3)
        -   [Includes Qualcomm Snapdragon
            820](https://www.qualcomm.com/products/snapdragon/smartphones/hp-elite-x3),
            but apparently 802.11 ad not activated
        -   Expected release [June
            2016](http://www.gsmarena.com/hp_elite_x3-7954.php)
    -   [LG G5](http://www.lg.com/us/mobile-phones/g5#G5Modularity)
        -   [Includes Qualcomm Snapdragon
            820](https://www.qualcomm.com/products/snapdragon/smartphones/lg-g5),
            but apparently 802.11 ad not activated
        -   Released [April
            2016](https://www.qualcomm.com/products/snapdragon/smartphones/lg-g5)
-   **Wireless Docking**
    -   [Dell Wireless
        Dock (D5000)](http://accessories.dell.com/sna/productdetail.aspx?sku=452-BBUX)
        -   Compatible notebooks
            -   [Dell Latitude
                6430u](http://www.dell.com/us/business/p/latitude-6430u-ultrabook/pd)
                with Dell Wireless 1601 WiGig (DW1601) wireless card
            -   [Dell Latitude
                E7440](http://www.dell.com/us/business/p/latitude-e7440-ultrabook/pd)
                with Dell Wireless 1601 WiGig (DW1601) wireless card
            -   [Dell Latitude
                E7450](http://www.dell.com/us/business/p/latitude-e7450-ultrabook/pd)
                with Intel Tri-Band Wireless-AC 17265 wireless card
            -   [Dell Latitude
                E7470](http://www.dell.com/us/business/p/latitude-e7470-ultrabook/pd?ref=PD_OC)
                with Intel Tri-Band Wireless-AC 18260 wireless card
    -   [HP Advanced Wireless Docking
        Station (F7M97AA)](http://www8.hp.com/emea_africa/en/products/oas/product-detail.html?oid=6615841)
        -   Compatible notebooks
            -   [HP Elite x2 1011
                G1](http://store.hp.com/us/en/mdp/business-solutions/elite-x2-1011-11)
                with Intel Tri-Band Wireless-AC 18260 wireless card
            -   [HP Elite x2 1012
                G1](http://store.hp.com/webapp/wcs/stores/servlet/ContentView?storeId=10151&langId=-1& catalogId=10051&eSpotName=EliteX2_1012)
                with Intel Tri-Band Wireless-AC 18260 wireless card

Cellular Radio Access
=====================

-   **NYU WIRELESS + SiBEAM + NI**
    -   Public open-source programmable **60 GHz millimetre wave
        test platform**
    -   For rapid design, prototyping, and validation of 5G millimetre
        wave technologies
    -   Electrically steerable phased array antenna for beam steering
        (no mechanically moving parts)
    -   Built by [NYU WIRELESS](http://wireless.engineering.nyu.edu/),
        radio frontend by [SiBEAM](http://sibeam.com/), baseband
        processing by [NI](http://www.ni.com/en-us.html)
    -   Announcement of start of development on [19 January
        2016](http://engineering.nyu.edu/press-releases/2016/01/19/nyu-wireless-sibeam-ni-announce-pioneering-public-testbed-speed-path-ultra)

Small-Cell Backhaul (non exhaustive)
====================================

Chipsets
--------

-   **SiBEAM** (belongs to [Lattice
    Semiconductor](http://www.latticesemi.com/))
    -   SiI6340 + SiI6342 (radio chips), SB6541 (baseband chips)
    -   [60 GHz
        system](http://www.latticesemi.com/en/Products/mmWave/UltraGigBeamformingTX.aspx)
        for outdoor usage (e.g. small-cell backhaul)
    -   Released [16 February
        2016](http://www.sibeam.com/News/2016/20160216MultiGigabitWirelessBasebandProcessor.aspx)
-   **Blu Wireless**
    -   [HYDRA baseband
        chipset](http://www.bluwirelesstechnology.com/technology/)
-   **Peraso**
    -   [PRS2152/PRS2153](http://www.perasotech.com/gp_product/backhaul-module-products/)
        (802.11 ad transmitter/receiver for small-cell backhaul)

Complete Systems
----------------

-   **Siklu**
    -   [Etherhaul-1200T](http://www.siklu.com/product/etherhaul-1200-eband-radio/)
        (71–76 GHz)
-   **Ceragon**
    -   [FibeAir
        IP-20C](https://www.ceragon.com/products-ceragon/packet-hybrid-microwave/fibeair-ip-20-platform/fibeair-ip-20c)
        (6–42 GHz)
-   **BridgeWave**
    -   Series of 60 GHz and 80 GHz [small-cell backhaul
        systems](https://www.winncom.com/en/manufacturer/bridgewave)
-   **DragonWave**
    -   [Avenue
        Link](http://www.dragonwaveinc.com/products/small-cell-solutions/avenue-link)
        (24, 26, 28, 31, 38, 60 GHz)
-   **InterDigital**
    -   [EdgeHaul](http://www.interdigital.com/presentations/mwc16-edgehaul)
        (802.11 ad small-cell backhaul)

WirelessHD (non exhaustive)
===========================

-   **SiBEAM** (belongs to [Lattice
    Semiconductor](http://www.latticesemi.com/))
    -   [MOD6320-T +
        MOD6321-R](http://www.sibeam.com/~/media/SIBEAM/Documents/ProductBrochure/PBMOD63206321PAIR.pdf?la=en)
        (transmitter/receiver chipsets)
    -   [UltraGig 6400](http://www.sibeam.com/Products.aspx#Indoor)
        (transceiver chipset for mobile devices for streaming video to
        external screen)

Radar (non exhaustive)
======================

-   **Infineon**
    -   [BGT24MTR12](http://www.infineon.com/cms/en/product/rf-and-wireless-control/mm-wave-mmic/24-ghz-radar-industrial/BGT24MTR12/productType.html?productType=db3a30443ff7943901400b1ba93016fb)
        (24 GHz industrial radar chip)
-   **NXP**
    -   [MR2001](http://www.nxp.com/pages/multi-channel-77-ghz-radar-transceiver-chipset:MR2001)
        (77 GHz automotive radar chip)
