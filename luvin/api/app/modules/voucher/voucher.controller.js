import VoucherManager from './voucher.manager';

export default {
  async findVouchers(req, res, next) {
    try {
      const { type, code, available, limit, page } = req.query;
      const [vouchers, total] = await Promise.all([
        VoucherManager.findVouchers(limit, page, code, available, type),
        VoucherManager.countVouchers(code, available),
      ]);
      return res.status(200).json({ data: { vouchers, total } });
    } catch (error) {
      return res.status(400).json({ message: error.message });
    }
  },

  async createVoucher(req, res, next) {
    try {
      const voucherData = req.body;
      const result = await VoucherManager.createVoucher(voucherData);
      return res.status(200).json({ data: result });
    } catch (error) {
      return res.status(400).json({ message: error.message });
    }
  },

  async updateVoucher(req, res, next) {
    try {
      const { voucherId } = req.params;
      const voucherData = req.body;
      const result = await VoucherManager.updateEvent(voucherId, voucherData);
      return res.status(200).json({ data: result });
    } catch (error) {
      return res.status(400).json({ message: error.message });
    }
  },

  async deleteVoucher(req, res, next) {
    try {
      const { voucherId } = req.params;
      const result = await VoucherManager.deleteVoucher(voucherId);
      return res.status(200).json({ data: result });
    } catch (error) {
      return res.status(400).json({ message: error.message });
    }
  },

  async getVoucherOfUser(req, res, next) {
    try {
      const { _id: userId } = req.currentUser;
      const result = await VoucherManager.getVoucherOfUser(userId);
      return res.status(200).json({ data: result });
    } catch (error) {
      return res.status(400).json({ message: error.message });
    }
  },

  async redeem(req, res, next) {
    try {
      const { code } = req.body;
      const { _id: userId } = req.currentUser;
      const result = await VoucherManager.redeem(code, userId);
      return res.status(200).json({ data: result });
    } catch (error) {
      return res.status(400).json({ message: error.message });
    }
  },
};
