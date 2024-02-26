'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createTransaction = exports.updateCustomer = exports.insertCustomer = exports.getCustomer = undefined;

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _nodeFetch = require('node-fetch');

var _nodeFetch2 = _interopRequireDefault(_nodeFetch);

var _xmlJs = require('xml-js');

var _xmlJs2 = _interopRequireDefault(_xmlJs);

var _sum = require('lodash/sum');

var _sum2 = _interopRequireDefault(_sum);

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

var _keys = require('../config/keys');

var _keys2 = _interopRequireDefault(_keys);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var apiCRMEndPoint = _keys2.default.app.apiCRMEndPoint;


var insertCustomer = function () {
  var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(userInfo) {
    var phone, name, email, birthday, address, password, body, response, results, jsonObj;
    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            phone = userInfo.phone, name = userInfo.name, email = userInfo.email, birthday = userInfo.birthday, address = userInfo.address, password = userInfo.password;
            body = '\n      <?xml version="1.0" encoding="utf-8" standalone="yes" ?>\n      <Message Action="Add holders" Terminal_Type="43881" Global_Type="DCORP" Unit_ID="1" User_ID="1">\n        <Include>Account, Holder_Contact, Holder_Card</Include>\n        <Image_Format Width="200" Height="150">JPEG</Image_Format>\n\n        <Holder>\n          <Group_ID>2</Group_ID>\n          <Full_Name>' + name + '</Full_Name>\n          <Birth>' + (0, _moment2.default)(birthday).format('YYYY-MM-DD') + '</Birth>\n          <Gender>Male</Gender>\n          <Language_ID>1066</Language_ID>\n          <Auto_Change_Levels>True</Auto_Change_Levels>\n          <Smoke>Yes</Smoke>\n          <Verification>Yes</Verification>\n          <Cards>\n            <Card>\n              <Group_ID>7</Group_ID>\n              <Card_Code>84' + phone.slice(1, phone.length) + '</Card_Code>\n              <Password>' + password + '</Password>\n              <Expired></Expired>\n              <Status>Active</Status>\n            </Card>\n          </Cards>\n          <Contacts>\n            <Contact>\n              <Type_ID>2</Type_ID>\n              <Value>+84' + phone.slice(1, phone.length) + '</Value>\n              <Dispatch>true</Dispatch>\n            </Contact>\n            <Contact>\n              <Type_ID>1</Type_ID>\n              <Value>' + email + '</Value>\n              <Dispatch>true</Dispatch>\n            </Contact>\n          </Contacts>\n\n        </Holder>\n      </Message>\n    ';
            _context.next = 5;
            return (0, _nodeFetch2.default)(apiCRMEndPoint, {
              method: 'POST',
              headers: {
                'Content-Type': 'application/xml',
                'Content-Length': Buffer.byteLength(body)
              },
              body: body
            });

          case 5:
            response = _context.sent;

            if (!(response.status === 200)) {
              _context.next = 12;
              break;
            }

            _context.next = 9;
            return response.text();

          case 9:
            results = _context.sent;
            jsonObj = _xmlJs2.default.xml2js(results, { compact: true, spaces: 4 });
            // console.log('jsonObj', jsonObj.Holder.Accounts.Account);

            return _context.abrupt('return', jsonObj.Holder);

          case 12:
            _context.next = 17;
            break;

          case 14:
            _context.prev = 14;
            _context.t0 = _context['catch'](0);
            throw _context.t0;

          case 17:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, undefined, [[0, 14]]);
  }));

  return function insertCustomer(_x) {
    return _ref.apply(this, arguments);
  };
}();

