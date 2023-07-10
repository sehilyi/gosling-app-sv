"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1057],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>d});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=n.createContext({}),l=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},m="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=l(a),u=r,d=m["".concat(c,".").concat(u)]||m[u]||f[u]||o;return a?n.createElement(d,i(i({ref:t},p),{},{components:a})):n.createElement(d,i({ref:t},p))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[m]="string"==typeof e?e:r,i[1]=s;for(var l=2;l<o;l++)i[l]=a[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},4020:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>f,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var n=a(7462),r=(a(7294),a(3905));const o={title:"Biallelic ATM Mutations",sidebar_position:5},i="Cancers with Biallelic ATM Mutations",s={unversionedId:"use-cases/atm-mutations",id:"use-cases/atm-mutations",title:"Biallelic ATM Mutations",description:"The ataxia-telangiectasia mutated (ATM) gene is essential in the detection and signaling to repair DNA double-strand breaks. Carriers of germline mutations in ATM are predisposed to cancer and ATM is also often mutated somatically. In light of new cancer therapies targeting cells with ATM loss, we hypothesized that ATM loss would result in a mutational signature apparent in cancer genomes.",source:"@site/docs/use-cases/atm-mutations.md",sourceDirName:"use-cases",slug:"/use-cases/atm-mutations",permalink:"/docs/use-cases/atm-mutations",draft:!1,editUrl:"https://github.com/hms-dbmi/chromoscope/tree/master/docs/docs/use-cases/atm-mutations.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{title:"Biallelic ATM Mutations",sidebar_position:5},sidebar:"docsSidebar",previous:{title:"Co-amplifications",permalink:"/docs/use-cases/co-amplifications"},next:{title:"CCNE1 Amplifications",permalink:"/docs/use-cases/ccne1"}},c={},l=[],p={toc:l},m="wrapper";function f(e){let{components:t,...a}=e;return(0,r.kt)(m,(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"cancers-with-biallelic-atm-mutations"},"Cancers with Biallelic ATM Mutations"),(0,r.kt)("p",null,"The ataxia-telangiectasia mutated (ATM) gene is essential in the detection and signaling to repair DNA double-strand breaks.",(0,r.kt)("sup",{parentName:"p",id:"fnref-1"},(0,r.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1"))," Carriers of germline mutations in ATM are predisposed to cancer",(0,r.kt)("sup",{parentName:"p",id:"fnref-2"},(0,r.kt)("a",{parentName:"sup",href:"#fn-2",className:"footnote-ref"},"2")),(0,r.kt)("sup",{parentName:"p",id:"fnref-3"},(0,r.kt)("a",{parentName:"sup",href:"#fn-3",className:"footnote-ref"},"3"))," and ATM is also often mutated somatically. In light of new cancer therapies targeting cells with ATM loss, we hypothesized that ATM loss would result in a mutational signature apparent in cancer genomes."),(0,r.kt)("p",null,"In order to evaluate the evidence, we prepared a Chromoscope configuration containing 21 cancers with pathogenic mutations in ATM, as annotated by the PCAWG consortium ",(0,r.kt)("sup",{parentName:"p",id:"fnref-4"},(0,r.kt)("a",{parentName:"sup",href:"#fn-4",className:"footnote-ref"},"4")),". In this data, cancer genomes with ATM loss display a subtle but non-characteristic pattern of chromosomal instability in this tumor group. Larger cohort sizes and stricter annotation of pathogenic mutations leading to complete ATM loss might be needed."),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"You can see visualization of 21 cancer genomes with putative ATM loss at:"),(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("a",{parentName:"p",href:"https://chromoscope.bio/?showSamples=true&external=https://somatic-browser-test.s3.amazonaws.com/atm_bi/configs/atm_bi.all.config.json"},"https://chromoscope.bio/?showSamples=true&external=https://somatic-browser-test.s3.amazonaws.com/atm_bi/configs/atm_bi.all.config.json"))),(0,r.kt)("div",{className:"footnotes"},(0,r.kt)("hr",{parentName:"div"}),(0,r.kt)("ol",{parentName:"div"},(0,r.kt)("li",{parentName:"ol",id:"fn-1"},"Pitter, Kenneth L et al. \u201cPathogenic ATM Mutations in Cancer and a Genetic Basis for Radiotherapeutic Efficacy.\u201d Journal of the National Cancer Institute vol. 113,3 (2021):",(0,r.kt)("a",{parentName:"li",href:"#fnref-1",className:"footnote-backref"},"\u21a9")),(0,r.kt)("li",{parentName:"ol",id:"fn-2"},"Swift, M et al. \u201cIncidence of cancer in 161 families affected by ataxia-telangiectasia.\u201d The New England journal of medicine vol. 325,26 (1991): 1831-6. ",(0,r.kt)("a",{parentName:"li",href:"#fnref-2",className:"footnote-backref"},"\u21a9")),(0,r.kt)("li",{parentName:"ol",id:"fn-3"},"Weigelt, Britta et al. \u201cThe Landscape of Somatic Genetic Alterations in Breast Cancers From ATM Germline Mutation Carriers.\u201d Journal of the National Cancer Institute vol. 110,9 (2018): 1030-1034.",(0,r.kt)("a",{parentName:"li",href:"#fnref-3",className:"footnote-backref"},"\u21a9")),(0,r.kt)("li",{parentName:"ol",id:"fn-4"},"ICGC/TCGA Pan-Cancer Analysis of Whole Genomes Consortium. \u201cPan-cancer analysis of whole genomes.\u201d Nature vol. 578,7793 (2020): 82-93. doi:10.1038/s41586-020-1969-6",(0,r.kt)("a",{parentName:"li",href:"#fnref-4",className:"footnote-backref"},"\u21a9")))))}f.isMDXComponent=!0}}]);