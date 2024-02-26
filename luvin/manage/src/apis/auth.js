import request from '../utils/request';

export const getUserInfo = async () => {
  try {
    const response = await request('/auth/me');
    return response;
  } catch (error) {
    throw error;
  }
};

export const login = async (loginData) => {
  try {
    const response = await request('/auth/login', {
      method: 'POST',
      body: JSON.stringify(loginData),
    });
    return response;
  } catch (error) {
    throw error;
  }
};
