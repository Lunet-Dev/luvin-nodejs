import express from 'express';

import ConfigController from './tasty.controller';
import { USER_ROLES } from '../../config/constants';
import accessControlMiddleware from '../../middleware/access-control';

const router = express.Router();

router.get('/', ConfigController.getConfig);
router.put(
  '/',
  accessControlMiddleware(USER_ROLES.CsStaff),
  ConfigController.updateConfig
);

export default router;
