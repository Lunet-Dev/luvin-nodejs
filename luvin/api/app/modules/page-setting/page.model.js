import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const PageSettingSchema = new Schema(
  {
    name: {
      type: String,
    },
    content: {
      type: String,
    },
    type: {
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

const PageSettingModel = mongoose.model('PageSetting', PageSettingSchema);

mongoose.connection.on('connected', async (err) => {
  if (err) {
    return console.error(err);
  }
  const config = await PageSettingModel.find({}).lean();
  if (!config.length) {
    await PageSettingModel.insertMany([
      {
        name: 'Chính sách bảo mật',
        content: '',
        type: 'privacy-policy',
      },
      {
        name: 'Chỉnh sách đổi trả',
        content: '',
        type: 'return-policy',
      },
      {
        name: 'Chỉnh sách giao nhận',
        content: '',
        type: 'forwarding-policy',
      },
      {
        name: 'Hướng dẫn mua hàng',
        content: '',
        type: 'shopping-guide',
      },
      {
        name: 'Điều khoản chung',
        content: '',
        type: 'dieu-khoan-chung',
      },
    ]);
  }
});

export default PageSettingModel;
