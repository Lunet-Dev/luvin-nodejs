_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[22],{"+gp5":function(e,n,o){"use strict";var t=o("q1tI");n.a=function(e){var n=e.children,o=e.className;return Object(t.useEffect)((function(){document.body.className=o||""}),[]),n}},"0YDr":function(e,n,o){var t=o("7Paf"),a=o("zZ0H");e.exports=function(e){return e&&e.length?t(e,a):0}},"7Paf":function(e,n){e.exports=function(e,n){for(var o,t=-1,a=e.length;++t<a;){var r=n(e[t]);void 0!==r&&(o=void 0===o?r:o+r)}return o}},"8FJ3":function(e,n,o){"use strict";o.d(n,"c",(function(){return t})),o.d(n,"d",(function(){return a})),o.d(n,"a",(function(){return r})),o.d(n,"b",(function(){return c})),o.d(n,"e",(function(){return i})),o.d(n,"g",(function(){return l})),o.d(n,"f",(function(){return s})),o.d(n,"i",(function(){return m})),o.d(n,"k",(function(){return u})),o.d(n,"j",(function(){return d})),o.d(n,"h",(function(){return p}));var t="AUTH/GET_USER_INFO",a="AUTH/GET_USER_INFO_SUCCESS",r="AUTH/CHANGE_LOGIN_INFO",c="AUTH/CHANGE_REGISTER_INFO",i="AUTH/LOGIN",l="AUTH/LOGIN_SUCCESS",s="AUTH/LOGIN_ERROR",m="AUTH/REGISTER",u="AUTH/REGISTER_SUCCESS",d="AUTH/REGISTER_ERROR",p="AUTH/LOGOUT"},BiE5:function(e,n,o){"use strict";o.d(n,"a",(function(){return a})),o.d(n,"c",(function(){return r})),o.d(n,"b",(function(){return c}));var t=o("HYwD"),a=function(e){return{type:t.a,orderInfo:e}},r=function(e){return{type:t.c,order:e}},c=function(e){return{type:t.b,errorMessage:e}}},HYwD:function(e,n,o){"use strict";o.d(n,"a",(function(){return t})),o.d(n,"c",(function(){return a})),o.d(n,"b",(function(){return r}));var t="ORDER/CREATE_ORDER",a="ORDER/CREATE_ORDER_SUCCESS",r="ORDER/CREATE_ORDER_ERROR"},cbF9:function(e,n,o){"use strict";o.r(n);var t=o("rePB"),a=o("q1tI"),r=o.n(a),c=o("/MKj"),i=o("ZhIB"),l=o.n(i),s=o("0YDr"),m=o.n(s),u=o("+gp5"),d=o("nSkU"),p=o("BiE5"),h=r.a.createElement;function f(e,n){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),o.push.apply(o,t)}return o}function b(e){for(var n=1;n<arguments.length;n++){var o=null!=arguments[n]?arguments[n]:{};n%2?f(Object(o),!0).forEach((function(n){Object(t.a)(e,n,o[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):f(Object(o)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(o,n))}))}return e}var g=function(e){return e.cart},_=function(e){return e.auth},w=function(e){return e.order};n.default=function(e){var n=Object(c.b)(),o=Object(c.c)(g).products,i=Object(c.c)(_),s=i.userInfo,f=(i.login,i.register,Object(c.c)(w)),N=(f.loading,f.success,f.fetched,f.errorMessage,Object(a.useState)({expandedLogin:!1,expandedVoucher:!1,paymentMethod:"cod",loginInfo:{phone:"",password:""},orderInfo:{name:"",address:"",city:"",phone:"",email:"",note:""}})),y=N[0],v=N[1];Object(a.useEffect)((function(){s._id&&v(b(b({},y),{},{orderInfo:b(b({},y.orderInfo),{},{name:s.name,address:s.address||"",phone:s.phone,email:s.email||""})}))}),[s]);var k=function(e,n){v(b(b({},y),{},{loginInfo:b(b({},y.loginInfo),{},Object(t.a)({},e,n))}))},O=function(e,n){v(b(b({},y),{},{orderInfo:b(b({},y.orderInfo),{},Object(t.a)({},e,n))}))};return h(u.a,{className:"page-template-default page page-id-9 logged-in wp-custom-logo theme-hello-elementor woocommerce-checkout woocommerce-page woocommerce-js elementor-default elementor-kit-76 eael-woo-checkout"},h("main",{className:"site-main post-9 page type-page status-publish hentry",role:"main"},h("header",{className:"page-header"},h("h1",{className:"entry-title"},"Thanh to\xe1n")),h("div",{className:"page-content"},h("div",{className:"woocommerce"},!s._id&&h(r.a.Fragment,null,h("div",{className:"woocommerce-form-login-toggle"},h("div",{className:"woocommerce-info"},"B\u1ea1n \u0111\xe3 c\xf3 t\xe0i kho\u1ea3n?",h("a",{onClick:function(){return v(b(b({},y),{},{expandedLogin:!y.expandedLogin}))},className:"showlogin",style:{color:"#CC3366",cursor:"pointer"}},"\u1ea4n v\xe0o \u0111\xe2y \u0111\u1ec3 \u0111\u0103ng nh\u1eadp"))),h("form",{className:"woocommerce-form woocommerce-form-login login",onSubmit:function(e){e.preventDefault(),n(Object(d.c)(y.loginInfo.phone,y.loginInfo.password))},style:{display:y.expandedLogin?"block":"none"}},h("p",null,"If you have shopped with us before, please enter your details below. If you are a new customer, please proceed to the Billing section."),h("p",{className:"form-row form-row-first"},h("label",{for:"username"},"S\u1ed1 \u0111i\u1ec7n tho\u1ea1i\xa0",h("span",{className:"required"},"*")),h("input",{type:"text",className:"input-text",name:"username",id:"username",autocomplete:"username",value:y.loginInfo.phone,onChange:function(e){return k("phone",e.target.value)}})),h("p",{className:"form-row form-row-last"},h("label",{for:"password"},"M\u1eadt kh\u1ea9u\xa0",h("span",{className:"required"},"*")),h("input",{className:"input-text",type:"password",name:"password",id:"password",autocomplete:"current-password",value:y.loginInfo.password,onChange:function(e){return k("password",e.target.value)}})),h("div",{className:"clear"}),h("p",{className:"form-row"},h("label",{className:"woocommerce-form__label woocommerce-form__label-for-checkbox woocommerce-form-login__rememberme"},h("input",{className:"woocommerce-form__input woocommerce-form__input-checkbox",name:"rememberme",type:"checkbox",id:"rememberme",value:"forever"}),h("span",null,"Ghi nh\u1edb m\u1eadt kh\u1ea9u")),h("button",{type:"submit",className:"woocommerce-button button woocommerce-form-login__submit",name:"login",value:"\u0110\u0103ng nh\u1eadp"},"\u0110\u0103ng nh\u1eadp")),h("p",{className:"lost_password"},h("a",{href:"../tai-khoan/lost-password/index.html"},"Qu\xean m\u1eadt kh\u1ea9u?")),h("div",{className:"clear"}))),h("div",{className:"woocommerce-form-coupon-toggle"},h("div",{className:"woocommerce-info"},"B\u1ea1n c\xf3 m\xe3 \u01b0u \u0111\xe3i?",h("a",{onClick:function(){return v(b(b({},y),{},{expandedVoucher:!y.expandedVoucher}))},className:"showcoupon",style:{color:"#CC3366",cursor:"pointer"}},"\u1ea4n v\xe0o \u0111\xe2y \u0111\u1ec3 nh\u1eadp m\xe3"))),h("form",{className:"checkout_coupon woocommerce-form-coupon",method:"post",style:{display:y.expandedVoucher?"block":"none"}},h("p",null,"N\u1ebfu b\u1ea1n c\xf3 m\xe3 gi\u1ea3m gi\xe1, vui l\xf2ng \u0111i\u1ec1n v\xe0o ph\xeda b\xean d\u01b0\u1edbi."),h("p",{className:"form-row form-row-first"},h("input",{type:"text",name:"coupon_code",className:"input-text",placeholder:"M\xe3 \u01b0u \u0111\xe3i",id:"coupon_code",value:""})),h("p",{className:"form-row form-row-last"},h("button",{type:"submit",className:"button",name:"apply_coupon",value:"\xc1p d\u1ee5ng"},"\xc1p d\u1ee5ng")),h("div",{className:"clear"})),h("div",{className:"woocommerce-notices-wrapper"}),h("form",{name:"checkout",className:"checkout woocommerce-checkout",onSubmit:function(e){e.preventDefault();var t={};o.map((function(e){var n=e.amount,o=e.product;t[o.ident]=n})),n(Object(p.a)(b(b({},y.orderInfo),{},{products:t})))}},h("div",{className:"col2-set",id:"customer_details"},h("div",{className:"col-1"},h("div",{className:"woocommerce-billing-fields"},h("h3",null,"Th\xf4ng tin thanh to\xe1n"),h("div",{className:"woocommerce-billing-fields__field-wrapper"},h("p",{className:"form-row form-row-first validate-required",id:"billing_first_name_field","data-priority":"10"},h("label",{for:"billing_first_name",className:""},"T\xean\xa0",h("abbr",{className:"required",title:"b\u1eaft bu\u1ed9c"},"*")),h("span",{className:"woocommerce-input-wrapper"},h("input",{type:"text",className:"input-text",name:"billing_first_name",id:"billing_first_name",placeholder:"",autocomplete:"given-name",value:y.orderInfo.name,onChange:function(e){return O("name",e.target.value)}}))),h("p",{className:"form-row form-row-wide address-field validate-required",id:"billing_address_1_field","data-priority":"50"},h("label",{for:"billing_address_1",className:""},"\u0110\u1ecba ch\u1ec9\xa0",h("abbr",{className:"required",title:"b\u1eaft bu\u1ed9c"},"*")),h("span",{className:"woocommerce-input-wrapper"},h("input",{type:"text",className:"input-text",name:"billing_address_1",id:"billing_address_1",placeholder:"\u0110\u1ecba ch\u1ec9",autocomplete:"address-line1",value:y.orderInfo.address,onChange:function(e){return O("address",e.target.value)}}))),h("p",{className:"form-row form-row-wide address-field validate-required",id:"billing_city_field","data-priority":"70"},h("label",{for:"billing_city",className:""},"T\u1ec9nh / Th\xe0nh ph\u1ed1\xa0",h("abbr",{className:"required",title:"b\u1eaft bu\u1ed9c"},"*")),h("span",{className:"woocommerce-input-wrapper"},h("input",{type:"text",className:"input-text",name:"billing_city",id:"billing_city",placeholder:"",autocomplete:"address-level2",value:y.orderInfo.city,onChange:function(e){return O("city",e.target.value)}}))),h("p",{className:"form-row form-row-wide validate-required validate-phone",id:"billing_phone_field","data-priority":"100"},h("label",{for:"billing_phone",className:""},"S\u1ed1 \u0111i\u1ec7n tho\u1ea1i\xa0",h("abbr",{className:"required",title:"b\u1eaft bu\u1ed9c"},"*")),h("span",{className:"woocommerce-input-wrapper"},h("input",{type:"tel",className:"input-text",name:"billing_phone",id:"billing_phone",placeholder:"",autocomplete:"tel",value:y.orderInfo.phone,onChange:function(e){return O("phone",e.target.value)}}))),h("p",{className:"form-row form-row-wide validate-required validate-email",id:"billing_email_field","data-priority":"110"},h("label",{for:"billing_email",className:""},"\u0110\u1ecba ch\u1ec9 email\xa0",h("abbr",{className:"required",title:"b\u1eaft bu\u1ed9c"},"*")),h("span",{className:"woocommerce-input-wrapper"},h("input",{type:"email",className:"input-text",name:"billing_email",id:"billing_email",placeholder:"",autocomplete:"email",value:y.orderInfo.email,onChange:function(e){return O("email",e.target.value)}})))))),h("div",{className:"col-2"},h("div",{className:"woocommerce-shipping-fields"}),h("div",{className:"woocommerce-additional-fields"},h("h3",null,"Th\xf4ng tin b\u1ed5 sung"),h("div",{className:"woocommerce-additional-fields__field-wrapper"},h("p",{className:"form-row notes",id:"order_comments_field","data-priority":""},h("label",{for:"order_comments",className:""},"Ghi ch\xfa \u0111\u01a1n h\xe0ng\xa0",h("span",{className:"optional"},"(tu\u1ef3 ch\u1ecdn)")),h("span",{className:"woocommerce-input-wrapper"},h("textarea",{name:"order_comments",className:"input-text",id:"order_comments",placeholder:"Ghi ch\xfa v\u1ec1 \u0111\u01a1n h\xe0ng, v\xed d\u1ee5: th\u1eddi gian hay ch\u1ec9 d\u1eabn \u0111\u1ecba \u0111i\u1ec3m giao h\xe0ng chi ti\u1ebft h\u01a1n.",rows:"2",cols:"5",value:y.orderInfo.note,onChange:function(e){return O("note",e.target.value)}}))))))),h("h3",{id:"order_review_heading"},"\u0110\u01a1n h\xe0ng c\u1ee7a b\u1ea1n"),h("div",{id:"order_review",className:"woocommerce-checkout-review-order"},h("table",{className:"shop_table woocommerce-checkout-review-order-table"},h("thead",null,h("tr",null,h("th",{className:"product-name"},"S\u1ea3n ph\u1ea9m"),h("th",{className:"product-total"},"T\u1ea1m t\xednh"))),h("tbody",null,o.map((function(e){var n=e.amount,o=e.product,t=o.name,a=o.price,r=o.discount;return h("tr",{className:"cart_item"},h("td",{className:"product-name"},t,"\xa0",h("strong",{className:"product-quantity"},"\xd7\xa0",n)),h("td",{className:"product-total"},h("span",{className:"woocommerce-Price-amount amount"},h("bdi",null,l()(a-r).format("0,0"),h("span",{className:"woocommerce-Price-currencySymbol"},"\u20ab")))))}))),h("tfoot",null,h("tr",{className:"cart-subtotal"},h("th",null,"T\u1ea1m t\xednh"),h("td",null,h("span",{className:"woocommerce-Price-amount amount"},h("bdi",null,l()(m()(o.map((function(e){var n=e.amount,o=e.product,t=void 0===o?{}:o;return n*((t.price||0)-(t.discount||0))})))).format("0,0"),h("span",{className:"woocommerce-Price-currencySymbol"},"\u20ab"))))),h("tr",{className:"order-total"},h("th",null,"T\u1ed5ng"),h("td",null,h("strong",null,h("span",{className:"woocommerce-Price-amount amount"},h("bdi",null,l()(m()(o.map((function(e){var n=e.amount,o=e.product,t=void 0===o?{}:o;return n*((t.price||0)-(t.discount||0))})))).format("0,0"),h("span",{className:"woocommerce-Price-currencySymbol"},"\u20ab")))))))),h("div",{id:"payment",className:"woocommerce-checkout-payment"},h("ul",{className:"wc_payment_methods payment_methods methods"},h("li",{className:"wc_payment_method payment_method_cod",onClick:function(){return v(b(b({},y),{},{paymentMethod:"cod"}))}},h("input",{id:"payment_method_cod",type:"radio",className:"input-radio",name:"payment_method",value:"cod",checked:"cod"===y.paymentMethod?"checked":""}),h("label",{for:"payment_method_cod"},"Tr\u1ea3 ti\u1ec1n m\u1eb7t khi nh\u1eadn h\xe0ng"),h("div",{className:"payment_box payment_method_cod",style:{display:"cod"===y.paymentMethod?"block":"none"}},h("p",null,"Tr\u1ea3 ti\u1ec1n m\u1eb7t khi giao h\xe0ng"))),h("li",{className:"wc_payment_method payment_method_vnpay",onClick:function(){return v(b(b({},y),{},{paymentMethod:"vnpay"}))}},h("input",{id:"payment_method_vnpay",type:"radio",className:"input-radio",name:"payment_method",value:"vnpay",checked:"vnpay"===y.paymentMethod?"checked":""}),h("label",{for:"payment_method_vnpay"},"Thanh to\xe1n qua VNPAY"),h("div",{className:"payment_box payment_method_vnpay",style:{display:"vnpay"===y.paymentMethod?"block":"none"}},h("p",null,"Thanh to\xe1n tr\u1ef1c tuy\u1ebfn qua VNPAY")))),h("div",{className:"form-row place-order"},h("noscript",null,"Tr\xecnh duy\u1ec7t c\u1ee7a b\u1ea1n kh\xf4ng h\u1ed7 tr\u1ee3 JavaScript, ho\u1eb7c n\xf3 b\u1ecb v\xf4 hi\u1ec7u h\xf3a, h\xe3y \u0111\u1ea3m b\u1ea3o b\u1ea1n nh\u1ea5p v\xe0o",h("em",null,"C\u1eadp nh\u1eadt gi\u1ecf h\xe0ng")," tr\u01b0\u1edbc khi b\u1ea1n thanh to\xe1n. B\u1ea1n c\xf3 th\u1ec3 ph\u1ea3i tr\u1ea3 nhi\u1ec1u h\u01a1n s\u1ed1 ti\u1ec1n \u0111\xe3 n\xf3i \u1edf tr\xean, n\u1ebfu b\u1ea1n kh\xf4ng l\xe0m nh\u01b0 v\u1eady. ",h("br",null),h("button",{type:"submit",className:"button alt",name:"woocommerce_checkout_update_totals",value:"C\u1eadp nh\u1eadt t\u1ed5ng"},"C\u1eadp nh\u1eadt t\u1ed5ng")),h("div",{className:"woocommerce-terms-and-conditions-wrapper"},h("div",{className:"woocommerce-privacy-policy-text"},h("p",null,"Th\xf4ng tin c\xe1 nh\xe2n c\u1ee7a b\u1ea1n s\u1ebd \u0111\u01b0\u1ee3c s\u1eed d\u1ee5ng \u0111\u1ec3 x\u1eed l\xfd \u0111\u01a1n h\xe0ng, t\u0103ng tr\u1ea3i nghi\u1ec7m s\u1eed d\u1ee5ng website, v\xe0 cho c\xe1c m\u1ee5c \u0111\xedch c\u1ee5 th\u1ec3 kh\xe1c \u0111\xe3 \u0111\u01b0\u1ee3c m\xf4 t\u1ea3 trong",h("a",{href:"../cham-soc-khach-hang/chinh-sach-bao-mat/index.html",className:"woocommerce-privacy-policy-link",target:"_blank"},"ch\xednh s\xe1ch ri\xeang t\u01b0"),"."))),h("button",{type:"submit",className:"button alt",name:"woocommerce_checkout_place_order",id:"place_order",value:"\u0110\u1eb7t h\xe0ng","data-value":"\u0110\u1eb7t h\xe0ng"},"\u0110\u1eb7t h\xe0ng")))))))))}},gqHh:function(e,n,o){(window.__NEXT_P=window.__NEXT_P||[]).push(["/thanh-toan",function(){return o("cbF9")}])},nSkU:function(e,n,o){"use strict";o.d(n,"a",(function(){return a})),o.d(n,"b",(function(){return r})),o.d(n,"c",(function(){return c})),o.d(n,"e",(function(){return i})),o.d(n,"d",(function(){return l})),o.d(n,"f",(function(){return s})),o.d(n,"h",(function(){return m})),o.d(n,"g",(function(){return u}));var t=o("8FJ3"),a=function(e){return{type:t.c,accessToken:e}},r=function(e){return{type:t.d,userInfo:e}},c=function(e,n){return{type:t.e,phone:e,password:n}},i=function(e){return{type:t.g,userInfo:e}},l=function(e){return{type:t.f,errorMessage:e}},s=function(e,n){return{type:t.i,phone:e,password:n}},m=function(e){return{type:t.k,userInfo:e}},u=function(e){return{type:t.j,errorMessage:e}}},rePB:function(e,n,o){"use strict";function t(e,n,o){return n in e?Object.defineProperty(e,n,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[n]=o,e}o.d(n,"a",(function(){return t}))},zZ0H:function(e,n){e.exports=function(e){return e}}},[["gqHh",0,1,2,5]]]);