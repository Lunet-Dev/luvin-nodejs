import { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import toastr from 'toastr';

import posState from '../atoms/pos';
import { getPos } from '../apis/pos';

const usePos = () => {
  const [pos, setPosState] = useRecoilState(posState);

  const handleGetPos = async () => {
    try {
      const response = await getPos();
      setPosState(response.data);
    } catch (error) {
      toastr['error'](error.message);
    }
  };

  useEffect(() => {
    if (!pos.length) handleGetPos();
  }, []);

  return [pos, setPosState];
};

export default usePos;
