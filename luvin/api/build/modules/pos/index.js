'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _pos = require('./pos.controller');

var _pos2 = _interopRequireDefault(_pos);

var _constants = require('../../config/constants');

var _accessControl = require('../../middleware/access-control');

var _accessControl2 = _interopRequireDefault(_accessControl);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();

router.post('/', (0, _accessControl2.default)(_constants.USER_ROLES.CsStaff), _pos2.default.createPos);

router.put('/:posId', (0, _accessControl2.default)(_constants.USER_ROLES.CsStaff), _pos2.default.updatePos);

router.delete('/:posId', (0, _accessControl2.default)(_constants.USER_ROLES.CsStaff), _pos2.default.deletePos);

router.get('/', _pos2.default.getPos);

exports.default = router;