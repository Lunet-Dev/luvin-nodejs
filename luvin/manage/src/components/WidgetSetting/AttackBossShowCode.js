import React, { useState } from 'react';
import {
  Form,
  Input,
  Button,
  Divider,
  Checkbox,
  Row,
  Col,
  InputNumber,
  Typography,
} from 'antd';
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';

import { updateUsedWidget } from '../../apis/used-widget';
import { Error, Success } from '../../utils/notifications';

const { Text } = Typography;

const formItemLayout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 20 },
};
const formTailLayout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 20, offset: 4 },
};

const SettingAttackBossShowCode = ({ widget, usedWidget, eventDetail }) => {
  const [hack, updateHack] = useState(); // update lại component để generate widget link
  const [form] = Form.useForm();

  const onFinish = async (values) => {
    try {
      const usedWidgetData = {
        ...values,
        widgetId: widget.id,
        configs: JSON.stringify(values.configs || {}),
      };
      await updateUsedWidget(eventDetail.id, usedWidget.id, usedWidgetData);
      Success('Update widget success');
      // console.log('saved', saved);
      // console.log(JSON.stringify(values));
    } catch (error) {
      Error(error.message);
    }
  };

  let configs = {
    time: 0,
    reaction: [
      {
        types: [],
        buff: 0,
      },
    ],
  };

  if (usedWidget.configs) {
    try {
      configs = JSON.parse(usedWidget.configs);
    } catch (error) {
      Error(error.message);
    }
  }
  return (
    <Form
      form={form}
      name="dynamic_form_nest_item"
      onFinish={onFinish}
      autoComplete="off"
      initialValues={{
        runInBackground: usedWidget.runInBackground || false,
        customName: usedWidget.customName || '',
        configs,
      }}
    >
      <Row>
        <Col span={22}>
          <Form.Item
            {...formTailLayout}
            name={['runInBackground']}
            valuePropName="checked"
          >
            <Checkbox>Running in the background</Checkbox>
          </Form.Item>
          <Form.Item
            {...formItemLayout}
            name={['customName']}
            label="Custom name"
          >
            <Input />
          </Form.Item>
          <Form.Item
            {...formItemLayout}
            name={['configs', 'time']}
            label="Time attack"
            type="number"
            onChange={updateHack}
          >
            <InputNumber />
          </Form.Item>
        </Col>
      </Row>

      <Form.List name={['configs', 'reaction']}>
        {(fields, { add, remove }) => {
          return (
            <>
              {fields.map((field) => {
                const reactionConfigs =
                  form.getFieldValue(['configs', 'reaction']) || [];
                const timeConfig = form.getFieldValue(['configs', 'time']) || 0;
                const { types = [], bossHp = 0, giftcode = '' } =
                  reactionConfigs[field.fieldKey] || {};
                // console.log('reactionConfigs', reactionConfigs);
                // console.log('field', field);
                let url = `${widget.url}?usedWidgetId=${usedWidget.id}`;
                if (giftcode) {
                  url = `${url}&giftcode=${giftcode}`;
                }
                if (bossHp) {
                  url = `${url}&boss-hp=${bossHp}`;
                }
                if (timeConfig) {
                  url = `${url}&time=${timeConfig}`;
                }
                if (types.length) {
                  url = `${url}&reaction-type=${types.join(',')}`;
                }
                return (
                  <>
                    <Row>
                      <Col span={22}>
                        <Form.Item
                          {...field}
                          {...formItemLayout}
                          name={[field.name, 'bossHp']}
                          label="Boss HP"
                          type="number"
                        >
                          <InputNumber onChange={updateHack} />
                        </Form.Item>
                        <Form.Item
                          {...field}
                          {...formItemLayout}
                          name={[field.name, 'giftcode']}
                          label="Giftcode"
                        >
                          <Input onChange={updateHack} />
                        </Form.Item>
                        <Form.Item
                          {...field}
                          {...formItemLayout}
                          name={[field.name, 'types']}
                          label="Reaction types"
                        >
                          <Checkbox.Group
                            options={[
                              { label: 'Like', value: 'LIKE' },
                              { label: 'Love', value: 'LOVE' },
                              { label: 'Haha', value: 'HAHA' },
                              { label: 'Wow', value: 'WOW' },
                              { label: 'Sad', value: 'SAD' },
                              { label: 'Angry', value: 'ANGRY' },
                            ]}
                            onChange={updateHack}
                          />
                        </Form.Item>
                        <Form.Item
                          {...field}
                          {...formItemLayout}
                          name={[field.name, 'buff']}
                          label="Reaction buff"
                          type="number"
                        >
                          <InputNumber onChange={updateHack} />
                        </Form.Item>
                        <Form.Item {...formTailLayout}>
                          <Text copyable={{ text: url }}>
                            <b>URL: </b>
                            <Text mark>{url}</Text>
                          </Text>
                        </Form.Item>
                      </Col>
                      <Col
                        span={2}
                        style={{ margin: 'auto', textAlign: 'center' }}
                      >
                        <MinusCircleOutlined
                          onClick={() => {
                            remove(field.name);
                          }}
                        />
                      </Col>
                    </Row>
                    {fields.length >= 2 && <Divider />}
                  </>
                );
              })}

              <Form.Item>
                <Button
                  type="dashed"
                  onClick={() => {
                    add();
                  }}
                  block
                >
                  <PlusOutlined /> Add field
                </Button>
              </Form.Item>
            </>
          );
        }}
      </Form.List>

      <Form.Item>
        <Button type="primary" htmlType="submit">
          Save
        </Button>
      </Form.Item>
    </Form>
  );
};

export default SettingAttackBossShowCode;
