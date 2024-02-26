'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _slicedToArray2 = require('babel-runtime/helpers/slicedToArray');

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _user = require('./user.mannager');

var _user2 = _interopRequireDefault(_user);

var _constants = require('../../config/constants');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  findUsers: function findUsers(req, res, next) {
    var _this = this;

    return (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
      var _req$query, name, level, role, limit, page, _ref, _ref2, users, total;

      return _regenerator2.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _req$query = req.query, name = _req$query.name, level = _req$query.level, role = _req$query.role, limit = _req$query.limit, page = _req$query.page;
              _context.next = 4;
              return Promise.all([_user2.default.findUsers(limit, page, name, level, role), _user2.default.countUsers(name, level, role)]);

            case 4:
              _ref = _context.sent;
              _ref2 = (0, _slicedToArray3.default)(_ref, 2);
              users = _ref2[0];
              total = _ref2[1];
              return _context.abrupt('return', res.status(200).json({ data: { users: users, total: total } }));

            case 11:
              _context.prev = 11;
              _context.t0 = _context['catch'](0);
              return _context.abrupt('return', res.status(400).json({ message: _context.t0.message }));

            case 14:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, _this, [[0, 11]]);
    }))();
  },
  createUser: function createUser(req, res, next) {
    var _this2 = this;

    return (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2() {
      var userInfo, result;
      return _regenerator2.default.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              userInfo = req.body;
              _context2.next = 4;
              return _user2.default.createUser(userInfo);

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
  updateUser: function updateUser(req, res, next) {
    var _this3 = this;

    return (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3() {
      var _req$currentUser, _id, role, userId, userInfo, result;

      return _regenerator2.default.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.prev = 0;
              _req$currentUser = req.currentUser, _id = _req$currentUser._id, role = _req$currentUser.role;
              userId = req.params.userId;

              if (!(role !== _constants.USER_ROLES.CsStaff && _id === userId)) {
                _context3.next = 5;
                break;
              }

              return _context3.abrupt('return', res.sendStatus(403));

            case 5:
              userInfo = req.body;
              _context3.next = 8;
              return _user2.default.updateUser(userId, userInfo);

            case 8:
              result = _context3.sent;
              return _context3.abrupt('return', res.status(200).json({ data: result }));

            case 12:
              _context3.prev = 12;
              _context3.t0 = _context3['catch'](0);
              return _context3.abrupt('return', res.status(400).json({ message: _context3.t0.message }));

            case 15:
            case 'end':
              return _context3.stop();
          }
        }
      }, _callee3, _this3, [[0, 12]]);
    }))();
  },
  deleteUser: function deleteUser(req, res, next) {
    var _this4 = this;

    return (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee4() {
      var userId, result;
      return _regenerator2.default.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _context4.prev = 0;
              userId = req.params.userId;
              _context4.next = 4;
              return _user2.default.deleteUser(userId);

            case 4:
              result = _context4.sent;
              return _context4.abrupt('return', res.status(200).json({ data: result }));

            case 8:
              _context4.prev = 8;
              _context4.t0 = _context4['catch'](0);
              return _context4.abrupt('return', res.status(400).json({ message: _context4.t0.message }));

            case 11:
            case 'end':
              return _context4.stop();
          }
        }
      }, _callee4, _this4, [[0, 8]]);
    }))();
  }
};