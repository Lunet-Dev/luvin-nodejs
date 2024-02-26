import path from 'path';
import dotEnv from 'dotenv';

dotEnv.load({ path: path.resolve(__dirname, '..', '..', '.env') });

module.exports = {
  app: {
    name: 'Luvin',
    apiPrefix: '/v1',
    serverURL: process.env.BASE_SERVER_URL,
    clientURL: process.env.BASE_CLIENT_URL,
    apiMenuEndPoint: process.env.API_MENU_ENDPOINT,
    apiCRMEndPoint: process.env.API_CRM_ENDPOINT,
  },
  vnpay: {
    tmnCode: process.env.VNP_TMN_CODE,
    hashSecret: process.env.VNP_HASH_SECRET,
    url: process.env.VNP_URL,
    returnUrl: process.env.VNP_RETURN_URL,
  },
  port: process.env.PORT || 4567,
  database: {
    url: process.env.MONGO_URI,
  },
  jwt: {
    secret: process.env.JWT_SECRET,
    tokenLife: '7d',
  },
  // mailchimp: {
  //   key: process.env.MAILCHIMP_KEY,
  //   listKey: process.env.MAILCHIMP_LIST_KEY
  // },
  mail: {
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_POST ? parseInt(process.env.SMTP_POST) : 587,
    user: process.env.SMTP_EMAIL_USER,
    password: process.env.SMTP_EMAIL_PASSWORD,
  },
  google: {
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: process.env.GOOGLE_CALLBACK_URL,
  },
  facebook: {
    clientID: process.env.FACEBOOK_CLIENT_ID,
    clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
    callbackURL: process.env.FACEBOOK_CALLBACK_URL,
  },
};
