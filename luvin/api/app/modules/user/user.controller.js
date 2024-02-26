import UserManager from './user.mannager';

import { USER_ROLES } from '../../config/constants';

export default {
  async findUsers(req, res, next) {
    try {
      const { name, level, role, limit, page } = req.query;
      const [users, total] = await Promise.all([
        UserManager.findUsers(limit, page, name, level, role),
        UserManager.countUsers(name, level, role),
      ]);
      return res.status(200).json({ data: { users, total } });
    } catch (error) {
      return res.status(400).json({ message: error.message });
    }
  },

  async createUser(req, res, next) {
    try {
      const userInfo = req.body;
      const result = await UserManager.createUser(userInfo);
      return res.status(200).json({ data: result });
    } catch (error) {
      return res.status(400).json({ message: error.message });
    }
  },

  async updateUser(req, res, next) {
    try {
      const { _id, role } = req.currentUser;
      const { userId } = req.params;
      if (role !== USER_ROLES.CsStaff && _id === userId) {
        return res.sendStatus(403);
      }
      const userInfo = req.body;
      const result = await UserManager.updateUser(userId, userInfo);
      return res.status(200).json({ data: result });
    } catch (error) {
      return res.status(400).json({ message: error.message });
    }
  },

  async deleteUser(req, res, next) {
    try {
      const { userId } = req.params;
      const result = await UserManager.deleteUser(userId);
      return res.status(200).json({ data: result });
    } catch (error) {
      return res.status(400).json({ message: error.message });
    }
  },
};
