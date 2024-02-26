'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _post = require('./post.controller');

var _post2 = _interopRequireDefault(_post);

var _constants = require('../../config/constants');

var _accessControl = require('../../middleware/access-control');

var _accessControl2 = _interopRequireDefault(_accessControl);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();

router.post('/', (0, _accessControl2.default)(_constants.USER_ROLES.B3Mod), _post2.default.createPost);
router.get('/upcomming', _post2.default.getUpcommingEvents);
router.get('/occurred', _post2.default.getOccurredEvents);

router.put('/:postSlug', (0, _accessControl2.default)(_constants.USER_ROLES.B3Mod), _post2.default.updatePost);

router.delete('/:postSlug', (0, _accessControl2.default)(_constants.USER_ROLES.B3Mod), _post2.default.deletePost);

router.get('/', _post2.default.getPosts);
router.get('/:postSlug', _post2.default.getPost);

exports.default = router;