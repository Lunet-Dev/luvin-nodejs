import keys from 'lodash/keys';
import sum from 'lodash/sum';
import isEmpty from 'lodash/isEmpty';

import OrderModel from './order.model';

import ProductManager from '../product/product.manager';
import VoucherManager from '../voucher/voucher.manager';
import PosManager from '../pos/pos.manager';

import buildPaginationQuery from '../../lib/build-pagination-query';
import makeObjectId from '../../lib/make-object-id';

import sendEmail from '../../services/mailer';
import vnPayService from '../../services/vnpay';
import { createTransaction } from '../../services/luvin-crm';
import { createOrder as createPosOrder } from '../../services/luvin-pos';

export default {
  async createOrder(orderData) {
    try {
      let voucher = {};
      if (orderData.voucher) {
        voucher = await VoucherManager.redeemById(
          orderData.voucher,
          orderData.customer
        );
      }
      const productIdents = keys(orderData.products);
      const products = await ProductManager.findProductByIdents(productIdents);
      const orderDetails = products.map((product) => {
        const { _id: productId, price = 0, discount = 0 } = product;
        const quantity = parseInt(orderData.products[product.ident] || 0);
        return {
          productId,
          quantity,
          discount,
          totalPrice: price * quantity - discount * quantity,
        };
      });
      const order = await new OrderModel({
        orderDetails,
        ...orderData,
      }).save();

      if (order.paymentMethod === 'vnpay') {
        // const amount = sum(
        //   order.orderDetails.map(({ totalPrice }) => totalPrice)
        // );
        const totalWithoutDiscount = sum(
          (order.orderDetails || []).map(({ totalPrice }) => totalPrice)
        );

        let discount = 0;
        if (voucher.value) {
          if (voucher.type === 'percent') {
            discount = (totalWithoutDiscount / 100) * voucher.value;
          } else {
            discount = voucher.value || 0;
          }
        }
        const amount = totalWithoutDiscount - discount;

        const vnpUrl = vnPayService.createPaymentUrl(
          order._id,
          amount,
          `Thanh toan giao dich ${order._id}`,
          orderData.ipAddr
        );
        return vnpUrl;
      }

      //
      const orderDetail = await OrderModel.findById(order._id)
        .populate('orderDetails.productId')
        .populate('customer')
        .lean();
      // if (order.paymentMethod === 'cod') {
      //   const crmTransaction = await createTransaction(orderDetail);
      // }
      sendEmail(
        orderDetail.customer.email,
        'order-confirmation',
        null,
        orderDetail
      );
      if (!isEmpty(voucher) && !voucher.isAll) {
        await VoucherManager.updateVoucher(voucher._id, { active: false });
      }
      return order;
    } catch (error) {
      throw error;
    }
  },

  async updateOrder(orderId, orderData) {
    try {
      const order = await OrderModel.findByIdAndUpdate(
        orderId,
        { $set: orderData },
        {
          new: true,
        }
      ).lean();
      return order;
    } catch (error) {
      throw error;
    }
  },

  async findOrderById(orderId) {
    try {
      const order = await OrderModel.findById(orderId)
        .populate('orderDetails.productId')
        .populate('voucher');
      return order;
    } catch (error) {
      throw error;
    }
  },

  async findOrdersByStatus(status, limit, page) {
    try {
      const conditions = {};
      if (status) {
        conditions.status = status;
      }
      let query = OrderModel.find(conditions)
        .populate('orderDetails.productId')
        .populate('voucher');
      query = buildPaginationQuery(query, limit, page);
      const orders = await query.lean().exec();
      return orders;
    } catch (error) {
      throw error;
    }
  },

  async findOrdersByCustomerId(customerId, limit, page) {
    try {
      const conditions = {};
      if (customerId) {
        conditions.customer = makeObjectId(customerId);
      }
      let query = OrderModel.find(conditions)
        .populate('orderDetails.productId')
        .populate('voucher');
      query = buildPaginationQuery(query, limit, page);
      const orders = await query.lean().exec();
      return orders;
    } catch (error) {
      throw error;
    }
  },

  async findOrders(limit, page, name, status, paymentMethod, paid) {
    try {
      const conditions = {};
      if (status) {
        conditions.status = status;
      }
      if (paymentMethod) {
        conditions.paymentMethod = paymentMethod;
      }
      if (paid != 0) {
        conditions.paid = paid == 2 ? true : false;
      }
      let query = OrderModel.find(conditions)
        .populate('orderDetails.productId')
        .populate('voucher')
        .sort({ createdAt: -1 });
      if (name) {
        query.or([
          { email: new RegExp(name, 'i') },
          { phone: new RegExp(name, 'i') },
          { name: new RegExp(name, 'i') },
          { shipAddress: new RegExp(name, 'i') },
          { shipCity: new RegExp(name, 'i') },
        ]);
      }
      query = buildPaginationQuery(query, limit, page);
      const order = await query.lean().exec();
      return order;
    } catch (error) {
      throw error;
    }
  },

  async countOrders(name, status, paymentMethod, paid) {
    try {
      const conditions = {};
      if (status) {
        conditions.status = status;
      }
      if (paymentMethod) {
        conditions.paymentMethod = paymentMethod;
      }
      if (paid) {
        conditions.paid = conditions.paid == 2 ? true : false;
      }
      let query = OrderModel.count(conditions);
      if (name) {
        query.or([
          { email: new RegExp(name, 'i') },
          { phone: new RegExp(name, 'i') },
          { name: new RegExp(name, 'i') },
          { shipAddress: new RegExp(name, 'i') },
          { shipCity: new RegExp(name, 'i') },
        ]);
      }
      const count = await query.exec();
      return count;
    } catch (error) {
      throw error;
    }
  },

  async deleteOrder(orderId) {
    try {
      const result = await OrderModel.remove({ _id: makeObjectId(orderId) });
      return result;
    } catch (error) {
      throw error;
    }
  },

  async pushOrderToPos(posId, orderId) {
    try {
      const [pos, webOrder] = await Promise.all([
        PosManager.findPosById(posId),
        this.findOrderById(orderId),
      ]);
      const posOrder = await createPosOrder(pos, webOrder);
      const order = await this.updateOrder(orderId, {
        status: 'Processing',
        guid: posOrder.guid,
      });
      return order;
    } catch (error) {
      throw error;
    }
  },
};
