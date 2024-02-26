'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _event = require('./event.controller');

var _event2 = _interopRequireDefault(_event);

var _constants = require('../../config/constants');

var _accessControl = require('../../middleware/access-control');

var _accessControl2 = _interopRequireDefault(_accessControl);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();

router.post('/', (0, _accessControl2.default)(_constants.USER_ROLES.CsStaff), _event2.default.createEvent);

router.get('/upcomming', _event2.default.getUpcommingEvents);
router.get('/occurred', _event2.default.getOccurredEvents);
// router.post('/joinEventError', EventController.getOccurredEvents); TODO: subcribe

router.get('/:eventSlug', _event2.default.getDetailEvent);

router.put('/:eventId', (0, _accessControl2.default)(_constants.USER_ROLES.CsStaff), _event2.default.updateEvent);

router.delete('/:eventId', (0, _accessControl2.default)(_constants.USER_ROLES.CsStaff), _event2.default.deleteEvent);

exports.default = router;