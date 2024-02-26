import express from 'express';
import ProductController from './product.controller';

import { USER_ROLES } from '../../config/constants';
import accessControlMiddleware from '../../middleware/access-control';

const router = express.Router();

router.get(
  '/sync-with-luvin',
  accessControlMiddleware(USER_ROLES.Admin),
  ProductController.syncWithLuvin
);
router.get('/sale', ProductController.getProductsSale);
router.get('/:slug', ProductController.getDetailProduct);
router.put(
  '/:ident',
  accessControlMiddleware(USER_ROLES.SaleStaff),
  ProductController.updateProduct
);
router.delete(
  '/:ident',
  accessControlMiddleware(USER_ROLES.Admin),
  ProductController.deleteProduct
);
router.get('/category/:categorySlug', ProductController.getProductsOfCategory);
router.get('/', ProductController.findProduct);

export default router;
