_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[25],{SSj9:function(e,t,n){"use strict";n.d(t,"a",(function(){return o})),n.d(t,"c",(function(){return a})),n.d(t,"b",(function(){return i})),n.d(t,"d",(function(){return c}));var r=n("gLZk"),o=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:12,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;return{type:r.a,limit:e,page:t}},a=function(e,t){return{type:r.c,total:e,faqs:t}},i=function(e){return{type:r.b,errorMessage:e}},c=function(){return{type:r.d}}},YFqc:function(e,t,n){e.exports=n("cTJO")},cTJO:function(e,t,n){"use strict";var r=n("zoAU"),o=n("7KCV");t.__esModule=!0,t.default=void 0;var a,i=o(n("q1tI")),c=n("elyg"),l=n("nOHt"),s=new Map,u=window.IntersectionObserver,m={};var p=function(e,t){var n=a||(u?a=new u((function(e){e.forEach((function(e){if(s.has(e.target)){var t=s.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(a.unobserve(e.target),s.delete(e.target),t())}}))}),{rootMargin:"200px"}):void 0);return n?(n.observe(e),s.set(e,t),function(){try{n.unobserve(e)}catch(t){console.error(t)}s.delete(e)}):function(){}};function f(e,t,n,r){(0,c.isLocalURL)(t)&&(e.prefetch(t,n,r).catch((function(e){0})),m[t+"%"+n]=!0)}var d=function(e){var t=!1!==e.prefetch,n=i.default.useState(),o=r(n,2),a=o[0],s=o[1],d=(0,l.useRouter)(),g=d&&d.pathname||"/",h=i.default.useMemo((function(){var t=(0,c.resolveHref)(g,e.href,!0),n=r(t,2),o=n[0],a=n[1];return{href:o,as:e.as?(0,c.resolveHref)(g,e.as):a||o}}),[g,e.href,e.as]),v=h.href,w=h.as;i.default.useEffect((function(){if(t&&u&&a&&a.tagName&&(0,c.isLocalURL)(v)&&!m[v+"%"+w])return p(a,(function(){f(d,v,w)}))}),[t,a,v,w,d]);var y=e.children,b=e.replace,N=e.shallow,_=e.scroll;"string"===typeof y&&(y=i.default.createElement("a",null,y));var E=i.Children.only(y),L={ref:function(e){e&&s(e),E&&"object"===typeof E&&E.ref&&("function"===typeof E.ref?E.ref(e):"object"===typeof E.ref&&(E.ref.current=e))},onClick:function(e){E.props&&"function"===typeof E.props.onClick&&E.props.onClick(e),e.defaultPrevented||function(e,t,n,r,o,a,i){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,c.isLocalURL)(n))&&(e.preventDefault(),null==i&&(i=r.indexOf("#")<0),t[o?"replace":"push"](n,r,{shallow:a}).then((function(e){e&&i&&(window.scrollTo(0,0),document.body.focus())})))}(e,d,v,w,b,N,_)}};return t&&(L.onMouseEnter=function(e){(0,c.isLocalURL)(v)&&(E.props&&"function"===typeof E.props.onMouseEnter&&E.props.onMouseEnter(e),f(d,v,w,{priority:!0}))}),(e.passHref||"a"===E.type&&!("href"in E.props))&&(L.href=(0,c.addBasePath)(w)),i.default.cloneElement(E,L)};t.default=d},gLZk:function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"c",(function(){return o})),n.d(t,"b",(function(){return a})),n.d(t,"d",(function(){return i}));var r="FAQS/GET_FAQS",o="FAQS/GET_FAQS_SUCCESS",a="FAQS/GET_FAQS_ERROR",i="FAQS/RESET_STATE"},huLg:function(e,t,n){"use strict";n.r(t);var r=n("o0o1"),o=n.n(r),a=n("HaE+"),i=n("q1tI"),c=n.n(i),l=n("YFqc"),s=n.n(l),u=n("8Kt/"),m=n.n(u),p=n("/MKj"),f=n("I+5a"),d=n.n(f),g=n("+gp5"),h=n("9EOU"),v=n("SSj9"),w=c.a.createElement,y=function(e){return e.faqs};function b(e){var t=Object(p.b)(),n=Object(p.c)(y),r=n.faqs,o=n.total,a=n.page,c=n.limit,l=n.loading;n.fetched,n.errorMessage;return Object(i.useEffect)((function(){return r.length||t(Object(v.a)(12,1)),function(){t(Object(v.d)())}}),[]),w(g.a,{className:"archive category category-tin-tuc category-1 wp-custom-logo theme-hello-elementor woocommerce-no-js elementor-default elementor-template-full-width elementor-kit-76 elementor-page-241"},w(m.a,null,w("title",null,"Faq - Luvin"),w("meta",{name:"description",content:"T\u1ea5t c\u1ea3 c\xe1c s\u1ea3n ph\u1ea9m r\u01b0\u1ee3u vang \u0111\u01b0\u1ee3c l\xean men t\u1ef1 nhi\xean v\xe0 c\xf3 n\u1ed3ng \u0111\u1ed9 c\u1ed3n d\u01b0\u1edbi 15 \u0111\u1ed9"}),w("meta",{property:"og:type",content:"website"}),w("meta",{property:"og:title",content:"Faq - Luvin"}),w("meta",{property:"og:url",content:"https://luvin.com.vn"}),w("meta",{property:"og:site_name",content:"Luvin"}),w("meta",{property:"og:image",content:"https://luvin.com.vn/images/banner.jpg"}),w("meta",{property:"og:image:width",content:"1200"}),w("meta",{property:"og:image:height",content:"630"})),l&&w(h.a,null),w("div",{className:"elementor elementor-241 elementor-location-archive"},w("div",{className:"elementor-section-wrap"},w("section",{className:"elementor-section elementor-top-section elementor-element elementor-element-19a0d73d elementor-section-boxed elementor-section-height-default elementor-section-height-default"},w("div",{className:"elementor-container elementor-column-gap-default"},w("div",{className:"elementor-row"},w("div",{className:"elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-2ecfc4f"},w("div",{className:"elementor-column-wrap elementor-element-populated"},w("div",{className:"elementor-widget-wrap"},w("div",{className:"elementor-element elementor-element-7d337a95 elementor-widget elementor-widget-theme-archive-title elementor-page-title elementor-widget-heading",style:{display:"block"}},w("div",{className:"elementor-widget-container"},w("h1",{className:"elementor-heading-title elementor-size-default"},"FAQ"))),w("div",{className:"elementor-element elementor-element-7d57d24f elementor-posts--align-left archive-card elementor-grid-3 elementor-grid-tablet-2 elementor-grid-mobile-1 elementor-posts--thumbnail-top elementor-widget elementor-widget-archive-posts"},w("div",{className:"elementor-widget-container"},w("div",{className:"elementor-posts-container elementor-posts elementor-posts--skin-classic elementor-grid elementor-has-item-ratio"},r.map((function(e){var t=e.title,n=e.description,r=(e.content,e.slug),o=(e.type,e.image);e.video;return w("article",{className:"elementor-post elementor-grid-item post-227 post type-post status-publish format-standard has-post-thumbnail hentry category-bai-viet category-faq category-su-kien category-tin-tuc"},w(s.a,{href:"/tin-tuc/[slug].js",as:"/tin-tuc/".concat(r)},w("a",{className:"elementor-post__thumbnail__link"},w("div",{className:"elementor-post__thumbnail"},w("img",{width:"640",height:"426",src:o,className:"attachment-full size-full",alt:"",sizes:"(max-width: 640px) 100vw, 640px"})))),w("div",{className:"elementor-post__text"},w("h3",{className:"elementor-post__title"},w(s.a,{href:"/tin-tuc/[slug].js",as:"/tin-tuc/".concat(r)},w("a",null,t))),w("div",{className:"elementor-post__excerpt"},w("p",null,n)),w(s.a,{href:"/tin-tuc/[slug].js",as:"/tin-tuc/".concat(r)},w("a",{className:"elementor-post__read-more"},"\u0110\u1ecdc ti\u1ebfp"))))}))),w("div",{className:"elementor-products-grid"},w("div",{className:"elementor-widget-container"},w("div",{className:"woocommerce columns-3"},w("nav",{className:"woocommerce-pagination",role:"navigation","aria-label":"Pagination"},w(d.a,{previousLabel:"<",nextLabel:">",forcePage:a-1,breakLabel:"...",breakClassName:"break-me",pageCount:Math.ceil(o/c),marginPagesDisplayed:2,pageRangeDisplayed:3,onPageChange:function(e){t(Object(v.a)(c,e.selected+1))},containerClassName:"page-numbers",activeLinkClassName:"current",pageLinkClassName:"page-numbers"}))))))))))))))))}b.getInitialProps=function(){var e=Object(a.a)(o.a.mark((function e(t){var n,r,a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.ctx,r=n.store,a=n.req,n.accessToken,n.query,a&&r.dispatch(Object(v.a)(12,1)),e.abrupt("return",{});case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),t.default=b},sW0z:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/faq",function(){return n("huLg")}])}},[["sW0z",0,1,2,3,4,6]]]);