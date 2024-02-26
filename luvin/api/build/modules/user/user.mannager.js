'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _user2 = require('./user.model');

var _user3 = _interopRequireDefault(_user2);

var _luvinCrm = require('../../services/luvin-crm');

var _buildPaginationQuery = require('../../lib/build-pagination-query');

var _buildPaginationQuery2 = _interopRequireDefault(_buildPaginationQuery);

var _makeObjectId = require('../../lib/make-object-id');

var _makeObjectId2 = _interopRequireDefault(_makeObjectId);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  findOneUser: function findOneUser(conditions) {
    var _this = this;

    return (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
      var user;
      return _regenerator2.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return _user3.default.findOne(conditions);

            case 3:
              user = _context.sent;
              return _context.abrupt('return', user);

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
  createUser: function createUser(userInfo) {
    var _this2 = this;

    return (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2() {
      var user, crmUser;
      return _regenerator2.default.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              _context2.next = 3;
              return new _user3.default(userInfo).save();

            case 3:
              user = _context2.sent;
              _context2.next = 6;
              return (0, _luvinCrm.insertCustomer)(userInfo);

            case 6:
              crmUser = _context2.sent;
              return _context2.abrupt('return', user);

            case 10:
              _context2.prev = 10;
              _context2.t0 = _context2['catch'](0);
              throw _context2.t0;

            case 13:
            case 'end':
              return _context2.stop();
          }
        }
      }, _callee2, _this2, [[0, 10]]);
    }))();
  },
  updateUser: function updateUser(userId, userInfo) {
    var _this3 = this;

    return (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3() {
      var password, uInfo, _user, hashPassword, hash, user, crmUser;

      return _regenerator2.default.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.prev = 0;
              password = userInfo.password, uInfo = (0, _objectWithoutProperties3.default)(userInfo, ['password']);

              if (!password) {
                _context3.next = 11;
                break;
              }

              _context3.next = 5;
              return _this3.findOneUser({
                _id: (0, _makeObjectId2.default)(userId)
              });

            case 5:
              _user = _context3.sent;

              hashPassword = function hashPassword() {
                return new Promise(function (resolve, reject) {
                  _user._hashPassword(password, function (err, hash) {
                    if (err) {
                      return reject(err);
                    }
                    return resolve(hash);
                  });
                });
              };

              _context3.next = 9;
              return hashPassword();

            case 9:
              hash = _context3.sent;

              uInfo.password = hash;

            case 11:
              _context3.next = 13;
              return _user3.default.findByIdAndUpdate(userId, {
                $set: uInfo
              }, { new: true }).lean();

            case 13:
              user = _context3.sent;
              _context3.next = 16;
              return (0, _luvinCrm.updateCustomer)(user);

            case 16:
              crmUser = _context3.sent;
              return _context3.abrupt('return', user);

            case 20:
              _context3.prev = 20;
              _context3.t0 = _context3['catch'](0);
              throw _context3.t0;

            case 23:
            case 'end':
              return _context3.stop();
          }
        }
      }, _callee3, _this3, [[0, 20]]);
    }))();
  },
  deleteUser: function deleteUser(userId) {
    var _this4 = this;

    return (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee4() {
      var result;
      return _regenerator2.default.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _context4.prev = 0;
              _context4.next = 3;
              return _user3.default.remove({ _id: (0, _makeObjectId2.default)(userId) });

            case 3:
              result = _context4.sent;
              return _context4.abrupt('return', result);

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
  findUsers: function findUsers(limit, page, name, level, role) {
    var _this5 = this;

    return (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee5() {
      var conditions, query, users;
      return _regenerator2.default.wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              _context5.prev = 0;
              conditions = {};

              if (level) {
                conditions.level = level;
              }
              if (role) {
                conditions.role = role;
              }
              query = _user3.default.find(conditions).sort({ createdAt: -1 });

              if (name) {
                query.or([{ email: new RegExp(name, 'i') }, { phone: new RegExp(name, 'i') }, { name: new RegExp(name, 'i') }, { address: new RegExp(name, 'i') }]);
              }
              query = (0, _buildPaginationQuery2.default)(query, limit, page);
              _context5.next = 9;
              return query.lean().exec();

            case 9:
              users = _context5.sent;
              return _context5.abrupt('return', users);

            case 13:
              _context5.prev = 13;
              _context5.t0 = _context5['catch'](0);
              throw _context5.t0;

            case 16:
            case 'end':
              return _context5.stop();
          }
        }
      }, _callee5, _this5, [[0, 13]]);
    }))();
  },
  countUsers: function countUsers(name, level, role) {
    var _this6 = this;

    return (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee6() {
      var conditions, query, count;
      return _regenerator2.default.wrap(function _callee6$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              _context6.prev = 0;
              conditions = {};

              if (level) {
                conditions.level = level;
              }
              if (role) {
                conditions.role = role;
              }
              query = _user3.default.count(conditions);

              if (name) {
                query.or([{ email: new RegExp(name, 'i') }, { phone: new RegExp(name, 'i') }, { name: new RegExp(name, 'i') }, { address: new RegExp(name, 'i') }]);
              }
              _context6.next = 8;
              return query.exec();

            case 8:
              count = _context6.sent;
              return _context6.abrupt('return', count);

            case 12:
              _context6.prev = 12;
              _context6.t0 = _context6['catch'](0);
              throw _context6.t0;

            case 15:
            case 'end':
              return _context6.stop();
          }
        }
      }, _callee6, _this6, [[0, 12]]);
    }))();
  }
};

// class UserManager extends BaseManager {
//   createUser = async (userInfo) => {
//     try {
//       const user = await new User(userInfo).save();
//       return user;
//       // const token = user.generateToken();
//     } catch (error) {
//       throw error;
//     }
//   };

//   update = async (userId, userInfo) => {
//     try {
//       const user = await User.findByIdAndUpdate(userId, userInfo, {
//         new: true,
//       });
//       return { success: true, user };
//     } catch (error) {
//       return { success: false, error };
//     }
//   };

//   login = async (req, res) => {};

//   search = async (req, res) => {};

//   findAll = async (req, res) => {};

//   delete = async (req, res) => {};
// }