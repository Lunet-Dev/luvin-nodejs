'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _slicedToArray2 = require('babel-runtime/helpers/slicedToArray');

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _order = require('./order.manager');

var _order2 = _interopRequireDefault(_order);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  findOrders: function findOrders(req, res, next) {
    var _this = this;

    return (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
      var _req$query, limit, page, name, status, paymentMethod, paid, _ref, _ref2, orders, total;

      return _regenerator2.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _req$query = req.query, limit = _req$query.limit, page = _req$query.page, name = _req$query.name, status = _req$query.status, paymentMethod = _req$query.paymentMethod, paid = _req$query.paid;
              _context.next = 4;
              return Promise.all([_order2.default.findOrders(limit, page, name, status, paymentMethod, paid), _order2.default.countOrders(name, status, paymentMethod, paid)]);

            case 4:
              _ref = _context.sent;
              _ref2 = (0, _slicedToArray3.default)(_ref, 2);
              orders = _ref2[0];
              total = _ref2[1];
              return _context.abrupt('return', res.status(200).json({ data: { orders: orders, total: total } }));

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
  createOrder: function createOrder(req, res, next) {
    var _this2 = this;

    return (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2() {
      var orderData, ipAddr, customer, result;
      return _regenerator2.default.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              orderData = req.body;
              ipAddr = req.headers['x-forwarded-for'] || req.connection.remoteAddress || req.socket.remoteAddress || req.connection.socket.remoteAddress;
              customer = req.currentUser._id;
              _context2.next = 6;
              return _order2.default.createOrder((0, _extends3.default)({
                customer: customer,
                ipAddr: ipAddr
              }, orderData));

            case 6:
              result = _context2.sent;
              return _context2.abrupt('return', res.status(200).json({ data: result }));

            case 10:
              _context2.prev = 10;
              _context2.t0 = _context2['catch'](0);
              return _context2.abrupt('return', res.status(400).json({ message: _context2.t0.message }));

            case 13:
            case 'end':
              return _context2.stop();
          }
        }
      }, _callee2, _this2, [[0, 10]]);
    }))();
  },
  updateOrder: function updateOrder(req, res, next) {
    var _this3 = this;

    return (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3() {
      var orderData, orderId, result;
      return _regenerator2.default.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.prev = 0;
              orderData = req.body;
              orderId = req.params.orderId;
              _context3.next = 5;
              return _order2.default.updateOrder(orderId, orderData);

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
  deleteOrder: function deleteOrder(req, res, next) {
    var _this4 = this;

    return (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee4() {
      var orderId, result;
      return _regenerator2.default.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _context4.prev = 0;
              orderId = req.params.orderId;
              _context4.next = 4;
              return _order2.default.deleteOrder(orderId);

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
  getDetailOrder: function getDetailOrder(req, res, next) {
    var _this5 = this;

    return (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee5() {
      var orderId, result;
      return _regenerator2.default.wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              _context5.prev = 0;
              orderId = req.params.orderId;
              _context5.next = 4;
              return _order2.default.findOrderById(orderId);

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
  getOrderHistory: function getOrderHistory(req, res, next) {
    var _this6 = this;

    return (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee6() {
      var _req$query2, _req$query2$limit, limit, _req$query2$page, page, customerId, result;

      return _regenerator2.default.wrap(function _callee6$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              _context6.prev = 0;
              _req$query2 = req.query, _req$query2$limit = _req$query2.limit, limit = _req$query2$limit === undefined ? 12 : _req$query2$limit, _req$query2$page = _req$query2.page, page = _req$query2$page === undefined ? 1 : _req$query2$page;
              customerId = req.currentUser._id;
              _context6.next = 5;
              return _order2.default.findOrdersByCustomerId(customerId, limit, page);

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
  },
  getOrders: function getOrders(req, res, next) {
    var _this7 = this;

    return (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee7() {
      var _req$query3, _req$query3$limit, limit, _req$query3$page, page, status, result;

      return _regenerator2.default.wrap(function _callee7$(_context7) {
        while (1) {
          switch (_context7.prev = _context7.next) {
            case 0:
              _context7.prev = 0;
              _req$query3 = req.query, _req$query3$limit = _req$query3.limit, limit = _req$query3$limit === undefined ? 12 : _req$query3$limit, _req$query3$page = _req$query3.page, page = _req$query3$page === undefined ? 1 : _req$query3$page;
              status = req.params.status;
              _context7.next = 5;
              return _order2.default.findOrdersByStatus(status, limit, page);

            case 5:
              result = _context7.sent;
              return _context7.abrupt('return', res.status(200).json({ data: result }));

            case 9:
              _context7.prev = 9;
              _context7.t0 = _context7['catch'](0);
              return _context7.abrupt('return', res.status(400).json({ message: _context7.t0.message }));

            case 12:
            case 'end':
              return _context7.stop();
          }
        }
      }, _callee7, _this7, [[0, 9]]);
    }))();
  },
  pushOrderToPos: function pushOrderToPos(req, res, next) {
    var _this8 = this;

    return (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee8() {
      var _req$body, posId, orderId, result;

      return _regenerator2.default.wrap(function _callee8$(_context8) {
        while (1) {
          switch (_context8.prev = _context8.next) {
            case 0:
              _context8.prev = 0;
              _req$body = req.body, posId = _req$body.posId, orderId = _req$body.orderId;
              _context8.next = 4;
              return _order2.default.pushOrderToPos(posId, orderId);

            case 4:
              result = _context8.sent;
              return _context8.abrupt('return', res.status(200).json({ data: result }));

            case 8:
              _context8.prev = 8;
              _context8.t0 = _context8['catch'](0);

              console.error(_context8.t0);
              return _context8.abrupt('return', res.status(400).json({ message: _context8.t0.message }));

            case 12:
            case 'end':
              return _context8.stop();
          }
        }
      }, _callee8, _this8, [[0, 8]]);
    }))();
  }
};