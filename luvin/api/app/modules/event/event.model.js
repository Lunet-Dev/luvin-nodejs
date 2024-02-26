import mongoose from 'mongoose';
import slugify from 'slugify';

const Schema = mongoose.Schema;

const EventSchema = new Schema(
  {
    title: {
      type: String,
    },
    description: {
      type: String,
    },
    content: {
      type: String,
    },
    slug: {
      type: String,
      unique: true,
    },
    image: {
      type: String,
    },
    startedAt: {
      type: Date,
    },
    endedAt: {
      type: Date,
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

EventSchema.index({
  startedAt: 1,
  endedAt: 1,
});

EventSchema.pre('save', async function (next) {
  if (this.isModified('name')) {
    this.slug = slugify(this.name, '-');
  }
  next();
});

const EventModel = mongoose.model('Event', EventSchema);

export default EventModel;
