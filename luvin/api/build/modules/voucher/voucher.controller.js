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

var _voucher = require('./voucher.manager');

var _voucher2 = _interopRequireDefault(_voucher);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  findVouchers: function findVouchers(req, res, next) {
    var _this = this;

    return (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
      var _req$query, type, code, available, limit, page, _ref, _ref2, vouchers, total;

      return _regenerator2.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _req$query = req.query, type = _req$query.type, code = _req$query.code, available = _req$query.available, limit = _req$query.limit, page = _req$query.page;
              _context.next = 4;
              return Promise.all([_voucher2.default.findVouchers(limit, page, code, available, type), _voucher2.default.countVouchers(code, available)]);

            case 4:
              _ref = _context.sent;
              _ref2 = (0, _slicedToArray3.default)(_ref, 2);
              vouchers = _ref2[0];
              total = _ref2[1];
              return _context.abrupt('return', res.status(200).json({ data: { vouchers: vouchers, total: total } }));

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
  createVoucher: function createVoucher(req, res, next) {
    var _this2 = this;

    return (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2() {
      var voucherData, result;
      return _regenerator2.default.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              voucherData = req.body;
              _context2.next = 4;
              return _voucher2.default.createVoucher(voucherData);

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
  updateVoucher: function updateVoucher(req, res, next) {
    var _this3 = this;

    return (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3() {
      var voucherId, voucherData, result;
      return _regenerator2.default.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.prev = 0;
              voucherId = req.params.voucherId;
              voucherData = req.body;
              _context3.next = 5;
              return _voucher2.default.updateEvent(voucherId, voucherData);

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
  },
  deleteVoucher: function deleteVoucher(req, res, next) {
    var _this4 = this;

    return (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee4() {
      var voucherId, result;
      return _regenerator2.default.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _context4.prev = 0;
              voucherId = req.params.voucherId;
              _context4.next = 4;
              return _voucher2.default.deleteVoucher(voucherId);

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
  },
  getVoucherOfUser: function getVoucherOfUser(req, res, next) {
    var _this5 = this;

    return (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee5() {
      var userId, result;
      return _regenerator2.default.wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              _context5.prev = 0;
              userId = req.currentUser._id;
              _context5.next = 4;
              return _voucher2.default.getVoucherOfUser(userId);

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
  redeem: function redeem(req, res, next) {
    var _this6 = this;

    return (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee6() {
      var code, userId, result;
      return _regenerator2.default.wrap(function _callee6$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              _context6.prev = 0;
              code = req.body.code;
              userId = req.currentUser._id;
              _context6.next = 5;
              return _voucher2.default.redeem(code, userId);

            case 5:
              result = _context6.sent;
              return _context6.abrupt('return', res.status(200).json({ data: result }));

            case 9:
              _context6.prev = 9;
              _context6.t0 = _context6['catch'](0);
              return _context6.abrupt('return', res.status(400).json({ message: _context6.t0.message }));

            case 12:
            case 'end':
              return _context6.stop();
          }
        }
      }, _callee6, _this6, [[0, 9]]);
    }))();
  }
};