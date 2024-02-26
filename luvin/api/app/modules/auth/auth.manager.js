import jwt from 'jsonwebtoken';
import UserManager from '../user/user.mannager';

import sendEmail from '../../services/mailer';
import { insertCustomer, updateCustomer } from '../../services/luvin-crm';

import makeObjectId from '../../lib/make-object-id';

import keys from '../../config/keys';
import UserModel from '../user/user.model';

const { secret } = keys.jwt;

export default {
  async login(username, password) {
    try {
      // const user = await UserModel.findOne({ username });
      const user = await UserManager.findOneUser({
        $or: [
          { email: { $regex: username, $options: 'i' } },
          { phone: { $regex: username, $options: 'i' } },
        ],
      });
      if (!user) {
        throw new Error('Thông tin đăng nhập không chính xác.');
      }
      if (!user.authenticate(password)) {
        throw new Error('Sai password.');
      }
      const token = user.generateToken();
      return { token, user };
    } catch (error) {
      throw error;
    }
  },

  async register(userInfo) {
    try {
      const user = await UserManager.createUser(userInfo);
      const crmUser = await insertCustomer(userInfo);
      sendEmail(user.email, 'signup', null, user);
      const token = user.generateToken();
      return { token, user };
    } catch (error) {
      throw error;
    }
  },

  async forgotPassword(username) {
    try {
      const user = await UserManager.findOneUser({
        $or: [
          { email: { $regex: username, $options: 'i' } },
          { phone: { $regex: username, $options: 'i' } },
        ],
      });
      if (!user) {
        throw new Error('Người dùng không tồn tại');
      }
      const token = user.generateToken();
      await sendEmail(user.email, 'reset', keys.app.clientURL, token);
      return { success: true };
    } catch (error) {
      throw error;
    }
  },

  async validateToken(token) {
    return new Promise((resolve, reject) => {
      jwt.verify(token, secret, async (err, decoded) => {
        if (err) {
          return reject(new Error('Token không hợp lệ'));
        }
        return resolve(decoded._id);
      });
    });
  },

  async forgotPasswordConfirmation(token, newPassword) {
    try {
      const userId = await this.validateToken(token);
      const user = await UserManager.findOneUser({
        _id: makeObjectId(userId),
      });
      if (!user) {
        return { message: 'Không tìm thấy thông tin thành viên.' };
      }
      const hashPassword = () =>
        new Promise((resolve, reject) => {
          user._hashPassword(newPassword, (err, hash) => {
            if (err) {
              return reject(err);
            }
            return resolve(hash);
          });
        });
      const hash = await hashPassword();
      const newUser = await UserModel.findByIdAndUpdate(
        userId,
        {
          $set: { password: hash },
        },
        { new: true }
      );
      const newToken = newUser.generateToken();
      return { token: newToken, user: newUser };
    } catch (error) {
      throw error;
    }
  },

  async updatePassword(userId, oldPassword, newPassword) {
    try {
      // const user = await UserModel.findOne({ username });
      const user = await UserManager.findOneUser({
        _id: makeObjectId(userId),
      });
      if (!user) {
        return { message: 'Không tìm thấy thông tin thành viên.' };
      }
      if (!user.authenticate(oldPassword)) {
        return { message: 'Sai password.' };
      }
      const hashPassword = () =>
        new Promise((resolve, reject) => {
          user._hashPassword(newPassword, (err, hash) => {
            if (err) {
              return reject(err);
            }
            return resolve(hash);
          });
        });
      const hash = await hashPassword();
      const newUser = await UserModel.findByIdAndUpdate(
        userId,
        {
          $set: { password: hash },
        },
        { new: true }
      );
      const newToken = newUser.generateToken();
      return { token: newToken, user: newUser };
      // user.password = newPassword;
      // user.save();
      // const token = user.generateToken();
      // return { token, user };
    } catch (error) {
      throw error;
    }
  },
};
