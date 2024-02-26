import express from 'express';
import VoucherController from './voucher.controller';

import { USER_ROLES } from '../../config/constants';
import accessControlMiddleware from '../../middleware/access-control';

const router = express.Router();

router.post(
  '/',
  accessControlMiddleware(USER_ROLES.Admin),
  VoucherController.createVoucher
);

router.get(
  '/all',
  accessControlMiddleware(USER_ROLES.CsStaff),
  VoucherController.findVouchers
);

router.get(
  '/user',
  accessControlMiddleware(USER_ROLES.Customer),
  VoucherController.getVoucherOfUser
);
router.post(
  '/redeem',
  accessControlMiddleware(USER_ROLES.Customer),
  VoucherController.redeem
);

router.put(
  '/:eventId',
  accessControlMiddleware(USER_ROLES.Admin),
  VoucherController.updateVoucher
);

router.delete(
  '/:eventId',
  accessControlMiddleware(USER_ROLES.Admin),
  VoucherController.deleteVoucher
);

export default router;
