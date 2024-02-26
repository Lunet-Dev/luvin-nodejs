import request from '../utils/request';

// eslint-disable-next-line
export const uploadMedia = async (formData) => {
  try {
    const response = await request('/api/upload', {
      method: 'PUT',
      // headers: {
      //   'Content-Type': 'application/json',
      // },
      body: formData,
    });
    if (response.status === 201) {
      const { data } = await response.json();
      return data;
    }
    throw new Error(response.statusText);
  } catch (error) {
    console.error(error);
    throw error;
  }
};
