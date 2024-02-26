import request from '../utils/request';

export const findProducts = async (
  limit,
  page,
  name,
  category,
  discount,
  origin,
  type
) => {
  try {
    const response = await request(
      `/product?limit=${limit}&page=${page}&name=${name}&category=${category}&discount=${discount}&origin=${origin}&type=${type}`
    );
    return response;
  } catch (error) {
    throw error;
  }
};

export const updateProduct = async (productIdent, productData) => {
  try {
    const response = await request(`/product/${productIdent}`, {
      method: 'PUT',
      body: JSON.stringify(productData),
    });
    return response;
  } catch (error) {
    throw error;
  }
};

export const deleteProduct = async (productIdent, productData) => {
  try {
    const response = await request(`/product/${productIdent}`, {
      method: 'DELETE',
    });
    return response;
  } catch (error) {
    throw error;
  }
};

export const syncProducts = async () => {
  try {
    const response = await request('/product/sync-with-luvin');
    return response;
  } catch (error) {
    throw error;
  }
};
