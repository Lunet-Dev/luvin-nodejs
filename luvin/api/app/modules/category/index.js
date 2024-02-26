import express from 'express';
import CategoryController from './category.controller';

import { USER_ROLES } from '../../config/constants';
import accessControlMiddleware from '../../middleware/access-control';

const router = express.Router();

router.get('/all', CategoryController.getAllCategories);
router.put(
  '/:ident',
  accessControlMiddleware(USER_ROLES.CsStaff),
  CategoryController.updateCategory
);

export default router;
