_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[22],{"+gp5":function(e,t,n){"use strict";var r=n("q1tI");t.a=function(e){var t=e.children,n=e.className;return Object(r.useEffect)((function(){document.body.className=n||""}),[]),t}},"/0+H":function(e,t,n){"use strict";t.__esModule=!0,t.isInAmpMode=c,t.useAmp=function(){return c(o.default.useContext(a.AmpStateContext))};var r,o=(r=n("q1tI"))&&r.__esModule?r:{default:r},a=n("lwAK");function c(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,r=e.hybrid,o=void 0!==r&&r,a=e.hasQuery,c=void 0!==a&&a;return n||o&&c}},"5fIB":function(e,t,n){var r=n("7eYB");e.exports=function(e){if(Array.isArray(e))return r(e)}},"8FJ3":function(e,t,n){"use strict";n.d(t,"c",(function(){return r})),n.d(t,"d",(function(){return o})),n.d(t,"a",(function(){return a})),n.d(t,"b",(function(){return c})),n.d(t,"e",(function(){return u})),n.d(t,"g",(function(){return i})),n.d(t,"f",(function(){return s})),n.d(t,"i",(function(){return f})),n.d(t,"k",(function(){return l})),n.d(t,"j",(function(){return p})),n.d(t,"h",(function(){return d}));var r="AUTH/GET_USER_INFO",o="AUTH/GET_USER_INFO_SUCCESS",a="AUTH/CHANGE_LOGIN_INFO",c="AUTH/CHANGE_REGISTER_INFO",u="AUTH/LOGIN",i="AUTH/LOGIN_SUCCESS",s="AUTH/LOGIN_ERROR",f="AUTH/REGISTER",l="AUTH/REGISTER_SUCCESS",p="AUTH/REGISTER_ERROR",d="AUTH/LOGOUT"},"8Kt/":function(e,t,n){"use strict";n("oI91");t.__esModule=!0,t.defaultHead=f,t.default=void 0;var r,o=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=s();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var a=r?Object.getOwnPropertyDescriptor(e,o):null;a&&(a.get||a.set)?Object.defineProperty(n,o,a):n[o]=e[o]}n.default=e,t&&t.set(e,n);return n}(n("q1tI")),a=(r=n("Xuae"))&&r.__esModule?r:{default:r},c=n("lwAK"),u=n("FYa8"),i=n("/0+H");function s(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return s=function(){return e},e}function f(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[o.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(o.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function l(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===o.default.Fragment?e.concat(o.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var p=["name","httpEquiv","charSet","itemProp"];function d(e,t){return e.reduce((function(e,t){var n=o.default.Children.toArray(t.props.children);return e.concat(n)}),[]).reduce(l,[]).reverse().concat(f(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,n=new Set,r={};return function(o){var a=!0;if(o.key&&"number"!==typeof o.key&&o.key.indexOf("$")>0){var c=o.key.slice(o.key.indexOf("$")+1);e.has(c)?a=!1:e.add(c)}switch(o.type){case"title":case"base":t.has(o.type)?a=!1:t.add(o.type);break;case"meta":for(var u=0,i=p.length;u<i;u++){var s=p[u];if(o.props.hasOwnProperty(s))if("charSet"===s)n.has(s)?a=!1:n.add(s);else{var f=o.props[s],l=r[s]||new Set;l.has(f)?a=!1:(l.add(f),r[s]=l)}}}return a}}()).reverse().map((function(e,t){var n=e.key||t;return o.default.cloneElement(e,{key:n})}))}function m(e){var t=e.children,n=(0,o.useContext)(c.AmpStateContext),r=(0,o.useContext)(u.HeadManagerContext);return o.default.createElement(a.default,{reduceComponentsToState:d,headManager:r,inAmpMode:(0,i.isInAmpMode)(n)},t)}m.rewind=function(){};var h=m;t.default=h},"9EOU":function(e,t,n){"use strict";var r=n("q1tI"),o=n.n(r).a.createElement;t.a=function(e){return Object(r.useEffect)((function(){return document.body.style.overflow="hidden",function(){document.body.style.overflow=""}}),[]),o("div",{className:"custom-loading"},o("img",{src:"/images/arrows.png",alt:"loading"}))}},FYa8:function(e,t,n){"use strict";var r;t.__esModule=!0,t.HeadManagerContext=void 0;var o=((r=n("q1tI"))&&r.__esModule?r:{default:r}).default.createContext({});t.HeadManagerContext=o},Xuae:function(e,t,n){"use strict";var r=n("mPvQ"),o=n("/GRZ"),a=n("i2R6"),c=(n("qXWd"),n("48fX")),u=n("tCBg"),i=n("T0f4");function s(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=i(e);if(t){var o=i(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return u(this,n)}}t.__esModule=!0,t.default=void 0;var f=n("q1tI"),l=function(e){c(n,e);var t=s(n);function n(e){var a;return o(this,n),(a=t.call(this,e))._hasHeadManager=void 0,a.emitChange=function(){a._hasHeadManager&&a.props.headManager.updateHead(a.props.reduceComponentsToState(r(a.props.headManager.mountedInstances),a.props))},a._hasHeadManager=a.props.headManager&&a.props.headManager.mountedInstances,a}return a(n,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),n}(f.Component);t.default=l},YFqc:function(e,t,n){e.exports=n("cTJO")},cTJO:function(e,t,n){"use strict";var r=n("zoAU"),o=n("7KCV");t.__esModule=!0,t.default=void 0;var a,c=o(n("q1tI")),u=n("elyg"),i=n("nOHt"),s=new Map,f=window.IntersectionObserver,l={};var p=function(e,t){var n=a||(f?a=new f((function(e){e.forEach((function(e){if(s.has(e.target)){var t=s.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(a.unobserve(e.target),s.delete(e.target),t())}}))}),{rootMargin:"200px"}):void 0);return n?(n.observe(e),s.set(e,t),function(){try{n.unobserve(e)}catch(t){console.error(t)}s.delete(e)}):function(){}};function d(e,t,n,r){(0,u.isLocalURL)(t)&&(e.prefetch(t,n,r).catch((function(e){0})),l[t+"%"+n]=!0)}var m=function(e){var t=!1!==e.prefetch,n=c.default.useState(),o=r(n,2),a=o[0],s=o[1],m=(0,i.useRouter)(),h=m&&m.pathname||"/",g=c.default.useMemo((function(){var t=(0,u.resolveHref)(h,e.href,!0),n=r(t,2),o=n[0],a=n[1];return{href:o,as:e.as?(0,u.resolveHref)(h,e.as):a||o}}),[h,e.href,e.as]),v=g.href,y=g.as;c.default.useEffect((function(){if(t&&f&&a&&a.tagName&&(0,u.isLocalURL)(v)&&!l[v+"%"+y])return p(a,(function(){d(m,v,y)}))}),[t,a,v,y,m]);var w=e.children,b=e.replace,_=e.shallow,O=e.scroll;"string"===typeof w&&(w=c.default.createElement("a",null,w));var I=c.Children.only(w),E={ref:function(e){e&&s(e),I&&"object"===typeof I&&I.ref&&("function"===typeof I.ref?I.ref(e):"object"===typeof I.ref&&(I.ref.current=e))},onClick:function(e){I.props&&"function"===typeof I.props.onClick&&I.props.onClick(e),e.defaultPrevented||function(e,t,n,r,o,a,c){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,u.isLocalURL)(n))&&(e.preventDefault(),null==c&&(c=r.indexOf("#")<0),t[o?"replace":"push"](n,r,{shallow:a}).then((function(e){e&&c&&(window.scrollTo(0,0),document.body.focus())})))}(e,m,v,y,b,_,O)}};return t&&(E.onMouseEnter=function(e){(0,u.isLocalURL)(v)&&(I.props&&"function"===typeof I.props.onMouseEnter&&I.props.onMouseEnter(e),d(m,v,y,{priority:!0}))}),(e.passHref||"a"===I.type&&!("href"in I.props))&&(E.href=(0,u.addBasePath)(y)),c.default.cloneElement(I,E)};t.default=m},kG2m:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},ktTg:function(e,t,n){"use strict";n.r(t);var r=n("rePB"),o=n("q1tI"),a=n.n(o),c=n("/MKj"),u=n("nOHt"),i=n("YFqc"),s=n.n(i),f=n("8Kt/"),l=n.n(f),p=n("+gp5"),d=n("9EOU"),m=n("nSkU"),h=a.a.createElement;function g(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function v(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?g(Object(n),!0).forEach((function(t){Object(r.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):g(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var y=function(e){return e.auth};t.default=function(e){var t=Object(c.b)(),n=Object(u.useRouter)(),a=Object(c.c)(y),i=a.userInfo,f=a.login,g=(a.register,Object(o.useState)({loginInfo:{phone:"",password:""}})),w=g[0],b=g[1],_=function(e,t){b(v(v({},w),{},{loginInfo:v(v({},w.loginInfo),{},Object(r.a)({},e,t))}))};return Object(o.useEffect)((function(){i._id&&n.back()}),i._id),h(p.a,{className:"page-template-default page page-id-10 wp-custom-logo theme-hello-elementor woocommerce-account woocommerce-page woocommerce-no-js elementor-default elementor-kit-76"},h(l.a,null,h("title",null,"\u0110\u0103ng nh\u1eadp - Luvin"),h("meta",{name:"description",content:"T\u1ea5t c\u1ea3 c\xe1c s\u1ea3n ph\u1ea9m r\u01b0\u1ee3u vang \u0111\u01b0\u1ee3c l\xean men t\u1ef1 nhi\xean v\xe0 c\xf3 n\u1ed3ng \u0111\u1ed9 c\u1ed3n d\u01b0\u1edbi 15 \u0111\u1ed9"}),h("meta",{property:"og:type",content:"website"}),h("meta",{property:"og:title",content:"\u0110\u0103ng nh\u1eadp - Luvin"}),h("meta",{property:"og:url",content:"https://luvin.com.vn"}),h("meta",{property:"og:site_name",content:"Luvin"}),h("meta",{property:"og:image",content:"https://luvin.com.vn/images/banner.jpg"}),h("meta",{property:"og:image:width",content:"1200"}),h("meta",{property:"og:image:height",content:"630"})),f.loading&&h(d.a,null),h("main",{className:"site-main post-10 page type-page status-publish hentry",role:"main"},h("header",{className:"page-header"},h("h1",{className:"entry-title"},"T\xe0i kho\u1ea3n")),h("div",{className:"page-content"},h("div",{className:"woocommerce"},h("div",{className:"woocommerce-notices-wrapper"}),h("h2",null,"\u0110\u0103ng nh\u1eadp"),f.errorMessage&&h("p",{style:{color:"red",fontSize:"12px"}},f.errorMessage),h("form",{className:"woocommerce-form woocommerce-form-register register",onSubmit:function(e){e.preventDefault(),t(Object(m.c)(w.loginInfo.phone,w.loginInfo.password))}},h("p",{className:"woocommerce-form-row woocommerce-form-row--wide form-row form-row-wide"},h("label",{htmlFor:"reg_phone"},"S\u1ed1 \u0111i\u1ec7n tho\u1ea1i\xa0",h("span",{className:"required"},"*")),h("input",{type:"text",className:"woocommerce-Input woocommerce-Input--text input-text",name:"phone",id:"reg_phone",autoComplete:"phone",value:w.loginInfo.phone,onChange:function(e){return _("phone",e.target.value)}})),h("p",{className:"woocommerce-form-row woocommerce-form-row--wide form-row form-row-wide"},h("label",{htmlFor:"reg_email"},"M\u1eadt kh\u1ea9u\xa0",h("span",{className:"required"},"*")),h("input",{type:"password",className:"woocommerce-Input woocommerce-Input--text input-text",name:"password",id:"reg_password",autoComplete:"password",value:w.loginInfo.password,onChange:function(e){return _("password",e.target.value)}})),h("div",{className:"woocommerce-privacy-policy-text"},h("p",null,"Th\xf4ng tin c\xe1 nh\xe2n c\u1ee7a b\u1ea1n s\u1ebd \u0111\u01b0\u1ee3c s\u1eed d\u1ee5ng \u0111\u1ec3 t\u0103ng tr\u1ea3i nghi\u1ec7m s\u1eed d\u1ee5ng website, qu\u1ea3n l\xfd truy c\u1eadp v\xe0o t\xe0i kho\u1ea3n c\u1ee7a b\u1ea1n, v\xe0 cho c\xe1c m\u1ee5c \u0111\xedch c\u1ee5 th\u1ec3 kh\xe1c \u0111\u01b0\u1ee3c m\xf4 t\u1ea3 trong"," ",h("a",{href:"../cham-soc-khach-hang/chinh-sach-bao-mat/index.html",className:"woocommerce-privacy-policy-link",target:"_blank"},"ch\xednh s\xe1ch ri\xeang t\u01b0"),".")),h("p",{className:"woocommerce-form-row form-row"},h("button",{type:"submit",className:"woocommerce-Button woocommerce-button button woocommerce-form-register__submit",name:"register",value:"\u0110\u0103ng nh\u1eadp"},"\u0110\u0103ng nh\u1eadp"))),h("div",{className:"woocommerce-privacy-policy-text",style:{display:"flex",justifyContent:"space-between"}},h("p",null,"Ch\u01b0a c\xf3 t\xe0i kho\u1ea3n?"," ",h(s.a,{href:"/dang-ky"},h("a",{className:"woocommerce-privacy-policy-link"},"\u0110\u0103ng k\xfd"))),h("p",null,h(s.a,{href:"/tai-khoan/quen-mat-khau"},h("a",{className:"woocommerce-privacy-policy-link"},"Qu\xean m\u1eadt kh\u1ea9u?"))))))))}},lwAK:function(e,t,n){"use strict";var r;t.__esModule=!0,t.AmpStateContext=void 0;var o=((r=n("q1tI"))&&r.__esModule?r:{default:r}).default.createContext({});t.AmpStateContext=o},mPvQ:function(e,t,n){var r=n("5fIB"),o=n("rlHP"),a=n("KckH"),c=n("kG2m");e.exports=function(e){return r(e)||o(e)||a(e)||c()}},nSkU:function(e,t,n){"use strict";n.d(t,"a",(function(){return o})),n.d(t,"b",(function(){return a})),n.d(t,"c",(function(){return c})),n.d(t,"e",(function(){return u})),n.d(t,"d",(function(){return i})),n.d(t,"g",(function(){return s})),n.d(t,"i",(function(){return f})),n.d(t,"h",(function(){return l})),n.d(t,"f",(function(){return p}));var r=n("8FJ3"),o=function(e){return{type:r.c,accessToken:e}},a=function(e){return{type:r.d,userInfo:e}},c=function(e,t){return{type:r.e,phone:e,password:t}},u=function(e){return{type:r.g,userInfo:e}},i=function(e){return{type:r.f,errorMessage:e}},s=function(e){return{type:r.i,registerInfo:e}},f=function(e){return{type:r.k,userInfo:e}},l=function(e){return{type:r.j,errorMessage:e}},p=function(){return{type:r.h}}},oI91:function(e,t){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},rePB:function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,"a",(function(){return r}))},rlHP:function(e,t){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},xs33:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/dang-nhap",function(){return n("ktTg")}])}},[["xs33",0,1,2,3,4]]]);