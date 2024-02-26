import React from 'react';

import { notification } from 'antd';
import { WarningOutlined, CheckCircleOutlined } from '@ant-design/icons';

export const Success = (message, description) => {
  notification.open({
    message,
    description,
    icon: <CheckCircleOutlined style={{ color: 'green' }} />,
  });
};

export const Warning = (message, description) => {
  notification.open({
    message,
    description,
    icon: <WarningOutlined style={{ color: 'orange' }} />,
  });
};

export const Error = (message, description) => {
  notification.open({
    message,
    description,
    icon: <WarningOutlined style={{ color: 'red' }} />,
  });
};
