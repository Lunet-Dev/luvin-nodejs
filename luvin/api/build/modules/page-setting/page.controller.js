'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _page = require('./page.manager');

var _page2 = _interopRequireDefault(_page);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  getPage: function getPage(req, res, next) {
    var _this = this;

    return (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
      var type, result;
      return _regenerator2.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              type = req.params.type;
              _context.next = 4;
              return _page2.default.getPageSettingByType(type);

            case 4:
              result = _context.sent;
              return _context.abrupt('return', res.status(200).json({ data: result }));

            case 8:
              _context.prev = 8;
              _context.t0 = _context['catch'](0);
              return _context.abrupt('return', res.status(400).json({ message: _context.t0.message }));

            case 11:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, _this, [[0, 8]]);
    }))();
  },
  getPages: function getPages(req, res, next) {
    var _this2 = this;

    return (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2() {
      var result;
      return _regenerator2.default.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              _context2.next = 3;
              return _page2.default.getPageSettings();

            case 3:
              result = _context2.sent;
              return _context2.abrupt('return', res.status(200).json({ data: result }));

            case 7:
              _context2.prev = 7;
              _context2.t0 = _context2['catch'](0);
              return _context2.abrupt('return', res.status(400).json({ message: _context2.t0.message }));

            case 10:
            case 'end':
              return _context2.stop();
          }
        }
      }, _callee2, _this2, [[0, 7]]);
    }))();
  },
  updatePage: function updatePage(req, res, next) {
    var _this3 = this;

    return (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3() {
      var type, pageSetting, result;
      return _regenerator2.default.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.prev = 0;
              type = req.params.type;
              pageSetting = req.body;
              _context3.next = 5;
              return _page2.default.updatePageSetting(type, pageSetting);

            case 5:
              result = _context3.sent;
              return _context3.abrupt('return', res.status(200).json({ data: result }));

            case 9:
              _context3.prev = 9;
              _context3.t0 = _context3['catch'](0);
              return _context3.abrupt('return', res.status(400).json({ message: _context3.t0.message }));

            case 12:
            case 'end':
              return _context3.stop();
          }
        }
      }, _callee3, _this3, [[0, 9]]);
    }))();
  }
};