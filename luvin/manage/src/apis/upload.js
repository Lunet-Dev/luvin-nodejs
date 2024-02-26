import request from '../utils/request';

// eslint-disable-next-line
export const uploadSingle = async (formData) => {
  try {
    const response = await request('/upload/single', {
      method: 'POST',
      headers: {
        'Content-Type': 'multipart/form-data; ',
      },
      body: formData,
    });
    return response;
  } catch (error) {
    throw error;
  }
};

export const uploadArray = async (formData) => {
  try {
    const response = await request('/upload/array', {
      method: 'POST',
      headers: {},
      body: formData,
    });
    return response;
  } catch (error) {
    throw error;
  }
};
