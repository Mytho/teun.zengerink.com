(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[3],{"/0+H":function(e,t,n){"use strict";t.__esModule=!0,t.isInAmpMode=c,t.useAmp=function(){return c(a.default.useContext(o.AmpStateContext))};var r,a=(r=n("q1tI"))&&r.__esModule?r:{default:r},o=n("lwAK");function c(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,r=e.hybrid,a=void 0!==r&&r,o=e.hasQuery,c=void 0!==o&&o;return n||a&&c}},"20a2":function(e,t,n){e.exports=n("nOHt")},"4XLq":function(e,t,n){"use strict";var r=n("nKUr"),a=n("g4pe"),o=n.n(a),c=n("q1tI"),i=n.n(c),u=n("GLf7"),s=n.n(u),l=function(){return Object(r.jsx)("div",{className:s.a.loader})},f=n("YFqc"),d=n.n(f),p=n("20a2"),h=n("AgPb"),v=n.n(h),m=[{name:"Instagram",url:"https://instagram.com/t.zengerink/",image:"/img/instagram.jpg"}],b=function(e){var t=e.onClick;return Object(r.jsxs)("div",{"data-testid":"hamburger",className:v.a.hamburger,onClick:t,children:[Object(r.jsx)("span",{className:v.a.line}),Object(r.jsx)("span",{className:v.a.line}),Object(r.jsx)("span",{className:v.a.line})]})},j=function(e){var t=e.project,n=e.onClick,a=Object(p.useRouter)().asPath.includes(t.slug);return Object(r.jsx)("li",{className:a?v.a.active:"",children:Object(r.jsx)(d.a,{href:"/work/".concat(t.slug,"/").concat(t.photos[0].key),children:Object(r.jsx)("a",{onClick:n,children:t.title})})},t.slug)},g=function(e){var t=e.accounts;return Object(r.jsx)("span",{className:v.a.socials,children:t.map((function(e){return Object(r.jsx)("a",{href:e.url,children:Object(r.jsx)("img",{src:e.image,alt:e.name})},e.name)}))})},y=function(e){var t=e.pageTitle,n=e.projects,a=Object(c.useState)(!1),o=a[0],i=a[1];return Object(r.jsxs)("aside",{"data-testid":"menu",className:"".concat(v.a.menu).concat(o?" ".concat(v.a.open):""),children:[Object(r.jsx)("a",{href:"/",children:Object(r.jsx)("h1",{children:t})}),Object(r.jsx)(b,{onClick:function(){return i(!o)}}),Object(r.jsxs)("nav",{className:v.a.navigation,children:[Object(r.jsx)("h2",{children:"Projects"}),Object(r.jsx)("ul",{children:null===n||void 0===n?void 0:n.map((function(e){return Object(r.jsx)(j,{project:e,onClick:function(){return i(!1)}},e.slug)}))}),Object(r.jsx)(g,{accounts:m})]})]})},O=n("9kNL"),_=n.n(O),x="Teun Zengerink";t.a=function(e){var t=e.title,n=e.projects,a=e.children,c=i.a.useMemo((function(){return t?[x,t].join(" - "):x}),[t]);return Object(r.jsxs)("div",{children:[Object(r.jsxs)(o.a,{children:[Object(r.jsx)("meta",{charSet:"utf-8"}),Object(r.jsx)("meta",{name:"description",content:c}),Object(r.jsx)("title",{children:c}),Object(r.jsx)("link",{rel:"icon",href:"/favicon.ico"}),Object(r.jsx)("link",{href:"https://fonts.googleapis.com/css2?family=Roboto+Mono:ital,wght@0,300;0,500;1,300&display=swap",rel:"stylesheet"})]}),Object(r.jsx)(y,{pageTitle:x,projects:n}),Object(r.jsx)("main",{className:_.a.main,children:null!==n&&void 0!==n&&n.length?a:Object(r.jsx)(l,{})})]})}},"8Kt/":function(e,t,n){"use strict";var r=n("lSNA");function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}t.__esModule=!0,t.defaultHead=d,t.default=void 0;var o,c=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=f();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if(Object.prototype.hasOwnProperty.call(e,a)){var o=r?Object.getOwnPropertyDescriptor(e,a):null;o&&(o.get||o.set)?Object.defineProperty(n,a,o):n[a]=e[a]}n.default=e,t&&t.set(e,n);return n}(n("q1tI")),i=(o=n("Xuae"))&&o.__esModule?o:{default:o},u=n("lwAK"),s=n("FYa8"),l=n("/0+H");function f(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return f=function(){return e},e}function d(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[c.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(c.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function p(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===c.default.Fragment?e.concat(c.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var h=["name","httpEquiv","charSet","itemProp"];function v(e,t){return e.reduce((function(e,t){var n=c.default.Children.toArray(t.props.children);return e.concat(n)}),[]).reduce(p,[]).reverse().concat(d(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,n=new Set,r={};return function(a){var o=!0,c=!1;if(a.key&&"number"!==typeof a.key&&a.key.indexOf("$")>0){c=!0;var i=a.key.slice(a.key.indexOf("$")+1);e.has(i)?o=!1:e.add(i)}switch(a.type){case"title":case"base":t.has(a.type)?o=!1:t.add(a.type);break;case"meta":for(var u=0,s=h.length;u<s;u++){var l=h[u];if(a.props.hasOwnProperty(l))if("charSet"===l)n.has(l)?o=!1:n.add(l);else{var f=a.props[l],d=r[l]||new Set;"name"===l&&c||!d.has(f)?(d.add(f),r[l]=d):o=!1}}}return o}}()).reverse().map((function(e,n){var o=e.key||n;if(!t.inAmpMode&&"link"===e.type&&e.props.href&&["https://fonts.googleapis.com/css"].some((function(t){return e.props.href.startsWith(t)}))){var i=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},e.props||{});return i["data-href"]=i.href,i.href=void 0,c.default.cloneElement(e,i)}return c.default.cloneElement(e,{key:o})}))}function m(e){var t=e.children,n=(0,c.useContext)(u.AmpStateContext),r=(0,c.useContext)(s.HeadManagerContext);return c.default.createElement(i.default,{reduceComponentsToState:v,headManager:r,inAmpMode:(0,l.isInAmpMode)(n)},t)}m.rewind=function(){};var b=m;t.default=b},"9kNL":function(e,t,n){e.exports={main:"Layout_main__3m1yK"}},AgPb:function(e,t,n){e.exports={menu:"Menu_menu__1B1b9",navigation:"Menu_navigation__1iu-l",active:"Menu_active__UiFnz",hamburger:"Menu_hamburger__1aMU4",line:"Menu_line__1tkix",socials:"Menu_socials__3HaaC",open:"Menu_open__2aqbE"}},Bnag:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},EbDI:function(e,t){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},GLf7:function(e,t,n){e.exports={loader:"Loader_loader__3l13D",load1:"Loader_load1__11yRO"}},Ijbi:function(e,t,n){var r=n("WkPL");e.exports=function(e){if(Array.isArray(e))return r(e)}},RIqP:function(e,t,n){var r=n("Ijbi"),a=n("EbDI"),o=n("ZhPi"),c=n("Bnag");e.exports=function(e){return r(e)||a(e)||o(e)||c()}},Xuae:function(e,t,n){"use strict";var r=n("RIqP"),a=n("lwsE"),o=n("W8MJ"),c=(n("PJYZ"),n("7W2i")),i=n("a1gu"),u=n("Nsbk");function s(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=u(e);if(t){var a=u(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return i(this,n)}}t.__esModule=!0,t.default=void 0;var l=n("q1tI"),f=function(e){c(n,e);var t=s(n);function n(e){var o;return a(this,n),(o=t.call(this,e))._hasHeadManager=void 0,o.emitChange=function(){o._hasHeadManager&&o.props.headManager.updateHead(o.props.reduceComponentsToState(r(o.props.headManager.mountedInstances),o.props))},o._hasHeadManager=o.props.headManager&&o.props.headManager.mountedInstances,o}return o(n,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),n}(l.Component);t.default=f},YFqc:function(e,t,n){e.exports=n("cTJO")},cTJO:function(e,t,n){"use strict";var r=n("J4zp"),a=n("284h");t.__esModule=!0,t.default=void 0;var o=a(n("q1tI")),c=n("elyg"),i=n("nOHt"),u=n("vNVm"),s={};function l(e,t,n,r){if(e&&(0,c.isLocalURL)(t)){e.prefetch(t,n,r).catch((function(e){0}));var a=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;s[t+"%"+n+(a?"%"+a:"")]=!0}}var f=function(e){var t=!1!==e.prefetch,n=(0,i.useRouter)(),a=n&&n.pathname||"/",f=o.default.useMemo((function(){var t=(0,c.resolveHref)(a,e.href,!0),n=r(t,2),o=n[0],i=n[1];return{href:o,as:e.as?(0,c.resolveHref)(a,e.as):i||o}}),[a,e.href,e.as]),d=f.href,p=f.as,h=e.children,v=e.replace,m=e.shallow,b=e.scroll,j=e.locale;"string"===typeof h&&(h=o.default.createElement("a",null,h));var g=o.Children.only(h),y=g&&"object"===typeof g&&g.ref,O=(0,u.useIntersection)({rootMargin:"200px"}),_=r(O,2),x=_[0],M=_[1],k=o.default.useCallback((function(e){x(e),y&&("function"===typeof y?y(e):"object"===typeof y&&(y.current=e))}),[y,x]);(0,o.useEffect)((function(){var e=M&&t&&(0,c.isLocalURL)(d),r="undefined"!==typeof j?j:n&&n.locale,a=s[d+"%"+p+(r?"%"+r:"")];e&&!a&&l(n,d,p,{locale:r})}),[p,d,M,j,t,n]);var w={ref:k,onClick:function(e){g.props&&"function"===typeof g.props.onClick&&g.props.onClick(e),e.defaultPrevented||function(e,t,n,r,a,o,i,u){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,c.isLocalURL)(n))&&(e.preventDefault(),null==i&&(i=r.indexOf("#")<0),t[a?"replace":"push"](n,r,{shallow:o,locale:u,scroll:i}))}(e,n,d,p,v,m,b,j)},onMouseEnter:function(e){(0,c.isLocalURL)(d)&&(g.props&&"function"===typeof g.props.onMouseEnter&&g.props.onMouseEnter(e),l(n,d,p,{priority:!0}))}};if(e.passHref||"a"===g.type&&!("href"in g.props)){var C="undefined"!==typeof j?j:n&&n.locale,I=n&&n.isLocaleDomain&&(0,c.getDomainLocale)(p,C,n&&n.locales,n&&n.domainLocales);w.href=I||(0,c.addBasePath)((0,c.addLocale)(p,C,n&&n.defaultLocale))}return o.default.cloneElement(g,w)};t.default=f},g4pe:function(e,t,n){e.exports=n("8Kt/")},lSNA:function(e,t){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},lwAK:function(e,t,n){"use strict";var r;t.__esModule=!0,t.AmpStateContext=void 0;var a=((r=n("q1tI"))&&r.__esModule?r:{default:r}).default.createContext({});t.AmpStateContext=a},vNVm:function(e,t,n){"use strict";var r=n("J4zp");t.__esModule=!0,t.useIntersection=function(e){var t=e.rootMargin,n=e.disabled||!c,u=(0,a.useRef)(),s=(0,a.useState)(!1),l=r(s,2),f=l[0],d=l[1],p=(0,a.useCallback)((function(e){u.current&&(u.current(),u.current=void 0),n||f||e&&e.tagName&&(u.current=function(e,t,n){var r=function(e){var t=e.rootMargin||"",n=i.get(t);if(n)return n;var r=new Map,a=new IntersectionObserver((function(e){e.forEach((function(e){var t=r.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return i.set(t,n={id:t,observer:a,elements:r}),n}(n),a=r.id,o=r.observer,c=r.elements;return c.set(e,t),o.observe(e),function(){c.delete(e),o.unobserve(e),0===c.size&&(o.disconnect(),i.delete(a))}}(e,(function(e){return e&&d(e)}),{rootMargin:t}))}),[n,t,f]);return(0,a.useEffect)((function(){if(!c&&!f){var e=(0,o.requestIdleCallback)((function(){return d(!0)}));return function(){return(0,o.cancelIdleCallback)(e)}}}),[f]),[p,f]};var a=n("q1tI"),o=n("0G5g"),c="undefined"!==typeof IntersectionObserver;var i=new Map}}]);