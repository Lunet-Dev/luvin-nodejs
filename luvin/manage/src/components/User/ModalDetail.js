import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Modal, Button, Form, Input, Select } from 'antd';
import cloneDeep from 'lodash/cloneDeep';
import { useRecoilValue } from 'recoil';

import { ROLE_ADMIN, ROLE_STAFF } from '../../configs';

import useFanpages from '../../hooks/useFanpages';
import authState from '../../atoms/auth';

const { Option } = Select;

const ModalDetailWidget = ({
  visible,
  onClose,
  handleCreate,
  handleUpdate,
  userDetail,
}) => {
  const auth = useRecoilValue(authState);
  const [form] = Form.useForm();
  const [loading, updateLoading] = useState(false);
  const [fanpages] = useFanpages();

  const handleClose = () => {
    form.setFieldsValue({
      email: null,
      role: ROLE_STAFF,
    });
    onClose();
  };

  useEffect(() => {
    if (visible === 'update') {
      const permissions = cloneDeep(userDetail.permissions);
      for (const permission in permissions) {
        permissions[permission] = Object.keys(permissions[permission]);
      }
      form.setFieldsValue({
        email: userDetail.email,
        role: userDetail.role,
        permissions,
      });
    }
  }, [visible]);

  const onSave = async () => {
    updateLoading(true);
    const userData = form.getFieldsValue(['email', 'role', 'permissions']);
    const userInfo = cloneDeep(userData);
    for (const permission in userInfo.permissions) {
      const fanpageIds = userInfo.permissions[permission] || [];
      userInfo.permissions[permission] = fanpageIds.reduce(function (obj, v) {
        obj[v] = 1;
        return obj;
      }, {});
    }
    await handleCreate(userInfo);
    updateLoading(false);
    handleClose();
  };

  const onUpdate = async () => {
    updateLoading(true);
    const userData = form.getFieldsValue(['email', 'role', 'permissions']);
    const userInfo = cloneDeep(userData);
    for (const permission in userInfo.permissions) {
      const fanpageIds = userInfo.permissions[permission] || [];
      userInfo.permissions[permission] = fanpageIds.reduce(function (obj, v) {
        obj[v] = 1;
        return obj;
      }, {});
    }
    await handleUpdate(userInfo);
    updateLoading(false);
    handleClose();
  };

  return (
    <Modal
      visible={!!visible}
      title={visible === 'add' ? 'Add User' : 'Update User'}
      onOk={onSave}
      onCancel={handleClose}
      footer={[
        <Button key="back" onClick={handleClose}>
          Cancel
        </Button>,
        <Button
          htmlType="submit"
          key="submit"
          type="primary"
          loading={loading}
          onClick={() => (visible === 'add' ? onSave() : onUpdate())}
        >
          {visible === 'add' ? 'Add' : 'Update'}
        </Button>,
      ]}
    >
      <Form
        labelCol={{ span: 6 }}
        wrapperCol={{ span: 16 }}
        layout="horizontal"
        form={form}
      >
        <Form.Item label="Email" name="email">
          <Input placeholder="Email" />
        </Form.Item>
        <Form.Item name="role" label="Role">
          <Select placeholder="Role" optionFilterProp="children">
            {auth.role === ROLE_ADMIN && (
              <>
                <Option value={ROLE_ADMIN}>Admin</Option>
                <Option value={ROLE_STAFF}>Staff</Option>
              </>
            )}
            <Option value={ROLE_STAFF}>Streamer</Option>
          </Select>
        </Form.Item>
        <Form.Item label="Permissions">
          <Input.Group
            compact
            style={{ display: 'flex', flexDirection: 'column' }}
          >
            <Form.Item name={['permissions', 'reads']}>
              <Select
                mode="multiple"
                style={{ width: '100%' }}
                placeholder="Reads"
                // defaultValue={['china']}
                optionLabelProp="label"
              >
                {fanpages.map(({ fanpageId, fanpageName }) => (
                  <Option value={fanpageId} label={fanpageName}>
                    {fanpageName}
                  </Option>
                ))}
              </Select>
            </Form.Item>
            <Form.Item name={['permissions', 'writes']}>
              <Select
                mode="multiple"
                style={{ width: '100%' }}
                placeholder="Writes"
                // defaultValue={['china']}
                optionLabelProp="label"
              >
                {fanpages.map(({ fanpageId, fanpageName }) => (
                  <Option value={fanpageId} label={fanpageName}>
                    {fanpageName}
                  </Option>
                ))}
              </Select>
            </Form.Item>
            <Form.Item name={['permissions', 'deletes']}>
              <Select
                mode="multiple"
                style={{ width: '100%' }}
                placeholder="Deletes"
                // defaultValue={['china']}
                optionLabelProp="label"
              >
                {fanpages.map(({ fanpageId, fanpageName }) => (
                  <Option value={fanpageId} label={fanpageName}>
                    {fanpageName}
                  </Option>
                ))}
              </Select>
            </Form.Item>
          </Input.Group>
        </Form.Item>
      </Form>
    </Modal>
  );
};

ModalDetailWidget.defaultProps = {
  visible: false,
  onClose: () => {},
  handleCreate: () => {},
  handleUpdate: () => {},
  userDetail: {},
};

ModalDetailWidget.propTypes = {
  visible: PropTypes.bool,
  onClose: PropTypes.func,
  handleCreate: PropTypes.func,
  handleUpdate: PropTypes.func,
  userDetail: PropTypes.objectOf(PropTypes.object),
};

export default ModalDetailWidget;
