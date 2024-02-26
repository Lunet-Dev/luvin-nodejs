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
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ({

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

/***/ "0bYB":
/***/ (function(module, exports) {

module.exports = require("isomorphic-unfetch");

/***/ }),

/***/ "16OJ":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return SEARCH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return SEARCH_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return SEARCH_ERROR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RESET_STATE; });
const SEARCH = "SEARCH/SEARCH";
const SEARCH_SUCCESS = "SEARCH/SEARCH_SUCCESS";
const SEARCH_ERROR = "SEARCH/SEARCH_ERROR";
const RESET_STATE = "SEARCH/RESET_STATE";

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

/***/ "1fKG":
/***/ (function(module, exports) {

module.exports = require("redux-saga");

/***/ }),

/***/ "1y30":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GET_PAGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return GET_PAGE_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return GET_PAGE_ERROR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return RESET_STATE; });
const GET_PAGE = "PAGE/GET_PAGE";
const GET_PAGE_SUCCESS = "PAGE/GET_PAGE_SUCCESS";
const GET_PAGE_ERROR = "PAGE/GET_PAGE_ERROR";
const RESET_STATE = "PAGE/RESET_STATE";

/***/ }),

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("IlR1");


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

/***/ "3aCL":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GET_FEEDBACK; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return GET_FEEDBACK_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return GET_FEEDBACK_ERROR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return SEND_FEEDBACK; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return SEND_FEEDBACK_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return SEND_FEEDBACK_ERROR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return RESET_STATE; });
const GET_FEEDBACK = "FEEDBACK/GET_FEEDBACK";
const GET_FEEDBACK_SUCCESS = "FEEDBACK/GET_FEEDBACK_SUCCESS";
const GET_FEEDBACK_ERROR = "FEEDBACK/GET_FEEDBACK_ERROR";
const SEND_FEEDBACK = "FEEDBACK/SEND_FEEDBACK";
const SEND_FEEDBACK_SUCCESS = "FEEDBACK/SEND_FEEDBACK_SUCCESS";
const SEND_FEEDBACK_ERROR = "FEEDBACK/SEND_FEEDBACK_ERROR";
const RESET_STATE = "FEEDBACK/RESET_STATE";

/***/ }),

/***/ "3i/4":
/***/ (function(module, exports) {

module.exports = require("next-cookies");

/***/ }),

/***/ "4DCN":
/***/ (function(module, exports) {

module.exports = require("redux-logger");

/***/ }),

/***/ "4Q3z":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "5ChB":
/***/ (function(module, exports) {

module.exports = require("numeral");

/***/ }),

/***/ "5vqK":
/***/ (function(module, exports) {

module.exports = require("lodash/isString");

/***/ }),

/***/ "61JS":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GET_CONFIGS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return GET_CONFIGS_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return GET_CONFIGS_ERROR; });
const GET_CONFIGS = "ABOUTUS/GET_CONFIGS";
const GET_CONFIGS_SUCCESS = "ABOUTUS/GET_CONFIGS_SUCCESS";
const GET_CONFIGS_ERROR = "ABOUTUS/GET_CONFIGS_ERROR";

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

/***/ "8Bbg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("B5Ud")


/***/ }),

/***/ "8FJ3":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return GET_USER_INFO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return GET_USER_INFO_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CHANGE_LOGIN_INFO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return CHANGE_REGISTER_INFO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return LOGIN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return LOGIN_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return LOGIN_ERROR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return REGISTER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return REGISTER_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return REGISTER_ERROR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return UPDATE_USER_INFO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "q", function() { return UPDATE_USER_INFO_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return UPDATE_USER_INFO_ERROR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return UPDATE_PASSWORD; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return UPDATE_PASSWORD_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return UPDATE_PASSWORD_ERROR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return LOGOUT; });
const GET_USER_INFO = "AUTH/GET_USER_INFO";
const GET_USER_INFO_SUCCESS = "AUTH/GET_USER_INFO_SUCCESS";
const CHANGE_LOGIN_INFO = "AUTH/CHANGE_LOGIN_INFO";
const CHANGE_REGISTER_INFO = "AUTH/CHANGE_REGISTER_INFO";
const LOGIN = "AUTH/LOGIN";
const LOGIN_SUCCESS = "AUTH/LOGIN_SUCCESS";
const LOGIN_ERROR = "AUTH/LOGIN_ERROR";
const REGISTER = "AUTH/REGISTER";
const REGISTER_SUCCESS = "AUTH/REGISTER_SUCCESS";
const REGISTER_ERROR = "AUTH/REGISTER_ERROR";
const UPDATE_USER_INFO = "AUTH/UPDATE_USER_INFO";
const UPDATE_USER_INFO_SUCCESS = "AUTH/UPDATE_USER_INFO_SUCCESS";
const UPDATE_USER_INFO_ERROR = "AUTH/UPDATE_USER_INFO_ERROR";
const UPDATE_PASSWORD = "AUTH/UPDATE_PASSWORD";
const UPDATE_PASSWORD_SUCCESS = "AUTH/UPDATE_PASSWORD_SUCCESS";
const UPDATE_PASSWORD_ERROR = "AUTH/UPDATE_PASSWORD_ERROR";
const LOGOUT = "AUTH/LOGOUT";

/***/ }),

/***/ "8Fes":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getProductsSale; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return getProductsSaleSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getProductsSaleError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return resetState; });
/* harmony import */ var _constants_sales__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("lDjm");

const getProductsSale = (limit = 12, page = 1) => ({
  type: _constants_sales__WEBPACK_IMPORTED_MODULE_0__[/* GET_PRODUCTS_SALE */ "a"],
  limit,
  page
});
const getProductsSaleSuccess = (total, products) => ({
  type: _constants_sales__WEBPACK_IMPORTED_MODULE_0__[/* GET_PRODUCTS_SALE_SUCCESS */ "c"],
  total,
  products
});
const getProductsSaleError = errorMessage => ({
  type: _constants_sales__WEBPACK_IMPORTED_MODULE_0__[/* GET_PRODUCTS_SALE_ERROR */ "b"],
  errorMessage
});
const resetState = () => ({
  type: _constants_sales__WEBPACK_IMPORTED_MODULE_0__[/* RESET_STATE */ "d"]
});

/***/ }),

/***/ "8tvR":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return search; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return searchSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return searchError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return resetState; });
/* harmony import */ var _constants_search__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("16OJ");

const search = (name, limit = 12, page = 1) => ({
  type: _constants_search__WEBPACK_IMPORTED_MODULE_0__[/* SEARCH */ "b"],
  name,
  limit,
  page
});
const searchSuccess = (total, products) => ({
  type: _constants_search__WEBPACK_IMPORTED_MODULE_0__[/* SEARCH_SUCCESS */ "d"],
  total,
  products
});
const searchError = errorMessage => ({
  type: _constants_search__WEBPACK_IMPORTED_MODULE_0__[/* SEARCH_ERROR */ "c"],
  errorMessage
});
const resetState = () => ({
  type: _constants_search__WEBPACK_IMPORTED_MODULE_0__[/* RESET_STATE */ "a"]
});

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

/***/ "B5Ud":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("AroE");

exports.__esModule = true;
exports.Container = Container;
exports.createUrl = createUrl;
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _utils = __webpack_require__("kYf9");

exports.AppInitialProps = _utils.AppInitialProps;
exports.NextWebVitalsMetric = _utils.NextWebVitalsMetric;
/**
* `App` component is used for initialize of pages. It allows for overwriting and full control of the `page` initialization.
* This allows for keeping state between navigation, custom error handling, injecting additional data.
*/

async function appGetInitialProps({
  Component,
  ctx
}) {
  const pageProps = await (0, _utils.loadGetInitialProps)(Component, ctx);
  return {
    pageProps
  };
}

class App extends _react.default.Component {
  // Kept here for backwards compatibility.
  // When someone ended App they could call `super.componentDidCatch`.
  // @deprecated This method is no longer needed. Errors are caught at the top level
  componentDidCatch(error, _errorInfo) {
    throw error;
  }

  render() {
    const {
      router,
      Component,
      pageProps,
      __N_SSG,
      __N_SSP
    } = this.props;
    return /*#__PURE__*/_react.default.createElement(Component, Object.assign({}, pageProps, // we don't add the legacy URL prop if it's using non-legacy
    // methods like getStaticProps and getServerSideProps
    !(__N_SSG || __N_SSP) ? {
      url: createUrl(router)
    } : {}));
  }

}

exports.default = App;
App.origGetInitialProps = appGetInitialProps;
App.getInitialProps = appGetInitialProps;
let warnContainer;
let warnUrl;

if (false) {} // @deprecated noop for now until removal


function Container(p) {
  if (false) {}
  return p.children;
}

function createUrl(router) {
  // This is to make sure we don't references the router object at call time
  const {
    pathname,
    asPath,
    query
  } = router;
  return {
    get query() {
      if (false) {}
      return query;
    },

    get pathname() {
      if (false) {}
      return pathname;
    },

    get asPath() {
      if (false) {}
      return asPath;
    },

    back: () => {
      if (false) {}
      router.back();
    },
    push: (url, as) => {
      if (false) {}
      return router.push(url, as);
    },
    pushTo: (href, as) => {
      if (false) {}
      const pushRoute = as ? href : '';
      const pushUrl = as || href;
      return router.push(pushRoute, pushUrl);
    },
    replace: (url, as) => {
      if (false) {}
      return router.replace(url, as);
    },
    replaceTo: (href, as) => {
      if (false) {}
      const replaceRoute = as ? href : '';
      const replaceUrl = as || href;
      return router.replace(replaceRoute, replaceUrl);
    }
  };
}

/***/ }),

/***/ "BiE5":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return createOrder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return createOrderSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return createOrderError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return getOrderHistory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return getOrderHistorySuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return getOrderHistoryError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return getOrderDetail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return getOrderDetailSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return getOrderDetailError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return redeemVoucher; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return redeemVoucherSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return redeemVoucherError; });
/* harmony import */ var _constants_order__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("HYwD");

const createOrder = orderInfo => ({
  type: _constants_order__WEBPACK_IMPORTED_MODULE_0__[/* CREATE_ORDER */ "a"],
  orderInfo
});
const createOrderSuccess = order => ({
  type: _constants_order__WEBPACK_IMPORTED_MODULE_0__[/* CREATE_ORDER_SUCCESS */ "c"],
  order
});
const createOrderError = errorMessage => ({
  type: _constants_order__WEBPACK_IMPORTED_MODULE_0__[/* CREATE_ORDER_ERROR */ "b"],
  errorMessage
});
const getOrderHistory = () => ({
  type: _constants_order__WEBPACK_IMPORTED_MODULE_0__[/* GET_ORDER_HISTORY */ "g"]
});
const getOrderHistorySuccess = orders => ({
  type: _constants_order__WEBPACK_IMPORTED_MODULE_0__[/* GET_ORDER_HISTORY_SUCCESS */ "i"],
  orders
});
const getOrderHistoryError = errorMessage => ({
  type: _constants_order__WEBPACK_IMPORTED_MODULE_0__[/* GET_ORDER_HISTORY_ERROR */ "h"],
  errorMessage
});
const getOrderDetail = orderId => ({
  type: _constants_order__WEBPACK_IMPORTED_MODULE_0__[/* GET_ORDER_DETAIL */ "d"],
  orderId
});
const getOrderDetailSuccess = order => ({
  type: _constants_order__WEBPACK_IMPORTED_MODULE_0__[/* GET_ORDER_DETAIL_SUCCESS */ "f"],
  order
});
const getOrderDetailError = errorMessage => ({
  type: _constants_order__WEBPACK_IMPORTED_MODULE_0__[/* GET_ORDER_DETAIL_ERROR */ "e"],
  errorMessage
});
const redeemVoucher = code => ({
  type: _constants_order__WEBPACK_IMPORTED_MODULE_0__[/* REDEEM_VOUCHER */ "j"],
  code
});
const redeemVoucherSuccess = voucherData => ({
  type: _constants_order__WEBPACK_IMPORTED_MODULE_0__[/* REDEEM_VOUCHER_SUCCESS */ "l"],
  voucherData
});
const redeemVoucherError = errorMessage => ({
  type: _constants_order__WEBPACK_IMPORTED_MODULE_0__[/* REDEEM_VOUCHER_ERROR */ "k"],
  errorMessage
});

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

/***/ "CqCk":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GET_EVENT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return GET_EVENT_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return GET_EVENT_ERROR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return JOIN_EVENT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return JOIN_EVENT_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return JOIN_EVENT_ERROR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return RESET_STATE; });
const GET_EVENT = "EVENT/GET_EVENT";
const GET_EVENT_SUCCESS = "EVENT/GET_EVENT_SUCCESS";
const GET_EVENT_ERROR = "EVENT/GET_EVENT_ERROR";
const JOIN_EVENT = "EVENT/JOIN_EVENT";
const JOIN_EVENT_SUCCESS = "EVENT/JOIN_EVENT_SUCCESS";
const JOIN_EVENT_ERROR = "EVENT/JOIN_EVENT_ERROR";
const RESET_STATE = "EVENT/RESET_STATE";

/***/ }),

/***/ "E1NF":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getProducts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return getProductsSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getProductsError; });
/* unused harmony export changeFilter */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return resetState; });
/* harmony import */ var _constants_products__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("MjD1");

