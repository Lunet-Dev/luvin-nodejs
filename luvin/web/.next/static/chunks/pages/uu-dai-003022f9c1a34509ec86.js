_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[41],{"/9aa":function(e,t,n){var o=n("NykK"),r=n("ExA7");e.exports=function(e){return"symbol"==typeof e||r(e)&&"[object Symbol]"==o(e)}},"0JQy":function(e,t){var n="[\\ud800-\\udfff]",o="[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]",r="\\ud83c[\\udffb-\\udfff]",a="[^\\ud800-\\udfff]",c="(?:\\ud83c[\\udde6-\\uddff]){2}",i="[\\ud800-\\udbff][\\udc00-\\udfff]",u="(?:"+o+"|"+r+")"+"?",l="[\\ufe0e\\ufe0f]?"+u+("(?:\\u200d(?:"+[a,c,i].join("|")+")[\\ufe0e\\ufe0f]?"+u+")*"),s="(?:"+[a+o+"?",o,c,i,n].join("|")+")",m=RegExp(r+"(?="+r+")|"+s+l,"g");e.exports=function(e){return e.match(m)||[]}},"0YDr":function(e,t,n){var o=n("7Paf"),r=n("zZ0H");e.exports=function(e){return e&&e.length?o(e,r):0}},"0ZTe":function(e,t,n){var o=n("wy8a"),r=n("quyA"),a=n("Em2t"),c=n("dt0z");e.exports=function(e){return function(t){t=c(t);var n=r(t)?a(t):void 0,i=n?n[0]:t.charAt(0),u=n?o(n,1).join(""):t.slice(1);return i[e]()+u}}},"6acW":function(e,t,n){var o=n("dt0z"),r=n("gQMU");e.exports=function(e){return r(o(e).toLowerCase())}},"6lzq":function(e,t,n){"use strict";n.d(t,"c",(function(){return r})),n.d(t,"a",(function(){return a})),n.d(t,"b",(function(){return c}));var o=n("BzKi"),r=function(){return{type:o.c}},a=function(e,t){return{type:o.a,amount:e,product:t}},c=function(e){return{type:o.b,index:e}}},"7Paf":function(e,t){e.exports=function(e,t){for(var n,o=-1,r=e.length;++o<r;){var a=t(e[o]);void 0!==a&&(n=void 0===n?a:n+a)}return n}},"8Fes":function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"c",(function(){return a})),n.d(t,"b",(function(){return c})),n.d(t,"d",(function(){return i}));var o=n("lDjm"),r=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:12,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;return{type:o.a,limit:e,page:t}},a=function(e,t){return{type:o.c,total:e,products:t}},c=function(e){return{type:o.b,errorMessage:e}},i=function(){return{type:o.d}}},AP2z:function(e,t,n){var o=n("nmnc"),r=Object.prototype,a=r.hasOwnProperty,c=r.toString,i=o?o.toStringTag:void 0;e.exports=function(e){var t=a.call(e,i),n=e[i];try{e[i]=void 0;var o=!0}catch(u){}var r=c.call(e);return o&&(t?e[i]=n:delete e[i]),r}},BzKi:function(e,t,n){"use strict";n.d(t,"c",(function(){return o})),n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return a}));var o="CART/TOGGLE_CART_MENU",r="CART/ADD_PRODUCT",a="CART/REMOVE_PRODUCT"},Em2t:function(e,t,n){var o=n("bahg"),r=n("quyA"),a=n("0JQy");e.exports=function(e){return r(e)?a(e):o(e)}},ExA7:function(e,t){e.exports=function(e){return null!=e&&"object"==typeof e}},KfNM:function(e,t){var n=Object.prototype.toString;e.exports=function(e){return n.call(e)}},KxBF:function(e,t){e.exports=function(e,t,n){var o=-1,r=e.length;t<0&&(t=-t>r?0:r+t),(n=n>r?r:n)<0&&(n+=r),r=t>n?0:n-t>>>0,t>>>=0;for(var a=Array(r);++o<r;)a[o]=e[o+t];return a}},Kz5y:function(e,t,n){var o=n("WFqU"),r="object"==typeof self&&self&&self.Object===Object&&self,a=o||r||Function("return this")();e.exports=a},NykK:function(e,t,n){var o=n("nmnc"),r=n("AP2z"),a=n("KfNM"),c=o?o.toStringTag:void 0;e.exports=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":c&&c in Object(e)?r(e):a(e)}},P1Tj:function(e,t,n){"use strict";n.r(t);var o=n("o0o1"),r=n.n(o),a=n("HaE+"),c=n("q1tI"),i=n.n(c),u=n("YFqc"),l=n.n(u),s=n("8Kt/"),m=n.n(s),f=n("/MKj"),p=n("ZhIB"),d=n.n(p),g=n("6acW"),v=n.n(g),h=n("0YDr"),b=n.n(h),y=n("I+5a"),w=n.n(y),N=n("+gp5"),x=n("9EOU"),_=n("8Fes"),E=n("6lzq"),j=i.a.createElement,T=function(e){return e.sales};function O(e){var t=Object(f.b)(),n=Object(f.c)(T),o=n.products,r=n.total,a=n.page,i=n.limit,u=n.loading;n.fetched,n.errorMessage;return Object(c.useEffect)((function(){return o.length||t(Object(_.a)(12,1)),function(){t(Object(_.d)())}}),[]),j(N.a,{className:"page-template-default page page-id-54 page-child parent-pageid-7 wp-custom-logo theme-hello-elementor woocommerce-no-js elementor-default elementor-kit-76 elementor-page elementor-page-54"},j(m.a,null,j("title",null,"\u01afu \u0111\xe3i - Luvin"),j("meta",{name:"description",content:"T\u1ea5t c\u1ea3 c\xe1c s\u1ea3n ph\u1ea9m r\u01b0\u1ee3u vang \u0111\u01b0\u1ee3c l\xean men t\u1ef1 nhi\xean v\xe0 c\xf3 n\u1ed3ng \u0111\u1ed9 c\u1ed3n d\u01b0\u1edbi 15 \u0111\u1ed9"}),j("meta",{property:"og:type",content:"website"}),j("meta",{property:"og:title",content:"\u01afu \u0111\xe3i - Luvin"}),j("meta",{property:"og:url",content:"https://luvin.com.vn"}),j("meta",{property:"og:site_name",content:"Luvin"}),j("meta",{property:"og:image",content:"https://luvin.com.vn/images/banner.jpg"}),j("meta",{property:"og:image:width",content:"1200"}),j("meta",{property:"og:image:height",content:"630"})),u&&j(x.a,null),j("main",{className:"site-main post-54 page type-page status-publish hentry",role:"main"},j("div",{className:"page-content"},j("div",{className:"elementor elementor-54"},j("div",{className:"elementor-inner"},j("div",{className:"elementor-section-wrap"},j("section",{className:"elementor-section elementor-top-section elementor-element elementor-element-873f2b2 elementor-section-boxed elementor-section-height-default elementor-section-height-default"},j("div",{className:"elementor-container elementor-column-gap-default"},j("div",{className:"elementor-row"},j("div",{className:"elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-e496203"},j("div",{className:"elementor-column-wrap elementor-element-populated"},j("div",{className:"elementor-widget-wrap"},j("div",{className:"elementor-element elementor-element-8d25ff1 elementor-widget elementor-widget-heading"},j("div",{className:"elementor-widget-container"},j("h2",{className:"elementor-heading-title elementor-size-default"},"C\xe1c s\u1ea3n ph\u1ea9m \u0111ang gi\u1ea3m gi\xe1"))))))))),j("section",{className:"elementor-section elementor-top-section elementor-element elementor-element-aae031a elementor-section-boxed elementor-section-height-default elementor-section-height-default"},j("div",{className:"elementor-container elementor-column-gap-default"},j("div",{className:"elementor-row"},j("div",{className:"elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-fb565a0"},j("div",{className:"elementor-column-wrap elementor-element-populated"},j("div",{className:"elementor-widget-wrap"},j("div",{className:"elementor-element elementor-element-3f4b994 elementor-products-columns-3 uudaibox elementor-products-columns-mobile-1 elementor-products-grid elementor-wc-products elementor-show-pagination-border-yes elementor-widget elementor-widget-woocommerce-products"},j("div",{className:"elementor-widget-container"},j("div",{className:"woocommerce columns-3"},j("div",{className:"woocommerce-notices-wrapper"}),j("ul",{className:"products columns-3"},o.map((function(e){var n=e.slug,o=(e.ident,e.name),r=e.description,a=e.type,c=e.origin,i=e.discount,u=e.price,s=e.reviews,m=e.images,f=e.category,p=void 0===f?{}:f,g=Math.ceil(i/u*100),h=b()(s.map((function(e){return e.rate||0}))),y=h/s.length/5*100;return j("li",{className:"product type-product post-280 status-publish first instock product_cat-banh-mi product_cat-ruou-vang has-post-thumbnail sale shipping-taxable purchasable product-type-simple"},j(l.a,{href:"/[category]/[slug].js",as:"/".concat(p.slug,"/").concat(n)},j("a",{className:"woocommerce-LoopProduct-link woocommerce-loop-product__link"},j("img",{width:"300",height:"360",src:m[0],className:"attachment-woocommerce_thumbnail size-woocommerce_thumbnail",alt:""}),!!g&&j("div",{className:"wapl-label-id-484 label-wrap wapl-corner label-red wapl-alignnone"},j("span",{className:"woocommerce-advanced-product-label product-label label-red"},j("span",{className:"wapl-label-text"},g,"%"))),j("h2",{className:"woocommerce-loop-product__title"},o),!!y&&j("div",{classNameName:"star-rating",role:"img","aria-label":"\u0110\u01b0\u1ee3c x\u1ebfp h\u1ea1ng ".concat(h/s.length," 5 sao")},j("span",{style:{width:"".concat(y,"%")}},"\u0110\u01b0\u1ee3c x\u1ebfp h\u1ea1ng"," ",j("strong",{className:"rating"},h/s.length)," ","5 sao")),j("span",{className:"price"},!!g&&j("del",null,j("span",{className:"woocommerce-Price-amount amount"},j("bdi",null,d()(u).format("0,0"),j("span",{className:"woocommerce-Price-currencySymbol"},"\u20ab")))),j("ins",null,j("span",{className:"woocommerce-Price-amount amount"},j("bdi",null,d()(u-i).format("0,0"),j("span",{className:"woocommerce-Price-currencySymbol"},"\u20ab"))))),j("p",{className:"arterm"},j("i",{className:"fas fa-wine-bottle"}),"\xa0",v()(a)),j("p",{className:"arterm"},j("i",{className:"fas fa-globe-africa"}),"\xa0",v()(c),v()(c)),j("p",{className:"arterm"},j("i",{className:"fas fa-info-circle"}),"\xa0",r)," ")),j("a",{style:{cursor:"pointer"},className:"button product_type_simple add_to_cart_button ajax_add_to_cart",onClick:function(){return t(Object(E.a)(1,e))}},"\u0110\u1eb7t mua"))}))),!!Math.ceil(r/i)&&j("nav",{className:"woocommerce-pagination"},j(w.a,{previousLabel:"<",nextLabel:">",forcePage:a-1,breakLabel:"...",breakClassName:"break-me",pageCount:Math.ceil(r/i),marginPagesDisplayed:2,pageRangeDisplayed:3,onPageChange:function(e){t(getProducts(categorySlug,i,e.selected+1,sort,type,origin))},containerClassName:"page-numbers",activeLinkClassName:"current",pageLinkClassName:"page-numbers"})))))))))))))))))}O.getInitialProps=function(){var e=Object(a.a)(r.a.mark((function e(t){var n,o,a;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.ctx,o=n.store,a=n.req,n.accessToken,n.query,a&&o.dispatch(Object(_.a)(12,1)),e.abrupt("return",{});case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),t.default=O},WFqU:function(e,t,n){(function(t){var n="object"==typeof t&&t&&t.Object===Object&&t;e.exports=n}).call(this,n("yLpj"))},YFqc:function(e,t,n){e.exports=n("cTJO")},Z0cm:function(e,t){var n=Array.isArray;e.exports=n},bahg:function(e,t){e.exports=function(e){return e.split("")}},cTJO:function(e,t,n){"use strict";var o=n("zoAU"),r=n("7KCV");t.__esModule=!0,t.default=void 0;var a,c=r(n("q1tI")),i=n("elyg"),u=n("nOHt"),l=new Map,s=window.IntersectionObserver,m={};var f=function(e,t){var n=a||(s?a=new s((function(e){e.forEach((function(e){if(l.has(e.target)){var t=l.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(a.unobserve(e.target),l.delete(e.target),t())}}))}),{rootMargin:"200px"}):void 0);return n?(n.observe(e),l.set(e,t),function(){try{n.unobserve(e)}catch(t){console.error(t)}l.delete(e)}):function(){}};function p(e,t,n,o){(0,i.isLocalURL)(t)&&(e.prefetch(t,n,o).catch((function(e){0})),m[t+"%"+n]=!0)}var d=function(e){var t=!1!==e.prefetch,n=c.default.useState(),r=o(n,2),a=r[0],l=r[1],d=(0,u.useRouter)(),g=d&&d.pathname||"/",v=c.default.useMemo((function(){var t=(0,i.resolveHref)(g,e.href,!0),n=o(t,2),r=n[0],a=n[1];return{href:r,as:e.as?(0,i.resolveHref)(g,e.as):a||r}}),[g,e.href,e.as]),h=v.href,b=v.as;c.default.useEffect((function(){if(t&&s&&a&&a.tagName&&(0,i.isLocalURL)(h)&&!m[h+"%"+b])return f(a,(function(){p(d,h,b)}))}),[t,a,h,b,d]);var y=e.children,w=e.replace,N=e.shallow,x=e.scroll;"string"===typeof y&&(y=c.default.createElement("a",null,y));var _=c.Children.only(y),E={ref:function(e){e&&l(e),_&&"object"===typeof _&&_.ref&&("function"===typeof _.ref?_.ref(e):"object"===typeof _.ref&&(_.ref.current=e))},onClick:function(e){_.props&&"function"===typeof _.props.onClick&&_.props.onClick(e),e.defaultPrevented||function(e,t,n,o,r,a,c){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,i.isLocalURL)(n))&&(e.preventDefault(),null==c&&(c=o.indexOf("#")<0),t[r?"replace":"push"](n,o,{shallow:a}).then((function(e){e&&c&&(window.scrollTo(0,0),document.body.focus())})))}(e,d,h,b,w,N,x)}};return t&&(E.onMouseEnter=function(e){(0,i.isLocalURL)(h)&&(_.props&&"function"===typeof _.props.onMouseEnter&&_.props.onMouseEnter(e),p(d,h,b,{priority:!0}))}),(e.passHref||"a"===_.type&&!("href"in _.props))&&(E.href=(0,i.addBasePath)(b)),c.default.cloneElement(_,E)};t.default=d},dt0z:function(e,t,n){var o=n("zoYe");e.exports=function(e){return null==e?"":o(e)}},eUgh:function(e,t){e.exports=function(e,t){for(var n=-1,o=null==e?0:e.length,r=Array(o);++n<o;)r[n]=t(e[n],n,e);return r}},gQMU:function(e,t,n){var o=n("0ZTe")("toUpperCase");e.exports=o},lDjm:function(e,t,n){"use strict";n.d(t,"a",(function(){return o})),n.d(t,"c",(function(){return r})),n.d(t,"b",(function(){return a})),n.d(t,"d",(function(){return c}));var o="SALES/GET_PRODUCTS_SALE",r="SALES/GET_PRODUCTS_SALE_SUCCESS",a="SALES/GET_PRODUCTS_SALE_ERROR",c="SALES/RESET_STATE"},lGXQ:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/uu-dai",function(){return n("P1Tj")}])},nmnc:function(e,t,n){var o=n("Kz5y").Symbol;e.exports=o},quyA:function(e,t){var n=RegExp("[\\u200d\\ud800-\\udfff\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff\\ufe0e\\ufe0f]");e.exports=function(e){return n.test(e)}},wy8a:function(e,t,n){var o=n("KxBF");e.exports=function(e,t,n){var r=e.length;return n=void 0===n?r:n,!t&&n>=r?e:o(e,t,n)}},zZ0H:function(e,t){e.exports=function(e){return e}},zoYe:function(e,t,n){var o=n("nmnc"),r=n("eUgh"),a=n("Z0cm"),c=n("/9aa"),i=o?o.prototype:void 0,u=i?i.toString:void 0;e.exports=function e(t){if("string"==typeof t)return t;if(a(t))return r(t,e)+"";if(c(t))return u?u.call(t):"";var n=t+"";return"0"==n&&1/t==-Infinity?"-0":n}}},[["lGXQ",0,1,2,3,4,5,6]]]);