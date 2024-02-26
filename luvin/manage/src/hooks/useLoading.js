import { useState } from 'react';

const useLoading = (status) => {
  const [loading, setLoading] = useState(status);
  const withLoading = async (callback) => {
    setLoading(true);
    try {
      const response = await callback();
      setLoading(false);
      return response;
    } catch (error) {
      setLoading(false);
      throw error;
    }
  };
  return [loading, withLoading];
};
export default useLoading;