const getProducts = (categorySlug, limit = 12, page = 1, sort = "", productType = "", origin = "") => ({
  type: _constants_products__WEBPACK_IMPORTED_MODULE_0__[/* GET_PRODUCTS */ "b"],
  categorySlug,
  limit,
  page,
  sort,
  productType,
  origin
});
const getProductsSuccess = (total, products) => ({
  type: _constants_products__WEBPACK_IMPORTED_MODULE_0__[/* GET_PRODUCTS_SUCCESS */ "d"],
  total,
  products
});
const getProductsError = errorMessage => ({
  type: _constants_products__WEBPACK_IMPORTED_MODULE_0__[/* GET_PRODUCTS_ERROR */ "c"],
  errorMessage
});
const changeFilter = (prop, value) => ({
  type: _constants_products__WEBPACK_IMPORTED_MODULE_0__[/* CHANGE_FILTER */ "a"],
  prop,
  value
});
const resetState = () => ({
  type: _constants_products__WEBPACK_IMPORTED_MODULE_0__[/* RESET_STATE */ "e"]
});

/***/ }),

/***/ "HP2+":
/***/ (function(module, exports) {



/***/ }),

/***/ "HYwD":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CREATE_ORDER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return CREATE_ORDER_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return CREATE_ORDER_ERROR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return GET_ORDER_HISTORY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return GET_ORDER_HISTORY_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return GET_ORDER_HISTORY_ERROR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return GET_ORDER_DETAIL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return GET_ORDER_DETAIL_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return GET_ORDER_DETAIL_ERROR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return REDEEM_VOUCHER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return REDEEM_VOUCHER_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return REDEEM_VOUCHER_ERROR; });
const CREATE_ORDER = "ORDER/CREATE_ORDER";
const CREATE_ORDER_SUCCESS = "ORDER/CREATE_ORDER_SUCCESS";
const CREATE_ORDER_ERROR = "ORDER/CREATE_ORDER_ERROR";
const GET_ORDER_HISTORY = "ORDER/GET_ORDER_HISTORY";
const GET_ORDER_HISTORY_SUCCESS = "ORDER/GET_ORDER_HISTORY_SUCCESS";
const GET_ORDER_HISTORY_ERROR = "ORDER/GET_ORDER_HISTORY_ERROR";
const GET_ORDER_DETAIL = "ORDER/GET_ORDER_DETAIL";
const GET_ORDER_DETAIL_SUCCESS = "ORDER/GET_ORDER_DETAIL_SUCCESS";
const GET_ORDER_DETAIL_ERROR = "ORDER/GET_ORDER_DETAIL_ERROR";
const REDEEM_VOUCHER = "ORDER/REDEEM_VOUCHER";
const REDEEM_VOUCHER_SUCCESS = "ORDER/REDEEM_VOUCHER_SUCCESS";
const REDEEM_VOUCHER_ERROR = "ORDER/REDEEM_VOUCHER_ERROR";

/***/ }),

/***/ "Hr6J":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getConfigs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return getConfigsSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getConfigsError; });
/* harmony import */ var _constants_tasty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("Tydi");

const getConfigs = () => ({
  type: _constants_tasty__WEBPACK_IMPORTED_MODULE_0__[/* GET_CONFIGS */ "a"]
});
const getConfigsSuccess = configs => ({
  type: _constants_tasty__WEBPACK_IMPORTED_MODULE_0__[/* GET_CONFIGS_SUCCESS */ "c"],
  configs
});
const getConfigsError = errorMessage => ({
  type: _constants_tasty__WEBPACK_IMPORTED_MODULE_0__[/* GET_CONFIGS_ERROR */ "b"],
  errorMessage
});

/***/ }),

/***/ "IlR1":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: ./node_modules/next/app.js
var app = __webpack_require__("8Bbg");
var app_default = /*#__PURE__*/__webpack_require__.n(app);

// EXTERNAL MODULE: external "recompose"
var external_recompose_ = __webpack_require__("NnCY");

// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__("h74D");

// EXTERNAL MODULE: external "next-redux-wrapper"
var external_next_redux_wrapper_ = __webpack_require__("JMOJ");
var external_next_redux_wrapper_default = /*#__PURE__*/__webpack_require__.n(external_next_redux_wrapper_);

// EXTERNAL MODULE: external "next-redux-saga"
var external_next_redux_saga_ = __webpack_require__("pEZS");
var external_next_redux_saga_default = /*#__PURE__*/__webpack_require__.n(external_next_redux_saga_);

// EXTERNAL MODULE: external "react-scroll-to-top"
var external_react_scroll_to_top_ = __webpack_require__("JUv4");
var external_react_scroll_to_top_default = /*#__PURE__*/__webpack_require__.n(external_react_scroll_to_top_);

// EXTERNAL MODULE: ./node_modules/react-modal-video/css/modal-video.min.css
var modal_video_min = __webpack_require__("HP2+");

// EXTERNAL MODULE: external "react-toastify"
var external_react_toastify_ = __webpack_require__("oAEb");

// EXTERNAL MODULE: ./node_modules/react-toastify/dist/ReactToastify.css
var ReactToastify = __webpack_require__("jDDT");

// EXTERNAL MODULE: external "redux"
var external_redux_ = __webpack_require__("rKB8");

// EXTERNAL MODULE: external "redux-saga"
var external_redux_saga_ = __webpack_require__("1fKG");
var external_redux_saga_default = /*#__PURE__*/__webpack_require__.n(external_redux_saga_);

// EXTERNAL MODULE: external "redux-logger"
var external_redux_logger_ = __webpack_require__("4DCN");

// EXTERNAL MODULE: ./src/constants/auth.js
var auth = __webpack_require__("8FJ3");

// CONCATENATED MODULE: ./src/reducers/auth.js
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const auth_initialState = {
  userInfo: {},
  login: {
    phone: "",
    password: "",
    loading: false,
    fetched: false,
    errorMessage: undefined
  },
  register: {
    phone: "",
    password: "",
    loading: false,
    fetched: false,
    errorMessage: undefined
  },
  updateUserInfo: {
    loading: false,
    fetched: false,
    errorMessage: undefined,
    success: false
  },
  updatePassword: {
    loading: false,
    fetched: false,
    success: false,
    errorMessage: undefined
  }
};

const userReducer = (state = auth_initialState, action) => {
  switch (action.type) {
    case auth["d" /* GET_USER_INFO_SUCCESS */]:
      return _objectSpread(_objectSpread({}, state), {}, {
        userInfo: action.userInfo
      });

    case auth["a" /* CHANGE_LOGIN_INFO */]:
      return _objectSpread(_objectSpread({}, state), {}, {
        login: _objectSpread(_objectSpread({}, state.login), {}, {
          [action.prop]: action.value
        })
      });

    case auth["b" /* CHANGE_REGISTER_INFO */]:
      return _objectSpread(_objectSpread({}, state), {}, {
        register: _objectSpread(_objectSpread({}, state.login), {}, {
          [action.prop]: action.value
        })
      });

    case auth["e" /* LOGIN */]:
      return _objectSpread(_objectSpread({}, state), {}, {
        login: _objectSpread(_objectSpread({}, state.login), {}, {
          loading: true,
          fetched: false,
          errorMessage: undefined
        })
      });

    case auth["g" /* LOGIN_SUCCESS */]:
      return _objectSpread(_objectSpread({}, state), {}, {
        login: _objectSpread(_objectSpread({}, state.login), {}, {
          loading: false,
          fetched: true,
          errorMessage: undefined
        }),
        userInfo: action.userInfo
      });

    case auth["f" /* LOGIN_ERROR */]:
      return _objectSpread(_objectSpread({}, state), {}, {
        login: _objectSpread(_objectSpread({}, state.login), {}, {
          loading: false,
          fetched: true,
          errorMessage: action.errorMessage
        })
      });

    case auth["i" /* REGISTER */]:
      return _objectSpread(_objectSpread({}, state), {}, {
        register: _objectSpread(_objectSpread({}, state.register), {}, {
          loading: true,
          fetched: false,
          errorMessage: undefined
        })
      });

    case auth["k" /* REGISTER_SUCCESS */]:
      return _objectSpread(_objectSpread({}, state), {}, {
        register: _objectSpread(_objectSpread({}, state.register), {}, {
          loading: false,
          fetched: true,
          errorMessage: undefined
        }),
        userInfo: action.userInfo
      });

    case auth["j" /* REGISTER_ERROR */]:
      return _objectSpread(_objectSpread({}, state), {}, {
        register: _objectSpread(_objectSpread({}, state.register), {}, {
          loading: false,
          fetched: true,
          errorMessage: action.errorMessage
        })
      });

    case auth["h" /* LOGOUT */]:
      return _objectSpread(_objectSpread({}, state), {}, {
        userInfo: {}
      });

    case auth["o" /* UPDATE_USER_INFO */]:
      return _objectSpread(_objectSpread({}, state), {}, {
        updateUserInfo: _objectSpread(_objectSpread({}, state), {}, {
          loading: true,
          fetched: false,
          errorMessage: undefined,
          success: false
        })
      });

    case auth["q" /* UPDATE_USER_INFO_SUCCESS */]:
      return _objectSpread(_objectSpread({}, state), {}, {
        userInfo: _objectSpread(_objectSpread({}, state.userInfo), action.userInfo),
        updateUserInfo: _objectSpread(_objectSpread({}, state.updateUserInfo), {}, {
          loading: false,
          fetched: true,
          success: true
        })
      });

    case auth["p" /* UPDATE_USER_INFO_ERROR */]:
      return _objectSpread(_objectSpread({}, state), {}, {
        updateUserInfo: {
          loading: false,
          fetched: true,
          errorMessage: action.errorMessage
        }
      });

    case auth["l" /* UPDATE_PASSWORD */]:
      return _objectSpread(_objectSpread({}, state), {}, {
        updatePassword: _objectSpread(_objectSpread({}, state.updatePassword), {}, {
          loading: true,
          success: false,
          fetched: false,
          errorMessage: undefined
        })
      });

    case auth["n" /* UPDATE_PASSWORD_SUCCESS */]:
      return _objectSpread(_objectSpread({}, state), {}, {
        updatePassword: _objectSpread(_objectSpread({}, state.updatePassword), {}, {
          loading: false,
          fetched: true,
          success: true
        })
      });

    case auth["m" /* UPDATE_PASSWORD_ERROR */]:
      return _objectSpread(_objectSpread({}, state), {}, {
        updatePassword: _objectSpread(_objectSpread({}, state.updatePassword), {}, {
          loading: false,
          fetched: true,
          success: false,
          errorMessage: action.errorMessage
        })
      });

    default:
      return state;
  }
};

