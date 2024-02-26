import React from 'react';
import { Button } from 'antd';
import { useRecoilValue } from 'recoil';

import { SyncOutlined } from '@ant-design/icons';

import FanpageList from './List';

import useFanpages from '../../hooks/useFanpages';
import withLayout from '../../hocs/withLayout';

import { syncFanpages } from '../../apis/fanpage';

import { ROLE_ADMIN } from '../../configs';
import authState from '../../atoms/auth';

const FanpageComponent = () => {
  const auth = useRecoilValue(authState);
  const [fanpages, setFanpagesState] = useFanpages();

  const onSyncFanpage = async () => {
    const $fanpages = await syncFanpages();
    if ($fanpages) setFanpagesState($fanpages);
  };

  return (
    <>
      {auth.role === ROLE_ADMIN && (
        <Button
          type="primary"
          icon={<SyncOutlined />}
          size="large"
          style={{ marginBottom: '20px' }}
          onClick={onSyncFanpage}
        >
          Sync Fanpage
        </Button>
      )}
      <FanpageList fanpages={fanpages} />
    </>
  );
};

export default withLayout(FanpageComponent);
