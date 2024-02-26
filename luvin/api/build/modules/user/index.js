'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _user = require('./user.controller');

var _user2 = _interopRequireDefault(_user);

var _constants = require('../../config/constants');

var _accessControl = require('../../middleware/access-control');

var _accessControl2 = _interopRequireDefault(_accessControl);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();

router.get('/all', (0, _accessControl2.default)(_constants.USER_ROLES.CsStaff), _user2.default.findUsers);

router.post('/', (0, _accessControl2.default)(_constants.USER_ROLES.Admin), _user2.default.createUser);

router.put('/:userId', (0, _accessControl2.default)(_constants.USER_ROLES.SaleMod), _user2.default.updateUser);

router.delete('/:userId', (0, _accessControl2.default)(_constants.USER_ROLES.SaleMod), _user2.default.deleteUser);

exports.default = router;