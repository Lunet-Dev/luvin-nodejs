_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[35],{"0YDr":function(t,e,n){var r=n("7Paf"),o=n("zZ0H");t.exports=function(t){return t&&t.length?r(t,o):0}},"7Paf":function(t,e){t.exports=function(t,e){for(var n,r=-1,o=t.length;++r<o;){var c=e(t[r]);void 0!==c&&(n=void 0===n?c:n+c)}return n}},BiE5:function(t,e,n){"use strict";n.d(e,"a",(function(){return o})),n.d(e,"c",(function(){return c})),n.d(e,"b",(function(){return u})),n.d(e,"g",(function(){return a})),n.d(e,"i",(function(){return i})),n.d(e,"h",(function(){return l})),n.d(e,"d",(function(){return s})),n.d(e,"f",(function(){return m})),n.d(e,"e",(function(){return d})),n.d(e,"j",(function(){return p})),n.d(e,"l",(function(){return h})),n.d(e,"k",(function(){return f}));var r=n("HYwD"),o=function(t){return{type:r.a,orderInfo:t}},c=function(t){return{type:r.c,order:t}},u=function(t){return{type:r.b,errorMessage:t}},a=function(){return{type:r.g}},i=function(t){return{type:r.i,orders:t}},l=function(t){return{type:r.h,errorMessage:t}},s=function(t){return{type:r.d,orderId:t}},m=function(t){return{type:r.f,order:t}},d=function(t){return{type:r.e,errorMessage:t}},p=function(t){return{type:r.j,code:t}},h=function(t){return{type:r.l,voucherData:t}},f=function(t){return{type:r.k,errorMessage:t}}},HYwD:function(t,e,n){"use strict";n.d(e,"a",(function(){return r})),n.d(e,"c",(function(){return o})),n.d(e,"b",(function(){return c})),n.d(e,"g",(function(){return u})),n.d(e,"i",(function(){return a})),n.d(e,"h",(function(){return i})),n.d(e,"d",(function(){return l})),n.d(e,"f",(function(){return s})),n.d(e,"e",(function(){return m})),n.d(e,"j",(function(){return d})),n.d(e,"l",(function(){return p})),n.d(e,"k",(function(){return h}));var r="ORDER/CREATE_ORDER",o="ORDER/CREATE_ORDER_SUCCESS",c="ORDER/CREATE_ORDER_ERROR",u="ORDER/GET_ORDER_HISTORY",a="ORDER/GET_ORDER_HISTORY_SUCCESS",i="ORDER/GET_ORDER_HISTORY_ERROR",l="ORDER/GET_ORDER_DETAIL",s="ORDER/GET_ORDER_DETAIL_SUCCESS",m="ORDER/GET_ORDER_DETAIL_ERROR",d="ORDER/REDEEM_VOUCHER",p="ORDER/REDEEM_VOUCHER_SUCCESS",h="ORDER/REDEEM_VOUCHER_ERROR"},LfCl:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/tai-khoan/view-order/[orderId]",function(){return n("y42D")}])},y42D:function(t,e,n){"use strict";n.r(e);var r=n("q1tI"),o=n.n(r),c=n("8Kt/"),u=n.n(c),a=n("nOHt"),i=n("/MKj"),l=n("wd/R"),s=n.n(l),m=n("0YDr"),d=n.n(m),p=n("ZhIB"),h=n.n(p),f=n("+gp5"),R=n("BiE5"),E=o.a.createElement,_=function(t){return t.order};e.default=function(t){var e=Object(a.useRouter)(),n=Object(i.b)(),o=Object(i.c)(_).detail;Object(r.useEffect)((function(){n(Object(R.d)(e.query.orderId))}),[]);var c=o.order;return E("div",null,E(f.a,{className:"page-template-default page page-id-10 wp-custom-logo theme-hello-elementor woocommerce-account woocommerce-page woocommerce-no-js elementor-default elementor-kit-76"},E(u.a,null,E("title",null,"T\xe0i kho\u1ea3n - Luvin"),E("meta",{name:"description",content:"T\u1ea5t c\u1ea3 c\xe1c s\u1ea3n ph\u1ea9m r\u01b0\u1ee3u vang \u0111\u01b0\u1ee3c l\xean men t\u1ef1 nhi\xean v\xe0 c\xf3 n\u1ed3ng \u0111\u1ed9 c\u1ed3n d\u01b0\u1edbi 15 \u0111\u1ed9"}),E("meta",{property:"og:type",content:"website"}),E("meta",{property:"og:title",content:"T\xe0i kho\u1ea3n - Luvin"}),E("meta",{property:"og:url",content:"https://luvin.com.vn"}),E("meta",{property:"og:site_name",content:"Luvin"}),E("meta",{property:"og:image",content:"https://luvin.com.vn/images/banner.jpg"}),E("meta",{property:"og:image:width",content:"1200"}),E("meta",{property:"og:image:height",content:"630"})),E("main",{className:"site-main post-10 page type-page status-publish hentry",role:"main"},E("header",{className:"page-header"},E("h1",{className:"entry-title"},"T\xe0i kho\u1ea3n")),E("div",{className:"page-content"},E("div",{class:"woocommerce"},E("div",{class:"woocommerce-MyAccount-content",style:{width:"100%"}},E("div",{class:"woocommerce-notices-wrapper"}),E("p",null,"\u0110\u01a1n h\xe0ng #",E("mark",{class:"order-number"},c._id)," \u0111\xe3 \u0111\u01b0\u1ee3c \u0111\u1eb7t l\xfac"," ",E("mark",{class:"order-date"},s()(c.createdAt).format("mm:hh DD-MM-YYYY"))," ","v\xe0 hi\u1ec7n t\u1ea1i l\xe0"," ",E("mark",{class:"order-status"},c.status),"."),E("section",{class:"woocommerce-order-details"},E("h2",{class:"woocommerce-order-details__title"},"Chi ti\u1ebft \u0111\u01a1n h\xe0ng"),E("table",{class:"woocommerce-table woocommerce-table--order-details shop_table order_details"},E("thead",null,E("tr",null,E("th",{class:"woocommerce-table__product-name product-name"},"S\u1ea3n ph\u1ea9m"),E("th",{class:"woocommerce-table__product-table product-total"},"T\u1ed5ng"))),E("tbody",null,(c.orderDetails||[]).map((function(t){var e=t.productId,n=t.quantity,r=t.totalPrice;return E("tr",{class:"woocommerce-table__line-item order_item"},E("td",{class:"woocommerce-table__product-name product-name"},E("a",{href:"http://luvinhtml.ekipapi.com/shop/t-shirt-with-logo/"},e.name)," ",E("strong",{class:"product-quantity"},"\xd7\xa0",n)," "),E("td",{class:"woocommerce-table__product-total product-total"},E("span",{class:"woocommerce-Price-amount amount"},E("bdi",null,h()(r).format("0,0"),E("span",{class:"woocommerce-Price-currencySymbol"},"\u20ab")))," "))}))),E("tfoot",null,E("tr",null,E("th",{scope:"row"},"T\u1ed5ng s\u1ed1 ph\u1ee5:"),E("td",null,E("span",{class:"woocommerce-Price-amount amount"},h()(d()((c.orderDetails||[]).map((function(t){return t.totalPrice})))).format("0,0"),E("span",{class:"woocommerce-Price-currencySymbol"},"\u20ab")))),(c.voucher||{}).value&&E("tr",null,E("th",{scope:"row"},"M\xe3 gi\u1ea3m gi\xe1:"),E("td",null,h()(c.voucher.voucherId.value).format("0,0"),E("span",{class:"woocommerce-Price-currencySymbol"},"\u20ab"))),E("tr",null,E("th",{scope:"row"},"Ph\u01b0\u01a1ng th\u1ee9c thanh to\xe1n:"),E("td",null,c.paymentMethod)),E("tr",null,E("th",{scope:"row"},"T\u1ed5ng c\u1ed9ng:"),E("td",null,E("span",{class:"woocommerce-Price-amount amount"},function(){var t=d()((c.orderDetails||[]).map((function(t){return t.totalPrice})))-((c.voucher||{}).value||0);return h()(t).format("0,0")}(),E("span",{class:"woocommerce-Price-currencySymbol"},"\u20ab")))),E("tr",null,E("th",{scope:"row"},"Tr\u1ea1ng th\xe1i thanh to\xe1n:"),E("td",null,c.paid?"\u0110\xe3 thanh to\xe1n":"Ch\u01b0a thanh to\xe1n"))))),E("section",{class:"woocommerce-customer-details"},E("h2",{class:"woocommerce-column__title"},"\u0110\u1ecba ch\u1ec9 thanh to\xe1n"),E("address",null,c.name,E("br",null),c.shipAddress,E("br",null),c.shipCity,E("p",{class:"woocommerce-customer-details--phone"},c.phone),E("p",{class:"woocommerce-customer-details--email"},c.email)))))))))}},zZ0H:function(t,e){t.exports=function(t){return t}}},[["LfCl",0,1,7,2,3,4,5,8]]]);