exports.resetEmail = (host, resetToken) => {
  const message = {
    subject: 'Reset Password',
    text:
      `${
        'You are receiving this because you have requested to reset your password for your account.\n\n' +
        'Please click on the following link, or paste this into your browser to complete the process:\n\n'
      }${host}/tai-khoan/forgot-password-confirmation?token=${resetToken}\n\n` +
      `If you did not request this, please ignore this email and your password will remain unchanged.\n`,
  };

  return message;
};

exports.confirmResetPasswordEmail = () => {
  const message = {
    subject: 'Password Changed',
    text:
      `You are receiving this email because you changed your password. \n\n` +
      `If you did not request this change, please contact us immediately.`,
  };

  return message;
};

exports.signupEmail = (user) => {
  const message = {
    subject: 'Account Registration',
    text: `Hi ${user.name}! Thank you for creating an account with us!.`,
  };

  return message;
};

exports.newsletterSubscriptionEmail = () => {
  const message = {
    subject: 'Newsletter Subscription',
    text:
      `You are receiving this email because you subscribed to our newsletter. \n\n` +
      `If you did not request this change, please contact us immediately.`,
  };

  return message;
};

exports.contactEmail = () => {
  const message = {
    subject: 'Contact Us',
    text: `We received your message! Our team will contact you soon. \n\n`,
  };

  return message;
};

exports.merchantApplicationEmail = () => {
  const message = {
    subject: 'Sell on MERN Store',
    text: `We received your request! Our team will contact you soon. \n\n`,
  };

  return message;
};

exports.orderConfirmationEmail = (order) => {
  const message = {
    subject: `Order Confirmation ${order._id}`,
    text:
      `Hi ${order.customer.name}! Thank you for your order!. \n\n` +
      `We've received your order and will contact you as soon as your package is shipped. \n\n`,
  };

  return message;
};

exports.review = (review) => {
  const message = {
    subject: `New reviews from user`,
    text:
      `User: ${review.name}. \n\n` +
      `Email: ${review.email}. \n\n` +
      `Product: ${review.product.name}. \n\n` +
      `Rate: ${review.rate}. \n\n` +
      `Title: ${review.title}. \n\n` +
      `Description: ${review.description}. \n\n`,
  };

  return message;
};
