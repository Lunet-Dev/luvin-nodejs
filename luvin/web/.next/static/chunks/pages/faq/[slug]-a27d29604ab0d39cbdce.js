_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[19],{"+gp5":function(e,t,n){"use strict";var r=n("q1tI");t.a=function(e){var t=e.children,n=e.className;return Object(r.useEffect)((function(){document.body.className=n||""}),[]),t}},"/0+H":function(e,t,n){"use strict";t.__esModule=!0,t.isInAmpMode=l,t.useAmp=function(){return l(o.default.useContext(a.AmpStateContext))};var r,o=(r=n("q1tI"))&&r.__esModule?r:{default:r},a=n("lwAK");function l(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,r=e.hybrid,o=void 0!==r&&r,a=e.hasQuery,l=void 0!==a&&a;return n||o&&l}},"5fIB":function(e,t,n){var r=n("7eYB");e.exports=function(e){if(Array.isArray(e))return r(e)}},"8Kt/":function(e,t,n){"use strict";n("oI91");t.__esModule=!0,t.defaultHead=u,t.default=void 0;var r,o=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=s();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var a=r?Object.getOwnPropertyDescriptor(e,o):null;a&&(a.get||a.set)?Object.defineProperty(n,o,a):n[o]=e[o]}n.default=e,t&&t.set(e,n);return n}(n("q1tI")),a=(r=n("Xuae"))&&r.__esModule?r:{default:r},l=n("lwAK"),i=n("FYa8"),c=n("/0+H");function s(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return s=function(){return e},e}function u(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[o.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(o.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function m(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===o.default.Fragment?e.concat(o.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var d=["name","httpEquiv","charSet","itemProp"];function f(e,t){return e.reduce((function(e,t){var n=o.default.Children.toArray(t.props.children);return e.concat(n)}),[]).reduce(m,[]).reverse().concat(u(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,n=new Set,r={};return function(o){var a=!0;if(o.key&&"number"!==typeof o.key&&o.key.indexOf("$")>0){var l=o.key.slice(o.key.indexOf("$")+1);e.has(l)?a=!1:e.add(l)}switch(o.type){case"title":case"base":t.has(o.type)?a=!1:t.add(o.type);break;case"meta":for(var i=0,c=d.length;i<c;i++){var s=d[i];if(o.props.hasOwnProperty(s))if("charSet"===s)n.has(s)?a=!1:n.add(s);else{var u=o.props[s],m=r[s]||new Set;m.has(u)?a=!1:(m.add(u),r[s]=m)}}}return a}}()).reverse().map((function(e,t){var n=e.key||t;return o.default.cloneElement(e,{key:n})}))}function p(e){var t=e.children,n=(0,o.useContext)(l.AmpStateContext),r=(0,o.useContext)(i.HeadManagerContext);return o.default.createElement(a.default,{reduceComponentsToState:f,headManager:r,inAmpMode:(0,c.isInAmpMode)(n)},t)}p.rewind=function(){};var h=p;t.default=h},"9EOU":function(e,t,n){"use strict";var r=n("q1tI"),o=n.n(r).a.createElement;t.a=function(e){return Object(r.useEffect)((function(){return document.body.style.overflow="hidden",function(){document.body.style.overflow=""}}),[]),o("div",{className:"custom-loading"},o("img",{src:"/images/arrows.png",alt:"loading"}))}},FYa8:function(e,t,n){"use strict";var r;t.__esModule=!0,t.HeadManagerContext=void 0;var o=((r=n("q1tI"))&&r.__esModule?r:{default:r}).default.createContext({});t.HeadManagerContext=o},"HaE+":function(e,t,n){"use strict";function r(e,t,n,r,o,a,l){try{var i=e[a](l),c=i.value}catch(s){return void n(s)}i.done?t(c):Promise.resolve(c).then(r,o)}function o(e){return function(){var t=this,n=arguments;return new Promise((function(o,a){var l=e.apply(t,n);function i(e){r(l,o,a,i,c,"next",e)}function c(e){r(l,o,a,i,c,"throw",e)}i(void 0)}))}}n.d(t,"a",(function(){return o}))},"Lh/H":function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"c",(function(){return o})),n.d(t,"b",(function(){return a})),n.d(t,"d",(function(){return l}));var r="FAQ/GET_FAQ",o="FAQ/GET_FAQ_SUCCESS",a="FAQ/GET_FAQ_ERROR",l="FAQ/RESET_STATE"},VNVN:function(e,t,n){"use strict";n.d(t,"a",(function(){return o})),n.d(t,"c",(function(){return a})),n.d(t,"b",(function(){return l})),n.d(t,"d",(function(){return i}));var r=n("Lh/H"),o=function(e){return{type:r.a,faqSlug:e}},a=function(e){return{type:r.c,post:e}},l=function(e){return{type:r.b,errorMessage:e}},i=function(){return{type:r.d}}},Xuae:function(e,t,n){"use strict";var r=n("mPvQ"),o=n("/GRZ"),a=n("i2R6"),l=(n("qXWd"),n("48fX")),i=n("tCBg"),c=n("T0f4");function s(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=c(e);if(t){var o=c(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return i(this,n)}}t.__esModule=!0,t.default=void 0;var u=n("q1tI"),m=function(e){l(n,e);var t=s(n);function n(e){var a;return o(this,n),(a=t.call(this,e))._hasHeadManager=void 0,a.emitChange=function(){a._hasHeadManager&&a.props.headManager.updateHead(a.props.reduceComponentsToState(r(a.props.headManager.mountedInstances),a.props))},a._hasHeadManager=a.props.headManager&&a.props.headManager.mountedInstances,a}return a(n,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),n}(u.Component);t.default=m},kG2m:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},lwAK:function(e,t,n){"use strict";var r;t.__esModule=!0,t.AmpStateContext=void 0;var o=((r=n("q1tI"))&&r.__esModule?r:{default:r}).default.createContext({});t.AmpStateContext=o},mPvQ:function(e,t,n){var r=n("5fIB"),o=n("rlHP"),a=n("KckH"),l=n("kG2m");e.exports=function(e){return r(e)||o(e)||a(e)||l()}},o0o1:function(e,t,n){e.exports=n("ls82")},oI91:function(e,t){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},pXu0:function(e,t,n){"use strict";n.r(t);var r=n("o0o1"),o=n.n(r),a=n("HaE+"),l=n("q1tI"),i=n.n(l),c=n("/MKj"),s=n("8Kt/"),u=n.n(s),m=n("+gp5"),d=n("9EOU"),f=n("VNVN"),p=i.a.createElement,h=function(e){return e.faq};function v(e){var t=e.faqSlug,n=Object(c.b)(),r=Object(c.c)(h),o=r.post,a=void 0===o?{}:o,i=r.loading,s=(r.fetched,r.errorMessage,Object(l.useMemo)((function(){return a}),[a])),v=s.title,g=s.content,y=(s.slug,s.type,s.image);s.video;return Object(l.useEffect)((function(){return a._id||n(Object(f.a)(t)),function(){n(Object(f.d)())}}),[]),p(m.a,{className:"post-template-default single single-post postid-603 single-format-standard wp-custom-logo theme-hello-elementor woocommerce-js elementor-default elementor-kit-76 elementor-page-592"},p(u.a,null,p("title",null,v," - Luvin"),p("meta",{name:"description",content:"T\u1ea5t c\u1ea3 c\xe1c s\u1ea3n ph\u1ea9m r\u01b0\u1ee3u vang \u0111\u01b0\u1ee3c l\xean men t\u1ef1 nhi\xean v\xe0 c\xf3 n\u1ed3ng \u0111\u1ed9 c\u1ed3n d\u01b0\u1edbi 15 \u0111\u1ed9"}),p("meta",{property:"og:type",content:"website"}),p("meta",{property:"og:title",content:"".concat(v," - Luvin")}),p("meta",{property:"og:url",content:"https://luvin.com.vn"}),p("meta",{property:"og:site_name",content:"Luvin"}),p("meta",{property:"og:image",content:y}),p("meta",{property:"og:image:width",content:"1200"}),p("meta",{property:"og:image:height",content:"630"})),i&&p(d.a,null),p("div",{className:"elementor elementor-592 elementor-location-single post-603 post type-post status-publish format-standard has-post-thumbnail hentry category-su-kien"},p("div",{className:"elementor-section-wrap"},p("section",{className:"elementor-section elementor-top-section elementor-element elementor-element-a974a59 elementor-section-boxed elementor-section-height-default elementor-section-height-default"},p("div",{className:"elementor-container elementor-column-gap-default"},p("div",{className:"elementor-row"},p("div",{className:"elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-c5d87eb"},p("div",{className:"elementor-column-wrap elementor-element-populated"},p("div",{className:"elementor-widget-wrap"},p("div",{className:"elementor-element elementor-element-73c18c3 elementor-widget elementor-widget-theme-post-title elementor-page-title elementor-widget-heading",style:{display:"block"}},p("div",{className:"elementor-widget-container"},p("h1",{className:"elementor-heading-title elementor-size-default"},v))))))))),p("section",{className:"elementor-section elementor-top-section elementor-element elementor-element-dfa280d elementor-section-boxed elementor-section-height-default elementor-section-height-default"},p("div",{className:"elementor-container elementor-column-gap-default"},p("div",{className:"elementor-row"},p("div",{className:"elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-b0a1783"},p("div",{className:"elementor-column-wrap elementor-element-populated"},p("div",{className:"elementor-widget-wrap"},p("div",{className:"elementor-element elementor-element-61a23a1 elementor-widget elementor-widget-theme-post-content"},p("div",{className:"elementor-widget-container",dangerouslySetInnerHTML:{__html:g}})))))))),p("section",{className:"elementor-section elementor-top-section elementor-element elementor-element-4d0c553 elementor-section-boxed elementor-section-height-default elementor-section-height-default"},p("div",{className:"elementor-container elementor-column-gap-default"},p("div",{className:"elementor-row"},p("div",{className:"elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-8445a15"},p("div",{className:"elementor-column-wrap elementor-element-populated"},p("div",{className:"elementor-widget-wrap"},p("div",{className:"elementor-element elementor-element-f2be387 elementor-share-buttons--skin-framed elementor-share-buttons--shape-circle elementor-share-buttons--align-center elementor-share-buttons--view-icon-text elementor-grid-0 elementor-share-buttons--color-official elementor-widget elementor-widget-share-buttons"},p("div",{className:"elementor-widget-container"},p("div",{className:"elementor-grid"},p("div",{className:"elementor-grid-item"},p("div",{className:"elementor-share-btn elementor-share-btn_facebook"},p("span",{className:"elementor-share-btn__icon"},p("i",{className:"fab fa-facebook","aria-hidden":"true"}),p("span",{className:"elementor-screen-only"},"Share on facebook")),p("div",{className:"elementor-share-btn__text"},p("span",{className:"elementor-share-btn__title"},"Facebook")))),p("div",{className:"elementor-grid-item"},p("div",{className:"elementor-share-btn elementor-share-btn_twitter"},p("span",{className:"elementor-share-btn__icon"},p("i",{className:"fab fa-twitter","aria-hidden":"true"}),p("span",{className:"elementor-screen-only"},"Share on twitter")),p("div",{className:"elementor-share-btn__text"},p("span",{className:"elementor-share-btn__title"},"Twitter"))))))))))))))))}v.getInitialProps=function(){var e=Object(a.a)(o.a.mark((function e(t){var n,r,a,l,i;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.ctx,r=n.store,a=n.req,n.accessToken,l=n.query,i=l.slug,a&&r.dispatch(Object(f.a)(i)),e.abrupt("return",{faqSlug:i});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),t.default=v},qrAW:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/faq/[slug]",function(){return n("pXu0")}])},rlHP:function(e,t){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}}},[["qrAW",0,1,2,3]]]);