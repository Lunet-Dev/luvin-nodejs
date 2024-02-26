'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _product = require('./product.controller');

var _product2 = _interopRequireDefault(_product);

var _constants = require('../../config/constants');

var _accessControl = require('../../middleware/access-control');

var _accessControl2 = _interopRequireDefault(_accessControl);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();

router.get('/sync-with-luvin', (0, _accessControl2.default)(_constants.USER_ROLES.Admin), _product2.default.syncWithLuvin);
router.get('/sale', _product2.default.getProductsSale);
router.get('/:slug', _product2.default.getDetailProduct);
router.put('/:ident', (0, _accessControl2.default)(_constants.USER_ROLES.SaleStaff), _product2.default.updateProduct);
router.delete('/:ident', (0, _accessControl2.default)(_constants.USER_ROLES.Admin), _product2.default.deleteProduct);
router.get('/category/:categorySlug', _product2.default.getProductsOfCategory);
router.get('/', _product2.default.findProduct);

exports.default = router;