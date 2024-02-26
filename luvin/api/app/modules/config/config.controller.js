import ConfigManager from './config.manager';

export default {
  async getConfig(req, res, next) {
    try {
      const result = await ConfigManager.getConfig();
      return res.status(200).json({ data: result });
    } catch (error) {
      return res.status(400).json({ message: error.message });
    }
  },

  async updateConfig(req, res, next) {
    try {
      const configData = req.body;
      const result = await ConfigManager.upsertConfig(1, configData);
      return res.status(200).json({ data: result });
    } catch (error) {
      return res.status(400).json({ message: error.message });
    }
  },
};
