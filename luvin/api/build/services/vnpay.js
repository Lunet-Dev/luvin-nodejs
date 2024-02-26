'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _qs = require('qs');

var _qs2 = _interopRequireDefault(_qs);

var _dateformat = require('dateformat');

var _dateformat2 = _interopRequireDefault(_dateformat);

var _sha = require('sha256');

var _sha2 = _interopRequireDefault(_sha);

var _order = require('../modules/order/order.manager');

var _order2 = _interopRequireDefault(_order);

var _keys = require('../config/keys');

var _keys2 = _interopRequireDefault(_keys);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function sortObject(o) {
  var sorted = {};
  var key = [];
  var a = [];

  for (key in o) {
    if (o.hasOwnProperty(key)) {
      a.push(key);
    }
  }

  a.sort();

  for (key = 0; key < a.length; key++) {
    sorted[a[key]] = o[a[key]];
  }
  return sorted;
} /* eslint-disable camelcase */
exports.default = {
  createPaymentUrl: function createPaymentUrl(orderId, amount, orderInfo, ipAddr) {
    var _this = this;

    return (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
      var date, createDate, vnp_Params, secretKey, signData, secureHash, vnpUrl;
      return _regenerator2.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              date = new Date();
              createDate = (0, _dateformat2.default)(date, 'yyyymmddHHmmss');
              vnp_Params = {};

              vnp_Params['vnp_Version'] = '2';
              vnp_Params['vnp_Command'] = 'pay';
              vnp_Params['vnp_TmnCode'] = _keys2.default.vnpay.tmnCode;
              // vnp_Params['vnp_Merchant'] = ''
              vnp_Params['vnp_Locale'] = 'vn';
              vnp_Params['vnp_CurrCode'] = 'VND';
              vnp_Params['vnp_TxnRef'] = orderId.toString();
              vnp_Params['vnp_OrderInfo'] = orderInfo;
              vnp_Params['vnp_OrderType'] = 100000;
              vnp_Params['vnp_Amount'] = amount * 100;
              vnp_Params['vnp_ReturnUrl'] = _keys2.default.vnpay.returnUrl;
              vnp_Params['vnp_IpAddr'] = ipAddr;
              vnp_Params['vnp_CreateDate'] = createDate;

              vnp_Params = sortObject(vnp_Params);

              secretKey = _keys2.default.vnpay.hashSecret;
              signData = secretKey + _qs2.default.stringify(vnp_Params, { encode: false });
              secureHash = (0, _sha2.default)(signData);


              vnp_Params['vnp_SecureHashType'] = 'SHA256';
              vnp_Params['vnp_SecureHash'] = secureHash;

              vnpUrl = _keys2.default.vnpay.url;

              vnpUrl += '?' + _qs2.default.stringify(vnp_Params, { encode: true });
              return _context.abrupt('return', vnpUrl);

            case 24:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, _this);
    }))();
  },


  // async createPaymentUrl(req, res, next) {
  //   const ipAddr =
  //     req.headers['x-forwarded-for'] ||
  //     req.connection.remoteAddress ||
  //     req.socket.remoteAddress ||
  //     req.connection.socket.remoteAddress;

  //   const tmnCode = keys.vnpay.tmnCode;
  //   const secretKey = keys.vnpay.hashSecret;
  //   let vnpUrl = keys.vnpay.url;
  //   const returnUrl = keys.vnpay.returnUrl;

  //   const date = new Date();

  //   const createDate = dateFormat(date, 'yyyymmddHHmmss');
  //   const orderId = dateFormat(date, 'HHmmss');
  //   const amount = req.body.amount;
  //   const bankCode = req.body.bankCode;

  //   const orderInfo = req.body.orderDescription;
  //   const orderType = req.body.orderType || 180000;
  //   let locale = req.body.language;
  //   if (locale === null || locale === '') {
  //     locale = 'vn';
  //   }
  //   const currCode = 'VND';
  //   let vnp_Params = {};
  //   vnp_Params['vnp_Version'] = '2';
  //   vnp_Params['vnp_Command'] = 'pay';
  //   vnp_Params['vnp_TmnCode'] = tmnCode;
  //   // vnp_Params['vnp_Merchant'] = ''
  //   vnp_Params['vnp_Locale'] = locale;
  //   vnp_Params['vnp_CurrCode'] = currCode;
  //   vnp_Params['vnp_TxnRef'] = orderId;
  //   vnp_Params['vnp_OrderInfo'] = orderInfo;
  //   vnp_Params['vnp_OrderType'] = orderType;
  //   vnp_Params['vnp_Amount'] = amount * 100;
  //   vnp_Params['vnp_ReturnUrl'] = returnUrl;
  //   vnp_Params['vnp_IpAddr'] = ipAddr;
  //   vnp_Params['vnp_CreateDate'] = createDate;
  //   if (bankCode !== null && bankCode !== '') {
  //     vnp_Params['vnp_BankCode'] = bankCode;
  //   }

  //   vnp_Params = sortObject(vnp_Params);

  //   const signData =
  //     secretKey + querystring.stringify(vnp_Params, { encode: false });

  //   const secureHash = sha256(signData);

  //   vnp_Params['vnp_SecureHashType'] = 'SHA256';
  //   vnp_Params['vnp_SecureHash'] = secureHash;
  //   vnpUrl += '?' + querystring.stringify(vnp_Params, { encode: true });

  //   // Neu muon dung Redirect thi dong dong ben duoi
  //   // res.status(200).json({ code: '00', data: vnpUrl });
  //   // Neu muon dung Redirect thi mo dong ben duoi va dong dong ben tren
  //   res.redirect(vnpUrl);
  // },

  vnPayReturn: function vnPayReturn(req, res, next) {
    var _this2 = this;

    return (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2() {
      var vnp_Params, secureHash, tmnCode, secretKey, signData, checkSum;
      return _regenerator2.default.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              vnp_Params = req.query;
              secureHash = vnp_Params['vnp_SecureHash'];


              delete vnp_Params['vnp_SecureHash'];
              delete vnp_Params['vnp_SecureHashType'];

              vnp_Params = sortObject(vnp_Params);

              tmnCode = _keys2.default.vnpay.tmnCode;
              secretKey = _keys2.default.vnpay.hashSecret;
              signData = secretKey + _qs2.default.stringify(vnp_Params, { encode: false });
              checkSum = (0, _sha2.default)(signData);


              res.redirect(_keys2.default.app.clientURL + '/tai-khoan/view-order/' + vnp_Params.vnp_TxnRef);

              // if (secureHash === checkSum) {
              //   res.redirect(
              //     `${keys.app.clientURL}/tai-khoan/view-order/${vnp_Params.vnp_TxnRef}`
              //   );
              //   // Kiem tra xem du lieu trong db co hop le hay khong va thong bao ket qua
              //   // res.render('success', { code: vnp_Params['vnp_ResponseCode'] });
              // } else {
              //   // res.render('success', { code: '97' });
              // }

            case 10:
            case 'end':
              return _context2.stop();
          }
        }
      }, _callee2, _this2);
    }))();
  },
  vnPayIPN: function vnPayIPN(req, res, next) {
    var _this3 = this;

    return (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3() {
      var vnp_Params, secureHash, secretKey, signData, checkSum, orderId, rspCode;
      return _regenerator2.default.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.prev = 0;
              vnp_Params = req.query;
              secureHash = vnp_Params['vnp_SecureHash'];


              delete vnp_Params['vnp_SecureHash'];
              delete vnp_Params['vnp_SecureHashType'];

              vnp_Params = sortObject(vnp_Params);
              secretKey = _keys2.default.vnpay.hashSecret;
              signData = secretKey + _qs2.default.stringify(vnp_Params, { encode: false });
              checkSum = (0, _sha2.default)(signData);

              if (!(secureHash === checkSum)) {
                _context3.next = 18;
                break;
              }

              orderId = vnp_Params['vnp_TxnRef'];
              rspCode = vnp_Params['vnp_ResponseCode'];

              if (!(rspCode == '00')) {
                _context3.next = 15;
                break;
              }

              _context3.next = 15;
              return _order2.default.updateOrder(orderId, { paid: true });

            case 15:
              // Kiem tra du lieu co hop le khong, cap nhat trang thai don hang va gui ket qua cho VNPAY theo dinh dang duoi
              res.status(200).json({ RspCode: '00', Message: 'success' });
              _context3.next = 19;
              break;

            case 18:
              res.status(200).json({ RspCode: '97', Message: 'Fail checksum' });

            case 19:
              _context3.next = 24;
              break;

            case 21:
              _context3.prev = 21;
              _context3.t0 = _context3['catch'](0);

              res.status(200).json({ RspCode: '99', Message: 'Fail checksum' });

            case 24:
            case 'end':
              return _context3.stop();
          }
        }
      }, _callee3, _this3, [[0, 21]]);
    }))();
  }
};