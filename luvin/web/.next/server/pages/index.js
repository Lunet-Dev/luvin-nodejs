module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 15);
/******/ })
/************************************************************************/
/******/ ({

/***/ "+gp5":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("T6WU");
/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("96Do");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const Content = ({
  children,
  className,
  withoutHeaderFooter
}) => {
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    const targetElm = document.body;
    targetElm.className = className || "";
  }, []);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, !withoutHeaderFooter && __jsx(_Header__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], null), children, !withoutHeaderFooter && __jsx(_Footer__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], null));
};

/* harmony default export */ __webpack_exports__["a"] = (Content);

/***/ }),

/***/ "/jkW":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.isDynamicRoute = isDynamicRoute; // Identify /[param]/ in route string

const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

/***/ }),

/***/ "0Bsm":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("AroE");

exports.__esModule = true;
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _router = __webpack_require__("nOHt");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return /*#__PURE__*/_react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (false) {}

  return WithRouterWrapper;
}

/***/ }),

/***/ 15:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("RXBc");


/***/ }),

/***/ "1crH":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getNews; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return getNewsSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getNewsError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return resetState; });
/* harmony import */ var _constants_news__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("w4I7");

const getNews = (limit = 12, page = 1) => ({
  type: _constants_news__WEBPACK_IMPORTED_MODULE_0__[/* GET_NEWS */ "a"],
  limit,
  page
});
const getNewsSuccess = (total, news) => ({
  type: _constants_news__WEBPACK_IMPORTED_MODULE_0__[/* GET_NEWS_SUCCESS */ "c"],
  total,
  news
});
const getNewsError = errorMessage => ({
  type: _constants_news__WEBPACK_IMPORTED_MODULE_0__[/* GET_NEWS_ERROR */ "b"],
  errorMessage
});
const resetState = () => ({
  type: _constants_news__WEBPACK_IMPORTED_MODULE_0__[/* RESET_STATE */ "d"]
});

/***/ }),

/***/ "1nAM":
/***/ (function(module, exports) {

module.exports = require("swiper");

/***/ }),

/***/ "3WeD":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.searchParamsToUrlQuery = searchParamsToUrlQuery;
exports.urlQueryToSearchParams = urlQueryToSearchParams;
exports.assign = assign;

function searchParamsToUrlQuery(searchParams) {
  const query = {};
  searchParams.forEach((value, key) => {
    if (typeof query[key] === 'undefined') {
      query[key] = value;
    } else if (Array.isArray(query[key])) {
      ;
      query[key].push(value);
    } else {
      query[key] = [query[key], value];
    }
  });
  return query;
}

function stringifyUrlQueryParam(param) {
  if (typeof param === 'string' || typeof param === 'number' && !isNaN(param) || typeof param === 'boolean') {
    return String(param);
  } else {
    return '';
  }
}

function urlQueryToSearchParams(urlQuery) {
  const result = new URLSearchParams();
  Object.entries(urlQuery).forEach(([key, value]) => {
    if (Array.isArray(value)) {
      value.forEach(item => result.append(key, stringifyUrlQueryParam(item)));
    } else {
      result.set(key, stringifyUrlQueryParam(value));
    }
  });
  return result;
}

function assign(target, ...searchParamsList) {
  searchParamsList.forEach(searchParams => {
    Array.from(searchParams.keys()).forEach(key => target.delete(key));
    searchParams.forEach((value, key) => target.append(key, value));
  });
  return target;
}

/***/ }),

/***/ "4Q3z":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "5ChB":
/***/ (function(module, exports) {

module.exports = require("numeral");

/***/ }),

/***/ "6D7l":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.formatUrl = formatUrl;

var querystring = _interopRequireWildcard(__webpack_require__("3WeD"));

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function () {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj.default = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
} // Format function modified from nodejs
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.


const slashedProtocols = /https?|ftp|gopher|file/;

function formatUrl(urlObj) {
  let {
    auth,
    hostname
  } = urlObj;
  let protocol = urlObj.protocol || '';
  let pathname = urlObj.pathname || '';
  let hash = urlObj.hash || '';
  let query = urlObj.query || '';
  let host = false;
  auth = auth ? encodeURIComponent(auth).replace(/%3A/i, ':') + '@' : '';

  if (urlObj.host) {
    host = auth + urlObj.host;
  } else if (hostname) {
    host = auth + (~hostname.indexOf(':') ? `[${hostname}]` : hostname);

    if (urlObj.port) {
      host += ':' + urlObj.port;
    }
  }

  if (query && typeof query === 'object') {
    query = String(querystring.urlQueryToSearchParams(query));
  }

  let search = urlObj.search || query && `?${query}` || '';
  if (protocol && protocol.substr(-1) !== ':') protocol += ':';

  if (urlObj.slashes || (!protocol || slashedProtocols.test(protocol)) && host !== false) {
    host = '//' + (host || '');
    if (pathname && pathname[0] !== '/') pathname = '/' + pathname;
  } else if (!host) {
    host = '';
  }

  if (hash && hash[0] !== '#') hash = '#' + hash;
  if (search && search[0] !== '?') search = '?' + search;
  pathname = pathname.replace(/[?#]/g, encodeURIComponent);
  search = search.replace('#', '%23');
  return `${protocol}${host}${pathname}${search}${hash}`;
}

/***/ }),

/***/ "6lzq":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return toggleCartMenu; });
/* unused harmony export openCartMenu */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return addProduct; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return removeProduct; });
/* harmony import */ var _constants_cart__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("BzKi");

const toggleCartMenu = () => ({
  type: _constants_cart__WEBPACK_IMPORTED_MODULE_0__[/* TOGGLE_CART_MENU */ "d"]
});
const openCartMenu = () => ({
  type: _constants_cart__WEBPACK_IMPORTED_MODULE_0__[/* OPEN_CART_MENU */ "b"]
});
const addProduct = (amount, product) => ({
  type: _constants_cart__WEBPACK_IMPORTED_MODULE_0__[/* ADD_PRODUCT */ "a"],
  amount,
  product
});
const removeProduct = index => ({
  type: _constants_cart__WEBPACK_IMPORTED_MODULE_0__[/* REMOVE_PRODUCT */ "c"],
  index
});

/***/ }),

/***/ "7KCV":
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__("C+bE");

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "96Do":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("YFqc");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



function Footer(props) {
  return __jsx("div", {
    className: "elementor elementor-115 elementor-location-footer"
  }, __jsx("div", {
    className: "elementor-section-wrap"
  }, __jsx("section", {
    className: "elementor-section elementor-top-section elementor-element elementor-element-cf0268f luvin-footer elementor-section-boxed elementor-section-height-default elementor-section-height-default"
  }, __jsx("div", {
    className: "elementor-container elementor-column-gap-default"
  }, __jsx("div", {
    className: "elementor-row"
  }, __jsx("div", {
    className: "elementor-column elementor-col-25 elementor-top-column elementor-element elementor-element-a8e0fab"
  }, __jsx("div", {
    className: "elementor-column-wrap elementor-element-populated"
  }, __jsx("div", {
    className: "elementor-widget-wrap"
  }, __jsx("div", {
    className: "elementor-element elementor-element-ca7c6ee elementor-nav-menu__align-left elementor-nav-menu--indicator-none elementor-widget-mobile__width-initial elementor-nav-menu--dropdown-tablet elementor-nav-menu__text-align-aside elementor-widget elementor-widget-nav-menu"
  }, __jsx("div", {
    className: "elementor-widget-container"
  }, __jsx("nav", {
    role: "navigation",
    className: "elementor-nav-menu--main elementor-nav-menu__container elementor-nav-menu--layout-vertical e--pointer-none"
  }, __jsx("ul", {
    id: "menu-1-ca7c6ee",
    className: "elementor-nav-menu sm-vertical"
  }, __jsx("li", {
    className: "menu-item menu-item-type-post_type menu-item-object-page menu-item-800"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/cham-soc-khach-hang/dieu-khoan-chung"
  }, __jsx("a", {
    className: "elementor-item"
  }, "\u0110i\u1EC1u kho\u1EA3n chung"))), __jsx("li", {
    className: "menu-item menu-item-type-post_type menu-item-object-page menu-item-privacy-policy menu-item-117"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/cham-soc-khach-hang/chinh-sach-bao-mat"
  }, __jsx("a", {
    className: "elementor-item"
  }, "Ch\xEDnh s\xE1ch b\u1EA3o m\u1EADt"))), __jsx("li", {
    className: "menu-item menu-item-type-post_type menu-item-object-page menu-item-118"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/cham-soc-khach-hang/chinh-sach-doi-tra"
  }, __jsx("a", {
    className: "elementor-item"
  }, "Ch\u1EC9nh s\xE1ch \u0111\u1ED5i tr\u1EA3"))), __jsx("li", {
    className: "menu-item menu-item-type-post_type menu-item-object-page menu-item-119"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/cham-soc-khach-hang/chinh-sach-giao-nhan"
  }, __jsx("a", {
    className: "elementor-item"
  }, "Ch\xEDnh s\xE1ch giao nh\u1EADn"))), __jsx("li", {
    className: "menu-item menu-item-type-post_type menu-item-object-page menu-item-120"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/cham-soc-khach-hang/huong-dan-mua-hang"
  }, __jsx("a", {
    className: "elementor-item"
  }, "H\u01B0\u1EDBng d\u1EABn mua h\xE0ng"))))), __jsx("div", {
    className: "elementor-menu-toggle",
    role: "button",
    tabIndex: "0",
    "aria-label": "Menu Toggle",
    "aria-expanded": "false"
  }, __jsx("i", {
    className: "eicon-menu-bar",
    "aria-hidden": "true"
  }), __jsx("span", {
    className: "elementor-screen-only"
  }, "Menu")), __jsx("nav", {
    className: "elementor-nav-menu--dropdown elementor-nav-menu__container",
    role: "navigation",
    "aria-hidden": "true"
  }, __jsx("ul", {
    id: "menu-2-ca7c6ee",
    className: "elementor-nav-menu sm-vertical"
  }, __jsx("li", {
    className: "menu-item menu-item-type-post_type menu-item-object-page menu-item-800"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/cham-soc-khach-hang/dieu-khoan-chung"
  }, __jsx("a", {
    className: "elementor-item"
  }, "\u0110i\u1EC1u kho\u1EA3n chung"))), __jsx("li", {
    className: "menu-item menu-item-type-post_type menu-item-object-page menu-item-privacy-policy menu-item-117"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/cham-soc-khach-hang/chinh-sach-bao-mat"
  }, __jsx("a", {
    className: "elementor-item"
  }, "Ch\xEDnh s\xE1ch b\u1EA3o m\u1EADt"))), __jsx("li", {
    className: "menu-item menu-item-type-post_type menu-item-object-page menu-item-118"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/cham-soc-khach-hang/chinh-sach-doi-tra"
  }, __jsx("a", {
    className: "elementor-item"
  }, "Ch\u1EC9nh s\xE1ch \u0111\u1ED5i tr\u1EA3"))), __jsx("li", {
    className: "menu-item menu-item-type-post_type menu-item-object-page menu-item-119"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/cham-soc-khach-hang/chinh-sach-giao-nhan"
  }, __jsx("a", {
    className: "elementor-item"
  }, "Ch\xEDnh s\xE1ch giao nh\u1EADn"))), __jsx("li", {
    className: "menu-item menu-item-type-post_type menu-item-object-page menu-item-120"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/cham-soc-khach-hang/huong-dan-mua-hang"
  }, __jsx("a", {
    className: "elementor-item"
  }, "H\u01B0\u1EDBng d\u1EABn mua h\xE0ng"))))))), __jsx("div", {
    className: "elementor-element elementor-element-f5e10b4 elementor-hidden-phone elementor-widget-divider--view-line elementor-widget elementor-widget-divider"
  }, __jsx("div", {
    className: "elementor-widget-container"
  }, __jsx("div", {
    className: "elementor-divider"
  }, __jsx("span", {
    className: "elementor-divider-separator"
  }, " ")))), __jsx("div", {
    className: "elementor-element elementor-element-91c28d5 elementor-mobile-align-left elementor-widget-mobile__width-initial elementor-icon-list--layout-traditional elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list"
  }, __jsx("div", {
    className: "elementor-widget-container"
  }, __jsx("ul", {
    className: "elementor-icon-list-items"
  }, __jsx("li", {
    className: "elementor-icon-list-item"
  }, __jsx("a", {
    href: "#"
  }, __jsx("span", {
    className: "elementor-icon-list-icon"
  }, __jsx("i", {
    "aria-hidden": "true",
    className: "fab fa-facebook-square"
  })), __jsx("span", {
    className: "elementor-icon-list-text"
  }, "Facebook"))), __jsx("li", {
    className: "elementor-icon-list-item"
  }, __jsx("a", {
    href: "#"
  }, __jsx("span", {
    className: "elementor-icon-list-icon"
  }, __jsx("i", {
    "aria-hidden": "true",
    className: "fab fa-instagram"
  })), __jsx("span", {
    className: "elementor-icon-list-text"
  }, "Instagram"))), __jsx("li", {
    className: "elementor-icon-list-item"
  }, __jsx("a", {
    href: "#"
  }, __jsx("span", {
    className: "elementor-icon-list-icon"
  }, __jsx("i", {
    "aria-hidden": "true",
    className: "fab fa-youtube-square"
  })), __jsx("span", {
    className: "elementor-icon-list-text"
  }, "Youtube"))))))))), __jsx("div", {
    className: "elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-2201b28"
  }, __jsx("div", {
    className: "elementor-column-wrap elementor-element-populated"
  }, __jsx("div", {
    className: "elementor-widget-wrap"
  }, __jsx("div", {
    className: "elementor-element elementor-element-459073a elementor-widget elementor-widget-image"
  }, __jsx("div", {
    className: "elementor-widget-container"
  }, __jsx("div", {
    className: "elementor-image"
  }, __jsx("a", {
    href: "https://g.page/LuVinGourmetNCT?share",
    target: "_blank"
  }, __jsx("img", {
    width: "600",
    height: "365",
    src: "/images/map-demo.jpg",
    className: "attachment-large size-large",
    alt: "",
    sizes: "(max-width: 600px) 100vw, 600px"
  })))))))), __jsx("div", {
    className: "elementor-column elementor-col-25 elementor-top-column elementor-element elementor-element-4767519"
  }, __jsx("div", {
    className: "elementor-column-wrap elementor-element-populated"
  }, __jsx("div", {
    className: "elementor-widget-wrap"
  }, __jsx("div", {
    className: "elementor-element elementor-element-9c57137 elementor-widget elementor-widget-heading"
  }, __jsx("div", {
    className: "elementor-widget-container"
  }, __jsx("h4", {
    className: "elementor-heading-title elementor-size-default"
  }, "Gi\u1EDD m\u1EDF c\u1EEDa"))), __jsx("div", {
    className: "elementor-element elementor-element-910bf8d footer-oh elementor-widget elementor-widget-text-editor"
  }, __jsx("div", {
    className: "elementor-widget-container"
  }, __jsx("div", {
    className: "elementor-text-editor elementor-clearfix"
  }, "M\u1EDF c\u1EEDa c\u1EA3 tu\u1EA7n t\u1EEB 9:00AM \u0111\u1EBFn 22:00PM"))), __jsx("div", {
    className: "elementor-element elementor-element-6d34ef4 elementor-hidden-phone elementor-widget-divider--view-line elementor-widget elementor-widget-divider"
  }, __jsx("div", {
    className: "elementor-widget-container"
  }, __jsx("div", {
    className: "elementor-divider"
  }, __jsx("span", {
    className: "elementor-divider-separator"
  }, " ")))), __jsx("div", {
    className: "elementor-element elementor-element-5b09c0f elementor-icon-list--layout-traditional elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list"
  }, __jsx("div", {
    className: "elementor-widget-container"
  }, __jsx("ul", {
    className: "elementor-icon-list-items"
  }, __jsx("li", {
    className: "elementor-icon-list-item"
  }, __jsx("span", {
    className: "elementor-icon-list-icon"
  }, __jsx("i", {
    "aria-hidden": "true",
    className: "fas fa-map-marker-alt"
  })), __jsx("span", {
    className: "elementor-icon-list-text"
  }, "L1-13 Vincom Center Nguy\u1EC5n Ch\xED Thanh - \u0110\u1ED1ng \u0110a - H\xE0 N\u1ED9i")), __jsx("li", {
    className: "elementor-icon-list-item"
  }, __jsx("span", {
    className: "elementor-icon-list-icon"
  }, __jsx("i", {
    "aria-hidden": "true",
    className: "fas fa-phone-square-alt"
  })), __jsx("span", {
    className: "elementor-icon-list-text"
  }, "Hotline: 076 855 3838 - 098 927 3838")), __jsx("li", {
    className: "elementor-icon-list-item"
  }, __jsx("span", {
    className: "elementor-icon-list-icon"
  }, __jsx("i", {
    "aria-hidden": "true",
    className: "far fa-envelope"
  })), __jsx("span", {
    className: "elementor-icon-list-text"
  }, "info@luvin.com.vn"))))), __jsx("div", {
    className: "elementor-element elementor-element-a7a46ea elementor-widget elementor-widget-image"
  }, __jsx("div", {
    className: "elementor-widget-container"
  }, __jsx("div", {
    className: "elementor-image"
  }, __jsx("a", {
    href: "#",
    target: "_blank"
  }, __jsx("img", {
    width: "171",
    height: "65",
    src: "/images/bct.png",
    className: "attachment-large size-large",
    alt: ""
  }))))))))))), __jsx("section", {
    className: "elementor-section elementor-top-section elementor-element elementor-element-1c4289e elementor-section-content-middle elementor-section-boxed elementor-section-height-default elementor-section-height-default"
  }, __jsx("div", {
    className: "elementor-container elementor-column-gap-default"
  }, __jsx("div", {
    className: "elementor-row"
  }, __jsx("div", {
    className: "elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-20350eb"
  }, __jsx("div", {
    className: "elementor-column-wrap elementor-element-populated"
  }, __jsx("div", {
    className: "elementor-widget-wrap"
  }, __jsx("div", {
    className: "elementor-element elementor-element-794662a elementor-widget elementor-widget-heading"
  }, __jsx("div", {
    className: "elementor-widget-container"
  }, __jsx("p", {
    className: "elementor-heading-title elementor-size-default"
  }, "Luvin Gourmet @2020 All Rights Reserved")))))), __jsx("div", {
    className: "elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-94fb9f5"
  }, __jsx("div", {
    className: "elementor-column-wrap elementor-element-populated"
  }, __jsx("div", {
    className: "elementor-widget-wrap"
  }, __jsx("div", {
    className: "elementor-element elementor-element-c055d26 elementor-widget elementor-widget-theme-site-title elementor-widget-heading"
  }, __jsx("div", {
    className: "elementor-widget-container"
  }, __jsx("h2", {
    className: "elementor-heading-title elementor-size-default"
  }, __jsx("a", {
    href: "index.html"
  }, "LuVin Gourmet"))))))))))));
}

/* harmony default export */ __webpack_exports__["a"] = (Footer);

/***/ }),

/***/ "AZSr":
/***/ (function(module, exports) {

module.exports = require("lodash/sum");

/***/ }),

/***/ "AroE":
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "BzKi":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return OPEN_CART_MENU; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return TOGGLE_CART_MENU; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ADD_PRODUCT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return REMOVE_PRODUCT; });
const OPEN_CART_MENU = "CART/OPEN_CART_MENU";
const TOGGLE_CART_MENU = "CART/TOGGLE_CART_MENU";
const ADD_PRODUCT = "CART/ADD_PRODUCT";
const REMOVE_PRODUCT = "CART/REMOVE_PRODUCT";

