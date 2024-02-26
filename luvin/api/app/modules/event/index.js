import express from 'express';
import EventController from './event.controller';

import { USER_ROLES } from '../../config/constants';
import accessControlMiddleware from '../../middleware/access-control';

const router = express.Router();

router.post(
  '/',
  accessControlMiddleware(USER_ROLES.CsStaff),
  EventController.createEvent
);

router.get('/upcomming', EventController.getUpcommingEvents);
router.get('/occurred', EventController.getOccurredEvents);
// router.post('/joinEventError', EventController.getOccurredEvents); TODO: subcribe

router.get('/:eventSlug', EventController.getDetailEvent);

router.put(
  '/:eventId',
  accessControlMiddleware(USER_ROLES.CsStaff),
  EventController.updateEvent
);

router.delete(
  '/:eventId',
  accessControlMiddleware(USER_ROLES.CsStaff),
  EventController.deleteEvent
);

export default router;
