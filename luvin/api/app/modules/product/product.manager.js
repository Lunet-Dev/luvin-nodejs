import ProductModel from './product.model';

import CategoryManager from '../category/category.manager';

import { syncMenu } from '../../services/luvin-menu';

import buildPaginationQuery from '../../lib/build-pagination-query';
import makeObjectId from '../../lib/make-object-id';

export default {
  async syncWithLuvin() {
    try {
      const result = await syncMenu();
      return result;
    } catch (error) {
      throw error;
    }
  },

  async upsertProduct(ident, productData) {
    try {
      const category = await ProductModel.findOneAndUpdate(
        { ident },
        { $set: productData },
        { upsert: true, new: true, setDefaultsOnInsert: true }
      ).lean();
      return category;
    } catch (error) {
      throw error;
    }
  },

  async createProduct(productData) {
    try {
      const product = await new ProductModel(productData).save();
      return product;
    } catch (error) {
      throw error;
    }
  },

  async getProductBySlug(slug) {
    try {
      const product = await ProductModel.findOne({ slug })
        .populate('reviews')
        .lean();
      return product;
    } catch (error) {
      throw error;
    }
  },

  async deleteProduct(ident) {
    try {
      const result = await ProductModel.remove({ ident });
      return result;
    } catch (error) {
      throw error;
    }
  },

  async findProductsByCategorySlug(
    categorySlug,
    limit,
    page,
    sort = 'descTime',
    type,
    origin
  ) {
    try {
      const category = await CategoryManager.findCategoryBySlug(categorySlug);
      const conditions = { category: category._id };
      if (type) {
        conditions.type = type;
      }
      if (origin) {
        conditions.origin = origin;
      }
      let query = ProductModel.find(conditions);
      if (sort === 'descTime') {
        query = query.sort({ createdAt: -1 });
      } else if (sort === 'descPrice') {
        query = query.sort({ price: -1 });
      } else if (sort === 'ascPrice') {
        query = query.sort({ price: 1 });
      }
      query = buildPaginationQuery(query, limit, page);
      const products = await query.populate('reviews').lean().exec();
      return products;
    } catch (error) {
      throw error;
    }
  },

  async countProductsByCategorySlug(categorySlug, type, origin) {
    try {
      const category = await CategoryManager.findCategoryBySlug(categorySlug);
      const conditions = { category: makeObjectId(category._id) };
      if (type) {
        conditions.type = type;
      }
      if (origin) {
        conditions.origin = origin;
      }
      const count = await ProductModel.count(conditions);
      return count;
    } catch (error) {
      throw error;
    }
  },

  async findProductsSale(limit, page) {
    try {
      let query = ProductModel.find({ discount: { $ne: 0 } });
      query = buildPaginationQuery(query, limit, page);
      const products = await query
        .populate('reviews')
        .populate('category')
        .lean()
        .exec();
      return products;
    } catch (error) {
      throw error;
    }
  },

  async countProductsSale() {
    try {
      const count = await ProductModel.count({ discount: { $ne: 0 } });
      return count;
    } catch (error) {
      throw error;
    }
  },

  async findProductByIdents(idents) {
    try {
      const products = await ProductModel.find({
        ident: { $in: idents },
      }).lean();
      return products;
    } catch (error) {
      throw error;
    }
  },

  async findProductsByName(name, limit, page) {
    try {
      const conditions = { name: new RegExp(name, 'i') };
      let query = ProductModel.find(conditions);
      query = buildPaginationQuery(query, limit, page);
      const products = await query
        .populate('reviews')
        .populate('category')
        .lean()
        .exec();
      return products;
    } catch (error) {
      throw error;
    }
  },

  async countProductsByName(name) {
    try {
      const count = await ProductModel.count({
        name: new RegExp(name, 'i'),
      });
      return count;
    } catch (error) {
      throw error;
    }
  },

  async findProducts(name, limit, page, category, type, origin, discount) {
    try {
      const conditions = {};
      if (category) {
        conditions.category = makeObjectId(category);
      }
      if (name) {
        conditions.name = new RegExp(name, 'i');
      }
      if (type) {
        conditions.type = type;
      }
      if (origin) {
        conditions.origin = origin;
      }
      if (discount) {
        conditions.discount = { $ne: 0 };
      }
      let query = ProductModel.find(conditions);
      query = buildPaginationQuery(query, limit, page);
      const products = await query
        .populate('reviews')
        .populate('category')
        .lean()
        .exec();
      return products;
    } catch (error) {
      throw error;
    }
  },

  async countProducts(name, category, type, origin, discount) {
    try {
      const conditions = {};
      if (category) {
        conditions.category = makeObjectId(category);
      }
      if (name) {
        conditions.name = new RegExp(name, 'i');
      }
      if (type) {
        conditions.type = type;
      }
      if (origin) {
        conditions.origin = origin;
      }
      if (discount) {
        conditions.discount = { $ne: 0 };
      }
      const count = await ProductModel.count(conditions);
      return count;
    } catch (error) {
      throw error;
    }
  },
};
