import request from '../utils/request';

export const getConfigs = async () => {
  try {
    const response = await request('/config');
    return response;
  } catch (error) {
    throw error;
  }
};

export const updateConfigs = async (configData) => {
  try {
    const response = await request('/config', {
      method: 'PUT',
      body: JSON.stringify(configData),
    });
    return response;
  } catch (error) {
    throw error;
  }
};

export const getTastyConfig = async () => {
  try {
    const response = await request('/tasty');
    return response;
  } catch (error) {
    throw error;
  }
};

export const updateTastyConfig = async (configData) => {
  try {
    const response = await request('/tasty', {
      method: 'PUT',
      body: JSON.stringify(configData),
    });
    return response;
  } catch (error) {
    throw error;
  }
};

export const getAboutUsConfig = async () => {
  try {
    const response = await request('/about-us');
    return response;
  } catch (error) {
    throw error;
  }
};

export const updateAboutUsConfig = async (configData) => {
  try {
    const response = await request('/about-us', {
      method: 'PUT',
      body: JSON.stringify(configData),
    });
    return response;
  } catch (error) {
    throw error;
  }
};
