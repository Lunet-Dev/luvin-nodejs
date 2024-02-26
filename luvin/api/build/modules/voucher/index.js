'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _voucher = require('./voucher.controller');

var _voucher2 = _interopRequireDefault(_voucher);

var _constants = require('../../config/constants');

var _accessControl = require('../../middleware/access-control');

var _accessControl2 = _interopRequireDefault(_accessControl);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();

router.post('/', (0, _accessControl2.default)(_constants.USER_ROLES.Admin), _voucher2.default.createVoucher);

router.get('/all', (0, _accessControl2.default)(_constants.USER_ROLES.CsStaff), _voucher2.default.findVouchers);

router.get('/user', (0, _accessControl2.default)(_constants.USER_ROLES.Customer), _voucher2.default.getVoucherOfUser);
router.post('/redeem', (0, _accessControl2.default)(_constants.USER_ROLES.Customer), _voucher2.default.redeem);

router.put('/:eventId', (0, _accessControl2.default)(_constants.USER_ROLES.Admin), _voucher2.default.updateVoucher);

router.delete('/:eventId', (0, _accessControl2.default)(_constants.USER_ROLES.Admin), _voucher2.default.deleteVoucher);

exports.default = router;