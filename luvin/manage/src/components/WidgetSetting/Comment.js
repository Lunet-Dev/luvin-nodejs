import React from 'react';
import { Form, Input, Button, Checkbox, Row, Col, Typography } from 'antd';

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

const SettingComment = ({ widget, usedWidget, eventDetail }) => {
  // const [hack, updateHack] = useState(); // update lại component để generate widget link
  const [form] = Form.useForm();

  const onFinish = async (values) => {
    try {
      const usedWidgetData = {
        ...values,
        widgetId: widget.id,
      };
      await updateUsedWidget(eventDetail.id, usedWidget.id, usedWidgetData);
      Success('Update widget success');
      // console.log('saved', saved);
      // console.log(JSON.stringify(values));
    } catch (error) {
      Error(error.message);
    }
  };

  const url = `${widget.url}?usedWidgetId=${usedWidget.id}`;

  return (
    <Form
      form={form}
      name="dynamic_form_nest_item"
      onFinish={onFinish}
      autoComplete="off"
      initialValues={{
        runInBackground: usedWidget.runInBackground || false,
        customName: usedWidget.customName || '',
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
          <Form.Item {...formTailLayout}>
            <Text copyable={{ text: url }}>
              <b>URL: </b>
              <Text mark>{url}</Text>
            </Text>
          </Form.Item>
        </Col>
      </Row>

      <Form.Item>
        <Button type="primary" htmlType="submit">
          Save
        </Button>
      </Form.Item>
    </Form>
  );
};

export default SettingComment;
