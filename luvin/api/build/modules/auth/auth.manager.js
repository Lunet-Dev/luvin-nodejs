'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _jsonwebtoken = require('jsonwebtoken');

var _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);

var _user = require('../user/user.mannager');

var _user2 = _interopRequireDefault(_user);

var _mailer = require('../../services/mailer');

var _mailer2 = _interopRequireDefault(_mailer);

var _luvinCrm = require('../../services/luvin-crm');

var _makeObjectId = require('../../lib/make-object-id');

var _makeObjectId2 = _interopRequireDefault(_makeObjectId);

var _keys = require('../../config/keys');

var _keys2 = _interopRequireDefault(_keys);

var _user3 = require('../user/user.model');

var _user4 = _interopRequireDefault(_user3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var secret = _keys2.default.jwt.secret;
exports.default = {
  login: function login(username, password) {
    var _this = this;

    return (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
      var user, token;
      return _regenerator2.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return _user2.default.findOneUser({
                $or: [{ email: { $regex: username, $options: 'i' } }, { phone: { $regex: username, $options: 'i' } }]
              });

            case 3:
              user = _context.sent;

              if (user) {
                _context.next = 6;
                break;
              }

              throw new Error('Thông tin đăng nhập không chính xác.');

            case 6:
              if (user.authenticate(password)) {
                _context.next = 8;
                break;
              }

              throw new Error('Sai password.');

            case 8:
              token = user.generateToken();
              return _context.abrupt('return', { token: token, user: user });

            case 12:
              _context.prev = 12;
              _context.t0 = _context['catch'](0);
              throw _context.t0;

            case 15:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, _this, [[0, 12]]);
    }))();
  },
  register: function register(userInfo) {
    var _this2 = this;

    return (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2() {
      var user, crmUser, token;
      return _regenerator2.default.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              _context2.next = 3;
              return _user2.default.createUser(userInfo);

            case 3:
              user = _context2.sent;
              _context2.next = 6;
              return (0, _luvinCrm.insertCustomer)(userInfo);

            case 6:
              crmUser = _context2.sent;

              (0, _mailer2.default)(user.email, 'signup', null, user);
              token = user.generateToken();
              return _context2.abrupt('return', { token: token, user: user });

            case 12:
              _context2.prev = 12;
              _context2.t0 = _context2['catch'](0);
              throw _context2.t0;

            case 15:
            case 'end':
              return _context2.stop();
          }
        }
      }, _callee2, _this2, [[0, 12]]);
    }))();
  },
  forgotPassword: function forgotPassword(username) {
    var _this3 = this;

    return (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3() {
      var user, token;
      return _regenerator2.default.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.prev = 0;
              _context3.next = 3;
              return _user2.default.findOneUser({
                $or: [{ email: { $regex: username, $options: 'i' } }, { phone: { $regex: username, $options: 'i' } }]
              });

            case 3:
              user = _context3.sent;

              if (user) {
                _context3.next = 6;
                break;
              }

              throw new Error('Người dùng không tồn tại');

            case 6:
              token = user.generateToken();
              _context3.next = 9;
              return (0, _mailer2.default)(user.email, 'reset', _keys2.default.app.clientURL, token);

            case 9:
              return _context3.abrupt('return', { success: true });

            case 12:
              _context3.prev = 12;
              _context3.t0 = _context3['catch'](0);
              throw _context3.t0;

            case 15:
            case 'end':
              return _context3.stop();
          }
        }
      }, _callee3, _this3, [[0, 12]]);
    }))();
  },
  validateToken: function validateToken(token) {
    var _this4 = this;

    return (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee5() {
      return _regenerator2.default.wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              return _context5.abrupt('return', new Promise(function (resolve, reject) {
                _jsonwebtoken2.default.verify(token, secret, function () {
                  var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee4(err, decoded) {
                    return _regenerator2.default.wrap(function _callee4$(_context4) {
                      while (1) {
                        switch (_context4.prev = _context4.next) {
                          case 0:
                            if (!err) {
                              _context4.next = 2;
                              break;
                            }

                            return _context4.abrupt('return', reject(new Error('Token không hợp lệ')));

                          case 2:
                            return _context4.abrupt('return', resolve(decoded._id));

                          case 3:
                          case 'end':
                            return _context4.stop();
                        }
                      }
                    }, _callee4, _this4);
                  }));

                  return function (_x, _x2) {
                    return _ref.apply(this, arguments);
                  };
                }());
              }));

            case 1:
            case 'end':
              return _context5.stop();
          }
        }
      }, _callee5, _this4);
    }))();
  },
  forgotPasswordConfirmation: function forgotPasswordConfirmation(token, newPassword) {
    var _this5 = this;

    return (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee6() {
      var userId, user, hashPassword, hash, newUser, newToken;
      return _regenerator2.default.wrap(function _callee6$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              _context6.prev = 0;
              _context6.next = 3;
              return _this5.validateToken(token);

            case 3:
              userId = _context6.sent;
              _context6.next = 6;
              return _user2.default.findOneUser({
                _id: (0, _makeObjectId2.default)(userId)
              });

            case 6:
              user = _context6.sent;

              if (user) {
                _context6.next = 9;
                break;
              }

              return _context6.abrupt('return', { message: 'Không tìm thấy thông tin thành viên.' });

            case 9:
              hashPassword = function hashPassword() {
                return new Promise(function (resolve, reject) {
                  user._hashPassword(newPassword, function (err, hash) {
                    if (err) {
                      return reject(err);
                    }
                    return resolve(hash);
                  });
                });
              };

              _context6.next = 12;
              return hashPassword();

            case 12:
              hash = _context6.sent;
              _context6.next = 15;
              return _user4.default.findByIdAndUpdate(userId, {
                $set: { password: hash }
              }, { new: true });

            case 15:
              newUser = _context6.sent;
              newToken = newUser.generateToken();
              return _context6.abrupt('return', { token: newToken, user: newUser });

            case 20:
              _context6.prev = 20;
              _context6.t0 = _context6['catch'](0);
              throw _context6.t0;

            case 23:
            case 'end':
              return _context6.stop();
          }
        }
      }, _callee6, _this5, [[0, 20]]);
    }))();
  },
  updatePassword: function updatePassword(userId, oldPassword, newPassword) {
    var _this6 = this;

    return (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee7() {
      var user, hashPassword, hash, newUser, newToken;
      return _regenerator2.default.wrap(function _callee7$(_context7) {
        while (1) {
          switch (_context7.prev = _context7.next) {
            case 0:
              _context7.prev = 0;
              _context7.next = 3;
              return _user2.default.findOneUser({
                _id: (0, _makeObjectId2.default)(userId)
              });

            case 3:
              user = _context7.sent;

              if (user) {
                _context7.next = 6;
                break;
              }

              return _context7.abrupt('return', { message: 'Không tìm thấy thông tin thành viên.' });

            case 6:
              if (user.authenticate(oldPassword)) {
                _context7.next = 8;
                break;
              }

              return _context7.abrupt('return', { message: 'Sai password.' });

            case 8:
              hashPassword = function hashPassword() {
                return new Promise(function (resolve, reject) {
                  user._hashPassword(newPassword, function (err, hash) {
                    if (err) {
                      return reject(err);
                    }
                    return resolve(hash);
                  });
                });
              };

              _context7.next = 11;
              return hashPassword();

            case 11:
              hash = _context7.sent;
              _context7.next = 14;
              return _user4.default.findByIdAndUpdate(userId, {
                $set: { password: hash }
              }, { new: true });

            case 14:
              newUser = _context7.sent;
              newToken = newUser.generateToken();
              return _context7.abrupt('return', { token: newToken, user: newUser });

            case 19:
              _context7.prev = 19;
              _context7.t0 = _context7['catch'](0);
              throw _context7.t0;

            case 22:
            case 'end':
              return _context7.stop();
          }
        }
      }, _callee7, _this6, [[0, 19]]);
    }))();
  }
};