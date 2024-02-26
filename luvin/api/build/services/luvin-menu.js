'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.syncMenu = undefined;

var _slicedToArray2 = require('babel-runtime/helpers/slicedToArray');

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _includes = require('lodash/includes');

var _includes2 = _interopRequireDefault(_includes);

var _nodeFetch = require('node-fetch');

var _nodeFetch2 = _interopRequireDefault(_nodeFetch);

var _xmlJs = require('xml-js');

var _xmlJs2 = _interopRequireDefault(_xmlJs);

var _slugify = require('slugify');

var _slugify2 = _interopRequireDefault(_slugify);

var _category = require('../modules/category/category.manager');

var _category2 = _interopRequireDefault(_category);

var _product = require('../modules/product/product.manager');

var _product2 = _interopRequireDefault(_product);

var _keys = require('../config/keys');

var _keys2 = _interopRequireDefault(_keys);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CATEGORIES_GUID_ACCEPTED = ['{78672314-6913-4BA1-BE63-AACBA4A5698F}', '{6193E7F6-5426-40B0-9DC0-DCDDD4D1A188}', '{BB53254F-E248-4519-8601-627552616936}', '{6456D3FB-2D41-41F3-9CA7-E22FE645C5BE}'];

var apiMenuEndPoint = _keys2.default.app.apiMenuEndPoint;


var getProducts = function () {
  var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
    var body, response, results, jsonObj;
    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            body = '\n      <?xml version="1.0" encoding="utf-8"?>\n      <RK7Query>\n          <RK7CMD CMD="GetRefData" RefName="MenuItems" PropMask="items.(Code,Name,Price)"/>\n      </RK7Query>\n    ';
            _context.next = 4;
            return (0, _nodeFetch2.default)(apiMenuEndPoint, {
              method: 'POST',
              headers: {
                'Content-Type': 'application/xml',
                'Content-Length': Buffer.byteLength(body)
              },
              body: body
            });

          case 4:
            response = _context.sent;

            if (!(response.status === 200)) {
              _context.next = 11;
              break;
            }

            _context.next = 8;
            return response.text();

          case 8:
            results = _context.sent;
            jsonObj = _xmlJs2.default.xml2js(results, { compact: true, spaces: 4 });
            return _context.abrupt('return', jsonObj.RK7QueryResult.RK7Reference.Items.Item.filter(function (_ref2) {
              var _ref2$_attributes = _ref2._attributes,
                  Ident = _ref2$_attributes.Ident,
                  Name = _ref2$_attributes.Name;
              return Ident && Name;
            }).map(function (_ref3) {
              var _ref3$_attributes = _ref3._attributes,
                  Ident = _ref3$_attributes.Ident,
                  Name = _ref3$_attributes.Name,
                  Code = _ref3$_attributes.Code;
              return {
                ident: Ident,
                name: Name,
                code: Code
              };
            }));

          case 11:
            _context.next = 16;
            break;

          case 13:
            _context.prev = 13;
            _context.t0 = _context['catch'](0);
            throw _context.t0;

          case 16:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, undefined, [[0, 13]]);
  }));

  return function getProducts() {
    return _ref.apply(this, arguments);
  };
}();

var getPrices = function () {
  var _ref4 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2() {
    var body, response, results, jsonObj, prices;
    return _regenerator2.default.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            body = '\n    <?xml version="1.0" encoding="utf-8"?>\n    <RK7Query>\n        <RK7CMD CMD="GetRefData" RefName="PRICES"/>\n    </RK7Query>\n    ';
            _context2.next = 4;
            return (0, _nodeFetch2.default)(apiMenuEndPoint, {
              method: 'POST',
              headers: {
                'Content-Type': 'application/xml',
                'Content-Length': Buffer.byteLength(body)
              },
              body: body
            });

          case 4:
            response = _context2.sent;

            if (!(response.status === 200)) {
              _context2.next = 13;
              break;
            }

            _context2.next = 8;
            return response.text();

          case 8:
            results = _context2.sent;
            jsonObj = _xmlJs2.default.xml2js(results, { compact: true, spaces: 4 });
            prices = {};

            jsonObj.RK7QueryResult.RK7Reference.Items.Item.map(function (_ref5) {
              var _ref5$_attributes = _ref5._attributes,
                  ObjectID = _ref5$_attributes.ObjectID,
                  Value = _ref5$_attributes.Value;

              prices[ObjectID] = Value;
            });
            // console.log('jsonObj', jsonObj);
            return _context2.abrupt('return', prices);

          case 13:
            _context2.next = 18;
            break;

          case 15:
            _context2.prev = 15;
            _context2.t0 = _context2['catch'](0);
            throw _context2.t0;

          case 18:
          case 'end':
            return _context2.stop();
        }
      }
    }, _callee2, undefined, [[0, 15]]);
  }));

  return function getPrices() {
    return _ref4.apply(this, arguments);
  };
}();

