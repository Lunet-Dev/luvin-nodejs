import PageSettingModel from './page.model';

export default {
  async updatePageSetting(type, pageSetting) {
    try {
      const _pageSetting = await PageSettingModel.findOneAndUpdate(
        { type },
        { $set: pageSetting },
        { new: true }
      ).lean();
      return _pageSetting;
    } catch (error) {
      throw error;
    }
  },

  async getPageSettingByType(type) {
    try {
      const pageSetting = await PageSettingModel.findOne({ type });
      return pageSetting;
    } catch (error) {
      throw error;
    }
  },

  async getPageSettings() {
    try {
      const pageSettings = await PageSettingModel.find({}).lean();
      return pageSettings;
    } catch (error) {
      throw error;
    }
  },
};
