import PageSettingManager from './page.manager';

export default {
  async getPage(req, res, next) {
    try {
      const { type } = req.params;
      const result = await PageSettingManager.getPageSettingByType(type);
      return res.status(200).json({ data: result });
    } catch (error) {
      return res.status(400).json({ message: error.message });
    }
  },

  async getPages(req, res, next) {
    try {
      const result = await PageSettingManager.getPageSettings();
      return res.status(200).json({ data: result });
    } catch (error) {
      return res.status(400).json({ message: error.message });
    }
  },

  async updatePage(req, res, next) {
    try {
      const { type } = req.params;
      const pageSetting = req.body;
      const result = await PageSettingManager.updatePageSetting(
        type,
        pageSetting
      );
      return res.status(200).json({ data: result });
    } catch (error) {
      return res.status(400).json({ message: error.message });
    }
  },
};
