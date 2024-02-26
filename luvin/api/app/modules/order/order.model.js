import mongoose from 'mongoose';
import padStart from 'lodash/padStart';

import CouterModel from '../common/couter.model';

const Schema = mongoose.Schema;
const OrderSchema = new Schema(
  {
    orderDetails: [
      {
        productId: {
          type: Schema.Types.ObjectId,
          ref: 'Product',
        },
        quantity: {
          type: Number,
          default: 1,
        },
        discount: {
          type: Number,
          default: 0,
        },
        totalPrice: {
          type: Number,
        },
      },
    ],
    lid: {
      type: String,
    },
    guid: {
      type: String,
    },
    voucher: {
      type: Schema.Types.ObjectId,
      ref: 'Voucher',
    },
    customer: {
      type: Schema.Types.ObjectId,
      ref: 'User',
    },
    name: {
      type: String,
    },
    phone: {
      type: String,
    },
    email: {
      type: String,
    },
    shipAddress: {
      type: String,
    },
    shipCity: {
      type: String,
    },
    paymentMethod: {
      type: String,
      enum: ['cod', 'vnpay'],
      default: 'cod',
    },
    note: {
      type: String,
    },
    status: {
      type: String,
      default: 'Not processed',
      enum: [
        'Not processed',
        'Processing',
        'Shipped',
        'Delivered',
        'Cancelled',
      ],
    },
    paid: {
      type: Boolean,
      default: false,
    },
  },
  {
    collation: {
      locale: 'vi@collation=traditional',
      strength: 1, // so sánh string bỏ qua diacritics, ví dụ Tú và Tu là như nhau
      caseLevel: true, // sắp xếp string không tính đến hoa thường, ví dụ "A a B b" thay vì "a b A B" (chỉ có ý nghĩa khi strength < 3)
      normalization: true, // chuẩn hóa Unicode
      numericOrdering: true, // sắp xếp "số_10" ra sau "số_2" thay vì "số_2" đứng sau "số_10"
    },
    timestamps: true,
  }
);

OrderSchema.pre('save', function (next) {
  const doc = this;
  CouterModel.findByIdAndUpdate(
    { _id: 'order' },
    { $inc: { seq: 1 } },
    { new: true, upsert: true }
  )
    .then(function (count) {
      doc.lid = `wo-${padStart(count.seq, 10, 0)}`;
      next();
    })
    .catch(function (error) {
      throw error;
    });
});

const OrderModel = mongoose.model('Order', OrderSchema);

export default OrderModel;
