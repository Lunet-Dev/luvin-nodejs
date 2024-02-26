'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _page = require('./page.model');

var _page2 = _interopRequireDefault(_page);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  updatePageSetting: function updatePageSetting(type, pageSetting) {
    var _this = this;

    return (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
      var _pageSetting;

      return _regenerator2.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return _page2.default.findOneAndUpdate({ type: type }, { $set: pageSetting }, { new: true }).lean();

            case 3:
              _pageSetting = _context.sent;
              return _context.abrupt('return', _pageSetting);

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
  getPageSettingByType: function getPageSettingByType(type) {
    var _this2 = this;

    return (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2() {
      var pageSetting;
      return _regenerator2.default.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              _context2.next = 3;
              return _page2.default.findOne({ type: type });

            case 3:
              pageSetting = _context2.sent;
              return _context2.abrupt('return', pageSetting);

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
  getPageSettings: function getPageSettings() {
    var _this3 = this;

    return (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3() {
      var pageSettings;
      return _regenerator2.default.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.prev = 0;
              _context3.next = 3;
              return _page2.default.find({}).lean();

            case 3:
              pageSettings = _context3.sent;
              return _context3.abrupt('return', pageSettings);

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
  }
};