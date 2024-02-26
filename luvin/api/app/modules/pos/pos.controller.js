import PosManager from './pos.manager';

export default {
  async createPos(req, res, next) {
    try {
      const posData = req.body;
      const result = await PosManager.createPos(posData);
      return res.status(200).json({ data: result });
    } catch (error) {
      console.error(error);
      return res.status(400).json({ message: error.message });
    }
  },

  async updatePos(req, res, next) {
    try {
      const { posId } = req.params;
      const posData = req.body;
      const result = await PosManager.updatePos(posId, posData);
      return res.status(200).json({ data: result });
    } catch (error) {
      return res.status(400).json({ message: error.message });
    }
  },

  async deletePos(req, res, next) {
    try {
      const { posId } = req.params;
      const result = await PosManager.deletePos(posId);
      return res.status(200).json({ data: result });
    } catch (error) {
      console.error(error);
      return res.status(400).json({ message: error.message });
    }
  },

  async getPos(req, res, next) {
    try {
      const result = await PosManager.getPos();
      return res.status(200).json({ data: result });
    } catch (error) {
      return res.status(400).json({ message: error.message });
    }
  },
};
