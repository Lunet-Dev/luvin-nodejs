import { atom } from 'recoil';

const categoriesState = atom({
  key: 'categoriesState',
  default: [],
});

export default categoriesState;
