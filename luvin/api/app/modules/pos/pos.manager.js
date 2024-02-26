import PosModel from './pos.model';

export default {
  async createPos(posData) {
    try {
      const pos = await new PosModel(posData).save();
      return pos;
    } catch (error) {
      throw error;
    }
  },

  async updatePos(posId, posData) {
    try {
      const pos = await PosModel.findByIdAndUpdate(
        posId,
        { $set: posData },
        { new: true }
      ).lean();
      return pos;
    } catch (error) {
      throw error;
    }
  },

  async deletePos(posId) {
    try {
      const result = await PosModel.findByIdAndRemove(posId);
      return result;
    } catch (error) {
      throw error;
    }
  },

  async getPos() {
    try {
      const pos = await PosModel.find({}).lean().sort({ createdAt: -1 });
      return pos;
    } catch (error) {
      throw error;
    }
  },

  async findPosById(posId) {
    try {
      const pos = await PosModel.findById(posId);
      return pos;
    } catch (error) {
      throw error;
    }
  },
};
