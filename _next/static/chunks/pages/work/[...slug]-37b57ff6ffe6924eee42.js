(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[528],{5575:function(n,e,t){"use strict";t.d(e,{Z:function(){return k}});var o=t(5893),i=t(9008),s=t(7294),c=t(2026),r=t.n(c),a=function(){return(0,o.jsx)("div",{className:r().loader})},u=t(1664),l=t(1163),d=t(1015),h=t.n(d),f=[{name:"Instagram",url:"https://instagram.com/t.zengerink/",image:"/img/instagram.jpg"}],v=function(n){var e=n.onClick;return(0,o.jsxs)("div",{"data-testid":"hamburger",className:h().hamburger,onClick:e,children:[(0,o.jsx)("span",{className:h().line}),(0,o.jsx)("span",{className:h().line}),(0,o.jsx)("span",{className:h().line})]})},p=function(n){var e=n.project,t=n.onClick,i=(0,l.useRouter)().asPath.includes(e.slug);return(0,o.jsx)("li",{className:i?h().active:"",children:(0,o.jsx)(u.default,{href:"/work/".concat(e.slug,"/").concat(e.photos[0].key),children:(0,o.jsx)("a",{onClick:t,children:e.title})})},e.slug)},_=function(n){var e=n.accounts;return(0,o.jsx)("span",{className:h().socials,children:e.map((function(n){return(0,o.jsx)("a",{href:n.url,children:(0,o.jsx)("img",{src:n.image,alt:n.name})},n.name)}))})},m=function(n){var e=n.pageTitle,t=n.projects,i=(0,s.useState)(!1),c=i[0],r=i[1];return(0,o.jsxs)("aside",{"data-testid":"menu",className:"".concat(h().menu).concat(c?" ".concat(h().open):""),children:[(0,o.jsx)("a",{href:"/",children:(0,o.jsx)("h1",{children:e})}),(0,o.jsx)(v,{onClick:function(){return r(!c)}}),(0,o.jsxs)("nav",{className:h().navigation,children:[(0,o.jsx)("h2",{children:"Projects"}),(0,o.jsx)("ul",{children:null===t||void 0===t?void 0:t.map((function(n){return(0,o.jsx)(p,{project:n,onClick:function(){return r(!1)}},n.slug)}))}),(0,o.jsx)(_,{accounts:f})]})]})},j=t(1306),x=t.n(j),g="Teun Zengerink",k=function(n){var e=n.title,t=n.projects,c=n.children,r=s.useMemo((function(){return e?[g,e].join(" - "):g}),[e]);return(0,o.jsxs)("div",{children:[(0,o.jsxs)(i.default,{children:[(0,o.jsx)("meta",{charSet:"utf-8"}),(0,o.jsx)("meta",{name:"description",content:r}),(0,o.jsx)("title",{children:r}),(0,o.jsx)("link",{rel:"icon",href:"/favicon.ico"}),(0,o.jsx)("link",{href:"https://fonts.googleapis.com/css2?family=Roboto+Mono:ital,wght@0,300;0,500;1,300&display=swap",rel:"stylesheet"})]}),(0,o.jsx)(m,{pageTitle:g,projects:t}),(0,o.jsx)("main",{className:x().main,children:null!==t&&void 0!==t&&t.length?c:(0,o.jsx)(a,{})})]})}},7331:function(n,e,t){"use strict";t.d(e,{Z:function(){return u}});var o,i=t(5893),s=t(4699);t(7757),t(2349),t(6470),t(1304),t(7180),t(4155);!function(n){n[n.Mobile=768]="Mobile",n[n.Desktop=1280]="Desktop"}(o||(o={}));var c=[o.Mobile,o.Desktop],r=t(958),a=t.n(r),u=function(n){var e,t=n.className,r=n.photo,u=n.alt,l=c.slice(0,-1),d=c.slice(-1)[0],h=function(n){return r.exports.find((function(e){return e.width===n}))};return(0,i.jsx)("img",{className:"".concat(a().photo).concat(t?" ".concat(t):""),alt:u,src:h(o.Desktop).url,sizes:"".concat(l.map((function(n){return"(max-width: ".concat(n-1,"px) ").concat(n,"px")})).join(", "),", ").concat(d,"px"),srcSet:(e=c.map((function(n){return[h(n).url,n]})),e.map((function(n){var e=(0,s.Z)(n,2),t=e[0],o=e[1];return"".concat(t," ").concat(o,"w")})).join(", "))})}},1857:function(n,e,t){"use strict";t.r(e),t.d(e,{__N_SSG:function(){return _},default:function(){return m}});var o,i=t(5893),s=t(1163),c=t(7294),r=t(5575),a=t(8456),u=t.n(a),l=t(7329),d=function(){return!1},h=t(7331),f=t(5226),v=t.n(f);!function(n){n.LEFT="ArrowLeft",n.RIGHT="ArrowRight"}(o||(o={}));var p=function(n){var e,t=n.project,r=function(n){var e,t,o;if(null===n||void 0===n||null===(e=n.photos)||void 0===e||!e.length)return{activeKey:void 0,previous:d,next:d};var i=(0,s.useRouter)(),c=null!==i&&void 0!==i&&null!==(t=i.query)&&void 0!==t&&t.slug?null===(o=i.query)||void 0===o?void 0:o.slug[1]:void 0,r=n.photos.findIndex((function(n){return n.key===c})),a=n.photos[0],u=(0,l.Z)(n.photos).pop(),h=n.photos[r+1],f=n.photos[r-1],v=c===u.key,p=c===a.key,_=function(e){return i.push("".concat("/work/".concat(n.slug),"/",e.key))};return{activeKey:c,previous:function(){return _(p?u:f)},next:function(){return _(v?a:h)}}}(t),a=r.activeKey,f=r.previous,p=r.next;(0,c.useEffect)((function(){var n=function(n){switch(n.key){case o.LEFT:f();break;case o.RIGHT:p()}},e="keyup";return window.addEventListener(e,n),function(){return window.removeEventListener(e,n)}}));return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)("div",{className:v().slideshow,onTouchStart:function(n){return function(n){var t=n.touches;e=t[0].clientX}(n)},onTouchMove:function(n){return function(n){var t=n.touches;if(e){var o=e-t[0].clientX;o<0&&f(),o>0&&p(),e=null}}(n)},children:[(0,i.jsx)("div",{"data-testid":"left-side",className:v().previous,onClick:function(){return f()}}),(0,i.jsx)("div",{"data-testid":"right-side",className:v().next,onClick:function(){return p()}}),null===t||void 0===t?void 0:t.photos.map((function(n){return(0,i.jsx)(h.Z,{className:"".concat(v().slide).concat(n.key===a?" ".concat(v().active):""),photo:n,alt:"".concat(null===t||void 0===t?void 0:t.title," - ").concat(n.key)},"".concat(t.slug,"--slide-").concat(n.key))}))]}),null!==t&&void 0!==t&&t.statement?(0,i.jsxs)("div",{className:v().statement,children:[(0,i.jsx)("h2",{children:"Statement"}),(0,i.jsxs)("div",{className:v().text,children:[(0,i.jsx)("h3",{children:t.title}),(0,i.jsx)(u(),{children:t.statement})]})]}):null]})},_=!0,m=function(n){var e=n.projects,t=(0,s.useRouter)(),o=null===e||void 0===e?void 0:e.find((function(n){return t.asPath.includes(n.slug)}));return(0,i.jsx)(r.Z,{title:null===o||void 0===o?void 0:o.title,projects:e,children:(0,i.jsx)(p,{project:o})})}},5160:function(n,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/work/[...slug]",function(){return t(1857)}])},1306:function(n){n.exports={main:"Layout_main__3m1yK"}},2026:function(n){n.exports={loader:"Loader_loader__3l13D",load1:"Loader_load1__11yRO"}},1015:function(n){n.exports={menu:"Menu_menu__1B1b9",navigation:"Menu_navigation__1iu-l",active:"Menu_active__UiFnz",hamburger:"Menu_hamburger__1aMU4",line:"Menu_line__1tkix",socials:"Menu_socials__3HaaC",open:"Menu_open__2aqbE"}},958:function(n){n.exports={photo:"Photo_photo__2iE-_"}},5226:function(n){n.exports={slideshow:"ProjectSlideshow_slideshow__1OfDn",slide:"ProjectSlideshow_slide__VUMbX",previous:"ProjectSlideshow_previous__3vScr",next:"ProjectSlideshow_next__28pmu",active:"ProjectSlideshow_active__1hFRd",statement:"ProjectSlideshow_statement__yLsps",text:"ProjectSlideshow_text__3IENl"}},2349:function(){}},function(n){n.O(0,[774,996,531,936,888,179],(function(){return e=5160,n(n.s=e);var e}));var e=n.O();_N_E=e}]);