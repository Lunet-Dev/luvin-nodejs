import request from '../utils/request';

export const getPosts = async (limit, page, type, name) => {
  try {
    const response = await request(
      `/post?limit=${limit}&page=${page}&type=${type}&name=${name}`
    );
    return response;
  } catch (error) {
    throw error;
  }
};

export const getPostDetail = async (postSlug) => {
  try {
    const response = await request(`/post/${postSlug}`);
    return response;
  } catch (error) {
    throw error;
  }
};

export const createPost = async (postData) => {
  try {
    const response = await request('/post', {
      method: 'POST',
      body: JSON.stringify(postData),
    });
    return response;
  } catch (error) {
    throw error;
  }
};

export const updatePost = async (postSlug, postData) => {
  try {
    const response = await request(`/post/${postSlug}`, {
      method: 'PUT',
      body: JSON.stringify(postData),
    });
    return response;
  } catch (error) {
    throw error;
  }
};

export const deletePost = async (postSlug) => {
  try {
    const response = await request(`/post/${postSlug}`, {
      method: 'DELETE',
    });
    return response;
  } catch (error) {
    throw error;
  }
};
