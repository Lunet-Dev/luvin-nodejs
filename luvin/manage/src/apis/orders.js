import request from '../utils/request';

export const getOrders = async (
  limit,
  page,
  name,
  status,
  paymentMethod,
  paid
) => {
  try {
    const response = await request(
      `/order?limit=${limit}&page=${page}&name=${name}&status=${status}&paymentMethod=${paymentMethod}&paid=${paid}`
    );
    return response;
  } catch (error) {
    throw error;
  }
};

// export const createOrder = async (userInfo) => {
//   try {
//     const response = await request('/order', {
//       method: 'POST',
//       body: JSON.stringify(userInfo),
//     });
//     return response;
//   } catch (error) {
//     throw error;
//   }
// };

export const updateOrder = async (orderId, orderInfo) => {
  try {
    const response = await request(`/order/${orderId}`, {
      method: 'PUT',
      body: JSON.stringify(orderInfo),
    });
    return response;
  } catch (error) {
    throw error;
  }
};

export const deleteOrder = async (orderId) => {
  try {
    const response = await request(`/order/${orderId}`, {
      method: 'DELETE',
    });
    return response;
  } catch (error) {
    throw error;
  }
};

export const pushToPos = async (posId, orderId) => {
  try {
    const response = await request('/order/push-to-pos', {
      method: 'POST',
      body: JSON.stringify({
        posId,
        orderId,
      }),
    });
    return response;
  } catch (error) {
    throw error;
  }
};
