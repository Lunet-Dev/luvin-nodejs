_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[19],{"+gp5":function(e,t,n){"use strict";var r=n("q1tI");t.a=function(e){var t=e.children,n=e.className;return Object(r.useEffect)((function(){document.body.className=n||""}),[]),t}},"/0+H":function(e,t,n){"use strict";t.__esModule=!0,t.isInAmpMode=c,t.useAmp=function(){return c(a.default.useContext(o.AmpStateContext))};var r,a=(r=n("q1tI"))&&r.__esModule?r:{default:r},o=n("lwAK");function c(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,r=e.hybrid,a=void 0!==r&&r,o=e.hasQuery,c=void 0!==o&&o;return n||a&&c}},"0YDr":function(e,t,n){var r=n("7Paf"),a=n("zZ0H");e.exports=function(e){return e&&e.length?r(e,a):0}},"563t":function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/gio-hang",function(){return n("e2Uk")}])},"5fIB":function(e,t,n){var r=n("7eYB");e.exports=function(e){if(Array.isArray(e))return r(e)}},"6lzq":function(e,t,n){"use strict";n.d(t,"c",(function(){return a})),n.d(t,"a",(function(){return o})),n.d(t,"b",(function(){return c}));var r=n("BzKi"),a=function(){return{type:r.c}},o=function(e,t){return{type:r.a,amount:e,product:t}},c=function(e){return{type:r.b,index:e}}},"7Paf":function(e,t){e.exports=function(e,t){for(var n,r=-1,a=e.length;++r<a;){var o=t(e[r]);void 0!==o&&(n=void 0===n?o:n+o)}return n}},"8Kt/":function(e,t,n){"use strict";n("oI91");t.__esModule=!0,t.defaultHead=l,t.default=void 0;var r,a=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=s();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if(Object.prototype.hasOwnProperty.call(e,a)){var o=r?Object.getOwnPropertyDescriptor(e,a):null;o&&(o.get||o.set)?Object.defineProperty(n,a,o):n[a]=e[a]}n.default=e,t&&t.set(e,n);return n}(n("q1tI")),o=(r=n("Xuae"))&&r.__esModule?r:{default:r},c=n("lwAK"),u=n("FYa8"),i=n("/0+H");function s(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return s=function(){return e},e}function l(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[a.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(a.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function f(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===a.default.Fragment?e.concat(a.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var m=["name","httpEquiv","charSet","itemProp"];function d(e,t){return e.reduce((function(e,t){var n=a.default.Children.toArray(t.props.children);return e.concat(n)}),[]).reduce(f,[]).reverse().concat(l(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,n=new Set,r={};return function(a){var o=!0;if(a.key&&"number"!==typeof a.key&&a.key.indexOf("$")>0){var c=a.key.slice(a.key.indexOf("$")+1);e.has(c)?o=!1:e.add(c)}switch(a.type){case"title":case"base":t.has(a.type)?o=!1:t.add(a.type);break;case"meta":for(var u=0,i=m.length;u<i;u++){var s=m[u];if(a.props.hasOwnProperty(s))if("charSet"===s)n.has(s)?o=!1:n.add(s);else{var l=a.props[s],f=r[s]||new Set;f.has(l)?o=!1:(f.add(l),r[s]=f)}}}return o}}()).reverse().map((function(e,t){var n=e.key||t;return a.default.cloneElement(e,{key:n})}))}function p(e){var t=e.children,n=(0,a.useContext)(c.AmpStateContext),r=(0,a.useContext)(u.HeadManagerContext);return a.default.createElement(o.default,{reduceComponentsToState:d,headManager:r,inAmpMode:(0,i.isInAmpMode)(n)},t)}p.rewind=function(){};var h=p;t.default=h},BzKi:function(e,t,n){"use strict";n.d(t,"c",(function(){return r})),n.d(t,"a",(function(){return a})),n.d(t,"b",(function(){return o}));var r="CART/TOGGLE_CART_MENU",a="CART/ADD_PRODUCT",o="CART/REMOVE_PRODUCT"},FYa8:function(e,t,n){"use strict";var r;t.__esModule=!0,t.HeadManagerContext=void 0;var a=((r=n("q1tI"))&&r.__esModule?r:{default:r}).default.createContext({});t.HeadManagerContext=a},Xuae:function(e,t,n){"use strict";var r=n("mPvQ"),a=n("/GRZ"),o=n("i2R6"),c=(n("qXWd"),n("48fX")),u=n("tCBg"),i=n("T0f4");function s(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=i(e);if(t){var a=i(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return u(this,n)}}t.__esModule=!0,t.default=void 0;var l=n("q1tI"),f=function(e){c(n,e);var t=s(n);function n(e){var o;return a(this,n),(o=t.call(this,e))._hasHeadManager=void 0,o.emitChange=function(){o._hasHeadManager&&o.props.headManager.updateHead(o.props.reduceComponentsToState(r(o.props.headManager.mountedInstances),o.props))},o._hasHeadManager=o.props.headManager&&o.props.headManager.mountedInstances,o}return o(n,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),n}(l.Component);t.default=f},YFqc:function(e,t,n){e.exports=n("cTJO")},cTJO:function(e,t,n){"use strict";var r=n("zoAU"),a=n("7KCV");t.__esModule=!0,t.default=void 0;var o,c=a(n("q1tI")),u=n("elyg"),i=n("nOHt"),s=new Map,l=window.IntersectionObserver,f={};var m=function(e,t){var n=o||(l?o=new l((function(e){e.forEach((function(e){if(s.has(e.target)){var t=s.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(o.unobserve(e.target),s.delete(e.target),t())}}))}),{rootMargin:"200px"}):void 0);return n?(n.observe(e),s.set(e,t),function(){try{n.unobserve(e)}catch(t){console.error(t)}s.delete(e)}):function(){}};function d(e,t,n,r){(0,u.isLocalURL)(t)&&(e.prefetch(t,n,r).catch((function(e){0})),f[t+"%"+n]=!0)}var p=function(e){var t=!1!==e.prefetch,n=c.default.useState(),a=r(n,2),o=a[0],s=a[1],p=(0,i.useRouter)(),h=p&&p.pathname||"/",v=c.default.useMemo((function(){var t=(0,u.resolveHref)(h,e.href,!0),n=r(t,2),a=n[0],o=n[1];return{href:a,as:e.as?(0,u.resolveHref)(h,e.as):o||a}}),[h,e.href,e.as]),g=v.href,y=v.as;c.default.useEffect((function(){if(t&&l&&o&&o.tagName&&(0,u.isLocalURL)(g)&&!f[g+"%"+y])return m(o,(function(){d(p,g,y)}))}),[t,o,g,y,p]);var b=e.children,w=e.replace,_=e.shallow,N=e.scroll;"string"===typeof b&&(b=c.default.createElement("a",null,b));var M=c.Children.only(b),C={ref:function(e){e&&s(e),M&&"object"===typeof M&&M.ref&&("function"===typeof M.ref?M.ref(e):"object"===typeof M.ref&&(M.ref.current=e))},onClick:function(e){M.props&&"function"===typeof M.props.onClick&&M.props.onClick(e),e.defaultPrevented||function(e,t,n,r,a,o,c){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,u.isLocalURL)(n))&&(e.preventDefault(),null==c&&(c=r.indexOf("#")<0),t[a?"replace":"push"](n,r,{shallow:o}).then((function(e){e&&c&&(window.scrollTo(0,0),document.body.focus())})))}(e,p,g,y,w,_,N)}};return t&&(C.onMouseEnter=function(e){(0,u.isLocalURL)(g)&&(M.props&&"function"===typeof M.props.onMouseEnter&&M.props.onMouseEnter(e),d(p,g,y,{priority:!0}))}),(e.passHref||"a"===M.type&&!("href"in M.props))&&(C.href=(0,u.addBasePath)(y)),c.default.cloneElement(M,C)};t.default=p},e2Uk:function(e,t,n){"use strict";n.r(t);var r=n("q1tI"),a=n.n(r),o=n("YFqc"),c=n.n(o),u=n("8Kt/"),i=n.n(u),s=n("0YDr"),l=n.n(s),f=n("ZhIB"),m=n.n(f),d=n("/MKj"),p=n("+gp5"),h=n("6lzq"),v=a.a.createElement,g=function(e){return e.cart};t.default=function(e){var t=Object(d.b)(),n=Object(d.c)(g).products;return v(p.a,{className:"page-template-default page page-id-8 wp-custom-logo theme-hello-elementor woocommerce-cart woocommerce-page woocommerce-no-js elementor-default elementor-kit-76"},v(i.a,null,v("title",null,"Gi\u1ecf h\xe0ng - Luvin"),v("meta",{name:"description",content:"T\u1ea5t c\u1ea3 c\xe1c s\u1ea3n ph\u1ea9m r\u01b0\u1ee3u vang \u0111\u01b0\u1ee3c l\xean men t\u1ef1 nhi\xean v\xe0 c\xf3 n\u1ed3ng \u0111\u1ed9 c\u1ed3n d\u01b0\u1edbi 15 \u0111\u1ed9"}),v("meta",{property:"og:type",content:"website"}),v("meta",{property:"og:title",content:"Gi\u1ecf h\xe0ng - Luvin"}),v("meta",{property:"og:url",content:"https://luvin.com.vn"}),v("meta",{property:"og:site_name",content:"Luvin"}),v("meta",{property:"og:image",content:"https://luvin.com.vn/images/banner.jpg"}),v("meta",{property:"og:image:width",content:"1200"}),v("meta",{property:"og:image:height",content:"630"})),v("main",{className:"site-main post-8 page type-page status-publish hentry",role:"main"},v("header",{className:"page-header"},v("h1",{className:"entry-title"},"Gi\u1ecf h\xe0ng")),v("div",{className:"page-content"},v("div",{className:"woocommerce"},v("div",{className:"woocommerce-notices-wrapper"}),v("form",{className:"woocommerce-cart-form"},v("table",{className:"shop_table shop_table_responsive cart woocommerce-cart-form__contents",cellspacing:"0"},v("thead",null,v("tr",null,v("th",{className:"product-remove"},"\xa0"),v("th",{className:"product-thumbnail"},"\xa0"),v("th",{className:"product-name"},"S\u1ea3n ph\u1ea9m"),v("th",{className:"product-price"},"Gi\xe1"),v("th",{className:"product-quantity"},"S\u1ed1 l\u01b0\u1ee3ng"),v("th",{className:"product-subtotal"},"T\u1ea1m t\xednh"))),v("tbody",null,n.map((function(e,n){var r=e.amount,a=e.product,o=void 0===a?{}:a;v("tr",{className:"woocommerce-cart-form__cart-item cart_item",key:n},v("td",{className:"product-remove"},v("a",{className:"remove",onClick:function(){return t(Object(h.b)(n))}},"\xd7")),v("td",{className:"product-thumbnail"},v(c.a,{href:"/[category]/[slug].js",as:"/".concat(categorySlug,"/").concat(slug)},v("a",null,v("img",{width:"300",height:"360",src:(o.images||[])[0],className:"attachment-woocommerce_thumbnail size-woocommerce_thumbnail",alt:""})))),v("td",{className:"product-name","data-title":"S\u1ea3n ph\u1ea9m"},v(c.a,{href:"/[category]/[slug].js",as:"/".concat(categorySlug,"/").concat(slug)},v("a",null,o.name))),v("td",{className:"product-price","data-title":"Gi\xe1"},v("span",{className:"woocommerce-Price-amount amount"},v("bdi",null,m()((o.price||0)-(o.discount||0)).format("0,0"),v("span",{className:"woocommerce-Price-currencySymbol"},"\u20ab")))),v("td",{className:"product-quantity","data-title":"S\u1ed1 l\u01b0\u1ee3ng"},v("div",{className:"quantity"},v("label",{className:"screen-reader-text",for:"quantity_5f9cb99753d5b"},"S\u1ed1 l\u01b0\u1ee3ng"),v("input",{type:"number",id:"quantity_5f9cb99753d5b",className:"input-text qty text",step:"1",min:"0",max:"",value:r,placeholder:"",inputmode:"numeric"}))),v("td",{className:"product-subtotal","data-title":"T\u1ea1m t\xednh"},v("span",{className:"woocommerce-Price-amount amount"},v("bdi",null,m()(((o.price||0)-(o.discount||0))*r).format("0,0"),v("span",{className:"woocommerce-Price-currencySymbol"},"\u20ab")))))}))))),v("div",{className:"cart-collaterals"},v("div",{className:"cart_totals"},v("h2",null,"C\u1ed9ng gi\u1ecf h\xe0ng"),v("table",{cellspacing:"0",className:"shop_table shop_table_responsive"},v("tr",{className:"cart-subtotal"},v("th",null,"T\u1ea1m t\xednh"),v("td",{"data-title":"T\u1ea1m t\xednh"},v("span",{className:"woocommerce-Price-amount amount"},v("bdi",null,m()(l()(n.map((function(e){var t=e.amount,n=e.product,r=void 0===n?{}:n;return t*((r.price||0)-(r.discount||0))})))).format("0,0"),v("span",{className:"woocommerce-Price-currencySymbol"},"\u20ab"))))),v("tr",{className:"order-total"},v("th",null,"T\u1ed5ng"),v("td",{"data-title":"T\u1ed5ng"},v("strong",null,v("span",{className:"woocommerce-Price-amount amount"},v("bdi",null,m()(l()(n.map((function(e){var t=e.amount,n=e.product,r=void 0===n?{}:n;return t*((r.price||0)-(r.discount||0))})))).format("0,0"),v("span",{className:"woocommerce-Price-currencySymbol"},"\u20ab"))))))),v("div",{className:"wc-proceed-to-checkout"},v(c.a,{href:"/thanh-toan"},v("a",{className:"checkout-button button alt wc-forward"},"Ti\u1ebfn h\xe0nh thanh to\xe1n")))))))))}},kG2m:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},lwAK:function(e,t,n){"use strict";var r;t.__esModule=!0,t.AmpStateContext=void 0;var a=((r=n("q1tI"))&&r.__esModule?r:{default:r}).default.createContext({});t.AmpStateContext=a},mPvQ:function(e,t,n){var r=n("5fIB"),a=n("rlHP"),o=n("KckH"),c=n("kG2m");e.exports=function(e){return r(e)||a(e)||o(e)||c()}},oI91:function(e,t){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},rlHP:function(e,t){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},zZ0H:function(e,t){e.exports=function(e){return e}}},[["563t",0,1,3,2,4,5]]]);