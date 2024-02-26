'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _product = require('./product.model');

var _product2 = _interopRequireDefault(_product);

var _category = require('../category/category.manager');

var _category2 = _interopRequireDefault(_category);

var _luvinMenu = require('../../services/luvin-menu');

var _buildPaginationQuery = require('../../lib/build-pagination-query');

var _buildPaginationQuery2 = _interopRequireDefault(_buildPaginationQuery);

var _makeObjectId = require('../../lib/make-object-id');

var _makeObjectId2 = _interopRequireDefault(_makeObjectId);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  syncWithLuvin: function syncWithLuvin() {
    var _this = this;

    return (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
      var result;
      return _regenerator2.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return (0, _luvinMenu.syncMenu)();

            case 3:
              result = _context.sent;
              return _context.abrupt('return', result);

            case 7:
              _context.prev = 7;
              _context.t0 = _context['catch'](0);
              throw _context.t0;

            case 10:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, _this, [[0, 7]]);
    }))();
  },
  upsertProduct: function upsertProduct(ident, productData) {
    var _this2 = this;

    return (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2() {
      var category;
      return _regenerator2.default.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              _context2.next = 3;
              return _product2.default.findOneAndUpdate({ ident: ident }, { $set: productData }, { upsert: true, new: true, setDefaultsOnInsert: true }).lean();

            case 3:
              category = _context2.sent;
              return _context2.abrupt('return', category);

            case 7:
              _context2.prev = 7;
              _context2.t0 = _context2['catch'](0);
              throw _context2.t0;

            case 10:
            case 'end':
              return _context2.stop();
          }
        }
      }, _callee2, _this2, [[0, 7]]);
    }))();
  },
  createProduct: function createProduct(productData) {
    var _this3 = this;

    return (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3() {
      var product;
      return _regenerator2.default.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.prev = 0;
              _context3.next = 3;
              return new _product2.default(productData).save();

            case 3:
              product = _context3.sent;
              return _context3.abrupt('return', product);

            case 7:
              _context3.prev = 7;
              _context3.t0 = _context3['catch'](0);
              throw _context3.t0;

            case 10:
            case 'end':
              return _context3.stop();
          }
        }
      }, _callee3, _this3, [[0, 7]]);
    }))();
  },
  getProductBySlug: function getProductBySlug(slug) {
    var _this4 = this;

    return (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee4() {
      var product;
      return _regenerator2.default.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _context4.prev = 0;
              _context4.next = 3;
              return _product2.default.findOne({ slug: slug }).populate('reviews').lean();

            case 3:
              product = _context4.sent;
              return _context4.abrupt('return', product);

            case 7:
              _context4.prev = 7;
              _context4.t0 = _context4['catch'](0);
              throw _context4.t0;

            case 10:
            case 'end':
              return _context4.stop();
          }
        }
      }, _callee4, _this4, [[0, 7]]);
    }))();
  },
  deleteProduct: function deleteProduct(ident) {
    var _this5 = this;

    return (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee5() {
      var result;
      return _regenerator2.default.wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              _context5.prev = 0;
              _context5.next = 3;
              return _product2.default.remove({ ident: ident });

            case 3:
              result = _context5.sent;
              return _context5.abrupt('return', result);

            case 7:
              _context5.prev = 7;
              _context5.t0 = _context5['catch'](0);
              throw _context5.t0;

            case 10:
            case 'end':
              return _context5.stop();
          }
        }
      }, _callee5, _this5, [[0, 7]]);
    }))();
  },
  findProductsByCategorySlug: function findProductsByCategorySlug(categorySlug, limit, page) {
    var sort = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 'descTime';

    var _this6 = this;

    var type = arguments[4];
    var origin = arguments[5];
    return (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee6() {
      var category, conditions, query, products;
      return _regenerator2.default.wrap(function _callee6$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              _context6.prev = 0;
              _context6.next = 3;
              return _category2.default.findCategoryBySlug(categorySlug);

            case 3:
              category = _context6.sent;
              conditions = { category: category._id };

              if (type) {
                conditions.type = type;
              }
              if (origin) {
                conditions.origin = origin;
              }
              query = _product2.default.find(conditions);

              if (sort === 'descTime') {
                query = query.sort({ createdAt: -1 });
              } else if (sort === 'descPrice') {
                query = query.sort({ price: -1 });
              } else if (sort === 'ascPrice') {
                query = query.sort({ price: 1 });
              }
              query = (0, _buildPaginationQuery2.default)(query, limit, page);
              _context6.next = 12;
              return query.populate('reviews').lean().exec();

            case 12:
              products = _context6.sent;
              return _context6.abrupt('return', products);

            case 16:
              _context6.prev = 16;
              _context6.t0 = _context6['catch'](0);
              throw _context6.t0;

            case 19:
            case 'end':
              return _context6.stop();
          }
        }
      }, _callee6, _this6, [[0, 16]]);
    }))();
  },
  countProductsByCategorySlug: function countProductsByCategorySlug(categorySlug, type, origin) {
    var _this7 = this;

    return (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee7() {
      var category, conditions, count;
      return _regenerator2.default.wrap(function _callee7$(_context7) {
        while (1) {
          switch (_context7.prev = _context7.next) {
            case 0:
              _context7.prev = 0;
              _context7.next = 3;
              return _category2.default.findCategoryBySlug(categorySlug);

            case 3:
              category = _context7.sent;
              conditions = { category: (0, _makeObjectId2.default)(category._id) };

              if (type) {
                conditions.type = type;
              }
              if (origin) {
                conditions.origin = origin;
              }
              _context7.next = 9;
              return _product2.default.count(conditions);

            case 9:
              count = _context7.sent;
              return _context7.abrupt('return', count);

            case 13:
              _context7.prev = 13;
              _context7.t0 = _context7['catch'](0);
              throw _context7.t0;

            case 16:
            case 'end':
              return _context7.stop();
          }
        }
      }, _callee7, _this7, [[0, 13]]);
    }))();
  },
  findProductsSale: function findProductsSale(limit, page) {
    var _this8 = this;

    return (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee8() {
      var query, products;
      return _regenerator2.default.wrap(function _callee8$(_context8) {
        while (1) {
          switch (_context8.prev = _context8.next) {
            case 0:
              _context8.prev = 0;
              query = _product2.default.find({ discount: { $ne: 0 } });

              query = (0, _buildPaginationQuery2.default)(query, limit, page);
              _context8.next = 5;
              return query.populate('reviews').populate('category').lean().exec();

            case 5:
              products = _context8.sent;
              return _context8.abrupt('return', products);

            case 9:
              _context8.prev = 9;
              _context8.t0 = _context8['catch'](0);
              throw _context8.t0;

            case 12:
            case 'end':
              return _context8.stop();
          }
        }
      }, _callee8, _this8, [[0, 9]]);
    }))();
  },
  countProductsSale: function countProductsSale() {
    var _this9 = this;

    return (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee9() {
      var count;
      return _regenerator2.default.wrap(function _callee9$(_context9) {
        while (1) {
          switch (_context9.prev = _context9.next) {
            case 0:
              _context9.prev = 0;
              _context9.next = 3;
              return _product2.default.count({ discount: { $ne: 0 } });

            case 3:
              count = _context9.sent;
              return _context9.abrupt('return', count);

            case 7:
              _context9.prev = 7;
              _context9.t0 = _context9['catch'](0);
              throw _context9.t0;

            case 10:
            case 'end':
              return _context9.stop();
          }
        }
      }, _callee9, _this9, [[0, 7]]);
    }))();
  },
  findProductByIdents: function findProductByIdents(idents) {
    var _this10 = this;

    return (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee10() {
      var products;
      return _regenerator2.default.wrap(function _callee10$(_context10) {
        while (1) {
          switch (_context10.prev = _context10.next) {
            case 0:
              _context10.prev = 0;
              _context10.next = 3;
              return _product2.default.find({
                ident: { $in: idents }
              }).lean();

            case 3:
              products = _context10.sent;
              return _context10.abrupt('return', products);

            case 7:
              _context10.prev = 7;
              _context10.t0 = _context10['catch'](0);
              throw _context10.t0;

            case 10:
            case 'end':
              return _context10.stop();
          }
        }
      }, _callee10, _this10, [[0, 7]]);
    }))();
  },
  findProductsByName: function findProductsByName(name, limit, page) {
    var _this11 = this;

    return (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee11() {
      var conditions, query, products;
      return _regenerator2.default.wrap(function _callee11$(_context11) {
        while (1) {
          switch (_context11.prev = _context11.next) {
            case 0:
              _context11.prev = 0;
              conditions = { name: new RegExp(name, 'i') };
              query = _product2.default.find(conditions);

              query = (0, _buildPaginationQuery2.default)(query, limit, page);
              _context11.next = 6;
              return query.populate('reviews').populate('category').lean().exec();

            case 6:
              products = _context11.sent;
              return _context11.abrupt('return', products);

            case 10:
              _context11.prev = 10;
              _context11.t0 = _context11['catch'](0);
              throw _context11.t0;

            case 13:
            case 'end':
              return _context11.stop();
          }
        }
      }, _callee11, _this11, [[0, 10]]);
    }))();
  },
  countProductsByName: function countProductsByName(name) {
    var _this12 = this;

    return (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee12() {
      var count;
      return _regenerator2.default.wrap(function _callee12$(_context12) {
        while (1) {
          switch (_context12.prev = _context12.next) {
            case 0:
              _context12.prev = 0;
              _context12.next = 3;
              return _product2.default.count({
                name: new RegExp(name, 'i')
              });

            case 3:
              count = _context12.sent;
              return _context12.abrupt('return', count);

            case 7:
              _context12.prev = 7;
              _context12.t0 = _context12['catch'](0);
              throw _context12.t0;

            case 10:
            case 'end':
              return _context12.stop();
          }
        }
      }, _callee12, _this12, [[0, 7]]);
    }))();
  },
  findProducts: function findProducts(name, limit, page, category, type, origin, discount) {
    var _this13 = this;

    return (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee13() {
      var conditions, query, products;
      return _regenerator2.default.wrap(function _callee13$(_context13) {
        while (1) {
          switch (_context13.prev = _context13.next) {
            case 0:
              _context13.prev = 0;
              conditions = {};

              if (category) {
                conditions.category = (0, _makeObjectId2.default)(category);
              }
              if (name) {
                conditions.name = new RegExp(name, 'i');
              }
              if (type) {
                conditions.type = type;
              }
              if (origin) {
                conditions.origin = origin;
              }
              if (discount) {
                conditions.discount = { $ne: 0 };
              }
              query = _product2.default.find(conditions);

              query = (0, _buildPaginationQuery2.default)(query, limit, page);
              _context13.next = 11;
              return query.populate('reviews').populate('category').lean().exec();

            case 11:
              products = _context13.sent;
              return _context13.abrupt('return', products);

            case 15:
              _context13.prev = 15;
              _context13.t0 = _context13['catch'](0);
              throw _context13.t0;

            case 18:
            case 'end':
              return _context13.stop();
          }
        }
      }, _callee13, _this13, [[0, 15]]);
    }))();
  },
  countProducts: function countProducts(name, category, type, origin, discount) {
    var _this14 = this;

    return (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee14() {
      var conditions, count;
      return _regenerator2.default.wrap(function _callee14$(_context14) {
        while (1) {
          switch (_context14.prev = _context14.next) {
            case 0:
              _context14.prev = 0;
              conditions = {};

              if (category) {
                conditions.category = (0, _makeObjectId2.default)(category);
              }
              if (name) {
                conditions.name = new RegExp(name, 'i');
              }
              if (type) {
                conditions.type = type;
              }
              if (origin) {
                conditions.origin = origin;
              }
              if (discount) {
                conditions.discount = { $ne: 0 };
              }
              _context14.next = 9;
              return _product2.default.count(conditions);

            case 9:
              count = _context14.sent;
              return _context14.abrupt('return', count);

            case 13:
              _context14.prev = 13;
              _context14.t0 = _context14['catch'](0);
              throw _context14.t0;

            case 16:
            case 'end':
              return _context14.stop();
          }
        }
      }, _callee14, _this14, [[0, 13]]);
    }))();
  }
};