/* harmony default export */ var reducers_auth = (userReducer);
// CONCATENATED MODULE: ./src/constants/configs.js
const GET_CONFIGS = "CONFIGS/GET_CONFIGS";
const GET_CONFIGS_SUCCESS = "CONFIGS/GET_CONFIGS_SUCCESS";
const GET_CONFIGS_ERROR = "CONFIGS/GET_CONFIGS_ERROR";
// CONCATENATED MODULE: ./src/reducers/configs.js
function configs_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function configs_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { configs_ownKeys(Object(source), true).forEach(function (key) { configs_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { configs_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function configs_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const configs_initialState = {
  configs: {},
  loading: false,
  fetched: false,
  errorMessage: undefined
};

const configs_userReducer = (state = configs_initialState, action) => {
  switch (action.type) {
    case GET_CONFIGS:
      return configs_objectSpread(configs_objectSpread({}, state), {}, {
        loading: true,
        fetched: false,
        errorMessage: undefined
      });

    case GET_CONFIGS_SUCCESS:
      return configs_objectSpread(configs_objectSpread({}, state), {}, {
        loading: false,
        fetched: true,
        configs: action.configs
      });

    case GET_CONFIGS_ERROR:
      return configs_objectSpread(configs_objectSpread({}, state), {}, {
        loading: false,
        fetched: true,
        errorMessage: action.errorMessage
      });

    default:
      return state;
  }
};

/* harmony default export */ var reducers_configs = (configs_userReducer);
// CONCATENATED MODULE: ./src/constants/categories.js
const GET_CATEGORIES = "CATEGORIES/GET_CATEGORIES";
const GET_CATEGORIES_SUCCESS = "CATEGORIES/GET_CATEGORIES_SUCCESS";
const GET_CATEGORIES_ERROR = "CATEGORIES/GET_CATEGORIES_ERROR";
// CONCATENATED MODULE: ./src/reducers/categories.js
function categories_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function categories_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { categories_ownKeys(Object(source), true).forEach(function (key) { categories_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { categories_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function categories_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const categories_initialState = {
  categories: [],
  loading: false,
  fetched: false,
  errorMessage: undefined
};

const categories_userReducer = (state = categories_initialState, action) => {
  switch (action.type) {
    case GET_CATEGORIES:
      return categories_objectSpread(categories_objectSpread({}, state), {}, {
        loading: true,
        fetched: false,
        errorMessage: undefined
      });

    case GET_CATEGORIES_SUCCESS:
      return categories_objectSpread(categories_objectSpread({}, state), {}, {
        loading: false,
        fetched: true,
        categories: action.categories
      });

    case GET_CATEGORIES_ERROR:
      return categories_objectSpread(categories_objectSpread({}, state), {}, {
        loading: false,
        fetched: true,
        errorMessage: action.errorMessage
      });

    default:
      return state;
  }
};

/* harmony default export */ var reducers_categories = (categories_userReducer);
// EXTERNAL MODULE: ./src/constants/products.js
var products = __webpack_require__("MjD1");

// CONCATENATED MODULE: ./src/reducers/products.js
function products_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function products_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { products_ownKeys(Object(source), true).forEach(function (key) { products_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { products_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function products_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const products_initialState = {
  products: [],
  total: 0,
  page: 1,
  limit: 12,
  sort: "",
  type: "",
  origin: "",
  loading: false,
  fetched: false,
  errorMessage: undefined
};

const productsReducer = (state = products_initialState, action) => {
  switch (action.type) {
    case products["b" /* GET_PRODUCTS */]:
      return products_objectSpread(products_objectSpread({}, state), {}, {
        page: action.page,
        sort: action.sort,
        type: action.productType,
        origin: action.origin,
        loading: true,
        fetched: false,
        errorMessage: undefined
      });

    case products["d" /* GET_PRODUCTS_SUCCESS */]:
      return products_objectSpread(products_objectSpread({}, state), {}, {
        loading: false,
        fetched: true,
        products: action.products,
        total: action.total
      });

    case products["c" /* GET_PRODUCTS_ERROR */]:
      return products_objectSpread(products_objectSpread({}, state), {}, {
        page: state.page > 1 && state.page - 1,
        loading: false,
        fetched: true,
        errorMessage: action.errorMessage
      });

    case products["a" /* CHANGE_FILTER */]:
      return products_objectSpread(products_objectSpread({}, state), {}, {
        [action.prop]: action.value
      });

    case products["e" /* RESET_STATE */]:
      return products_initialState;

    default:
      return state;
  }
};

/* harmony default export */ var reducers_products = (productsReducer);
// EXTERNAL MODULE: ./src/constants/product.js
var product = __webpack_require__("c31i");

// CONCATENATED MODULE: ./src/reducers/product.js
function product_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function product_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { product_ownKeys(Object(source), true).forEach(function (key) { product_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { product_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function product_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const product_initialState = {
  product: {},
  loading: false,
  fetched: false,
  errorMessage: undefined
};

const productReducer = (state = product_initialState, action) => {
  switch (action.type) {
    case product["a" /* GET_PRODUCT */]:
      return product_objectSpread(product_objectSpread({}, state), {}, {
        loading: true,
        fetched: false,
        errorMessage: undefined
      });

    case product["c" /* GET_PRODUCT_SUCCESS */]:
      return product_objectSpread(product_objectSpread({}, state), {}, {
        loading: false,
        fetched: true,
        product: action.product
      });

    case product["b" /* GET_PRODUCT_ERROR */]:
      return product_objectSpread(product_objectSpread({}, state), {}, {
        loading: false,
        fetched: true,
        errorMessage: action.errorMessage
      });

    case product["d" /* RESET_STATE */]:
      return product_initialState;

    default:
      return state;
  }
};

/* harmony default export */ var reducers_product = (productReducer);
// EXTERNAL MODULE: ./src/constants/cart.js
var cart = __webpack_require__("BzKi");

// CONCATENATED MODULE: ./src/reducers/cart.js
function cart_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function cart_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { cart_ownKeys(Object(source), true).forEach(function (key) { cart_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { cart_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function cart_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const cart_initialState = {
  openCartMenu: false,
  products: []
};

const cart_userReducer = (state = cart_initialState, action) => {
  switch (action.type) {
    case cart["b" /* OPEN_CART_MENU */]:
      return cart_objectSpread(cart_objectSpread({}, state), {}, {
        openCartMenu: true
      });

    case cart["d" /* TOGGLE_CART_MENU */]:
      return cart_objectSpread(cart_objectSpread({}, state), {}, {
        openCartMenu: !state.openCartMenu
      });

    case cart["a" /* ADD_PRODUCT */]:
      return cart_objectSpread(cart_objectSpread({}, state), {}, {
        products: [...state.products, {
          amount: action.amount,
          product: action.product
        }]
      });

    case cart["c" /* REMOVE_PRODUCT */]:
      return cart_objectSpread(cart_objectSpread({}, state), {}, {
        products: state.products.filter((a, index) => index !== action.index)
      });

    default:
      return state;
  }
};

/* harmony default export */ var reducers_cart = (cart_userReducer);
// EXTERNAL MODULE: ./src/constants/order.js
var order = __webpack_require__("HYwD");

// CONCATENATED MODULE: ./src/reducers/order.js
function order_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function order_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { order_ownKeys(Object(source), true).forEach(function (key) { order_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { order_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function order_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const order_initialState = {
  loading: false,
  fetched: false,
  errorMessage: undefined,
  success: false,
  history: {
    orders: [],
    loading: false,
    fetched: false,
    errorMessage: undefined
  },
  detail: {
    order: {},
    loading: false,
    fetched: false,
    errorMessage: undefined
  },
  redeemVoucher: {
    voucherData: {},
    loading: false,
    fetched: false,
    errorMessage: undefined
  }
};

const order_userReducer = (state = order_initialState, action) => {
  switch (action.type) {
    case order["a" /* CREATE_ORDER */]:
      return order_objectSpread(order_objectSpread({}, state), {}, {
        loading: true,
        fetched: false,
        errorMessage: undefined,
        success: false
      });

    case order["c" /* CREATE_ORDER_SUCCESS */]:
      return order_objectSpread(order_objectSpread({}, state), {}, {
        loading: false,
        fetched: true,
        success: true
      });

    case order["b" /* CREATE_ORDER_ERROR */]:
      return order_objectSpread(order_objectSpread({}, state), {}, {
        loading: false,
        fetched: true,
        errorMessage: action.errorMessage,
        success: false
      });

    case order["g" /* GET_ORDER_HISTORY */]:
      return order_objectSpread(order_objectSpread({}, state), {}, {
        history: order_objectSpread(order_objectSpread({}, state.history), {}, {
          loading: true,
          fetched: false,
          errorMessage: undefined
        })
      });

    case order["i" /* GET_ORDER_HISTORY_SUCCESS */]:
      return order_objectSpread(order_objectSpread({}, state), {}, {
        history: order_objectSpread(order_objectSpread({}, state.history), {}, {
          loading: false,
          fetched: true,
          orders: action.orders
        })
      });

    case order["h" /* GET_ORDER_HISTORY_ERROR */]:
      return order_objectSpread(order_objectSpread({}, state), {}, {
        history: order_objectSpread(order_objectSpread({}, state.history), {}, {
          loading: false,
          fetched: true,
          errorMessage: action.errorMessage
        })
      });

    case order["d" /* GET_ORDER_DETAIL */]:
      return order_objectSpread(order_objectSpread({}, state), {}, {
        detail: order_objectSpread(order_objectSpread({}, state.detail), {}, {
          loading: true,
          fetched: false,
          errorMessage: undefined
        })
      });

    case order["f" /* GET_ORDER_DETAIL_SUCCESS */]:
      return order_objectSpread(order_objectSpread({}, state), {}, {
        detail: order_objectSpread(order_objectSpread({}, state.detail), {}, {
          loading: false,
          fetched: true,
          order: action.order
        })
      });

    case order["e" /* GET_ORDER_DETAIL_ERROR */]:
      return order_objectSpread(order_objectSpread({}, state), {}, {
        detail: order_objectSpread(order_objectSpread({}, state.detail), {}, {
          loading: false,
          fetched: true,
          errorMessage: action.errorMessage
        })
      });

    case order["j" /* REDEEM_VOUCHER */]:
      return order_objectSpread(order_objectSpread({}, state), {}, {
        redeemVoucher: order_objectSpread(order_objectSpread({}, state.redeemVoucher), {}, {
          loading: true,
          voucherData: {},
          fetched: false,
          errorMessage: undefined
        })
      });

    case order["l" /* REDEEM_VOUCHER_SUCCESS */]:
      return order_objectSpread(order_objectSpread({}, state), {}, {
        redeemVoucher: order_objectSpread(order_objectSpread({}, state.redeemVoucher), {}, {
          loading: false,
          fetched: true,
          voucherData: action.voucherData
        })
      });

    case order["k" /* REDEEM_VOUCHER_ERROR */]:
      return order_objectSpread(order_objectSpread({}, state), {}, {
        redeemVoucher: order_objectSpread(order_objectSpread({}, state.redeemVoucher), {}, {
          loading: false,
          fetched: true,
          errorMessage: action.errorMessage
        })
      });

    default:
      return state;
  }
};

/* harmony default export */ var reducers_order = (order_userReducer);
// EXTERNAL MODULE: ./src/constants/sales.js
var sales = __webpack_require__("lDjm");

// CONCATENATED MODULE: ./src/reducers/sales.js
function sales_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function sales_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { sales_ownKeys(Object(source), true).forEach(function (key) { sales_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { sales_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function sales_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const sales_initialState = {
  products: [],
  total: 0,
  page: 1,
  limit: 12,
  loading: false,
  fetched: false,
  errorMessage: undefined
};

const salesReducer = (state = sales_initialState, action) => {
  switch (action.type) {
    case sales["a" /* GET_PRODUCTS_SALE */]:
      return sales_objectSpread(sales_objectSpread({}, state), {}, {
        page: action.page,
        loading: true,
        fetched: false,
        errorMessage: undefined
      });

    case sales["c" /* GET_PRODUCTS_SALE_SUCCESS */]:
      return sales_objectSpread(sales_objectSpread({}, state), {}, {
        loading: false,
        fetched: true,
        products: action.products,
        total: action.total
      });

    case sales["b" /* GET_PRODUCTS_SALE_ERROR */]:
      return sales_objectSpread(sales_objectSpread({}, state), {}, {
        page: state.page > 1 && state.page - 1,
        loading: false,
        fetched: true,
        errorMessage: action.errorMessage
      });

    case sales["d" /* RESET_STATE */]:
      return sales_initialState;

    default:
      return state;
  }
};

/* harmony default export */ var reducers_sales = (salesReducer);
// EXTERNAL MODULE: ./src/constants/events.js
var events = __webpack_require__("J+Xr");

// CONCATENATED MODULE: ./src/reducers/events.js
function events_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function events_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { events_ownKeys(Object(source), true).forEach(function (key) { events_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { events_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function events_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const events_initialState = {
  upcomming: {
    events: [],
    loading: false,
    fetched: false,
    errorMessage: undefined
  },
  occurred: {
    events: [],
    loading: false,
    fetched: false,
    errorMessage: undefined,
    total: 0,
    page: 1,
    limit: 12,
    month: ""
  }
};

const eventsReducer = (state = events_initialState, action) => {
  switch (action.type) {
    case events["d" /* GET_UPCOMMING_EVENTS */]:
      return events_objectSpread(events_objectSpread({}, state), {}, {
        upcomming: events_objectSpread(events_objectSpread({}, state.upcomming), {}, {
          loading: true,
          fetched: false,
          errorMessage: undefined
        })
      });

    case events["f" /* GET_UPCOMMING_EVENTS_SUCCESS */]:
      return events_objectSpread(events_objectSpread({}, state), {}, {
        upcomming: events_objectSpread(events_objectSpread({}, state.upcomming), {}, {
          events: action.events,
          loading: false,
          fetched: true
        })
      });

    case events["e" /* GET_UPCOMMING_EVENTS_ERROR */]:
      return events_objectSpread(events_objectSpread({}, state), {}, {
        upcomming: events_objectSpread(events_objectSpread({}, state.upcomming), {}, {
          loading: false,
          fetched: true,
          errorMessage: action.errorMessage
        })
      });

    case events["a" /* GET_OCCURRED_EVENTS */]:
      return events_objectSpread(events_objectSpread({}, state), {}, {
        occurred: events_objectSpread(events_objectSpread({}, state.occurred), {}, {
          page: action.page,
          loading: true,
          fetched: false,
          errorMessage: undefined
        })
      });

    case events["c" /* GET_OCCURRED_EVENTS_SUCCESS */]:
      return events_objectSpread(events_objectSpread({}, state), {}, {
        occurred: events_objectSpread(events_objectSpread({}, state.occurred), {}, {
          total: action.total,
          events: action.events,
          loading: false,
          fetched: true
        })
      });

    case events["b" /* GET_OCCURRED_EVENTS_ERROR */]:
      return events_objectSpread(events_objectSpread({}, state), {}, {
        occurred: events_objectSpread(events_objectSpread({}, state.occurred), {}, {
          page: state.page > 1 && state.page - 1,
          loading: false,
          fetched: true,
          errorMessage: action.errorMessage
        })
      });

    case events["g" /* RESET_STATE */]:
      return events_initialState;

    default:
      return state;
  }
};

/* harmony default export */ var reducers_events = (eventsReducer);
// EXTERNAL MODULE: ./src/constants/event.js
var constants_event = __webpack_require__("CqCk");

// CONCATENATED MODULE: ./src/reducers/event.js
function event_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function event_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { event_ownKeys(Object(source), true).forEach(function (key) { event_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { event_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function event_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const event_initialState = {
  event: {},
  loading: false,
  fetched: false,
  errorMessage: undefined,
  joinEvent: {
    loading: false,
    fetched: false,
    errorMessage: undefined,
    success: false
  }
};

const eventReducer = (state = event_initialState, action) => {
  switch (action.type) {
    case constants_event["a" /* GET_EVENT */]:
      return event_objectSpread(event_objectSpread({}, state), {}, {
        loading: true,
        fetched: false,
        errorMessage: undefined
      });

    case constants_event["c" /* GET_EVENT_SUCCESS */]:
      return event_objectSpread(event_objectSpread({}, state), {}, {
        event: action.event,
        loading: false,
        fetched: true
      });

    case constants_event["b" /* GET_EVENT_ERROR */]:
      return event_objectSpread(event_objectSpread({}, state), {}, {
        loading: false,
        fetched: true,
        errorMessage: action.errorMessage
      });

    case constants_event["d" /* JOIN_EVENT */]:
      return event_objectSpread(event_objectSpread({}, state), {}, {
        joinEvent: event_objectSpread(event_objectSpread({}, state.joinEvent), {}, {
          success: false,
          loading: true,
          fetched: false,
          errorMessage: undefined
        })
      });

    case constants_event["f" /* JOIN_EVENT_SUCCESS */]:
      return event_objectSpread(event_objectSpread({}, state), {}, {
        joinEvent: event_objectSpread(event_objectSpread({}, state.joinEvent), {}, {
          success: true,
          loading: false,
          fetched: true
        })
      });

    case constants_event["e" /* JOIN_EVENT_ERROR */]:
      return event_objectSpread(event_objectSpread({}, state), {}, {
        joinEvent: event_objectSpread(event_objectSpread({}, state.joinEvent), {}, {
          loading: false,
          fetched: true,
          errorMessage: action.errorMessage,
          success: false
        })
      });

    case constants_event["g" /* RESET_STATE */]:
      return event_initialState;

    default:
      return state;
  }
};

/* harmony default export */ var reducers_event = (eventReducer);
// EXTERNAL MODULE: ./src/constants/news.js
var news = __webpack_require__("w4I7");

// CONCATENATED MODULE: ./src/reducers/news.js
function news_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function news_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { news_ownKeys(Object(source), true).forEach(function (key) { news_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { news_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function news_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const news_initialState = {
  news: [],
  total: 0,
  page: 1,
  limit: 12,
  loading: false,
  fetched: false,
  errorMessage: undefined
};

const newsReducer = (state = news_initialState, action) => {
  switch (action.type) {
    case news["a" /* GET_NEWS */]:
      return news_objectSpread(news_objectSpread({}, state), {}, {
        page: action.page,
        loading: true,
        fetched: false,
        errorMessage: undefined
      });

    case news["c" /* GET_NEWS_SUCCESS */]:
      return news_objectSpread(news_objectSpread({}, state), {}, {
        loading: false,
        fetched: true,
        news: action.news,
        total: action.total
      });

    case news["b" /* GET_NEWS_ERROR */]:
      return news_objectSpread(news_objectSpread({}, state), {}, {
        page: state.page > 1 && state.page - 1,
        loading: false,
        fetched: true,
        errorMessage: action.errorMessage
      });

    case news["d" /* RESET_STATE */]:
      return news_initialState;

    default:
      return state;
  }
};

/* harmony default export */ var reducers_news = (newsReducer);
// EXTERNAL MODULE: ./src/constants/new.js
var constants_new = __webpack_require__("k7wY");

// CONCATENATED MODULE: ./src/reducers/new.js
function new_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function new_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { new_ownKeys(Object(source), true).forEach(function (key) { new_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { new_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function new_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const new_initialState = {
  loading: false,
  fetched: false,
  errorMessage: undefined,
  post: {}
};

const newReducer = (state = new_initialState, action) => {
  switch (action.type) {
    case constants_new["a" /* GET_NEW */]:
      return new_objectSpread(new_objectSpread({}, state), {}, {
        loading: true,
        fetched: false,
        errorMessage: undefined
      });

    case constants_new["c" /* GET_NEW_SUCCESS */]:
      return new_objectSpread(new_objectSpread({}, state), {}, {
        loading: false,
        fetched: true,
        post: action.post
      });

    case constants_new["b" /* GET_NEW_ERROR */]:
      return new_objectSpread(new_objectSpread({}, state), {}, {
        loading: false,
        fetched: true,
        errorMessage: action.errorMessage
      });

    case constants_new["d" /* RESET_STATE */]:
      return new_initialState;

    default:
      return state;
  }
};

/* harmony default export */ var reducers_new = (newReducer);
// EXTERNAL MODULE: ./src/constants/faqs.js
var faqs = __webpack_require__("gLZk");

// CONCATENATED MODULE: ./src/reducers/faqs.js
function faqs_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function faqs_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { faqs_ownKeys(Object(source), true).forEach(function (key) { faqs_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { faqs_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function faqs_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const faqs_initialState = {
  faqs: [],
  total: 0,
  page: 1,
  limit: 12,
  loading: false,
  fetched: false,
  errorMessage: undefined
};

const faqsReducer = (state = faqs_initialState, action) => {
  switch (action.type) {
    case faqs["a" /* GET_FAQS */]:
      return faqs_objectSpread(faqs_objectSpread({}, state), {}, {
        page: action.page,
        loading: true,
        fetched: false,
        errorMessage: undefined
      });

    case faqs["c" /* GET_FAQS_SUCCESS */]:
      return faqs_objectSpread(faqs_objectSpread({}, state), {}, {
        loading: false,
        fetched: true,
        faqs: action.faqs,
        total: action.total
      });

    case faqs["b" /* GET_FAQS_ERROR */]:
      return faqs_objectSpread(faqs_objectSpread({}, state), {}, {
        page: state.page > 1 && state.page - 1,
        loading: false,
        fetched: true,
        errorMessage: action.errorMessage
      });

    case faqs["d" /* RESET_STATE */]:
      return faqs_initialState;

    default:
      return state;
  }
};

/* harmony default export */ var reducers_faqs = (faqsReducer);
// EXTERNAL MODULE: ./src/constants/faq.js
var faq = __webpack_require__("Lh/H");

// CONCATENATED MODULE: ./src/reducers/faq.js
function faq_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function faq_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { faq_ownKeys(Object(source), true).forEach(function (key) { faq_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { faq_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function faq_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const faq_initialState = {
  loading: false,
  fetched: false,
  errorMessage: undefined,
  post: {}
};

const faqReducer = (state = faq_initialState, action) => {
  switch (action.type) {
    case faq["a" /* GET_FAQ */]:
      return faq_objectSpread(faq_objectSpread({}, state), {}, {
        loading: true,
        fetched: false,
        errorMessage: undefined
      });

    case faq["c" /* GET_FAQ_SUCCESS */]:
      return faq_objectSpread(faq_objectSpread({}, state), {}, {
        loading: false,
        fetched: true,
        post: action.post
      });

    case faq["b" /* GET_FAQ_ERROR */]:
      return faq_objectSpread(faq_objectSpread({}, state), {}, {
        loading: false,
        fetched: true,
        errorMessage: action.errorMessage
      });

    case faq["d" /* RESET_STATE */]:
      return faq_initialState;

    default:
      return state;
  }
};

/* harmony default export */ var reducers_faq = (faqReducer);
// EXTERNAL MODULE: ./src/constants/videos.js
var videos = __webpack_require__("WxlP");

// CONCATENATED MODULE: ./src/reducers/videos.js
function videos_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function videos_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { videos_ownKeys(Object(source), true).forEach(function (key) { videos_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { videos_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function videos_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const videos_initialState = {
  videos: [],
  total: 0,
  page: 1,
  limit: 12,
  loading: false,
  fetched: false,
  errorMessage: undefined
};

const videosReducer = (state = videos_initialState, action) => {
  switch (action.type) {
    case videos["a" /* GET_VIDEOS */]:
      return videos_objectSpread(videos_objectSpread({}, state), {}, {
        page: action.page,
        loading: true,
        fetched: false,
        errorMessage: undefined
      });

    case videos["c" /* GET_VIDEOS_SUCCESS */]:
      return videos_objectSpread(videos_objectSpread({}, state), {}, {
        loading: false,
        fetched: true,
        videos: action.videos,
        total: action.total
      });

    case videos["b" /* GET_VIDEOS_ERROR */]:
      return videos_objectSpread(videos_objectSpread({}, state), {}, {
        page: state.page > 1 && state.page - 1,
        loading: false,
        fetched: true,
        errorMessage: action.errorMessage
      });

    case videos["d" /* RESET_STATE */]:
      return videos_initialState;

    default:
      return state;
  }
};

/* harmony default export */ var reducers_videos = (videosReducer);
// EXTERNAL MODULE: ./src/constants/feedback.js
var feedback = __webpack_require__("3aCL");

// CONCATENATED MODULE: ./src/reducers/feedback.js
function feedback_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function feedback_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { feedback_ownKeys(Object(source), true).forEach(function (key) { feedback_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { feedback_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function feedback_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const feedback_initialState = {
  feedbacks: [],
  loading: false,
  fetched: false,
  errorMessage: undefined,
  sendFeedback: {
    loading: false,
    fetched: false,
    errorMessage: undefined,
    success: false
  }
};

const feedback_faqsReducer = (state = feedback_initialState, action) => {
  switch (action.type) {
    case feedback["a" /* GET_FEEDBACK */]:
      return feedback_objectSpread(feedback_objectSpread({}, state), {}, {
        loading: true,
        fetched: false,
        errorMessage: undefined
      });

    case feedback["c" /* GET_FEEDBACK_SUCCESS */]:
      return feedback_objectSpread(feedback_objectSpread({}, state), {}, {
        loading: false,
        fetched: true,
        feedbacks: action.feedbacks
      });

    case feedback["b" /* GET_FEEDBACK_ERROR */]:
      return feedback_objectSpread(feedback_objectSpread({}, state), {}, {
        loading: false,
        fetched: true,
        errorMessage: action.errorMessage
      });

    case feedback["e" /* SEND_FEEDBACK */]:
      return feedback_objectSpread(feedback_objectSpread({}, state), {}, {
        sendFeedback: feedback_objectSpread(feedback_objectSpread({}, state.sendFeedback), {}, {
          loading: true,
          fetched: false,
          errorMessage: undefined,
          success: false
        })
      });

    case feedback["g" /* SEND_FEEDBACK_SUCCESS */]:
      return feedback_objectSpread(feedback_objectSpread({}, state), {}, {
        sendFeedback: feedback_objectSpread(feedback_objectSpread({}, state.sendFeedback), {}, {
          loading: false,
          fetched: true,
          success: true
        })
      });

    case feedback["f" /* SEND_FEEDBACK_ERROR */]:
      return feedback_objectSpread(feedback_objectSpread({}, state), {}, {
        sendFeedback: feedback_objectSpread(feedback_objectSpread({}, state.sendFeedback), {}, {
          loading: false,
          success: false,
          fetched: true,
          errorMessage: action.errorMessage
        })
      });

    case feedback["d" /* RESET_STATE */]:
      return feedback_initialState;

    default:
      return state;
  }
};

/* harmony default export */ var reducers_feedback = (feedback_faqsReducer);
// EXTERNAL MODULE: ./src/constants/forgotPassword.js
var forgotPassword = __webpack_require__("VZVu");

// CONCATENATED MODULE: ./src/reducers/forgotPassword.js
function forgotPassword_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function forgotPassword_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { forgotPassword_ownKeys(Object(source), true).forEach(function (key) { forgotPassword_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { forgotPassword_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function forgotPassword_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const forgotPassword_initialState = {
  forgotPassword: {
    loading: false,
    fetched: false,
    success: false,
    errorMessage: undefined
  },
  forgotPasswordConfirmation: {
    loading: false,
    fetched: false,
    success: false,
    errorMessage: undefined
  }
};

const forgotPassword_eventReducer = (state = forgotPassword_initialState, action) => {
  switch (action.type) {
    case forgotPassword["a" /* FORGOT_PASSWORD */]:
      return forgotPassword_objectSpread(forgotPassword_objectSpread({}, state), {}, {
        forgotPassword: forgotPassword_objectSpread(forgotPassword_objectSpread({}, state.forgotPassword), {}, {
          loading: true,
          success: false,
          fetched: false,
          errorMessage: undefined
        })
      });

    case forgotPassword["f" /* FORGOT_PASSWORD_SUCCESS */]:
      return forgotPassword_objectSpread(forgotPassword_objectSpread({}, state), {}, {
        forgotPassword: forgotPassword_objectSpread(forgotPassword_objectSpread({}, state.forgotPassword), {}, {
          loading: false,
          success: true,
          fetched: true
        })
      });

    case forgotPassword["e" /* FORGOT_PASSWORD_ERROR */]:
      return forgotPassword_objectSpread(forgotPassword_objectSpread({}, state), {}, {
        forgotPassword: forgotPassword_objectSpread(forgotPassword_objectSpread({}, state.forgotPassword), {}, {
          loading: false,
          success: false,
          fetched: true,
          errorMessage: action.errorMessage
        })
      });

    case forgotPassword["b" /* FORGOT_PASSWORD_CONFIRMATION */]:
      return forgotPassword_objectSpread(forgotPassword_objectSpread({}, state), {}, {
        forgotPasswordConfirmation: forgotPassword_objectSpread(forgotPassword_objectSpread({}, state.forgotPasswordConfirmation), {}, {
          success: false,
          loading: true,
          fetched: false,
          errorMessage: undefined
        })
      });

    case forgotPassword["d" /* FORGOT_PASSWORD_CONFIRMATION_SUCCESS */]:
      return forgotPassword_objectSpread(forgotPassword_objectSpread({}, state), {}, {
        forgotPasswordConfirmation: forgotPassword_objectSpread(forgotPassword_objectSpread({}, state.forgotPasswordConfirmation), {}, {
          success: true,
          loading: false,
          fetched: true
        })
      });

    case forgotPassword["e" /* FORGOT_PASSWORD_ERROR */]:
      return forgotPassword_objectSpread(forgotPassword_objectSpread({}, state), {}, {
        forgotPasswordConfirmation: forgotPassword_objectSpread(forgotPassword_objectSpread({}, state.forgotPasswordConfirmation), {}, {
          loading: false,
          fetched: true,
          errorMessage: action.errorMessage,
          success: false
        })
      });

    case forgotPassword["g" /* RESET_STATE */]:
      return forgotPassword_initialState;

    default:
      return state;
  }
};

/* harmony default export */ var reducers_forgotPassword = (forgotPassword_eventReducer);
// EXTERNAL MODULE: ./src/constants/search.js
var search = __webpack_require__("16OJ");

// CONCATENATED MODULE: ./src/reducers/search.js
function search_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function search_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { search_ownKeys(Object(source), true).forEach(function (key) { search_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { search_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function search_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const search_initialState = {
  products: [],
  total: 0,
  page: 1,
  limit: 12,
  loading: false,
  fetched: false,
  errorMessage: undefined
};

const searchReducer = (state = search_initialState, action) => {
  switch (action.type) {
    case search["b" /* SEARCH */]:
      return search_objectSpread(search_objectSpread({}, state), {}, {
        page: action.page,
        loading: true,
        fetched: false,
        errorMessage: undefined
      });

    case search["d" /* SEARCH_SUCCESS */]:
      return search_objectSpread(search_objectSpread({}, state), {}, {
        loading: false,
        fetched: true,
        products: action.products,
        total: action.total
      });

    case search["c" /* SEARCH_ERROR */]:
      return search_objectSpread(search_objectSpread({}, state), {}, {
        page: state.page > 1 && state.page - 1,
        loading: false,
        fetched: true,
        errorMessage: action.errorMessage
      });

    case search["a" /* RESET_STATE */]:
      return search_initialState;

    default:
      return state;
  }
};

/* harmony default export */ var reducers_search = (searchReducer);
// EXTERNAL MODULE: ./src/constants/page.js
var page = __webpack_require__("1y30");

// CONCATENATED MODULE: ./src/reducers/page.js
function page_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function page_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { page_ownKeys(Object(source), true).forEach(function (key) { page_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { page_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function page_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const page_initialState = {
  loading: false,
  fetched: false,
  errorMessage: undefined,
  pageContent: ""
};

const pageReducer = (state = page_initialState, action) => {
  switch (action.type) {
    case page["a" /* GET_PAGE */]:
      return page_objectSpread(page_objectSpread({}, state), {}, {
        loading: true,
        fetched: false,
        errorMessage: undefined
      });

    case page["c" /* GET_PAGE_SUCCESS */]:
      return page_objectSpread(page_objectSpread({}, state), {}, {
        loading: false,
        fetched: true,
        pageContent: action.pageContent
      });

    case page["b" /* GET_PAGE_ERROR */]:
      return page_objectSpread(page_objectSpread({}, state), {}, {
        loading: false,
        fetched: true,
        errorMessage: action.errorMessage
      });

    case page["d" /* RESET_STATE */]:
      return page_initialState;

    default:
      return state;
  }
};

/* harmony default export */ var reducers_page = (pageReducer);
// EXTERNAL MODULE: ./src/constants/tasty.js
var tasty = __webpack_require__("Tydi");

// CONCATENATED MODULE: ./src/reducers/tasty.js
function tasty_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function tasty_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { tasty_ownKeys(Object(source), true).forEach(function (key) { tasty_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { tasty_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function tasty_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const tasty_initialState = {
  configs: {},
  loading: false,
  fetched: false,
  errorMessage: undefined
};

const tastyReducer = (state = tasty_initialState, action) => {
  switch (action.type) {
    case tasty["a" /* GET_CONFIGS */]:
      return tasty_objectSpread(tasty_objectSpread({}, state), {}, {
        loading: true,
        fetched: false,
        errorMessage: undefined
      });

    case tasty["c" /* GET_CONFIGS_SUCCESS */]:
      return tasty_objectSpread(tasty_objectSpread({}, state), {}, {
        loading: false,
        fetched: true,
        configs: action.configs
      });

    case tasty["b" /* GET_CONFIGS_ERROR */]:
      return tasty_objectSpread(tasty_objectSpread({}, state), {}, {
        loading: false,
        fetched: true,
        errorMessage: action.errorMessage
      });

    default:
      return state;
  }
};

/* harmony default export */ var reducers_tasty = (tastyReducer);
// EXTERNAL MODULE: ./src/constants/aboutUs.js
var aboutUs = __webpack_require__("61JS");

// CONCATENATED MODULE: ./src/reducers/aboutUs.js
function aboutUs_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function aboutUs_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { aboutUs_ownKeys(Object(source), true).forEach(function (key) { aboutUs_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { aboutUs_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function aboutUs_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const aboutUs_initialState = {
  configs: {},
  loading: false,
  fetched: false,
  errorMessage: undefined
};

const aboutUs_tastyReducer = (state = aboutUs_initialState, action) => {
  switch (action.type) {
    case aboutUs["a" /* GET_CONFIGS */]:
      return aboutUs_objectSpread(aboutUs_objectSpread({}, state), {}, {
        loading: true,
        fetched: false,
        errorMessage: undefined
      });

    case aboutUs["c" /* GET_CONFIGS_SUCCESS */]:
      return aboutUs_objectSpread(aboutUs_objectSpread({}, state), {}, {
        loading: false,
        fetched: true,
        configs: action.configs
      });

    case aboutUs["b" /* GET_CONFIGS_ERROR */]:
      return aboutUs_objectSpread(aboutUs_objectSpread({}, state), {}, {
        loading: false,
        fetched: true,
        errorMessage: action.errorMessage
      });

    default:
      return state;
  }
};

/* harmony default export */ var reducers_aboutUs = (aboutUs_tastyReducer);
// CONCATENATED MODULE: ./src/reducers/index.js






















function createReducer() {
  const rootReducer = Object(external_redux_["combineReducers"])({
    auth: reducers_auth,
    configs: reducers_configs,
    categories: reducers_categories,
    products: reducers_products,
    product: reducers_product,
    cart: reducers_cart,
    order: reducers_order,
    sales: reducers_sales,
    events: reducers_events,
    event: reducers_event,
    news: reducers_news,
    new: reducers_new,
    faqs: reducers_faqs,
    faq: reducers_faq,
    videos: reducers_videos,
    feedback: reducers_feedback,
    forgotPassword: reducers_forgotPassword,
    search: reducers_search,
    page: reducers_page,
    tasty: reducers_tasty,
    aboutUs: reducers_aboutUs
  });
  return rootReducer;
}
// EXTERNAL MODULE: external "redux-saga/effects"
var effects_ = __webpack_require__("RmXt");

// EXTERNAL MODULE: external "es6-promise"
var external_es6_promise_ = __webpack_require__("pv/X");
var external_es6_promise_default = /*#__PURE__*/__webpack_require__.n(external_es6_promise_);

// EXTERNAL MODULE: ./src/actions/auth.js
var actions_auth = __webpack_require__("nSkU");

// EXTERNAL MODULE: external "isomorphic-unfetch"
var external_isomorphic_unfetch_ = __webpack_require__("0bYB");
var external_isomorphic_unfetch_default = /*#__PURE__*/__webpack_require__.n(external_isomorphic_unfetch_);

// EXTERNAL MODULE: external "js-cookie"
var external_js_cookie_ = __webpack_require__("vmXh");
var external_js_cookie_default = /*#__PURE__*/__webpack_require__.n(external_js_cookie_);

// CONCATENATED MODULE: ./src/utils/authendication.js

const TOKEN_COOKIE_KEY = "_tl";
const singleton = Symbol("singleton");
const singletonEnforcer = Symbol("singletonEnforcer");

class authendication_Authendication {
  constructor(enforcer) {
    if (enforcer !== singletonEnforcer) {
      throw new Error('Constructor không được phép gọi trực tiếp, hãy dùng "Authendication.instance"');
    }

    this.token = null;
  }

  static get instance() {
    if (!this[singleton]) {
      this[singleton] = new authendication_Authendication(singletonEnforcer);
    }

    return this[singleton];
  }
  /**
   * Get token
   * @returns {*|null}
   */


  getToken() {
    if (!this.token) {
      const token = external_js_cookie_default.a.get(TOKEN_COOKIE_KEY);

      if (token) {
        this.token = token;
      }
    }

    return this.token;
  }
  /**
   * Lưu token cookie
   * @param token
   */


  saveAuthToCookie(token) {
    external_js_cookie_default.a.set(TOKEN_COOKIE_KEY, token, {
      expires: 90
    }); // 3 tháng

    this.token = token;
  }

  logout() {
    external_js_cookie_default.a.remove(TOKEN_COOKIE_KEY);
    this.token = null;
  }

}

/* harmony default export */ var authendication = (authendication_Authendication.instance);
// CONCATENATED MODULE: ./src/utils/request.js
function request_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function request_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { request_ownKeys(Object(source), true).forEach(function (key) { request_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { request_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function request_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




async function parseJSON(response) {
  const data = await response.json();

  if (response.status >= 400) {
    const error = new Error(data.message);
    throw error;
  }

  return data;
}

function request(path, options = {}, accessToken) {
  const url = `${"https://api.luvin.com.vn/v1"}${path}`;
  return external_isomorphic_unfetch_default()(url, request_objectSpread({
    headers: {
      authorization: accessToken || authendication.getToken(),
      Accept: "application/json",
      "Content-Type": "application/json"
    }
  }, options)) // .then(checkStatus)
  .then(parseJSON);
}
// CONCATENATED MODULE: ./src/sagas/auth.js






function* handleLogin(action) {
  const url = "/auth/login";

  try {
    const response = yield Object(effects_["call"])(request, url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        phone: action.phone,
        password: action.password
      })
    });
    authendication.saveAuthToCookie(response.data.token);
    yield Object(effects_["put"])(Object(actions_auth["e" /* loginSuccess */])(response.data.user));
  } catch (error) {
    yield Object(effects_["put"])(Object(actions_auth["d" /* loginError */])(error.message));
  }
}
function* handleRegister(action) {
  const url = "/auth/register";

  try {
    const response = yield Object(effects_["call"])(request, url, {
      method: "POST",
      body: JSON.stringify(action.registerInfo)
    });
    authendication.saveAuthToCookie(response.data.token);
    external_react_toastify_["toast"].success('Đăng ký tài khoản thành công!', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined
    });
    yield Object(effects_["put"])(Object(actions_auth["i" /* registerSuccess */])(response.data.user));
  } catch (error) {
    yield Object(effects_["put"])(Object(actions_auth["h" /* registerError */])(error.message));
  }
}
function* handleGetUserInfo(action) {
  const url = "/auth/me";

  try {
    const response = yield Object(effects_["call"])(request, url, {}, action.accessToken);
    yield Object(effects_["put"])(Object(actions_auth["b" /* getUserInfoSuccess */])(response.data));
  } catch (error) {// yield put(registerError(error.message));
  }
}
function* handleLogout(action) {
  authendication.logout();
}
function* handleUpdateUserInfo(action) {
  try {
    const url = `/user/${action.userId}`;
    const response = yield Object(effects_["call"])(request, url, {
      method: "PUT",
      body: JSON.stringify(action.userInfo)
    });
    yield Object(effects_["put"])(Object(actions_auth["o" /* updateUserInfoSuccess */])(response.data));
  } catch (error) {
    yield Object(effects_["put"])(Object(actions_auth["n" /* updateUserInfoError */])(error.message));
  }
}
function* handleUpdatePassword(action) {
  try {
    const url = "/auth/update-password";
    const response = yield Object(effects_["call"])(request, url, {
      method: "PUT",
      body: JSON.stringify(action.passwordData)
    });
    yield Object(effects_["put"])(Object(actions_auth["l" /* updatePasswordSuccess */])());
  } catch (error) {
    yield Object(effects_["put"])(Object(actions_auth["k" /* updatePasswordError */])(error.message));
  }
}
function* rootSaga() {
  yield Object(effects_["all"])([yield Object(effects_["takeLatest"])(auth["e" /* LOGIN */], handleLogin), yield Object(effects_["takeLatest"])(auth["i" /* REGISTER */], handleRegister), yield Object(effects_["takeLatest"])(auth["c" /* GET_USER_INFO */], handleGetUserInfo), yield Object(effects_["takeLatest"])(auth["h" /* LOGOUT */], handleLogout), yield Object(effects_["takeLatest"])(auth["o" /* UPDATE_USER_INFO */], handleUpdateUserInfo), yield Object(effects_["takeLatest"])(auth["l" /* UPDATE_PASSWORD */], handleUpdatePassword)]);
}
// CONCATENATED MODULE: ./src/actions/configs.js

const getConfigs = () => ({
  type: GET_CONFIGS
});
const getConfigsSuccess = configs => ({
  type: GET_CONFIGS_SUCCESS,
  configs
});
const getConfigsError = errorMessage => ({
  type: GET_CONFIGS_ERROR,
  errorMessage
});
// CONCATENATED MODULE: ./src/sagas/configs.js




function* handleGetConfigs(action) {
  const url = "/config";

  try {
    const response = yield Object(effects_["call"])(request, url);
    yield Object(effects_["put"])(getConfigsSuccess(response.data));
  } catch (error) {
    yield Object(effects_["put"])(getConfigsError(error.message));
  }
}
function* configs_rootSaga() {
  yield Object(effects_["all"])([yield Object(effects_["takeLatest"])(GET_CONFIGS, handleGetConfigs)]);
}
// CONCATENATED MODULE: ./src/actions/categories.js

const getCategories = () => ({
  type: GET_CATEGORIES
});
const getCategoriesSuccess = categories => ({
  type: GET_CATEGORIES_SUCCESS,
  categories
});
const getCategoriesError = errorMessage => ({
  type: GET_CATEGORIES_ERROR,
  errorMessage
});
// CONCATENATED MODULE: ./src/sagas/categories.js




function* handleGetCategories(action) {
  const url = "/category/all";

  try {
    const response = yield Object(effects_["call"])(request, url);
    yield Object(effects_["put"])(getCategoriesSuccess(response.data));
  } catch (error) {
    yield Object(effects_["put"])(getCategoriesError(error.message));
  }
}
function* categories_rootSaga() {
  yield Object(effects_["all"])([yield Object(effects_["takeLatest"])(GET_CATEGORIES, handleGetCategories)]);
}
// EXTERNAL MODULE: ./src/actions/products.js
var actions_products = __webpack_require__("E1NF");

// CONCATENATED MODULE: ./src/sagas/products.js




function* handleGetProducts(action) {
  const url = `/product/category/${action.categorySlug}?limit=${action.limit}&page=${action.page}&sort=${action.sort}&type=${action.productType}&origin=${action.origin}`;

  try {
    const response = yield Object(effects_["call"])(request, url);
    yield Object(effects_["put"])(Object(actions_products["c" /* getProductsSuccess */])(response.data.total, response.data.products));
  } catch (error) {
    yield Object(effects_["put"])(Object(actions_products["b" /* getProductsError */])(error.message));
  }
}
function* products_rootSaga() {
  yield Object(effects_["all"])([yield Object(effects_["takeLatest"])(products["b" /* GET_PRODUCTS */], handleGetProducts)]);
}
// EXTERNAL MODULE: ./src/actions/product.js
var actions_product = __webpack_require__("JO7b");

// CONCATENATED MODULE: ./src/sagas/product.js




function* handleGetProduct(action) {
  const url = `/product/${action.productSlug}`;

  try {
    const response = yield Object(effects_["call"])(request, url);
    yield Object(effects_["put"])(Object(actions_product["c" /* getProductSuccess */])(response.data));
  } catch (error) {
    yield Object(effects_["put"])(Object(actions_product["b" /* getProductError */])(error.message));
  }
}
function* product_rootSaga() {
  yield Object(effects_["all"])([yield Object(effects_["takeLatest"])(product["a" /* GET_PRODUCT */], handleGetProduct)]);
}
// EXTERNAL MODULE: external "lodash/isString"
var isString_ = __webpack_require__("5vqK");
var isString_default = /*#__PURE__*/__webpack_require__.n(isString_);

// EXTERNAL MODULE: ./src/actions/order.js
var actions_order = __webpack_require__("BiE5");

// CONCATENATED MODULE: ./src/sagas/order.js





function* handleCreateOrder(action) {
  const url = "/order";

  try {
    const response = yield Object(effects_["call"])(request, url, {
      method: "POST",
      body: JSON.stringify(action.orderInfo)
    });

    if (isString_default()(response.data)) {
      window.location.replace(response.data);
      return;
    }

    window.location.href = `/tai-khoan/view-order/${response.data._id}`;
    yield Object(effects_["put"])(Object(actions_order["c" /* createOrderSuccess */])(response.data));
  } catch (error) {
    yield Object(effects_["put"])(Object(actions_order["b" /* createOrderError */])(error.message));
  }
}
function* handleGetOrdersHistory(action) {
  const url = "/order/history?limit=100&page=1";

  try {
    const response = yield Object(effects_["call"])(request, url);
    yield Object(effects_["put"])(Object(actions_order["i" /* getOrderHistorySuccess */])(response.data));
  } catch (error) {
    yield Object(effects_["put"])(Object(actions_order["h" /* getOrderHistoryError */])(error.message));
  }
}
function* handleGetOrderDetail(action) {
  const url = `/order/${action.orderId}`;

  try {
    const response = yield Object(effects_["call"])(request, url);
    yield Object(effects_["put"])(Object(actions_order["f" /* getOrderDetailSuccess */])(response.data));
  } catch (error) {
    yield Object(effects_["put"])(Object(actions_order["e" /* getOrderDetailError */])(error.message));
  }
}
function* handleRedeemVoucher(action) {
  const url = `/voucher/redeem`;

  try {
    const response = yield Object(effects_["call"])(request, url, {
      method: "POST",
      body: JSON.stringify({
        code: action.code
      })
    });
    yield Object(effects_["put"])(Object(actions_order["l" /* redeemVoucherSuccess */])(response.data));
  } catch (error) {
    yield Object(effects_["put"])(Object(actions_order["k" /* redeemVoucherError */])(error.message));
  }
}
function* order_rootSaga() {
  yield Object(effects_["all"])([yield Object(effects_["takeLatest"])(order["a" /* CREATE_ORDER */], handleCreateOrder), yield Object(effects_["takeLatest"])(order["g" /* GET_ORDER_HISTORY */], handleGetOrdersHistory), yield Object(effects_["takeLatest"])(order["d" /* GET_ORDER_DETAIL */], handleGetOrderDetail), yield Object(effects_["takeLatest"])(order["j" /* REDEEM_VOUCHER */], handleRedeemVoucher)]);
}
// EXTERNAL MODULE: ./src/actions/sales.js
var actions_sales = __webpack_require__("8Fes");

// CONCATENATED MODULE: ./src/sagas/sales.js




function* handleGetProductsSale(action) {
  const url = `/product/sale?limit=${action.limit}&page=${action.page}`;

  try {
    const response = yield Object(effects_["call"])(request, url);
    yield Object(effects_["put"])(Object(actions_sales["c" /* getProductsSaleSuccess */])(response.data.total, response.data.products));
  } catch (error) {
    yield Object(effects_["put"])(Object(actions_sales["b" /* getProductsSaleError */])(error.message));
  }
}
function* sales_rootSaga() {
  yield Object(effects_["all"])([yield Object(effects_["takeLatest"])(sales["a" /* GET_PRODUCTS_SALE */], handleGetProductsSale)]);
}
// EXTERNAL MODULE: ./src/actions/events.js
var actions_events = __webpack_require__("Cd+q");

// CONCATENATED MODULE: ./src/sagas/events.js




function* handleGetUpcommingEvents(action) {
  const url = "/post/upcomming";

  try {
    const response = yield Object(effects_["call"])(request, url);
    yield Object(effects_["put"])(Object(actions_events["f" /* getUpcommingEventsSuccess */])(response.data));
  } catch (error) {
    yield Object(effects_["put"])(Object(actions_events["e" /* getUpcommingEventsError */])(error.message));
  }
}
function* handleGetOccurredEvents(action) {
  const url = `/post/occurred?limit=${action.limit}&page=${action.page}&month=${action.month}`;

  try {
    const response = yield Object(effects_["call"])(request, url);
    yield Object(effects_["put"])(Object(actions_events["c" /* getOccurredEventsSuccess */])(response.data.total, response.data.events));
  } catch (error) {
    yield Object(effects_["put"])(Object(actions_events["b" /* getOccurredEventsError */])(error.message));
  }
}
function* events_rootSaga() {
  yield Object(effects_["all"])([yield Object(effects_["takeLatest"])(events["d" /* GET_UPCOMMING_EVENTS */], handleGetUpcommingEvents), yield Object(effects_["takeLatest"])(events["a" /* GET_OCCURRED_EVENTS */], handleGetOccurredEvents)]);
}
// EXTERNAL MODULE: ./src/actions/event.js
var actions_event = __webpack_require__("xcIm");

// CONCATENATED MODULE: ./src/sagas/event.js




function* handleJoinEvent(action) {
  const url = "/event/subscribe";

  try {
    const response = yield Object(effects_["call"])(request, url);
    yield Object(effects_["put"])(Object(actions_event["e" /* joinEventSuccess */])(response.data));
  } catch (error) {
    yield Object(effects_["put"])(Object(actions_event["d" /* joinEventError */])(error.message));
  }
}
function* handleGetEvent(action) {
  const url = `/post/${action.eventSlug}`;

  try {
    const response = yield Object(effects_["call"])(request, url);
    yield Object(effects_["put"])(Object(actions_event["c" /* getEventSuccess */])(response.data));
  } catch (error) {
    yield Object(effects_["put"])(Object(actions_event["b" /* getEventError */])(error.message));
  }
}
function* event_rootSaga() {
  yield Object(effects_["all"])([yield Object(effects_["takeLatest"])(constants_event["a" /* GET_EVENT */], handleGetEvent), yield Object(effects_["takeLatest"])(constants_event["d" /* JOIN_EVENT */], handleJoinEvent)]);
}
// EXTERNAL MODULE: ./src/actions/news.js
var actions_news = __webpack_require__("1crH");

// CONCATENATED MODULE: ./src/sagas/news.js




function* handleGetNews(action) {
  const url = `/post?limit=${action.limit}&page=${action.page}&type=article`;

  try {
    const response = yield Object(effects_["call"])(request, url);
    yield Object(effects_["put"])(Object(actions_news["c" /* getNewsSuccess */])(response.data.total, response.data.posts));
  } catch (error) {
    yield Object(effects_["put"])(Object(actions_news["b" /* getNewsError */])(error.message));
  }
}
function* news_rootSaga() {
  yield Object(effects_["all"])([yield Object(effects_["takeLatest"])(news["a" /* GET_NEWS */], handleGetNews)]);
}
// EXTERNAL MODULE: ./src/actions/new.js
var actions_new = __webpack_require__("esg2");

// CONCATENATED MODULE: ./src/sagas/new.js




function* handleGetNew(action) {
  const url = `/post/${action.newSlug}`;

  try {
    const response = yield Object(effects_["call"])(request, url);
    yield Object(effects_["put"])(Object(actions_new["c" /* getNewSuccess */])(response.data));
  } catch (error) {
    yield Object(effects_["put"])(Object(actions_new["b" /* getNewError */])(error.message));
  }
}
function* new_rootSaga() {
  yield Object(effects_["all"])([yield Object(effects_["takeLatest"])(constants_new["a" /* GET_NEW */], handleGetNew)]);
}
// EXTERNAL MODULE: ./src/actions/faqs.js
var actions_faqs = __webpack_require__("SSj9");

// CONCATENATED MODULE: ./src/sagas/faqs.js




function* handleGetFaqs(action) {
  const url = `/post?limit=${action.limit}&page=${action.page}&type=faq`;

  try {
    const response = yield Object(effects_["call"])(request, url);
    yield Object(effects_["put"])(Object(actions_faqs["c" /* getFaqsSuccess */])(response.data.total, response.data.posts));
  } catch (error) {
    yield Object(effects_["put"])(Object(actions_faqs["b" /* getFaqsError */])(error.message));
  }
}
function* faqs_rootSaga() {
  yield Object(effects_["all"])([yield Object(effects_["takeLatest"])(faqs["a" /* GET_FAQS */], handleGetFaqs)]);
}
// EXTERNAL MODULE: ./src/actions/faq.js
var actions_faq = __webpack_require__("VNVN");

// CONCATENATED MODULE: ./src/sagas/faq.js




function* handleGetFaq(action) {
  const url = `/post/${action.newSlug}`;

  try {
    const response = yield Object(effects_["call"])(request, url);
    yield Object(effects_["put"])(Object(actions_faq["c" /* getFaqSuccess */])(response.data));
  } catch (error) {
    yield Object(effects_["put"])(Object(actions_faq["b" /* getFaqError */])(error.message));
  }
}
function* faq_rootSaga() {
  yield Object(effects_["all"])([yield Object(effects_["takeLatest"])(faq["a" /* GET_FAQ */], handleGetFaq)]);
}
// EXTERNAL MODULE: ./src/actions/videos.js
var actions_videos = __webpack_require__("U0X8");

// CONCATENATED MODULE: ./src/sagas/videos.js




function* handleGetVideos(action) {
  const url = `/post?limit=${action.limit}&page=${action.page}&type=video`;

  try {
    const response = yield Object(effects_["call"])(request, url);
    yield Object(effects_["put"])(Object(actions_videos["c" /* getVideosSuccess */])(response.data.total, response.data.posts));
  } catch (error) {
    yield Object(effects_["put"])(Object(actions_videos["b" /* getVideosError */])(error.message));
  }
}
function* videos_rootSaga() {
  yield Object(effects_["all"])([yield Object(effects_["takeLatest"])(videos["a" /* GET_VIDEOS */], handleGetVideos)]);
}
// EXTERNAL MODULE: ./src/actions/feedback.js
var actions_feedback = __webpack_require__("SQ4e");

// CONCATENATED MODULE: ./src/sagas/feedback.js




function* handleGetFeedback(action) {
  const url = "/review";

  try {
    const response = yield Object(effects_["call"])(request, url);
    yield Object(effects_["put"])(Object(actions_feedback["c" /* getFeedbackSuccess */])(response.data));
  } catch (error) {
    yield Object(effects_["put"])(Object(actions_feedback["b" /* getFeedbackError */])(error.message));
  }
}
function* handleSendFeedback(action) {
  const url = "/review";

  try {
    const response = yield Object(effects_["call"])(request, url, {
      method: "POST",
      body: JSON.stringify(action.feedbackData)
    });
    yield Object(effects_["put"])(Object(actions_feedback["f" /* sendFeedbackSuccess */])(response.data));
  } catch (error) {
    yield Object(effects_["put"])(Object(actions_feedback["e" /* sendFeedbackError */])(error.message));
  }
}
function* feedback_rootSaga() {
  yield Object(effects_["all"])([yield Object(effects_["takeLatest"])(feedback["a" /* GET_FEEDBACK */], handleGetFeedback), yield Object(effects_["takeLatest"])(feedback["e" /* SEND_FEEDBACK */], handleSendFeedback)]);
}
// EXTERNAL MODULE: ./src/actions/forgotPassword.js
var actions_forgotPassword = __webpack_require__("wMW/");

// CONCATENATED MODULE: ./src/sagas/forgotPassword.js






function* handleForgotPassword(action) {
  const url = "/auth/forgot-password";

  try {
    const response = yield Object(effects_["call"])(request, url, {
      method: "POST",
      body: JSON.stringify({
        username: action.username
      })
    });
    yield Object(effects_["put"])(Object(actions_forgotPassword["f" /* forgotPasswordSuccess */])(response.data));
  } catch (error) {
    yield Object(effects_["put"])(Object(actions_forgotPassword["e" /* forgotPasswordError */])(error.message));
  }
}
function* handleForgotPasswordConfirmation(action) {
  const url = "/auth/forgot-password/confirmation";

  try {
    const response = yield Object(effects_["call"])(request, url, {
      method: "POST",
      body: JSON.stringify({
        token: action.token,
        password: action.password
      })
    });
    authendication.saveAuthToCookie(response.data.token);
    yield Object(effects_["put"])(Object(actions_auth["e" /* loginSuccess */])(response.data.user));
    yield Object(effects_["put"])(Object(actions_forgotPassword["d" /* forgotPasswordConfirmationSuccess */])());
  } catch (error) {
    yield Object(effects_["put"])(Object(actions_forgotPassword["c" /* forgotPasswordConfirmationError */])(error.message));
  }
}
function* forgotPassword_rootSaga() {
  yield Object(effects_["all"])([yield Object(effects_["takeLatest"])(forgotPassword["a" /* FORGOT_PASSWORD */], handleForgotPassword), yield Object(effects_["takeLatest"])(forgotPassword["b" /* FORGOT_PASSWORD_CONFIRMATION */], handleForgotPasswordConfirmation)]);
}
// EXTERNAL MODULE: ./src/actions/search.js
var actions_search = __webpack_require__("8tvR");

// CONCATENATED MODULE: ./src/sagas/search.js




function* handleSearch(action) {
  const url = `/product?limit=${action.limit}&page=${action.page}&name=${action.name}`;

  try {
    const response = yield Object(effects_["call"])(request, url);
    yield Object(effects_["put"])(Object(actions_search["d" /* searchSuccess */])(response.data.total, response.data.products));
  } catch (error) {
    yield Object(effects_["put"])(Object(actions_search["c" /* searchError */])(error.message));
  }
}
function* search_rootSaga() {
  yield Object(effects_["all"])([yield Object(effects_["takeLatest"])(search["b" /* SEARCH */], handleSearch)]);
}
// EXTERNAL MODULE: ./src/actions/page.js
var actions_page = __webpack_require__("Ukc1");

// CONCATENATED MODULE: ./src/sagas/page.js




function* handleGetPage(action) {
  const url = `/page/${action.pageType}`;

  try {
    const response = yield Object(effects_["call"])(request, url);
    yield Object(effects_["put"])(Object(actions_page["c" /* getPageSuccess */])((response.data || {}).content || ""));
  } catch (error) {
    yield Object(effects_["put"])(Object(actions_page["b" /* getPageError */])(error.message));
  }
}
function* page_rootSaga() {
  yield Object(effects_["all"])([yield Object(effects_["takeLatest"])(page["a" /* GET_PAGE */], handleGetPage)]);
}
// EXTERNAL MODULE: ./src/actions/tasty.js
var actions_tasty = __webpack_require__("Hr6J");

// CONCATENATED MODULE: ./src/sagas/tasty.js




function* tasty_handleGetConfigs(action) {
  const url = "/tasty";

  try {
    const response = yield Object(effects_["call"])(request, url);
    yield Object(effects_["put"])(Object(actions_tasty["c" /* getConfigsSuccess */])(response.data));
  } catch (error) {
    yield Object(effects_["put"])(Object(actions_tasty["b" /* getConfigsError */])(error.message));
  }
}
function* tasty_rootSaga() {
  yield Object(effects_["all"])([yield Object(effects_["takeLatest"])(tasty["a" /* GET_CONFIGS */], tasty_handleGetConfigs)]);
}
// EXTERNAL MODULE: ./src/actions/aboutUs.js
var actions_aboutUs = __webpack_require__("Vcyd");

// CONCATENATED MODULE: ./src/sagas/aboutUs.js




function* aboutUs_handleGetConfigs(action) {
  const url = "/about-us";

  try {
    const response = yield Object(effects_["call"])(request, url);
    yield Object(effects_["put"])(Object(actions_aboutUs["c" /* getConfigsSuccess */])(response.data));
  } catch (error) {
    yield Object(effects_["put"])(Object(actions_aboutUs["b" /* getConfigsError */])(error.message));
  }
}
function* aboutUs_rootSaga() {
  yield Object(effects_["all"])([yield Object(effects_["takeLatest"])(aboutUs["a" /* GET_CONFIGS */], aboutUs_handleGetConfigs)]);
}
// CONCATENATED MODULE: ./src/sagas/index.js






















external_es6_promise_default.a.polyfill();
function* sagas_rootSaga() {
  yield Object(effects_["all"])([configs_rootSaga(), rootSaga(), categories_rootSaga(), products_rootSaga(), product_rootSaga(), order_rootSaga(), sales_rootSaga(), events_rootSaga(), event_rootSaga(), news_rootSaga(), new_rootSaga(), faqs_rootSaga(), faq_rootSaga(), videos_rootSaga(), feedback_rootSaga(), forgotPassword_rootSaga(), search_rootSaga(), page_rootSaga(), tasty_rootSaga(), aboutUs_rootSaga()]);
}
// CONCATENATED MODULE: ./src/store.js






const bindMiddleware = middleware => {
  if (false) {}

  return Object(external_redux_["applyMiddleware"])(...middleware);
};

function configureStore(initialState = {}) {
  const sagaMiddleware = external_redux_saga_default()();
  const middleware = [sagaMiddleware];

  if (false) {}

  const store = Object(external_redux_["createStore"])(createReducer(), initialState, bindMiddleware(middleware));
  store.sagaTask = sagaMiddleware.run(sagas_rootSaga);
  return store;
}

/* harmony default export */ var src_store = (configureStore);
// EXTERNAL MODULE: ./src/components/Layout/Header.js
var Header = __webpack_require__("T6WU");

// EXTERNAL MODULE: ./src/components/Layout/Footer.js
var Footer = __webpack_require__("96Do");

// EXTERNAL MODULE: external "next-cookies"
var external_next_cookies_ = __webpack_require__("3i/4");
var external_next_cookies_default = /*#__PURE__*/__webpack_require__.n(external_next_cookies_);

// CONCATENATED MODULE: ./src/hocs/withAuthSync.js
var __jsx = external_react_default.a.createElement;

function withAuthSync_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function withAuthSync_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { withAuthSync_ownKeys(Object(source), true).forEach(function (key) { withAuthSync_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { withAuthSync_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function withAuthSync_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const withAuthSync_TOKEN_COOKIE_KEY = "_tl";
/**
 * HOC lấy accessToken
 * @param {*} WrappedComponent
 */

const withAuthSync = WrappedComponent => class extends external_react_["Component"] {
  static async getInitialProps(props) {
    const allCookies = external_next_cookies_default()(props.ctx);
    const accessToken = allCookies[withAuthSync_TOKEN_COOKIE_KEY];
    props.ctx.accessToken = accessToken; // eslint-disable-line

    const componentProps = WrappedComponent.getInitialProps && (await WrappedComponent.getInitialProps(props));
    return withAuthSync_objectSpread(withAuthSync_objectSpread({}, componentProps), {}, {
      accessToken
    });
  }

  render() {
    return __jsx(WrappedComponent, this.props);
  }

};

/* harmony default export */ var hocs_withAuthSync = (withAuthSync);
// CONCATENATED MODULE: ./src/pages/_app.js

var _app_jsx = external_react_default.a.createElement;

















class _app_MyApp extends app_default.a {
  static async getInitialProps({
    Component,
    ctx
  }) {
    let pageProps = {};

    if (ctx.req) {
      // server?
      ctx.store.dispatch(getConfigs());
      ctx.store.dispatch(getCategories());

      if (ctx.accessToken) {
        ctx.store.dispatch(Object(actions_auth["a" /* getUserInfo */])(ctx.accessToken));
      }
    }

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps({
        ctx
      });
    }

    return {
      pageProps
    };
  }

  render() {
    const {
      Component,
      pageProps,
      store
    } = this.props;
    return _app_jsx(external_react_redux_["Provider"], {
      store: store
    }, _app_jsx(external_react_toastify_["ToastContainer"], null), _app_jsx(Component, pageProps), _app_jsx(external_react_scroll_to_top_default.a, {
      smooth: true
    }));
  }

}

/* harmony default export */ var _app = __webpack_exports__["default"] = (Object(external_recompose_["compose"])(external_next_redux_wrapper_default()(src_store), external_next_redux_saga_default.a, hocs_withAuthSync)(_app_MyApp));

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

/***/ "JMOJ":
/***/ (function(module, exports) {

module.exports = require("next-redux-wrapper");

/***/ }),

/***/ "JO7b":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getProduct; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return getProductSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getProductError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return resetState; });
/* harmony import */ var _constants_product__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("c31i");

const getProduct = productSlug => ({
  type: _constants_product__WEBPACK_IMPORTED_MODULE_0__[/* GET_PRODUCT */ "a"],
  productSlug
});
const getProductSuccess = product => ({
  type: _constants_product__WEBPACK_IMPORTED_MODULE_0__[/* GET_PRODUCT_SUCCESS */ "c"],
  product
});
const getProductError = errorMessage => ({
  type: _constants_product__WEBPACK_IMPORTED_MODULE_0__[/* GET_PRODUCT_ERROR */ "b"],
  errorMessage
});
const resetState = () => ({
  type: _constants_product__WEBPACK_IMPORTED_MODULE_0__[/* RESET_STATE */ "d"]
});

/***/ }),

/***/ "JUv4":
/***/ (function(module, exports) {

module.exports = require("react-scroll-to-top");

/***/ }),

/***/ "Lh/H":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GET_FAQ; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return GET_FAQ_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return GET_FAQ_ERROR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return RESET_STATE; });
const GET_FAQ = "FAQ/GET_FAQ";
const GET_FAQ_SUCCESS = "FAQ/GET_FAQ_SUCCESS";
const GET_FAQ_ERROR = "FAQ/GET_FAQ_ERROR";
const RESET_STATE = "FAQ/RESET_STATE";

/***/ }),

/***/ "MjD1":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return GET_PRODUCTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return GET_PRODUCTS_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return GET_PRODUCTS_ERROR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CHANGE_FILTER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return RESET_STATE; });
const GET_PRODUCTS = "PRODUCTS/GET_PRODUCTS";
const GET_PRODUCTS_SUCCESS = "PRODUCTS/GET_PRODUCTS_SUCCESS";
const GET_PRODUCTS_ERROR = "PRODUCTS/GET_PRODUCTS_ERROR";
const CHANGE_FILTER = "PRODUCTS/CHANGE_FILTER";
const RESET_STATE = "PRODUCTS/RESET_STATE";

/***/ }),

/***/ "NnCY":
/***/ (function(module, exports) {

module.exports = require("recompose");

/***/ }),

/***/ "Osoz":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router-context.js");

/***/ }),

/***/ "RmXt":
/***/ (function(module, exports) {

module.exports = require("redux-saga/effects");

/***/ }),

/***/ "S3md":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/***/ }),

/***/ "SQ4e":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getFeedback; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return getFeedbackSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getFeedbackError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return sendFeedback; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return sendFeedbackSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return sendFeedbackError; });
/* unused harmony export resetState */
/* harmony import */ var _constants_feedback__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("3aCL");

const getFeedback = () => ({
  type: _constants_feedback__WEBPACK_IMPORTED_MODULE_0__[/* GET_FEEDBACK */ "a"]
});
const getFeedbackSuccess = feedbacks => ({
  type: _constants_feedback__WEBPACK_IMPORTED_MODULE_0__[/* GET_FEEDBACK_SUCCESS */ "c"],
  feedbacks
});
const getFeedbackError = errorMessage => ({
  type: _constants_feedback__WEBPACK_IMPORTED_MODULE_0__[/* GET_FEEDBACK_ERROR */ "b"],
  errorMessage
});
const sendFeedback = feedbackData => ({
  type: _constants_feedback__WEBPACK_IMPORTED_MODULE_0__[/* SEND_FEEDBACK */ "e"],
  feedbackData
});
const sendFeedbackSuccess = feedbackData => ({
  type: _constants_feedback__WEBPACK_IMPORTED_MODULE_0__[/* SEND_FEEDBACK_SUCCESS */ "g"],
  feedbackData
});
const sendFeedbackError = errorMessage => ({
  type: _constants_feedback__WEBPACK_IMPORTED_MODULE_0__[/* SEND_FEEDBACK_ERROR */ "f"],
  errorMessage
});
const resetState = () => ({
  type: _constants_feedback__WEBPACK_IMPORTED_MODULE_0__[/* RESET_STATE */ "d"]
});

/***/ }),

/***/ "SSj9":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getFaqs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return getFaqsSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getFaqsError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return resetState; });
/* harmony import */ var _constants_faqs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("gLZk");

const getFaqs = (limit = 12, page = 1) => ({
  type: _constants_faqs__WEBPACK_IMPORTED_MODULE_0__[/* GET_FAQS */ "a"],
  limit,
  page
});
const getFaqsSuccess = (total, faqs) => ({
  type: _constants_faqs__WEBPACK_IMPORTED_MODULE_0__[/* GET_FAQS_SUCCESS */ "c"],
  total,
  faqs
});
const getFaqsError = errorMessage => ({
  type: _constants_faqs__WEBPACK_IMPORTED_MODULE_0__[/* GET_FAQS_ERROR */ "b"],
  errorMessage
});
const resetState = () => ({
  type: _constants_faqs__WEBPACK_IMPORTED_MODULE_0__[/* RESET_STATE */ "d"]
});

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

/***/ "Tydi":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GET_CONFIGS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return GET_CONFIGS_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return GET_CONFIGS_ERROR; });
const GET_CONFIGS = "TASTY/GET_CONFIGS";
const GET_CONFIGS_SUCCESS = "TASTY/GET_CONFIGS_SUCCESS";
const GET_CONFIGS_ERROR = "TASTY/GET_CONFIGS_ERROR";

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

/***/ "Ukc1":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return getPageSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getPageError; });
/* unused harmony export resetState */
/* harmony import */ var _constants_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("1y30");

const getPage = pageType => ({
  type: _constants_page__WEBPACK_IMPORTED_MODULE_0__[/* GET_PAGE */ "a"],
  pageType
});
const getPageSuccess = pageContent => ({
  type: _constants_page__WEBPACK_IMPORTED_MODULE_0__[/* GET_PAGE_SUCCESS */ "c"],
  pageContent
});
const getPageError = errorMessage => ({
  type: _constants_page__WEBPACK_IMPORTED_MODULE_0__[/* GET_PAGE_ERROR */ "b"],
  errorMessage
});
const resetState = () => ({
  type: _constants_page__WEBPACK_IMPORTED_MODULE_0__[/* RESET_STATE */ "d"]
});

/***/ }),

/***/ "VNVN":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getFaq; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return getFaqSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getFaqError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return resetState; });
/* harmony import */ var _constants_faq__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("Lh/H");

const getFaq = faqSlug => ({
  type: _constants_faq__WEBPACK_IMPORTED_MODULE_0__[/* GET_FAQ */ "a"],
  faqSlug
});
const getFaqSuccess = post => ({
  type: _constants_faq__WEBPACK_IMPORTED_MODULE_0__[/* GET_FAQ_SUCCESS */ "c"],
  post
});
const getFaqError = errorMessage => ({
  type: _constants_faq__WEBPACK_IMPORTED_MODULE_0__[/* GET_FAQ_ERROR */ "b"],
  errorMessage
});
const resetState = () => ({
  type: _constants_faq__WEBPACK_IMPORTED_MODULE_0__[/* RESET_STATE */ "d"]
});

/***/ }),

/***/ "VZVu":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FORGOT_PASSWORD; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return FORGOT_PASSWORD_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return FORGOT_PASSWORD_ERROR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return FORGOT_PASSWORD_CONFIRMATION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return FORGOT_PASSWORD_CONFIRMATION_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return FORGOT_PASSWORD_CONFIRMATION_ERROR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return RESET_STATE; });
const FORGOT_PASSWORD = "FORGOT_PASSWORD/FORGOT_PASSWORD";
const FORGOT_PASSWORD_SUCCESS = "FORGOT_PASSWORD/FORGOT_PASSWORD_SUCCESS";
const FORGOT_PASSWORD_ERROR = "FORGOT_PASSWORD/FORGOT_PASSWORD_ERROR";
const FORGOT_PASSWORD_CONFIRMATION = "FORGOT_PASSWORD/FORGOT_PASSWORD_CONFIRMATION";
const FORGOT_PASSWORD_CONFIRMATION_SUCCESS = "FORGOT_PASSWORD/FORGOT_PASSWORD_CONFIRMATION_SUCCESS";
const FORGOT_PASSWORD_CONFIRMATION_ERROR = "FORGOT_PASSWORD/FORGOT_PASSWORD_CONFIRMATION_ERROR";
const RESET_STATE = "FORGOT_PASSWORD/RESET_STATE";

/***/ }),

/***/ "Vcyd":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getConfigs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return getConfigsSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getConfigsError; });
/* harmony import */ var _constants_aboutUs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("61JS");

const getConfigs = () => ({
  type: _constants_aboutUs__WEBPACK_IMPORTED_MODULE_0__[/* GET_CONFIGS */ "a"]
});
const getConfigsSuccess = configs => ({
  type: _constants_aboutUs__WEBPACK_IMPORTED_MODULE_0__[/* GET_CONFIGS_SUCCESS */ "c"],
  configs
});
const getConfigsError = errorMessage => ({
  type: _constants_aboutUs__WEBPACK_IMPORTED_MODULE_0__[/* GET_CONFIGS_ERROR */ "b"],
  errorMessage
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

/***/ "c31i":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GET_PRODUCT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return GET_PRODUCT_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return GET_PRODUCT_ERROR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return RESET_STATE; });
const GET_PRODUCT = "PRODUCT/GET_PRODUCT";
const GET_PRODUCT_SUCCESS = "PRODUCT/GET_PRODUCT_SUCCESS";
const GET_PRODUCT_ERROR = "PRODUCT/GET_PRODUCT_ERROR";
const RESET_STATE = "PRODUCT/RESET_STATE";

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

/***/ "esg2":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getNew; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return getNewSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getNewError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return resetState; });
/* harmony import */ var _constants_new__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("k7wY");

const getNew = newSlug => ({
  type: _constants_new__WEBPACK_IMPORTED_MODULE_0__[/* GET_NEW */ "a"],
  newSlug
});
const getNewSuccess = post => ({
  type: _constants_new__WEBPACK_IMPORTED_MODULE_0__[/* GET_NEW_SUCCESS */ "c"],
  post
});
const getNewError = errorMessage => ({
  type: _constants_new__WEBPACK_IMPORTED_MODULE_0__[/* GET_NEW_ERROR */ "b"],
  errorMessage
});
const resetState = () => ({
  type: _constants_new__WEBPACK_IMPORTED_MODULE_0__[/* RESET_STATE */ "d"]
});

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

/***/ "gLZk":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GET_FAQS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return GET_FAQS_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return GET_FAQS_ERROR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return RESET_STATE; });
const GET_FAQS = "FAQS/GET_FAQS";
const GET_FAQS_SUCCESS = "FAQS/GET_FAQS_SUCCESS";
const GET_FAQS_ERROR = "FAQS/GET_FAQS_ERROR";
const RESET_STATE = "FAQS/RESET_STATE";

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

/***/ "jDDT":
/***/ (function(module, exports) {



/***/ }),

/***/ "k7wY":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GET_NEW; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return GET_NEW_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return GET_NEW_ERROR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return RESET_STATE; });
const GET_NEW = "NEW/GET_NEW";
const GET_NEW_SUCCESS = "NEW/GET_NEW_SUCCESS";
const GET_NEW_ERROR = "NEW/GET_NEW_ERROR";
const RESET_STATE = "NEW/RESET_STATE";

/***/ }),

/***/ "kYf9":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/utils.js");

/***/ }),

/***/ "lDjm":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GET_PRODUCTS_SALE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return GET_PRODUCTS_SALE_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return GET_PRODUCTS_SALE_ERROR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return RESET_STATE; });
const GET_PRODUCTS_SALE = "SALES/GET_PRODUCTS_SALE";
const GET_PRODUCTS_SALE_SUCCESS = "SALES/GET_PRODUCTS_SALE_SUCCESS";
const GET_PRODUCTS_SALE_ERROR = "SALES/GET_PRODUCTS_SALE_ERROR";
const RESET_STATE = "SALES/RESET_STATE";

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

/***/ "nSkU":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getUserInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getUserInfoSuccess; });
/* unused harmony export changeLoginInfo */
/* unused harmony export changeRegisterInfo */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return login; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return loginSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return loginError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return register; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return registerSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return registerError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return logout; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return updateUserInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return updateUserInfoSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return updateUserInfoError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return updatePassword; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return updatePasswordSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return updatePasswordError; });
/* harmony import */ var _constants_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("8FJ3");

const getUserInfo = accessToken => ({
  type: _constants_auth__WEBPACK_IMPORTED_MODULE_0__[/* GET_USER_INFO */ "c"],
  accessToken
});
const getUserInfoSuccess = userInfo => ({
  type: _constants_auth__WEBPACK_IMPORTED_MODULE_0__[/* GET_USER_INFO_SUCCESS */ "d"],
  userInfo
});
const changeLoginInfo = (prop, value) => ({
  type: _constants_auth__WEBPACK_IMPORTED_MODULE_0__[/* CHANGE_LOGIN_INFO */ "a"],
  prop,
  value
});
const changeRegisterInfo = (prop, value) => ({
  type: _constants_auth__WEBPACK_IMPORTED_MODULE_0__[/* CHANGE_REGISTER_INFO */ "b"],
  prop,
  value
});
const login = (phone, password) => ({
  type: _constants_auth__WEBPACK_IMPORTED_MODULE_0__[/* LOGIN */ "e"],
  phone,
  password
});
const loginSuccess = userInfo => ({
  type: _constants_auth__WEBPACK_IMPORTED_MODULE_0__[/* LOGIN_SUCCESS */ "g"],
  userInfo
});
const loginError = errorMessage => ({
  type: _constants_auth__WEBPACK_IMPORTED_MODULE_0__[/* LOGIN_ERROR */ "f"],
  errorMessage
});
const register = registerInfo => ({
  type: _constants_auth__WEBPACK_IMPORTED_MODULE_0__[/* REGISTER */ "i"],
  registerInfo
});
const registerSuccess = userInfo => ({
  type: _constants_auth__WEBPACK_IMPORTED_MODULE_0__[/* REGISTER_SUCCESS */ "k"],
  userInfo
});
const registerError = errorMessage => ({
  type: _constants_auth__WEBPACK_IMPORTED_MODULE_0__[/* REGISTER_ERROR */ "j"],
  errorMessage
});
const logout = () => ({
  type: _constants_auth__WEBPACK_IMPORTED_MODULE_0__[/* LOGOUT */ "h"]
});
const updateUserInfo = (userId, userInfo) => ({
  type: _constants_auth__WEBPACK_IMPORTED_MODULE_0__[/* UPDATE_USER_INFO */ "o"],
  userId,
  userInfo
});
const updateUserInfoSuccess = userInfo => ({
  type: _constants_auth__WEBPACK_IMPORTED_MODULE_0__[/* UPDATE_USER_INFO_SUCCESS */ "q"],
  userInfo
});
const updateUserInfoError = errorMessage => ({
  type: _constants_auth__WEBPACK_IMPORTED_MODULE_0__[/* UPDATE_USER_INFO_ERROR */ "p"],
  errorMessage
});
const updatePassword = passwordData => ({
  type: _constants_auth__WEBPACK_IMPORTED_MODULE_0__[/* UPDATE_PASSWORD */ "l"],
  passwordData
});
const updatePasswordSuccess = () => ({
  type: _constants_auth__WEBPACK_IMPORTED_MODULE_0__[/* UPDATE_PASSWORD_SUCCESS */ "n"]
});
const updatePasswordError = errorMessage => ({
  type: _constants_auth__WEBPACK_IMPORTED_MODULE_0__[/* UPDATE_PASSWORD_ERROR */ "m"],
  errorMessage
});

/***/ }),

/***/ "oAEb":
/***/ (function(module, exports) {

module.exports = require("react-toastify");

/***/ }),

/***/ "pEZS":
/***/ (function(module, exports) {

module.exports = require("next-redux-saga");

/***/ }),

/***/ "pv/X":
/***/ (function(module, exports) {

module.exports = require("es6-promise");

/***/ }),

/***/ "rKB8":
/***/ (function(module, exports) {

module.exports = require("redux");

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

/***/ "wMW/":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return forgotPassword; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return forgotPasswordSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return forgotPasswordError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return forgotPasswordConfirmation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return forgotPasswordConfirmationSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return forgotPasswordConfirmationError; });
/* unused harmony export resetState */
/* harmony import */ var _constants_forgotPassword__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("VZVu");

const forgotPassword = username => ({
  type: _constants_forgotPassword__WEBPACK_IMPORTED_MODULE_0__[/* FORGOT_PASSWORD */ "a"],
  username
});
const forgotPasswordSuccess = () => ({
  type: _constants_forgotPassword__WEBPACK_IMPORTED_MODULE_0__[/* FORGOT_PASSWORD_SUCCESS */ "f"]
});
const forgotPasswordError = errorMessage => ({
  type: _constants_forgotPassword__WEBPACK_IMPORTED_MODULE_0__[/* FORGOT_PASSWORD_ERROR */ "e"],
  errorMessage
});
const forgotPasswordConfirmation = (token, password) => ({
  type: _constants_forgotPassword__WEBPACK_IMPORTED_MODULE_0__[/* FORGOT_PASSWORD_CONFIRMATION */ "b"],
  token,
  password
});
const forgotPasswordConfirmationSuccess = () => ({
  type: _constants_forgotPassword__WEBPACK_IMPORTED_MODULE_0__[/* FORGOT_PASSWORD_CONFIRMATION_SUCCESS */ "d"]
});
const forgotPasswordConfirmationError = errorMessage => ({
  type: _constants_forgotPassword__WEBPACK_IMPORTED_MODULE_0__[/* FORGOT_PASSWORD_CONFIRMATION_ERROR */ "c"],
  errorMessage
});
const resetState = () => ({
  type: _constants_forgotPassword__WEBPACK_IMPORTED_MODULE_0__[/* RESET_STATE */ "g"]
});

/***/ }),

/***/ "wkBG":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
exports.__esModule=true;exports.normalizePathSep=normalizePathSep;exports.denormalizePagePath=denormalizePagePath;function normalizePathSep(path){return path.replace(/\\/g,'/');}function denormalizePagePath(page){page=normalizePathSep(page);if(page.startsWith('/index/')){page=page.slice(6);}else if(page==='/index'){page='/';}return page;}
//# sourceMappingURL=denormalize-page-path.js.map

/***/ }),

/***/ "xcIm":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return getEventSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getEventError; });
/* unused harmony export joinEvent */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return joinEventSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return joinEventError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return resetState; });
/* harmony import */ var _constants_event__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("CqCk");

const getEvent = eventSlug => ({
  type: _constants_event__WEBPACK_IMPORTED_MODULE_0__[/* GET_EVENT */ "a"],
  eventSlug
});
const getEventSuccess = event => ({
  type: _constants_event__WEBPACK_IMPORTED_MODULE_0__[/* GET_EVENT_SUCCESS */ "c"],
  event
});
const getEventError = errorMessage => ({
  type: _constants_event__WEBPACK_IMPORTED_MODULE_0__[/* GET_EVENT_ERROR */ "b"],
  errorMessage
});
const joinEvent = eventId => ({
  type: _constants_event__WEBPACK_IMPORTED_MODULE_0__[/* JOIN_EVENT */ "d"],
  eventId
});
const joinEventSuccess = event => ({
  type: _constants_event__WEBPACK_IMPORTED_MODULE_0__[/* JOIN_EVENT_SUCCESS */ "f"],
  event
});
const joinEventError = errorMessage => ({
  type: _constants_event__WEBPACK_IMPORTED_MODULE_0__[/* JOIN_EVENT_ERROR */ "e"],
  errorMessage
});
const resetState = () => ({
  type: _constants_event__WEBPACK_IMPORTED_MODULE_0__[/* RESET_STATE */ "g"]
});

/***/ })

/******/ });