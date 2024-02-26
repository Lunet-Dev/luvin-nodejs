'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _category = require('./category.model');

var _category2 = _interopRequireDefault(_category);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  upsertCategory: function upsertCategory(ident, categoryData) {
    var _this = this;

    return (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
      var category;
      return _regenerator2.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return _category2.default.findOneAndUpdate({ ident: ident }, { $set: categoryData }, { upsert: true, new: true, setDefaultsOnInsert: true }).lean();

            case 3:
              category = _context.sent;
              return _context.abrupt('return', category);

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
  createCategory: function createCategory(categoryData) {
    var _this2 = this;

    return (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2() {
      var category;
      return _regenerator2.default.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              _context2.next = 3;
              return new _category2.default(categoryData).save();

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
  deleteCategory: function deleteCategory(ident) {
    var _this3 = this;

    return (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3() {
      var result;
      return _regenerator2.default.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.prev = 0;
              _context3.next = 3;
              return _category2.default.deleteOne({ ident: ident });

            case 3:
              result = _context3.sent;
              return _context3.abrupt('return', result);

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
  getAllCategories: function getAllCategories() {
    var _this4 = this;

    return (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee4() {
      var categories;
      return _regenerator2.default.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _context4.prev = 0;
              _context4.next = 3;
              return _category2.default.find({}).lean();

            case 3:
              categories = _context4.sent;
              return _context4.abrupt('return', categories);

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
  findCategoryBySlug: function findCategoryBySlug(slug) {
    var _this5 = this;

    return (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee5() {
      var category;
      return _regenerator2.default.wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              _context5.prev = 0;
              _context5.next = 3;
              return _category2.default.findOne({ slug: slug }).lean();

            case 3:
              category = _context5.sent;
              return _context5.abrupt('return', category);

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
  findCategoryByIdent: function findCategoryByIdent(ident) {
    var _this6 = this;

    return (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee6() {
      var category;
      return _regenerator2.default.wrap(function _callee6$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              _context6.prev = 0;
              _context6.next = 3;
              return _category2.default.findOne({ ident: ident }).lean();

            case 3:
              category = _context6.sent;
              return _context6.abrupt('return', category);

            case 7:
              _context6.prev = 7;
              _context6.t0 = _context6['catch'](0);
              throw _context6.t0;

            case 10:
            case 'end':
              return _context6.stop();
          }
        }
      }, _callee6, _this6, [[0, 7]]);
    }))();
  }
};