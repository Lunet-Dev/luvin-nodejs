import React, { useState, useEffect } from 'react';
import { Form, Input, Button, Spin, Select, InputNumber } from 'antd';
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import debounce from 'lodash/debounce';
import { useRecoilValue } from 'recoil';

import PropTypes from 'prop-types';
import toastr from 'toastr';
import { CKEditor } from '@ckeditor/ckeditor5-react';
// import BalloonEditor from '@ckeditor/ckeditor5-build-balloon';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

import Upload from '../../components/Upload';

import { getTastyConfig, updateTastyConfig } from '../../apis/configs';
import { findProducts } from '../../apis/products';

import withLayout from '../../hocs/withLayout';

import withRole from '../../utils/withRole';

import { ROLE_ADMIN, SALE_MOD, B3_MOD } from '../../configs';
import authState from '../../atoms/auth';

const { TextArea } = Input;
const { Option } = Select;

const layout = {
  labelCol: { span: 2 },
  wrapperCol: { span: 22 },
};
const tailLayout = {
  wrapperCol: { offset: 2, span: 22 },
};

function TastyPage(props) {
  const auth = useRecoilValue(authState);
  const [state, setState] = useState({
    // title: '',
    // ctaImage: '',
    // ctaDescription: '',
    // title1: '',
    // title2: '',
    // ctaDescription2: '',
    // products: '',
    // housePoursTitle: '',
    // housePoursDescription: '',
    // sparklingTitle: '',
    // housePours: '',
    tasty: {},

    loading: false,
    sProducts: [],
    fetching: false,
  });
  const handleGetConfigs = async () => {
    try {
      setState({ ...state, loading: true });
      const response = await getTastyConfig();
      setState({
        ...state,
        tasty: response.data || {},
      });
    } catch (error) {
      setState({ ...state, loading: false });
      toastr['error'](error.message);
    }
  };

  useEffect(() => {
    handleGetConfigs();
  }, []);

  const [form] = Form.useForm();
  const onFinish = async (values) => {
    if (!withRole([ROLE_ADMIN, B3_MOD, SALE_MOD], auth.role)) {
      toastr['error']('You do not have permission to do this');
    }
    try {
      const response = await updateTastyConfig(values);
      toastr['success']('Cập nhật setting thành công');
    } catch (error) {
      toastr['error'](error.message);
    }
  };

  return (
    <>
      <div class="page-content">
        <div class="container-fluid">
          <div class="row">
            <div class="col-12">
              <div class="page-title-box d-flex align-items-center justify-content-between">
                <h4 class="mb-0 font-size-18">Settings</h4>

                {/* <div class="page-title-right">
                  <ol class="breadcrumb m-0">
                    <li class="breadcrumb-item">
                      <a href="javascript: void(0);">Tasks</a>
                    </li>
                    <li class="breadcrumb-item active">Create Task</li>
                  </ol>
                </div> */}
              </div>
            </div>
          </div>

          <div class="row">
            <div class="col-lg-12">
              <div class="card">
                <div class="card-body">
                  {/* <h4 class="card-title mb-4">Settings</h4> */}
                  {!state.loading && (
                    <Form
                      // {...layout}
                      form={form}
                      name="dynamic_form_nest_item"
                      onFinish={onFinish}
                      autoComplete="off"
                      initialValues={state.tasty}
                    >
                      <Form.Item {...layout} name="title" label="Title">
                        <TextArea rows={2} />
                      </Form.Item>
                      <Form.Item {...layout} name="ctaImage" label="Banner">
                        <Upload
                          initFiles={[(state.tasty || {}).ctaImage]}
                          onUploaded={(files) => {
                            form.setFieldsValue({ ctaImage: files[0] });
                          }}
                          maxFiles={1}
                        />
                      </Form.Item>
                      <Form.Item
                        {...layout}
                        name="ctaDescription"
                        label="Description"
                      >
                        <TextArea rows={3} />
                      </Form.Item>
                      <Form.Item {...layout} name="title1" label="Title 1">
                        <TextArea rows={2} />
                      </Form.Item>
                      <Form.Item {...layout} name="title2" label="Title 2">
                        <TextArea rows={2} />
                      </Form.Item>
                      <Form.Item
                        {...layout}
                        name="ctaDescription2"
                        label="Description 2"
                      >
                        <TextArea rows={2} />
                      </Form.Item>

                      <div className="ant-row ant-form-item">
                        <div className="ant-col ant-col-2 ant-form-item-label">
                          <label title="Products 2">Products</label>
                        </div>
                        <div className="ant-col ant-col-22 ant-form-item-control">
                          <Form.List name="products" noStyle>
                            {(fields, { add, remove }) => (
                              <>
                                {fields.map((field, index) => (
                                  <div
                                    className=""
                                    style={{
                                      display: 'flex',
                                      alignItems: 'center',
                                    }}
                                  >
                                    <div
                                      style={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                        flex: 1,
                                      }}
                                    >
                                      <div
                                        style={{
                                          display: 'flex',
                                          flexDirection: 'column',
                                          marginBottom: '15px',
                                        }}
                                      >
                                        <label>Name</label>
                                        <Form.Item
                                          {...field}
                                          noStyle
                                          name={[field.name, 'name']}
                                        >
                                          <Input />
                                        </Form.Item>
                                      </div>

                                      <div
                                        style={{
                                          display: 'flex',
                                          justifyContent: 'space-between',
                                          marginBottom: '15px',
                                        }}
                                      >
                                        <div
                                          style={{
                                            display: 'flex',
                                            flexDirection: 'column',
                                            flex: 1,
                                            marginRight: '5px',
                                          }}
                                        >
                                          <label>Type</label>
                                          <Form.Item
                                            {...field}
                                            noStyle
                                            name={[field.name, 'type']}
                                          >
                                            <Input />
                                          </Form.Item>
                                        </div>
                                        <div
                                          style={{
                                            display: 'flex',
                                            flexDirection: 'column',
                                            flex: 1,
                                            marginLeft: '5px',
                                          }}
                                        >
                                          <label>Origin</label>
                                          <Form.Item
                                            {...field}
                                            noStyle
                                            name={[field.name, 'origin']}
                                          >
                                            <Input />
                                          </Form.Item>
                                        </div>
                                      </div>
                                      <div
                                        style={{
                                          display: 'flex',
                                          flexDirection: 'column',
                                          marginBottom: '15px',
                                        }}
                                      >
                                        <label>Description</label>
                                        <Form.Item
                                          {...field}
                                          noStyle
                                          name={[field.name, 'description']}
                                        >
                                          <TextArea rows={2} />
                                        </Form.Item>
                                      </div>

                                      <div
                                        style={{
                                          display: 'flex',
                                          justifyContent: 'space-between',
                                          marginBottom: '15px',
                                        }}
                                      >
                                        <div
                                          style={{
                                            display: 'flex',
                                            flexDirection: 'column',
                                            flex: 1,
                                            marginRight: '5px',
                                          }}
                                        >
                                          <label>Price 25ml</label>
                                          <Form.Item
                                            {...field}
                                            noStyle
                                            name={[field.name, 'price25']}
                                          >
                                            <InputNumber
                                              style={{ width: '100%' }}
                                            />
                                          </Form.Item>
                                        </div>
                                        <div
                                          style={{
                                            display: 'flex',
                                            flexDirection: 'column',
                                            flex: 1,
                                            marginRight: '5px',
                                            marginLeft: '5px',
                                          }}
                                        >
                                          <label>Price 75ml</label>
                                          <Form.Item
                                            {...field}
                                            noStyle
                                            name={[field.name, 'price75']}
                                          >
                                            <InputNumber
                                              style={{ width: '100%' }}
                                            />
                                          </Form.Item>
                                        </div>
                                        <div
                                          style={{
                                            display: 'flex',
                                            flexDirection: 'column',
                                            flex: 1,
                                            marginRight: '5px',
                                            marginLeft: '5px',
                                          }}
                                        >
                                          <label>Price 125ml</label>
                                          <Form.Item
                                            {...field}
                                            noStyle
                                            name={[field.name, 'price125']}
                                          >
                                            <InputNumber
                                              style={{ width: '100%' }}
                                            />
                                          </Form.Item>
                                        </div>
                                        <div
                                          style={{
                                            display: 'flex',
                                            flexDirection: 'column',
                                            flex: 1,
                                            marginLeft: '5px',
                                          }}
                                        >
                                          <label>Price bottle</label>
                                          <Form.Item
                                            {...field}
                                            noStyle
                                            name={[field.name, 'bottle']}
                                          >
                                            <InputNumber
                                              style={{ width: '100%' }}
                                            />
                                          </Form.Item>
                                        </div>
                                      </div>
                                    </div>
                                    <MinusCircleOutlined
                                      onClick={() => remove(field.name)}
                                      style={{
                                        height: 'fit-content',
                                        width: '50px',
                                      }}
                                    />
                                  </div>
                                ))}

                                <Form.Item>
                                  <Button
                                    type="dashed"
                                    onClick={() => add()}
                                    block
                                    icon={<PlusOutlined />}
                                  >
                                    Add product
                                  </Button>
                                </Form.Item>
                              </>
                            )}
                          </Form.List>
                        </div>
                      </div>
                      <Form.Item
                        {...layout}
                        name="housePoursTitle"
                        label="House pours title"
                      >
                        <TextArea rows={2} />
                      </Form.Item>
                      <Form.Item
                        {...layout}
                        name="housePoursDescription"
                        label="House pours desctiption"
                      >
                        <TextArea rows={3} />
                      </Form.Item>
                      <Form.Item
                        {...layout}
                        name="sparklingTitle"
                        label="Sparkling title"
                      >
                        <TextArea rows={2} />
                      </Form.Item>
                      <div className="ant-row ant-form-item">
                        <div className="ant-col ant-col-2 ant-form-item-label">
                          <label title="Products 2">House pours</label>
                        </div>
                        <div className="ant-col ant-col-22 ant-form-item-control">
                          <Form.List name="housePours" noStyle>
                            {(fields, { add, remove }) => (
                              <>
                                {fields.map((field, index) => (
                                  <div
                                    className=""
                                    style={{
                                      display: 'flex',
                                      alignItems: 'center',
                                    }}
                                  >
                                    <div
                                      style={{
                                        display: 'flex',
                                        flex: 1,
                                        justifyContent: 'space-between',
                                        marginBottom: '15px',
                                        // flexDirection: 'column',
                                      }}
                                    >
                                      <div
                                        style={{
                                          display: 'flex',
                                          flexDirection: 'column',
                                          flex: 1,
                                          marginRight: '20px',
                                        }}
                                      >
                                        <label>Name</label>
                                        <Form.Item
                                          {...field}
                                          noStyle
                                          name={[field.name, 'name']}
                                        >
                                          <Input
                                            style={{
                                              width: '100%',
                                            }}
                                          />
                                        </Form.Item>
                                      </div>
                                      <div
                                        style={{
                                          display: 'flex',
                                          flexDirection: 'column',
                                        }}
                                      >
                                        <label>Price</label>
                                        <Form.Item
                                          {...field}
                                          noStyle
                                          name={[field.name, 'price']}
                                        >
                                          <InputNumber />
                                        </Form.Item>
                                      </div>
                                    </div>
                                    <MinusCircleOutlined
                                      onClick={() => remove(field.name)}
                                      style={{
                                        height: 'fit-content',
                                        width: '50px',
                                      }}
                                    />
                                  </div>
                                ))}

                                <Form.Item>
                                  <Button
                                    type="dashed"
                                    onClick={() => add()}
                                    block
                                    icon={<PlusOutlined />}
                                  >
                                    Add product
                                  </Button>
                                </Form.Item>
                              </>
                            )}
                          </Form.List>
                        </div>
                      </div>

                      <Form.Item>
                        <Button type="primary" htmlType="submit">
                          Submit
                        </Button>
                      </Form.Item>
                    </Form>
                    // <form class="outer-repeater" onSubmit={handleUpdateConfig}>
                    //   <div data-repeater-list="outer-group" class="outer">
                    //     <div data-repeater-item class="outer">
                    //       <div class="form-group row mb-4">
                    //         <label
                    //           for="setting-title"
                    //           class="col-form-label col-lg-2"
                    //         >
                    //           Title
                    //         </label>
                    //         <div class="col-lg-10">
                    //           <textarea
                    //             class="form-control"
                    //             rows="2"
                    //             id="setting-title"
                    //             value={state.title}
                    //             onChange={(event) =>
                    //               handleChangeSetting(
                    //                 'title',
                    //                 event.target.value
                    //               )
                    //             }
                    //           />
                    //         </div>
                    //       </div>
                    //       <div class="form-group row mb-4">
                    //         <label
                    //           for="taskbudget"
                    //           class="col-form-label col-lg-2"
                    //         >
                    //           Banner
                    //         </label>
                    //         <div class="col-lg-10">
                    //           <Upload
                    //             initFiles={[state.ctaImage]}
                    //             onUploaded={(files) => {
                    //               handleChangeSetting('ctaImage', files);
                    //             }}
                    //             maxFiles={1}
                    //           />
                    //         </div>
                    //       </div>

                    //       <div class="form-group row mb-4">
                    //         <label
                    //           for="setting-description"
                    //           class="col-form-label col-lg-2"
                    //         >
                    //           Description
                    //         </label>
                    //         <div class="col-lg-10">
                    //           <textarea
                    //             class="form-control"
                    //             rows="3"
                    //             id="setting-description"
                    //             value={state.ctaDescription}
                    //             onChange={(event) =>
                    //               handleChangeSetting(
                    //                 'ctaDescription',
                    //                 event.target.value
                    //               )
                    //             }
                    //           />
                    //         </div>
                    //       </div>
                    //       <div class="form-group row mb-4">
                    //         <label
                    //           for="setting-title"
                    //           class="col-form-label col-lg-2"
                    //         >
                    //           Title 1
                    //         </label>
                    //         <div class="col-lg-10">
                    //           <textarea
                    //             class="form-control"
                    //             rows="2"
                    //             id="setting-title1"
                    //             value={state.title1}
                    //             onChange={(event) =>
                    //               handleChangeSetting(
                    //                 'title1',
                    //                 event.target.value
                    //               )
                    //             }
                    //           />
                    //         </div>
                    //       </div>
                    //       <div class="form-group row mb-4">
                    //         <label
                    //           for="setting-title"
                    //           class="col-form-label col-lg-2"
                    //         >
                    //           Title 2
                    //         </label>
                    //         <div class="col-lg-10">
                    //           <textarea
                    //             class="form-control"
                    //             rows="2"
                    //             id="setting-title2"
                    //             value={state.title2}
                    //             onChange={(event) =>
                    //               handleChangeSetting(
                    //                 'title2',
                    //                 event.target.value
                    //               )
                    //             }
                    //           />
                    //         </div>
                    //       </div>
                    //       <div class="form-group row mb-4">
                    //         <label
                    //           for="setting-description2"
                    //           class="col-form-label col-lg-2"
                    //         >
                    //           Description 2
                    //         </label>
                    //         <div class="col-lg-10">
                    //           <textarea
                    //             class="form-control"
                    //             rows="3"
                    //             id="setting-description2"
                    //             value={state.ctaDescription2}
                    //             onChange={(event) =>
                    //               handleChangeSetting(
                    //                 'ctaDescription2',
                    //                 event.target.value
                    //               )
                    //             }
                    //           />
                    //         </div>
                    //       </div>
                    //       <div class="form-group row mb-4">
                    //         <label
                    //           for="setting-description2"
                    //           class="col-form-label col-lg-2"
                    //         >
                    //           Products
                    //         </label>
                    //         <div class="col-lg-10">
                    //           <div>
                    //             <input
                    //               id="setting-cta-title"
                    //               name="taskname"
                    //               type="text"
                    //               class="form-control"
                    //               placeholder="Product"
                    //             />
                    //             <div
                    //               style={{
                    //                 display: 'flex',
                    //                 flexWrap: 'wrap',
                    //                 justifyContent: 'space-between',
                    //                 marginTop: '5px',
                    //               }}
                    //             >
                    //               <input
                    //                 id="setting-cta-title"
                    //                 name="taskname"
                    //                 type="number"
                    //                 class="form-control"
                    //                 placeholder="Price 25ml"
                    //                 style={{ width: '23%' }}
                    //               />
                    //               <input
                    //                 id="setting-cta-title"
                    //                 name="taskname"
                    //                 type="number"
                    //                 class="form-control"
                    //                 placeholder="Price 75ml"
                    //                 style={{ width: '23%' }}
                    //               />
                    //               <input
                    //                 id="setting-cta-title"
                    //                 name="taskname"
                    //                 type="number"
                    //                 class="form-control"
                    //                 placeholder="Price 125ml"
                    //                 style={{ width: '23%' }}
                    //               />
                    //               <input
                    //                 id="setting-cta-title"
                    //                 name="taskname"
                    //                 type="number"
                    //                 class="form-control"
                    //                 placeholder="Price bottle"
                    //                 style={{ width: '23%' }}
                    //               />
                    //             </div>
                    //           </div>
                    //           {/* <CKEditor
                    //             config={{
                    //               height: 200,
                    //             }}
                    //             // editor={BalloonEditor}
                    //             editor={ClassicEditor}
                    //             data={state.products}
                    //             onChange={(event, editor) => {
                    //               // console.log('on chage');
                    //               // const data = editor.getData();
                    //               // handleChangePageContent(data);
                    //               // console.log({ event, editor, data });
                    //             }}
                    //             onBlur={(event, editor) => {
                    //               console.log('on blur');
                    //               const data = editor.getData();
                    //               handleChangeSetting('products', data);
                    //             }}
                    //           /> */}
                    //         </div>
                    //       </div>
                    //       <div class="form-group row mb-4">
                    //         <label
                    //           for="setting-title"
                    //           class="col-form-label col-lg-2"
                    //         >
                    //           House pours title
                    //         </label>
                    //         <div class="col-lg-10">
                    //           <textarea
                    //             class="form-control"
                    //             rows="2"
                    //             id="setting-title2"
                    //             value={state.housePoursTitle}
                    //             onChange={(event) =>
                    //               handleChangeSetting(
                    //                 'housePoursTitle',
                    //                 event.target.value
                    //               )
                    //             }
                    //           />
                    //         </div>
                    //       </div>
                    //       <div class="form-group row mb-4">
                    //         <label
                    //           for="setting-description2"
                    //           class="col-form-label col-lg-2"
                    //         >
                    //           House pours desctiption
                    //         </label>
                    //         <div class="col-lg-10">
                    //           <textarea
                    //             class="form-control"
                    //             rows="3"
                    //             id="setting-description2"
                    //             value={state.housePoursDescription}
                    //             onChange={(event) =>
                    //               handleChangeSetting(
                    //                 'housePoursDescription',
                    //                 event.target.value
                    //               )
                    //             }
                    //           />
                    //         </div>
                    //       </div>
                    //       <div class="form-group row mb-4">
                    //         <label
                    //           for="setting-title"
                    //           class="col-form-label col-lg-2"
                    //         >
                    //           Sparkling title
                    //         </label>
                    //         <div class="col-lg-10">
                    //           <textarea
                    //             class="form-control"
                    //             rows="2"
                    //             id="setting-title2"
                    //             value={state.sparklingTitle}
                    //             onChange={(event) =>
                    //               handleChangeSetting(
                    //                 'sparklingTitle',
                    //                 event.target.value
                    //               )
                    //             }
                    //           />
                    //         </div>
                    //       </div>
                    //       <div class="form-group row mb-4">
                    //         <label
                    //           for="setting-description2"
                    //           class="col-form-label col-lg-2"
                    //         >
                    //           House pours
                    //         </label>
                    //         <div class="col-lg-10">
                    //           <CKEditor
                    //             config={{
                    //               height: 200,
                    //             }}
                    //             // editor={BalloonEditor}
                    //             editor={ClassicEditor}
                    //             data={state.housePours}
                    //             onChange={(event, editor) => {
                    //               // console.log('on chage');
                    //               // const data = editor.getData();
                    //               // handleChangePageContent(data);
                    //               // console.log({ event, editor, data });
                    //             }}
                    //             onBlur={(event, editor) => {
                    //               console.log('on blur');
                    //               const data = editor.getData();
                    //               handleChangeSetting('housePours', data);
                    //             }}
                    //           />
                    //         </div>
                    //       </div>
                    //     </div>
                    //     <div class="row justify-content-end">
                    //       <div class="col-lg-10">
                    //         <button type="submit" class="btn btn-primary">
                    //           Save
                    //         </button>
                    //       </div>
                    //     </div>
                    //   </div>
                    // </form>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

TastyPage.propTypes = {};

export default withLayout(TastyPage);
