import express from 'express';
import PostController from './post.controller';

import { USER_ROLES } from '../../config/constants';
import accessControlMiddleware from '../../middleware/access-control';

const router = express.Router();

router.post(
  '/',
  accessControlMiddleware(USER_ROLES.B3Mod),
  PostController.createPost
);
router.get('/upcomming', PostController.getUpcommingEvents);
router.get('/occurred', PostController.getOccurredEvents);

router.put(
  '/:postSlug',
  accessControlMiddleware(USER_ROLES.B3Mod),
  PostController.updatePost
);

router.delete(
  '/:postSlug',
  accessControlMiddleware(USER_ROLES.B3Mod),
  PostController.deletePost
);

router.get('/', PostController.getPosts);
router.get('/:postSlug', PostController.getPost);

export default router;
