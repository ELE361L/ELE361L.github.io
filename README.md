# ELE361L @ TOBB ETU

Welcome to the webpage for **ELE361L** course at [TOBB ETU](https://www.etu.edu.tr). Here you'll find general information about the course. 

ELE361L Course will address Digital Signal Processing (DSP) for Radio Frequency (RF) from practical point of view. For this reason SDR device and software radio toolkit GNU Radio will be introduced at the beginning of the course. Some fundamental DSP concepts will be covered but not in detail. This course will accompany the main DSP/communication courses. So it is important that student take preliminary courses before. Python will be used as programming language throughout the course. 

## Some important points to remember
* Assignments are managed by **GitHub Classroom**
* Every user must have an account on **GitHub**
* Lab activities contain
  * **PreLab Activities** that must be performed before the lab 
  * **InLab Activities** that are performed during the lab
* Labs are based on **JupyterLab** interactive environment
* Always bring your laptop and headphones to class
* Make installments required for the course into your laptop ASAP

## Course Content
Course consists of many lab sessions and each lab is built on Jupyter Notebook.

| Lab Title             | Lab Description |
:-------------------- | :----------- |
| **Lab DSP** | GNU Radio will be introduced. It will be leveraged to generate mono/stereo sound, make filtering on generated sound. Sound card will be utilized to learn fundamental DSP concepts like sampling rate, aliasing, filtering (FIR, cutoff frequency, transient range, taps), decimation. |
| **Lab SDR** | SDR hardware used throughout the labs is introduced: RTL-SDR. General purpose SDR application gqrx is explored to receive samples from RTL-SDR. Spectrum monitoring (live and waterfall), demodulation is illustrated with gqrx.   |
| **Lab Python** | In this lab we will take a look at important Python libraries like numpy, scipy we'll see how to use them inside Jupyter Notebook interactive environment.  |
| **Lab AM** | IQ record containing airband (108-137 MHz) signal will be used to demodulate Amplitude Modulated signal. IQ file formats will be discussed, too. |
| **Lab NBFM** | NBFM is commonly used in handheld communicaiton equipment. After FM repeater concept is presented, example FM repeater IQ record is used to show Narrow Band FM modulation.  |
| **Lab WBFM** | WBFM signal may contain more than one signal: mono, stereo, sub-channels, HD, and a data channel. Flow-graphs are created to demodulate WBFM signals in GNU Radio. Mono/stereo sound, single/multi channel, real-time demodulation examples will be presented.  |
| **Lab Digital** | Digital signal transmitted from simple keyfob device will be analyzed. We will look at tools specifically written to analyze and decode digital signals. |
| **Lab ADSB** | ADSB signals generated by aircrafts will be inspected. Planes will emit tail number, flight, altitude, direction and speed information through ADS-B signals. |

As you complete the labs, you will be able to: 

* Understand core concepts in communication systems like sampling theorem, bandwidth, frequency bands, modulation types
* Use SDR to explore signals around
* Have an idea behind general purpose SDR applications
* Know how IQ data is stored and parsed
* Apply signal processing in Python in order to demodulate both analog and digital signals
* Gather knowledge on how communication systems work by experiments. Interesting signals from airband communication, FM repeaters, wideband FM broadcast, garage door openers will be analyzed and decoded.

## Schedule
You can find rough schedule for the course below. 
| Week             | Activities |
:-------------------- | :----------- |
| **Week-1** | Introduction to Communication Systems and SDR Concepts <br /> Discussion of SDR Toolchains and Programming Options <br /> Overview of using Git/GitHub/GitHub Classroom |
| **Week-2** | GNU Radio Fundamentals <br /> Using GNU Radio and GRC <br /> Creating and Running Flowgraphs <br /> Using GNU Radio from Python <br /> Hands-on demo of filtering, and sound card processing showcasing Nyquist Theorem, Aliasing <br /> Overview of JupyterLab Environment |
| **Week-3** | Hands-on DSP with GNU Radio <br /> Examples of Decimation, Interpolation, Stereo Sound and DTMF Tone Generation |
| **Week-4** | Python with JupyterLab, Numpy and SciPy libraries <br /> Frequency Domain Analysis with Python |
| **Week-5** | Connecting to and Communicating with RTL-SDR <br /> Hands-on with SDR# and Osmocom Software Suite (rtl_test, rtl_sdr) |
| **Week-6** | Discussion of IQ Record Types (RTL-SDR, USRP) <br /> AM Demodulation Examples with HF Band and Airband Records |
| **Week-7** | NBFM Demodulation with VHF Band Record <br /> Overview of FM Repeaters and CTCSS |
| **Week-8** | Wide Band FM Demodulation Example with Broadcast FM Record <br /> Overview of WBFM Components: Mono/Stereo, Pilot tones, RDS, Subchannels |
| **Week-9** | Introduction to Digital Communications <br /> QPSK Simulation in GNU Radio <br /> Hands-on Demo of Analyzing Various Digital Signals with SDR# |
| **Week-10** | Overview of ADS-B: Preamble, Manchester encoding, Thresholding <br /> ADS-B Decoding Example |
