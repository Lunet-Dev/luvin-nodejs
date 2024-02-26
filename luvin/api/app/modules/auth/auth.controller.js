import values from 'lodash/values';
import AuthManager from './auth.manager';

export default {
  async getCurrentUser(req, res, next) {
    try {
      const currentUser = req.currentUser;
      return res.status(200).json({ data: currentUser });
    } catch (error) {
      return res.status(400).json({ message: error.message });
    }
  },

  async login(req, res, next) {
    try {
      const { phone, password } = req.body;
      const result = await AuthManager.login(phone, password);
      return res.status(200).json({ data: result });
    } catch (error) {
      return res.status(400).json({ message: error.message });
    }
  },

  async register(req, res, next) {
    try {
      const userInfo = req.body;
      const result = await AuthManager.register(userInfo);
      return res.status(200).json({ data: result });
    } catch (error) {
      if (error.errors) {
        const message = values(error.errors)
          .map((err) => err.message)
          .join(', ');
        return res.status(400).json({ message });
      }
      return res.status(400).json({ message: error.message });
    }
  },

  async updatePassword(req, res, next) {
    try {
      const { _id } = req.currentUser;
      const currentUserId = _id.toString();
      const { oldPassword, newPassword, userId } = req.body;
      if (currentUserId !== userId) {
        return res.sendStatus(403);
      }
      const result = await AuthManager.updatePassword(
        userId,
        oldPassword,
        newPassword
      );
      return res.status(200).json({ data: result });
    } catch (error) {
      return res.status(400).json({ message: error.message });
    }
  },

  async forgotPassword(req, res, next) {
    try {
      const { username } = req.body;
      const result = await AuthManager.forgotPassword(username);
      return res.status(200).json({ data: result });
    } catch (error) {
      return res.status(400).json({ message: error.message });
    }
  },

  async forgotPasswordConfirmation(req, res, next) {
    try {
      const { token, password } = req.body;
      const result = await AuthManager.forgotPasswordConfirmation(
        token,
        password
      );
      return res.status(200).json({ data: result });
    } catch (error) {
      return res.status(400).json({ message: error.message });
    }
  },
};
