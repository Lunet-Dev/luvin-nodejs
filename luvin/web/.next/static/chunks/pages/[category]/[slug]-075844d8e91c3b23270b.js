_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[9],{"/9aa":function(e,t,n){var o=n("NykK"),a=n("ExA7");e.exports=function(e){return"symbol"==typeof e||a(e)&&"[object Symbol]"==o(e)}},"0JQy":function(e,t){var n="[\\ud800-\\udfff]",o="[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]",a="\\ud83c[\\udffb-\\udfff]",r="[^\\ud800-\\udfff]",c="(?:\\ud83c[\\udde6-\\uddff]){2}",i="[\\ud800-\\udbff][\\udc00-\\udfff]",l="(?:"+o+"|"+a+")"+"?",m="[\\ufe0e\\ufe0f]?"+l+("(?:\\u200d(?:"+[r,c,i].join("|")+")[\\ufe0e\\ufe0f]?"+l+")*"),s="(?:"+[r+o+"?",o,c,i,n].join("|")+")",u=RegExp(a+"(?="+a+")|"+s+m,"g");e.exports=function(e){return e.match(u)||[]}},"0ZTe":function(e,t,n){var o=n("wy8a"),a=n("quyA"),r=n("Em2t"),c=n("dt0z");e.exports=function(e){return function(t){t=c(t);var n=a(t)?r(t):void 0,i=n?n[0]:t.charAt(0),l=n?o(n,1).join(""):t.slice(1);return i[e]()+l}}},"6acW":function(e,t,n){var o=n("dt0z"),a=n("gQMU");e.exports=function(e){return a(o(e).toLowerCase())}},"6lzq":function(e,t,n){"use strict";n.d(t,"c",(function(){return a})),n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return c}));var o=n("BzKi"),a=function(){return{type:o.c}},r=function(e,t){return{type:o.a,amount:e,product:t}},c=function(e){return{type:o.b,index:e}}},AP2z:function(e,t,n){var o=n("nmnc"),a=Object.prototype,r=a.hasOwnProperty,c=a.toString,i=o?o.toStringTag:void 0;e.exports=function(e){var t=r.call(e,i),n=e[i];try{e[i]=void 0;var o=!0}catch(l){}var a=c.call(e);return o&&(t?e[i]=n:delete e[i]),a}},BJqd:function(e,t,n){"use strict";n.r(t);var o=n("o0o1"),a=n.n(o),r=n("HaE+"),c=n("rePB"),i=n("q1tI"),l=n.n(i),m=n("/MKj"),s=n("ZhIB"),u=n.n(s),d=n("6acW"),p=n.n(d),f=n("JO7b"),v=n("6lzq"),b=l.a.createElement;function g(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function w(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?g(Object(n),!0).forEach((function(t){Object(c.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):g(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var h=function(e){return e.product};function N(e){var t=Object(m.b)(),n=Object(m.c)(h),o=n.product,a=(n.loading,n.fetched,n.errorMessage,Object(i.useState)({tabActive:1,productAmount:1})),r=a[0],c=a[1],l=Object(i.useMemo)((function(){return o}),[o]),s=l.name,d=l.description,f=(l.slug,l.images,l.quantity,l.price),g=l.type,N=l.origin,y=l.discount,_=l.reviews,x=void 0===_?[]:_,j=Object(i.useMemo)((function(){return y/f*100}),[y,f]);return b("div",{className:"product-template-default single single-product postid-280 wp-custom-logo theme-hello-elementor woocommerce woocommerce-page woocommerce-no-js elementor-default elementor-template-full-width elementor-kit-76 elementor-page-667"},b("div",{className:"elementor elementor-667 elementor-location-single post-280 product type-product status-publish has-post-thumbnail product_cat-banh-mi product_cat-ruou-vang pa_loai-vang-vang-do pa_nguon-goc-vang-viet-nam first instock sale shipping-taxable purchasable product-type-simple product"},b("div",{className:"elementor-section-wrap"},b("section",{className:"elementor-section elementor-top-section elementor-element elementor-element-3cef354 elementor-section-boxed elementor-section-height-default elementor-section-height-default"},b("div",{className:"elementor-container elementor-column-gap-default"},b("div",{className:"elementor-row"},b("div",{className:"elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-61ca339"},b("div",{className:"elementor-column-wrap elementor-element-populated"},b("div",{className:"elementor-widget-wrap"},b("section",{className:"elementor-section elementor-inner-section elementor-element elementor-element-c473513 elementor-section-boxed elementor-section-height-default elementor-section-height-default"},b("div",{className:"elementor-container elementor-column-gap-wide"},b("div",{className:"elementor-row"},b("div",{className:"elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-1b6e117"},b("div",{className:"elementor-column-wrap elementor-element-populated"},b("div",{className:"elementor-widget-wrap"},b("div",{className:"elementor-element elementor-element-51066a0 yes elementor-widget elementor-widget-woocommerce-product-images"},b("div",{className:"elementor-widget-container"},b("div",{className:"woocommerce-product-gallery woocommerce-product-gallery--with-images woocommerce-product-gallery--columns-4 images","data-columns":"4",style:{opacity:0,transition:"opacity 0.25s ease-in-out"}},b("figure",{className:"woocommerce-product-gallery__wrapper"},b("div",{"data-thumb":"http://luvinhtm.test/wp-content/uploads/pexels-kenneth-2912108-100x100.jpg","data-thumb-alt":"",className:"woocommerce-product-gallery__image"},b("a",{href:"http://luvinhtml.ekipapi.com/static/wp-content/uploads/pexels-kenneth-2912108.jpg"},b("img",{width:"400",height:"400",src:"http://luvinhtml.ekipapi.com/static/wp-content/uploads/pexels-kenneth-2912108.jpg",className:"wp-post-image",alt:"",title:"pexels-kenneth-2912108","data-caption":"","data-src":"http://luvinhtm.test/wp-content/uploads/pexels-kenneth-2912108.jpg","data-large_image":"http://luvinhtm.test/wp-content/uploads/pexels-kenneth-2912108.jpg","data-large_image_width":"400","data-large_image_height":"400",srcset:" http://luvinhtm.test/wp-content/uploads/pexels-kenneth-2912108.jpg         400w, http://luvinhtm.test/wp-content/uploads/pexels-kenneth-2912108-100x100.jpg 100w, http://luvinhtm.test/wp-content/uploads/pexels-kenneth-2912108-300x300.jpg 300w, http://luvinhtm.test/wp-content/uploads/pexels-kenneth-2912108-150x150.jpg 150w ",sizes:"(max-width: 400px) 100vw, 400px"})))))))))),b("div",{className:"elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-efddc46"},b("div",{className:"elementor-column-wrap elementor-element-populated"},b("div",{className:"elementor-widget-wrap"},b("div",{style:{display:"block"},className:"elementor-element elementor-element-605425c elementor-widget elementor-widget-woocommerce-product-title elementor-page-title elementor-widget-heading"},b("div",{className:"elementor-widget-container"},b("h1",{style:{display:"block"},className:"product_title entry-title elementor-heading-title elementor-size-default"},s))),b("div",{className:"elementor-element elementor-element-c84fa27 elementor-widget elementor-widget-html"},b("div",{className:"elementor-widget-container"},b("p",{className:"arterm"},b("i",{className:"fas fa-wine-bottle"}),"\xa0",p()(g)),b("p",{className:"arterm"},b("i",{className:"fas fa-globe-africa"}),"\xa0",p()(N)))),b("div",{className:"elementor-element elementor-element-673c794 elementor-widget elementor-widget-woocommerce-product-price"},b("div",{className:"elementor-widget-container"},b("p",{className:"price"},!!j&&b("del",null,b("span",{className:"woocommerce-Price-amount amount"},b("bdi",null,u()(f).format("0,0"),b("span",{className:"woocommerce-Price-currencySymbol"},"\u20ab")))),b("ins",null,b("span",{className:"woocommerce-Price-amount amount"},b("bdi",null,u()(f-y).format("0,0"),b("span",{className:"woocommerce-Price-currencySymbol"},"\u20ab"))))))),b("div",{className:"elementor-element elementor-element-6912e3d elementor-widget elementor-widget-woocommerce-product-add-to-cart"},b("div",{className:"elementor-widget-container"},b("div",{className:"elementor-add-to-cart elementor-product-simple"},b("form",{className:"cart"},b("div",{className:"quantity"},b("input",{type:"number",id:"quantity_5f9cb95cab1f6",className:"input-text qty text",step:"1",min:"1",max:"",name:"quantity",title:"SL",placeholder:"",value:r.productAmount,onChange:function(e){return c(w(w({},r),{},{productAmount:parseInt(e.target.value)}))}})),b("button",{name:"add-to-cart",value:"280",className:"single_add_to_cart_button button alt",onClick:function(e){e.preventDefault(),t(Object(v.a)(r.productAmount,o)),c(w(w({},r),{},{productAmount:1}))}},"\u0110\u1eb7t mua"))))),b("div",{className:"elementor-element elementor-element-64b817e elementor-widget elementor-widget-woocommerce-product-short-description"},b("div",{className:"elementor-widget-container"},b("div",{className:"woocommerce-product-details__short-description"},b("p",null,d)))))))))),b("section",{className:"elementor-section elementor-inner-section elementor-element elementor-element-54eeaa3 elementor-section-boxed elementor-section-height-default elementor-section-height-default"},b("div",{className:"elementor-container elementor-column-gap-wide"},b("div",{className:"elementor-row"},b("div",{className:"elementor-column elementor-col-100 elementor-inner-column elementor-element elementor-element-895ef0b"},b("div",{className:"elementor-column-wrap elementor-element-populated"},b("div",{className:"elementor-widget-wrap"},b("div",{className:"elementor-element elementor-element-a6746ee elementor-widget elementor-widget-woocommerce-product-data-tabs"},b("div",{className:"elementor-widget-container"},b("div",{className:"woocommerce-tabs wc-tabs-wrapper"},b("ul",{className:"tabs wc-tabs"},b("li",{className:"reviews_tab ".concat(1===r.tabActive&&"active"),"aria-controls":"tab-description",onClick:function(){return c(w(w({},r),{},{tabActive:1}))}},b("a",null," M\xf4 t\u1ea3 ")),b("li",{className:"reviews_tab ".concat(2===r.tabActive&&"active"),"aria-controls":"tab-additional_information",onClick:function(){return c(w(w({},r),{},{tabActive:2}))}},b("a",null,"Th\xf4ng tin b\u1ed5 sung")),b("li",{className:"reviews_tab ".concat(3===r.tabActive&&"active"),"aria-controls":"tab-reviews",onClick:function(){return c(w(w({},r),{},{tabActive:3}))}},b("a",null,"\u0110\xe1nh gi\xe1 (",x.length,")"))),1===r.tabActive&&b("div",{className:"woocommerce-Tabs-panel woocommerce-Tabs-panel--description panel entry-content wc-tab",id:"tab-description",role:"tabpanel","aria-labelledby":"tab-title-description"},b("h2",null,"M\xf4 t\u1ea3"),b("p",null,d)),2===r.tabActive&&b("div",{className:"woocommerce-Tabs-panel woocommerce-Tabs-panel--additional_information panel entry-content wc-tab",id:"tab-additional_information",role:"tabpanel","aria-labelledby":"tab-title-additional_information"},b("h2",null,"Th\xf4ng tin b\u1ed5 sung"),b("table",{className:"woocommerce-product-attributes shop_attributes"},b("tr",{className:"woocommerce-product-attributes-item woocommerce-product-attributes-item--attribute_pa_loai-vang"},b("th",{className:"woocommerce-product-attributes-item__label"},"Lo\u1ea1i vang"),b("td",{className:"woocommerce-product-attributes-item__value"},b("p",null,b("a",null,p()(g))))),b("tr",{className:"woocommerce-product-attributes-item woocommerce-product-attributes-item--attribute_pa_nguon-goc-vang"},b("th",{className:"woocommerce-product-attributes-item__label"},"Ngu\u1ed3n g\u1ed1c vang"),b("td",{className:"woocommerce-product-attributes-item__value"},b("p",null,b("a",null,p()(N))))))),3===r.tabActive&&b("div",{className:"woocommerce-Tabs-panel woocommerce-Tabs-panel--reviews panel entry-content wc-tab",id:"tab-reviews",role:"tabpanel","aria-labelledby":"tab-title-reviews"},b("div",{id:"reviews",className:"woocommerce-Reviews"},b("div",{id:"comments"},b("h2",{className:"woocommerce-Reviews-title"},"\u0110\xe1nh gi\xe1"),b("p",{className:"woocommerce-noreviews"},"Ch\u01b0a c\xf3 \u0111\xe1nh gi\xe1 n\xe0o."),!!x.length&&b("ol",{className:"commentlist"},x.map((function(e){var t=e.name,n=(e.email,e.rate),o=(e.title,e.description),a=e.createdAt;return b("li",{className:"review byuser comment-author-le bypostauthor even thread-even depth-1",id:"li-comment-2"},b("div",{id:"comment-2",className:"comment_container"},b("img",{alt:"",src:"http://0.gravatar.com/avatar/6992c20086c106fd26523aacdb0aded4?s=60&d=mm&r=g",srcset:"http://0.gravatar.com/avatar/6992c20086c106fd26523aacdb0aded4?s=120&d=mm&r=g 2x",className:"avatar avatar-60 photo",height:"60",width:"60",loading:"lazy"}),b("div",{className:"comment-text"},b("div",{className:"star-rating",role:"img","aria-label":"\u0110\u01b0\u1ee3c x\u1ebfp h\u1ea1ng 5 5 sao"},b("span",{style:{width:"".concat(n/5*100,"%")}},"\u0110\u01b0\u1ee3c x\u1ebfp h\u1ea1ng"," ",b("strong",{className:"rating"},n)," ","5 sao")),b("p",{className:"meta"},b("strong",{className:"woocommerce-review__author"},t),b("span",{className:"woocommerce-review__dash"},"\u2013")," ",b("time",{className:"woocommerce-review__published-date"},a)),b("div",{className:"description"},b("p",null,o)))))})))),b("div",{id:"review_form_wrapper"},b("div",{id:"review_form"},b("div",{id:"respond",className:"comment-respond"},b("span",{id:"reply-title",className:"comment-reply-title"},"H\xe3y l\xe0 ng\u01b0\u1eddi \u0111\u1ea7u ti\xean nh\u1eadn x\xe9t \u201cZuccardi Premium Malbec Tasting Case\u201d",b("small",null,b("a",{rel:"nofollow",id:"cancel-comment-reply-link",href:"index.html#respond",style:{display:"none"}},"H\u1ee7y"))),b("form",{action:"http://luvinhtm.test/wp-comments-post.php",method:"post",id:"commentform",className:"comment-form",novalidate:!0},b("p",{className:"comment-notes"},b("span",{id:"email-notes"},"Email c\u1ee7a b\u1ea1n s\u1ebd kh\xf4ng \u0111\u01b0\u1ee3c hi\u1ec3n th\u1ecb c\xf4ng khai."),"C\xe1c tr\u01b0\u1eddng b\u1eaft bu\u1ed9c \u0111\u01b0\u1ee3c \u0111\xe1nh d\u1ea5u",b("span",{className:"required"},"*")),b("div",{className:"comment-form-rating"},b("label",{for:"rating"},"\u0110\xe1nh gi\xe1 c\u1ee7a b\u1ea1n\xa0",b("span",{className:"required"},"*")),b("select",{name:"rating",id:"rating",required:!0},b("option",{value:""},"X\u1ebfp h\u1ea1ng\u2026"),b("option",{value:"5"},"R\u1ea5t t\u1ed1t"),b("option",{value:"4"},"T\u1ed1t"),b("option",{value:"3"},"Trung b\xecnh"),b("option",{value:"2"},"Kh\xf4ng t\u1ec7"),b("option",{value:"1"},"R\u1ea5t t\u1ec7"))),b("p",{className:"comment-form-comment"},b("label",{for:"comment"},"Nh\u1eadn x\xe9t c\u1ee7a b\u1ea1n\xa0",b("span",{className:"required"},"*")),b("textarea",{id:"comment",name:"comment",cols:"45",rows:"8",required:!0})),b("p",{className:"comment-form-author"},b("label",{for:"author"},"T\xean\xa0",b("span",{className:"required"},"*")),b("input",{id:"author",name:"author",type:"text",value:"",size:"30",required:!0})),b("p",{className:"comment-form-email"},b("label",{for:"email"},"Email\xa0",b("span",{className:"required"},"*")),b("input",{id:"email",name:"email",type:"email",value:"",size:"30",required:!0})),b("p",{className:"comment-form-cookies-consent"},b("input",{id:"wp-comment-cookies-consent",name:"wp-comment-cookies-consent",type:"checkbox",value:"yes"}),b("label",{for:"wp-comment-cookies-consent"},"L\u01b0u t\xean c\u1ee7a t\xf4i, email, v\xe0 trang web trong tr\xecnh duy\u1ec7t n\xe0y cho l\u1ea7n b\xecnh lu\u1eadn k\u1ebf ti\u1ebfp c\u1ee7a t\xf4i.")),b("p",{className:"form-submit"},b("input",{name:"submit",type:"submit",id:"submit",className:"submit",value:"G\u1eedi \u0111i"}),b("input",{type:"hidden",name:"comment_post_ID",value:"280",id:"comment_post_ID"}),b("input",{type:"hidden",name:"comment_parent",id:"comment_parent",value:"0"})))))),b("div",{className:"clear"})))))))))))))))))))))}N.getInitialProps=function(){var e=Object(r.a)(a.a.mark((function e(t){var n,o,r,c;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.ctx,o=n.store,n.req,n.accessToken,r=n.query,c=r.slug,o.dispatch(Object(f.a)(c)),e.abrupt("return",{productSlug:c});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),t.default=N},BzKi:function(e,t,n){"use strict";n.d(t,"c",(function(){return o})),n.d(t,"a",(function(){return a})),n.d(t,"b",(function(){return r}));var o="CART/TOGGLE_CART_MENU",a="CART/ADD_PRODUCT",r="CART/REMOVE_PRODUCT"},Em2t:function(e,t,n){var o=n("bahg"),a=n("quyA"),r=n("0JQy");e.exports=function(e){return a(e)?r(e):o(e)}},ExA7:function(e,t){e.exports=function(e){return null!=e&&"object"==typeof e}},"HaE+":function(e,t,n){"use strict";function o(e,t,n,o,a,r,c){try{var i=e[r](c),l=i.value}catch(m){return void n(m)}i.done?t(l):Promise.resolve(l).then(o,a)}function a(e){return function(){var t=this,n=arguments;return new Promise((function(a,r){var c=e.apply(t,n);function i(e){o(c,a,r,i,l,"next",e)}function l(e){o(c,a,r,i,l,"throw",e)}i(void 0)}))}}n.d(t,"a",(function(){return a}))},JO7b:function(e,t,n){"use strict";n.d(t,"a",(function(){return a})),n.d(t,"c",(function(){return r})),n.d(t,"b",(function(){return c}));var o=n("c31i"),a=function(e){return{type:o.a,productSlug:e}},r=function(e){return{type:o.c,product:e}},c=function(e){return{type:o.b,errorMessage:e}}},KfNM:function(e,t){var n=Object.prototype.toString;e.exports=function(e){return n.call(e)}},KxBF:function(e,t){e.exports=function(e,t,n){var o=-1,a=e.length;t<0&&(t=-t>a?0:a+t),(n=n>a?a:n)<0&&(n+=a),a=t>n?0:n-t>>>0,t>>>=0;for(var r=Array(a);++o<a;)r[o]=e[o+t];return r}},Kz5y:function(e,t,n){var o=n("WFqU"),a="object"==typeof self&&self&&self.Object===Object&&self,r=o||a||Function("return this")();e.exports=r},N3Xa:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/[category]/[slug]",function(){return n("BJqd")}])},NykK:function(e,t,n){var o=n("nmnc"),a=n("AP2z"),r=n("KfNM"),c=o?o.toStringTag:void 0;e.exports=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":c&&c in Object(e)?a(e):r(e)}},WFqU:function(e,t,n){(function(t){var n="object"==typeof t&&t&&t.Object===Object&&t;e.exports=n}).call(this,n("yLpj"))},Z0cm:function(e,t){var n=Array.isArray;e.exports=n},bahg:function(e,t){e.exports=function(e){return e.split("")}},c31i:function(e,t,n){"use strict";n.d(t,"a",(function(){return o})),n.d(t,"c",(function(){return a})),n.d(t,"b",(function(){return r}));var o="PRODUCT/GET_PRODUCT",a="PRODUCT/GET_PRODUCT_SUCCESS",r="PRODUCT/GET_PRODUCT_ERROR"},dt0z:function(e,t,n){var o=n("zoYe");e.exports=function(e){return null==e?"":o(e)}},eUgh:function(e,t){e.exports=function(e,t){for(var n=-1,o=null==e?0:e.length,a=Array(o);++n<o;)a[n]=t(e[n],n,e);return a}},gQMU:function(e,t,n){var o=n("0ZTe")("toUpperCase");e.exports=o},nmnc:function(e,t,n){var o=n("Kz5y").Symbol;e.exports=o},o0o1:function(e,t,n){e.exports=n("ls82")},quyA:function(e,t){var n=RegExp("[\\u200d\\ud800-\\udfff\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff\\ufe0e\\ufe0f]");e.exports=function(e){return n.test(e)}},rePB:function(e,t,n){"use strict";function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,"a",(function(){return o}))},wy8a:function(e,t,n){var o=n("KxBF");e.exports=function(e,t,n){var a=e.length;return n=void 0===n?a:n,!t&&n>=a?e:o(e,t,n)}},zoYe:function(e,t,n){var o=n("nmnc"),a=n("eUgh"),r=n("Z0cm"),c=n("/9aa"),i=o?o.prototype:void 0,l=i?i.toString:void 0;e.exports=function e(t){if("string"==typeof t)return t;if(r(t))return a(t,e)+"";if(c(t))return l?l.call(t):"";var n=t+"";return"0"==n&&1/t==-Infinity?"-0":n}}},[["N3Xa",0,1,2,3,5]]]);