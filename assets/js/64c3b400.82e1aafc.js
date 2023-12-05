"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9018],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),p=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(r),g=n,f=u["".concat(s,".").concat(g)]||u[g]||m[g]||o;return r?a.createElement(f,i(i({ref:t},c),{},{components:r})):a.createElement(f,i({ref:t},c))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=g;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:n,i[1]=l;for(var p=2;p<o;p++)i[p]=r[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}g.displayName="MDXCreateElement"},4006:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var a=r(7462),n=(r(7294),r(3905));const o={slug:"SatNOAA",title:"NOAA Satellite Image Reception with RTL-SDR",authors:["murat","kagan"],tags:["NOAA","SDR","SDR++","SatDump"]},i=void 0,l={permalink:"/blog/SatNOAA",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/2023-12-05-NOAA/RTL-SDR_NOAA.md",source:"@site/blog/2023-12-05-NOAA/RTL-SDR_NOAA.md",title:"NOAA Satellite Image Reception with RTL-SDR",description:"In this post we are receving signals from space! We will use RTL-SDR Blog V3 with dipole antenna to receive from a NOAA satellite. We will utilize SDR++ and SatDump applications to process the data. N2YO is a good website with a lot of information on satellites. It gives us information on when to start receiving.",date:"2023-12-05T00:00:00.000Z",formattedDate:"December 5, 2023",tags:[{label:"NOAA",permalink:"/blog/tags/noaa"},{label:"SDR",permalink:"/blog/tags/sdr"},{label:"SatDump",permalink:"/blog/tags/sat-dump"}],readingTime:2.09,hasTruncateMarker:!0,authors:[{name:"Murat Sever",title:"Lab coordinator",url:"https://github.com/murat-sever",imageURL:"https://github.com/murat-sever.png",key:"murat"},{name:"Ka\u011fan Aydemir",title:"Student",url:"https://github.com/KaganAydemir",imageURL:"https://github.com/KaganAydemir.png",key:"kagan"}],frontMatter:{slug:"SatNOAA",title:"NOAA Satellite Image Reception with RTL-SDR",authors:["murat","kagan"],tags:["NOAA","SDR","SDR++","SatDump"]},nextItem:{title:"LoRa Signal Analysis of RAKWireless Earthquake Sensor Kit",permalink:"/blog/RAKRirelessLoRa"}},s={authorsImageUrls:[void 0,void 0]},p=[],c={toc:p},u="wrapper";function m(e){let{components:t,...r}=e;return(0,n.kt)(u,(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"In this post we are receving signals from space! We will use RTL-SDR Blog V3 with dipole antenna to receive from a NOAA satellite. We will utilize ",(0,n.kt)("a",{parentName:"p",href:"https://www.sdrpp.org/"},"SDR++")," and ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/SatDump/SatDump"},"SatDump")," applications to process the data. ",(0,n.kt)("a",{parentName:"p",href:"https://www.n2yo.com"},"N2YO")," is a good website with a lot of information on satellites. It gives us information on when to start receiving."))}m.isMDXComponent=!0}}]);