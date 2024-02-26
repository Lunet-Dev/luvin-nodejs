'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _category = require('./category.manager');

var _category2 = _interopRequireDefault(_category);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  getAllCategories: function getAllCategories(req, res, next) {
    var _this = this;

    return (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
      var result;
      return _regenerator2.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return _category2.default.getAllCategories();

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
  updateCategory: function updateCategory(req, res, next) {
    var _this2 = this;

    return (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2() {
      var ident, categoryData, result;
      return _regenerator2.default.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              ident = req.params.ident;
              categoryData = req.body;
              _context2.next = 5;
              return _category2.default.upsertCategory(ident, categoryData);

            case 5:
              result = _context2.sent;
              return _context2.abrupt('return', res.status(200).json({ data: result }));

            case 9:
              _context2.prev = 9;
              _context2.t0 = _context2['catch'](0);
              return _context2.abrupt('return', res.status(400).json({ message: _context2.t0.message }));

            case 12:
            case 'end':
              return _context2.stop();
          }
        }
      }, _callee2, _this2, [[0, 9]]);
    }))();
  }
};