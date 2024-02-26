import React, { useState, useEffect } from 'react';
import { Form, Input, Button, Spin, Select, InputNumber } from 'antd';
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import debounce from 'lodash/debounce';

import PropTypes from 'prop-types';
import toastr from 'toastr';
import { CKEditor } from '@ckeditor/ckeditor5-react';
// import BalloonEditor from '@ckeditor/ckeditor5-build-balloon';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

import Upload from '../../components/Upload';

import { getAboutUsConfig, updateAboutUsConfig } from '../../apis/configs';
import { findProducts } from '../../apis/products';

import withLayout from '../../hocs/withLayout';

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
  const [state, setState] = useState({
    ident: '',
    title: '',
    description: '',
    title2: '',
    title2Image: '',
    description2: '',
    title3: '',
    description3: '',
    title4: '',
    description4: '',

    loading: false,
  });
  const handleGetConfigs = async () => {
    try {
      setState({ ...state, loading: true });
      const response = await getAboutUsConfig();
      const {
        title,
        description,
        title2,
        title2Image,
        description2,
        title3,
        description3,
        title4,
        description4,
      } = response.data;
      setState({
        ...state,
        title,
        description,
        title2,
        title2Image,
        description2,
        title3,
        description3,
        title4,
        description4,
        loading: false,
      });
    } catch (error) {
      setState({ ...state, loading: false });
      toastr['error'](error.message);
    }
  };

  useEffect(() => {
    handleGetConfigs();
  }, []);

  const handleChangeSetting = (prop, value) => {
    setState({
      ...state,
      [prop]: value,
    });
  };

  const handleUpdateConfig = async (event) => {
    event.preventDefault();
    try {
      const response = await updateAboutUsConfig({
        title: state.title,
        description: state.description,
        title2: state.title2,
        title2Image: state.title2Image,
        description2: state.description2,
        title3: state.title3,
        description3: state.description3,
        title4: state.title4,
        description4: state.description4,
      });
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
                    <form class="outer-repeater" onSubmit={handleUpdateConfig}>
                      <div data-repeater-list="outer-group" class="outer">
                        <div data-repeater-item class="outer">
                          <div class="form-group row mb-4">
                            <label
                              for="setting-title"
                              class="col-form-label col-lg-2"
                            >
                              Title
                            </label>
                            <div class="col-lg-10">
                              <textarea
                                class="form-control"
                                rows="2"
                                id="setting-title"
                                value={state.title}
                                onChange={(event) =>
                                  handleChangeSetting(
                                    'title',
                                    event.target.value
                                  )
                                }
                              />
                            </div>
                          </div>
                          <div class="form-group row mb-4">
                            <label
                              for="setting-description"
                              class="col-form-label col-lg-2"
                            >
                              Description
                            </label>
                            <div class="col-lg-10">
                              <textarea
                                class="form-control"
                                rows="3"
                                id="setting-description"
                                value={state.description}
                                onChange={(event) =>
                                  handleChangeSetting(
                                    'description',
                                    event.target.value
                                  )
                                }
                              />
                            </div>
                          </div>
                          <div class="form-group row mb-4">
                            <label
                              for="setting-description"
                              class="col-form-label col-lg-2"
                            >
                              Tiêu đề thương hiệu
                            </label>
                            <div class="col-lg-10">
                              <textarea
                                class="form-control"
                                rows="2"
                                id="setting-description"
                                value={state.title2}
                                onChange={(event) =>
                                  handleChangeSetting(
                                    'title2',
                                    event.target.value
                                  )
                                }
                              />
                            </div>
                          </div>
                          <div class="form-group row mb-4">
                            <label
                              for="taskbudget"
                              class="col-form-label col-lg-2"
                            >
                              Ảnh thương hiệu
                            </label>
                            <div class="col-lg-10">
                              <Upload
                                initFiles={[state.title2Image]}
                                onUploaded={(files) => {
                                  handleChangeSetting('title2Image', files);
                                }}
                                maxFiles={1}
                              />
                            </div>
                          </div>

                          <div class="form-group row mb-4">
                            <label
                              for="setting-description"
                              class="col-form-label col-lg-2"
                            >
                              Mô tả thương hiệu
                            </label>
                            <div class="col-lg-10">
                              <textarea
                                class="form-control"
                                rows="3"
                                id="setting-description"
                                value={state.description2}
                                onChange={(event) =>
                                  handleChangeSetting(
                                    'description2',
                                    event.target.value
                                  )
                                }
                              />
                            </div>
                          </div>
                          <div class="form-group row mb-4">
                            <label
                              for="setting-title"
                              class="col-form-label col-lg-2"
                            >
                              Tiêu đề chứng nhận
                            </label>
                            <div class="col-lg-10">
                              <textarea
                                class="form-control"
                                rows="2"
                                id="setting-title1"
                                value={state.title3}
                                onChange={(event) =>
                                  handleChangeSetting(
                                    'title3',
                                    event.target.value
                                  )
                                }
                              />
                            </div>
                          </div>
                          <div class="form-group row mb-4">
                            <label
                              for="setting-title"
                              class="col-form-label col-lg-2"
                            >
                              Mô tả chứng nhận
                            </label>
                            <div class="col-lg-10">
                              <textarea
                                class="form-control"
                                rows="2"
                                id="setting-title2"
                                value={state.description3}
                                onChange={(event) =>
                                  handleChangeSetting(
                                    'description3',
                                    event.target.value
                                  )
                                }
                              />
                            </div>
                          </div>
                          <div class="form-group row mb-4">
                            <label
                              for="setting-title"
                              class="col-form-label col-lg-2"
                            >
                              Tiêu đề đối tác
                            </label>
                            <div class="col-lg-10">
                              <textarea
                                class="form-control"
                                rows="2"
                                id="setting-title1"
                                value={state.title4}
                                onChange={(event) =>
                                  handleChangeSetting(
                                    'title4',
                                    event.target.value
                                  )
                                }
                              />
                            </div>
                          </div>
                          <div class="form-group row mb-4">
                            <label
                              for="setting-title"
                              class="col-form-label col-lg-2"
                            >
                              Mô tả đối tác
                            </label>
                            <div class="col-lg-10">
                              <textarea
                                class="form-control"
                                rows="2"
                                id="setting-title2"
                                value={state.description4}
                                onChange={(event) =>
                                  handleChangeSetting(
                                    'description4',
                                    event.target.value
                                  )
                                }
                              />
                            </div>
                          </div>
                        </div>
                        <div class="row justify-content-end">
                          <div class="col-lg-10">
                            <button type="submit" class="btn btn-primary">
                              Save
                            </button>
                          </div>
                        </div>
                      </div>
                    </form>
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
