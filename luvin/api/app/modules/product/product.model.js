import mongoose from 'mongoose';

const Schema = mongoose.Schema;
const Productchema = new Schema(
  {
    sku: {
      type: String,
    },
    name: {
      type: String,
      trim: true,
    },
    description: {
      type: String,
    },
    slug: {
      type: String,
      unique: true,
    },
    images: [{ type: String }],
    quantity: {
      type: Number,
      default: 1,
    },
    price: {
      type: Number,
      required: [true, 'Giá sản phẩm không được bỏ trống'],
    },
    category: {
      type: Schema.Types.ObjectId,
      ref: 'Category',
    },
    ident: {
      type: String,
      unique: true,
    },
    code: {
      type: String,
      unique: true,
    },
    type: {
      type: String,
      enum: ['vang đỏ', 'vang hồng', 'vang nổ', 'vang trắng'],
      default: 'vang đỏ',
    },
    origin: {
      type: String,
      enum: [
        'đức',
        'hungary',
        'new zealand',
        'nga',
        'pháp',
        'scotland',
        'việt nam',
      ],
      default: 'việt nam',
    },
    discount: {
      type: Number,
      default: 0,
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

Productchema.index({
  name: 1,
  category: 1,
  price: -1,
  type: 1,
  origin: 1,
});

Productchema.virtual('reviews', {
  ref: 'Review',
  localField: '_id',
  foreignField: 'product',
});

const ProductModel = mongoose.model('Product', Productchema);

export default ProductModel;
