'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray2 = require('babel-runtime/helpers/slicedToArray');

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _keys = require('lodash/keys');

var _keys2 = _interopRequireDefault(_keys);

var _sum = require('lodash/sum');

var _sum2 = _interopRequireDefault(_sum);

var _isEmpty = require('lodash/isEmpty');

var _isEmpty2 = _interopRequireDefault(_isEmpty);

var _order = require('./order.model');

var _order2 = _interopRequireDefault(_order);

var _product = require('../product/product.manager');

var _product2 = _interopRequireDefault(_product);

var _voucher = require('../voucher/voucher.manager');

var _voucher2 = _interopRequireDefault(_voucher);

var _pos = require('../pos/pos.manager');

var _pos2 = _interopRequireDefault(_pos);

var _buildPaginationQuery = require('../../lib/build-pagination-query');

var _buildPaginationQuery2 = _interopRequireDefault(_buildPaginationQuery);

var _makeObjectId = require('../../lib/make-object-id');

var _makeObjectId2 = _interopRequireDefault(_makeObjectId);

var _mailer = require('../../services/mailer');

var _mailer2 = _interopRequireDefault(_mailer);

var _vnpay = require('../../services/vnpay');

var _vnpay2 = _interopRequireDefault(_vnpay);

var _luvinCrm = require('../../services/luvin-crm');

