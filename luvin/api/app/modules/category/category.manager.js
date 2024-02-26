import CategoryModel from './category.model';

export default {
  async upsertCategory(ident, categoryData) {
    try {
      const category = await CategoryModel.findOneAndUpdate(
        { ident },
        { $set: categoryData },
        { upsert: true, new: true, setDefaultsOnInsert: true }
      ).lean();
      return category;
    } catch (error) {
      throw error;
    }
  },

  async createCategory(categoryData) {
    try {
      const category = await new CategoryModel(categoryData).save();
      return category;
    } catch (error) {
      throw error;
    }
  },

  async deleteCategory(ident) {
    try {
      const result = await CategoryModel.deleteOne({ ident });
      return result;
    } catch (error) {
      throw error;
    }
  },

  async getAllCategories() {
    try {
      const categories = await CategoryModel.find({}).lean();
      return categories;
    } catch (error) {
      throw error;
    }
  },

  async findCategoryBySlug(slug) {
    try {
      const category = await CategoryModel.findOne({ slug }).lean();
      return category;
    } catch (error) {
      throw error;
    }
  },

  async findCategoryByIdent(ident) {
    try {
      const category = await CategoryModel.findOne({ ident }).lean();
      return category;
    } catch (error) {
      throw error;
    }
  },
};