/***/ }),

/***/ "C+bE":
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "Cd+q":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return getUpcommingEvents; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return getUpcommingEventsSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return getUpcommingEventsError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getOccurredEvents; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return getOccurredEventsSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getOccurredEventsError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return resetState; });
/* harmony import */ var _constants_events__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("J+Xr");

const getUpcommingEvents = () => ({
  type: _constants_events__WEBPACK_IMPORTED_MODULE_0__[/* GET_UPCOMMING_EVENTS */ "d"]
});
const getUpcommingEventsSuccess = events => ({
  type: _constants_events__WEBPACK_IMPORTED_MODULE_0__[/* GET_UPCOMMING_EVENTS_SUCCESS */ "f"],
  events
});
const getUpcommingEventsError = errorMessage => ({
  type: _constants_events__WEBPACK_IMPORTED_MODULE_0__[/* GET_UPCOMMING_EVENTS_ERROR */ "e"],
  errorMessage
});
const getOccurredEvents = (limit, page, month) => ({
  type: _constants_events__WEBPACK_IMPORTED_MODULE_0__[/* GET_OCCURRED_EVENTS */ "a"],
  limit,
  page,
  month
});
const getOccurredEventsSuccess = (total, events) => ({
  type: _constants_events__WEBPACK_IMPORTED_MODULE_0__[/* GET_OCCURRED_EVENTS_SUCCESS */ "c"],
  total,
  events
});
const getOccurredEventsError = errorMessage => ({
  type: _constants_events__WEBPACK_IMPORTED_MODULE_0__[/* GET_OCCURRED_EVENTS_ERROR */ "b"],
  errorMessage
});
const resetState = () => ({
  type: _constants_events__WEBPACK_IMPORTED_MODULE_0__[/* RESET_STATE */ "g"]
});

/***/ }),

/***/ "J+Xr":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return GET_UPCOMMING_EVENTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return GET_UPCOMMING_EVENTS_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return GET_UPCOMMING_EVENTS_ERROR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GET_OCCURRED_EVENTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return GET_OCCURRED_EVENTS_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return GET_OCCURRED_EVENTS_ERROR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return RESET_STATE; });
const GET_UPCOMMING_EVENTS = "EVENTS/GET_UPCOMMING_EVENTS";
const GET_UPCOMMING_EVENTS_SUCCESS = "EVENTS/GET_UPCOMMING_EVENTS_SUCCESS";
const GET_UPCOMMING_EVENTS_ERROR = "EVENTS/GET_UPCOMMING_EVENTS_ERROR";
const GET_OCCURRED_EVENTS = "EVENTS/GET_OCCURRED_EVENTS";
const GET_OCCURRED_EVENTS_SUCCESS = "EVENTS/GET_OCCURRED_EVENTS_SUCCESS";
const GET_OCCURRED_EVENTS_ERROR = "EVENTS/GET_OCCURRED_EVENTS_ERROR";
const RESET_STATE = "EVENTS/RESET_STATE";

/***/ }),

/***/ "Osoz":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router-context.js");

/***/ }),

/***/ "RXBc":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "default", function() { return /* binding */ Home; });

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__("xnum");
var head_default = /*#__PURE__*/__webpack_require__.n(head_);

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__("YFqc");
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);

// EXTERNAL MODULE: external "swiper"
var external_swiper_ = __webpack_require__("1nAM");
var external_swiper_default = /*#__PURE__*/__webpack_require__.n(external_swiper_);

// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__("h74D");

// EXTERNAL MODULE: external "react-modal-video"
var external_react_modal_video_ = __webpack_require__("tpJJ");
var external_react_modal_video_default = /*#__PURE__*/__webpack_require__.n(external_react_modal_video_);

// EXTERNAL MODULE: ./node_modules/swiper/swiper-bundle.css
var swiper_bundle = __webpack_require__("u+OR");

// EXTERNAL MODULE: ./src/components/Layout/Content.js
var Content = __webpack_require__("+gp5");

// EXTERNAL MODULE: external "react-dom"
var external_react_dom_ = __webpack_require__("faye");
var external_react_dom_default = /*#__PURE__*/__webpack_require__.n(external_react_dom_);

// CONCATENATED MODULE: ./src/components/Popup/Portal.js



function Portal({
  children
}) {
  const {
    0: isMounted,
    1: setIsMounted
  } = Object(external_react_["useState"])(false);
  Object(external_react_["useEffect"])(() => {
    setIsMounted(true);
  }, []);
  if (!isMounted || !document.getElementById("lv-popup")) return null;
  return /*#__PURE__*/external_react_dom_default.a.createPortal(children, document.getElementById("lv-popup"));
}

Portal.propTypes = {};
/* harmony default export */ var Popup_Portal = (Portal);
// EXTERNAL MODULE: ./src/actions/events.js
var events = __webpack_require__("Cd+q");

// CONCATENATED MODULE: ./src/components/Popup/PopupEvents.js
var __jsx = external_react_default.a.createElement;







const eventsStateSelector = state => state.events;

function PopupEvents(props) {
  const {
    0: show,
    1: setShow
  } = Object(external_react_["useState"])(false);
  const dispatch = Object(external_react_redux_["useDispatch"])();
  const {
    upcomming,
    occurred
  } = Object(external_react_redux_["useSelector"])(eventsStateSelector);

  const checkDate = () => {
    const today = new Date().toLocaleDateString();
    const lastShowAt = localStorage.getItem("levent");

    if (lastShowAt !== today) {
      setTimeout(() => {
        setShow(true);
        localStorage.setItem("levent", today);
      }, 5000);
    }
  };

  Object(external_react_["useEffect"])(() => {
    checkDate();
  }, []);
  Object(external_react_["useEffect"])(() => {
    if (show) {
      dispatch(Object(events["d" /* getUpcommingEvents */])());
      external_swiper_default.a.use([external_swiper_["Navigation"], external_swiper_["Autoplay"]]);
    }
  }, [show]);

  const handleClose = () => {
    const today = new Date().toLocaleDateString();
    localStorage.setItem("levent", today);
    setShow(false);
  };

  Object(external_react_["useEffect"])(() => {
    if (upcomming.events.length) {
      const eventSwiper = new external_swiper_default.a(".swiper-event", {
        loop: true,
        autoplay: {
          delay: 4000
        },
        // Navigation arrows
        navigation: {
          prevEl: ".event-swiper-button-prev",
          nextEl: ".event-swiper-button-next"
        }
      });
    } else {
      setShow(false);
    }
  }, [upcomming.events]);
  return __jsx(Popup_Portal, null, __jsx("style", null, `
        .swiper-button-next:after, .swiper-container-rtl .swiper-button-prev:after {
          content: '';
      }
      .swiper-button-prev:after, .swiper-container-rtl .swiper-button-next:after {
        content: '';
    }
        `), __jsx("div", {
    className: "dialog-widget dialog-lightbox-widget dialog-type-buttons dialog-type-lightbox elementor-popup-modal",
    id: "elementor-popup-modal-635",
    style: {
      display: show ? "flex" : "none"
    }
  }, __jsx("div", {
    className: "dialog-widget-content dialog-lightbox-widget-content animated"
  }, __jsx("div", {
    className: "dialog-header dialog-lightbox-header"
  }), __jsx("div", {
    className: "dialog-message dialog-lightbox-message"
  }, __jsx("div", {
    "data-elementor-type": "popup",
    "data-elementor-id": "635",
    className: "elementor elementor-635 elementor-location-popup",
    "data-elementor-settings": "{\"entrance_animation\":\"slideInUp\",\"close_button_position\":\"outside\",\"entrance_animation_duration\":{\"unit\":\"px\",\"size\":1.2,\"sizes\":[]},\"triggers\":{\"page_load_delay\":10,\"page_load\":\"yes\"},\"timing\":[]}",
    style: {
      display: show ? "block" : "none"
    }
  }, __jsx("div", {
    className: "elementor-section-wrap"
  }, __jsx("section", {
    "data-particle_enable": "false",
    "data-particle-mobile-disabled": "false",
    className: "elementor-section elementor-top-section elementor-element elementor-element-0b3b94f elementor-section-boxed elementor-section-height-default elementor-section-height-default",
    "data-id": "0b3b94f",
    "data-element_type": "section"
  }, __jsx("div", {
    className: "elementor-container elementor-column-gap-default"
  }, __jsx("div", {
    className: "elementor-row"
  }, __jsx("div", {
    className: "elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-d210544",
    "data-id": "d210544",
    "data-element_type": "column"
  }, __jsx("div", {
    className: "elementor-column-wrap elementor-element-populated"
  }, __jsx("div", {
    className: "elementor-widget-wrap"
  }, __jsx("div", {
    className: "elementor-element elementor-element-ca4af82 elementor-widget elementor-widget-eael-post-carousel",
    "data-id": "ca4af82",
    "data-element_type": "widget",
    "data-widget_type": "eael-post-carousel.default"
  }, __jsx("div", {
    className: "elementor-widget-container"
  }, __jsx("div", {
    className: "swiper-container-wrap eael-logo-carousel-wrap eael-post-grid-container eael-post-carousel-wrap eael-post-carousel-style-default",
    id: "eael-post-grid-ca4af82"
  }, __jsx("div", {
    className: "swiper-event swiper-container eael-post-carousel eael-post-grid swiper-container-ca4af82 eael-post-appender-ca4af82 swiper-container-initialized swiper-container-horizontal swiper-container-autoheight" // data-pagination=".swiper-pagination-ca4af82"
    // data-arrow-next=".swiper-button-next-ca4af82"
    // data-arrow-prev=".swiper-button-prev-ca4af82"
    // data-items="1"
    // data-items-tablet="1"
    // data-items-mobile="1"
    // data-margin="20"
    // data-effect="slide"
    // data-speed="400"
    // data-autoplay="4000"
    // data-pause-on-hover="true"
    // data-loop="1"
    // data-grab-cursor="1"
    // data-arrows="1"
    // style={{ cursor: "grab" }}
    // style="cursor: grab;"

  }, __jsx("div", {
    className: "swiper-wrapper"
  }, upcomming.events.map(event => {
    const {
      title,
      description,
      slug,
      image
    } = event;
    return __jsx("div", {
      className: "swiper-slide"
    }, __jsx("article", {
      className: "eael-grid-post eael-post-grid-column"
    }, __jsx("div", {
      className: "eael-grid-post-holder"
    }, __jsx("div", {
      className: "eael-grid-post-holder-inner"
    }, __jsx("div", {
      className: "eael-entry-media eael-entry-medianone"
    }, __jsx("div", {
      className: "eael-entry-thumbnail"
    }, __jsx("img", {
      src: image,
      alt: ""
    }), __jsx(link_default.a, {
      href: "/su-kien/[slug].js",
      as: `/su-kien/${slug}`
    }, __jsx("a", null)))), __jsx("div", {
      className: "eael-entry-wrapper"
    }, __jsx("header", {
      className: "eael-entry-header"
    }, __jsx("h2", {
      className: "eael-entry-title"
    }, __jsx(link_default.a, {
      href: "/su-kien/[slug].js",
      as: `/su-kien/${slug}`
    }, __jsx("a", {
      className: "eael-grid-post-link",
      title: "B\xE0i vi\u1EBFt s\u1EF1 ki\u1EC7n s\u1EAFp t\u1EDBi"
    }, title))))), __jsx("div", {
      className: "eael-entry-content"
    }, __jsx("div", {
      className: "eael-grid-post-excerpt"
    }, __jsx("div", {
      className: "eael-post-elements-readmore-wrap"
    }, __jsx(link_default.a, {
      href: "/su-kien/[slug].js",
      as: `/su-kien/${slug}`
    }, __jsx("a", {
      className: "eael-post-elements-readmore-btn"
    })))))))));
  }))), __jsx("div", {
    className: "clearfix"
  }), __jsx("div", {
    className: "swiper-button-next swiper-button-next-ca4af82 event-swiper-button-next",
    tabindex: "0",
    role: "button",
    "aria-label": "Next slide"
  }, __jsx("i", {
    className: "fa fa-angle-right"
  })), __jsx("div", {
    className: "swiper-button-prev swiper-button-prev-ca4af82 event-swiper-button-prev",
    tabindex: "0",
    role: "button",
    "aria-label": "Previous slide"
  }, __jsx("i", {
    className: "fa fa-angle-left"
  }))))), __jsx("div", {
    className: "elementor-element elementor-element-eb5bb79 elementor-align-center elementor-widget elementor-widget-button",
    "data-id": "eb5bb79",
    "data-element_type": "widget",
    "data-widget_type": "button.default"
  }, __jsx("div", {
    className: "elementor-widget-container"
  }, __jsx("div", {
    className: "elementor-button-wrapper"
  }, __jsx(link_default.a, {
    href: "/su-kien"
  }, __jsx("a", {
    className: "elementor-button-link elementor-button elementor-size-xs",
    role: "button"
  }, __jsx("span", {
    className: "elementor-button-content-wrapper"
  }, __jsx("span", {
    className: "elementor-button-text"
  }, "T\u1EA5t c\u1EA3 s\u1EF1 ki\u1EC7n")))))))))))))))), __jsx("div", {
    className: "dialog-buttons-wrapper dialog-lightbox-buttons-wrapper"
  })), __jsx("div", {
    className: "dialog-close-button dialog-lightbox-close-button",
    onClick: handleClose
  }, __jsx("i", {
    className: "eicon-close"
  }))));
}

/* harmony default export */ var Popup_PopupEvents = (PopupEvents);
// EXTERNAL MODULE: external "js-cookie"
var external_js_cookie_ = __webpack_require__("vmXh");
var external_js_cookie_default = /*#__PURE__*/__webpack_require__.n(external_js_cookie_);

// CONCATENATED MODULE: ./src/components/Popup/PopupAgeConfirm.js
var PopupAgeConfirm_jsx = external_react_default.a.createElement;





function PopupAgeConfirm(props) {
  const {
    0: show,
    1: setShow
  } = Object(external_react_["useState"])(false);

  const handleClose = () => {
    external_js_cookie_default.a.set("lvage", "over18", {
      expires: 30
    });
    setShow(false);
  };

  const checkAge = () => {
    const age = external_js_cookie_default.a.get("lvage");

    if (!age || age !== "over18") {
      setTimeout(() => {
        setShow(true);
      }, 4000);
    }
  };

  Object(external_react_["useEffect"])(() => {
    checkAge();
  }, []);
  return PopupAgeConfirm_jsx(Popup_Portal, null, PopupAgeConfirm_jsx("div", {
    className: "dialog-widget dialog-lightbox-widget dialog-type-buttons dialog-type-lightbox elementor-popup-modal",
    id: "elementor-popup-modal-575",
    style: {
      display: show ? "flex" : "none"
    }
  }, PopupAgeConfirm_jsx("div", {
    className: "dialog-widget-content dialog-lightbox-widget-content animated"
  }, PopupAgeConfirm_jsx("div", {
    className: "dialog-header dialog-lightbox-header"
  }), PopupAgeConfirm_jsx("div", {
    className: "dialog-message dialog-lightbox-message"
  }, PopupAgeConfirm_jsx("div", {
    className: "elementor elementor-575 elementor-location-popup",
    style: {
      display: show ? "block" : "none"
    }
  }, PopupAgeConfirm_jsx("div", {
    className: "elementor-section-wrap"
  }, PopupAgeConfirm_jsx("section", {
    "data-particle_enable": "false",
    "data-particle-mobile-disabled": "false",
    className: "elementor-section elementor-top-section elementor-element elementor-element-a0ec87f elementor-section-boxed elementor-section-height-default elementor-section-height-default",
    "data-id": "a0ec87f",
    "data-element_type": "section"
  }, PopupAgeConfirm_jsx("div", {
    className: "elementor-container elementor-column-gap-default"
  }, PopupAgeConfirm_jsx("div", {
    className: "elementor-row"
  }, PopupAgeConfirm_jsx("div", {
    className: "elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-4a727f6",
    "data-id": "4a727f6",
    "data-element_type": "column"
  }, PopupAgeConfirm_jsx("div", {
    className: "elementor-column-wrap elementor-element-populated"
  }, PopupAgeConfirm_jsx("div", {
    className: "elementor-widget-wrap"
  }, PopupAgeConfirm_jsx("div", {
    className: "elementor-element elementor-element-7e33cd2 elementor-widget elementor-widget-image",
    "data-id": "7e33cd2",
    "data-element_type": "widget",
    "data-widget_type": "image.default"
  }, PopupAgeConfirm_jsx("div", {
    className: "elementor-widget-container"
  }, PopupAgeConfirm_jsx("div", {
    className: "elementor-image"
  }, PopupAgeConfirm_jsx("img", {
    src: "images/logo2001.png",
    title: "logo200",
    alt: "logo200"
  }), " "))), PopupAgeConfirm_jsx("div", {
    className: "elementor-element elementor-element-2fb750c elementor-widget elementor-widget-heading",
    "data-id": "2fb750c",
    "data-element_type": "widget",
    "data-widget_type": "heading.default"
  }, PopupAgeConfirm_jsx("div", {
    className: "elementor-widget-container"
  }, PopupAgeConfirm_jsx("h5", {
    className: "elementor-heading-title elementor-size-default"
  }, "Luvin ch\xE0o m\u1EEBng b\u1EA1n!"), " ")), PopupAgeConfirm_jsx("div", {
    className: "elementor-element elementor-element-ff972bc elementor-widget elementor-widget-heading",
    "data-id": "ff972bc",
    "data-element_type": "widget",
    "data-widget_type": "heading.default"
  }, PopupAgeConfirm_jsx("div", {
    className: "elementor-widget-container"
  }, PopupAgeConfirm_jsx("p", {
    className: "elementor-heading-title elementor-size-default"
  }, "Vui l\xF2ng x\xE1c nh\u1EADn \u0111\u1ED9 tu\u1ED5i"), " ")), PopupAgeConfirm_jsx("section", {
    "data-particle_enable": "false",
    "data-particle-mobile-disabled": "false",
    className: "elementor-section elementor-inner-section elementor-element elementor-element-6e4e897 elementor-section-boxed elementor-section-height-default elementor-section-height-default",
    "data-id": "6e4e897",
    "data-element_type": "section"
  }, PopupAgeConfirm_jsx("div", {
    className: "elementor-container elementor-column-gap-default"
  }, PopupAgeConfirm_jsx("div", {
    className: "elementor-row"
  }, PopupAgeConfirm_jsx("div", {
    className: "elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-64ad8be",
    "data-id": "64ad8be",
    "data-element_type": "column"
  }, PopupAgeConfirm_jsx("div", {
    className: "elementor-column-wrap elementor-element-populated"
  }, PopupAgeConfirm_jsx("div", {
    className: "elementor-widget-wrap"
  }, PopupAgeConfirm_jsx("div", {
    className: "elementor-element elementor-element-f5a567e elementor-align-justify elementor-widget elementor-widget-button",
    "data-id": "f5a567e",
    "data-element_type": "widget",
    "data-widget_type": "button.default"
  }, PopupAgeConfirm_jsx("div", {
    className: "elementor-widget-container"
  }, PopupAgeConfirm_jsx("div", {
    className: "elementor-button-wrapper"
  }, PopupAgeConfirm_jsx("a", {
    className: "elementor-button-link elementor-button elementor-size-sm",
    role: "button",
    onClick: handleClose
  }, PopupAgeConfirm_jsx("span", {
    className: "elementor-button-content-wrapper"
  }, PopupAgeConfirm_jsx("span", {
    className: "elementor-button-text"
  }, "T\xF4i tr\xEAn 18 tu\u1ED5i"))))))))), PopupAgeConfirm_jsx("div", {
    className: "elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-659332d",
    "data-id": "659332d",
    "data-element_type": "column"
  }, PopupAgeConfirm_jsx("div", {
    className: "elementor-column-wrap elementor-element-populated"
  }, PopupAgeConfirm_jsx("div", {
    className: "elementor-widget-wrap"
  }, PopupAgeConfirm_jsx("div", {
    className: "elementor-element elementor-element-ecf7768 elementor-align-justify elementor-widget elementor-widget-button",
    "data-id": "ecf7768",
    "data-element_type": "widget",
    "data-widget_type": "button.default"
  }, PopupAgeConfirm_jsx("div", {
    className: "elementor-widget-container"
  }, PopupAgeConfirm_jsx("div", {
    className: "elementor-button-wrapper"
  }, PopupAgeConfirm_jsx(link_default.a, {
    href: "/tre-vi-thanh-nien"
  }, PopupAgeConfirm_jsx("a", {
    className: "elementor-button-link elementor-button elementor-size-sm",
    role: "button"
  }, PopupAgeConfirm_jsx("span", {
    className: "elementor-button-content-wrapper"
  }, PopupAgeConfirm_jsx("span", {
    className: "elementor-button-text"
  }, "T\xF4i d\u01B0\u1EDBi 18 tu\u1ED5i")))))))))))))))))))))), PopupAgeConfirm_jsx("div", {
    className: "dialog-buttons-wrapper dialog-lightbox-buttons-wrapper"
  }), PopupAgeConfirm_jsx("div", {
    className: "dialog-close-button dialog-lightbox-close-button"
  }, PopupAgeConfirm_jsx("i", {
    className: "eicon-close"
  })))));
}