var getCategories = function () {
  var _ref6 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3() {
    var body, response, results, jsonObj, categoriesAccepted, categoriesBeauty;
    return _regenerator2.default.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            body = '\n      <?xml version="1.0" encoding="utf-8"?>\n      <RK7Query>\n      <RK7CMD CMD="GetRefData" RefName="CLASSIFICATORGROUPS"/>\n      </RK7Query>\n    ';
            _context3.next = 4;
            return (0, _nodeFetch2.default)(apiMenuEndPoint, {
              method: 'POST',
              headers: {
                'Content-Type': 'application/xml',
                'Content-Length': Buffer.byteLength(body)
              },
              body: body
            });

          case 4:
            response = _context3.sent;

            if (!(response.status === 200)) {
              _context3.next = 13;
              break;
            }

            _context3.next = 8;
            return response.text();

          case 8:
            results = _context3.sent;
            jsonObj = _xmlJs2.default.xml2js(results, { compact: true, spaces: 4 });
            categoriesAccepted = jsonObj.RK7QueryResult.RK7Reference.Items.Item.filter(function (_ref7) {
              var GUIDString = _ref7._attributes.GUIDString;

              return (0, _includes2.default)(CATEGORIES_GUID_ACCEPTED, GUIDString);
            });
            categoriesBeauty = categoriesAccepted.map(function (_ref8) {
              var _attributes = _ref8._attributes,
                  Childs = _ref8.Childs;

              return {
                ident: _attributes.Ident,
                guid: _attributes.GUIDString,
                name: _attributes.Name,
                products: Childs.Child.map(function (_ref9) {
                  var ChildIdent = _ref9._attributes.ChildIdent;
                  return ChildIdent;
                })
              };
            });
            return _context3.abrupt('return', categoriesBeauty);

          case 13:
            _context3.next = 18;
            break;

          case 15:
            _context3.prev = 15;
            _context3.t0 = _context3['catch'](0);
            throw _context3.t0;

          case 18:
          case 'end':
            return _context3.stop();
        }
      }
    }, _callee3, undefined, [[0, 15]]);
  }));

  return function getCategories() {
    return _ref6.apply(this, arguments);
  };
}();

var upsertCategories = function () {
  var _ref10 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee5(rawCategories) {
    var tasks, results;
    return _regenerator2.default.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.prev = 0;
            tasks = rawCategories.map(function () {
              var _ref11 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee4(_ref12) {
                var ident = _ref12.ident,
                    guid = _ref12.guid,
                    name = _ref12.name;
                var cate, data;
                return _regenerator2.default.wrap(function _callee4$(_context4) {
                  while (1) {
                    switch (_context4.prev = _context4.next) {
                      case 0:
                        _context4.next = 2;
                        return _category2.default.findCategoryByIdent(ident);

                      case 2:
                        cate = _context4.sent;
                        data = {
                          guid: guid,
                          ident: ident,
                          slug: (0, _slugify2.default)(name.toLowerCase(), '-')
                        };

                        if (!cate) {
                          data.name = name;
                        }
                        return _context4.abrupt('return', _category2.default.upsertCategory(ident, data));

                      case 6:
                      case 'end':
                        return _context4.stop();
                    }
                  }
                }, _callee4, undefined);
              }));

              return function (_x2) {
                return _ref11.apply(this, arguments);
              };
            }());
            _context5.next = 4;
            return Promise.all(tasks);

          case 4:
            results = _context5.sent;
            return _context5.abrupt('return', results);

          case 8:
            _context5.prev = 8;
            _context5.t0 = _context5['catch'](0);
            throw _context5.t0;

          case 11:
          case 'end':
            return _context5.stop();
        }
      }
    }, _callee5, undefined, [[0, 8]]);
  }));

  return function upsertCategories(_x) {
    return _ref10.apply(this, arguments);
  };
}();

