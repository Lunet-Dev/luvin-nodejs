'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _voucher = require('./voucher.model');

var _voucher2 = _interopRequireDefault(_voucher);

var _buildPaginationQuery = require('../../lib/build-pagination-query');

var _buildPaginationQuery2 = _interopRequireDefault(_buildPaginationQuery);

var _makeObjectId = require('../../lib/make-object-id');

var _makeObjectId2 = _interopRequireDefault(_makeObjectId);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  findVouchers: function findVouchers(limit, page, code, available, type) {
    var _this = this;

    return (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
      var conditions, now, query, vouchers;
      return _regenerator2.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              conditions = {};

              if (type) {
                if (type == 1) {
                  conditions.isAll = true;
                } else if (type == 2) {
                  conditions.isAll = false;
                }
              }
              if (code) {
                conditions.code = new RegExp(code, 'i');
              }
              if (available) {
                now = new Date();

                if (available == 1) {
                  conditions.validAt = { $gt: now };
                } else if (available == 2) {
                  conditions.validAt = { $lt: now };
                }
              }
              query = _voucher2.default.find(conditions).sort({ createdAt: -1 });

              query = (0, _buildPaginationQuery2.default)(query, limit, page);
              _context.next = 9;
              return query.lean().exec();

            case 9:
              vouchers = _context.sent;
              return _context.abrupt('return', vouchers);

            case 13:
              _context.prev = 13;
              _context.t0 = _context['catch'](0);
              throw _context.t0;

            case 16:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, _this, [[0, 13]]);
    }))();
  },
  countVouchers: function countVouchers(code, available) {
    var _this2 = this;

    return (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2() {
      var conditions, now, count;
      return _regenerator2.default.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              conditions = {};

              if (code) {
                conditions.code = new RegExp(code, 'i');
              }
              if (available) {
                now = new Date();

                conditions.validAt = { $gt: now };
              }
              _context2.next = 6;
              return _voucher2.default.count(conditions);

            case 6:
              count = _context2.sent;
              return _context2.abrupt('return', count);

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
  createVoucher: function createVoucher(voucherData) {
    var _this3 = this;

    return (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3() {
      var voucher;
      return _regenerator2.default.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.prev = 0;
              _context3.next = 3;
              return new _voucher2.default(voucherData).save();

            case 3:
              voucher = _context3.sent;
              return _context3.abrupt('return', voucher);

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
  updateVoucher: function updateVoucher(voucherId, voucherData) {
    var _this4 = this;

    return (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee4() {
      var voucher;
      return _regenerator2.default.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _context4.prev = 0;
              _context4.next = 3;
              return _voucher2.default.findByIdAndUpdate(voucherId, { $set: voucherData }, {
                new: true
              }).lean();

            case 3:
              voucher = _context4.sent;
              return _context4.abrupt('return', voucher);

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
  getVoucherOfUser: function getVoucherOfUser(userId) {
    var _this5 = this;

    return (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee5() {
      var now, vouchers;
      return _regenerator2.default.wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              _context5.prev = 0;
              now = new Date();
              _context5.next = 4;
              return _voucher2.default.find({
                $or: [{ isAll: true }, { userIds: (0, _makeObjectId2.default)(userId) }],
                validAt: { $gt: now }
              }).sort({ createdAt: -1 }).lean();

            case 4:
              vouchers = _context5.sent;
              return _context5.abrupt('return', vouchers);

            case 8:
              _context5.prev = 8;
              _context5.t0 = _context5['catch'](0);
              throw _context5.t0;

            case 11:
            case 'end':
              return _context5.stop();
          }
        }
      }, _callee5, _this5, [[0, 8]]);
    }))();
  },
  getVoucherByCode: function getVoucherByCode(code) {
    var _this6 = this;

    return (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee6() {
      var voucher;
      return _regenerator2.default.wrap(function _callee6$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              _context6.prev = 0;
              _context6.next = 3;
              return _voucher2.default.findOne({ code: code }).lean();

            case 3:
              voucher = _context6.sent;
              return _context6.abrupt('return', voucher);

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
  },
  deleteVoucher: function deleteVoucher(orderId) {
    var _this7 = this;

    return (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee7() {
      var result;
      return _regenerator2.default.wrap(function _callee7$(_context7) {
        while (1) {
          switch (_context7.prev = _context7.next) {
            case 0:
              _context7.prev = 0;
              _context7.next = 3;
              return _voucher2.default.remove({ _id: (0, _makeObjectId2.default)(orderId) });

            case 3:
              result = _context7.sent;
              return _context7.abrupt('return', result);

            case 7:
              _context7.prev = 7;
              _context7.t0 = _context7['catch'](0);
              throw _context7.t0;

            case 10:
            case 'end':
              return _context7.stop();
          }
        }
      }, _callee7, _this7, [[0, 7]]);
    }))();
  },
  redeem: function redeem(code, userId) {
    var _this8 = this;

    return (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee8() {
      var voucher, now, voucherValidTime;
      return _regenerator2.default.wrap(function _callee8$(_context8) {
        while (1) {
          switch (_context8.prev = _context8.next) {
            case 0:
              _context8.prev = 0;
              _context8.next = 3;
              return _voucher2.default.findOne({
                active: true,
                code: code,
                $or: [{ isAll: true }, { userIds: (0, _makeObjectId2.default)(userId) }]
              }).lean();

            case 3:
              voucher = _context8.sent;

              if (voucher) {
                _context8.next = 6;
                break;
              }

              throw new Error('Mã voucher không tồn tại!');

            case 6:
              now = new Date();
              voucherValidTime = new Date(voucher.validAt);

              if (!(now > voucherValidTime)) {
                _context8.next = 10;
                break;
              }

              throw new Error('Mã voucher đã hết hạn sử dụng!');

            case 10:
              return _context8.abrupt('return', voucher);

            case 13:
              _context8.prev = 13;
              _context8.t0 = _context8['catch'](0);
              throw _context8.t0;

            case 16:
            case 'end':
              return _context8.stop();
          }
        }
      }, _callee8, _this8, [[0, 13]]);
    }))();
  },
  redeemById: function redeemById(voucherId, userId) {
    var _this9 = this;

    return (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee9() {
      var voucher, now, voucherValidTime;
      return _regenerator2.default.wrap(function _callee9$(_context9) {
        while (1) {
          switch (_context9.prev = _context9.next) {
            case 0:
              _context9.prev = 0;
              _context9.next = 3;
              return _voucher2.default.findOne({
                _id: (0, _makeObjectId2.default)(voucherId),
                active: true,
                // voucherId,
                $or: [{ isAll: true }, { userIds: (0, _makeObjectId2.default)(userId) }]
              }).lean();

            case 3:
              voucher = _context9.sent;

              if (voucher) {
                _context9.next = 6;
                break;
              }

              throw new Error('Mã voucher không tồn tại!');

            case 6:
              now = new Date();
              voucherValidTime = new Date(voucher.validAt);

              if (!(now > voucherValidTime)) {
                _context9.next = 10;
                break;
              }

              throw new Error('Mã voucher đã hết hạn sử dụng!');

            case 10:
              return _context9.abrupt('return', voucher);

            case 13:
              _context9.prev = 13;
              _context9.t0 = _context9['catch'](0);
              throw _context9.t0;

            case 16:
            case 'end':
              return _context9.stop();
          }
        }
      }, _callee9, _this9, [[0, 13]]);
    }))();
  }
};