/* harmony default export */ var Popup_PopupAgeConfirm = (PopupAgeConfirm);
// EXTERNAL MODULE: ./src/actions/news.js
var actions_news = __webpack_require__("1crH");

// EXTERNAL MODULE: ./src/actions/videos.js
var actions_videos = __webpack_require__("U0X8");

// CONCATENATED MODULE: ./src/pages/index.js
var pages_jsx = external_react_default.a.createElement;













const configsStateSelector = state => state.configs;

const categoriesStateSelector = state => state.categories;

const videosStateSelector = state => state.videos;

const newsStateSelector = state => state.news;

function Home() {
  const dispatch = Object(external_react_redux_["useDispatch"])();
  const {
    configs
  } = Object(external_react_redux_["useSelector"])(configsStateSelector);
  const {
    categories
  } = Object(external_react_redux_["useSelector"])(categoriesStateSelector);
  const {
    videos
  } = Object(external_react_redux_["useSelector"])(videosStateSelector);
  const {
    news
  } = Object(external_react_redux_["useSelector"])(newsStateSelector);
  const {
    0: videoSelected,
    1: setVideoSelected
  } = Object(external_react_["useState"])("");
  Object(external_react_["useEffect"])(() => {
    dispatch(Object(actions_news["a" /* getNews */])(6, 1));
    dispatch(Object(actions_videos["a" /* getVideos */])(1, 1));
    external_swiper_default.a.use([external_swiper_["Navigation"], external_swiper_["Autoplay"]]);
    const bannerSwiper = new external_swiper_default.a(".swiper-banner", {
      loop: true,
      autoplay: {
        delay: 5000
      },
      // Navigation arrows
      navigation: {
        prevEl: ".banner-swiper-button-prev",
        nextEl: ".banner-swiper-button-next"
      }
    });
    return () => {
      dispatch(Object(actions_news["d" /* resetState */])());
      dispatch(Object(actions_videos["d" /* resetState */])());
    };
  }, []);
  Object(external_react_["useEffect"])(() => {
    if (news.length) {
      const blogSwiper = new external_swiper_default.a(".swiper-blog", {
        loop: true,
        autoplay: {
          delay: 5000
        },
        // Navigation arrows
        navigation: {
          prevEl: ".blog-swiper-button-prev",
          nextEl: ".blog-swiper-button-next"
        }
      });
    }
  }, [news]);
  return pages_jsx(Content["a" /* default */], {
    className: "home page-template-default page page-id-2 wp-custom-logo theme-hello-elementor woocommerce-no-js elementor-default elementor-kit-76 elementor-page elementor-page-2"
  }, pages_jsx("style", {
    id: "cb70d11b8"
  }, `
            .clearfix::before,
      .clearfix::after {
        content: " ";
        display: table;
        clear: both;
      }
      .eael-testimonial-slider.nav-top-left,
      .eael-testimonial-slider.nav-top-right,
      .eael-team-slider.nav-top-left,
      .eael-team-slider.nav-top-right,
      .eael-logo-carousel.nav-top-left,
      .eael-logo-carousel.nav-top-right,
      .eael-post-carousel.nav-top-left,
      .eael-post-carousel.nav-top-right,
      .eael-product-carousel.nav-top-left,
      .eael-product-carousel.nav-top-right {
        padding-top: 40px;
      }
      .eael-contact-form input[type="text"],
      .eael-contact-form input[type="email"],
      .eael-contact-form input[type="url"],
      .eael-contact-form input[type="tel"],
      .eael-contact-form input[type="date"],
      .eael-contact-form input[type="number"],
      .eael-contact-form textarea {
        background: #fff;
        box-shadow: none;
        -webkit-box-shadow: none;
        float: none;
        height: auto;
        margin: 0;
        outline: 0;
        width: 100%;
      }
      .eael-contact-form input[type="submit"] {
        border: 0;
        float: none;
        height: auto;
        margin: 0;
        padding: 10px 20px;
        width: auto;
        -webkit-transition: all 0.25s linear 0s;
        -o-transition: all 0.25s linear 0s;
        transition: all 0.25s linear 0s;
      }
      .eael-contact-form.placeholder-hide input::-webkit-input-placeholder,
      .eael-contact-form.placeholder-hide textarea::-webkit-input-placeholder {
        opacity: 0;
        visibility: hidden;
      }
      .eael-contact-form.placeholder-hide input::-moz-placeholder,
      .eael-contact-form.placeholder-hide textarea::-moz-placeholder {
        opacity: 0;
        visibility: hidden;
      }
      .eael-contact-form.placeholder-hide input:-ms-input-placeholder,
      .eael-contact-form.placeholder-hide textarea:-ms-input-placeholder {
        opacity: 0;
        visibility: hidden;
      }
      .eael-contact-form.placeholder-hide input:-moz-placeholder,
      .eael-contact-form.placeholder-hide textarea:-moz-placeholder {
        opacity: 0;
        visibility: hidden;
      }
      .eael-custom-radio-checkbox input[type="checkbox"],
      .eael-custom-radio-checkbox input[type="radio"] {
        -webkit-appearance: none;
        -moz-appearance: none;
        border-style: solid;
        border-width: 0;
        outline: none;
        min-width: 1px;
        width: 15px;
        height: 15px;
        background: #ddd;
        padding: 3px;
      }
      .eael-custom-radio-checkbox input[type="checkbox"]:before,
      .eael-custom-radio-checkbox input[type="radio"]:before {
        content: "";
        width: 100%;
        height: 100%;
        padding: 0;
        margin: 0;
        display: block;
      }
      .eael-custom-radio-checkbox input[type="checkbox"]:checked:before,
      .eael-custom-radio-checkbox input[type="radio"]:checked:before {
        background: #999;
        -webkit-transition: all 0.25s linear 0s;
        -o-transition: all 0.25s linear 0s;
        transition: all 0.25s linear 0s;
      }
      .eael-custom-radio-checkbox input[type="radio"] {
        border-radius: 50%;
      }
      .eael-custom-radio-checkbox input[type="radio"]:before {
        border-radius: 50%;
      }
      .eael-post-elements-readmore-btn {
        font-size: 12px;
        font-weight: 500;
        -webkit-transition: all 300ms ease-in-out;
        -o-transition: all 300ms ease-in-out;
        transition: all 300ms ease-in-out;
        display: inline-block;
      }
      .elementor-lightbox .dialog-widget-content {
        width: 100%;
        height: 100%;
      }
      .eael-contact-form-align-left,
      .elementor-widget-eael-weform.eael-contact-form-align-left
        .eael-weform-container {
        margin: 0 auto 0 0;
      }
      .eael-contact-form-align-center,
      .elementor-widget-eael-weform.eael-contact-form-align-center
        .eael-weform-container {
        float: none;
        margin: 0 auto;
      }
      .eael-contact-form-align-right,
      .elementor-widget-eael-weform.eael-contact-form-align-right
        .eael-weform-container {
        margin: 0 0 0 auto;
      }
      .eael-post-grid-container .eael-post-grid {
        margin: 0 -10px;
      }
      .eael-post-grid-container .eael-post-grid .eael-grid-post {
        float: left;
        padding: 10px;
      }
      .eael-post-carousel .eael-grid-post {
        float: none;
        padding: 0;
      }
      .eael-grid-post-holder {
        border: 1px solid rgba(0, 0, 0, 0.1);
      }
      .eael-grid-post-holder-inner {
        height: 100%;
      }
      .eael-entry-media {
        position: relative;
      }
      .eael-entry-overlay {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 2;
        -webkit-transition: opacity 0.2s ease-in-out,
          -webkit-transform 0.25s cubic-bezier(0.19, 1, 0.22, 1);
        transition: opacity 0.2s ease-in-out,
          -webkit-transform 0.25s cubic-bezier(0.19, 1, 0.22, 1);
        -o-transition: opacity 0.2s ease-in-out,
          transform 0.25s cubic-bezier(0.19, 1, 0.22, 1);
        transition: opacity 0.2s ease-in-out,
          transform 0.25s cubic-bezier(0.19, 1, 0.22, 1);
        transition: opacity 0.2s ease-in-out,
          transform 0.25s cubic-bezier(0.19, 1, 0.22, 1),
          -webkit-transform 0.25s cubic-bezier(0.19, 1, 0.22, 1);
      }
      .eael-entry-overlay > a {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 3;
      }
      .eael-entry-title {
        margin: 10px 0 5px;
        font-size: 1.2em;
      }
      .eael-entry-thumbnail img {
        width: 100%;
        max-width: 100%;
        vertical-align: middle;
      }
      .eael-entry-thumbnail > img {
        height: 100%;
      }
      .eael-entry-footer .eael-author-avatar {
        width: 50px;
      }
      .eael-entry-footer .eael-author-avatar .avatar {
        border-radius: 50%;
      }
      .eael-post-grid .eael-entry-footer .eael-entry-meta {
        padding-left: 8px;
        text-align: left;
      }
      .eael-grid-post .eael-entry-meta {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-orient: horizontal;
        -webkit-box-direction: normal;
        -ms-flex-direction: row;
        flex-direction: row;
        white-space: nowrap;
      }
      .eael-grid-post .eael-entry-footer .eael-entry-meta {
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
        -ms-flex-direction: column;
        flex-direction: column;
      }
      .eael-entry-meta > div {
        font-size: 12px;
        line-height: 1.2;
        padding-bottom: 5px;
      }
      .eael-grid-post-excerpt p {
        margin: 0;
        font-size: 14px;
      }
      .eael-entry-meta .eael-entry-footer .eael-posted-by {
        display: block;
      }
      .eael-grid-post .eael-entry-wrapper,
      .eael-grid-post .eael-entry-footer {
        padding: 15px;
      }
      .eael-post-grid
        .eael-entry-wrapper
        > .eael-entry-meta
        span.eael-posted-on {
        padding-left: 5px;
      }
      .eael-post-grid
        .eael-entry-wrapper
        > .eael-entry-meta
        span.eael-posted-on::before {
        content: "";
        font-family: "Font Awesome 5 Free";
        font-weight: 700;
        color: inherit;
        opacity: 0.4;
        font-size: 0.8em;
        padding-right: 7px;
      }
      .eael-entry-media {
        position: relative;
      }
      .eael-entry-overlay {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        justify-content: center;
      }
      .eael-entry-overlay > i {
        color: #fff;
      }
      .eael-entry-overlay.fade-in {
        visibility: hidden;
        opacity: 0;
        -webkit-transition: 300ms;
        -o-transition: 300ms;
        transition: 300ms;
      }
      .eael-entry-media:hover .eael-entry-overlay.fade-in {
        visibility: visible;
        opacity: 1;
      }
      .eael-entry-media:hover .eael-entry-overlay.fade-in > i {
        -webkit-transform: translate(0);
        -ms-transform: translate(0);
        transform: translate(0);
        opacity: 1;
      }
      .eael-entry-overlay.zoom-in {
        -webkit-transform: scale(0.9);
        -ms-transform: scale(0.9);
        transform: scale(0.9);
        visibility: hidden;
        opacity: 0;
        -webkit-transition: 300ms;
        -o-transition: 300ms;
        transition: 300ms;
      }
      .eael-entry-media:hover .eael-entry-overlay.zoom-in {
        visibility: visible;
        opacity: 1;
        -webkit-transform: scale(1);
        -ms-transform: scale(1);
        transform: scale(1);
      }
      .eael-entry-overlay.slide-up {
        -webkit-transform: translateY(100%);
        -ms-transform: translateY(100%);
        transform: translateY(100%);
        visibility: hidden;
        opacity: 0;
        -webkit-transition: 300ms;
        -o-transition: 300ms;
        transition: 300ms;
      }
      .eael-entry-media:hover .eael-entry-overlay.slide-up {
        -webkit-transform: translateY(0);
        -ms-transform: translateY(0);
        transform: translateY(0);
        visibility: visible;
        opacity: 1;
      }
      .eael-entry-media {
        overflow: hidden;
      }
      .eael-entry-media.grid-hover-style-fade-in .eael-entry-overlay {
        opacity: 0;
      }
      .eael-entry-media.grid-hover-style-fade-in:hover .eael-entry-overlay {
        opacity: 1;
      }
      .eael-entry-media.grid-hover-style-none .eael-entry-overlay {
        display: none;
      }
      .eael-entry-overlay.none {
        opacity: 0;
      }
      .eael-entry-media.grid-hover-style-zoom-in .eael-entry-overlay {
        -webkit-transform: scale(0.4);
        -ms-transform: scale(0.4);
        transform: scale(0.4);
        opacity: 0;
      }
      .eael-entry-media.grid-hover-style-zoom-in:hover .eael-entry-overlay {
        -webkit-transform: scale(1);
        -ms-transform: scale(1);
        transform: scale(1);
        opacity: 1;
      }
      .eael-entry-media.grid-hover-style-animate-down .eael-entry-overlay {
        -webkit-transform: translateY(-100%);
        -ms-transform: translateY(-100%);
        transform: translateY(-100%);
      }
      .eael-entry-media.grid-hover-style-animate-down .eael-entry-overlay > i {
        -webkit-transform: translateY(-100px);
        -ms-transform: translateY(-100px);
        transform: translateY(-100px);
        -webkit-transition-delay: 100ms;
        -o-transition-delay: 100ms;
        transition-delay: 100ms;
        -webkit-transition-duration: 300ms;
        -o-transition-duration: 300ms;
        transition-duration: 300ms;
      }
      .eael-entry-media.grid-hover-style-animate-down:hover
        .eael-entry-overlay {
        -webkit-transform: translate(0);
        -ms-transform: translate(0);
        transform: translate(0);
      }
      .eael-entry-media.grid-hover-style-animate-down:hover
        .eael-entry-overlay
        > i {
        -webkit-transform: translateY(0);
        -ms-transform: translateY(0);
        transform: translateY(0);
      }
      .eael-entry-media.grid-hover-style-animate-up .eael-entry-overlay {
        -webkit-transform: translateY(100%);
        -ms-transform: translateY(100%);
        transform: translateY(100%);
        visibility: hidden;
        opacity: 0;
      }
      .eael-entry-media.grid-hover-style-animate-up .eael-entry-overlay > i {
        -webkit-transform: translateY(100px);
        -ms-transform: translateY(100px);
        transform: translateY(100px);
        -webkit-transition-delay: 100ms;
        -o-transition-delay: 100ms;
        transition-delay: 100ms;
        -webkit-transition-duration: 300ms;
        -o-transition-duration: 300ms;
        transition-duration: 300ms;
      }
      .eael-entry-media.grid-hover-style-animate-up:hover .eael-entry-overlay {
        -webkit-transform: translate(0);
        -ms-transform: translate(0);
        transform: translate(0);
        visibility: visible;
        opacity: 1;
      }
      .eael-entry-media.grid-hover-style-animate-up:hover
        .eael-entry-overlay
        > i {
        -webkit-transform: translateY(0);
        -ms-transform: translateY(0);
        transform: translateY(0);
      }
      @media only screen and (min-width: 1025px) {
        .elementor-element.elementor-grid-eael-col-1 {
          position: relative;
        }
        .elementor-element.elementor-grid-eael-col-1 .eael-grid-post {
          width: 100%;
          float: left;
        }
        .elementor-element.elementor-grid-eael-col-2 {
          position: relative;
        }
        .elementor-element.elementor-grid-eael-col-2 .eael-grid-post {
          width: 50%;
          float: left;
        }
        .elementor-element.elementor-grid-eael-col-2
          .eael-grid-post:nth-of-type(2n) {
          margin-right: 0 !important;
        }
        .elementor-element.elementor-grid-eael-col-2
          .eael-grid-post:nth-of-type(2n + 1) {
          clear: left;
        }
        .elementor-element.elementor-grid-eael-col-3 {
          position: relative;
        }
        .elementor-element.elementor-grid-eael-col-3 .eael-grid-post {
          width: 33.3333%;
          float: left;
        }
        .elementor-element.elementor-grid-eael-col-3
          .eael-grid-post:nth-of-type(3n) {
          margin-right: 0 !important;
        }
        .elementor-element.elementor-grid-eael-col-3
          .eael-grid-post:nth-of-type(3n + 1) {
          clear: left;
        }
        .elementor-element.elementor-grid-eael-col-4 {
          position: relative;
        }
        .elementor-element.elementor-grid-eael-col-4 .eael-grid-post {
          width: 25%;
          float: left;
        }
        .elementor-element.elementor-grid-eael-col-4
          .eael-grid-post:nth-of-type(4n) {
          margin-right: 0 !important;
        }
        .elementor-element.elementor-grid-eael-col-4
          .eael-grid-post:nth-of-type(4n + 1) {
          clear: left;
        }
        .elementor-element.elementor-grid-eael-col-5 {
          position: relative;
        }
        .elementor-element.elementor-grid-eael-col-5 .eael-grid-post {
          width: 20%;
          float: left;
        }
        .elementor-element.elementor-grid-eael-col-5
          .eael-grid-post:nth-of-type(5n) {
          margin-right: 0 !important;
        }
        .elementor-element.elementor-grid-eael-col-5
          .eael-grid-post:nth-of-type(5n + 1) {
          clear: left;
        }
        .elementor-element.elementor-grid-eael-col-6 {
          position: relative;
        }
        .elementor-element.elementor-grid-eael-col-6 .eael-grid-post {
          width: 16%;
          float: left;
        }
        .elementor-element.elementor-grid-eael-col-6
          .eael-grid-post:nth-of-type(6n) {
          margin-right: 0 !important;
        }
        .elementor-element.elementor-grid-eael-col-6
          .eael-grid-post:nth-of-type(6n + 1) {
          clear: left;
        }
      }
      @media only screen and (max-width: 1024px) and (min-width: 766px) {
        .elementor-element.elementor-grid-tablet-eael-col-1 {
          position: relative;
        }
        .elementor-element.elementor-grid-tablet-eael-col-1 .eael-grid-post {
          width: 100%;
          float: left;
        }
        .elementor-element.elementor-grid-tablet-eael-col-2 {
          position: relative;
        }
        .elementor-element.elementor-grid-tablet-eael-col-2 .eael-grid-post {
          width: 50%;
          float: left;
        }
        .elementor-element.elementor-grid-tablet-eael-col-2
          .eael-grid-post:nth-of-type(2n) {
          margin-right: 0 !important;
        }
        .elementor-element.elementor-grid-tablet-eael-col-2
          .eael-grid-post:nth-of-type(2n + 1) {
          clear: left;
        }
        .elementor-element.elementor-grid-tablet-eael-col-3 {
          position: relative;
        }
        .elementor-element.elementor-grid-tablet-eael-col-3 .eael-grid-post {
          width: 33.3333%;
          float: left;
        }
        .elementor-element.elementor-grid-tablet-eael-col-3
          .eael-grid-post:nth-of-type(3n) {
          margin-right: 0 !important;
        }
        .elementor-element.elementor-grid-tablet-eael-col-3
          .eael-grid-post:nth-of-type(3n + 1) {
          clear: left;
        }
        .elementor-element.elementor-grid-tablet-eael-col-4 {
          position: relative;
        }
        .elementor-element.elementor-grid-tablet-eael-col-4 .eael-grid-post {
          width: 25%;
          float: left;
        }
        .elementor-element.elementor-grid-tablet-eael-col-4
          .eael-grid-post:nth-of-type(4n) {
          margin-right: 0 !important;
        }
        .elementor-element.elementor-grid-tablet-eael-col-4
          .eael-grid-post:nth-of-type(4n + 1) {
          clear: left;
        }
        .elementor-element.elementor-grid-tablet-eael-col-5 {
          position: relative;
        }
        .elementor-element.elementor-grid-tablet-eael-col-5 .eael-grid-post {
          width: 20%;
          float: left;
        }
        .elementor-element.elementor-grid-tablet-eael-col-5
          .eael-grid-post:nth-of-type(5n) {
          margin-right: 0 !important;
        }
        .elementor-element.elementor-grid-tablet-eael-col-5
          .eael-grid-post:nth-of-type(5n + 1) {
          clear: left;
        }
        .elementor-element.elementor-grid-tablet-eael-col-6 {
          position: relative;
        }
        .elementor-element.elementor-grid-tablet-eael-col-6 .eael-grid-post {
          width: 16%;
          float: left;
        }
        .elementor-element.elementor-grid-tablet-eael-col-6
          .eael-grid-post:nth-of-type(6n) {
          margin-right: 0 !important;
        }
        .elementor-element.elementor-grid-tablet-eael-col-6
          .eael-grid-post:nth-of-type(6n + 1) {
          clear: left;
        }
      }
      @media only screen and (max-width: 767px) {
        .elementor-element.elementor-grid-mobile-eael-col-1 {
          position: relative;
        }
        .elementor-element.elementor-grid-mobile-eael-col-1 .eael-grid-post {
          width: 100%;
          float: left;
        }
        .elementor-element.elementor-grid-mobile-eael-col-2 {
          position: relative;
        }
        .elementor-element.elementor-grid-mobile-eael-col-2 .eael-grid-post {
          width: 50%;
          float: left;
        }
        .elementor-element.elementor-grid-mobile-eael-col-2
          .eael-grid-post:nth-of-type(2n) {
          margin-right: 0 !important;
        }
        .elementor-element.elementor-grid-mobile-eael-col-2
          .eael-grid-post:nth-of-type(2n + 1) {
          clear: left;
        }
        .elementor-element.elementor-grid-mobile-eael-col-3 {
          position: relative;
        }
        .elementor-element.elementor-grid-mobile-eael-col-3 .eael-grid-post {
          width: 33.3333%;
          float: left;
        }
        .elementor-element.elementor-grid-mobile-eael-col-3
          .eael-grid-post:nth-of-type(3n) {
          margin-right: 0 !important;
        }
        .elementor-element.elementor-grid-mobile-eael-col-3
          .eael-grid-post:nth-of-type(3n + 1) {
          clear: left;
        }
        .elementor-element.elementor-grid-mobile-eael-col-4 {
          position: relative;
        }
        .elementor-element.elementor-grid-mobile-eael-col-4 .eael-grid-post {
          width: 25%;
          float: left;
        }
        .elementor-element.elementor-grid-mobile-eael-col-4
          .eael-grid-post:nth-of-type(4n) {
          margin-right: 0 !important;
        }
        .elementor-element.elementor-grid-mobile-eael-col-4
          .eael-grid-post:nth-of-type(4n + 1) {
          clear: left;
        }
        .elementor-element.elementor-grid-mobile-eael-col-5 {
          position: relative;
        }
        .elementor-element.elementor-grid-mobile-eael-col-5 .eael-grid-post {
          width: 20%;
          float: left;
        }
        .elementor-element.elementor-grid-mobile-eael-col-5
          .eael-grid-post:nth-of-type(5n) {
          margin-right: 0 !important;
        }
        .elementor-element.elementor-grid-mobile-eael-col-5
          .eael-grid-post:nth-of-type(5n + 1) {
          clear: left;
        }
        .elementor-element.elementor-grid-mobile-eael-col-6 {
          position: relative;
        }
        .elementor-element.elementor-grid-mobile-eael-col-6 .eael-grid-post {
          width: 16%;
          float: left;
        }
        .elementor-element.elementor-grid-mobile-eael-col-6
          .eael-grid-post:nth-of-type(6n) {
          margin-right: 0 !important;
        }
        .elementor-element.elementor-grid-mobile-eael-col-6
          .eael-grid-post:nth-of-type(6n + 1) {
          clear: left;
        }
      }
      .eael-author-avatar > a {
        display: block;
      }
      .eael-entry-footer {
        overflow: hidden;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
      }
      .eael-entry-footer > div {
        display: inline-block;
        float: left;
      }
      .post-carousel-categories {
        position: absolute;
        left: 0;
        top: 0;
        z-index: 11;
        width: 100%;
        margin: 0;
        padding: 15px;
        text-align: left;
        visibility: hidden;
        opacity: 0;
        -webkit-transition: 300ms;
        -o-transition: 300ms;
        transition: 300ms;
      }
      .post-carousel-categories li {
        display: inline-block;
        text-transform: capitalize;
        margin-right: 5px;
        position: relative;
      }
      .post-carousel-categories li:after {
        content: ",";
        color: #fff;
      }
      .post-carousel-categories li:last-child:after {
        display: none;
      }
      .post-carousel-categories li a {
        color: #fff;
      }
      .eael-entry-media:hover .post-carousel-categories {
        visibility: visible;
        opacity: 1;
      }
      .eael-post-grid-style-three .eael-meta-posted-on {
        min-width: 60px;
        height: 50px;
        padding: 5px;
        display: -webkit-inline-box;
        display: -ms-inline-flexbox;
        display: inline-flex;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        justify-content: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        border-radius: 4px;
        -webkit-box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.5);
        box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.5);
        text-align: center;
        font-size: 16px;
        line-height: 18px;
        margin-top: 12px;
        margin-left: 12px;
      }
      .eael-post-grid-style-three .eael-meta-posted-on span {
        display: block;
      }
      .eael-post-grid-style-two .eael-entry-meta {
        -webkit-box-align: baseline;
        -ms-flex-align: baseline;
        align-items: baseline;
      }
      .eael-post-grid-style-two .eael-entry-meta .eael-meta-posted-on {
        padding: 0;
        font-size: 12px;
        margin-right: 15px;
        color: #929292;
      }
      .eael-post-grid-style-two .eael-entry-meta .eael-meta-posted-on i {
        margin-right: 7px;
      }
      .eael-post-grid-style-two .eael-entry-meta .post-meta-categories {
        list-style: none;
        display: -webkit-inline-box;
        display: -ms-inline-flexbox;
        display: inline-flex;
        -ms-flex-flow: wrap;
        flex-flow: wrap;
        margin: 0;
        padding-left: 0;
      }
      .eael-post-grid-style-two .eael-entry-meta .post-meta-categories li {
        font-size: 12px;
        margin-right: 7px;
        color: #929292;
      }
      .eael-post-grid-style-two
        .eael-entry-meta
        .post-meta-categories
        li:last-child {
        margin-right: 0;
      }
      .eael-post-grid-style-two .eael-entry-meta .post-meta-categories li a {
        color: #929292;
      }
      .rtl .eael-grid-post .eael-entry-footer {
        direction: ltr;
      }
      .eael-post-carousel.grayscale-normal img {
        -webkit-filter: grayscale(100%);
        filter: grayscale(100%);
      }
      .eael-post-carousel.grayscale-normal .swiper-slide:hover img {
        -webkit-filter: none;
        filter: none;
      }
      .eael-post-carousel.grayscale-hover .swiper-slide:hover img {
        -webkit-filter: grayscale(100%);
        filter: grayscale(100%);
      }
      .eael-post-carousel.swiper-container .swiper-slide {
        text-align: center;
      }
      .eael-post-carousel .eael-grid-post-holder {
        -webkit-transition: all 0.3s ease;
        -o-transition: all 0.3s ease;
        transition: all 0.3s ease;
      }
      .eael-post-carousel .eael-entry-thumbnail > img,
      .swiper-container-wrap .eael-post-carousel .swiper-slide img {
        height: 100%;
        width: 100%;
        -o-object-fit: cover;
        object-fit: cover;
      }
      .eael-post-carousel .eael-entry-medianone {
        position: relative;
      }
      .eael-post-carousel .eael-entry-content {
        padding: 0 15px;
      }
      .eael-entry-thumbnail {
        position: relative;
      }
      .eael-entry-thumbnail a {
        position: absolute;
        left: 0;
        top: 0;
        height: 100%;
        width: 100%;
      }
      .eael-post-carousel .eael-post-carousel-title a {
        color: inherit;
      }
      .eael-author-avatar > a {
        display: block;
      }
      .eael-entry-footer {
        overflow: hidden;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
      }
      .eael-entry-footer > div {
        display: inline-block;
        float: left;
      }
      .post_carousel_meta_alignment-right .eael-entry-meta {
        text-align: right;
        -webkit-box-align: end;
        -ms-flex-align: end;
        align-items: flex-end;
        -webkit-box-pack: end;
        -ms-flex-pack: end;
        justify-content: flex-end;
      }
      .post_carousel_meta_alignment-center .eael-entry-meta {
        text-align: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        justify-content: center;
      }
      .post_carousel_meta_alignment-right .eael-entry-footer > div {
        float: right;
      }
      .post_carousel_meta_alignment-right .eael-entry-footer {
        display: block;
      }
      .post_carousel_meta_alignment-right .eael-entry-footer .eael-entry-meta {
        text-align: right;
        padding-left: 0;
        padding-right: 15px;
      }
      .post_carousel_meta_alignment-center .eael-entry-footer > div {
        float: none;
        display: block;
      }
      .post_carousel_meta_alignment-center .eael-entry-footer {
        margin: 0 auto 15px;
        display: -webkit-inline-box;
        display: -ms-inline-flexbox;
        display: inline-flex;
      }
      .swiper-container.eael-post-carousel.show-read-more-button
        .eael-post-elements-readmore-btn {
        display: inline-block;
      }
      .eael-post-carousel-wrap .swiper-button-prev i {
        -webkit-transform: rotate(0deg);
        -ms-transform: rotate(0deg);
        transform: rotate(0deg);
      }
      .eael-entry-media:hover .eael-entry-overlay.zoom-in {
        -webkit-transform: scale(1);
        -ms-transform: scale(1);
        transform: scale(1);
        visibility: visible;
        opacity: 1;
      }
      .eael-entry-media:hover .eael-entry-overlay.fade-in {
        visibility: visible;
        opacity: 1;
      }
      .eael-entry-media:hover .eael-entry-overlay.slide-up {
        -webkit-transform: translateY(0);
        -ms-transform: translateY(0);
        transform: translateY(0);
        visibility: visible;
        opacity: 1;
      }
      .eael-post-block-item-holder .eael-entry-media {
        overflow: hidden;
      }
      .eael-entry-overlay.none {
        background: none !important;
      }
      .eael-post-carousel-wrap .eael-logo-carousel-wrap .swiper-button-prev i {
        -webkit-transform: rotate(0deg);
        -ms-transform: rotate(0deg);
        transform: rotate(0deg);
      }
      .eael-logo-carousel-wrap.swiper-container-wrap .swiper-pagination {
        bottom: 10px;
        left: 0;
        width: 100%;
      }
      .eael-logo-carousel-wrap.swiper-container-wrap-dots-outside
        .swiper-pagination {
        position: static;
      }
      .eael-logo-carousel-wrap.swiper-container-wrap .swiper-pagination-bullet {
        background: #ccc;
        margin: 0 4px;
        opacity: 1;
        height: 8px;
        width: 8px;
        -webkit-transition: all 0.3s ease;
        -o-transition: all 0.3s ease;
        transition: all 0.3s ease;
      }
      .eael-logo-carousel-wrap.swiper-container-wrap
        .swiper-pagination-bullet-active {
        background: #000;
      }
      .eael-logo-carousel-wrap.swiper-container-wrap .swiper-button-next,
      .eael-logo-carousel-wrap.swiper-container-wrap .swiper-button-prev {
        background-image: none;
        outline: none;
      }
      .eael-post-grid-container
        .eael-post-grid.eael-post-carousel
        .eael-grid-post {
        width: 100%;
      }
      .post-carousel-categories {
        position: absolute;
        left: 0;
        top: 0;
        z-index: 11;
        width: 100%;
        margin: 0;
        padding: 15px;
        text-align: left;
      }
      .post-carousel-categories li {
        display: inline-block;
        text-transform: capitalize;
        margin-right: 5px;
        position: relative;
      }
      .post-carousel-categories li:after {
        content: ",";
        color: #fff;
      }
      .post-carousel-categories li:last-child:after {
        display: none;
      }
      .post-carousel-categories li a {
        color: #fff;
      }
      .eael-post-carousel-wrap .eael-entry-content-btn {
        margin-top: 15px;
      }
      .eael-post-carousel-style-three .eael-entry-content {
        padding: 0 15px 15px 15px;
      }
      .eael-post-carousel-style-three .eael-meta-posted-on {
        min-width: 60px;
        height: 50px;
        display: -webkit-inline-box;
        display: -ms-inline-flexbox;
        display: inline-flex;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        justify-content: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        border-radius: 4px;
        -webkit-box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.5);
        box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.5);
        text-align: center;
        font-size: 16px;
        line-height: 18px;
        padding: 5px;
        margin-top: 5px;
      }
      .eael-post-carousel-style-three .eael-meta-posted-on span {
        display: block;
      }
      .eael-post-carousel-style-two .eael-entry-content {
        padding: 0 15px;
      }
      .eael-post-carousel-style-two .eael-entry-footer-two {
        padding: 15px;
      }
      .eael-post-carousel-style-two .eael-entry-meta {
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
      }
      .eael-post-carousel-style-two .eael-entry-meta .eael-meta-posted-on {
        padding: 0;
        font-size: 12px;
        margin-right: 15px;
        color: #929292;
      }
      .eael-post-carousel-style-two .eael-entry-meta .eael-meta-posted-on i {
        margin-right: 7px;
      }
      .eael-post-carousel-style-two .eael-entry-meta .post-meta-categories {
        list-style: none;
        display: -webkit-inline-box;
        display: -ms-inline-flexbox;
        display: inline-flex;
        margin: 0;
      }
      .eael-post-carousel-style-two .eael-entry-meta .post-meta-categories li {
        font-size: 12px;
        margin-right: 7px;
        color: #929292;
      }
      .eael-post-carousel-style-two
        .eael-entry-meta
        .post-meta-categories
        li
        a {
        color: #929292;
      }
      .eael-post-carousel-style-two
        .eael-entry-meta
        .post-meta-categories
        li:last-child {
        margin-right: 0;
      }`), pages_jsx(head_default.a, null, pages_jsx("title", null, "Luvin - Th\u01B0\u1EDFng th\u1EE9c cu\u1ED9c s\u1ED1ng"), pages_jsx("meta", {
    name: "description",
    content: "T\u1EA5t c\u1EA3 c\xE1c s\u1EA3n ph\u1EA9m r\u01B0\u1EE3u vang \u0111\u01B0\u1EE3c l\xEAn men t\u1EF1 nhi\xEAn v\xE0 c\xF3 n\u1ED3ng \u0111\u1ED9 c\u1ED3n d\u01B0\u1EDBi 15 \u0111\u1ED9"
  }), pages_jsx("meta", {
    property: "og:type",
    content: "website"
  }), pages_jsx("meta", {
    property: "og:title",
    content: "Luvin - Th\u01B0\u1EDFng th\u1EE9c cu\u1ED9c s\u1ED1ng"
  }), pages_jsx("meta", {
    property: "og:url",
    content: "https://luvin.com.vn"
  }), pages_jsx("meta", {
    property: "og:site_name",
    content: "Luvin"
  }), pages_jsx("meta", {
    property: "og:image",
    content: "https://luvin.com.vn/images/banner.jpg"
  }), pages_jsx("meta", {
    property: "og:image:width",
    content: "1200"
  }), pages_jsx("meta", {
    property: "og:image:height",
    content: "630"
  })), pages_jsx(external_react_modal_video_default.a, {
    channel: "youtube",
    autoplay: true,
    isOpen: !!videoSelected,
    videoId: videoSelected,
    onClose: () => setVideoSelected("")
  }), pages_jsx("main", {
    className: "site-main post-2 page type-page status-publish hentry",
    role: "main"
  }, pages_jsx(Popup_PopupEvents, null), pages_jsx(Popup_PopupAgeConfirm, null), pages_jsx("div", {
    className: "page-content"
  }, pages_jsx("div", {
    className: "elementor elementor-2"
  }, pages_jsx("div", {
    className: "elementor-inner"
  }, pages_jsx("div", {
    className: "elementor-section-wrap"
  }, pages_jsx("section", {
    className: "elementor-section elementor-top-section elementor-element elementor-element-b3e8910 elementor-section-full_width elementor-section-height-min-height elementor-section-height-default elementor-section-items-middle"
  }, pages_jsx("div", {
    className: "elementor-container elementor-column-gap-no"
  }, pages_jsx("div", {
    className: "elementor-row"
  }, pages_jsx("div", {
    className: "elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-ec0e8a4"
  }, pages_jsx("div", {
    className: "elementor-column-wrap elementor-element-populated"
  }, pages_jsx("div", {
    className: "elementor-widget-wrap"
  }, pages_jsx("div", {
    className: "elementor-element elementor-element-4d6f905 elementor--h-position-center elementor--v-position-middle elementor-arrows-position-inside elementor-widget elementor-widget-slides"
  }, pages_jsx("div", {
    className: "elementor-widget-container"
  }, pages_jsx("div", {
    className: "elementor-swiper"
  }, pages_jsx("div", {
    className: "elementor-slides-wrapper elementor-main-swiper swiper-container swiper-banner",
    dir: "ltr",
    "data-animation": "fadeInUp"
  }, pages_jsx("div", {
    className: "swiper-wrapper elementor-slides"
  }, configs.banners.map(image => pages_jsx("div", {
    className: "elementor-repeater-item-e2a8157 swiper-slide",
    key: image
  }, pages_jsx("div", {
    className: "swiper-slide-bg",
    style: {
      backgroundImage: `url(${image})`
    }
  }), pages_jsx("div", {
    className: "swiper-slide-inner"
  }, pages_jsx("div", {
    className: "swiper-slide-contents"
  }))))), pages_jsx("div", {
    className: "elementor-swiper-button elementor-swiper-button-prev banner-swiper-button-prev"
  }, pages_jsx("i", {
    className: "eicon-chevron-left",
    "aria-hidden": "true"
  }), pages_jsx("span", {
    className: "elementor-screen-only"
  }, "Previous")), pages_jsx("div", {
    className: "elementor-swiper-button elementor-swiper-button-next banner-swiper-button-next"
  }, pages_jsx("i", {
    className: "eicon-chevron-right",
    "aria-hidden": "true"
  }), pages_jsx("span", {
    className: "elementor-screen-only"
  }, "Next")))))))))))), pages_jsx("section", {
    className: "elementor-section elementor-top-section elementor-element elementor-element-5c8672e elementor-section-boxed elementor-section-height-default elementor-section-height-default"
  }, pages_jsx("div", {
    className: "elementor-container elementor-column-gap-default"
  }, pages_jsx("div", {
    className: "elementor-row"
  }, pages_jsx("div", {
    className: "elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-16fd017"
  }, pages_jsx("div", {
    className: "elementor-column-wrap elementor-element-populated"
  }, pages_jsx("div", {
    className: "elementor-widget-wrap"
  }, pages_jsx("div", {
    className: "elementor-element elementor-element-cfcda50 elementor-icon-list--layout-inline elementor-align-center elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list"
  }, pages_jsx("div", {
    className: "elementor-widget-container"
  }, pages_jsx("ul", {
    className: "elementor-icon-list-items elementor-inline-items"
  }, pages_jsx("li", {
    className: "elementor-icon-list-item elementor-inline-item"
  }, pages_jsx("span", {
    className: "elementor-icon-list-icon"
  }, pages_jsx("i", {
    "aria-hidden": "true",
    className: "fas fa-map-marked-alt"
  })), pages_jsx("span", {
    className: "elementor-icon-list-text"
  }, "L1-13 Vincom Center 15A - Nguy\u1EC5n Ch\xED Thanh - \u0110\u1ED1ng \u0110a - H\xE0 N\u1ED9i")), pages_jsx("li", {
    className: "elementor-icon-list-item elementor-inline-item"
  }, pages_jsx("span", {
    className: "elementor-icon-list-icon"
  }, pages_jsx("i", {
    "aria-hidden": "true",
    className: "far fa-envelope"
  })), pages_jsx("span", {
    className: "elementor-icon-list-text"
  }, "info@luvin.com.vn")), pages_jsx("li", {
    className: "elementor-icon-list-item elementor-inline-item"
  }, pages_jsx("span", {
    className: "elementor-icon-list-icon"
  }, pages_jsx("i", {
    "aria-hidden": "true",
    className: "fas fa-phone-square-alt"
  })), pages_jsx("span", {
    className: "elementor-icon-list-text"
  }, "84.76.855.3838 - 84.989.27.3838")), pages_jsx("li", {
    className: "elementor-icon-list-item elementor-inline-item"
  }, pages_jsx("a", {
    href: "https://g.page/LuVinGourmetNCT?share",
    target: "_blank"
  }, pages_jsx("span", {
    className: "elementor-icon-list-icon"
  }, pages_jsx("i", {
    "aria-hidden": "true",
    className: "fas fa-map-marked-alt"
  })), pages_jsx("span", {
    className: "elementor-icon-list-text"
  }, "Ch\u1EC9 \u0111\u01B0\u1EDDng")))))))))))), pages_jsx("section", {
    className: "elementor-section elementor-top-section elementor-element elementor-element-517afdb elementor-section-boxed elementor-section-height-default elementor-section-height-default"
  }, pages_jsx("div", {
    className: "elementor-container elementor-column-gap-default"
  }, pages_jsx("div", {
    className: "elementor-row"
  }, pages_jsx("div", {
    className: "elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-fe4362b"
  }, pages_jsx("div", {
    className: "elementor-column-wrap elementor-element-populated"
  }, pages_jsx("div", {
    className: "elementor-widget-wrap"
  }, pages_jsx("div", {
    className: "elementor-element elementor-element-5a08c2d elementor-widget elementor-widget-heading"
  }, pages_jsx("div", {
    className: "elementor-widget-container"
  }, pages_jsx("h2", {
    className: "elementor-heading-title elementor-size-default"
  }, configs.slogan))), pages_jsx("div", {
    className: "elementor-element elementor-element-77613ad elementor-widget elementor-widget-heading"
  }, pages_jsx("div", {
    className: "elementor-widget-container"
  }, pages_jsx("p", {
    className: "elementor-heading-title elementor-size-default"
  }, configs.description))))))))), pages_jsx("section", {
    className: "elementor-section elementor-top-section elementor-element elementor-element-447286e home-card elementor-section-boxed elementor-section-height-default elementor-section-height-default"
  }, pages_jsx("div", {
    className: "elementor-container elementor-column-gap-default"
  }, pages_jsx("div", {
    className: "elementor-row"
  }, categories.map(({
    ident,
    slug,
    name,
    description,
    image
  }) => pages_jsx("div", {
    className: "elementor-column elementor-col-25 elementor-top-column elementor-element elementor-element-1a170ed",
    key: ident
  }, pages_jsx("div", {
    className: "elementor-column-wrap elementor-element-populated"
  }, pages_jsx("div", {
    className: "elementor-widget-wrap"
  }, pages_jsx("div", {
    className: "elementor-element elementor-element-e5d2ac1 elementor-widget elementor-widget-image"
  }, pages_jsx("div", {
    className: "elementor-widget-container"
  }, pages_jsx("div", {
    className: "elementor-image"
  }, pages_jsx(link_default.a, {
    href: "/[category]",
    as: `/${slug}`
  }, pages_jsx("a", null, pages_jsx("img", {
    width: "400",
    height: "420",
    src: image,
    className: "attachment-large size-large",
    alt: "",
    sizes: "(max-width: 400px) 100vw, 400px"
  })))))), pages_jsx("div", {
    className: "elementor-element elementor-element-a6cf860 elementor-cta--valign-middle home-cta-box elementor-cta--skin-classic elementor-animated-content elementor-bg-transform elementor-bg-transform-zoom-in elementor-widget elementor-widget-call-to-action"
  }, pages_jsx("div", {
    className: "elementor-widget-container"
  }, pages_jsx("div", {
    className: "elementor-cta"
  }, pages_jsx("div", {
    className: "elementor-cta__content"
  }, pages_jsx("h2", {
    className: "elementor-cta__title elementor-cta__content-item elementor-content-item"
  }, name), pages_jsx("div", {
    className: "elementor-cta__description elementor-cta__content-item elementor-content-item"
  }, description), pages_jsx("div", {
    className: "elementor-cta__button-wrapper elementor-cta__content-item elementor-content-item"
  }, pages_jsx(link_default.a, {
    href: "/[category]",
    as: `/${slug}`
  }, pages_jsx("a", {
    className: "elementor-cta__button elementor-button elementor-size-sm"
  }, "Xem th\xEAm")))))))))))))), pages_jsx("section", {
    className: "elementor-section elementor-top-section elementor-element elementor-element-9d6b616 elementor-section-boxed elementor-section-height-default elementor-section-height-default",
    style: {
      backgroundImage: `url(${configs.ctaImage})`
    }
  }, pages_jsx("div", {
    className: "elementor-container elementor-column-gap-default"
  }, pages_jsx("div", {
    className: "elementor-row"
  }, pages_jsx("div", {
    className: "elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-135dca1"
  }, pages_jsx("div", {
    className: "elementor-column-wrap elementor-element-populated"
  }, pages_jsx("div", {
    className: "elementor-widget-wrap"
  }, pages_jsx("div", {
    className: "elementor-element elementor-element-c96c3f3 elementor-cta--skin-cover elementor-cta--valign-middle elementor-widget elementor-widget-call-to-action"
  }, pages_jsx("div", {
    className: "elementor-widget-container"
  }, pages_jsx("div", {
    className: "elementor-cta"
  }, pages_jsx("div", {
    className: "elementor-cta__bg-wrapper"
  }, pages_jsx("div", {
    className: "elementor-cta__bg elementor-bg"
  }), pages_jsx("div", {
    className: "elementor-cta__bg-overlay"
  })), pages_jsx("div", {
    className: "elementor-cta__content"
  }, pages_jsx("h2", {
    className: "elementor-cta__title elementor-cta__content-item elementor-content-item"
  }, configs.ctaTitle), pages_jsx("div", {
    className: "elementor-cta__description elementor-cta__content-item elementor-content-item"
  }, configs.ctaDescription), pages_jsx("div", {
    className: "elementor-cta__button-wrapper elementor-cta__content-item elementor-content-item"
  }, pages_jsx("a", {
    className: "elementor-cta__button elementor-button elementor-size-xs",
    href: configs.ctaUrl
  }, "Xem ngay"))))))))), pages_jsx("div", {
    className: "elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-503ff12"
  }, pages_jsx("div", {
    className: "elementor-column-wrap"
  }, pages_jsx("div", {
    className: "elementor-widget-wrap"
  })))))), pages_jsx("section", {
    className: "elementor-section elementor-top-section elementor-element elementor-element-133c334 elementor-section-boxed elementor-section-height-default elementor-section-height-default"
  }, pages_jsx("div", {
    className: "elementor-container elementor-column-gap-default"
  }, pages_jsx("div", {
    className: "elementor-row"
  }, pages_jsx("div", {
    className: "elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-d492930"
  }, pages_jsx("div", {
    className: "elementor-column-wrap elementor-element-populated"
  }, pages_jsx("div", {
    className: "elementor-widget-wrap"
  }, pages_jsx("div", {
    className: "elementor-element elementor-element-9fda2b9 elementor-widget elementor-widget-heading"
  }, pages_jsx("div", {
    className: "elementor-widget-container"
  }, pages_jsx(link_default.a, {
    href: "/video"
  }, pages_jsx("h2", {
    className: "elementor-heading-title elementor-size-default"
  }, "Video")))), pages_jsx("div", {
    className: "elementor-element elementor-element-5bc48ab elementor-aspect-ratio-169 elementor-widget elementor-widget-video"
  }, pages_jsx("div", {
    className: "elementor-widget-container"
  }, pages_jsx("div", {
    className: "elementor-wrapper elementor-open-lightbox"
  }, pages_jsx("div", {
    className: "elementor-custom-embed-image-overlay",
    "data-elementor-open-lightbox": "yes",
    "data-elementor-lightbox": "{\"type\":\"video\",\"videoType\":\"youtube\",\"url\":\"https:\\/\\/www.youtube.com\\/embed\\/rI7GbeQ-odg?feature=oembed&start&end&wmode=opaque&loop=0&controls=1&mute=0&rel=0&modestbranding=1\",\"modalOptions\":{\"id\":\"elementor-lightbox-5bc48ab\",\"entranceAnimation\":\"\",\"entranceAnimation_tablet\":\"\",\"entranceAnimation_mobile\":\"\",\"videoAspectRatio\":\"169\"}}",
    onClick: () => {
      const {
        video
      } = videos[0];
      const [, query] = video.split("?");
      const [v] = (query || "").split("&");
      const videoId = (v || "").replace("v=", "");
      setVideoSelected(videoId);
    }
  }, pages_jsx("img", {
    width: "1280",
    height: "720",
    src: (videos[0] || {}).image,
    className: "attachment-full size-full",
    alt: "",
    sizes: "(max-width: 1280px) 100vw, 1280px"
  }), pages_jsx("div", {
    className: "elementor-custom-embed-play",
    role: "button"
  }, pages_jsx("i", {
    className: "eicon-play",
    "aria-hidden": "true"
  }), pages_jsx("span", {
    className: "elementor-screen-only"
  }, "Ch\u01A1i Video"))))))))), pages_jsx("div", {
    className: "elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-0412ad8"
  }, pages_jsx("div", {
    className: "elementor-column-wrap elementor-element-populated"
  }, pages_jsx("div", {
    className: "elementor-widget-wrap"
  }, pages_jsx("div", {
    className: "elementor-element elementor-element-64e59c6 elementor-widget elementor-widget-heading"
  }, pages_jsx("div", {
    className: "elementor-widget-container"
  }, pages_jsx(link_default.a, {
    href: "/tin-tuc"
  }, pages_jsx("h2", {
    className: "elementor-heading-title elementor-size-default"
  }, "Blog")))), pages_jsx("div", {
    className: "elementor-element elementor-element-2028771 home-post-carousel elementor-arrows-position-inside elementor-widget elementor-widget-image-carousel"
  }, pages_jsx("div", {
    className: "elementor-widget-container"
  }, pages_jsx("div", {
    className: "elementor-image-carousel-wrapper swiper-container swiper-blog",
    dir: "ltr"
  }, pages_jsx("div", {
    className: "elementor-image-carousel swiper-wrapper"
  }, news.map(({
    title,
    slug,
    image
  }) => {
    return pages_jsx("div", {
      className: "swiper-slide"
    }, pages_jsx(link_default.a, {
      href: "/tin-tuc/[slug].js",
      as: `/tin-tuc/${slug}`
    }, pages_jsx("a", {
      "data-elementor-open-lightbox": "yes",
      "data-elementor-lightbox-slideshow": "2028771",
      "data-elementor-lightbox-title": "pexels-ylanite-koppens-2820146"
    }, pages_jsx("figure", {
      className: "swiper-slide-inner"
    }, pages_jsx("img", {
      className: "swiper-slide-image",
      src: image,
      alt: title
    }), pages_jsx("figcaption", {
      className: "elementor-image-carousel-caption"
    }, title)))));
  })), pages_jsx("div", {
    className: "elementor-swiper-button elementor-swiper-button-prev blog-swiper-button-prev"
  }, pages_jsx("i", {
    className: "eicon-chevron-left",
    "aria-hidden": "true"
  }), pages_jsx("span", {
    className: "elementor-screen-only"
  }, "Previous")), pages_jsx("div", {
    className: "elementor-swiper-button elementor-swiper-button-next blog-swiper-button-next"
  }, pages_jsx("i", {
    className: "eicon-chevron-right",
    "aria-hidden": "true"
  }), pages_jsx("span", {
    className: "elementor-screen-only"
  }, "Next")))))))))))))))));
}

