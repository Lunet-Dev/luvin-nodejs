_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[29],{"+gp5":function(e,t,n){"use strict";var r=n("q1tI");t.a=function(e){var t=e.children,n=e.className;return Object(r.useEffect)((function(){document.body.className=n||""}),[]),t}},"/0+H":function(e,t,n){"use strict";t.__esModule=!0,t.isInAmpMode=c,t.useAmp=function(){return c(o.default.useContext(a.AmpStateContext))};var r,o=(r=n("q1tI"))&&r.__esModule?r:{default:r},a=n("lwAK");function c(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,r=e.hybrid,o=void 0!==r&&r,a=e.hasQuery,c=void 0!==a&&a;return n||o&&c}},"5fIB":function(e,t,n){var r=n("7eYB");e.exports=function(e){if(Array.isArray(e))return r(e)}},"8Kt/":function(e,t,n){"use strict";n("oI91");t.__esModule=!0,t.defaultHead=u,t.default=void 0;var r,o=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=s();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var a=r?Object.getOwnPropertyDescriptor(e,o):null;a&&(a.get||a.set)?Object.defineProperty(n,o,a):n[o]=e[o]}n.default=e,t&&t.set(e,n);return n}(n("q1tI")),a=(r=n("Xuae"))&&r.__esModule?r:{default:r},c=n("lwAK"),i=n("FYa8"),l=n("/0+H");function s(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return s=function(){return e},e}function u(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[o.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(o.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function m(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===o.default.Fragment?e.concat(o.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var d=["name","httpEquiv","charSet","itemProp"];function f(e,t){return e.reduce((function(e,t){var n=o.default.Children.toArray(t.props.children);return e.concat(n)}),[]).reduce(m,[]).reverse().concat(u(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,n=new Set,r={};return function(o){var a=!0;if(o.key&&"number"!==typeof o.key&&o.key.indexOf("$")>0){var c=o.key.slice(o.key.indexOf("$")+1);e.has(c)?a=!1:e.add(c)}switch(o.type){case"title":case"base":t.has(o.type)?a=!1:t.add(o.type);break;case"meta":for(var i=0,l=d.length;i<l;i++){var s=d[i];if(o.props.hasOwnProperty(s))if("charSet"===s)n.has(s)?a=!1:n.add(s);else{var u=o.props[s],m=r[s]||new Set;m.has(u)?a=!1:(m.add(u),r[s]=m)}}}return a}}()).reverse().map((function(e,t){var n=e.key||t;return o.default.cloneElement(e,{key:n})}))}function p(e){var t=e.children,n=(0,o.useContext)(c.AmpStateContext),r=(0,o.useContext)(i.HeadManagerContext);return o.default.createElement(a.default,{reduceComponentsToState:f,headManager:r,inAmpMode:(0,l.isInAmpMode)(n)},t)}p.rewind=function(){};var h=p;t.default=h},FYa8:function(e,t,n){"use strict";var r;t.__esModule=!0,t.HeadManagerContext=void 0;var o=((r=n("q1tI"))&&r.__esModule?r:{default:r}).default.createContext({});t.HeadManagerContext=o},Xuae:function(e,t,n){"use strict";var r=n("mPvQ"),o=n("/GRZ"),a=n("i2R6"),c=(n("qXWd"),n("48fX")),i=n("tCBg"),l=n("T0f4");function s(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=l(e);if(t){var o=l(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return i(this,n)}}t.__esModule=!0,t.default=void 0;var u=n("q1tI"),m=function(e){c(n,e);var t=s(n);function n(e){var a;return o(this,n),(a=t.call(this,e))._hasHeadManager=void 0,a.emitChange=function(){a._hasHeadManager&&a.props.headManager.updateHead(a.props.reduceComponentsToState(r(a.props.headManager.mountedInstances),a.props))},a._hasHeadManager=a.props.headManager&&a.props.headManager.mountedInstances,a}return a(n,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),n}(u.Component);t.default=m},YFqc:function(e,t,n){e.exports=n("cTJO")},cTJO:function(e,t,n){"use strict";var r=n("zoAU"),o=n("7KCV");t.__esModule=!0,t.default=void 0;var a,c=o(n("q1tI")),i=n("elyg"),l=n("nOHt"),s=new Map,u=window.IntersectionObserver,m={};var d=function(e,t){var n=a||(u?a=new u((function(e){e.forEach((function(e){if(s.has(e.target)){var t=s.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(a.unobserve(e.target),s.delete(e.target),t())}}))}),{rootMargin:"200px"}):void 0);return n?(n.observe(e),s.set(e,t),function(){try{n.unobserve(e)}catch(t){console.error(t)}s.delete(e)}):function(){}};function f(e,t,n,r){(0,i.isLocalURL)(t)&&(e.prefetch(t,n,r).catch((function(e){0})),m[t+"%"+n]=!0)}var p=function(e){var t=!1!==e.prefetch,n=c.default.useState(),o=r(n,2),a=o[0],s=o[1],p=(0,l.useRouter)(),h=p&&p.pathname||"/",v=c.default.useMemo((function(){var t=(0,i.resolveHref)(h,e.href,!0),n=r(t,2),o=n[0],a=n[1];return{href:o,as:e.as?(0,i.resolveHref)(h,e.as):a||o}}),[h,e.href,e.as]),g=v.href,y=v.as;c.default.useEffect((function(){if(t&&u&&a&&a.tagName&&(0,i.isLocalURL)(g)&&!m[g+"%"+y])return d(a,(function(){f(p,g,y)}))}),[t,a,g,y,p]);var w=e.children,_=e.replace,b=e.shallow,M=e.scroll;"string"===typeof w&&(w=c.default.createElement("a",null,w));var N=c.Children.only(w),x={ref:function(e){e&&s(e),N&&"object"===typeof N&&N.ref&&("function"===typeof N.ref?N.ref(e):"object"===typeof N.ref&&(N.ref.current=e))},onClick:function(e){N.props&&"function"===typeof N.props.onClick&&N.props.onClick(e),e.defaultPrevented||function(e,t,n,r,o,a,c){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,i.isLocalURL)(n))&&(e.preventDefault(),null==c&&(c=r.indexOf("#")<0),t[o?"replace":"push"](n,r,{shallow:a}).then((function(e){e&&c&&(window.scrollTo(0,0),document.body.focus())})))}(e,p,g,y,_,b,M)}};return t&&(x.onMouseEnter=function(e){(0,i.isLocalURL)(g)&&(N.props&&"function"===typeof N.props.onMouseEnter&&N.props.onMouseEnter(e),f(p,g,y,{priority:!0}))}),(e.passHref||"a"===N.type&&!("href"in N.props))&&(x.href=(0,i.addBasePath)(y)),c.default.cloneElement(N,x)};t.default=p},kG2m:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},lwAK:function(e,t,n){"use strict";var r;t.__esModule=!0,t.AmpStateContext=void 0;var o=((r=n("q1tI"))&&r.__esModule?r:{default:r}).default.createContext({});t.AmpStateContext=o},mPvQ:function(e,t,n){var r=n("5fIB"),o=n("rlHP"),a=n("KckH"),c=n("kG2m");e.exports=function(e){return r(e)||o(e)||a(e)||c()}},o96S:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/shop",function(){return n("vg2q")}])},oI91:function(e,t){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},rlHP:function(e,t){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},vg2q:function(e,t,n){"use strict";n.r(t);var r=n("q1tI"),o=n.n(r),a=n("YFqc"),c=n.n(a),i=n("8Kt/"),l=n.n(i),s=n("/MKj"),u=n("+gp5"),m=o.a.createElement,d=function(e){return e.categories};t.default=function(e){var t=Object(s.c)(d).categories;return m(u.a,{className:"archive post-type-archive post-type-archive-product logged-in wp-custom-logo theme-hello-elementor woocommerce woocommerce-page woocommerce-js elementor-default elementor-template-full-width elementor-kit-76 elementor-page-474"},m(l.a,null,m("title",null,"S\u1ea3n ph\u1ea9m - Luvin"),m("meta",{name:"description",content:"T\u1ea5t c\u1ea3 c\xe1c s\u1ea3n ph\u1ea9m r\u01b0\u1ee3u vang \u0111\u01b0\u1ee3c l\xean men t\u1ef1 nhi\xean v\xe0 c\xf3 n\u1ed3ng \u0111\u1ed9 c\u1ed3n d\u01b0\u1edbi 15 \u0111\u1ed9"}),m("meta",{property:"og:type",content:"website"}),m("meta",{property:"og:title",content:"S\u1ea3n ph\u1ea9m - Luvin"}),m("meta",{property:"og:url",content:"https://luvin.com.vn"}),m("meta",{property:"og:site_name",content:"Luvin"}),m("meta",{property:"og:image",content:"https://luvin.com.vn/images/banner.jpg"}),m("meta",{property:"og:image:width",content:"1200"}),m("meta",{property:"og:image:height",content:"630"})),m("div",{className:"elementor elementor-474 elementor-location-archive product"},m("div",{className:"elementor-section-wrap"},m("section",{className:"elementor-section elementor-top-section elementor-element elementor-element-48a6451 elementor-section-boxed elementor-section-height-default elementor-section-height-default"},m("div",{className:"elementor-container elementor-column-gap-default"},m("div",{className:"elementor-row"},m("div",{className:"elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-c250088"},m("div",{className:"elementor-column-wrap elementor-element-populated"},m("div",{className:"elementor-widget-wrap"},m("div",{className:"elementor-element elementor-element-6b983bc elementor-widget elementor-widget-heading"},m("div",{className:"elementor-widget-container"},m("h2",{className:"elementor-heading-title elementor-size-default"},"S\u1ea3n ph\u1ea9m c\u1ee7a ch\xfang t\xf4i"))))))))),m("section",{className:"elementor-section elementor-top-section elementor-element elementor-element-96dbac7 home-card elementor-section-boxed elementor-section-height-default elementor-section-height-default"},m("div",{className:"elementor-container elementor-column-gap-default"},m("div",{className:"elementor-row"},t.map((function(e){var t=e.ident,n=e.slug,r=e.name,o=e.description,a=e.image;return m("div",{className:"elementor-column elementor-col-25 elementor-top-column elementor-element elementor-element-79c9583",key:t},m("div",{className:"elementor-column-wrap elementor-element-populated"},m("div",{className:"elementor-widget-wrap"},m("div",{className:"elementor-element elementor-element-c15fca5 elementor-widget elementor-widget-image"},m("div",{className:"elementor-widget-container"},m("div",{className:"elementor-image"},m(c.a,{href:"/[category]",as:"/".concat(n)},m("a",null,m("img",{width:"400",height:"420",src:a,className:"attachment-large size-large",alt:"",sizes:"(max-width: 400px) 100vw, 400px"})))))),m("div",{className:"elementor-element elementor-element-c4d896f elementor-cta--valign-middle home-cta-box elementor-cta--skin-classNameic elementor-animated-content elementor-bg-transform elementor-bg-transform-zoom-in elementor-widget elementor-widget-call-to-action"},m("div",{className:"elementor-widget-container"},m("div",{className:"elementor-cta"},m("div",{className:"elementor-cta__content"},m("h2",{className:"elementor-cta__title elementor-cta__content-item elementor-content-item"},r),m("div",{className:"elementor-cta__description elementor-cta__content-item elementor-content-item"},o),m("div",{className:"elementor-cta__button-wrapper elementor-cta__content-item elementor-content-item"},m(c.a,{href:"/[category]",as:"/".concat(n)},m("a",{className:"elementor-cta__button elementor-button elementor-size-sm"},"Xem th\xeam"))))))))))}))))))))}}},[["o96S",0,1,2,3,4]]]);