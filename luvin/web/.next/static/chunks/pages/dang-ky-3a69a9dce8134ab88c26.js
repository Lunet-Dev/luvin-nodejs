_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[21],{"+gp5":function(e,t,n){"use strict";var r=n("q1tI"),o=n.n(r),a=n("T6WU"),c=n("96Do"),u=o.a.createElement;t.a=function(e){var t=e.children,n=e.className,i=e.withoutHeaderFooter;return Object(r.useEffect)((function(){document.body.className=n||""}),[]),u(o.a.Fragment,null,!i&&u(a.a,null),t,!i&&u(c.a,null))}},"/0+H":function(e,t,n){"use strict";t.__esModule=!0,t.isInAmpMode=c,t.useAmp=function(){return c(o.default.useContext(a.AmpStateContext))};var r,o=(r=n("q1tI"))&&r.__esModule?r:{default:r},a=n("lwAK");function c(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,r=e.hybrid,o=void 0!==r&&r,a=e.hasQuery,c=void 0!==a&&a;return n||o&&c}},"48fX":function(e,t,n){var r=n("qhzo");e.exports=function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&r(e,t)}},"5fIB":function(e,t,n){var r=n("7eYB");e.exports=function(e){if(Array.isArray(e))return r(e)}},"8FJ3":function(e,t,n){"use strict";n.d(t,"c",(function(){return r})),n.d(t,"d",(function(){return o})),n.d(t,"a",(function(){return a})),n.d(t,"b",(function(){return c})),n.d(t,"e",(function(){return u})),n.d(t,"g",(function(){return i})),n.d(t,"f",(function(){return s})),n.d(t,"i",(function(){return f})),n.d(t,"k",(function(){return m})),n.d(t,"j",(function(){return p})),n.d(t,"o",(function(){return l})),n.d(t,"q",(function(){return d})),n.d(t,"p",(function(){return g})),n.d(t,"l",(function(){return h})),n.d(t,"n",(function(){return w})),n.d(t,"m",(function(){return y})),n.d(t,"h",(function(){return v}));var r="AUTH/GET_USER_INFO",o="AUTH/GET_USER_INFO_SUCCESS",a="AUTH/CHANGE_LOGIN_INFO",c="AUTH/CHANGE_REGISTER_INFO",u="AUTH/LOGIN",i="AUTH/LOGIN_SUCCESS",s="AUTH/LOGIN_ERROR",f="AUTH/REGISTER",m="AUTH/REGISTER_SUCCESS",p="AUTH/REGISTER_ERROR",l="AUTH/UPDATE_USER_INFO",d="AUTH/UPDATE_USER_INFO_SUCCESS",g="AUTH/UPDATE_USER_INFO_ERROR",h="AUTH/UPDATE_PASSWORD",w="AUTH/UPDATE_PASSWORD_SUCCESS",y="AUTH/UPDATE_PASSWORD_ERROR",v="AUTH/LOGOUT"},"8Kt/":function(e,t,n){"use strict";n("oI91");t.__esModule=!0,t.defaultHead=f,t.default=void 0;var r,o=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=s();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var a=r?Object.getOwnPropertyDescriptor(e,o):null;a&&(a.get||a.set)?Object.defineProperty(n,o,a):n[o]=e[o]}n.default=e,t&&t.set(e,n);return n}(n("q1tI")),a=(r=n("Xuae"))&&r.__esModule?r:{default:r},c=n("lwAK"),u=n("FYa8"),i=n("/0+H");function s(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return s=function(){return e},e}function f(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[o.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(o.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function m(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===o.default.Fragment?e.concat(o.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var p=["name","httpEquiv","charSet","itemProp"];function l(e,t){return e.reduce((function(e,t){var n=o.default.Children.toArray(t.props.children);return e.concat(n)}),[]).reduce(m,[]).reverse().concat(f(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,n=new Set,r={};return function(o){var a=!0;if(o.key&&"number"!==typeof o.key&&o.key.indexOf("$")>0){var c=o.key.slice(o.key.indexOf("$")+1);e.has(c)?a=!1:e.add(c)}switch(o.type){case"title":case"base":t.has(o.type)?a=!1:t.add(o.type);break;case"meta":for(var u=0,i=p.length;u<i;u++){var s=p[u];if(o.props.hasOwnProperty(s))if("charSet"===s)n.has(s)?a=!1:n.add(s);else{var f=o.props[s],m=r[s]||new Set;m.has(f)?a=!1:(m.add(f),r[s]=m)}}}return a}}()).reverse().map((function(e,t){var n=e.key||t;return o.default.cloneElement(e,{key:n})}))}function d(e){var t=e.children,n=(0,o.useContext)(c.AmpStateContext),r=(0,o.useContext)(u.HeadManagerContext);return o.default.createElement(a.default,{reduceComponentsToState:l,headManager:r,inAmpMode:(0,i.isInAmpMode)(n)},t)}d.rewind=function(){};var g=d;t.default=g},"9EOU":function(e,t,n){"use strict";var r=n("q1tI"),o=n.n(r).a.createElement;t.a=function(e){return Object(r.useEffect)((function(){return document.body.style.overflow="hidden",function(){document.body.style.overflow=""}}),[]),o("div",{className:"custom-loading"},o("img",{src:"/images/arrows.png",alt:"loading"}))}},FYa8:function(e,t,n){"use strict";var r;t.__esModule=!0,t.HeadManagerContext=void 0;var o=((r=n("q1tI"))&&r.__esModule?r:{default:r}).default.createContext({});t.HeadManagerContext=o},T0f4:function(e,t){function n(t){return e.exports=n=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},n(t)}e.exports=n},Xuae:function(e,t,n){"use strict";var r=n("mPvQ"),o=n("/GRZ"),a=n("i2R6"),c=(n("qXWd"),n("48fX")),u=n("tCBg"),i=n("T0f4");function s(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=i(e);if(t){var o=i(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return u(this,n)}}t.__esModule=!0,t.default=void 0;var f=n("q1tI"),m=function(e){c(n,e);var t=s(n);function n(e){var a;return o(this,n),(a=t.call(this,e))._hasHeadManager=void 0,a.emitChange=function(){a._hasHeadManager&&a.props.headManager.updateHead(a.props.reduceComponentsToState(r(a.props.headManager.mountedInstances),a.props))},a._hasHeadManager=a.props.headManager&&a.props.headManager.mountedInstances,a}return a(n,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),n}(f.Component);t.default=m},kG2m:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},lwAK:function(e,t,n){"use strict";var r;t.__esModule=!0,t.AmpStateContext=void 0;var o=((r=n("q1tI"))&&r.__esModule?r:{default:r}).default.createContext({});t.AmpStateContext=o},mPvQ:function(e,t,n){var r=n("5fIB"),o=n("rlHP"),a=n("KckH"),c=n("kG2m");e.exports=function(e){return r(e)||o(e)||a(e)||c()}},nH6r:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/dang-ky",function(){return n("vzZn")}])},nSkU:function(e,t,n){"use strict";n.d(t,"a",(function(){return o})),n.d(t,"b",(function(){return a})),n.d(t,"c",(function(){return c})),n.d(t,"e",(function(){return u})),n.d(t,"d",(function(){return i})),n.d(t,"g",(function(){return s})),n.d(t,"i",(function(){return f})),n.d(t,"h",(function(){return m})),n.d(t,"f",(function(){return p})),n.d(t,"m",(function(){return l})),n.d(t,"o",(function(){return d})),n.d(t,"n",(function(){return g})),n.d(t,"j",(function(){return h})),n.d(t,"l",(function(){return w})),n.d(t,"k",(function(){return y}));var r=n("8FJ3"),o=function(e){return{type:r.c,accessToken:e}},a=function(e){return{type:r.d,userInfo:e}},c=function(e,t){return{type:r.e,phone:e,password:t}},u=function(e){return{type:r.g,userInfo:e}},i=function(e){return{type:r.f,errorMessage:e}},s=function(e){return{type:r.i,registerInfo:e}},f=function(e){return{type:r.k,userInfo:e}},m=function(e){return{type:r.j,errorMessage:e}},p=function(){return{type:r.h}},l=function(e,t){return{type:r.o,userId:e,userInfo:t}},d=function(e){return{type:r.q,userInfo:e}},g=function(e){return{type:r.p,errorMessage:e}},h=function(e){return{type:r.l,passwordData:e}},w=function(){return{type:r.n}},y=function(e){return{type:r.m,errorMessage:e}}},oI91:function(e,t){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},qXWd:function(e,t){e.exports=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}},rePB:function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,"a",(function(){return r}))},rlHP:function(e,t){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},tCBg:function(e,t,n){var r=n("C+bE"),o=n("qXWd");e.exports=function(e,t){return!t||"object"!==r(t)&&"function"!==typeof t?o(e):t}},vzZn:function(e,t,n){"use strict";n.r(t);var r=n("rePB"),o=n("q1tI"),a=n.n(o),c=n("/MKj"),u=n("nOHt"),i=n("YFqc"),s=n.n(i),f=n("8Kt/"),m=n.n(f),p=n("+gp5"),l=n("9EOU"),d=n("nSkU"),g=a.a.createElement;function h(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function w(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?h(Object(n),!0).forEach((function(t){Object(r.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):h(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var y=function(e){return e.auth},v=/^[0-9\b]+$/;t.default=function(e){var t=Object(c.b)(),n=Object(u.useRouter)(),i=Object(c.c)(y),f=i.userInfo,h=(i.login,i.register),b=Object(o.useState)({registerInfo:{phone:"",email:"",password:"",name:"",address:""},step:1}),_=b[0],O=b[1],I=function(e,t){O(w(w({},_),{},{registerInfo:w(w({},_.registerInfo),{},Object(r.a)({},e,t))}))};return Object(o.useEffect)((function(){f._id&&n.push("/tai-khoan")}),f._id),g(p.a,{className:"page-template-default page page-id-10 wp-custom-logo theme-hello-elementor woocommerce-account woocommerce-page woocommerce-no-js elementor-default elementor-kit-76"},g(m.a,null,g("title",null,"\u0110\u0103ng k\xfd - Luvin"),g("meta",{name:"description",content:"T\u1ea5t c\u1ea3 c\xe1c s\u1ea3n ph\u1ea9m r\u01b0\u1ee3u vang \u0111\u01b0\u1ee3c l\xean men t\u1ef1 nhi\xean v\xe0 c\xf3 n\u1ed3ng \u0111\u1ed9 c\u1ed3n d\u01b0\u1edbi 15 \u0111\u1ed9"}),g("meta",{property:"og:type",content:"website"}),g("meta",{property:"og:title",content:"\u0110\u0103ng k\xfd - Luvin"}),g("meta",{property:"og:url",content:"https://luvin.com.vn"}),g("meta",{property:"og:site_name",content:"Luvin"}),g("meta",{property:"og:image",content:"https://luvin.com.vn/images/banner.jpg"}),g("meta",{property:"og:image:width",content:"1200"}),g("meta",{property:"og:image:height",content:"630"})),h.loading&&g(l.a,null),g("main",{className:"site-main post-10 page type-page status-publish hentry",role:"main"},g("div",{className:"page-content"},g("div",{className:"woocommerce"},g("div",{className:"woocommerce-notices-wrapper"}),g("h2",null,"\u0110\u0103ng k\xfd"),h.errorMessage&&g("p",{style:{color:"red",fontSize:"12px"}},h.errorMessage),g("form",{className:"woocommerce-form woocommerce-form-register register",onSubmit:function(e){e.preventDefault(),1===_.step?O(w(w({},_),{},{step:2})):t(Object(d.g)(_.registerInfo))}},1===_.step&&g(a.a.Fragment,null,g("p",{className:"woocommerce-form-row woocommerce-form-row--wide form-row form-row-wide"},g("label",{htmlFor:"reg_phone"},"S\u1ed1 \u0111i\u1ec7n tho\u1ea1i\xa0",g("span",{className:"required"},"*")),g("input",{type:"tel",className:"woocommerce-Input woocommerce-Input--text input-text",name:"phone",id:"reg_phone",autoComplete:"phone",value:_.registerInfo.phone,onChange:function(e){var t=e.target.value;(""===t||v.test(t))&&I("phone",t)}})),g("p",{className:"woocommerce-form-row woocommerce-form-row--wide form-row form-row-wide"},g("label",{htmlFor:"reg_email"},"\u0110\u1ecba ch\u1ec9 email\xa0",g("span",{className:"required"},"*")),g("input",{type:"text",className:"woocommerce-Input woocommerce-Input--text input-text",name:"email",id:"reg_email",autoComplete:"email",value:_.registerInfo.email,onChange:function(e){return I("email",e.target.value)}}))),2===_.step&&g(a.a.Fragment,null,g("p",{className:"woocommerce-form-row woocommerce-form-row--wide form-row form-row-wide"},g("label",{htmlFor:"reg_password"},"M\u1eadt kh\u1ea9u\xa0",g("span",{className:"required"},"*")),g("input",{type:"password",className:"woocommerce-Input woocommerce-Input--text input-text",name:"password",id:"reg_password",autoComplete:"password",value:_.registerInfo.password,onChange:function(e){return I("password",e.target.value)}})),g("p",{className:"woocommerce-form-row woocommerce-form-row--wide form-row form-row-wide"},g("label",{htmlFor:"reg_name"},"T\xean\xa0",g("span",{className:"required"},"*")),g("input",{type:"text",className:"woocommerce-Input woocommerce-Input--text input-text",name:"name",id:"reg_name",autoComplete:"name",value:_.registerInfo.name,onChange:function(e){return I("name",e.target.value)}})),g("p",{className:"woocommerce-form-row woocommerce-form-row--wide form-row form-row-wide"},g("label",{htmlFor:"reg_address"},"\u0110\u1ecba ch\u1ec9\xa0",g("span",{className:"required"},"*")),g("input",{type:"text",className:"woocommerce-Input woocommerce-Input--text input-text",name:"address",id:"reg_address",autoComplete:"address",value:_.registerInfo.address,onChange:function(e){return I("address",e.target.value)}}))),g("div",{className:"woocommerce-privacy-policy-text"},g("p",null,"Th\xf4ng tin c\xe1 nh\xe2n c\u1ee7a b\u1ea1n s\u1ebd \u0111\u01b0\u1ee3c s\u1eed d\u1ee5ng \u0111\u1ec3 t\u0103ng tr\u1ea3i nghi\u1ec7m s\u1eed d\u1ee5ng website, qu\u1ea3n l\xfd truy c\u1eadp v\xe0o t\xe0i kho\u1ea3n c\u1ee7a b\u1ea1n, v\xe0 cho c\xe1c m\u1ee5c \u0111\xedch c\u1ee5 th\u1ec3 kh\xe1c \u0111\u01b0\u1ee3c m\xf4 t\u1ea3 trong"," ",g("a",{href:"../cham-soc-khach-hang/chinh-sach-bao-mat/index.html",className:"woocommerce-privacy-policy-link",target:"_blank"},"ch\xednh s\xe1ch ri\xeang t\u01b0"),".")),1===_.step&&g("p",{className:"woocommerce-form-row form-row"},g("button",{className:"woocommerce-Button woocommerce-button button woocommerce-form-register__submit",name:"register",value:"Ti\u1ebfp theo",style:{float:"right"},onClick:function(){return O(w(w({},_),{},{step:2}))}},"Ti\u1ebfp theo")),2===_.step&&g(a.a.Fragment,null,g("p",{className:"woocommerce-form-row form-row"},g("button",{className:"woocommerce-Button woocommerce-button button woocommerce-form-register__submit",name:"register",value:"Ti\u1ebfp theo",onClick:function(){return O(w(w({},_),{},{step:1}))}},"Quay l\u1ea1i"),g("button",{type:"submit",className:"woocommerce-Button woocommerce-button button woocommerce-form-register__submit",name:"register",value:"Ti\u1ebfp theo",style:{float:"right",color:"#fff",border:"1px solid #c36",backgroundColor:"#c36"}},"\u0110\u0103ng k\xfd")))),g("div",{className:"woocommerce-privacy-policy-text"},g("p",null,"\u0110\xe3 c\xf3 t\xe0i kho\u1ea3n?"," ",g(s.a,{href:"/dang-nhap"},g("a",{className:"woocommerce-privacy-policy-link"},"\u0110\u0103ng nh\u1eadp"))))))))}}},[["nH6r",0,1,2,3]]]);