/***/ }),

/***/ "S3md":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/***/ }),

/***/ "T6WU":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("YFqc");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("4Q3z");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lodash_sum__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("AZSr");
/* harmony import */ var lodash_sum__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash_sum__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var numeral__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("5ChB");
/* harmony import */ var numeral__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(numeral__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("h74D");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _actions_cart__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("6lzq");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;








const categoryStateSelector = state => state.categories;

const cartStateSelector = state => state.cart;

function Header(props) {
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"])();
  const {
    0: searchValue,
    1: setSearchValue
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("");
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_5__["useDispatch"])();
  const {
    categories
  } = Object(react_redux__WEBPACK_IMPORTED_MODULE_5__["useSelector"])(categoryStateSelector);
  const {
    openCartMenu,
    products
  } = Object(react_redux__WEBPACK_IMPORTED_MODULE_5__["useSelector"])(cartStateSelector);
  const {
    0: opentMobileMenu,
    1: setOpenMobileMenu
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: innerWidth,
    1: setInnerWidth
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0);

  const handleSearch = event => {
    event.preventDefault();
    router.push(`/tim-kiem?name=${searchValue}`);
  }; // useEffect(() => {
  //   setInnerWidth(window.innerWidth);
  // }, [])


  Object(react__WEBPACK_IMPORTED_MODULE_0__["useLayoutEffect"])(() => {
    function updateSize() {
      setInnerWidth(window.innerWidth);
    }

    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  }, []);
  return __jsx("div", {
    className: "elementor elementor-78 elementor-location-header"
  }, __jsx("style", null, `
          .menu-item-has-children:hover .elementor-nav-menu--dropdown {
            display: block;
          }
          .arrow {
            border: solid white;
            border-width: 0 3px 3px 0;
            display: inline-block;
            padding: 3px;
            color: white
          }
          .down {
            transform: rotate(45deg);
            -webkit-transform: rotate(45deg);
          }
        `), __jsx("div", {
    className: "elementor-section-wrap"
  }, __jsx("section", {
    className: "elementor-section elementor-top-section elementor-element elementor-element-3cf488a elementor-section-content-middle elementor-section-height-min-height elementor-section-boxed elementor-section-height-default elementor-section-items-middle"
  }, __jsx("div", {
    className: "elementor-container elementor-column-gap-default"
  }, __jsx("div", {
    className: "elementor-row"
  }, __jsx("div", {
    className: "elementor-column elementor-col-16 elementor-top-column elementor-element elementor-element-3bd1853"
  }, __jsx("div", {
    className: "elementor-column-wrap elementor-element-populated"
  }, __jsx("div", {
    className: "elementor-widget-wrap"
  }, __jsx("div", {
    className: "elementor-element elementor-element-9f109fa elementor-nav-menu__align-left elementor-hidden-tablet elementor-hidden-phone elementor-nav-menu--indicator-classic elementor-nav-menu--indicator-classNameic elementor-nav-menu--dropdown-tablet elementor-nav-menu__text-align-aside elementor-nav-menu--toggle elementor-nav-menu--burger elementor-widget elementor-widget-nav-menu"
  }, __jsx("div", {
    className: "elementor-widget-container"
  }, __jsx("nav", {
    role: "navigation",
    className: "elementor-nav-menu--main elementor-nav-menu__container elementor-nav-menu--layout-horizontal e--pointer-none"
  }, __jsx("ul", {
    id: "menu-1-9f109fa",
    className: "elementor-nav-menu"
  }, __jsx("li", {
    className: "menu-reset-left menu-item menu-item-type-post_type menu-item-object-page menu-item-56"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/uu-dai"
  }, __jsx("a", {
    className: "elementor-item"
  }, "\u01AFu \u0111\xE3i"))), __jsx("li", {
    className: "menu-item menu-item-type-post_type menu-item-object-page menu-item-53"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/y-kien-khach-hang"
  }, __jsx("a", {
    className: "elementor-item"
  }, "\xDD ki\u1EBFn kh\xE1ch h\xE0ng"))))), __jsx("div", {
    className: "elementor-menu-toggle",
    role: "button",
    tabIndex: "0",
    "aria-label": "Menu Toggle",
    "aria-expanded": "false"
  }, __jsx("i", {
    className: "eicon-menu-bar",
    "aria-hidden": "true"
  }), __jsx("span", {
    className: "elementor-screen-only"
  }, "Menu")), __jsx("nav", {
    className: "elementor-nav-menu--dropdown elementor-nav-menu__container",
    role: "navigation",
    "aria-hidden": "true"
  }, __jsx("ul", {
    id: "menu-2-9f109fa",
    className: "elementor-nav-menu"
  }, __jsx("li", {
    className: "menu-reset-left menu-item menu-item-type-post_type menu-item-object-page menu-item-56"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/uu-dai"
  }, __jsx("a", {
    className: "elementor-item"
  }, "\u01AFu \u0111\xE3i"))), __jsx("li", {
    className: "menu-item menu-item-type-post_type menu-item-object-page menu-item-53"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/y-kien-khach-hang"
  }, __jsx("a", {
    className: "elementor-item"
  }, "\xDD ki\u1EBFn kh\xE1ch h\xE0ng"))))))), __jsx("div", {
    className: "elementor-element elementor-element-ad94921 elementor-nav-menu--stretch elementor-hidden-desktop elementor-nav-menu__align-left elementor-nav-menu--indicator-classNameic elementor-nav-menu--dropdown-tablet elementor-nav-menu__text-align-aside elementor-nav-menu--toggle elementor-nav-menu--burger elementor-widget elementor-widget-nav-menu"
  }, __jsx("div", {
    className: "elementor-widget-container"
  }, __jsx("nav", {
    role: "navigation",
    className: "elementor-nav-menu--main elementor-nav-menu__container elementor-nav-menu--layout-horizontal e--pointer-none"
  }, __jsx("ul", {
    id: "menu-1-ad94921",
    className: "elementor-nav-menu"
  }, __jsx("li", {
    className: "menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item page_item page-item-2 current_page_item menu-item-708"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/"
  }, __jsx("a", {
    "aria-current": "page",
    className: "elementor-item elementor-item-active"
  }, "Trang ch\u1EE7"))), __jsx("li", {
    className: "menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-709"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/shop"
  }, __jsx("a", {
    className: "elementor-item has-submenu"
  }, "S\u1EA3n ph\u1EA9m", __jsx("span", {
    className: "sub-arrow"
  }, __jsx("i", {
    className: "fa"
  })))), __jsx("ul", {
    className: "sub-menu elementor-nav-menu--dropdown"
  }, __jsx("li", {
    className: "menu-item menu-item-type-post_type menu-item-object-page menu-item-723"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/uu-dai"
  }, __jsx("a", {
    className: "elementor-sub-item"
  }, "\u01AFu \u0111\xE3i"))), categories.map(({
    name,
    slug,
    ident
  }) => __jsx("li", {
    className: "menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-722",
    key: ident
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/[category]",
    as: `/${slug}`
  }, __jsx("a", {
    className: "elementor-sub-item"
  }, name)))))), __jsx("li", {
    className: "menu-item menu-item-type-post_type menu-item-object-page menu-item-711"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/tasty"
  }, __jsx("a", {
    className: "elementor-item"
  }, "Tasty"))), __jsx("li", {
    className: "menu-item menu-item-type-taxonomy menu-item-object-category menu-item-712"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/su-kien"
  }, __jsx("a", {
    className: "elementor-item"
  }, "S\u1EF1 ki\u1EC7n"))), __jsx("li", {
    className: "menu-item menu-item-type-taxonomy menu-item-object-category menu-item-has-children menu-item-713"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/tin-tuc"
  }, __jsx("a", {
    className: "elementor-item has-submenu"
  }, "Tin t\u1EE9c", __jsx("span", {
    className: "sub-arrow"
  }, __jsx("i", {
    className: "fa"
  })))), __jsx("ul", {
    className: "sub-menu elementor-nav-menu--dropdown"
  }, __jsx("li", {
    className: "menu-item menu-item-type-taxonomy menu-item-object-category menu-item-714"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/tin-tuc"
  }, __jsx("a", {
    className: "elementor-sub-item"
  }, "B\xE0i vi\u1EBFt"))), __jsx("li", {
    className: "menu-item menu-item-type-post_type menu-item-object-page menu-item-725"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/video"
  }, __jsx("a", {
    className: "elementor-sub-item"
  }, "Video"))), __jsx("li", {
    className: "menu-item menu-item-type-post_type menu-item-object-page menu-item-884"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/faq"
  }, __jsx("a", {
    className: "elementor-sub-item"
  }, "Faq"))))), __jsx("li", {
    className: "menu-item menu-item-type-post_type menu-item-object-page menu-item-717"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/ve-chung-toi"
  }, __jsx("a", {
    className: "elementor-item"
  }, "V\u1EC1 ch\xFAng t\xF4i"))), __jsx("li", {
    className: "menu-item menu-item-type-post_type menu-item-object-page menu-item-718"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/y-kien-khach-hang"
  }, __jsx("a", {
    className: "elementor-item"
  }, "\xDD ki\u1EBFn kh\xE1ch h\xE0ng"))))), __jsx("div", {
    className: `elementor-menu-toggle ${opentMobileMenu && "elementor-active"}`,
    role: "button",
    tabIndex: "0",
    "aria-label": "Menu Toggle",
    "aria-expanded": "false",
    onClick: () => setOpenMobileMenu(!opentMobileMenu)
  }, __jsx("i", {
    className: "eicon-menu-bar",
    "aria-hidden": "true"
  }), __jsx("span", {
    className: "elementor-screen-only"
  }, "Menu")), __jsx("nav", {
    className: "elementor-nav-menu--dropdown elementor-nav-menu__container",
    role: "navigation",
    "aria-hidden": "true",
    style: {
      top: "33px",
      left: "-10px",
      width: `${innerWidth}px`
    }
  }, __jsx("ul", {
    id: "menu-2-ad94921",
    className: "elementor-nav-menu"
  }, __jsx("li", {
    className: "menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item page_item page-item-2 current_page_item menu-item-708"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/"
  }, __jsx("a", {
    "aria-current": "page",
    className: "elementor-item elementor-item-active"
  }, "Trang ch\u1EE7"))), __jsx("li", {
    className: "menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-709"
  }, __jsx("a", {
    className: "elementor-item has-submenu"
  }, "S\u1EA3n ph\u1EA9m", __jsx("span", {
    className: "sub-arrow"
  }, __jsx("i", {
    className: "fa arrow down"
  }))), __jsx("ul", {
    className: "sub-menu elementor-nav-menu--dropdown"
  }, __jsx("li", {
    className: "menu-item menu-item-type-post_type menu-item-object-page menu-item-723"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/uu-dai"
  }, __jsx("a", {
    className: "elementor-sub-item"
  }, "\u01AFu \u0111\xE3i"))), categories.map(({
    name,
    slug,
    ident
  }) => __jsx("li", {
    className: "menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-722"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/[category]",
    as: `/${slug}`
  }, __jsx("a", {
    className: "elementor-sub-item"
  }, name)))))), __jsx("li", {
    className: "menu-item menu-item-type-post_type menu-item-object-page menu-item-711"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/tasty"
  }, __jsx("a", {
    className: "elementor-item"
  }, "Tasty"))), __jsx("li", {
    className: "menu-item menu-item-type-taxonomy menu-item-object-category menu-item-712"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/su-kien"
  }, __jsx("a", {
    className: "elementor-item"
  }, "S\u1EF1 ki\u1EC7n"))), __jsx("li", {
    className: "menu-item menu-item-type-taxonomy menu-item-object-category menu-item-has-children menu-item-713"
  }, __jsx("a", {
    className: "elementor-item has-submenu"
  }, "Tin t\u1EE9c", __jsx("span", {
    className: "sub-arrow"
  }, __jsx("i", {
    className: "fa arrow down"
  }))), __jsx("ul", {
    className: "sub-menu elementor-nav-menu--dropdown"
  }, __jsx("li", {
    className: "menu-item menu-item-type-taxonomy menu-item-object-category menu-item-714"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/tin-tuc"
  }, __jsx("a", {
    className: "elementor-sub-item"
  }, "B\xE0i vi\u1EBFt"))), __jsx("li", {
    className: "menu-item menu-item-type-post_type menu-item-object-page menu-item-725"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/video"
  }, __jsx("a", {
    className: "elementor-sub-item"
  }, "Video"))), __jsx("li", {
    className: "menu-item menu-item-type-post_type menu-item-object-page menu-item-884"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/faq"
  }, __jsx("a", {
    className: "elementor-sub-item"
  }, "Faq"))))), __jsx("li", {
    className: "menu-item menu-item-type-post_type menu-item-object-page menu-item-717"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/ve-chung-toi"
  }, __jsx("a", {
    className: "elementor-item"
  }, "V\u1EC1 ch\xFAng t\xF4i"))), __jsx("li", {
    className: "menu-item menu-item-type-post_type menu-item-object-page menu-item-718"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/y-kien-khach-hang"
  }, __jsx("a", {
    className: "elementor-item"
  }, "\xDD ki\u1EBFn kh\xE1ch h\xE0ng")))))))))), __jsx("div", {
    className: "elementor-column elementor-col-66 elementor-top-column elementor-element elementor-element-831c070"
  }, __jsx("div", {
    className: "elementor-column-wrap elementor-element-populated"
  }, __jsx("div", {
    className: "elementor-widget-wrap"
  }, __jsx("div", {
    className: "elementor-element elementor-element-081392e elementor-widget elementor-widget-theme-site-title elementor-widget-heading"
  }, __jsx("div", {
    className: "elementor-widget-container"
  }, __jsx("h1", {
    className: "elementor-heading-title elementor-size-default"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/"
  }, __jsx("a", null, "LuVin Gourmet")))))))), __jsx("div", {
    className: "elementor-column elementor-col-16 elementor-top-column elementor-element elementor-element-7cba798"
  }, __jsx("div", {
    className: "elementor-column-wrap elementor-element-populated"
  }, __jsx("div", {
    className: "elementor-widget-wrap"
  }, __jsx("section", {
    className: "elementor-section elementor-inner-section elementor-element elementor-element-c4ada8e elementor-section-content-middle elementor-section-boxed elementor-section-height-default elementor-section-height-default"
  }, __jsx("div", {
    className: "elementor-container elementor-column-gap-no"
  }, __jsx("div", {
    className: "elementor-row"
  }, __jsx("div", {
    className: "elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-65e8073"
  }, __jsx("div", {
    className: "elementor-column-wrap elementor-element-populated"
  }, __jsx("div", {
    className: "elementor-widget-wrap"
  }, __jsx("div", {
    className: "elementor-element elementor-element-9b56687 elementor-view-default elementor-widget elementor-widget-icon"
  }, __jsx("div", {
    className: "elementor-widget-container"
  }, __jsx("div", {
    className: "elementor-icon-wrapper"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/tai-khoan"
  }, __jsx("a", {
    className: "elementor-icon"
  }, __jsx("i", {
    "aria-hidden": "true",
    className: "far fa-user-circle"
  }))))))))), __jsx("div", {
    className: "elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-38f65ed"
  }, __jsx("div", {
    className: "elementor-column-wrap elementor-element-populated"
  }, __jsx("div", {
    className: "elementor-widget-wrap"
  }, __jsx("div", {
    className: "elementor-element elementor-element-39d530e toggle-icon--cart-solid cartsider elementor-menu-cart--items-indicator-bubble elementor-menu-cart--show-divider-yes elementor-menu-cart--show-remove-button-yes elementor-menu-cart--buttons-inline elementor-widget elementor-widget-woocommerce-menu-cart"
  }, __jsx("div", {
    className: "elementor-widget-container"
  }, __jsx("div", {
    className: "elementor-menu-cart__wrapper"
  }, __jsx("div", {
    className: `elementor-menu-cart__container elementor-lightbox ${openCartMenu && "elementor-menu-cart--shown"}`,
    onClick: event => {
      if (event.target !== document.getElementById("close-button")) {
        dispatch(Object(_actions_cart__WEBPACK_IMPORTED_MODULE_6__[/* toggleCartMenu */ "c"])());
      }
    }
  }, __jsx("div", {
    className: "elementor-menu-cart__main",
    "aria-expanded": "false"
  }, __jsx("div", {
    id: "close-button",
    className: "elementor-menu-cart__close-button",
    onClick: () => dispatch(Object(_actions_cart__WEBPACK_IMPORTED_MODULE_6__[/* toggleCartMenu */ "c"])())
  }), !!products.length ? __jsx("div", {
    className: "widget_shopping_cart_content"
  }, products.map(({
    amount,
    product = {}
  }, index) => {
    return __jsx("div", {
      className: "elementor-menu-cart__products woocommerce-mini-cart cart woocommerce-cart-form__contents",
      key: index
    }, __jsx("div", {
      className: "elementor-menu-cart__product woocommerce-cart-form__cart-item cart_item"
    }, __jsx("div", {
      className: "elementor-menu-cart__product-image product-thumbnail"
    }, __jsx("a", null, __jsx("img", {
      width: "300",
      height: "360",
      src: (product.images || [])[0],
      className: "attachment-woocommerce_thumbnail size-woocommerce_thumbnail",
      alt: "",
      loading: "lazy"
    }))), __jsx("div", {
      className: "elementor-menu-cart__product-name product-name",
      "data-title": "Product"
    }, __jsx("a", null, product.name)), __jsx("div", {
      className: "elementor-menu-cart__product-price product-price",
      "data-title": "Price"
    }, __jsx("span", {
      className: "quantity"
    }, amount, " \xD7", " ", __jsx("span", {
      className: "woocommerce-Price-amount amount"
    }, __jsx("bdi", null, numeral__WEBPACK_IMPORTED_MODULE_4___default()((product.price || 0) - (product.discount || 0)).format("0,0"), __jsx("span", {
      className: "woocommerce-Price-currencySymbol"
    }, "\u20AB")))), " "), __jsx("div", {
      className: "elementor-menu-cart__product-remove product-remove"
    }, __jsx("a", {
      onClick: () => dispatch(Object(_actions_cart__WEBPACK_IMPORTED_MODULE_6__[/* removeProduct */ "b"])(index)),
      "aria-label": "Remove this item",
      "data-product_sku": "woo-album"
    }))));
  }), __jsx("div", {
    className: "elementor-menu-cart__subtotal"
  }, __jsx("strong", null, "T\u1EA1m t\xEDnh:"), " ", __jsx("span", {
    className: "woocommerce-Price-amount amount"
  }, __jsx("bdi", null, numeral__WEBPACK_IMPORTED_MODULE_4___default()(lodash_sum__WEBPACK_IMPORTED_MODULE_3___default()(products.map(({
    amount,
    product = {}
  }) => {
    const realPrice = amount * ((product.price || 0) - (product.discount || 0));
    return realPrice;
  }))).format("0,0"), __jsx("span", {
    className: "woocommerce-Price-currencySymbol"
  }, "\u20AB"))), " "), __jsx("div", {
    className: "elementor-menu-cart__footer-buttons"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/gio-hang"
  }, __jsx("a", {
    className: "elementor-button elementor-button--view-cart elementor-size-md"
  }, __jsx("span", {
    className: "elementor-button-text"
  }, "Xem gi\u1ECF h\xE0ng"))), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/thanh-toan"
  }, __jsx("a", {
    className: "elementor-button elementor-button--checkout elementor-size-md"
  }, __jsx("span", {
    className: "elementor-button-text"
  }, "Thanh to\xE1n"))))) : "Chưa có sản phẩm nào trong giỏ hàng")), __jsx("div", {
    className: "elementor-menu-cart__toggle elementor-button-wrapper"
  }, __jsx("a", {
    id: "elementor-menu-cart__toggle_button",
    className: "elementor-button elementor-size-sm",
    onClick: () => dispatch(Object(_actions_cart__WEBPACK_IMPORTED_MODULE_6__[/* toggleCartMenu */ "c"])())
  }, __jsx("span", {
    className: "elementor-button-text"
  }, __jsx("span", {
    className: "woocommerce-Price-amount amount"
  }, __jsx("bdi", null, lodash_sum__WEBPACK_IMPORTED_MODULE_3___default()(products.map(({
    amount
  }) => amount)), __jsx("span", {
    className: "woocommerce-Price-currencySymbol"
  }, "\u20AB")))), __jsx("span", {
    className: "elementor-button-icon",
    "data-counter": lodash_sum__WEBPACK_IMPORTED_MODULE_3___default()(products.map(({
      amount
    }) => amount))
  }, __jsx("i", {
    className: "eicon",
    "aria-hidden": "true"
  }), __jsx("span", {
    className: "elementor-screen-only"
  }, "Cart"))))))))))))))))))), __jsx("section", {
    className: "elementor-section elementor-top-section elementor-element elementor-element-5c400ae elementor-hidden-tablet elementor-hidden-phone elementor-section-content-middle elementor-section-boxed elementor-section-height-default elementor-section-height-default"
  }, __jsx("div", {
    className: "elementor-container elementor-column-gap-no"
  }, __jsx("div", {
    className: "elementor-row"
  }, __jsx("div", {
    className: "elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-d20e4e0"
  }, __jsx("div", {
    className: "elementor-column-wrap elementor-element-populated"
  }, __jsx("div", {
    className: "elementor-widget-wrap"
  }, __jsx("div", {
    className: "elementor-element elementor-element-58acc29 elementor-nav-menu__align-left elementor-nav-menu--stretch elementor-nav-menu--indicator-angle header-menu elementor-nav-menu--dropdown-tablet elementor-nav-menu__text-align-aside elementor-nav-menu--toggle elementor-nav-menu--burger elementor-widget elementor-widget-nav-menu"
  }, __jsx("div", {
    className: "elementor-widget-container"
  }, __jsx("nav", {
    role: "navigation",
    className: "elementor-nav-menu--main elementor-nav-menu__container elementor-nav-menu--layout-horizontal e--pointer-none"
  }, __jsx("ul", {
    id: "menu-1-58acc29",
    className: "elementor-nav-menu"
  }, __jsx("li", {
    className: "menu-reset-left menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-377"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/shop"
  }, __jsx("a", {
    className: "elementor-item has-submenu"
  }, "S\u1EA3n ph\u1EA9m", __jsx("span", {
    className: "sub-arrow"
  }, __jsx("i", {
    className: "fa"
  })))), __jsx("ul", {
    className: "sub-menu elementor-nav-menu--dropdown"
  }, categories.map(({
    name,
    slug,
    ident
  }) => __jsx("li", {
    className: "menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-378",
    key: ident
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/[category]",
    as: `/${slug}`
  }, __jsx("a", {
    className: "elementor-sub-item"
  }, name)))))), __jsx("li", {
    className: "menu-item menu-item-type-post_type menu-item-object-page menu-item-28"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/tasty"
  }, __jsx("a", {
    className: "elementor-item"
  }, "Tasty"))), __jsx("li", {
    className: "menu-item menu-item-type-taxonomy menu-item-object-category menu-item-29"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/su-kien"
  }, __jsx("a", {
    className: "elementor-item"
  }, "S\u1EF1 ki\u1EC7n"))), __jsx("li", {
    className: "menu-item menu-item-type-taxonomy menu-item-object-category menu-item-has-children menu-item-356"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/tin-tuc"
  }, __jsx("a", {
    className: "elementor-item has-submenu"
  }, "Blog", __jsx("span", {
    className: "sub-arrow"
  }, __jsx("i", {
    className: "fa"
  })))), __jsx("ul", {
    className: "sub-menu elementor-nav-menu--dropdown"
  }, __jsx("li", {
    className: "menu-item menu-item-type-taxonomy menu-item-object-category menu-item-385"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/tin-tuc"
  }, __jsx("a", {
    className: "elementor-sub-item"
  }, "Tin t\u1EE9c"))), __jsx("li", {
    className: "menu-item menu-item-type-post_type menu-item-object-page menu-item-445"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/video"
  }, __jsx("a", {
    className: "elementor-sub-item"
  }, "Video"))), __jsx("li", {
    className: "menu-item menu-item-type-post_type menu-item-object-page menu-item-883"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/faq"
  }, __jsx("a", {
    className: "elementor-sub-item"
  }, "Faq"))))), __jsx("li", {
    className: "menu-item menu-item-type-post_type menu-item-object-page menu-item-30"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/ve-chung-toi"
  }, __jsx("a", {
    className: "elementor-item"
  }, "V\u1EC1 ch\xFAng t\xF4i"))))), __jsx("div", {
    className: "elementor-menu-toggle",
    role: "button",
    tabIndex: "0",
    "aria-label": "Menu Toggle",
    "aria-expanded": "false"
  }, __jsx("i", {
    className: "eicon-menu-bar",
    "aria-hidden": "true"
  }), __jsx("span", {
    className: "elementor-screen-only"
  }, "Menu")), __jsx("nav", {
    className: "elementor-nav-menu--dropdown elementor-nav-menu__container",
    role: "navigation",
    "aria-hidden": "true"
  }, __jsx("ul", {
    id: "menu-2-58acc29",
    className: "elementor-nav-menu"
  }, __jsx("li", {
    className: "menu-reset-left menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-377"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/shop"
  }, __jsx("a", {
    className: "elementor-item has-submenu"
  }, "S\u1EA3n ph\u1EA9m", __jsx("span", {
    className: "sub-arrow"
  }, __jsx("i", {
    className: "fa"
  })))), __jsx("ul", {
    className: "sub-menu elementor-nav-menu--dropdown"
  }, categories.map(({
    name,
    slug,
    ident
  }) => __jsx("li", {
    className: "menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-378",
    key: ident
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/[category]",
    as: `/${slug}`
  }, __jsx("a", {
    className: "elementor-sub-item"
  }, name)))))), __jsx("li", {
    className: "menu-item menu-item-type-post_type menu-item-object-page menu-item-28"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/tasty"
  }, __jsx("a", {
    className: "elementor-item"
  }, "Tasty"))), __jsx("li", {
    className: "menu-item menu-item-type-taxonomy menu-item-object-category menu-item-29"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/su-kien"
  }, __jsx("a", {
    className: "elementor-item"
  }, "S\u1EF1 ki\u1EC7n"))), __jsx("li", {
    className: "menu-item menu-item-type-taxonomy menu-item-object-category menu-item-has-children menu-item-356"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/tin-tuc"
  }, __jsx("a", {
    className: "elementor-item has-submenu"
  }, "Blog", __jsx("span", {
    className: "sub-arrow"
  }, __jsx("i", {
    className: "fa"
  })))), __jsx("ul", {
    className: "sub-menu elementor-nav-menu--dropdown"
  }, __jsx("li", {
    className: "menu-item menu-item-type-taxonomy menu-item-object-category menu-item-385"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/tin-tuc"
  }, __jsx("a", {
    className: "elementor-sub-item"
  }, "Tin t\u1EE9c"))), __jsx("li", {
    className: "menu-item menu-item-type-post_type menu-item-object-page menu-item-445"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/video"
  }, __jsx("a", {
    className: "elementor-sub-item"
  }, "Video"))), __jsx("li", {
    className: "menu-item menu-item-type-post_type menu-item-object-page menu-item-883"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/faq"
  }, __jsx("a", {
    className: "elementor-sub-item"
  }, "Faq"))))), __jsx("li", {
    className: "menu-item menu-item-type-post_type menu-item-object-page menu-item-30"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/ve-chung-toi"
  }, __jsx("a", {
    className: "elementor-item"
  }, "V\u1EC1 ch\xFAng t\xF4i")))))))))), __jsx("div", {
    className: "elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-1171155"
  }, __jsx("div", {
    className: "elementor-column-wrap elementor-element-populated"
  }, __jsx("div", {
    className: "elementor-widget-wrap"
  }, __jsx("div", {
    className: "elementor-element elementor-element-f745f44 header-search elementor-widget elementor-widget-wp-widget-woocommerce_product_search"
  }, __jsx("div", {
    className: "elementor-widget-container"
  }, __jsx("div", {
    className: "woocommerce widget_product_search"
  }, __jsx("form", {
    role: "search",
    className: "woocommerce-product-search",
    onSubmit: handleSearch
  }, __jsx("label", {
    className: "screen-reader-text",
    htmlFor: "woocommerce-product-search-field-0"
  }, "T\xECm ki\u1EBFm:"), __jsx("input", {
    type: "search",
    id: "woocommerce-product-search-field-0",
    className: "search-field",
    placeholder: "T\xECm s\u1EA3n ph\u1EA9m\u2026",
    value: searchValue,
    onChange: event => setSearchValue(event.target.value),
    name: "s"
  }), __jsx("button", {
    type: "submit",
    value: "T\xECm ki\u1EBFm"
  }, "T\xECm ki\u1EBFm")))))))))))));
}

