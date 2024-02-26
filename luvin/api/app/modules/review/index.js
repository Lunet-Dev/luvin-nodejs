import express from 'express';
import ReviewController from './review.controller';

import { USER_ROLES } from '../../config/constants';
import accessControlMiddleware from '../../middleware/access-control';

const router = express.Router();

router.post(
  '/',
  // accessControlMiddleware(USER_ROLES.Customer),
  ReviewController.createReview
);

router.put(
  '/:reviewId',
  accessControlMiddleware(USER_ROLES.Customer),
  ReviewController.updateReview
);

router.get('/', ReviewController.getReviews);
router.get('/all', ReviewController.getAllReviews);

export default router;
