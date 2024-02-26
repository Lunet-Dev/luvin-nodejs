'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _config = require('./config.controller');

var _config2 = _interopRequireDefault(_config);

var _constants = require('../../config/constants');

var _accessControl = require('../../middleware/access-control');

var _accessControl2 = _interopRequireDefault(_accessControl);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();

router.get('/', _config2.default.getConfig);
router.put('/', (0, _accessControl2.default)(_constants.USER_ROLES.CsStaff), _config2.default.updateConfig);

exports.default = router;