/* harmony default export */ __webpack_exports__["a"] = (Header);

/***/ }),

/***/ "U0X8":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getVideos; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return getVideosSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getVideosError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return resetState; });
/* harmony import */ var _constants_videos__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("WxlP");

const getVideos = (limit = 12, page = 1) => ({
  type: _constants_videos__WEBPACK_IMPORTED_MODULE_0__[/* GET_VIDEOS */ "a"],
  limit,
  page
});
const getVideosSuccess = (total, videos) => ({
  type: _constants_videos__WEBPACK_IMPORTED_MODULE_0__[/* GET_VIDEOS_SUCCESS */ "c"],
  total,
  videos
});
const getVideosError = errorMessage => ({
  type: _constants_videos__WEBPACK_IMPORTED_MODULE_0__[/* GET_VIDEOS_ERROR */ "b"],
  errorMessage
});
const resetState = () => ({
  type: _constants_videos__WEBPACK_IMPORTED_MODULE_0__[/* RESET_STATE */ "d"]
});

/***/ }),

/***/ "WxlP":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GET_VIDEOS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return GET_VIDEOS_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return GET_VIDEOS_ERROR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return RESET_STATE; });
const GET_VIDEOS = "VIDEOS/GET_VIDEOS";
const GET_VIDEOS_SUCCESS = "VIDEOS/GET_VIDEOS_SUCCESS";
const GET_VIDEOS_ERROR = "VIDEOS/GET_VIDEOS_ERROR";
const RESET_STATE = "VIDEOS/RESET_STATE";

