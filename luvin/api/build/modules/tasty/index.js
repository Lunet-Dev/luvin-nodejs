'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _tasty = require('./tasty.controller');

var _tasty2 = _interopRequireDefault(_tasty);

var _constants = require('../../config/constants');

var _accessControl = require('../../middleware/access-control');

var _accessControl2 = _interopRequireDefault(_accessControl);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();

router.get('/', _tasty2.default.getConfig);
router.put('/', (0, _accessControl2.default)(_constants.USER_ROLES.B3Mod), _tasty2.default.updateConfig);

exports.default = router;