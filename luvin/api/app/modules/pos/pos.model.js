import mongoose from 'mongoose';

const Schema = mongoose.Schema;
const PosSchema = new Schema(
  {
    name: {
      type: String,
    },
    ip: {
      type: String,
      required: [true, 'IP is required'],
    },
    port: {
      type: String,
      required: [true, 'Port is required'],
    },
    path: {
      type: String,
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

const PosModel = mongoose.model('Pos', PosSchema);

export default PosModel;