/***/ }),

/***/ "X24+":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.removePathTrailingSlash = removePathTrailingSlash;
exports.normalizePathTrailingSlash = void 0;
/**
* Removes the trailing slash of a path if there is one. Preserves the root path `/`.
*/

function removePathTrailingSlash(path) {
  return path.endsWith('/') && path !== '/' ? path.slice(0, -1) : path;
}
/**
* Normalizes the trailing slash of a path according to the `trailingSlash` option
* in `next.config.js`.
*/


const normalizePathTrailingSlash =  false ? undefined : removePathTrailingSlash;
exports.normalizePathTrailingSlash = normalizePathTrailingSlash;

/***/ }),

/***/ "YFqc":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("cTJO")


/***/ }),

/***/ "YTqd":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteRegex = getRouteRegex; // this isn't importing the escape-string-regex module
// to reduce bytes

function escapeRegex(str) {
  return str.replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
}

function parseParameter(param) {
  const optional = param.startsWith('[') && param.endsWith(']');

  if (optional) {
    param = param.slice(1, -1);
  }

  const repeat = param.startsWith('...');

  if (repeat) {
    param = param.slice(3);
  }

  return {
    key: param,
    repeat,
    optional
  };
}

function getRouteRegex(normalizedRoute) {
  const segments = (normalizedRoute.replace(/\/$/, '') || '/').slice(1).split('/');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = segments.map(segment => {
    if (segment.startsWith('[') && segment.endsWith(']')) {
      const {
        key,
        optional,
        repeat
      } = parseParameter(segment.slice(1, -1));
      groups[key] = {
        pos: groupIndex++,
        repeat,
        optional
      };
      return repeat ? optional ? '(?:/(.+?))?' : '/(.+?)' : '/([^/]+?)';
    } else {
      return `/${escapeRegex(segment)}`;
    }
  }).join(''); // dead code eliminate for browser since it's only needed
  // while generating routes-manifest

  if (true) {
    let routeKeyCharCode = 97;
    let routeKeyCharLength = 1; // builds a minimal routeKey using only a-z and minimal number of characters

    const getSafeRouteKey = () => {
      let routeKey = '';

      for (let i = 0; i < routeKeyCharLength; i++) {
        routeKey += String.fromCharCode(routeKeyCharCode);
        routeKeyCharCode++;

        if (routeKeyCharCode > 122) {
          routeKeyCharLength++;
          routeKeyCharCode = 97;
        }
      }

      return routeKey;
    };

    const routeKeys = {};
    let namedParameterizedRoute = segments.map(segment => {
      if (segment.startsWith('[') && segment.endsWith(']')) {
        const {
          key,
          optional,
          repeat
        } = parseParameter(segment.slice(1, -1)); // replace any non-word characters since they can break
        // the named regex

        let cleanedKey = key.replace(/\W/g, '');
        let invalidKey = false; // check if the key is still invalid and fallback to using a known
        // safe key

        if (cleanedKey.length === 0 || cleanedKey.length > 30) {
          invalidKey = true;
        }

        if (!isNaN(parseInt(cleanedKey.substr(0, 1)))) {
          invalidKey = true;
        }

        if (invalidKey) {
          cleanedKey = getSafeRouteKey();
        }

        routeKeys[cleanedKey] = key;
        return repeat ? optional ? `(?:/(?<${cleanedKey}>.+?))?` : `/(?<${cleanedKey}>.+?)` : `/(?<${cleanedKey}>[^/]+?)`;
      } else {
        return `/${escapeRegex(segment)}`;
      }
    }).join('');
    return {
      re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
      groups,
      routeKeys,
      namedRegex: `^${namedParameterizedRoute}(?:/)?$`
    };
  }

  return {
    re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
    groups
  };
}

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "cTJO":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("7KCV");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__("cDcd"));

