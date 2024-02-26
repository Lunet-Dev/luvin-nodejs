import ProductManager from './product.manager';

export default {
  async syncWithLuvin(req, res, next) {
    try {
      const result = await ProductManager.syncWithLuvin();
      return res.status(200).json({ data: result });
    } catch (error) {
      return res.status(400).json({ message: error.message });
    }
  },

  async getProductsOfCategory(req, res, next) {
    try {
      const { limit = 12, page = 1, sort, type, origin } = req.query;
      const { categorySlug } = req.params;
      const [products, count] = await Promise.all([
        ProductManager.findProductsByCategorySlug(
          categorySlug,
          limit,
          page,
          sort,
          type,
          origin
        ),
        ProductManager.countProductsByCategorySlug(categorySlug, type, origin),
      ]);
      return res.status(200).json({ data: { total: count, products } });
    } catch (error) {
      return res.status(400).json({ message: error.message });
    }
  },

  async getProductsSale(req, res, next) {
    try {
      const { limit = 12, page = 1 } = req.query;
      const [products, count] = await Promise.all([
        ProductManager.findProductsSale(limit, page),
        ProductManager.countProductsSale(),
      ]);
      return res.status(200).json({ data: { total: count, products } });
    } catch (error) {
      return res.status(400).json({ message: error.message });
    }
  },

  async updateProduct(req, res, next) {
    try {
      const { ident } = req.params;
      const productData = req.body;
      const result = await ProductManager.upsertProduct(ident, productData);
      return res.status(200).json({ data: result });
    } catch (error) {
      return res.status(400).json({ message: error.message });
    }
  },

  async deleteProduct(req, res, next) {
    try {
      const { ident } = req.params;
      const result = await ProductManager.deleteProduct(ident);
      return res.status(200).json({ data: result });
    } catch (error) {
      return res.status(400).json({ message: error.message });
    }
  },

  async getDetailProduct(req, res, next) {
    try {
      const { slug } = req.params;
      const result = await ProductManager.getProductBySlug(slug);
      return res.status(200).json({ data: result });
    } catch (error) {
      return res.status(400).json({ message: error.message });
    }
  },

  async findProduct(req, res, next) {
    try {
      const {
        name,
        limit = 12,
        page = 1,
        category,
        type,
        origin,
        discount,
      } = req.query;
      const [products, count] = await Promise.all([
        ProductManager.findProducts(
          name,
          limit,
          page,
          category,
          type,
          origin,
          discount
        ),
        ProductManager.countProducts(name, category, type, origin, discount),
      ]);
      return res.status(200).json({ data: { total: count, products } });
    } catch (error) {
      return res.status(400).json({ message: error.message });
    }
  },
};
