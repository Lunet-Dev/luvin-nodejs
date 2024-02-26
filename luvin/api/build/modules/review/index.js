'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _review = require('./review.controller');

var _review2 = _interopRequireDefault(_review);

var _constants = require('../../config/constants');

var _accessControl = require('../../middleware/access-control');

var _accessControl2 = _interopRequireDefault(_accessControl);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();

router.post('/',
// accessControlMiddleware(USER_ROLES.Customer),
_review2.default.createReview);

router.put('/:reviewId', (0, _accessControl2.default)(_constants.USER_ROLES.Customer), _review2.default.updateReview);

router.get('/', _review2.default.getReviews);
router.get('/all', _review2.default.getAllReviews);

exports.default = router;