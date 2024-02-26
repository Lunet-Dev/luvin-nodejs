import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import toastr from 'toastr';
import ReactPaginate from 'react-paginate';
import { useHistory } from 'react-router-dom';
import { useRecoilValue } from 'recoil';

import { getPosts, deletePost } from '../../apis/posts';

import withLayout from '../../hocs/withLayout';
import withRole from '../../utils/withRole';

import { ROLE_ADMIN, SALE_MOD, B3_MOD } from '../../configs';
import authState from '../../atoms/auth';

const LIMIT = 20;

function UsersPage(props) {
  const auth = useRecoilValue(authState);
  const history = useHistory();
  const [state, setState] = useState({
    openModalCreate: false,
    openModalUpdate: false,
    userSelected: {},
    posts: [],
    total: 0,
    page: 1,
    type: '',
    name: '',
    loading: false,
  });

  const handleChangeSearchValue = (prop, value) => {
    setState({
      ...state,
      [prop]: value,
    });
  };

  const handleSearchPosts = async (page, type, name) => {
    setState({
      ...state,
      loading: true,
      page,
    });
    const newState = {
      ...state,
      loading: true,
      page,
    };
    try {
      const response = await getPosts(LIMIT, page, type, name);
      newState.posts = response.data.posts;
      newState.total = response.data.total;
      newState.loading = false;
    } catch (error) {
      newState.loading = false;
      toastr['error'](error.message);
    }
    setState(newState);
  };

  useEffect(() => {
    handleSearchPosts(1, state.type, state.name);
  }, []);

  const handleDeletePost = async (postSlug) => {
    const newState = {
      ...state,
      loading: true,
    };
    try {
      const response = await deletePost(postSlug);
      newState.loading = false;
      newState.posts = state.posts.filter(({ slug }) => slug !== postSlug);
    } catch (error) {
      newState.loading = false;
      toastr['error'](error.message);
    }
    setState(newState);
  };

  return (
    <>
      <div className="page-content">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <div className="page-title-box d-flex align-items-center justify-content-between">
                <h4 className="mb-0 font-size-18">Post List</h4>
                {withRole([ROLE_ADMIN, SALE_MOD, B3_MOD], auth.role) && (
                  <div className="page-title-right">
                    <button
                      type="submit"
                      class="btn btn-primary w-md"
                      onClick={() => {
                        history.push('/create-post');
                      }}
                    >
                      Thêm bài viết
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-3">
              <div class="card">
                <div class="card-body">
                  <h4 class="card-title mb-4">Filter</h4>
                  <form
                    onSubmit={(event) => {
                      event.preventDefault();
                      handleSearchPosts(1, state.type, state.name);
                    }}
                  >
                    <div class="form-group">
                      <label for="type-select">Loại</label>
                      <select
                        class="form-control"
                        id="type-select"
                        value={state.type}
                        onChange={(event) =>
                          handleChangeSearchValue('type', event.target.value)
                        }
                      >
                        <option value="">Tất cả</option>
                        <option value="article">Blog</option>
                        <option value="faq">Faq</option>
                        <option value="video">Video</option>
                        <option value="event">Event</option>
                      </select>
                    </div>
                    <div class="form-group">
                      <label for="name-select">Tên</label>
                      <input
                        class="form-control"
                        type="text"
                        id="name-select"
                        value={state.name}
                        onChange={(event) =>
                          handleChangeSearchValue('name', event.target.value)
                        }
                      />
                    </div>
                    <button type="submit" class="btn btn-primary">
                      Tìm kiếm
                    </button>
                  </form>
                </div>
              </div>
            </div>
            <div className="col-lg-9">
              <div className="card">
                <div className="card-body">
                  <div className="table-responsive">
                    <table className="table table-centered table-nowrap table-hover">
                      <thead className="thead-light">
                        <tr>
                          <th scope="col" style={{ width: '70px' }}>
                            #
                          </th>
                          <th scope="col">Title</th>
                          <th scope="col">Type</th>
                          <th scope="col">Created time</th>
                          {/* <th scope="col">Point</th>
                          <th scope="col">Level</th> */}
                          <th>Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        {state.posts.map((post, index) => {
                          return (
                            <tr key={post._id}>
                              <td>
                                <img
                                  class="rounded-circle avatar-xs"
                                  src={post.image}
                                  alt=""
                                ></img>
                              </td>
                              <td>
                                <h5 className="font-size-14 mb-1">
                                  <a className="text-dark">{post.title}</a>
                                </h5>
                                <p className="text-muted mb-0">
                                  {post.description}
                                </p>
                              </td>
                              <td>
                                <div>
                                  <a className="badge badge-soft-primary font-size-11 m-1">
                                    {post.type}
                                  </a>
                                </div>
                              </td>
                              <td>{post.createdAt}</td>
                              <td>
                                <div class="dropdown">
                                  <a
                                    class="dropdown-toggle card-drop"
                                    data-toggle="dropdown"
                                    aria-expanded="false"
                                  >
                                    <i class="mdi mdi-dots-horizontal font-size-18"></i>
                                  </a>
                                  <ul className="dropdown-menu dropdown-menu-right">
                                    {withRole(
                                      [ROLE_ADMIN, SALE_MOD, B3_MOD],
                                      auth.role
                                    ) && (
                                      <>
                                        <li>
                                          <a
                                            onClick={() => {
                                              history.push(
                                                `/post/${post.slug}`
                                              );
                                              // setState({
                                              //   ...state,
                                              //   openModalUpdate: true,
                                              //   userSelected: user,
                                              // });
                                            }}
                                            class="dropdown-item"
                                          >
                                            <i class="mdi mdi-pencil font-size-16 text-success mr-1"></i>{' '}
                                            Edit
                                          </a>
                                        </li>
                                        <li>
                                          <a
                                            onClick={() =>
                                              handleDeletePost(post.slug)
                                            }
                                            class="dropdown-item"
                                          >
                                            <i class="mdi mdi-trash-can font-size-16 text-danger mr-1"></i>{' '}
                                            Delete
                                          </a>
                                        </li>
                                      </>
                                    )}
                                  </ul>
                                </div>
                              </td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>
                  <div className="row">
                    <div className="col-lg-12">
                      <ReactPaginate
                        previousLabel={<i class="mdi mdi-chevron-left"></i>}
                        nextLabel={<i class="mdi mdi-chevron-right"></i>}
                        forcePage={state.page - 1}
                        breakLabel={'...'}
                        breakClassName={'break-me'}
                        pageCount={Math.ceil(state.total / LIMIT)}
                        marginPagesDisplayed={2}
                        pageRangeDisplayed={2}
                        onPageChange={(page) => {
                          handleSearchPosts(
                            page.selected + 1,
                            state.type,
                            state.name
                          );
                        }}
                        containerClassName="pagination pagination-rounded justify-content-center mt-4"
                        pageClassName="page-item"
                        previousClassName="page-item"
                        nextClassName="page-item"
                        activeClassName="active"
                        pageLinkClassName="page-link"
                        previousLinkClassName="page-link"
                        nextLinkClassName="page-link"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

UsersPage.propTypes = {};

export default withLayout(UsersPage);
