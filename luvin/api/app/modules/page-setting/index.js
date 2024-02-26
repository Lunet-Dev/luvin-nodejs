import express from 'express';
import PageSettingController from './page.controller';

import { USER_ROLES } from '../../config/constants';
import accessControlMiddleware from '../../middleware/access-control';

const router = express.Router();

router.get('/:type', PageSettingController.getPage);
router.get('/', PageSettingController.getPages);
router.put(
  '/:type',
  accessControlMiddleware(USER_ROLES.B3Mod),
  PageSettingController.updatePage
);

export default router;
