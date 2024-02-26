import ConfigModel from './config.model';

export default {
  async upsertConfig(ident, configData) {
    try {
      const config = await ConfigModel.findOneAndUpdate(
        { ident },
        { $set: configData },
        { upsert: true, new: true, setDefaultsOnInsert: true }
      ).lean();
      return config;
    } catch (error) {
      throw error;
    }
  },

  async getConfig() {
    try {
      const config = await ConfigModel.findOne({ ident: 1 }).lean();
      return config;
    } catch (error) {
      throw error;
    }
  },
};
