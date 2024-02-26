import { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import toastr from 'toastr';

import categoriesState from '../atoms/categories';
import { getCategories } from '../apis/categories';

const useCategories = () => {
  const [categories, setCategoriesState] = useRecoilState(categoriesState);

  const handleGetCategories = async () => {
    try {
      const response = await getCategories();
      setCategoriesState(response.data);
    } catch (error) {
      toastr['error'](error.message);
    }
  };

  useEffect(() => {
    if (!categories.length) handleGetCategories();
  }, []);

  return [categories, setCategoriesState];
};

export default useCategories;
