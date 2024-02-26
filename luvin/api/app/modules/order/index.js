import express from 'express';
import OrderController from './order.controller';

import { USER_ROLES } from '../../config/constants';
import accessControlMiddleware from '../../middleware/access-control';

const router = express.Router();

router.post(
  '/',
  accessControlMiddleware(USER_ROLES.Customer),
  OrderController.createOrder
);

router.get(
  '/',
  accessControlMiddleware(USER_ROLES.CsStaff),
  OrderController.findOrders
);

router.get(
  '/history',
  accessControlMiddleware(USER_ROLES.Customer),
  OrderController.getOrderHistory
);

router.get(
  '/:orderId',
  accessControlMiddleware(USER_ROLES.Customer),
  OrderController.getDetailOrder
);

router.put(
  '/:orderId',
  accessControlMiddleware(USER_ROLES.CsStaff),
  OrderController.updateOrder
);

router.delete(
  '/:orderId',
  accessControlMiddleware(USER_ROLES.CsStaff),
  OrderController.deleteOrder
);

router.get(
  '/status/:status',
  accessControlMiddleware(USER_ROLES.CsStaff),
  OrderController.getOrders
);

router.post(
  '/push-to-pos',
  accessControlMiddleware(USER_ROLES.CsStaff),
  OrderController.pushOrderToPos
);

export default router;
