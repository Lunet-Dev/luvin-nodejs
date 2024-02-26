import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const ConfigSchema = new Schema(
  {
    ident: {
      type: Number,
      default: 1,
    },
    banners: [
      {
        type: String,
      },
    ],
    slogan: {
      type: String,
    },
    description: {
      type: String,
    },
    ctaImage: {
      type: String,
    },
    ctaTitle: {
      type: String,
    },
    ctaDescription: {
      type: String,
    },
    ctaUrl: {
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

const ConfigModel = mongoose.model('Config', ConfigSchema);

mongoose.connection.on('connected', async (err) => {
  if (err) {
    return console.error(err);
  }
  const config = await ConfigModel.find({}).lean();
  if (!config.length) {
    await new ConfigModel({
      banners: [
        'http://luvinhtml.ekipapi.com/wp-content/uploads/pexels-helena-lopes-696218.jpg',
        'http://luvinhtml.ekipapi.com/wp-content/uploads/pexels-helena-lopes-696218.jpg',
        'http://luvinhtml.ekipapi.com/wp-content/uploads/pexels-helena-lopes-696218.jpg',
      ],
      slogan: 'Thưởng thức cuộc sống',
      description:
        'Tất cả các sản phẩm rượu vang được lên men tự nhiên và có nồng độ cồn dưới 15 độ',
      ctaImage: 'http://luvinhtml.ekipapi.com/wp-content/uploads/cta1.jpg',
      ctaTitle: 'Rượu vang',
      ctaDescription: 'Món quà đặc biệt của thượng đế',
      ctaUrl: 'http://luvinhtml.ekipapi.com/',
    }).save();
  }
});

export default ConfigModel;
