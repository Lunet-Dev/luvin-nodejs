'use strict';

exports.resetEmail = function (host, resetToken) {
  var message = {
    subject: 'Reset Password',
    text: '' + ('You are receiving this because you have requested to reset your password for your account.\n\n' + 'Please click on the following link, or paste this into your browser to complete the process:\n\n') + host + '/tai-khoan/forgot-password-confirmation?token=' + resetToken + '\n\n' + 'If you did not request this, please ignore this email and your password will remain unchanged.\n'
  };

  return message;
};

exports.confirmResetPasswordEmail = function () {
  var message = {
    subject: 'Password Changed',
    text: 'You are receiving this email because you changed your password. \n\n' + 'If you did not request this change, please contact us immediately.'
  };

  return message;
};

exports.signupEmail = function (user) {
  var message = {
    subject: 'Account Registration',
    text: 'Hi ' + user.name + '! Thank you for creating an account with us!.'
  };

  return message;
};

exports.newsletterSubscriptionEmail = function () {
  var message = {
    subject: 'Newsletter Subscription',
    text: 'You are receiving this email because you subscribed to our newsletter. \n\n' + 'If you did not request this change, please contact us immediately.'
  };

  return message;
};

exports.contactEmail = function () {
  var message = {
    subject: 'Contact Us',
    text: 'We received your message! Our team will contact you soon. \n\n'
  };

  return message;
};

exports.merchantApplicationEmail = function () {
  var message = {
    subject: 'Sell on MERN Store',
    text: 'We received your request! Our team will contact you soon. \n\n'
  };

  return message;
};

exports.orderConfirmationEmail = function (order) {
  var message = {
    subject: 'Order Confirmation ' + order._id,
    text: 'Hi ' + order.customer.name + '! Thank you for your order!. \n\n' + 'We\'ve received your order and will contact you as soon as your package is shipped. \n\n'
  };

  return message;
};

exports.review = function (review) {
  var message = {
    subject: 'New reviews from user',
    text: 'User: ' + review.name + '. \n\n' + ('Email: ' + review.email + '. \n\n') + ('Product: ' + review.product.name + '. \n\n') + ('Rate: ' + review.rate + '. \n\n') + ('Title: ' + review.title + '. \n\n') + ('Description: ' + review.description + '. \n\n')
  };

  return message;
};