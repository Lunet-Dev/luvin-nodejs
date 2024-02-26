import nodemailer from 'nodemailer';

import template from '../config/template';
import keys from '../config/keys';

const { host, port, user, password } = keys.mail;

let transporter = nodemailer.createTransport({
  host,
  port,
  secure: false, // true for 465, false for other ports
  auth: {
    user,
    pass: password,
  },
  tls: {
    rejectUnauthorized: false,
  },
});

const sendEmail = (to, options = {}) => {
  return new Promise((resolve, reject) => {
    transporter.sendMail(
      {
        from: '"Luvin Contact" <admin@luvin.com>', // sender address
        to,
        ...options,
      },
      (error, info) => {
        if (error) {
          reject(error);
        }
        resolve(info);
      }
    );
  });
};

const prepareTemplate = (type, host, data) => {
  let message;

  switch (type) {
    case 'reset':
      message = template.resetEmail(host, data);
      break;

    case 'reset-confirmation':
      message = template.confirmResetPasswordEmail();
      break;

    case 'signup':
      message = template.signupEmail(data);

      break;

    case 'newsletter-subscription':
      message = template.newsletterSubscriptionEmail();
      break;

    case 'contact':
      message = template.contactEmail();
      break;

    case 'merchant-application':
      message = template.merchantApplicationEmail();
      break;

    case 'order-confirmation':
      message = template.orderConfirmationEmail(data);
      break;

    case 'review':
      message = template.review(data);
      break;

    default:
      message = '';
  }

  return message;
};

export default async (email, type, host, data) => {
  let result;
  let response;

  try {
    const configs = prepareTemplate(type, host, data);

    response = await sendEmail(email, configs);
  } catch (error) {}

  if (response) {
    result = response;
  }

  return result;
};
