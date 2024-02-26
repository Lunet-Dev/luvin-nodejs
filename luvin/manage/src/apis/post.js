import { Error } from '../utils/notifications';
import request from '../utils/request';

// eslint-disable-next-line
export const getPosts = async () => {
  try {
    const response = await request('/api/posts');
    if (response.status === 200) {
      const { data } = await response.json();
      return data;
    }
    console.error(response);
    Error('Error', response.statusText);
    return null;
  } catch (error) {
    console.error(error);
    Error('Error', error.message);
    return null;
  }
};

export const getPostsOfFanpage = async (fanpageId) => {
  try {
    const response = await request(`/api/${fanpageId}/posts`);
    if (response.status === 200) {
      const { data } = await response.json();
      return data;
    }
    console.error(response);
    Error('Error', response.statusText);
    return null;
  } catch (error) {
    console.error(error);
    Error('Error', error.message);
    return null;
  }
};