var _luvinPos = require('../../services/luvin-pos');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  createOrder: function createOrder(orderData) {
    var _this = this;

    return (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
      var voucher, productIdents, products, orderDetails, order, totalWithoutDiscount, discount, amount, vnpUrl, orderDetail;
      return _regenerator2.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              voucher = {};

              if (!orderData.voucher) {
                _context.next = 6;
                break;
              }

              _context.next = 5;
              return _voucher2.default.redeemById(orderData.voucher, orderData.customer);

            case 5:
              voucher = _context.sent;

            case 6:
              productIdents = (0, _keys2.default)(orderData.products);
              _context.next = 9;
              return _product2.default.findProductByIdents(productIdents);

            case 9:
              products = _context.sent;
              orderDetails = products.map(function (product) {
                var productId = product._id,
                    _product$price = product.price,
                    price = _product$price === undefined ? 0 : _product$price,
                    _product$discount = product.discount,
                    discount = _product$discount === undefined ? 0 : _product$discount;

                var quantity = parseInt(orderData.products[product.ident] || 0);
                return {
                  productId: productId,
                  quantity: quantity,
                  discount: discount,
                  totalPrice: price * quantity - discount * quantity
                };
              });
              _context.next = 13;
              return new _order2.default((0, _extends3.default)({
                orderDetails: orderDetails
              }, orderData)).save();

            case 13:
              order = _context.sent;

              if (!(order.paymentMethod === 'vnpay')) {
                _context.next = 21;
                break;
              }

              // const amount = sum(
              //   order.orderDetails.map(({ totalPrice }) => totalPrice)
              // );
              totalWithoutDiscount = (0, _sum2.default)((order.orderDetails || []).map(function (_ref) {
                var totalPrice = _ref.totalPrice;
                return totalPrice;
              }));
              discount = 0;

              if (voucher.value) {
                if (voucher.type === 'percent') {
                  discount = totalWithoutDiscount / 100 * voucher.value;
                } else {
                  discount = voucher.value || 0;
                }
              }
              amount = totalWithoutDiscount - discount;
              vnpUrl = _vnpay2.default.createPaymentUrl(order._id, amount, 'Thanh toan giao dich ' + order._id, orderData.ipAddr);
              return _context.abrupt('return', vnpUrl);

            case 21:
              _context.next = 23;
              return _order2.default.findById(order._id).populate('orderDetails.productId').populate('customer').lean();

            case 23:
              orderDetail = _context.sent;

              // if (order.paymentMethod === 'cod') {
              //   const crmTransaction = await createTransaction(orderDetail);
              // }
              (0, _mailer2.default)(orderDetail.customer.email, 'order-confirmation', null, orderDetail);

              if (!(!(0, _isEmpty2.default)(voucher) && !voucher.isAll)) {
                _context.next = 28;
                break;
              }

              _context.next = 28;
              return _voucher2.default.updateVoucher(voucher._id, { active: false });

            case 28:
              return _context.abrupt('return', order);

            case 31:
              _context.prev = 31;
              _context.t0 = _context['catch'](0);
              throw _context.t0;

            case 34:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, _this, [[0, 31]]);
    }))();
  },
  updateOrder: function updateOrder(orderId, orderData) {
    var _this2 = this;

    return (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2() {
      var order;
      return _regenerator2.default.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              _context2.next = 3;
              return _order2.default.findByIdAndUpdate(orderId, { $set: orderData }, {
                new: true
              }).lean();

            case 3:
              order = _context2.sent;
              return _context2.abrupt('return', order);

            case 7:
              _context2.prev = 7;
              _context2.t0 = _context2['catch'](0);
              throw _context2.t0;

            case 10:
            case 'end':
              return _context2.stop();
          }
        }
      }, _callee2, _this2, [[0, 7]]);
    }))();
  },
  findOrderById: function findOrderById(orderId) {
    var _this3 = this;

    return (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3() {
      var order;
      return _regenerator2.default.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.prev = 0;
              _context3.next = 3;
              return _order2.default.findById(orderId).populate('orderDetails.productId').populate('voucher');

            case 3:
              order = _context3.sent;
              return _context3.abrupt('return', order);

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
  findOrdersByStatus: function findOrdersByStatus(status, limit, page) {
    var _this4 = this;

    return (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee4() {
      var conditions, query, orders;
      return _regenerator2.default.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _context4.prev = 0;
              conditions = {};

              if (status) {
                conditions.status = status;
              }
              query = _order2.default.find(conditions).populate('orderDetails.productId').populate('voucher');

              query = (0, _buildPaginationQuery2.default)(query, limit, page);
              _context4.next = 7;
              return query.lean().exec();

            case 7:
              orders = _context4.sent;
              return _context4.abrupt('return', orders);

            case 11:
              _context4.prev = 11;
              _context4.t0 = _context4['catch'](0);
              throw _context4.t0;

            case 14:
            case 'end':
              return _context4.stop();
          }
        }
      }, _callee4, _this4, [[0, 11]]);
    }))();
  },
  findOrdersByCustomerId: function findOrdersByCustomerId(customerId, limit, page) {
    var _this5 = this;

    return (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee5() {
      var conditions, query, orders;
      return _regenerator2.default.wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              _context5.prev = 0;
              conditions = {};

              if (customerId) {
                conditions.customer = (0, _makeObjectId2.default)(customerId);
              }
              query = _order2.default.find(conditions).populate('orderDetails.productId').populate('voucher');

              query = (0, _buildPaginationQuery2.default)(query, limit, page);
              _context5.next = 7;
              return query.lean().exec();

            case 7:
              orders = _context5.sent;
              return _context5.abrupt('return', orders);

            case 11:
              _context5.prev = 11;
              _context5.t0 = _context5['catch'](0);
              throw _context5.t0;

            case 14:
            case 'end':
              return _context5.stop();
          }
        }
      }, _callee5, _this5, [[0, 11]]);
    }))();
  },
  findOrders: function findOrders(limit, page, name, status, paymentMethod, paid) {
    var _this6 = this;

    return (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee6() {
      var conditions, query, order;
      return _regenerator2.default.wrap(function _callee6$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              _context6.prev = 0;
              conditions = {};

              if (status) {
                conditions.status = status;
              }
              if (paymentMethod) {
                conditions.paymentMethod = paymentMethod;
              }
              if (paid != 0) {
                conditions.paid = paid == 2 ? true : false;
              }
              query = _order2.default.find(conditions).populate('orderDetails.productId').populate('voucher').sort({ createdAt: -1 });

              if (name) {
                query.or([{ email: new RegExp(name, 'i') }, { phone: new RegExp(name, 'i') }, { name: new RegExp(name, 'i') }, { shipAddress: new RegExp(name, 'i') }, { shipCity: new RegExp(name, 'i') }]);
              }
              query = (0, _buildPaginationQuery2.default)(query, limit, page);
              _context6.next = 10;
              return query.lean().exec();

            case 10:
              order = _context6.sent;
              return _context6.abrupt('return', order);

            case 14:
              _context6.prev = 14;
              _context6.t0 = _context6['catch'](0);
              throw _context6.t0;

            case 17:
            case 'end':
              return _context6.stop();
          }
        }
      }, _callee6, _this6, [[0, 14]]);
    }))();
  },
  countOrders: function countOrders(name, status, paymentMethod, paid) {
    var _this7 = this;

    return (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee7() {
      var conditions, query, count;
      return _regenerator2.default.wrap(function _callee7$(_context7) {
        while (1) {
          switch (_context7.prev = _context7.next) {
            case 0:
              _context7.prev = 0;
              conditions = {};

              if (status) {
                conditions.status = status;
              }
              if (paymentMethod) {
                conditions.paymentMethod = paymentMethod;
              }
              if (paid) {
                conditions.paid = conditions.paid == 2 ? true : false;
              }
              query = _order2.default.count(conditions);

              if (name) {
                query.or([{ email: new RegExp(name, 'i') }, { phone: new RegExp(name, 'i') }, { name: new RegExp(name, 'i') }, { shipAddress: new RegExp(name, 'i') }, { shipCity: new RegExp(name, 'i') }]);
              }
              _context7.next = 9;
              return query.exec();

            case 9:
              count = _context7.sent;
              return _context7.abrupt('return', count);

            case 13:
              _context7.prev = 13;
              _context7.t0 = _context7['catch'](0);
              throw _context7.t0;

            case 16:
            case 'end':
              return _context7.stop();
          }
        }
      }, _callee7, _this7, [[0, 13]]);
    }))();
  },
  deleteOrder: function deleteOrder(orderId) {
    var _this8 = this;

    return (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee8() {
      var result;
      return _regenerator2.default.wrap(function _callee8$(_context8) {
        while (1) {
          switch (_context8.prev = _context8.next) {
            case 0:
              _context8.prev = 0;
              _context8.next = 3;
              return _order2.default.remove({ _id: (0, _makeObjectId2.default)(orderId) });

            case 3:
              result = _context8.sent;
              return _context8.abrupt('return', result);

            case 7:
              _context8.prev = 7;
              _context8.t0 = _context8['catch'](0);
              throw _context8.t0;

            case 10:
            case 'end':
              return _context8.stop();
          }
        }
      }, _callee8, _this8, [[0, 7]]);
    }))();
  },
  pushOrderToPos: function pushOrderToPos(posId, orderId) {
    var _this9 = this;

    return (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee9() {
      var _ref2, _ref3, pos, webOrder, posOrder, order;

      return _regenerator2.default.wrap(function _callee9$(_context9) {
        while (1) {
          switch (_context9.prev = _context9.next) {
            case 0:
              _context9.prev = 0;
              _context9.next = 3;
              return Promise.all([_pos2.default.findPosById(posId), _this9.findOrderById(orderId)]);

            case 3:
              _ref2 = _context9.sent;
              _ref3 = (0, _slicedToArray3.default)(_ref2, 2);
              pos = _ref3[0];
              webOrder = _ref3[1];
              _context9.next = 9;
              return (0, _luvinPos.createOrder)(pos, webOrder);

            case 9:
              posOrder = _context9.sent;
              _context9.next = 12;
              return _this9.updateOrder(orderId, {
                status: 'Processing',
                guid: posOrder.guid
              });

            case 12:
              order = _context9.sent;
              return _context9.abrupt('return', order);

            case 16:
              _context9.prev = 16;
              _context9.t0 = _context9['catch'](0);
              throw _context9.t0;

            case 19:
            case 'end':
              return _context9.stop();
          }
        }
      }, _callee9, _this9, [[0, 16]]);
    }))();
  }
};