'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _values = require('lodash/values');

var _values2 = _interopRequireDefault(_values);

var _auth = require('./auth.manager');

var _auth2 = _interopRequireDefault(_auth);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  getCurrentUser: function getCurrentUser(req, res, next) {
    var _this = this;

    return (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
      var currentUser;
      return _regenerator2.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              currentUser = req.currentUser;
              return _context.abrupt('return', res.status(200).json({ data: currentUser }));

            case 5:
              _context.prev = 5;
              _context.t0 = _context['catch'](0);
              return _context.abrupt('return', res.status(400).json({ message: _context.t0.message }));

            case 8:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, _this, [[0, 5]]);
    }))();
  },
  login: function login(req, res, next) {
    var _this2 = this;

    return (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2() {
      var _req$body, phone, password, result;

      return _regenerator2.default.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              _req$body = req.body, phone = _req$body.phone, password = _req$body.password;
              _context2.next = 4;
              return _auth2.default.login(phone, password);

            case 4:
              result = _context2.sent;
              return _context2.abrupt('return', res.status(200).json({ data: result }));

            case 8:
              _context2.prev = 8;
              _context2.t0 = _context2['catch'](0);
              return _context2.abrupt('return', res.status(400).json({ message: _context2.t0.message }));

            case 11:
            case 'end':
              return _context2.stop();
          }
        }
      }, _callee2, _this2, [[0, 8]]);
    }))();
  },
  register: function register(req, res, next) {
    var _this3 = this;

    return (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3() {
      var userInfo, result, message;
      return _regenerator2.default.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.prev = 0;
              userInfo = req.body;
              _context3.next = 4;
              return _auth2.default.register(userInfo);

            case 4:
              result = _context3.sent;
              return _context3.abrupt('return', res.status(200).json({ data: result }));

            case 8:
              _context3.prev = 8;
              _context3.t0 = _context3['catch'](0);

              if (!_context3.t0.errors) {
                _context3.next = 13;
                break;
              }

              message = (0, _values2.default)(_context3.t0.errors).map(function (err) {
                return err.message;
              }).join(', ');
              return _context3.abrupt('return', res.status(400).json({ message: message }));

            case 13:
              return _context3.abrupt('return', res.status(400).json({ message: _context3.t0.message }));

            case 14:
            case 'end':
              return _context3.stop();
          }
        }
      }, _callee3, _this3, [[0, 8]]);
    }))();
  },
  updatePassword: function updatePassword(req, res, next) {
    var _this4 = this;

    return (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee4() {
      var _id, currentUserId, _req$body2, oldPassword, newPassword, userId, result;

      return _regenerator2.default.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _context4.prev = 0;
              _id = req.currentUser._id;
              currentUserId = _id.toString();
              _req$body2 = req.body, oldPassword = _req$body2.oldPassword, newPassword = _req$body2.newPassword, userId = _req$body2.userId;

              if (!(currentUserId !== userId)) {
                _context4.next = 6;
                break;
              }

              return _context4.abrupt('return', res.sendStatus(403));

            case 6:
              _context4.next = 8;
              return _auth2.default.updatePassword(userId, oldPassword, newPassword);

            case 8:
              result = _context4.sent;
              return _context4.abrupt('return', res.status(200).json({ data: result }));

            case 12:
              _context4.prev = 12;
              _context4.t0 = _context4['catch'](0);
              return _context4.abrupt('return', res.status(400).json({ message: _context4.t0.message }));

            case 15:
            case 'end':
              return _context4.stop();
          }
        }
      }, _callee4, _this4, [[0, 12]]);
    }))();
  },
  forgotPassword: function forgotPassword(req, res, next) {
    var _this5 = this;

    return (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee5() {
      var username, result;
      return _regenerator2.default.wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              _context5.prev = 0;
              username = req.body.username;
              _context5.next = 4;
              return _auth2.default.forgotPassword(username);

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
  forgotPasswordConfirmation: function forgotPasswordConfirmation(req, res, next) {
    var _this6 = this;

    return (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee6() {
      var _req$body3, token, password, result;

      return _regenerator2.default.wrap(function _callee6$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              _context6.prev = 0;
              _req$body3 = req.body, token = _req$body3.token, password = _req$body3.password;
              _context6.next = 4;
              return _auth2.default.forgotPasswordConfirmation(token, password);

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
  }
};