/* eslint-disable camelcase */
import querystring from 'qs';
import dateFormat from 'dateformat';
import sha256 from 'sha256';

import OrderManager from '../modules/order/order.manager';

import keys from '../config/keys';

function sortObject(o) {
  const sorted = {};
  let key = [];
  const a = [];

  for (key in o) {
    if (o.hasOwnProperty(key)) {
      a.push(key);
    }
  }

  a.sort();

  for (key = 0; key < a.length; key++) {
    sorted[a[key]] = o[a[key]];
  }
  return sorted;
}

export default {
  async createPaymentUrl(orderId, amount, orderInfo, ipAddr) {
    const date = new Date();
    const createDate = dateFormat(date, 'yyyymmddHHmmss');
    let vnp_Params = {};
    vnp_Params['vnp_Version'] = '2';
    vnp_Params['vnp_Command'] = 'pay';
    vnp_Params['vnp_TmnCode'] = keys.vnpay.tmnCode;
    // vnp_Params['vnp_Merchant'] = ''
    vnp_Params['vnp_Locale'] = 'vn';
    vnp_Params['vnp_CurrCode'] = 'VND';
    vnp_Params['vnp_TxnRef'] = orderId.toString();
    vnp_Params['vnp_OrderInfo'] = orderInfo;
    vnp_Params['vnp_OrderType'] = 100000;
    vnp_Params['vnp_Amount'] = amount * 100;
    vnp_Params['vnp_ReturnUrl'] = keys.vnpay.returnUrl;
    vnp_Params['vnp_IpAddr'] = ipAddr;
    vnp_Params['vnp_CreateDate'] = createDate;

    vnp_Params = sortObject(vnp_Params);

    const secretKey = keys.vnpay.hashSecret;
    const signData =
      secretKey + querystring.stringify(vnp_Params, { encode: false });

    const secureHash = sha256(signData);

    vnp_Params['vnp_SecureHashType'] = 'SHA256';
    vnp_Params['vnp_SecureHash'] = secureHash;

    let vnpUrl = keys.vnpay.url;
    vnpUrl += '?' + querystring.stringify(vnp_Params, { encode: true });
    return vnpUrl;
  },

  // async createPaymentUrl(req, res, next) {
  //   const ipAddr =
  //     req.headers['x-forwarded-for'] ||
  //     req.connection.remoteAddress ||
  //     req.socket.remoteAddress ||
  //     req.connection.socket.remoteAddress;

  //   const tmnCode = keys.vnpay.tmnCode;
  //   const secretKey = keys.vnpay.hashSecret;
  //   let vnpUrl = keys.vnpay.url;
  //   const returnUrl = keys.vnpay.returnUrl;

  //   const date = new Date();

  //   const createDate = dateFormat(date, 'yyyymmddHHmmss');
  //   const orderId = dateFormat(date, 'HHmmss');
  //   const amount = req.body.amount;
  //   const bankCode = req.body.bankCode;

  //   const orderInfo = req.body.orderDescription;
  //   const orderType = req.body.orderType || 180000;
  //   let locale = req.body.language;
  //   if (locale === null || locale === '') {
  //     locale = 'vn';
  //   }
  //   const currCode = 'VND';
  //   let vnp_Params = {};
  //   vnp_Params['vnp_Version'] = '2';
  //   vnp_Params['vnp_Command'] = 'pay';
  //   vnp_Params['vnp_TmnCode'] = tmnCode;
  //   // vnp_Params['vnp_Merchant'] = ''
  //   vnp_Params['vnp_Locale'] = locale;
  //   vnp_Params['vnp_CurrCode'] = currCode;
  //   vnp_Params['vnp_TxnRef'] = orderId;
  //   vnp_Params['vnp_OrderInfo'] = orderInfo;
  //   vnp_Params['vnp_OrderType'] = orderType;
  //   vnp_Params['vnp_Amount'] = amount * 100;
  //   vnp_Params['vnp_ReturnUrl'] = returnUrl;
  //   vnp_Params['vnp_IpAddr'] = ipAddr;
  //   vnp_Params['vnp_CreateDate'] = createDate;
  //   if (bankCode !== null && bankCode !== '') {
  //     vnp_Params['vnp_BankCode'] = bankCode;
  //   }

  //   vnp_Params = sortObject(vnp_Params);

  //   const signData =
  //     secretKey + querystring.stringify(vnp_Params, { encode: false });

  //   const secureHash = sha256(signData);

  //   vnp_Params['vnp_SecureHashType'] = 'SHA256';
  //   vnp_Params['vnp_SecureHash'] = secureHash;
  //   vnpUrl += '?' + querystring.stringify(vnp_Params, { encode: true });

  //   // Neu muon dung Redirect thi dong dong ben duoi
  //   // res.status(200).json({ code: '00', data: vnpUrl });
  //   // Neu muon dung Redirect thi mo dong ben duoi va dong dong ben tren
  //   res.redirect(vnpUrl);
  // },

  async vnPayReturn(req, res, next) {
    let vnp_Params = req.query;

    const secureHash = vnp_Params['vnp_SecureHash'];

    delete vnp_Params['vnp_SecureHash'];
    delete vnp_Params['vnp_SecureHashType'];

    vnp_Params = sortObject(vnp_Params);

    const tmnCode = keys.vnpay.tmnCode;
    const secretKey = keys.vnpay.hashSecret;

    const signData =
      secretKey + querystring.stringify(vnp_Params, { encode: false });

    const checkSum = sha256(signData);

    res.redirect(
      `${keys.app.clientURL}/tai-khoan/view-order/${vnp_Params.vnp_TxnRef}`
    );

    // if (secureHash === checkSum) {
    //   res.redirect(
    //     `${keys.app.clientURL}/tai-khoan/view-order/${vnp_Params.vnp_TxnRef}`
    //   );
    //   // Kiem tra xem du lieu trong db co hop le hay khong va thong bao ket qua
    //   // res.render('success', { code: vnp_Params['vnp_ResponseCode'] });
    // } else {
    //   // res.render('success', { code: '97' });
    // }
  },

  async vnPayIPN(req, res, next) {
    try {
      let vnp_Params = req.query;
      const secureHash = vnp_Params['vnp_SecureHash'];

      delete vnp_Params['vnp_SecureHash'];
      delete vnp_Params['vnp_SecureHashType'];

      vnp_Params = sortObject(vnp_Params);
      const secretKey = keys.vnpay.hashSecret;
      const signData =
        secretKey + querystring.stringify(vnp_Params, { encode: false });

      const checkSum = sha256(signData);
      if (secureHash === checkSum) {
        const orderId = vnp_Params['vnp_TxnRef'];
        const rspCode = vnp_Params['vnp_ResponseCode'];
        if (rspCode == '00') {
          await OrderManager.updateOrder(orderId, { paid: true });
        }
        // Kiem tra du lieu co hop le khong, cap nhat trang thai don hang va gui ket qua cho VNPAY theo dinh dang duoi
        res.status(200).json({ RspCode: '00', Message: 'success' });
      } else {
        res.status(200).json({ RspCode: '97', Message: 'Fail checksum' });
      }
    } catch (error) {
      res.status(200).json({ RspCode: '99', Message: 'Fail checksum' });
    }
  },
};
