import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import toastr from 'toastr';
import { useHistory, useParams } from 'react-router-dom';
import DatePicker from 'react-datepicker';

import Upload from '../../components/Upload';

import { createPost, updatePost, getPostDetail } from '../../apis/posts';

import withLayout from '../../hocs/withLayout';
import cleanObj from '../../utils/cleanObj';

function CreatePostPage(props) {
  const history = useHistory();
  const { postSlug } = useParams();
  const [state, setState] = useState({
    title: '',
    description: '',
    content: '',
    type: '',
    image: '',
    video: '',
    startedAt: '',
    endedAt: '',

    fetched: true,
  });

  const handleChange = (prop, value) => {
    setState({
      ...state,
      [prop]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const postData = {
        title: state.title,
        description: state.description,
        content: state.content,
        type: state.type,
        image: state.image,
        video: state.video,
        startedAt: state.startedAt,
        endedAt: state.endedAt,
      };
      cleanObj(postData);
      if (postSlug) {
        const response = await updatePost(postSlug, postData);
        toastr['success']('Cập nhật bài viết thành công');
      } else {
        const response = await createPost(postData);
        toastr['success']('Thêm bài viết thành công');
      }
      history.push('/posts');
    } catch (error) {
      toastr['error'](error.message);
    }
  };

  const handleGetPostDetail = async (postSlug) => {
    setState({ ...state, fetched: false });
    try {
      const response = await getPostDetail(postSlug);
      const {
        title,
        description,
        content,
        type,
        image,
        video,
        startedAt,
        endedAt,
      } = response.data;
      setState({
        ...state,
        title,
        description,
        content,
        type,
        image,
        video,
        startedAt: new Date(startedAt),
        endedAt: new Date(endedAt),
        fetched: true,
      });
    } catch (error) {
      setState({ ...state, fetched: true });
      toastr['error'](error.message);
    }
  };

  useEffect(() => {
    if (postSlug) {
      handleGetPostDetail(postSlug);
    }
  }, []);

  return (
    <>
      <div class="page-content">
        <div class="container-fluid">
          <div class="row">
            <div class="col-12">
              <div class="page-title-box d-flex align-items-center justify-content-between">
                <h4 class="mb-0 font-size-18">
                  {postSlug ? 'Update post' : 'Create Post'}
                </h4>
              </div>
            </div>
          </div>

          <div class="row">
            <div class="col-lg-12">
              <div class="card">
                <div class="card-body">
                  <h4 class="card-title mb-4">
                    {postSlug ? 'Update post' : 'Create New Post'}
                  </h4>
                  {state.fetched && (
                    <form class="outer-repeater" onSubmit={handleSubmit}>
                      <div data-repeater-list="outer-group" class="outer">
                        <div data-repeater-item class="outer">
                          <div class="form-group row mb-4">
                            <label
                              for="post-type"
                              class="col-form-label col-lg-2"
                            >
                              Type
                            </label>
                            <div class="col-lg-10">
                              <select
                                class="form-control"
                                id="post-type"
                                value={state.type}
                                onChange={(event) =>
                                  handleChange('type', event.target.value)
                                }
                              >
                                <option value="">Blog</option>
                                <option value="video">Video</option>
                                <option value="faq">Faq</option>
                                <option value="event">Event</option>
                              </select>
                            </div>
                          </div>
                          <div class="form-group row mb-4">
                            <label
                              for="post-title"
                              class="col-form-label col-lg-2"
                            >
                              Title
                            </label>
                            <div class="col-lg-10">
                              <input
                                id="post-title"
                                name="title"
                                type="text"
                                class="form-control"
                                placeholder="Enter Title..."
                                value={state.title}
                                onChange={(event) =>
                                  handleChange('title', event.target.value)
                                }
                              />
                            </div>
                          </div>
                          {state.type === 'video' ? (
                            <div class="form-group row mb-4">
                              <label
                                for="post-video"
                                class="col-form-label col-lg-2"
                              >
                                Video Url
                              </label>
                              <div class="col-lg-10">
                                <input
                                  id="post-video"
                                  name="video"
                                  type="text"
                                  class="form-control"
                                  placeholder="Enter Video Url..."
                                  value={state.video}
                                  onChange={(event) =>
                                    handleChange('video', event.target.value)
                                  }
                                />
                              </div>
                            </div>
                          ) : (
                            <>
                              <div class="form-group row mb-4">
                                <label
                                  for="post-description"
                                  class="col-form-label col-lg-2"
                                >
                                  Description
                                </label>
                                <div class="col-lg-10">
                                  <textarea
                                    class="form-control"
                                    rows="2"
                                    id="post-description"
                                    placeholder="Enter Task Desctiption..."
                                    value={state.description}
                                    onChange={(event) =>
                                      handleChange(
                                        'description',
                                        event.target.value
                                      )
                                    }
                                  />
                                </div>
                              </div>

                              <div class="form-group row mb-4">
                                <label class="col-form-label col-lg-2">
                                  Content
                                </label>
                                <div class="col-lg-10">
                                  <CKEditor
                                    config={{
                                      height: 200,
                                    }}
                                    editor={ClassicEditor}
                                    data={state.content}
                                    onChange={(event, editor) => {
                                      const data = editor.getData();
                                      handleChange('content', data);
                                      // console.log({ event, editor, data });
                                    }}
                                  />
                                </div>
                              </div>
                            </>
                          )}

                          {state.type === 'event' && (
                            <div class="form-group row mb-4">
                              <label class="col-form-label col-lg-2">
                                Event date
                              </label>
                              <div class="col-lg-10">
                                <div class="input-daterange input-group">
                                  <DatePicker
                                    dateFormat="dd/MM/yyyy"
                                    className="form-control"
                                    selected={state.startedAt}
                                    onChange={(date) => {
                                      handleChange('startedAt', date);
                                    }}
                                  />
                                  <DatePicker
                                    dateFormat="dd/MM/yyyy"
                                    className="form-control"
                                    selected={state.endedAt}
                                    onChange={(date) => {
                                      handleChange('endedAt', date);
                                    }}
                                  />
                                </div>
                              </div>
                            </div>
                          )}

                          <div class="form-group row mb-4">
                            <label
                              for="taskbudget"
                              class="col-form-label col-lg-2"
                            >
                              Image
                            </label>
                            <div class="col-lg-10">
                              <Upload
                                initFiles={[state.image]}
                                onUploaded={(files) => {
                                  handleChange('image', files[0]);
                                }}
                                maxFiles={1}
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

CreatePostPage.propTypes = {};

export default withLayout(CreatePostPage);
