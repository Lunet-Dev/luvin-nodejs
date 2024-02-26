import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import toastr from 'toastr';
import { useRecoilValue } from 'recoil';

import Upload from '../../components/Upload';

import { getConfigs, updateConfigs } from '../../apis/configs';

import withLayout from '../../hocs/withLayout';
import withRole from '../../utils/withRole';

import { ROLE_ADMIN, SALE_MOD, B3_MOD } from '../../configs';
import authState from '../../atoms/auth';

function SettingPage(props) {
  const auth = useRecoilValue(authState);
  const [state, setState] = useState({
    banners: [],
    slogan: '',
    description: '',
    ctaImage: '',
    ctaTitle: '',
    ctaDescription: '',
    ctaUrl: '',

    loading: false,
  });
  const handleGetConfigs = async () => {
    try {
      setState({ ...state, loading: true });
      const response = await getConfigs();
      const {
        banners,
        slogan,
        description,
        ctaImage,
        ctaTitle,
        ctaDescription,
        ctaUrl,
      } = response.data;
      setState({
        ...state,
        banners,
        slogan,
        description,
        ctaImage,
        ctaTitle,
        ctaDescription,
        ctaUrl,
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
    if (!withRole([ROLE_ADMIN, B3_MOD], auth.role)) {
      toastr['error']('You do not have permission to do this');
    }
    try {
      const response = await updateConfigs({
        banners: state.banners,
        slogan: state.slogan,
        description: state.description,
        ctaImage: state.ctaImage,
        ctaTitle: state.ctaTitle,
        ctaDescription: state.ctaDescription,
        ctaUrl: state.ctaUrl,
      });
      toastr['success']('Cập nhật setting thành công');
    } catch (error) {
      toastr['error'](error.message);
    }
  };

  return (
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
                <h4 class="card-title mb-4">Settings</h4>
                {!state.loading && (
                  <form class="outer-repeater" onSubmit={handleUpdateConfig}>
                    <div data-repeater-list="outer-group" class="outer">
                      <div data-repeater-item class="outer">
                        <div class="form-group row mb-4">
                          <label
                            for="taskbudget"
                            class="col-form-label col-lg-2"
                          >
                            Banners
                          </label>
                          <div class="col-lg-10">
                            <Upload
                              initFiles={state.banners}
                              onUploaded={(files) => {
                                handleChangeSetting('banners', files);
                              }}
                              maxFiles={20}
                            />
                          </div>
                        </div>
                        <div class="form-group row mb-4">
                          <label
                            for="setting-slogan"
                            class="col-form-label col-lg-2"
                          >
                            Slogan
                          </label>
                          <div class="col-lg-10">
                            <textarea
                              class="form-control"
                              rows="2"
                              id="setting-slogan"
                              value={state.slogan}
                              onChange={(event) =>
                                handleChangeSetting(
                                  'slogan',
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
                          <label for="taskname" class="col-form-label col-lg-2">
                            CTA Image
                          </label>
                          <div class="col-lg-10">
                            <Upload
                              initFiles={[state.ctaImage]}
                              onUploaded={(files) => {
                                handleChangeSetting('ctaImage', files[0]);
                              }}
                              maxFiles={1}
                            />
                          </div>
                        </div>
                        <div class="form-group row mb-4">
                          <label
                            for="setting-cta-title"
                            class="col-form-label col-lg-2"
                          >
                            CTA Title
                          </label>
                          <div class="col-lg-10">
                            <input
                              id="setting-cta-title"
                              name="taskname"
                              type="text"
                              class="form-control"
                              placeholder="Enter CTA Title..."
                              value={state.ctaTitle}
                              onChange={(event) =>
                                handleChangeSetting(
                                  'ctaTitle',
                                  event.target.value
                                )
                              }
                            />
                          </div>
                        </div>
                        <div class="form-group row mb-4">
                          <label
                            for="setting-cta-description"
                            class="col-form-label col-lg-2"
                          >
                            CTA Description
                          </label>
                          <div class="col-lg-10">
                            <input
                              id="setting-cta-description"
                              name="taskname"
                              type="text"
                              class="form-control"
                              placeholder="Enter CTA Description..."
                              value={state.ctaDescription}
                              onChange={(event) =>
                                handleChangeSetting(
                                  'ctaDescription',
                                  event.target.value
                                )
                              }
                            />
                          </div>
                        </div>
                        <div class="form-group row mb-4">
                          <label
                            for="setting-cta-url"
                            class="col-form-label col-lg-2"
                          >
                            CTA Url
                          </label>
                          <div class="col-lg-10">
                            <input
                              id="setting-cta-url"
                              name="taskname"
                              type="text"
                              class="form-control"
                              placeholder="Enter CTA Url..."
                              value={state.ctaUrl}
                              onChange={(event) =>
                                handleChangeSetting(
                                  'ctaUrl',
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
  );
}

SettingPage.propTypes = {};

export default withLayout(SettingPage);
