import express from 'express';
import PosController from './pos.controller';

import { USER_ROLES } from '../../config/constants';
import accessControlMiddleware from '../../middleware/access-control';

const router = express.Router();

router.post(
  '/',
  accessControlMiddleware(USER_ROLES.CsStaff),
  PosController.createPos
);

router.put(
  '/:posId',
  accessControlMiddleware(USER_ROLES.CsStaff),
  PosController.updatePos
);

router.delete(
  '/:posId',
  accessControlMiddleware(USER_ROLES.CsStaff),
  PosController.deletePos
);

router.get('/', PosController.getPos);

export default router;
