(()=>{var e={473:e=>{e.exports=function(e,t,r){e.addEventListener("click",(()=>{t.classList.toggle("nav-active")})),r.forEach((e=>{e.addEventListener("click",(function(){r.forEach((e=>e.classList.remove("nav-item-active"))),this.classList.add("nav-item-active"),t.classList.toggle("nav-active")}))}))}},91:e=>{"use strict";e.exports=function(e,t){return t||(t={}),e?(e=String(e.__esModule?e.default:e),t.hash&&(e+=t.hash),t.maybeNeedQuotes&&/[\t\n\f\r "'=<>`]/.test(e)?'"'.concat(e,'"'):e):e}},507:(e,t,r)=>{"use strict";e.exports=r.p+"assets/hero.jpg"},166:(e,t,r)=>{"use strict";e.exports=r.p+"assets/job.jpg"},120:(e,t,r)=>{"use strict";e.exports=r.p+"assets/university.jpg"}},t={};function r(s){var o=t[s];if(void 0!==o)return o.exports;var n=t[s]={exports:{}};return e[s](n,n.exports,r),n.exports}r.m=e,r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var s in t)r.o(t,s)&&!r.o(e,s)&&Object.defineProperty(e,s,{enumerable:!0,get:t[s]})},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;r.g.importScripts&&(e=r.g.location+"");var t=r.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var s=t.getElementsByTagName("script");if(s.length)for(var o=s.length-1;o>-1&&!e;)e=s[o--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),r.p=e})(),r.b=document.baseURI||self.location.href,(()=>{"use strict";var e=r(91),t=r.n(e),s=new URL(r(507),r.b);t()(s);var o=new URL(r(166),r.b);t()(o);var n=new URL(r(120),r.b);t()(n);var a=new URL(r(507),r.b);t()(a),r(473)(document.querySelector(".toggler"),document.querySelector(".nav-links"),document.querySelectorAll(".nav-item"))})()})();