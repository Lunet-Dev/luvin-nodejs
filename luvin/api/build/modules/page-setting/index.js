'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _page = require('./page.controller');

var _page2 = _interopRequireDefault(_page);

var _constants = require('../../config/constants');

var _accessControl = require('../../middleware/access-control');

var _accessControl2 = _interopRequireDefault(_accessControl);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();

router.get('/:type', _page2.default.getPage);
router.get('/', _page2.default.getPages);
router.put('/:type', (0, _accessControl2.default)(_constants.USER_ROLES.B3Mod), _page2.default.updatePage);

exports.default = router;