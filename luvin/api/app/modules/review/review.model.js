import mongoose from 'mongoose';

const Schema = mongoose.Schema;
const Reviewchema = new Schema(
  {
    name: {
      type: String,
    },
    email: {
      type: String,
    },
    rate: {
      type: Number,
    },
    title: {
      type: String,
    },
    description: {
      type: String,
    },
    product: {
      type: Schema.Types.ObjectId,
      ref: 'Product',
    },
    isShow: {
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

const ReviewModel = mongoose.model('Review', Reviewchema);

export default ReviewModel;
