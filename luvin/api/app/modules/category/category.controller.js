import CategoryManager from './category.manager';

export default {
  async getAllCategories(req, res, next) {
    try {
      const result = await CategoryManager.getAllCategories();
      return res.status(200).json({ data: result });
    } catch (error) {
      return res.status(400).json({ message: error.message });
    }
  },

  async updateCategory(req, res, next) {
    try {
      const { ident } = req.params;
      const categoryData = req.body;
      const result = await CategoryManager.upsertCategory(ident, categoryData);
      return res.status(200).json({ data: result });
    } catch (error) {
      return res.status(400).json({ message: error.message });
    }
  },
};
