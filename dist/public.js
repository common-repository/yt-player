!function(){"use strict";var e={646:function(e,t,r){var n=r(533);t.s=n.createRoot,n.hydrateRoot},533:function(e){e.exports=ReactDOM}},t={};function r(n){var o=t[n];if(void 0!==o)return o.exports;var a=t[n]={exports:{}};return e[n](a,a.exports,r),a.exports}r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,{a:t}),t},r.d=function(e,t){for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},function(){var e;r.g.importScripts&&(e=r.g.location+"");var t=r.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var n=t.getElementsByTagName("script");if(n.length)for(var o=n.length-1;o>-1&&!e;)e=n[o--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),r.p=e}(),function(){var e=r(646),t=function(e){var t=null;try{t=JSON.parse(e)}catch(e){console.warn(e.message)}return t};function n(e){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(e)}var o=function e(t){var r=t||{};return"object"===n(r)&&Object.keys(r).map((function(t){"object"===n(r[t])?r[t]=e(r[t]):r[t]=function(e){if("true"===e)return!0;if("false"===e)return!1;return e}(r[t])})),r};var a=React,i=r.n(a),c=function(e){var t=e.attributes,r=t.uniqueId,n=t.rowGap,o=t.columnGap,a=t.videos;return i().createElement("style",{dangerouslySetInnerHTML:{__html:"\n    #".concat(r," .timeline {\n        column-gap: ").concat(o,";\n    }\n    #").concat(r," .timeline .videoBox {\n        margin-bottom: ").concat(n,"\n    }\n    ").concat(a.map((function(e,t){var n,o,a;return"#".concat(r," .timeline.video").concat(t+1," .videoBox #timelinePlayer {\n            border-radius: ").concat(e.borderRadius,";\n            border-width: ").concat(null===(n=e.border)||void 0===n?void 0:n.width,";\n            border-style: ").concat(null===(o=e.border)||void 0===o?void 0:o.style,";\n            border-color: ").concat(null===(a=e.border)||void 0===a?void 0:a.color,";\n        }")})).join(""),"\n  ")}})},l=r.p+"src/assets/images/videoDot.webp";function u(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,a,i,c=[],l=!0,u=!1;try{if(a=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;l=!1}else for(;!(l=(n=a.call(r)).done)&&(c.push(n.value),c.length!==t);l=!0);}catch(e){u=!0,o=e}finally{try{if(!l&&null!=r.return&&(i=r.return(),Object(i)!==i))return}finally{if(u)throw o}}return c}}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return s(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return s(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function s(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var d=function(e){var t=e.attributes,r=e.className,n=e.updateVideo,o=e.children,i=e.VideoBox,s=t.uniqueId,d=t.align,f=t.className,m=t.videos,p=(0,a.useRef)(),y=u((0,a.useState)(null),2),v=y[0],b=y[1];return(0,a.useEffect)((function(){v&&(window.players=v,v.forEach((function(e){return e.destroy()}))),b(Plyr.setup("#timelinePlayer",{clickToPlay:!1}))}),[m.length]),React.createElement(React.Fragment,null,React.createElement(c,{attributes:t}),React.createElement("div",{id:s,className:"".concat(d," ").concat(f," ").concat(r)},React.createElement("div",{className:"timelineWrapper",ref:p},m.map((function(e,t){return React.createElement("div",{className:"timeline video".concat(t+1," ").concat("right"===e.videoPosition?"videoRight":""),key:"video".concat(t)},React.createElement("div",{className:"videoBox"},React.createElement("div",{id:"timelinePlayer"},React.createElement("iframe",{src:"".concat(e.videoSource,"?origin=").concat(window.location.origin,"&amp;iv_load_policy=3&amp;modestbranding=1&amp;playsinline=1&amp;showinfo=0&amp;rel=0&amp;enablejsapi=1"),allowfullscreen:!0,allowtransparency:!0,allow:"autoplay"}),e.videoThumb&&React.createElement("div",{class:"plyr__poster",style:{backgroundSize:"cover",backgroundImage:"url(".concat(e.videoThumb,")")}}))),React.createElement("div",{className:"videoDot"},React.createElement("div",{className:"videoBorder"}),React.createElement("img",{src:l,className:"videoDot",alt:"videoDot"})),React.createElement(i,{index:t,updateVideo:n,heading:e.heading,content:e.content}),o)})))))};function f(e){return f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},f(e)}function m(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?m(Object(r),!0).forEach((function(t){y(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):m(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function y(e,t,r){return(t=function(e){var t=function(e,t){if("object"!==f(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!==f(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===f(t)?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}document.addEventListener("DOMContentLoaded",(function(){document.querySelectorAll(".ytPlayer").forEach((function(e){var r,n,a=e.querySelector("#player"),i=o(t(null==e||null===(r=e.dataset)||void 0===r?void 0:r.preset)||{}).options,c=o(t(null==e||null===(n=e.dataset)||void 0===n?void 0:n.attributes)||{}).preload;if(e.removeAttribute("data-preset"),e.removeAttribute("data-attributes"),!i)return!1;i.controls||(i.controls=[],i.clickToPlay=!0);var l=new Plyr(a,p(p({},i),{},{preload:c}));l.on("pause",(function(){var e=this.querySelector(".plyr__control--overlaid");e&&(e.style.display="none",setTimeout((function(){e.style.display="block"}),200))})),window.playerInstance=l})),document.querySelectorAll(".timelineBlock").forEach((function(r){var n=t(r.dataset.attributes);r.removeAttribute("data-attributes");(0,e.s)(r).render(React.createElement(d,{attributes:n,VideoBox:function(e){var t=e.heading,r=e.content;return React.createElement("div",{className:"videoText"},React.createElement("div",{className:"content"},React.createElement("h3",{dangerouslySetInnerHTML:{__html:t}}),React.createElement("p",{dangerouslySetInnerHTML:{__html:r}})))}}))}))}))}()}();
//# sourceMappingURL=public.js.map