var updateCustomer = function () {
  var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(userInfo) {
    var phone, name, email, birthday, address, password, holderId, body, response, results, jsonObj;
    return _regenerator2.default.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            phone = userInfo.phone, name = userInfo.name, email = userInfo.email, birthday = userInfo.birthday, address = userInfo.address, password = userInfo.password, holderId = userInfo.holderId;
            body = '\n      <?xml version="1.0" encoding="utf-8" standalone="yes" ?>\n      <Message Action="Edit holders" Terminal_Type="CRM_API" Global_Type="ABC" Unit_ID="1" User_ID="1">\n        <Image_Format Width="200" Height="150">JPEG</Image_Format>\n        <Holder>\n          <Holder_ID>' + holderId + '</Holder_ID>\n          <Full_Name>' + name + '</Full_Name>\n          <Birth>' + (0, _moment2.default)(birthday).format('YYYY-MM-DD') + '</Birth>\n          <Cards>\n            <Card>\n              <Group_ID>7</Group_ID>\n              <Card_Code>84' + phone.slice(1, phone.length) + '</Card_Code>\n              <Password>' + password + '</Password>\n              <Expired></Expired>\n              <Status>Active</Status>\n            </Card>\n          </Cards>\n          <Contacts>\n            <Contact>\n              <Type_ID>2</Type_ID>\n              <Value>+84' + phone.slice(1, phone.length) + '</Value>\n              <Dispatch>true</Dispatch>\n            </Contact><Contact>\n              <Type_ID>1</Type_ID>\n              <Value>' + email + '</Value>\n              <Dispatch>true</Dispatch>\n            </Contact>\n          </Contacts>\n        </Holder>\n      </Message>\n    ';
            _context2.next = 5;
            return (0, _nodeFetch2.default)(apiCRMEndPoint, {
              method: 'POST',
              headers: {
                'Content-Type': 'application/xml',
                'Content-Length': Buffer.byteLength(body)
              },
              body: body
            });

          case 5:
            response = _context2.sent;

            if (!(response.status === 200)) {
              _context2.next = 13;
              break;
            }

            _context2.next = 9;
            return response.text();

          case 9:
            results = _context2.sent;
            jsonObj = _xmlJs2.default.xml2js(results, { compact: true, spaces: 4 });

            if (jsonObj.Data) {
              // TODO: throw error with message
            }
            return _context2.abrupt('return', jsonObj.Holder);

          case 13:
            _context2.next = 18;
            break;

          case 15:
            _context2.prev = 15;
            _context2.t0 = _context2['catch'](0);
            throw _context2.t0;

          case 18:
          case 'end':
            return _context2.stop();
        }
      }
    }, _callee2, undefined, [[0, 15]]);
  }));

  return function updateCustomer(_x2) {
    return _ref2.apply(this, arguments);
  };
}();

var getCustomer = function () {
  var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3(phone) {
    var body, response, results, jsonObj;
    return _regenerator2.default.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            body = '\n      <?xml version="1.0" encoding="utf-8" standalone="yes" ?>\n      <Message Action="Get card info" Terminal_Type="43881" Global_Type="DCORP" Unit_ID="1" User_ID="1">\n        <Card_Code>84' + phone.slice(1, phone.length) + '</Card_Code>\n        <Include>\n          Account, Account_Available, Holder, Holder_Image, Holder_Contact,\n          Holder_Address, Holder_Relative, Holder_Contract, Holder_Card, Holder_Coupon,Holder_Coupon_Available,\n          Holder_Attribute, Card_Property, Holder_Property\n        </Include>\n        <Image_Format Original="Yes" Width="200" Height="150" Compression="75">JPEG</Image_Format>\n      </Message>\n    ';
            _context3.next = 4;
            return (0, _nodeFetch2.default)(apiCRMEndPoint, {
              method: 'POST',
              headers: {
                'Content-Type': 'application/xml',
                'Content-Length': Buffer.byteLength(body)
              },
              body: body
            });

          case 4:
            response = _context3.sent;

            if (!(response.status === 200)) {
              _context3.next = 12;
              break;
            }

            _context3.next = 8;
            return response.text();

          case 8:
            results = _context3.sent;
            jsonObj = _xmlJs2.default.xml2js(results, { compact: true, spaces: 4 });

            console.log('jsonObj', jsonObj.Cards.Card.Accounts);
            return _context3.abrupt('return', jsonObj.Cards.Card.Accounts);

          case 12:
            _context3.next = 17;
            break;

          case 14:
            _context3.prev = 14;
            _context3.t0 = _context3['catch'](0);
            throw _context3.t0;

          case 17:
          case 'end':
            return _context3.stop();
        }
      }
    }, _callee3, undefined, [[0, 14]]);
  }));

  return function getCustomer(_x3) {
    return _ref3.apply(this, arguments);
  };
}();

