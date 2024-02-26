'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray2 = require('babel-runtime/helpers/slicedToArray');

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _product = require('./product.manager');

var _product2 = _interopRequireDefault(_product);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  syncWithLuvin: function syncWithLuvin(req, res, next) {
    var _this = this;

    return (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
      var result;
      return _regenerator2.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return _product2.default.syncWithLuvin();

            case 3:
              result = _context.sent;
              return _context.abrupt('return', res.status(200).json({ data: result }));

            case 7:
              _context.prev = 7;
              _context.t0 = _context['catch'](0);
              return _context.abrupt('return', res.status(400).json({ message: _context.t0.message }));

            case 10:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, _this, [[0, 7]]);
    }))();
  },
  getProductsOfCategory: function getProductsOfCategory(req, res, next) {
    var _this2 = this;

    return (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2() {
      var _req$query, _req$query$limit, limit, _req$query$page, page, sort, type, origin, categorySlug, _ref, _ref2, products, count;

      return _regenerator2.default.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              _req$query = req.query, _req$query$limit = _req$query.limit, limit = _req$query$limit === undefined ? 12 : _req$query$limit, _req$query$page = _req$query.page, page = _req$query$page === undefined ? 1 : _req$query$page, sort = _req$query.sort, type = _req$query.type, origin = _req$query.origin;
              categorySlug = req.params.categorySlug;
              _context2.next = 5;
              return Promise.all([_product2.default.findProductsByCategorySlug(categorySlug, limit, page, sort, type, origin), _product2.default.countProductsByCategorySlug(categorySlug, type, origin)]);

            case 5:
              _ref = _context2.sent;
              _ref2 = (0, _slicedToArray3.default)(_ref, 2);
              products = _ref2[0];
              count = _ref2[1];
              return _context2.abrupt('return', res.status(200).json({ data: { total: count, products: products } }));

            case 12:
              _context2.prev = 12;
              _context2.t0 = _context2['catch'](0);
              return _context2.abrupt('return', res.status(400).json({ message: _context2.t0.message }));

            case 15:
            case 'end':
              return _context2.stop();
          }
        }
      }, _callee2, _this2, [[0, 12]]);
    }))();
  },
  getProductsSale: function getProductsSale(req, res, next) {
    var _this3 = this;

    return (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3() {
      var _req$query2, _req$query2$limit, limit, _req$query2$page, page, _ref3, _ref4, products, count;

      return _regenerator2.default.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.prev = 0;
              _req$query2 = req.query, _req$query2$limit = _req$query2.limit, limit = _req$query2$limit === undefined ? 12 : _req$query2$limit, _req$query2$page = _req$query2.page, page = _req$query2$page === undefined ? 1 : _req$query2$page;
              _context3.next = 4;
              return Promise.all([_product2.default.findProductsSale(limit, page), _product2.default.countProductsSale()]);

            case 4:
              _ref3 = _context3.sent;
              _ref4 = (0, _slicedToArray3.default)(_ref3, 2);
              products = _ref4[0];
              count = _ref4[1];
              return _context3.abrupt('return', res.status(200).json({ data: { total: count, products: products } }));

            case 11:
              _context3.prev = 11;
              _context3.t0 = _context3['catch'](0);
              return _context3.abrupt('return', res.status(400).json({ message: _context3.t0.message }));

            case 14:
            case 'end':
              return _context3.stop();
          }
        }
      }, _callee3, _this3, [[0, 11]]);
    }))();
  },
  updateProduct: function updateProduct(req, res, next) {
    var _this4 = this;

    return (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee4() {
      var ident, productData, result;
      return _regenerator2.default.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _context4.prev = 0;
              ident = req.params.ident;
              productData = req.body;
              _context4.next = 5;
              return _product2.default.upsertProduct(ident, productData);

            case 5:
              result = _context4.sent;
              return _context4.abrupt('return', res.status(200).json({ data: result }));

            case 9:
              _context4.prev = 9;
              _context4.t0 = _context4['catch'](0);
              return _context4.abrupt('return', res.status(400).json({ message: _context4.t0.message }));

            case 12:
            case 'end':
              return _context4.stop();
          }
        }
      }, _callee4, _this4, [[0, 9]]);
    }))();
  },
  deleteProduct: function deleteProduct(req, res, next) {
    var _this5 = this;

    return (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee5() {
      var ident, result;
      return _regenerator2.default.wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              _context5.prev = 0;
              ident = req.params.ident;
              _context5.next = 4;
              return _product2.default.deleteProduct(ident);

            case 4:
              result = _context5.sent;
              return _context5.abrupt('return', res.status(200).json({ data: result }));

            case 8:
              _context5.prev = 8;
              _context5.t0 = _context5['catch'](0);
              return _context5.abrupt('return', res.status(400).json({ message: _context5.t0.message }));

            case 11:
            case 'end':
              return _context5.stop();
          }
        }
      }, _callee5, _this5, [[0, 8]]);
    }))();
  },
  getDetailProduct: function getDetailProduct(req, res, next) {
    var _this6 = this;

    return (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee6() {
      var slug, result;
      return _regenerator2.default.wrap(function _callee6$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              _context6.prev = 0;
              slug = req.params.slug;
              _context6.next = 4;
              return _product2.default.getProductBySlug(slug);

            case 4:
              result = _context6.sent;
              return _context6.abrupt('return', res.status(200).json({ data: result }));

            case 8:
              _context6.prev = 8;
              _context6.t0 = _context6['catch'](0);
              return _context6.abrupt('return', res.status(400).json({ message: _context6.t0.message }));

            case 11:
            case 'end':
              return _context6.stop();
          }
        }
      }, _callee6, _this6, [[0, 8]]);
    }))();
  },
  findProduct: function findProduct(req, res, next) {
    var _this7 = this;

    return (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee7() {
      var _req$query3, name, _req$query3$limit, limit, _req$query3$page, page, category, type, origin, discount, _ref5, _ref6, products, count;

      return _regenerator2.default.wrap(function _callee7$(_context7) {
        while (1) {
          switch (_context7.prev = _context7.next) {
            case 0:
              _context7.prev = 0;
              _req$query3 = req.query, name = _req$query3.name, _req$query3$limit = _req$query3.limit, limit = _req$query3$limit === undefined ? 12 : _req$query3$limit, _req$query3$page = _req$query3.page, page = _req$query3$page === undefined ? 1 : _req$query3$page, category = _req$query3.category, type = _req$query3.type, origin = _req$query3.origin, discount = _req$query3.discount;
              _context7.next = 4;
              return Promise.all([_product2.default.findProducts(name, limit, page, category, type, origin, discount), _product2.default.countProducts(name, category, type, origin, discount)]);

            case 4:
              _ref5 = _context7.sent;
              _ref6 = (0, _slicedToArray3.default)(_ref5, 2);
              products = _ref6[0];
              count = _ref6[1];
              return _context7.abrupt('return', res.status(200).json({ data: { total: count, products: products } }));

            case 11:
              _context7.prev = 11;
              _context7.t0 = _context7['catch'](0);
              return _context7.abrupt('return', res.status(400).json({ message: _context7.t0.message }));

            case 14:
            case 'end':
              return _context7.stop();
          }
        }
      }, _callee7, _this7, [[0, 11]]);
    }))();
  }
};