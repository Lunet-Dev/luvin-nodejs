import request from '../utils/request';

export const getPos = async () => {
  try {
    const response = await request('/pos');
    return response;
  } catch (error) {
    throw error;
  }
};

export const createPos = async (posData) => {
  try {
    const response = await request('/pos', {
      method: 'POST',
      body: JSON.stringify(posData),
    });
    return response;
  } catch (error) {
    throw error;
  }
};

export const updatePos = async (posId, posData) => {
  try {
    const response = await request(`/pos/${posId}`, {
      method: 'PUT',
      body: JSON.stringify(posData),
    });
    return response;
  } catch (error) {
    throw error;
  }
};

export const deletePos = async (posId) => {
  try {
    const response = await request(`/pos/${posId}`, {
      method: 'DELETE',
    });
    return response;
  } catch (error) {
    throw error;
  }
};