var _router = __webpack_require__("elyg");

var _router2 = __webpack_require__("nOHt");

let cachedObserver;
const listeners = new Map();
const IntersectionObserver = false ? undefined : null;
const prefetched = {};

function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (cachedObserver) {
    return cachedObserver;
  } // Only create shared IntersectionObserver if supported in browser


  if (!IntersectionObserver) {
    return undefined;
  }

  return cachedObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!listeners.has(entry.target)) {
        return;
      }

      const cb = listeners.get(entry.target);

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        cachedObserver.unobserve(entry.target);
        listeners.delete(entry.target);
        cb();
      }
    });
  }, {
    rootMargin: '200px'
  });
}

const listenToIntersections = (el, cb) => {
  const observer = getObserver();

  if (!observer) {
    return () => {};
  }

  observer.observe(el);
  listeners.set(el, cb);
  return () => {
    try {
      observer.unobserve(el);
    } catch (err) {
      console.error(err);
    }

    listeners.delete(el);
  };
};

function prefetch(router, href, as, options) {
  if (true) return;
  if (!(0, _router.isLocalURL)(href)) return; // Prefetch the JSON page if asked (only in the client)
  // We need to handle a prefetch error here since we may be
  // loading with priority which can reject but we don't
  // want to force navigation since this is only a prefetch

  router.prefetch(href, as, options).catch(err => {
    if (false) {}
  }); // Join on an invalid URI character

  prefetched[href + '%' + as] = true;
}

function isModifiedEvent(event) {
  const {
    target
  } = event.currentTarget;
  return target && target !== '_self' || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || // triggers resource download
  event.nativeEvent && event.nativeEvent.which === 2;
}

function linkClicked(e, router, href, as, replace, shallow, scroll) {
  const {
    nodeName
  } = e.currentTarget;

  if (nodeName === 'A' && (isModifiedEvent(e) || !(0, _router.isLocalURL)(href))) {
    // ignore click for browser’s default behavior
    return;
  }

  e.preventDefault(); //  avoid scroll for urls with anchor refs

  if (scroll == null) {
    scroll = as.indexOf('#') < 0;
  } // replace state instead of push if prop is present


  router[replace ? 'replace' : 'push'](href, as, {
    shallow
  }).then(success => {
    if (!success) return;

    if (scroll) {
      window.scrollTo(0, 0);
      document.body.focus();
    }
  });
}

function Link(props) {
  if (false) {}

  const p = props.prefetch !== false;

  const [childElm, setChildElm] = _react.default.useState();

  const router = (0, _router2.useRouter)();
  const pathname = router && router.pathname || '/';

  const {
    href,
    as
  } = _react.default.useMemo(() => {
    const [resolvedHref, resolvedAs] = (0, _router.resolveHref)(pathname, props.href, true);
    return {
      href: resolvedHref,
      as: props.as ? (0, _router.resolveHref)(pathname, props.as) : resolvedAs || resolvedHref
    };
  }, [pathname, props.href, props.as]);

  _react.default.useEffect(() => {
    if (p && IntersectionObserver && childElm && childElm.tagName && (0, _router.isLocalURL)(href)) {
      // Join on an invalid URI character
      const isPrefetched = prefetched[href + '%' + as];

      if (!isPrefetched) {
        return listenToIntersections(childElm, () => {
          prefetch(router, href, as);
        });
      }
    }
  }, [p, childElm, href, as, router]);

  let {
    children,
    replace,
    shallow,
    scroll
  } = props; // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

  if (typeof children === 'string') {
    children = /*#__PURE__*/_react.default.createElement("a", null, children);
  } // This will return the first child, if multiple are provided it will throw an error


  const child = _react.Children.only(children);

  const childProps = {
    ref: el => {
      if (el) setChildElm(el);

      if (child && typeof child === 'object' && child.ref) {
        if (typeof child.ref === 'function') child.ref(el);else if (typeof child.ref === 'object') {
          child.ref.current = el;
        }
      }
    },
    onClick: e => {
      if (child.props && typeof child.props.onClick === 'function') {
        child.props.onClick(e);
      }

      if (!e.defaultPrevented) {
        linkClicked(e, router, href, as, replace, shallow, scroll);
      }
    }
  };

  if (p) {
    childProps.onMouseEnter = e => {
      if (!(0, _router.isLocalURL)(href)) return;

      if (child.props && typeof child.props.onMouseEnter === 'function') {
        child.props.onMouseEnter(e);
      }

      prefetch(router, href, as, {
        priority: true
      });
    };
  } // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
  // defined, we specify the current 'href', so that repetition is not needed by the user


  if (props.passHref || child.type === 'a' && !('href' in child.props)) {
    childProps.href = (0, _router.addBasePath)(as);
  }

  return /*#__PURE__*/_react.default.cloneElement(child, childProps);
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "dZ6Y":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = mitt;
/*
MIT License
Copyright (c) Jason Miller (https://jasonformat.com/)
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/
// This file is based on https://github.com/developit/mitt/blob/v1.1.3/src/index.js
// It's been edited for the needs of this script
// See the LICENSE at the top of the file

function mitt() {
  const all = Object.create(null);
  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

/***/ }),

/***/ "elyg":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.hasBasePath = hasBasePath;
exports.addBasePath = addBasePath;
exports.delBasePath = delBasePath;
exports.isLocalURL = isLocalURL;
exports.interpolateAs = interpolateAs;
exports.resolveHref = resolveHref;
exports.markLoadingError = markLoadingError;
exports.default = void 0;

var _normalizeTrailingSlash = __webpack_require__("X24+");

var _denormalizePagePath = __webpack_require__("wkBG");

var _mitt = _interopRequireDefault(__webpack_require__("dZ6Y"));

var _utils = __webpack_require__("g/15");

var _isDynamic = __webpack_require__("/jkW");

var _parseRelativeUrl = __webpack_require__("hS4m");

var _querystring = __webpack_require__("3WeD");

var _resolveRewrites = _interopRequireDefault(__webpack_require__("S3md"));

var _routeMatcher = __webpack_require__("gguc");

var _routeRegex = __webpack_require__("YTqd");

