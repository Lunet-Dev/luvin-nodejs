'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _order = require('./order.controller');

var _order2 = _interopRequireDefault(_order);

var _constants = require('../../config/constants');

var _accessControl = require('../../middleware/access-control');

var _accessControl2 = _interopRequireDefault(_accessControl);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();

router.post('/', (0, _accessControl2.default)(_constants.USER_ROLES.Customer), _order2.default.createOrder);

router.get('/', (0, _accessControl2.default)(_constants.USER_ROLES.CsStaff), _order2.default.findOrders);

router.get('/history', (0, _accessControl2.default)(_constants.USER_ROLES.Customer), _order2.default.getOrderHistory);

router.get('/:orderId', (0, _accessControl2.default)(_constants.USER_ROLES.Customer), _order2.default.getDetailOrder);

router.put('/:orderId', (0, _accessControl2.default)(_constants.USER_ROLES.CsStaff), _order2.default.updateOrder);

router.delete('/:orderId', (0, _accessControl2.default)(_constants.USER_ROLES.CsStaff), _order2.default.deleteOrder);

router.get('/status/:status', (0, _accessControl2.default)(_constants.USER_ROLES.CsStaff), _order2.default.getOrders);

router.post('/push-to-pos', (0, _accessControl2.default)(_constants.USER_ROLES.CsStaff), _order2.default.pushOrderToPos);

exports.default = router;