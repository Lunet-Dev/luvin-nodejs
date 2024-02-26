import mongoose from 'mongoose';

const Schema = mongoose.Schema;
const AboutUsSchema = new Schema(
  {
    ident: {
      type: Number,
      default: 1,
    },
    title: {
      type: String,
    },
    description: {
      type: String,
    },
    title2: {
      type: String,
    },
    title2Image: {
      type: String,
    },
    description2: {
      type: String,
    },
    title3: {
      type: String,
    },
    description3: {
      type: String,
    },
    title4: {
      type: String,
    },
    description4: {
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

const AboutUsModel = mongoose.model('AboutUs', AboutUsSchema);

mongoose.connection.on('connected', async (err) => {
  if (err) {
    return console.error(err);
  }
  const config = await AboutUsModel.find({}).lean();
  if (!config.length) {
    await new AboutUsModel({
      title: 'VỀ CHÚNG TÔI',
      description:
        'We are a multi award-winning fine wine merchant based in the heart of Lancashire’s Ribble Valley. We aspire to be part of a ‘new generation’ of wine merchants, making the act of buying fine wine and spirits both more accessible and more enjoyable.​​​​​​​Come down to the shop and see our expert staff in-store and view our full range of Fine Wines, Champagnes, Premium Spirits, Craft Beers, and Cigars!',
      title2: 'THƯƠNG HIỆU',
      title2Image: 'http://luvinhtml.ekipapi.com/wp-content/uploads/bg.jpg',
      description2:
        'Our shop, at the corner of King Street and Church Lane, has long been used as a wine shop, however its previous incarnation was as part of the national chain ‘Threshers’. Tom, having graduated with a recent law degree (having limited interest in Law and much more interest in wine!) was running this shop for the chain at the time. When Threshers was forced into administration in December 2009 the shop closed its doors. Fast forward to April 2010 and Tom at just 24 had taken over the shop as a family owned fully independent wine merchants. On the 20th of April 2010 The Whalley Wine Shop began trading for the first time. The aim from the start was clear: to find superb quality wines that really over delivered at the price; and to sell these wines with genuine passion, enthusiasm and above all fantastic customer service. This approach helped us to get started and to succeed as a business, and it remains our approach to this day. We feel incredibly lucky to have a business in the heart of the beautiful Ribble Valley and are always grateful for the support and loyalty our customers have shown us, right from the early years.',
      title3: 'CHỨNG NHẬN',
      description3:
        'We’re proud to say our hard work has been been commended with multiple awards over the years. Here’s a sample of our achievements.',
      title4: `ĐỐI TÁC`,
      description4:
        'When I set the business up the aim for me was always clear, to have great people who were passionate about wine on hand to give great advice to our customers to make sure they got excellent service and exactly the wine they came in for.',
    }).save();
  }
});

export default AboutUsModel;
