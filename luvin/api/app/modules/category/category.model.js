import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const CategorySchema = new Schema(
  {
    guid: {
      type: String,
    },
    ident: {
      type: String,
      unique: true,
    },
    name: {
      type: String,
    },
    description: {
      type: String,
    },
    slug: {
      type: String,
      unique: true,
    },
    image: { type: String },
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

const CategoryModel = mongoose.model('Category', CategorySchema);

export default CategoryModel;
