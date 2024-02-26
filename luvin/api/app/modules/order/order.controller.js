import OrderManager from './order.manager';

export default {
  async findOrders(req, res, next) {
    try {
      const { limit, page, name, status, paymentMethod, paid } = req.query;
      const [orders, total] = await Promise.all([
        OrderManager.findOrders(limit, page, name, status, paymentMethod, paid),
        OrderManager.countOrders(name, status, paymentMethod, paid),
      ]);
      return res.status(200).json({ data: { orders, total } });
    } catch (error) {
      return res.status(400).json({ message: error.message });
    }
  },

  async createOrder(req, res, next) {
    try {
      const orderData = req.body;
      const ipAddr =
        req.headers['x-forwarded-for'] ||
        req.connection.remoteAddress ||
        req.socket.remoteAddress ||
        req.connection.socket.remoteAddress;
      const { _id: customer } = req.currentUser;
      const result = await OrderManager.createOrder({
        customer,
        ipAddr,
        ...orderData,
      });
      // if (orderData.paymentMethod === 'vnpay') {
      //   return res.redirect(result);
      // }
      return res.status(200).json({ data: result });
    } catch (error) {
      return res.status(400).json({ message: error.message });
    }
  },

  async updateOrder(req, res, next) {
    try {
      const orderData = req.body;
      const { orderId } = req.params;
      const result = await OrderManager.updateOrder(orderId, orderData);
      return res.status(200).json({ data: result });
    } catch (error) {
      return res.status(400).json({ message: error.message });
    }
  },

  async deleteOrder(req, res, next) {
    try {
      const { orderId } = req.params;
      const result = await OrderManager.deleteOrder(orderId);
      return res.status(200).json({ data: result });
    } catch (error) {
      return res.status(400).json({ message: error.message });
    }
  },

  async getDetailOrder(req, res, next) {
    try {
      const { orderId } = req.params;
      const result = await OrderManager.findOrderById(orderId);
      return res.status(200).json({ data: result });
    } catch (error) {
      return res.status(400).json({ message: error.message });
    }
  },

  async getOrderHistory(req, res, next) {
    try {
      const { limit = 12, page = 1 } = req.query;
      const { _id: customerId } = req.currentUser;
      const result = await OrderManager.findOrdersByCustomerId(
        customerId,
        limit,
        page
      );
      return res.status(200).json({ data: result });
    } catch (error) {
      return res.status(400).json({ message: error.message });
    }
  },

  async getOrders(req, res, next) {
    try {
      const { limit = 12, page = 1 } = req.query;
      const { status } = req.params;
      const result = await OrderManager.findOrdersByStatus(status, limit, page);
      return res.status(200).json({ data: result });
    } catch (error) {
      return res.status(400).json({ message: error.message });
    }
  },

  async pushOrderToPos(req, res, next) {
    try {
      const { posId, orderId } = req.body;
      const result = await OrderManager.pushOrderToPos(posId, orderId);
      return res.status(200).json({ data: result });
    } catch (error) {
      console.error(error);
      return res.status(400).json({ message: error.message });
    }
  },
  // async updateProduct(req, res, next) {
  //   try {
  //     const { ident } = req.params;
  //     const productData = req.body;
  //     const result = await ProductManager.upsertProduct(ident, productData);
  //     return res.status(200).json({ data: result });
  //   } catch (error) {
  //     res.status(400).json({ message: error.message });
  //   }
  // },
};