var upsertProducts = function () {
  var _ref13 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee8(rawCategories, categories, rawProducts, rawPrices) {
    var tasks, results;
    return _regenerator2.default.wrap(function _callee8$(_context8) {
      while (1) {
        switch (_context8.prev = _context8.next) {
          case 0:
            _context8.prev = 0;
            tasks = categories.map(function () {
              var _ref14 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee7(_ref15) {
                var _id = _ref15._id,
                    guid = _ref15.guid;

                var _ref16, _ref16$products, productsInCategory, saveProductsOfCategory, result;

                return _regenerator2.default.wrap(function _callee7$(_context7) {
                  while (1) {
                    switch (_context7.prev = _context7.next) {
                      case 0:
                        _ref16 = rawCategories.find(function (category) {
                          return guid == category.guid;
                        }) || {}, _ref16$products = _ref16.products, productsInCategory = _ref16$products === undefined ? [] : _ref16$products;
                        saveProductsOfCategory = productsInCategory.map(function () {
                          var _ref17 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee6(productIdent) {
                            var price, _ref18, name, code, slug, realPrice;

                            return _regenerator2.default.wrap(function _callee6$(_context6) {
                              while (1) {
                                switch (_context6.prev = _context6.next) {
                                  case 0:
                                    price = rawPrices[productIdent];
                                    _ref18 = rawProducts.find(function (_ref19) {
                                      var ident = _ref19.ident;
                                      return ident == productIdent;
                                    }) || {}, name = _ref18.name, code = _ref18.code;

                                    if (name) {
                                      _context6.next = 4;
                                      break;
                                    }

                                    return _context6.abrupt('return');

                                  case 4:
                                    slug = (0, _slugify2.default)(name.toLowerCase(), '-');
                                    realPrice = Math.ceil(parseInt(price) / 100);
                                    return _context6.abrupt('return', _product2.default.upsertProduct(productIdent, {
                                      name: name,
                                      code: code,
                                      price: realPrice + realPrice / 10,
                                      slug: slug,
                                      category: _id
                                    }));

                                  case 7:
                                  case 'end':
                                    return _context6.stop();
                                }
                              }
                            }, _callee6, undefined);
                          }));

                          return function (_x8) {
                            return _ref17.apply(this, arguments);
                          };
                        }());
                        _context7.next = 4;
                        return Promise.allSettled(saveProductsOfCategory);

                      case 4:
                        result = _context7.sent;
                        return _context7.abrupt('return', result);

                      case 6:
                      case 'end':
                        return _context7.stop();
                    }
                  }
                }, _callee7, undefined);
              }));

              return function (_x7) {
                return _ref14.apply(this, arguments);
              };
            }());
            _context8.next = 4;
            return Promise.allSettled(tasks);

          case 4:
            results = _context8.sent;
            return _context8.abrupt('return', results);

          case 8:
            _context8.prev = 8;
            _context8.t0 = _context8['catch'](0);
            throw _context8.t0;

          case 11:
          case 'end':
            return _context8.stop();
        }
      }
    }, _callee8, undefined, [[0, 8]]);
  }));

  return function upsertProducts(_x3, _x4, _x5, _x6) {
    return _ref13.apply(this, arguments);
  };
}();

var syncMenu = function () {
  var _ref20 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee9() {
    var _ref21, _ref22, rawProducts, rawPrices, rawCategories, categories, products;

    return _regenerator2.default.wrap(function _callee9$(_context9) {
      while (1) {
        switch (_context9.prev = _context9.next) {
          case 0:
            _context9.prev = 0;
            _context9.next = 3;
            return Promise.all([getProducts(), getPrices(), getCategories()]);

          case 3:
            _ref21 = _context9.sent;
            _ref22 = (0, _slicedToArray3.default)(_ref21, 3);
            rawProducts = _ref22[0];
            rawPrices = _ref22[1];
            rawCategories = _ref22[2];
            _context9.next = 10;
            return upsertCategories(rawCategories);

          case 10:
            categories = _context9.sent;
            _context9.next = 13;
            return upsertProducts(rawCategories, categories, rawProducts, rawPrices);

          case 13:
            products = _context9.sent;
            return _context9.abrupt('return', products);

          case 17:
            _context9.prev = 17;
            _context9.t0 = _context9['catch'](0);

            console.error(_context9.t0);
            throw _context9.t0;

          case 21:
          case 'end':
            return _context9.stop();
        }
      }
    }, _callee9, undefined, [[0, 17]]);
  }));

  return function syncMenu() {
    return _ref20.apply(this, arguments);
  };
}();

exports.syncMenu = syncMenu;