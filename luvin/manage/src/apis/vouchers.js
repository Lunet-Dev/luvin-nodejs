import request from '../utils/request';

export const getVouchers = async (limit, page, code, type, available) => {
  try {
    const response = await request(
      `/voucher/all?limit=${limit}&page=${page}&code=${code}&type=${type}&available=${available}`
    );
    return response;
  } catch (error) {
    throw error;
  }
};

export const createVoucher = async (voucherData) => {
  try {
    const response = await request('/voucher', {
      method: 'POST',
      body: JSON.stringify(voucherData),
    });
    return response;
  } catch (error) {
    throw error;
  }
};

export const updateVoucher = async (voucherId, voucherData) => {
  try {
    const response = await request(`/voucher/${voucherId}`, {
      method: 'PUT',
      body: JSON.stringify(voucherData),
    });
    return response;
  } catch (error) {
    throw error;
  }
};

export const deleteVoucher = async (voucherId) => {
  try {
    const response = await request(`/voucher/${voucherId}`, {
      method: 'DELETE',
    });
    return response;
  } catch (error) {
    throw error;
  }
};
