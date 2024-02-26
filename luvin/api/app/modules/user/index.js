import express from 'express';
import UserController from './user.controller';

import { USER_ROLES } from '../../config/constants';

import accessControlMiddleware from '../../middleware/access-control';

const router = express.Router();

router.get(
  '/all',
  accessControlMiddleware(USER_ROLES.CsStaff),
  UserController.findUsers
);

router.post(
  '/',
  accessControlMiddleware(USER_ROLES.Admin),
  UserController.createUser
);

router.put(
  '/:userId',
  accessControlMiddleware(USER_ROLES.SaleMod),
  UserController.updateUser
);

router.delete(
  '/:userId',
  accessControlMiddleware(USER_ROLES.SaleMod),
  UserController.deleteUser
);

export default router;
