_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[32],{"+gp5":function(e,t,n){"use strict";var r=n("q1tI"),o=n.n(r),a=n("T6WU"),u=n("96Do"),c=o.a.createElement;t.a=function(e){var t=e.children,n=e.className,i=e.withoutHeaderFooter;return Object(r.useEffect)((function(){document.body.className=n||""}),[]),c(o.a.Fragment,null,!i&&c(a.a,null),t,!i&&c(u.a,null))}},"/0+H":function(e,t,n){"use strict";t.__esModule=!0,t.isInAmpMode=u,t.useAmp=function(){return u(o.default.useContext(a.AmpStateContext))};var r,o=(r=n("q1tI"))&&r.__esModule?r:{default:r},a=n("lwAK");function u(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,r=e.hybrid,o=void 0!==r&&r,a=e.hasQuery,u=void 0!==a&&a;return n||o&&u}},"48fX":function(e,t,n){var r=n("qhzo");e.exports=function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&r(e,t)}},"5fIB":function(e,t,n){var r=n("7eYB");e.exports=function(e){if(Array.isArray(e))return r(e)}},"8Kt/":function(e,t,n){"use strict";n("oI91");t.__esModule=!0,t.defaultHead=f,t.default=void 0;var r,o=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=s();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var a=r?Object.getOwnPropertyDescriptor(e,o):null;a&&(a.get||a.set)?Object.defineProperty(n,o,a):n[o]=e[o]}n.default=e,t&&t.set(e,n);return n}(n("q1tI")),a=(r=n("Xuae"))&&r.__esModule?r:{default:r},u=n("lwAK"),c=n("FYa8"),i=n("/0+H");function s(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return s=function(){return e},e}function f(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[o.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(o.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function l(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===o.default.Fragment?e.concat(o.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var p=["name","httpEquiv","charSet","itemProp"];function d(e,t){return e.reduce((function(e,t){var n=o.default.Children.toArray(t.props.children);return e.concat(n)}),[]).reduce(l,[]).reverse().concat(f(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,n=new Set,r={};return function(o){var a=!0;if(o.key&&"number"!==typeof o.key&&o.key.indexOf("$")>0){var u=o.key.slice(o.key.indexOf("$")+1);e.has(u)?a=!1:e.add(u)}switch(o.type){case"title":case"base":t.has(o.type)?a=!1:t.add(o.type);break;case"meta":for(var c=0,i=p.length;c<i;c++){var s=p[c];if(o.props.hasOwnProperty(s))if("charSet"===s)n.has(s)?a=!1:n.add(s);else{var f=o.props[s],l=r[s]||new Set;l.has(f)?a=!1:(l.add(f),r[s]=l)}}}return a}}()).reverse().map((function(e,t){var n=e.key||t;return o.default.cloneElement(e,{key:n})}))}function m(e){var t=e.children,n=(0,o.useContext)(u.AmpStateContext),r=(0,o.useContext)(c.HeadManagerContext);return o.default.createElement(a.default,{reduceComponentsToState:d,headManager:r,inAmpMode:(0,i.isInAmpMode)(n)},t)}m.rewind=function(){};var h=m;t.default=h},"9EOU":function(e,t,n){"use strict";var r=n("q1tI"),o=n.n(r).a.createElement;t.a=function(e){return Object(r.useEffect)((function(){return document.body.style.overflow="hidden",function(){document.body.style.overflow=""}}),[]),o("div",{className:"custom-loading"},o("img",{src:"/images/arrows.png",alt:"loading"}))}},FYa8:function(e,t,n){"use strict";var r;t.__esModule=!0,t.HeadManagerContext=void 0;var o=((r=n("q1tI"))&&r.__esModule?r:{default:r}).default.createContext({});t.HeadManagerContext=o},OWAC:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/tai-khoan/quen-mat-khau",function(){return n("o5Yc")}])},T0f4:function(e,t){function n(t){return e.exports=n=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},n(t)}e.exports=n},VZVu:function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"f",(function(){return o})),n.d(t,"e",(function(){return a})),n.d(t,"b",(function(){return u})),n.d(t,"d",(function(){return c})),n.d(t,"c",(function(){return i})),n.d(t,"g",(function(){return s}));var r="FORGOT_PASSWORD/FORGOT_PASSWORD",o="FORGOT_PASSWORD/FORGOT_PASSWORD_SUCCESS",a="FORGOT_PASSWORD/FORGOT_PASSWORD_ERROR",u="FORGOT_PASSWORD/FORGOT_PASSWORD_CONFIRMATION",c="FORGOT_PASSWORD/FORGOT_PASSWORD_CONFIRMATION_SUCCESS",i="FORGOT_PASSWORD/FORGOT_PASSWORD_CONFIRMATION_ERROR",s="FORGOT_PASSWORD/RESET_STATE"},Xuae:function(e,t,n){"use strict";var r=n("mPvQ"),o=n("/GRZ"),a=n("i2R6"),u=(n("qXWd"),n("48fX")),c=n("tCBg"),i=n("T0f4");function s(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=i(e);if(t){var o=i(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return c(this,n)}}t.__esModule=!0,t.default=void 0;var f=n("q1tI"),l=function(e){u(n,e);var t=s(n);function n(e){var a;return o(this,n),(a=t.call(this,e))._hasHeadManager=void 0,a.emitChange=function(){a._hasHeadManager&&a.props.headManager.updateHead(a.props.reduceComponentsToState(r(a.props.headManager.mountedInstances),a.props))},a._hasHeadManager=a.props.headManager&&a.props.headManager.mountedInstances,a}return a(n,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),n}(f.Component);t.default=l},kG2m:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},lwAK:function(e,t,n){"use strict";var r;t.__esModule=!0,t.AmpStateContext=void 0;var o=((r=n("q1tI"))&&r.__esModule?r:{default:r}).default.createContext({});t.AmpStateContext=o},mPvQ:function(e,t,n){var r=n("5fIB"),o=n("rlHP"),a=n("KckH"),u=n("kG2m");e.exports=function(e){return r(e)||o(e)||a(e)||u()}},o5Yc:function(e,t,n){"use strict";n.r(t);var r=n("rePB"),o=n("q1tI"),a=n.n(o),u=n("8Kt/"),c=n.n(u),i=n("/MKj"),s=n("nOHt"),f=n("+gp5"),l=n("9EOU"),p=n("wMW/"),d=a.a.createElement;function m(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function h(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?m(Object(n),!0).forEach((function(t){Object(r.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):m(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var O=function(e){return e.auth},g=function(e){return e.forgotPassword};t.default=function(e){var t=Object(i.b)(),n=Object(s.useRouter)(),r=Object(i.c)(O).userInfo,a=Object(o.useState)({username:""}),u=a[0],m=a[1],y=Object(i.c)(g).forgotPassword;return Object(o.useEffect)((function(){r._id&&n.push("/tai-khoan")}),[r._id]),d(f.a,{className:"page-template-default page page-id-10 wp-custom-logo theme-hello-elementor woocommerce-account woocommerce-page woocommerce-lost-password woocommerce-no-js elementor-default elementor-kit-76"},d(c.a,null,d("title",null,"Qu\xean m\u1eadt kh\u1ea9u - Luvin"),d("meta",{name:"description",content:"T\u1ea5t c\u1ea3 c\xe1c s\u1ea3n ph\u1ea9m r\u01b0\u1ee3u vang \u0111\u01b0\u1ee3c l\xean men t\u1ef1 nhi\xean v\xe0 c\xf3 n\u1ed3ng \u0111\u1ed9 c\u1ed3n d\u01b0\u1edbi 15 \u0111\u1ed9"}),d("meta",{property:"og:type",content:"website"}),d("meta",{property:"og:title",content:"Qu\xean m\u1eadt kh\u1ea9u - Luvin"}),d("meta",{property:"og:url",content:"https://luvin.com.vn"}),d("meta",{property:"og:site_name",content:"Luvin"}),d("meta",{property:"og:image",content:"https://luvin.com.vn/images/banner.jpg"}),d("meta",{property:"og:image:width",content:"1200"}),d("meta",{property:"og:image:height",content:"630"})),y.loading&&d(l.a,null),d("main",{className:"site-main post-10 page type-page status-publish hentry",role:"main"},d("header",{className:"page-header"},d("h1",{className:"entry-title"},"Qu\xean m\u1eadt kh\u1ea9u")),d("div",{className:"page-content"},d("div",{className:"woocommerce"},d("div",{className:"woocommerce-notices-wrapper"}),d("form",{className:"woocommerce-ResetPassword lost_reset_password",onSubmit:function(e){e.preventDefault(),t(Object(p.a)(u.username))}},d("p",null,"Qu\xean m\u1eadt kh\u1ea9u? Vui l\xf2ng nh\u1eadp t\xean \u0111\u0103ng nh\u1eadp ho\u1eb7c \u0111\u1ecba ch\u1ec9 email. B\u1ea1n s\u1ebd nh\u1eadn \u0111\u01b0\u1ee3c m\u1ed9t li\xean k\u1ebft t\u1ea1o m\u1eadt kh\u1ea9u m\u1edbi qua email."),d("p",{className:"woocommerce-form-row woocommerce-form-row--first form-row form-row-first"},d("label",{for:"user_login"},"T\xean \u0111\u0103ng nh\u1eadp ho\u1eb7c email"),d("input",{className:"woocommerce-Input woocommerce-Input--text input-text",type:"text",name:"user_login",id:"user_login",autocomplete:"username",value:u.username,onChange:function(e){return m(h(h({},u),{},{username:e.target.value}))}})),d("div",{className:"clear"}),d("p",{className:"woocommerce-form-row form-row"},d("button",{type:"submit",className:"woocommerce-Button button",value:"\u0110\u1eb7t l\u1ea1i m\u1eadt kh\u1ea9u"},"\u0110\u1eb7t l\u1ea1i m\u1eadt kh\u1ea9u")),y.success&&d("p",{style:{color:"green",fontSize:"14px"}},"Y\xeau c\u1ea7u \u0111\u1eb7t l\u1ea1i m\u1eadt kh\u1ea9u th\xe0nh c\xf4ng! Vui l\xf2ng ki\u1ec3m tra email v\xe0 l\xe0m theo h\u01b0\u1edbng d\u1eabn"),y.errorMessage&&d("p",{style:{color:"red",fontSize:"14px"}},y.errorMessage))))))}},oI91:function(e,t){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},qXWd:function(e,t){e.exports=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}},rePB:function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,"a",(function(){return r}))},rlHP:function(e,t){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},tCBg:function(e,t,n){var r=n("C+bE"),o=n("qXWd");e.exports=function(e,t){return!t||"object"!==r(t)&&"function"!==typeof t?o(e):t}},"wMW/":function(e,t,n){"use strict";n.d(t,"a",(function(){return o})),n.d(t,"f",(function(){return a})),n.d(t,"e",(function(){return u})),n.d(t,"b",(function(){return c})),n.d(t,"d",(function(){return i})),n.d(t,"c",(function(){return s}));var r=n("VZVu"),o=function(e){return{type:r.a,username:e}},a=function(){return{type:r.f}},u=function(e){return{type:r.e,errorMessage:e}},c=function(e,t){return{type:r.b,token:e,password:t}},i=function(){return{type:r.d}},s=function(e){return{type:r.c,errorMessage:e}}}},[["OWAC",0,1,2,3]]]);