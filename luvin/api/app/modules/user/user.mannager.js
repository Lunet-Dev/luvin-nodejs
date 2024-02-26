import UserModel from './user.model';

import { insertCustomer, updateCustomer } from '../../services/luvin-crm';

import buildPaginationQuery from '../../lib/build-pagination-query';
import makeObjectId from '../../lib/make-object-id';

export default {
  async findOneUser(conditions) {
    try {
      const user = await UserModel.findOne(conditions);
      return user;
    } catch (error) {
      throw error;
    }
  },

  async createUser(userInfo) {
    try {
      const user = await new UserModel(userInfo).save();
      const crmUser = await insertCustomer(userInfo);
      return user;
      // const token = user.generateToken();
    } catch (error) {
      throw error;
    }
  },

  async updateUser(userId, userInfo) {
    try {
      const { password, ...uInfo } = userInfo;
      if (password) {
        const user = await this.findOneUser({
          _id: makeObjectId(userId),
        });
        const hashPassword = () =>
          new Promise((resolve, reject) => {
            user._hashPassword(password, (err, hash) => {
              if (err) {
                return reject(err);
              }
              return resolve(hash);
            });
          });
        const hash = await hashPassword();
        uInfo.password = hash;
      }
      const user = await UserModel.findByIdAndUpdate(
        userId,
        {
          $set: uInfo,
        },
        { new: true }
      ).lean();
      const crmUser = await updateCustomer(user);
      return user;
    } catch (error) {
      throw error;
    }
  },

  async deleteUser(userId) {
    try {
      const result = await UserModel.remove({ _id: makeObjectId(userId) });
      return result;
    } catch (error) {
      throw error;
    }
  },

  async findUsers(limit, page, name, level, role) {
    try {
      const conditions = {};
      if (level) {
        conditions.level = level;
      }
      if (role) {
        conditions.role = role;
      }
      let query = UserModel.find(conditions).sort({ createdAt: -1 });
      if (name) {
        query.or([
          { email: new RegExp(name, 'i') },
          { phone: new RegExp(name, 'i') },
          { name: new RegExp(name, 'i') },
          { address: new RegExp(name, 'i') },
        ]);
      }
      query = buildPaginationQuery(query, limit, page);
      const users = await query.lean().exec();
      return users;
    } catch (error) {
      throw error;
    }
  },

  async countUsers(name, level, role) {
    try {
      const conditions = {};
      if (level) {
        conditions.level = level;
      }
      if (role) {
        conditions.role = role;
      }
      let query = UserModel.count(conditions);
      if (name) {
        query.or([
          { email: new RegExp(name, 'i') },
          { phone: new RegExp(name, 'i') },
          { name: new RegExp(name, 'i') },
          { address: new RegExp(name, 'i') },
        ]);
      }
      const count = await query.exec();
      return count;
    } catch (error) {
      throw error;
    }
  },
};

// class UserManager extends BaseManager {
//   createUser = async (userInfo) => {
//     try {
//       const user = await new User(userInfo).save();
//       return user;
//       // const token = user.generateToken();
//     } catch (error) {
//       throw error;
//     }
//   };

//   update = async (userId, userInfo) => {
//     try {
//       const user = await User.findByIdAndUpdate(userId, userInfo, {
//         new: true,
//       });
//       return { success: true, user };
//     } catch (error) {
//       return { success: false, error };
//     }
//   };

//   login = async (req, res) => {};

//   search = async (req, res) => {};

//   findAll = async (req, res) => {};

//   delete = async (req, res) => {};
// }
