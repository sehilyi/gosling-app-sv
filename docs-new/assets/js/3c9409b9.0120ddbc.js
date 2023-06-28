"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8583],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>g});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(n),m=o,g=d["".concat(l,".").concat(m)]||d[m]||u[m]||a;return n?r.createElement(g,i(i({ref:t},p),{},{components:n})):r.createElement(g,i({ref:t},p))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:o,i[1]=s;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4452:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var r=n(7462),o=(n(7294),n(3905));const a={sidebar_position:6},i="Export",s={unversionedId:"visualizations/export",id:"visualizations/export",title:"Export",description:"PNG",source:"@site/docs/visualizations/export.md",sourceDirName:"visualizations",slug:"/visualizations/export",permalink:"/docs-new/docs/visualizations/export",draft:!1,editUrl:"https://github.com/hms-dbmi/chromoscope/tree/main/docs/docs/visualizations/export.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"docsSidebar",previous:{title:"Navigation",permalink:"/docs-new/docs/visualizations/navigation"},next:{title:"Loading Data",permalink:"/docs-new/docs/category/loading-data"}},l={},c=[{value:"PNG",id:"png",level:3},{value:"HTML",id:"html",level:3},{value:"JSON (Gosling Spec)",id:"json-gosling-spec",level:3},{value:"Session \ud83d\udd17",id:"session-",level:3}],p={toc:c},d="wrapper";function u(e){let{components:t,...a}=e;return(0,o.kt)(d,(0,r.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"export"},"Export"),(0,o.kt)("h3",{id:"png"},"PNG"),(0,o.kt)("p",null,"Chromoscope enables the export of a PNG image file of the entire visualization."),(0,o.kt)("h3",{id:"html"},"HTML"),(0,o.kt)("p",null,"Chromoscope also allows you to export an interactive webpage that contains the entire Chromoscope visualization as a single HTML file."),(0,o.kt)("h3",{id:"json-gosling-spec"},"JSON (Gosling Spec)"),(0,o.kt)("p",null,"To enable further fine-grained customization (e.g., changing colors or sizes), the entire interactive visualization can be exported as a Gosling JSON specification. This JSON values can be used directly on the Gosling Online Editor (",(0,o.kt)("a",{parentName:"p",href:"https://gosling.js.org"},"https://gosling.js.org"),")."),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},(0,o.kt)("img",{alt:"HTML exported",src:n(6288).Z,width:"3104",height:"2784"})),(0,o.kt)("th",{parentName:"tr",align:null},(0,o.kt)("img",{alt:"Gosling Editor",src:n(6358).Z,width:"3104",height:"2784"})))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"Figure.")," The exported HTML file on a browser."),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"Figure.")," The exported JSON value added to an public Gosling editor.")))),(0,o.kt)("h3",{id:"session-"},"Session \ud83d\udd17"),(0,o.kt)("p",null,"For the effective and efficient communication of findings made with Chromoscope, the tool generates a shareable URL that encodes the current visualization state, including the loaded datahub, selected sample, and genomic locations most recently viewed."),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"To understand the individual parameters of the exported URL, please refer to the ",(0,o.kt)("a",{parentName:"p",href:"/url-parameters.md"},"corresponding section"),".")))}u.isMDXComponent=!0},6358:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/gosling-editor-a0acb72649670cf052a9f08e42de8939.png"},6288:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/html-export-924440b83df02afc4805797f3a74fef6.png"}}]);