'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _category = require('./category.controller');

var _category2 = _interopRequireDefault(_category);

var _constants = require('../../config/constants');

var _accessControl = require('../../middleware/access-control');

var _accessControl2 = _interopRequireDefault(_accessControl);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();

router.get('/all', _category2.default.getAllCategories);
router.put('/:ident', (0, _accessControl2.default)(_constants.USER_ROLES.CsStaff), _category2.default.updateCategory);

exports.default = router;