'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _pos = require('./pos.manager');

var _pos2 = _interopRequireDefault(_pos);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  createPos: function createPos(req, res, next) {
    var _this = this;

    return (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
      var posData, result;
      return _regenerator2.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              posData = req.body;
              _context.next = 4;
              return _pos2.default.createPos(posData);

            case 4:
              result = _context.sent;
              return _context.abrupt('return', res.status(200).json({ data: result }));

            case 8:
              _context.prev = 8;
              _context.t0 = _context['catch'](0);

              console.error(_context.t0);
              return _context.abrupt('return', res.status(400).json({ message: _context.t0.message }));

            case 12:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, _this, [[0, 8]]);
    }))();
  },
  updatePos: function updatePos(req, res, next) {
    var _this2 = this;

    return (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2() {
      var posId, posData, result;
      return _regenerator2.default.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              posId = req.params.posId;
              posData = req.body;
              _context2.next = 5;
              return _pos2.default.updatePos(posId, posData);

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
  },
  deletePos: function deletePos(req, res, next) {
    var _this3 = this;

    return (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3() {
      var posId, result;
      return _regenerator2.default.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.prev = 0;
              posId = req.params.posId;
              _context3.next = 4;
              return _pos2.default.deletePos(posId);

            case 4:
              result = _context3.sent;
              return _context3.abrupt('return', res.status(200).json({ data: result }));

            case 8:
              _context3.prev = 8;
              _context3.t0 = _context3['catch'](0);

              console.error(_context3.t0);
              return _context3.abrupt('return', res.status(400).json({ message: _context3.t0.message }));

            case 12:
            case 'end':
              return _context3.stop();
          }
        }
      }, _callee3, _this3, [[0, 8]]);
    }))();
  },
  getPos: function getPos(req, res, next) {
    var _this4 = this;

    return (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee4() {
      var result;
      return _regenerator2.default.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _context4.prev = 0;
              _context4.next = 3;
              return _pos2.default.getPos();

            case 3:
              result = _context4.sent;
              return _context4.abrupt('return', res.status(200).json({ data: result }));

            case 7:
              _context4.prev = 7;
              _context4.t0 = _context4['catch'](0);
              return _context4.abrupt('return', res.status(400).json({ message: _context4.t0.message }));

            case 10:
            case 'end':
              return _context4.stop();
          }
        }
      }, _callee4, _this4, [[0, 7]]);
    }))();
  }
};