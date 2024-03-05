"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1477],{10:e=>{e.exports=JSON.parse('{"blogPosts":[{"id":"AIS1","metadata":{"permalink":"/blog/AIS1","source":"@site/blog/2024-01-24-AIS/AIS-Canakkale.md","title":"Vessel Tracking using AIS","description":"Automatic Identification System (AIS) is a crucial technology used for monitoring and tracking the vessels at sea. It has become an essential tool for ensuring maritime safety, security, and efficiency. In this blog post, Kagan had the chance to catch and decode AIS signals for us!","date":"2024-01-24T00:00:00.000Z","formattedDate":"January 24, 2024","tags":[{"label":"AIS","permalink":"/blog/tags/ais"},{"label":"maritime","permalink":"/blog/tags/maritime"},{"label":"RTL-SDR","permalink":"/blog/tags/rtl-sdr"}],"readingTime":1.55,"hasTruncateMarker":true,"authors":[{"name":"Murat Sever","title":"Lab coordinator","url":"https://github.com/murat-sever","imageURL":"https://github.com/murat-sever.png","key":"murat"},{"name":"Ka\u011fan Aydemir","title":"Student","url":"https://github.com/KaganAydemir","imageURL":"https://github.com/KaganAydemir.png","key":"kagan"}],"frontMatter":{"slug":"AIS1","title":"Vessel Tracking using AIS","authors":["murat","kagan"],"tags":["AIS","maritime","RTL-SDR"]},"nextItem":{"title":"End-to-end 5G Network Creation","permalink":"/blog/5GsrsRAN"}},"content":"Automatic Identification System (AIS) is a crucial technology used for monitoring and tracking the vessels at sea. It has become an essential tool for ensuring maritime safety, security, and efficiency. In this blog post, Kagan had the chance to catch and decode AIS signals for us! \\n\\n\x3c!-- truncate --\x3e\\n\\nAIS is is used to transmit vital information such as position, speed, call sign, type of ship, and destination. It is similar to ADS-B signals that aircrafts emit. AIS operates principally on two dedicated frequencies 161.975 MHz and 162.025 MHz. The former frequency is used for ship-to-ship communication, while the latter is used for ship-to-shore. \\n\\nData it provides are helpful for, \\n- Collision avoidance\\n- Enhanced search and rescue operations\\n- Better route decisions\\n\\n## AIS Catcher\\n[AIS Catcher](https://aiscathcer.org) is a web-based utility to receive and decode AIS signals both online and offline. It supports many SDRs on the market, including RTL-SDRs. We will be using RTL-SDR along with AIS Catcher to receive AIS signals real-time and display vessels on a map. \\n\\nWindows binaries for AIS Catcher is available on AIS Catcher [Github repository](https://github.com/jvde-github/AIS-catcher/tree/main). After having downloaded the release required, modify the start.bat file so that it looks like below: \\n```\\nAIS-catcher -v 10 -u 127.0.0.1 10110 -N 8100 PLUGIN_DIR plugins\\nPAUSE\\n```\\nAfter the modification has been done, you start bat file and launch a web browser to go to http://localhost:8100/ address to watch the signals. \\n\\n## Antenna Array Setup\\nWe setup RTL-SDR with antennas in port Kepez, \xc7anakkale.  \\n\\n![](./receiver_location.png) \\n\\n![](./antenna_setup.png)\\n\\n## Receiving Data\\nAIS catcher provides data through its web interface. \\n\\nWeb Interface          |  Large Map\\n:-------------------------:|:-------------------------:\\n![](./web_interface.png) | ![](./large_map.png)\\n\\nClicking on a vessel on the map brings more information about it. \\n\\nAIS Cathcer          |  Vessel Finder\\n:-------------------------:|:-------------------------:\\n![](./ais1.png) | ![](./vessel1.png)\\n\\nAIS Cathcer          |  Vessel Finder\\n:-------------------------:|:-------------------------:\\n![](./ais2.png) | ![](./vessel2.png)\\n\\nWe can see that photos are quite accurate. \\n![image](./real_image.png)"},{"id":"5GsrsRAN","metadata":{"permalink":"/blog/5GsrsRAN","source":"@site/blog/2023-12-19-5G-srsRAN/srsRAN-5G.md","title":"End-to-end 5G Network Creation","description":"In this post, we are creating a 5G standalone (SA) network using srsRAN. We will use a COTS UE, Redmi Note 12 Pro 5G and USRPB210 Software Defined Radio (SDR) from NI to attach with the gNB we have created.","date":"2023-12-19T00:00:00.000Z","formattedDate":"December 19, 2023","tags":[{"label":"5G","permalink":"/blog/tags/5-g"},{"label":"srsRAN","permalink":"/blog/tags/srs-ran"},{"label":"USRP","permalink":"/blog/tags/usrp"},{"label":"COTS UE","permalink":"/blog/tags/cots-ue"}],"readingTime":2.325,"hasTruncateMarker":true,"authors":[{"name":"Murat Sever","title":"Lab coordinator","url":"https://github.com/murat-sever","imageURL":"https://github.com/murat-sever.png","key":"murat"},{"name":"Ka\u011fan Aydemir","title":"Student","url":"https://github.com/KaganAydemir","imageURL":"https://github.com/KaganAydemir.png","key":"kagan"}],"frontMatter":{"slug":"5GsrsRAN","title":"End-to-end 5G Network Creation","authors":["murat","kagan"],"tags":["5G","srsRAN","USRP","COTS UE"]},"prevItem":{"title":"Vessel Tracking using AIS","permalink":"/blog/AIS1"},"nextItem":{"title":"NOAA Satellite Image Reception with RTL-SDR","permalink":"/blog/SatNOAA"}},"content":"In this post, we are creating a 5G standalone (SA) network using [srsRAN](https://srs.io/). We will use a COTS UE, Redmi Note 12 Pro 5G and USRPB210 Software Defined Radio (SDR) from NI to attach with the gNB we have created. \\n \\n\x3c!-- truncate --\x3e\\n## srsRAN 5G Stack\\nThe srsRAN Project is a complete open-source RAN solution from SRS which is 3GPP and O-RAN compliant. It is entirely developed by SRS with minimal external dependencies. It supports FDD/TDD on all FR1 bands. \\n![srsRAN Image](./srsRAN.png)\\n\\nsrsRAN can be installed in two ways. One way is to use **binary packets** suited to your distribution. The other that we have also used is to **install it from source**. srsRAN gNB is configured using **YAML configuration files**. It supports **nested configuration** parameters. Configuration can be arbitrarily split across multiple files. Any parameter not explicitly configured uses **default values**. Documentation contains full list of configuration parameters. \\n\\nIn this work, the core network and gNB will run on the same machine, a powerful Victus (HP) laptop. USRP B210 is directly plugged into USB3 port. So, don\'t use a USB hub unless it\'s very high performant. We are not using any external clock in our setup, but it\'s recommended to use one if available. \\n![5G setup](./5Gsetup.jpg) \\n\\n## COTS UE (5G Phone) Selection\\nThis is a very critical step. Because many phones advertised as 5G are only NSA. They always prefer to attach to 4G. Don\'t use a phone bought from operator since those phones will be locked to specific PLMN values. You can check known mobile phones reported as working from srsRAN documentation. You should also add the SIM credentials to the 5GC subscriber list. This is well documented in the docs as well. \\nIf you want internet access from the phone you should set IP forwarding and masquerade. \\n```\\necho 1 > /proc/sys/net/ipv4/ip_forward\\niptables -t nat -A POSTROUTING -o <internet_nic> -j MASQUERADE\\n```\\n\\n## Running\\nNow it\'s time to take the phone out of airplane mode, try to attach to the cell. Every second we see some statistics on the console, like shown below. PDU session is created, UE is assigned an IP, and I can ping the UE from gNB. \\n![5G console](./5Gconsole.png) \\n\\nThe following metrics are provided in the console output:\\n\\nmetric          |  Definition\\n:-------------------------:|:-------------------------:\\npci | Physical Cell Identifier\\nrnti | Radio Network Temporary Identifier (UE identifier)\\ncqi | Channel Quality Indicator reported by the UE (1-15)\\nmcs | Modulation and coding scheme (0-28)\\nbrate | Bitrate (bits/sec)\\nok | Number of packets successfully sent\\nnok | Number of packets dropped\\n(%) | % of packets dropped\\npusch | PUSCH SINR (Signal-to-Interference-plus-Noise Ratio)\\nbsr | Buffer Status Report - data waiting to be transmitted as reported by the UE (bytes)\\n\\nMore to come on enhancing the speed of the connection."},{"id":"SatNOAA","metadata":{"permalink":"/blog/SatNOAA","source":"@site/blog/2023-12-05-NOAA/RTL-SDR_NOAA.md","title":"NOAA Satellite Image Reception with RTL-SDR","description":"In this post we are receving signals from space! We will use RTL-SDR Blog V3 with dipole antenna to receive from a NOAA satellite. We will utilize SDR++ and SatDump applications to process the data. N2YO is a good website with a lot of information on satellites. It gives us information on when to start receiving.","date":"2023-12-05T00:00:00.000Z","formattedDate":"December 5, 2023","tags":[{"label":"NOAA","permalink":"/blog/tags/noaa"},{"label":"SDR","permalink":"/blog/tags/sdr"},{"label":"SatDump","permalink":"/blog/tags/sat-dump"}],"readingTime":2.09,"hasTruncateMarker":true,"authors":[{"name":"Murat Sever","title":"Lab coordinator","url":"https://github.com/murat-sever","imageURL":"https://github.com/murat-sever.png","key":"murat"},{"name":"Ka\u011fan Aydemir","title":"Student","url":"https://github.com/KaganAydemir","imageURL":"https://github.com/KaganAydemir.png","key":"kagan"}],"frontMatter":{"slug":"SatNOAA","title":"NOAA Satellite Image Reception with RTL-SDR","authors":["murat","kagan"],"tags":["NOAA","SDR","SDR++","SatDump"]},"prevItem":{"title":"End-to-end 5G Network Creation","permalink":"/blog/5GsrsRAN"},"nextItem":{"title":"LoRa Signal Analysis of RAKWireless Earthquake Sensor Kit","permalink":"/blog/RAKRirelessLoRa"}},"content":"In this post we are receving signals from space! We will use RTL-SDR Blog V3 with dipole antenna to receive from a NOAA satellite. We will utilize [SDR++](https://www.sdrpp.org/) and [SatDump](https://github.com/SatDump/SatDump) applications to process the data. [N2YO](https://www.n2yo.com) is a good website with a lot of information on satellites. It gives us information on when to start receiving. \\n \\n\x3c!-- truncate --\x3e\\n## NOAA-19 Satellite\\nSatellite orbits are classified by their distance from the Earth\u2019s surface: **LEO** (low earth orbit, 160\u20132000 km), **MEO** (medium earth orbit, 2000\u201320000 km), and **GEO** (geostationary earth orbit, 35786 km). **NOAA** satellites are transmitting images 24/7, and the image you receive is a real-time image of your location. What is good with NOAA satellites is that there is no need for a official receiver or decoder, all you need is a cheap SDR and antennna. **NOAA-19** is the fifth in a series of five Polar-orbiting Operational Environmental Satellites (POES) with advanced microwave sounding instruments that provide imaging and sounding capabilities. It circles 850 km above Earth and completes a revolution every 102 minutes. \\n\\n## N2YO Website\\nNOAA satellites can be received several times a day. To track the satellites, we will refer to **N2YO** website since it contains all the information about passes of NOAA-19 satellite. It gives 10-day predictions for satellites, too. So, you can decide when to receive. \\n![10DayPredictions](./10DayPredictions.png)\\nIf you click on `Map and details` link, you can find the satellite on a map with pass beginning and ending times. \\n![PassTimes](./PassTimes.png)\\n\\n## V-Dipole Antenna Configuration\\nFor a proper antenna configuration, we followed [Martin Bernardi\'s guide](https://noaa-apt.mbernardi.com.ar/guide.html). We need a **V-dipole antenna**, consists of two elements of 52cm, spread apart by 120 degrees. \\n![v-dipole](./v-dipole.png)\\n\\n## Using SDR++ to Receive\\nWe are ready to receive the image signal! For this purpose we are using **SDR++** general purpose SDR application. We tune to **137.1MHz**, apply gain, select WBFM demodulation, set bandwidth around **50kHz**. Next we start recording a wav file on 20:46. We stop recording when the signal disappears. \\n![Reception](./Reception.png)\\n  \\n## Post-processing with SatDump\\nNOAA images are **upside down** 50% of the time, that\u2019s because the satellites sometimes go from south to north and sometimes fron north to south. The images are **black and white** and they do not have **map lines** (divisions between countries, states, or coastlines). If you want to see the images in color  with lines, we need a tool to post-process. We used SatDump to get attractive images. SatDump is a general purpose satellite data processing software. It also supports live decoding. \\n![FinalImage](./avhrr_apt_composite_capitals.png)"},{"id":"RAKRirelessLoRa","metadata":{"permalink":"/blog/RAKRirelessLoRa","source":"@site/blog/2023-11-19-RAKWireless-LoRa/direction-finding-with-KrakenSDR.md","title":"LoRa Signal Analysis of RAKWireless Earthquake Sensor Kit","description":"In this post we are analysing LoRa signal received from RAKWireless Earthquake Sensor Kit. RAKWireless generously gave us the kit, just after two big earthquakes hit the south east part of Turkey in February 6 this year. We are going to work together and collaborate with RAKWireless for using IoT to be well-prepared for natural disasters so that we can protect the people and the world.","date":"2023-11-19T00:00:00.000Z","formattedDate":"November 19, 2023","tags":[{"label":"LoRa","permalink":"/blog/tags/lo-ra"},{"label":"SDR","permalink":"/blog/tags/sdr"},{"label":"GNURadio","permalink":"/blog/tags/gnu-radio"}],"readingTime":2.39,"hasTruncateMarker":true,"authors":[{"name":"Murat Sever","title":"Lab coordinator","url":"https://github.com/murat-sever","imageURL":"https://github.com/murat-sever.png","key":"murat"},{"name":"Ka\u011fan Aydemir","title":"Student","url":"https://github.com/KaganAydemir","imageURL":"https://github.com/KaganAydemir.png","key":"kagan"}],"frontMatter":{"slug":"RAKRirelessLoRa","title":"LoRa Signal Analysis of RAKWireless Earthquake Sensor Kit","authors":["murat","kagan"],"tags":["LoRa","SDR","GNURadio"]},"prevItem":{"title":"NOAA Satellite Image Reception with RTL-SDR","permalink":"/blog/SatNOAA"},"nextItem":{"title":"Direction Finding with KrakenSDR - Vehicle","permalink":"/blog/KrakenSDR2"}},"content":"In this post we are analysing LoRa signal received from RAKWireless Earthquake Sensor Kit. RAKWireless generously gave us the kit, just after two big earthquakes hit the south east part of Turkey in February 6 this year. We are going to work together and collaborate with RAKWireless for using IoT to be well-prepared for natural disasters so that we can protect the people and the world. \\n\x3c!-- truncate --\x3e\\n## RAKWireless WisBlock Earthquake Sensor Solution Kit\\nThe [WisBlock Earthquake Sensor Kit](https://store.rakwireless.com/products/wisblock-earthquake-sensor-solution-kit-wisblock-rak10703-k-wisblock-rak10703?variant=42604958875846) uses the Omron D7S sensor chip, the world\u2019s smallest high precision seismic sensor. It provides seismic data it has as well an alarm output activated if a seismic intensity equivalent to 5 or higher on the JMA (Japan Meteorological Agency) Seismic Intensity Scale occurs. This gives the option to shut down sensitive machines and equipment in case of devastative eartquake. The D7S sensor detects as well if the horizontal position of the sensor changes, which points towards a collapse of the structure where the sensor was deployed. It can only detect earthquakes (it cannot predict them, I think there is no device in the world yet predicting eartquakes!), measure the peak levels of the seismic intensity and send the peak values over LoRaWAN or LoRa P2P to a gateway. \\n![TheKit](./kit.jpg)\\n\\n## LoRa\\nIf you are not familiar to **LoRa**, it is a short for simply \\"Long Range\\", and it is a wireless communication system popular for IoT. Nowadays we are seeing more and more LoRa enabled massive IoT deployments around from smart meter reading to waste management from tracking inventory to sensor measuring. LoRa\'s modulation scheme is based on chirp-based spread spectrum that can operate beneath the noise floor. The wireless standard sends data in small bursts with very little power. We are talking about signals over long distance using the amount of signal power used in a wireless garage door opener. So, operating on batteries does not become a problem. Having robustness, low power, and low rate makes it a perfect match technology for connecting the internet of things.\\n\\n## gr-lora\\nWe are using GNU Radio out-of-tree module called **gr-lora** to analyse the signal. The gr-lora project aims to provide a collection of GNU Radio blocks for receiving LoRa modulated radio messages using a Software Defined Radio (SDR). We are again utilizing RTL-SDR in our work. We ran one of the example flowgraphs that comes with the OOT module called `lora_receive_realtime.grc`. We set SF to 7 and capture frequency to 868.5 MHz. \\n![Realtime](./gr-lora.png)\\n\\nThe kit deploys an **nRF52840** microcontroller and uses [CayenneLPP](https://github.com/ElectronicCats/CayenneLPP) to encode data packets. We can see the outgoing packets with gr-lora. \\n![Packets](./packets.png) \\n\\nLoRa is a promising technology so many companies are adopting this technology to their solutions. We are appreciated that RAKWireless sponsored us on our IoT project. We hope to extend our IoT work leading up to a solution for earthquake preparedness."},{"id":"KrakenSDR2","metadata":{"permalink":"/blog/KrakenSDR2","source":"@site/blog/2023-11-06-DF-vehicle/direction-finding-with-KrakenSDR.md","title":"Direction Finding with KrakenSDR - Vehicle","description":"We continue publishing our DF results with KrakenSDR. Lastly, we have tested KrakenSDR installed on a vehicle. Our setup includes  5-channel KrakenSDR, a Raspberry Pi 4, and an Android phone. We also utilized KrakenSDR mobile application to get turn-by-turn navigation commands. We looked for a strong transmitter, and finally were able to locate it!","date":"2023-11-06T00:00:00.000Z","formattedDate":"November 6, 2023","tags":[{"label":"Direction Finding","permalink":"/blog/tags/direction-finding"},{"label":"DF","permalink":"/blog/tags/df"},{"label":"KrakenSDR","permalink":"/blog/tags/kraken-sdr"}],"readingTime":1.395,"hasTruncateMarker":true,"authors":[{"name":"Murat Sever","title":"Lab coordinator","url":"https://github.com/murat-sever","imageURL":"https://github.com/murat-sever.png","key":"murat"},{"name":"Ka\u011fan Aydemir","title":"Student","url":"https://github.com/KaganAydemir","imageURL":"https://github.com/KaganAydemir.png","key":"kagan"}],"frontMatter":{"slug":"KrakenSDR2","title":"Direction Finding with KrakenSDR - Vehicle","authors":["murat","kagan"],"tags":["Direction Finding","DF","KrakenSDR"]},"prevItem":{"title":"LoRa Signal Analysis of RAKWireless Earthquake Sensor Kit","permalink":"/blog/RAKRirelessLoRa"},"nextItem":{"title":"Direction Finding with KrakenSDR","permalink":"/blog/KrakenSDR1"}},"content":"We continue publishing our DF results with KrakenSDR. Lastly, we have tested KrakenSDR installed on a vehicle. Our setup includes  5-channel KrakenSDR, a Raspberry Pi 4, and an Android phone. We also utilized KrakenSDR mobile application to get turn-by-turn navigation commands. We looked for a strong transmitter, and finally were able to locate it! \\n\\n\x3c!-- truncate --\x3e\\nIn the [previous post](https://ele361l.github.io/blog/KrakenSDR1/), we used KrakenSDR in a fixed-point scenerio. This time we are using it in a vehicle. Locating a target transmitter requires an Android telephone. The app provided by KrakenSDR receives emitter bearings via Wi-Fi and provides us turn-by-turn navigation commands.  \\n![Android App running and showing directions](./AndroidApp.jpg)\\n\\n## Transmitter Selection\\nWe decided to locate a 2G base station around us. So we scanned GSM bands to choose the exact frequency. We used GNU Radio OOT module gr-gsm to check that signal belongs to a real base station. \\n\\n![gr-gsm](./gr-gsm.png)\\n\\nWe can check packets to see that this is a base station. \\n\\n![GSM packets](./GSMPackets.png)\\n\\n## Using Android App\\nWe used calculator for interelement spacing necessary for finding 944.4 MHz transmitter, and mounted our antennas on car\'s roof in uniform circular array configuration. Android app was able to locate the transmitter. \\n\\n![App showing location](./AppShowingLocation.png)\\n \\nWe also used HackRF and tuned to the GSM frequency to watch spectrum as we get closer to the transmitter. As we get closer, we get stronger signal as can be in the screenshots below. \\n\\n![Low signal](LowSignal.png)\\n\\n![Mid Signal](MidSignal.png)\\n\\n![High signal](HighSignal.png)   \\n\\n## Finally, found!\\nWe were able to find the transmitter using KrakenSDR. \\n\\n![Base station](./BaseStationPhoto.jpeg)\\n\\nAfter finding its location on map, at the beginning we were around 20 kilometers away from it in bird\'s-eye view. \\n\\n![Transmitter on map](./TransmitterOnMap.png)"},{"id":"KrakenSDR1","metadata":{"permalink":"/blog/KrakenSDR1","source":"@site/blog/2023-10-08-direction-finding-with-KrakenSDR/direction-finding-with-KrakenSDR.md","title":"Direction Finding with KrakenSDR","description":"One of the important and interesting applications of Software Define Radios (SDR) is radio direction finding, or simply DF. The most common use case for DF is physically locating an unknown radio emitter of interest. DF can be used to locate illegal transmissions, track assets, help rescue teams to find emergency beacons, etc. Recently, we acquired KrakenSDR for our research projects in our lab. There will be a series of posts about DF but in this post we will share our first DF results with you, which are really promising.","date":"2023-10-08T00:00:00.000Z","formattedDate":"October 8, 2023","tags":[{"label":"Direction Finding","permalink":"/blog/tags/direction-finding"},{"label":"DF","permalink":"/blog/tags/df"},{"label":"KrakenSDR","permalink":"/blog/tags/kraken-sdr"}],"readingTime":2.2,"hasTruncateMarker":true,"authors":[{"name":"Murat Sever","title":"Lab coordinator","url":"https://github.com/murat-sever","imageURL":"https://github.com/murat-sever.png","key":"murat"},{"name":"Ka\u011fan Aydemir","title":"Student","url":"https://github.com/KaganAydemir","imageURL":"https://github.com/KaganAydemir.png","key":"kagan"}],"frontMatter":{"slug":"KrakenSDR1","title":"Direction Finding with KrakenSDR","authors":["murat","kagan"],"tags":["Direction Finding","DF","KrakenSDR"]},"prevItem":{"title":"Direction Finding with KrakenSDR - Vehicle","permalink":"/blog/KrakenSDR2"},"nextItem":{"title":"Welcome","permalink":"/blog/welcome"}},"content":"One of the important and interesting applications of Software Define Radios (SDR) is radio direction finding, or simply DF. The most common use case for DF is physically locating an unknown radio emitter of interest. DF can be used to locate illegal transmissions, track assets, help rescue teams to find emergency beacons, etc. Recently, we acquired KrakenSDR for our research projects in our lab. There will be a series of posts about DF but in this post we will share our first DF results with you, which are really promising. \\n\\n\x3c!-- truncate --\x3e\\n[KrakenSDR](https://www.krakenrf.com/) is a 5-channel SDR that can be used for DF applications. It has some improved features compared to its precedessor, KerberosSDR. This post is about using KrakenSDR with a well-known Single Board Computer (SBC), RaspberryPi. \\n\\n## Installation\\nIn this series, we will use KrakenSDR in fixed-point use case. Later we will post on its use in a vehicle. \\n- We connected data port of KrakenSDR to USB3.0 USB port on the RaspberryPi. \\n- We powered both RaspberryPi and KrakenSDR with 5V/10A power adapter. \\n- All 5 channels are connected to the whip antennas. \\n![KrakenSDR Connections](./KrakenSDRBaglantilar.jpg)\\n\\n## Antenna Array Setup\\nWe referred to [antenna array spacing Excel sheet](https://github.com/krakenrf/krakensdr_docs/raw/main/antenna_array/Antenna_Array_Size_Calculator.xlsx) by KrakenSDR in order to correctly place antennas. Later, we printed array spacer. Graphic shows TOP DOWN View and ANT 0 points to the forward direction of the array. \\n![Array Spacing Sheet](./AntenKoordinatlari.png)\\n![Antenna Placement](./AntennaArray.jpg)\\n\\n## Testing Web Application in Stationary Mode\\nAfter writing right image to the SD-card, allow a few minutes for the RaspberryPi to bootup. Since we will not be using Android app at this time, we will leverage offline hotspot created by RaspberryPi. Using hotspot, we will connect to a web application to control the system. We set the frequency to 433MHz because we will be testing with a simple remote key used to open garage doors. This is an ISM-band device transmitting on-off signals (OOK). Here is the keyfob we are using for the tests. \\n![Keyfob](./keyfob.jpeg)\\n\\n![Web Application](./KrakenSDRWebInterface.png)\\n\\nThere are many different DF methods, however KrakenSDR uses what is called Correlative Interferometry. In this method phase difference is used to determine the direction of the signal of interest. When we press the button on the remote key, the spectrum page shows the live spectrum display and waterfall. \\n![Spectrum View](./SpectrumAllChannels.png)\\n\\nAfter setting Polar graph type, we tested DF system at specific angles and obtained accurate results as shown in below screenshots. \\n\\n0 Degree          |  90 Degrees\\n:-------------------------:|:-------------------------:\\n![](./0DereceTest.png) | ![](./90DereceTest.png)\\n\\n180 Degrees          |  270 Degrees\\n:-------------------------:|:-------------------------:\\n![](./180DereceTest.png) | ![](./270DereceTest.png)\\n\\nWe will be posting on DF with other tools and use cases. So, stay tuned for updates."},{"id":"welcome","metadata":{"permalink":"/blog/welcome","source":"@site/blog/2023-10-07-welcome/welcome.md","title":"Welcome","description":"Welcome to the ELE361L Communication Systems Laboratory Blog Page!","date":"2023-10-07T00:00:00.000Z","formattedDate":"October 7, 2023","tags":[{"label":"hello","permalink":"/blog/tags/hello"}],"readingTime":0.19,"hasTruncateMarker":false,"authors":[{"name":"Murat Sever","title":"Lab coordinator","url":"https://github.com/murat-sever","imageURL":"https://github.com/murat-sever.png","key":"murat"}],"frontMatter":{"slug":"welcome","title":"Welcome","authors":["murat"],"tags":["hello"]},"prevItem":{"title":"Direction Finding with KrakenSDR","permalink":"/blog/KrakenSDR1"}},"content":"Welcome to the ELE361L Communication Systems Laboratory Blog Page!\\n\\nThank you for your interest in ELE361L blog page. We will be giving information on our research projects here, so stay tuned and don\'t forget to visit us regularly."}]}')}}]);