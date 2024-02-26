'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _nodemailer = require('nodemailer');

var _nodemailer2 = _interopRequireDefault(_nodemailer);

var _template = require('../config/template');

var _template2 = _interopRequireDefault(_template);

var _keys = require('../config/keys');

var _keys2 = _interopRequireDefault(_keys);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _keys$mail = _keys2.default.mail,
    host = _keys$mail.host,
    port = _keys$mail.port,
    user = _keys$mail.user,
    password = _keys$mail.password;


var transporter = _nodemailer2.default.createTransport({
  host: host,
  port: port,
  secure: false, // true for 465, false for other ports
  auth: {
    user: user,
    pass: password
  },
  tls: {
    rejectUnauthorized: false
  }
});

var sendEmail = function sendEmail(to) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  return new Promise(function (resolve, reject) {
    transporter.sendMail((0, _extends3.default)({
      from: '"Luvin Contact" <admin@luvin.com>', // sender address
      to: to
    }, options), function (error, info) {
      if (error) {
        reject(error);
      }
      resolve(info);
    });
  });
};

var prepareTemplate = function prepareTemplate(type, host, data) {
  var message = void 0;

  switch (type) {
    case 'reset':
      message = _template2.default.resetEmail(host, data);
      break;

    case 'reset-confirmation':
      message = _template2.default.confirmResetPasswordEmail();
      break;

    case 'signup':
      message = _template2.default.signupEmail(data);

      break;

    case 'newsletter-subscription':
      message = _template2.default.newsletterSubscriptionEmail();
      break;

    case 'contact':
      message = _template2.default.contactEmail();
      break;

    case 'merchant-application':
      message = _template2.default.merchantApplicationEmail();
      break;

    case 'order-confirmation':
      message = _template2.default.orderConfirmationEmail(data);
      break;

    case 'review':
      message = _template2.default.review(data);
      break;

    default:
      message = '';
  }

  return message;
};

exports.default = function () {
  var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(email, type, host, data) {
    var result, response, configs;
    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            result = void 0;
            response = void 0;
            _context.prev = 2;
            configs = prepareTemplate(type, host, data);
            _context.next = 6;
            return sendEmail(email, configs);

          case 6:
            response = _context.sent;
            _context.next = 11;
            break;

          case 9:
            _context.prev = 9;
            _context.t0 = _context['catch'](2);

          case 11:

            if (response) {
              result = response;
            }

            return _context.abrupt('return', result);

          case 13:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, undefined, [[2, 9]]);
  }));

  return function (_x2, _x3, _x4, _x5) {
    return _ref.apply(this, arguments);
  };
}();