"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[845],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>b});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=d(n),m=r,b=u["".concat(s,".").concat(m)]||u[m]||c[m]||o;return n?a.createElement(b,i(i({ref:t},p),{},{components:n})):a.createElement(b,i({ref:t},p))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:r,i[1]=l;for(var d=2;d<o;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9967:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var a=n(7462),r=(n(7294),n(3905));const o={sidebar_position:6},i="Course Outline",l={unversionedId:"course-info/outline",id:"course-info/outline",title:"Course Outline",description:"Course consists of many lab sessions and each lab is built on Jupyter Notebook.",source:"@site/docs/course-info/outline.md",sourceDirName:"course-info",slug:"/course-info/outline",permalink:"/docs/course-info/outline",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/course-info/outline.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"Some important points to remember",permalink:"/docs/course-info/important-points"},next:{title:"Schedule",permalink:"/docs/course-info/schedule"}},s={},d=[],p={toc:d},u="wrapper";function c(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"course-outline"},"Course Outline"),(0,r.kt)("p",null,"Course consists of many lab sessions and each lab is built on Jupyter Notebook."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Lab Title"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Lab Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"td"},"Lab DSP")),(0,r.kt)("td",{parentName:"tr",align:"left"},"GNU Radio will be introduced. It will be leveraged to generate mono/stereo sound, make filtering on generated sound. Sound card will be utilized to learn fundamental DSP concepts like sampling rate, aliasing, filtering (FIR, cutoff frequency, transient range, taps), decimation.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"td"},"Lab SDR")),(0,r.kt)("td",{parentName:"tr",align:"left"},"SDR hardware used throughout the labs is introduced: RTL-SDR. General purpose SDR application gqrx is explored to receive samples from RTL-SDR. Spectrum monitoring (live and waterfall), demodulation is illustrated with gqrx.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"td"},"Lab Python")),(0,r.kt)("td",{parentName:"tr",align:"left"},"In this lab we will take a look at important Python libraries like numpy, scipy we'll see how to use them inside Jupyter Notebook interactive environment.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"td"},"Lab AM")),(0,r.kt)("td",{parentName:"tr",align:"left"},"IQ record containing airband (108-137 MHz) signal will be used to demodulate Amplitude Modulated signal. IQ file formats will be discussed, too.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"td"},"Lab NBFM")),(0,r.kt)("td",{parentName:"tr",align:"left"},"NBFM is commonly used in handheld communicaiton equipment. After FM repeater concept is presented, example FM repeater IQ record is used to show Narrow Band FM modulation.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"td"},"Lab WBFM")),(0,r.kt)("td",{parentName:"tr",align:"left"},"WBFM signal may contain more than one signal: mono, stereo, sub-channels, HD, and a data channel. Flow-graphs are created to demodulate WBFM signals in GNU Radio. Mono/stereo sound, single/multi channel, real-time demodulation examples will be presented.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"td"},"Lab Digital")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Digital signal transmitted from simple keyfob device will be analyzed. We will look at tools specifically written to analyze and decode digital signals.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"td"},"Lab ADSB")),(0,r.kt)("td",{parentName:"tr",align:"left"},"ADSB signals generated by aircrafts will be inspected. Planes will emit tail number, flight, altitude, direction and speed information through ADS-B signals.")))),(0,r.kt)("p",null,"As you complete the labs, you will be able to: "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Understand core concepts in communication systems like sampling theorem, bandwidth, frequency bands, modulation types"),(0,r.kt)("li",{parentName:"ul"},"Use SDR to explore signals around"),(0,r.kt)("li",{parentName:"ul"},"Have an idea behind general purpose SDR applications"),(0,r.kt)("li",{parentName:"ul"},"Know how IQ data is stored and parsed"),(0,r.kt)("li",{parentName:"ul"},"Apply signal processing in Python in order to demodulate both analog and digital signals"),(0,r.kt)("li",{parentName:"ul"},"Gather knowledge on how communication systems work by experiments. Interesting signals from airband communication, FM repeaters, wideband FM broadcast, garage door openers will be analyzed and decoded.")))}c.isMDXComponent=!0}}]);