var addCoupons = function () {
  var _ref4 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee4(holderId, offered, expired) {
    var body, response, results, jsonObj;
    return _regenerator2.default.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            body = '\n      <?xml version="1.0" encoding="utf-8" standalone="yes" ?>\n      <Message Action="Add coupons" Terminal_Type="43881" Global_Type="DCORP" Unit_ID="1" User_ID="1">\n        <Coupon>\n          <Coupon_Type_ID>4</Coupon_Type_ID>\n          <Holder_ID>' + holderId + '</Holder_ID>\n          <Offered>' + offered + '</Offered>\n          <Expired>' + (0, _moment2.default)(expired).format('YYYY-MM-DD') + '</Expired>\n          <Notes></Notes>\n          <Terminals_Types All="True">\n          </Terminals_Types>\n        </Coupon>\n      </Message>\n    ';
            _context4.next = 4;
            return (0, _nodeFetch2.default)(apiCRMEndPoint, {
              method: 'POST',
              headers: {
                'Content-Type': 'application/xml',
                'Content-Length': Buffer.byteLength(body)
              },
              body: body
            });

          case 4:
            response = _context4.sent;

            if (!(response.status === 200)) {
              _context4.next = 11;
              break;
            }

            _context4.next = 8;
            return response.text();

          case 8:
            results = _context4.sent;
            jsonObj = _xmlJs2.default.xml2js(results, { compact: true, spaces: 4 });
            return _context4.abrupt('return', jsonObj.Cards);

          case 11:
            _context4.next = 16;
            break;

          case 13:
            _context4.prev = 13;
            _context4.t0 = _context4['catch'](0);
            throw _context4.t0;

          case 16:
          case 'end':
            return _context4.stop();
        }
      }
    }, _callee4, undefined, [[0, 13]]);
  }));

  return function addCoupons(_x4, _x5, _x6) {
    return _ref4.apply(this, arguments);
  };
}();

var createTransaction = function () {
  var _ref5 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee5(order) {
    var customer, orderDetails, crmCustomer, amount, body, response, results, jsonObj;
    return _regenerator2.default.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.prev = 0;
            customer = order.customer, orderDetails = order.orderDetails;
            // TODO: check

            _context5.next = 4;
            return getCustomer(customer.phone);

          case 4:
            crmCustomer = _context5.sent;
            amount = (0, _sum2.default)(orderDetails.map(function (_ref6) {
              var totalPrice = _ref6.totalPrice;
              return totalPrice;
            }));
            body = '\n        <?xml version="1.0" encoding="utf-8" standalone="yes" ?>\n        <Message Action="Transaction" Terminal_Type="43881" Global_Type="DCORP" Unit_ID="1" User_ID="1">\n          <Transaction>\n            <Account_Number>' + crmCustomer.accountNumber + '</Account_Number>\n            <External_ID>123456</External_ID>\n            <External_Date>2015-07-21</External_Date>\n            <Amount>' + amount + '</Amount>\n            <Transaction_Time>2015-02-04 15:34:08.79 +03:00</Transaction_Time>\n            <Transaction_Life>2020-12-31</Transaction_Life>\n            <Transaction_Delay>2020-12-01</Transaction_Delay>\n            <Remarks></Remarks>\n          </Transaction>\n        </Message>\n      ';
            _context5.next = 9;
            return (0, _nodeFetch2.default)(apiCRMEndPoint, {
              method: 'POST',
              headers: {
                'Content-Type': 'application/xml',
                'Content-Length': Buffer.byteLength(body)
              },
              body: body
            });

          case 9:
            response = _context5.sent;

            if (!(response.status === 200)) {
              _context5.next = 16;
              break;
            }

            _context5.next = 13;
            return response.text();

          case 13:
            results = _context5.sent;
            jsonObj = _xmlJs2.default.xml2js(results, { compact: true, spaces: 4 });
            return _context5.abrupt('return', jsonObj.Cards);

          case 16:
            _context5.next = 21;
            break;

          case 18:
            _context5.prev = 18;
            _context5.t0 = _context5['catch'](0);
            throw _context5.t0;

          case 21:
          case 'end':
            return _context5.stop();
        }
      }
    }, _callee5, undefined, [[0, 18]]);
  }));

  return function createTransaction(_x7) {
    return _ref5.apply(this, arguments);
  };
}();

exports.getCustomer = getCustomer;
exports.insertCustomer = insertCustomer;
exports.updateCustomer = updateCustomer;
exports.createTransaction = createTransaction;