import mongoose from 'mongoose';
import keys from './config/keys';

const { database } = keys;

mongoose.Promise = global.Promise;

mongoose.set('useCreateIndex', true);
mongoose.connect(database.url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
});

mongoose.connection.on('connected', () => {
  console.log('==> %s MongoDB connection established!');
});
mongoose.connection.on('error', (error) => {
  console.log(
    '==> %s MongoDB connection error. Please make sure MongoDB is running.'
  );
  console.error(error);
  process.exit();
});
