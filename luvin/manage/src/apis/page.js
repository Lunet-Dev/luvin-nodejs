import request from '../utils/request';

export const getPages = async () => {
  try {
    const response = await request(`/page`);
    return response;
  } catch (error) {
    throw error;
  }
};

export const getPage = async (type) => {
  try {
    const response = await request(`/page/${type}`);
    return response;
  } catch (error) {
    throw error;
  }
};

export const updatePage = async (type, pageSetting) => {
  try {
    const response = await request(`/page/${type}`, {
      method: 'PUT',
      body: JSON.stringify(pageSetting),
    });
    return response;
  } catch (error) {
    throw error;
  }
};
