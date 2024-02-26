import { useEffect } from 'react';
import { useRecoilState } from 'recoil';

import widgetsState from '../atoms/widgets';
import { getWidgets } from '../apis/widget';

const useWidgets = () => {
  const [widgets, setWidgetsState] = useRecoilState(widgetsState);

  const handleGetFanpages = async () => {
    const resWidgets = await getWidgets();
    if (resWidgets) setWidgetsState(resWidgets);
  };

  useEffect(() => {
    if (!widgets.length) handleGetFanpages();
  }, []);

  return [widgets, setWidgetsState];
};

export default useWidgets;
