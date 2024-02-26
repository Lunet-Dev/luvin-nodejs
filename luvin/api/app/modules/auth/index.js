import express from 'express';
import AuthController from './auth.controller';

import authenticate from '../../middleware/authenticate';

const router = express.Router();

router.post('/login', AuthController.login);

router.post('/register', AuthController.register);

router.post('/forgot-password', AuthController.forgotPassword);
router.post(
  '/forgot-password/confirmation',
  AuthController.forgotPasswordConfirmation
);

router.get('/me', authenticate, AuthController.getCurrentUser);

router.put('/update-password', authenticate, AuthController.updatePassword);

export default router;
