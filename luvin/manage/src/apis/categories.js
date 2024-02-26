import request from '../utils/request';

export const getCategories = async () => {
  try {
    const response = await request('/category/all');
    return response;
  } catch (error) {
    throw error;
  }
};

export const updateCategory = async (categoryIdent, categoryData) => {
  try {
    const response = await request(`/category/${categoryIdent}`, {
      method: 'PUT',
      body: JSON.stringify(categoryData),
    });
    return response;
  } catch (error) {
    throw error;
  }
};
