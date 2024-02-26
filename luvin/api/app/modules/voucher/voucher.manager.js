import VoucherModel from './voucher.model';

import buildPaginationQuery from '../../lib/build-pagination-query';
import makeObjectId from '../../lib/make-object-id';

export default {
  async findVouchers(limit, page, code, available, type) {
    try {
      const conditions = {};
      if (type) {
        if (type == 1) {
          conditions.isAll = true;
        } else if (type == 2) {
          conditions.isAll = false;
        }
      }
      if (code) {
        conditions.code = new RegExp(code, 'i');
      }
      if (available) {
        const now = new Date();
        if (available == 1) {
          conditions.validAt = { $gt: now };
        } else if (available == 2) {
          conditions.validAt = { $lt: now };
        }
      }
      let query = VoucherModel.find(conditions).sort({ createdAt: -1 });
      query = buildPaginationQuery(query, limit, page);
      const vouchers = await query.lean().exec();
      return vouchers;
    } catch (error) {
      throw error;
    }
  },

  async countVouchers(code, available) {
    try {
      const conditions = {};
      if (code) {
        conditions.code = new RegExp(code, 'i');
      }
      if (available) {
        const now = new Date();
        conditions.validAt = { $gt: now };
      }
      const count = await VoucherModel.count(conditions);
      return count;
    } catch (error) {
      throw error;
    }
  },

  async createVoucher(voucherData) {
    try {
      const voucher = await new VoucherModel(voucherData).save();
      return voucher;
    } catch (error) {
      throw error;
    }
  },

  async updateVoucher(voucherId, voucherData) {
    try {
      const voucher = await VoucherModel.findByIdAndUpdate(
        voucherId,
        { $set: voucherData },
        {
          new: true,
        }
      ).lean();
      return voucher;
    } catch (error) {
      throw error;
    }
  },

  async getVoucherOfUser(userId) {
    try {
      const now = new Date();
      const vouchers = await VoucherModel.find({
        $or: [{ isAll: true }, { userIds: makeObjectId(userId) }],
        validAt: { $gt: now },
      })
        .sort({ createdAt: -1 })
        .lean();
      return vouchers;
    } catch (error) {
      throw error;
    }
  },

  async getVoucherByCode(code) {
    try {
      const voucher = await VoucherModel.findOne({ code }).lean();
      return voucher;
    } catch (error) {
      throw error;
    }
  },

  async deleteVoucher(orderId) {
    try {
      const result = await VoucherModel.remove({ _id: makeObjectId(orderId) });
      return result;
    } catch (error) {
      throw error;
    }
  },

  async redeem(code, userId) {
    try {
      const voucher = await VoucherModel.findOne({
        active: true,
        code,
        $or: [{ isAll: true }, { userIds: makeObjectId(userId) }],
      }).lean();
      if (!voucher) {
        throw new Error('Mã voucher không tồn tại!');
      }
      const now = new Date();
      const voucherValidTime = new Date(voucher.validAt);
      if (now > voucherValidTime) {
        throw new Error('Mã voucher đã hết hạn sử dụng!');
      }
      return voucher;
    } catch (error) {
      throw error;
    }
  },

  async redeemById(voucherId, userId) {
    try {
      const voucher = await VoucherModel.findOne({
        _id: makeObjectId(voucherId),
        active: true,
        // voucherId,
        $or: [{ isAll: true }, { userIds: makeObjectId(userId) }],
      }).lean();
      // const voucher = await VoucherModel.findById({
      //   active: true,
      //   voucherId,
      //   $or: [{ isAll: true }, { userIds: makeObjectId(userId) }],
      // }).lean();
      if (!voucher) {
        throw new Error('Mã voucher không tồn tại!');
      }
      const now = new Date();
      const voucherValidTime = new Date(voucher.validAt);
      if (now > voucherValidTime) {
        throw new Error('Mã voucher đã hết hạn sử dụng!');
      }
      return voucher;
    } catch (error) {
      throw error;
    }
  },
};