var _escapePathDelimiters = _interopRequireDefault(__webpack_require__("fcRV"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}
/* global __NEXT_DATA__ */
// tslint:disable:no-console


const basePath =  false || '';

function buildCancellationError() {
  return Object.assign(new Error('Route Cancelled'), {
    cancelled: true
  });
}

function hasBasePath(path) {
  return path === basePath || path.startsWith(basePath + '/');
}

function addBasePath(path) {
  // we only add the basepath on relative urls
  return basePath && path.startsWith('/') ? path === '/' ? (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(basePath) : basePath + path : path;
}

function delBasePath(path) {
  return path.slice(basePath.length) || '/';
}
/**
* Detects whether a given url is routable by the Next.js router (browser only).
*/


function isLocalURL(url) {
  if (url.startsWith('/')) return true;

  try {
    // absolute urls can be local if they are on the same origin
    const locationOrigin = (0, _utils.getLocationOrigin)();
    const resolved = new URL(url, locationOrigin);
    return resolved.origin === locationOrigin && hasBasePath(resolved.pathname);
  } catch (_) {
    return false;
  }
}

function interpolateAs(route, asPathname, query) {
  let interpolatedRoute = '';
  const dynamicRegex = (0, _routeRegex.getRouteRegex)(route);
  const dynamicGroups = dynamicRegex.groups;
  const dynamicMatches = // Try to match the dynamic route against the asPath
  (asPathname !== route ? (0, _routeMatcher.getRouteMatcher)(dynamicRegex)(asPathname) : '') || // Fall back to reading the values from the href
  // TODO: should this take priority; also need to change in the router.
  query;
  interpolatedRoute = route;
  const params = Object.keys(dynamicGroups);

  if (!params.every(param => {
    let value = dynamicMatches[param] || '';
    const {
      repeat,
      optional
    } = dynamicGroups[param]; // support single-level catch-all
    // TODO: more robust handling for user-error (passing `/`)

    let replaced = `[${repeat ? '...' : ''}${param}]`;

    if (optional) {
      replaced = `${!value ? '/' : ''}[${replaced}]`;
    }

    if (repeat && !Array.isArray(value)) value = [value];
    return (optional || param in dynamicMatches) && ( // Interpolate group into data URL if present
    interpolatedRoute = interpolatedRoute.replace(replaced, repeat ? value.map(_escapePathDelimiters.default).join('/') : (0, _escapePathDelimiters.default)(value)) || '/');
  })) {
    interpolatedRoute = ''; // did not satisfy all requirements
    // n.b. We ignore this error because we handle warning for this case in
    // development in the `<Link>` component directly.
  }

  return {
    params,
    result: interpolatedRoute
  };
}

function omitParmsFromQuery(query, params) {
  const filteredQuery = {};
  Object.keys(query).forEach(key => {
    if (!params.includes(key)) {
      filteredQuery[key] = query[key];
    }
  });
  return filteredQuery;
}
/**
* Resolves a given hyperlink with a certain router state (basePath not included).
* Preserves absolute urls.
*/


function resolveHref(currentPath, href, resolveAs) {
  // we use a dummy base url for relative urls
  const base = new URL(currentPath, 'http://n');
  const urlAsString = typeof href === 'string' ? href : (0, _utils.formatWithValidation)(href);

  try {
    const finalUrl = new URL(urlAsString, base);
    finalUrl.pathname = (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(finalUrl.pathname);
    let interpolatedAs = '';

    if ((0, _isDynamic.isDynamicRoute)(finalUrl.pathname) && finalUrl.searchParams && resolveAs) {
      const query = (0, _querystring.searchParamsToUrlQuery)(finalUrl.searchParams);
      const {
        result,
        params
      } = interpolateAs(finalUrl.pathname, finalUrl.pathname, query);

      if (result) {
        interpolatedAs = (0, _utils.formatWithValidation)({
          pathname: result,
          hash: finalUrl.hash,
          query: omitParmsFromQuery(query, params)
        });
      }
    } // if the origin didn't change, it means we received a relative href


    const resolvedHref = finalUrl.origin === base.origin ? finalUrl.href.slice(finalUrl.origin.length) : finalUrl.href;
    return resolveAs ? [resolvedHref, interpolatedAs || resolvedHref] : resolvedHref;
  } catch (_) {
    return resolveAs ? [urlAsString] : urlAsString;
  }
}

const PAGE_LOAD_ERROR = Symbol('PAGE_LOAD_ERROR');

function markLoadingError(err) {
  return Object.defineProperty(err, PAGE_LOAD_ERROR, {});
}

function prepareUrlAs(router, url, as) {
  // If url and as provided as an object representation,
  // we'll format them into the string version here.
  return {
    url: addBasePath(resolveHref(router.pathname, url)),
    as: as ? addBasePath(resolveHref(router.pathname, as)) : as
  };
}

const manualScrollRestoration =  false && false;

function fetchRetry(url, attempts) {
  return fetch(url, {
    // Cookies are required to be present for Next.js' SSG "Preview Mode".
    // Cookies may also be required for `getServerSideProps`.
    //
    // > `fetch` won’t send cookies, unless you set the credentials init
    // > option.
    // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
    //
    // > For maximum browser compatibility when it comes to sending &
    // > receiving cookies, always supply the `credentials: 'same-origin'`
    // > option instead of relying on the default.
    // https://github.com/github/fetch#caveats
    credentials: 'same-origin'
  }).then(res => {
    if (!res.ok) {
      if (attempts > 1 && res.status >= 500) {
        return fetchRetry(url, attempts - 1);
      }

      throw new Error(`Failed to load static props`);
    }

    return res.json();
  });
}

function fetchNextData(dataHref, isServerRender) {
  return fetchRetry(dataHref, isServerRender ? 3 : 1).catch(err => {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      markLoadingError(err);
    }

    throw err;
  });
}

class Router {
  /**
  * Map of all components loaded in `Router`
  */
  // Static Data Cache
  constructor(_pathname, _query, _as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    initialStyleSheets,
    err,
    subscription,
    isFallback
  }) {
    this.route = void 0;
    this.pathname = void 0;
    this.query = void 0;
    this.asPath = void 0;
    this.basePath = void 0;
    this.components = void 0;
    this.sdc = {};
    this.sub = void 0;
    this.clc = void 0;
    this.pageLoader = void 0;
    this._bps = void 0;
    this.events = void 0;
    this._wrapApp = void 0;
    this.isSsr = void 0;
    this.isFallback = void 0;
    this._inFlightRoute = void 0;
    this._shallow = void 0;

    this.onPopState = e => {
      const state = e.state;

      if (!state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', (0, _utils.formatWithValidation)({
          pathname: addBasePath(pathname),
          query
        }), (0, _utils.getURL)());
        return;
      }

      if (!state.__N) {
        return;
      }

      const {
        url,
        as,
        options
      } = state;
      const {
        pathname
      } = (0, _parseRelativeUrl.parseRelativeUrl)(url); // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site

      if (this.isSsr && as === this.asPath && pathname === this.pathname) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(state)) {
        return;
      }

      this.change('replaceState', url, as, Object.assign({}, options, {
        shallow: options.shallow && this._shallow
      }));
    }; // represents the current component key


    this.route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(_pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (_pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        styleSheets: initialStyleSheets,
        props: initialProps,
        err,
        __N_SSG: initialProps && initialProps.__N_SSG,
        __N_SSP: initialProps && initialProps.__N_SSP
      };
    }

    this.components['/_app'] = {
      Component: App,
      styleSheets: [
        /* /_app does not need its stylesheets managed */
      ]
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = _pathname;
    this.query = _query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    this.asPath = // @ts-ignore this is temporarily global (attached to window)
    (0, _isDynamic.isDynamicRoute)(_pathname) && __NEXT_DATA__.autoExport ? _pathname : _as;
    this.basePath = basePath;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isFallback = isFallback;

    if (false) {}
  }

  reload() {
    window.location.reload();
  }
  /**
  * Go back in history
  */


  back() {
    window.history.back();
  }
  /**
  * Performs a `pushState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  push(url, as = url, options = {}) {
    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('pushState', url, as, options);
  }
  /**
  * Performs a `replaceState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  replace(url, as = url, options = {}) {
    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('replaceState', url, as, options);
  }

  async change(method, url, as, options) {
    if (!isLocalURL(url)) {
      window.location.href = url;
      return false;
    }

    if (!options._h) {
      this.isSsr = false;
    } // marking route changes as a navigation start entry


    if (_utils.ST) {
      performance.mark('routeChange');
    }

    if (this._inFlightRoute) {
      this.abortComponentLoad(this._inFlightRoute);
    }

    const cleanedAs = hasBasePath(as) ? delBasePath(as) : as;
    this._inFlightRoute = as; // If the url change is only related to a hash change
    // We should not proceed. We should only change the state.
    // WARNING: `_h` is an internal option for handing Next.js client-side
    // hydration. Your app should _never_ use this property. It may change at
    // any time without notice.

    if (!options._h && this.onlyAHashChange(cleanedAs)) {
      this.asPath = cleanedAs;
      Router.events.emit('hashChangeStart', as); // TODO: do we need the resolved href when only a hash change?

      this.changeState(method, url, as, options);
      this.scrollToHash(cleanedAs);
      this.notify(this.components[this.route]);
      Router.events.emit('hashChangeComplete', as);
      return true;
    } // The build manifest needs to be loaded before auto-static dynamic pages
    // get their query parameters to allow ensuring they can be parsed properly
    // when rewritten to


    const pages = await this.pageLoader.getPageList();
    const {
      __rewrites: rewrites
    } = await this.pageLoader.promisedBuildManifest;
    let parsed = (0, _parseRelativeUrl.parseRelativeUrl)(url);
    let {
      pathname,
      query
    } = parsed;
    parsed = this._resolveHref(parsed, pages);

    if (parsed.pathname !== pathname) {
      pathname = parsed.pathname;
      url = (0, _utils.formatWithValidation)(parsed);
    } // url and as should always be prefixed with basePath by this
    // point by either next/link or router.push/replace so strip the
    // basePath from the pathname to match the pages dir 1-to-1


    pathname = pathname ? (0, _normalizeTrailingSlash.removePathTrailingSlash)(delBasePath(pathname)) : pathname; // If asked to change the current URL we should reload the current page
    // (not location.reload() but reload getInitialProps and other Next.js stuffs)
    // We also need to set the method = replaceState always
    // as this should not go into the history (That's how browsers work)
    // We should compare the new asPath to the current asPath, not the url

    if (!this.urlIsNew(cleanedAs)) {
      method = 'replaceState';
    }

    let route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname);
    const {
      shallow = false
    } = options; // we need to resolve the as value using rewrites for dynamic SSG
    // pages to allow building the data URL correctly

    let resolvedAs = as;

    if (false) {}

    resolvedAs = delBasePath(resolvedAs);

    if ((0, _isDynamic.isDynamicRoute)(route)) {
      const parsedAs = (0, _parseRelativeUrl.parseRelativeUrl)(resolvedAs);
      const asPathname = parsedAs.pathname;
      const routeRegex = (0, _routeRegex.getRouteRegex)(route);
      const routeMatch = (0, _routeMatcher.getRouteMatcher)(routeRegex)(asPathname);
      const shouldInterpolate = route === asPathname;
      const interpolatedAs = shouldInterpolate ? interpolateAs(route, asPathname, query) : {};

      if (!routeMatch || shouldInterpolate && !interpolatedAs.result) {
        const missingParams = Object.keys(routeRegex.groups).filter(param => !query[param]);

        if (missingParams.length > 0) {
          if (false) {}

          throw new Error((shouldInterpolate ? `The provided \`href\` (${url}) value is missing query values (${missingParams.join(', ')}) to be interpolated properly. ` : `The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). `) + `Read more: https://err.sh/vercel/next.js/${shouldInterpolate ? 'href-interpolation-failed' : 'incompatible-href-as'}`);
        }
      } else if (shouldInterpolate) {
        as = (0, _utils.formatWithValidation)(Object.assign({}, parsedAs, {
          pathname: interpolatedAs.result,
          query: omitParmsFromQuery(query, interpolatedAs.params)
        }));
      } else {
        // Merge params into `query`, overwriting any specified in search
        Object.assign(query, routeMatch);
      }
    }

    Router.events.emit('routeChangeStart', as);

    try {
      const routeInfo = await this.getRouteInfo(route, pathname, query, as, shallow);
      let {
        error,
        props,
        __N_SSG,
        __N_SSP
      } = routeInfo; // handle redirect on client-transition

      if ((__N_SSG || __N_SSP) && props && props.pageProps && props.pageProps.__N_REDIRECT) {
        const destination = props.pageProps.__N_REDIRECT; // check if destination is internal (resolves to a page) and attempt
        // client-navigation if it is falling back to hard navigation if
        // it's not

        if (destination.startsWith('/')) {
          const parsedHref = (0, _parseRelativeUrl.parseRelativeUrl)(destination);

          this._resolveHref(parsedHref, pages);

          if (pages.includes(parsedHref.pathname)) {
            return this.change('replaceState', destination, destination, options);
          }
        }

        window.location.href = destination;
        return new Promise(() => {});
      }

      Router.events.emit('beforeHistoryChange', as);
      this.changeState(method, url, as, options);

      if (false) {}

      await this.set(route, pathname, query, cleanedAs, routeInfo).catch(e => {
        if (e.cancelled) error = error || e;else throw e;
      });

      if (error) {
        Router.events.emit('routeChangeError', error, cleanedAs);
        throw error;
      }

      if (false) {}

      Router.events.emit('routeChangeComplete', as);
      return true;
    } catch (err) {
      if (err.cancelled) {
        return false;
      }

      throw err;
    }
  }

  changeState(method, url, as, options = {}) {
    if (false) {}

    if (method !== 'pushState' || (0, _utils.getURL)() !== as) {
      this._shallow = options.shallow;
      window.history[method]({
        url,
        as,
        options,
        __N: true
      }, // Most browsers currently ignores this parameter, although they may use it in the future.
      // Passing the empty string here should be safe against future changes to the method.
      // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
      '', as);
    }
  }

  async handleRouteInfoError(err, pathname, query, as, loadErrorFail) {
    if (err.cancelled) {
      // bubble up cancellation errors
      throw err;
    }

    if (PAGE_LOAD_ERROR in err || loadErrorFail) {
      Router.events.emit('routeChangeError', err, as); // If we can't load the page it could be one of following reasons
      //  1. Page doesn't exists
      //  2. Page does exist in a different zone
      //  3. Internal error while loading the page
      // So, doing a hard reload is the proper way to deal with this.

      window.location.href = as; // Changing the URL doesn't block executing the current code path.
      // So let's throw a cancellation error stop the routing logic.

      throw buildCancellationError();
    }

    try {
      const {
        page: Component,
        styleSheets
      } = await this.fetchComponent('/_error');
      const routeInfo = {
        Component,
        styleSheets,
        err,
        error: err
      };

      try {
        routeInfo.props = await this.getInitialProps(Component, {
          err,
          pathname,
          query
        });
      } catch (gipErr) {
        console.error('Error in error page `getInitialProps`: ', gipErr);
        routeInfo.props = {};
      }

      return routeInfo;
    } catch (routeInfoErr) {
      return this.handleRouteInfoError(routeInfoErr, pathname, query, as, true);
    }
  }

  async getRouteInfo(route, pathname, query, as, shallow = false) {
    try {
      const cachedRouteInfo = this.components[route];

      if (shallow && cachedRouteInfo && this.route === route) {
        return cachedRouteInfo;
      }

      const routeInfo = cachedRouteInfo ? cachedRouteInfo : await this.fetchComponent(route).then(res => ({
        Component: res.page,
        styleSheets: res.styleSheets,
        __N_SSG: res.mod.__N_SSG,
        __N_SSP: res.mod.__N_SSP
      }));
      const {
        Component,
        __N_SSG,
        __N_SSP
      } = routeInfo;

      if (false) {}

      let dataHref;

      if (__N_SSG || __N_SSP) {
        dataHref = this.pageLoader.getDataHref((0, _utils.formatWithValidation)({
          pathname,
          query
        }), delBasePath(as), __N_SSG);
      }

      const props = await this._getData(() => __N_SSG ? this._getStaticData(dataHref) : __N_SSP ? this._getServerData(dataHref) : this.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as
      }));
      routeInfo.props = props;
      this.components[route] = routeInfo;
      return routeInfo;
    } catch (err) {
      return this.handleRouteInfoError(err, pathname, query, as);
    }
  }

  set(route, pathname, query, as, data) {
    this.isFallback = false;
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    return this.notify(data);
  }
  /**
  * Callback to execute before replacing router state
  * @param cb callback to be executed
  */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value

    if (hash === '') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }

  _resolveHref(parsedHref, pages, applyBasePath = true) {
    const {
      pathname
    } = parsedHref;
    const cleanPathname = (0, _normalizeTrailingSlash.removePathTrailingSlash)((0, _denormalizePagePath.denormalizePagePath)(applyBasePath ? delBasePath(pathname) : pathname));

    if (cleanPathname === '/404' || cleanPathname === '/_error') {
      return parsedHref;
    } // handle resolving href for dynamic routes


    if (!pages.includes(cleanPathname)) {
      // eslint-disable-next-line array-callback-return
      pages.some(page => {
        if ((0, _isDynamic.isDynamicRoute)(page) && (0, _routeRegex.getRouteRegex)(page).re.test(cleanPathname)) {
          parsedHref.pathname = applyBasePath ? addBasePath(page) : page;
          return true;
        }
      });
    }

    return parsedHref;
  }
  /**
  * Prefetch page code, you may wait for the data during page rendering.
  * This feature only works in production!
  * @param url the href of prefetched page
  * @param asPath the as path of the prefetched page
  */


  async prefetch(url, asPath = url, options = {}) {
    let parsed = (0, _parseRelativeUrl.parseRelativeUrl)(url);
    let {
      pathname
    } = parsed;
    const pages = await this.pageLoader.getPageList();
    parsed = this._resolveHref(parsed, pages);

    if (parsed.pathname !== pathname) {
      pathname = parsed.pathname;
      url = (0, _utils.formatWithValidation)(parsed);
    } // Prefetch is not supported in development mode because it would trigger on-demand-entries


    if (false) {}

    const route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname);
    await Promise.all([this.pageLoader.prefetchData(url, asPath), this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](route)]);
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    const componentResult = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return componentResult;
  }

  _getData(fn) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }

      if (cancelled) {
        const err = new Error('Loading initial props cancelled');
        err.cancelled = true;
        throw err;
      }

      return data;
    });
  }

  _getStaticData(dataHref) {
    const {
      href: cacheKey
    } = new URL(dataHref, window.location.href);

    if ( true && this.sdc[cacheKey]) {
      return Promise.resolve(this.sdc[cacheKey]);
    }

    return fetchNextData(dataHref, this.isSsr).then(data => {
      this.sdc[cacheKey] = data;
      return data;
    });
  }

  _getServerData(dataHref) {
    return fetchNextData(dataHref, this.isSsr);
  }

  getInitialProps(Component, ctx) {
    const {
      Component: App
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App);

    ctx.AppTree = AppTree;
    return (0, _utils.loadGetInitialProps)(App, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as) {
    if (this.clc) {
      Router.events.emit('routeChangeError', buildCancellationError(), as);
      this.clc();
      this.clc = null;
    }
  }

  notify(data) {
    return this.sub(data, this.components['/_app'].Component);
  }

}

exports.default = Router;
Router.events = (0, _mitt.default)();

/***/ }),

/***/ "faye":
/***/ (function(module, exports) {

module.exports = require("react-dom");

/***/ }),

/***/ "fcRV":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = escapePathDelimiters; // escape delimiters used by path-to-regexp

function escapePathDelimiters(segment) {
  return segment.replace(/[/#?]/g, char => encodeURIComponent(char));
}

/***/ }),

/***/ "g/15":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.execOnce = execOnce;
exports.getLocationOrigin = getLocationOrigin;
exports.getURL = getURL;
exports.getDisplayName = getDisplayName;
exports.isResSent = isResSent;
exports.loadGetInitialProps = loadGetInitialProps;
exports.formatWithValidation = formatWithValidation;
exports.ST = exports.SP = exports.urlObjectKeys = void 0;

var _formatUrl = __webpack_require__("6D7l");
/**
* Utils
*/


function execOnce(fn) {
  let used = false;
  let result;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn(...args);
    }

    return result;
  };
}

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

function isResSent(res) {
  return res.finished || res.headersSent;
}

async function loadGetInitialProps(App, ctx) {
  if (false) { var _App$prototype; } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (false) {}

  return props;
}

const urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];
exports.urlObjectKeys = urlObjectKeys;

function formatWithValidation(url) {
  if (false) {}

  return (0, _formatUrl.formatUrl)(url);
}

const SP = typeof performance !== 'undefined';
exports.SP = SP;
const ST = SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';
exports.ST = ST;

/***/ }),

/***/ "gguc":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteMatcher = getRouteMatcher;

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const decode = param => {
      try {
        return decodeURIComponent(param);
      } catch (_) {
        const err = new Error('failed to decode param');
        err.code = 'DECODE_FAILED';
        throw err;
      }
    };

    const params = {};
    Object.keys(groups).forEach(slugName => {
      const g = groups[slugName];
      const m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(entry => decode(entry)) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}

/***/ }),

/***/ "h74D":
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "hS4m":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.parseRelativeUrl = parseRelativeUrl;

var _utils = __webpack_require__("g/15");

var _querystring = __webpack_require__("3WeD");

const DUMMY_BASE = new URL(true ? 'http://n' : undefined);
/**
* Parses path-relative urls (e.g. `/hello/world?foo=bar`). If url isn't path-relative
* (e.g. `./hello`) then at least base must be.
* Absolute urls are rejected with one exception, in the browser, absolute urls that are on
* the current origin will be parsed as relative
*/

function parseRelativeUrl(url, base) {
  const resolvedBase = base ? new URL(base, DUMMY_BASE) : DUMMY_BASE;
  const {
    pathname,
    searchParams,
    search,
    hash,
    href,
    origin,
    protocol
  } = new URL(url, resolvedBase);

  if (origin !== DUMMY_BASE.origin || protocol !== 'http:' && protocol !== 'https:') {
    throw new Error('invariant: invalid relative URL');
  }

  return {
    pathname,
    query: (0, _querystring.searchParamsToUrlQuery)(searchParams),
    search,
    hash,
    href: href.slice(DUMMY_BASE.origin.length)
  };
}

/***/ }),

/***/ "nOHt":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("7KCV");

var _interopRequireDefault = __webpack_require__("AroE");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _router2 = _interopRequireWildcard(__webpack_require__("elyg"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__("Osoz");

var _withRouter = _interopRequireDefault(__webpack_require__("0Bsm"));

exports.withRouter = _withRouter.default;
/* global window */

const singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

const urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback', 'basePath'];
const routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
const coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get() {
      const router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = (...args) => {
    const router = getRouter();
    return router[field](...args);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, (...args) => {
      const eventField = `on${event.charAt(0).toUpperCase()}${event.substring(1)}`;
      const _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...args);
        } catch (err) {
          console.error(`Error when running the Router event: ${eventField}`);
          console.error(`${err.message}\n${err.stack}`);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    const message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


const createRouter = (...args) => {
  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  const _router = router;
  const instance = {};

  for (const property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = Object.assign({}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = (...args) => {
      return _router[field](...args);
    };
  });
  return instance;
}

/***/ }),

/***/ "tpJJ":
/***/ (function(module, exports) {

module.exports = require("react-modal-video");

/***/ }),

/***/ "u+OR":
/***/ (function(module, exports) {



/***/ }),

/***/ "vmXh":
/***/ (function(module, exports) {

module.exports = require("js-cookie");

/***/ }),

/***/ "w4I7":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GET_NEWS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return GET_NEWS_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return GET_NEWS_ERROR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return RESET_STATE; });
const GET_NEWS = "NEWS/GET_NEWS";
const GET_NEWS_SUCCESS = "NEWS/GET_NEWS_SUCCESS";
const GET_NEWS_ERROR = "NEWS/GET_NEWS_ERROR";
const RESET_STATE = "NEWS/RESET_STATE";

/***/ }),

/***/ "wkBG":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
exports.__esModule=true;exports.normalizePathSep=normalizePathSep;exports.denormalizePagePath=denormalizePagePath;function normalizePathSep(path){return path.replace(/\\/g,'/');}function denormalizePagePath(page){page=normalizePathSep(page);if(page.startsWith('/index/')){page=page.slice(6);}else if(page==='/index'){page='/';}return page;}
//# sourceMappingURL=denormalize-page-path.js.map

/***/ }),

/***/ "xnum":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ })

/******/ });