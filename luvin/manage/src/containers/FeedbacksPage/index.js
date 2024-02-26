import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import toastr from 'toastr';
import ReactPaginate from 'react-paginate';
import { useRecoilValue } from 'recoil';

import Modal from '../../components/Modal';
import ModalHeader from '../../components/Modal/ModalHeader';
import ModalBody from '../../components/Modal/ModalBody';
import ModalFooter from '../../components/Modal/ModalFooter';

import {
  findFeedbacks,
  updateFeedback,
  deleteFeedback,
} from '../../apis/feedbacks';

import withLayout from '../../hocs/withLayout';

import withRole from '../../utils/withRole';

import { ROLE_ADMIN, SALE_MOD, B3_MOD } from '../../configs';
import authState from '../../atoms/auth';

const LIMIT = 20;

function ModalDetailFeedback({ visible, onClose, feedback }) {
  return (
    <Modal visible={visible}>
      <ModalHeader>
        <h5 class="modal-title">Feedback Details</h5>
        <button
          type="button"
          class="close"
          data-dismiss="modal"
          aria-label="Close"
          onClick={onClose}
        >
          <span aria-hidden="true">&times;</span>
        </button>
      </ModalHeader>
      <ModalBody>
        <table class="table table-centered table-nowrap">
          <tbody>
            <tr>
              <td>
                <div>
                  <h5 class="text-truncate font-size-14">ID</h5>
                </div>
              </td>
              <th scope="row">{feedback._id}</th>
            </tr>
            <tr>
              <td>
                <div>
                  <h5 class="text-truncate font-size-14">Name</h5>
                </div>
              </td>
              <th scope="row">{feedback.name}</th>
            </tr>
            <tr>
              <td>
                <div>
                  <h5 class="text-truncate font-size-14">Email</h5>
                </div>
              </td>
              <th scope="row">{feedback.email}</th>
            </tr>
            <tr>
              <td>
                <div>
                  <h5 class="text-truncate font-size-14">Title</h5>
                </div>
              </td>
              <th scope="row">{feedback.title}</th>
            </tr>
            <tr>
              <td>
                <div>
                  <h5 class="text-truncate font-size-14">Description</h5>
                </div>
              </td>
              <th scope="row">{feedback.description}</th>
            </tr>
            <tr>
              <td>
                <div>
                  <h5 class="text-truncate font-size-14">Product</h5>
                </div>
              </td>
              <th scope="row">{(feedback.product || {}).name}</th>
            </tr>
          </tbody>
        </table>
      </ModalBody>
      <ModalFooter>
        <button type="button" class="btn btn-secondary" onClick={onClose}>
          Close
        </button>
      </ModalFooter>
    </Modal>
  );
}

function ModalUpdateFeedback({ visible, onClose, feedback, onUpdated }) {
  const [state, setState] = useState({
    name: feedback.name || '',
    email: feedback.email || '',
    title: feedback.title || '',
    description: feedback.description || '',
  });

  const handleChangeFeedbackInfo = (prop, value) => {
    setState({
      ...state,
      [prop]: value,
    });
  };

  const handleUpdateFeedback = async (event) => {
    setState({ ...state, loading: true });
    try {
      event.preventDefault();

      const response = await updateFeedback(feedback._id, {
        name: state.name,
        email: state.email,
        title: state.title,
        description: state.description,
      });
      onUpdated(response.data);
    } catch (error) {
      toastr['error'](error.message);
    }
    setState({ ...state, loading: false });
  };

  return (
    <Modal visible={visible}>
      <ModalHeader>
        <h5 class="modal-title">Update feedback</h5>
        <button
          type="button"
          class="close"
          data-dismiss="modal"
          aria-label="Close"
          onClick={onClose}
        >
          <span aria-hidden="true">&times;</span>
        </button>
      </ModalHeader>
      <form onSubmit={handleUpdateFeedback}>
        <ModalBody>
          <div class="form-group row mb-4">
            <label for="feedbackName" class="col-sm-3 col-form-label">
              Name
            </label>
            <div class="col-sm-9">
              <input
                type="text"
                class="form-control"
                id="feedbackName"
                value={state.name}
                onChange={(event) =>
                  handleChangeFeedbackInfo('name', event.target.value)
                }
              />
            </div>
          </div>
          <div class="form-group row mb-4">
            <label for="feedbackEmail" class="col-sm-3 col-form-label">
              Email
            </label>
            <div class="col-sm-9">
              <input
                type="text"
                class="form-control"
                id="feedbackEmail"
                value={state.email}
                onChange={(event) =>
                  handleChangeFeedbackInfo('email', event.target.value)
                }
              />
            </div>
          </div>
          <div class="form-group row mb-4">
            <label for="feedbackTitle" class="col-sm-3 col-form-label">
              Title
            </label>
            <div class="col-sm-9">
              <input
                type="text"
                class="form-control"
                id="feedbackTitle"
                value={state.title}
                onChange={(event) =>
                  handleChangeFeedbackInfo('title', event.target.value)
                }
              />
            </div>
          </div>
          <div class="form-group row mb-4">
            <label for="feedbackDescription" class="col-sm-3 col-form-label">
              Description
            </label>
            <div class="col-sm-9">
              <textarea
                required=""
                class="form-control"
                rows="3"
                id="feedbackDescription"
                value={state.description}
                onChange={(event) =>
                  handleChangeFeedbackInfo('description', event.target.value)
                }
              ></textarea>
            </div>
          </div>
        </ModalBody>
        <ModalFooter>
          <button type="button" class="btn btn-secondary" onClick={onClose}>
            Close
          </button>
          <button type="submit" class="btn btn-primary w-md">
            {state.loading && (
              <i class="bx bx-loader bx-spin font-size-16 align-middle mr-2"></i>
            )}
            Submit
          </button>
        </ModalFooter>
      </form>
    </Modal>
  );
}

function FeedbacksPage(props) {
  const auth = useRecoilValue(authState);
  const [state, setState] = useState({
    openModalDetail: false,
    openModalUpdate: false,
    feedbackSelected: {},
    feedbacks: [],
    total: 0,
    page: 1,
    name: '',
    loading: false,
  });

  const handleChangeSearchValue = (prop, value) => {
    setState({
      ...state,
      [prop]: value,
    });
  };

  const handleSearchFeedbacks = async (page, name) => {
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
      const response = await findFeedbacks(LIMIT, page, name);
      newState.feedbacks = response.data.reviews;
      newState.total = response.data.total;
      newState.loading = false;
    } catch (error) {
      newState.loading = false;
      toastr['error'](error.message);
    }
    setState(newState);
  };

  useEffect(() => {
    handleSearchFeedbacks(1, state.name);
  }, []);

  const handleDeleteFeedback = async (feedbackId) => {
    const newState = {
      ...state,
      loading: true,
    };
    try {
      const response = await deleteFeedback(feedbackId);
      newState.loading = false;
      newState.feedbacks = state.feedbacks.filter(
        ({ _id }) => _id !== feedbackId
      );
    } catch (error) {
      newState.loading = false;
      toastr['error'](error.message);
    }
    setState(newState);
  };

  const handleShowOnFeedbackPage = async (feedbackId, isShow) => {
    if (!withRole([ROLE_ADMIN, SALE_MOD], auth.role)) {
      toastr['error']('You do not have permission to do this');
    }
    try {
      const response = await updateFeedback(feedbackId, { isShow });
      const feedback = response.data || {};
      setState({
        ...state,
        feedbacks: state.feedbacks.map((_feedback) => {
          if (_feedback._id === feedback._id) {
            return feedback;
          }
          return _feedback;
        }),
      });
    } catch (error) {
      toastr['error'](error.message);
    }
  };

  return (
    <>
      {state.openModalDetail && (
        <ModalDetailFeedback
          visible={state.openModalDetail}
          feedback={state.feedbackSelected}
          onClose={() => {
            setState({
              ...state,
              openModalDetail: false,
              feedbackSelected: {},
            });
          }}
        />
      )}
      {state.openModalUpdate && (
        <ModalUpdateFeedback
          visible={state.openModalUpdate}
          feedback={state.feedbackSelected}
          onClose={() => {
            setState({
              ...state,
              openModalUpdate: false,
              feedbackSelected: {},
            });
          }}
          onUpdated={(feedback) => {
            setState({
              ...state,
              openModalUpdate: false,
              feedbackSelected: {},
              feedbacks: state.feedbacks.map((_feedback) => {
                if (_feedback._id === feedback._id) {
                  return feedback;
                }
                return _feedback;
              }),
            });
          }}
        />
      )}
      <div class="page-content">
        <div class="container-fluid">
          <div class="row">
            <div className="col-lg-3">
              <div class="card">
                <div class="card-body">
                  <h4 class="card-title mb-4">Filter</h4>
                  <form
                    onSubmit={(event) => {
                      event.preventDefault();
                      handleSearchFeedbacks(1, state.name);
                    }}
                  >
                    <div class="form-group">
                      <label for="name-select">Tên</label>
                      <input
                        class="form-control"
                        type="text"
                        id="name-select"
                        value={state.name}
                        onChange={(event) => {
                          handleChangeSearchValue('name', event.target.value);
                        }}
                      />
                    </div>
                    <button type="submit" class="btn btn-primary">
                      Tìm kiếm
                    </button>
                  </form>
                </div>
              </div>
            </div>
            <div class="col-lg-9">
              <div class="">
                <div class="table-responsive">
                  <table class="table project-list-table table-nowrap table-centered table-borderless">
                    <thead>
                      <tr>
                        {/* <th scope="col" style={{ width: '100px' }}>
                      #
                    </th> */}
                        <th>Name</th>
                        <th>Rate</th>
                        <th>Product</th>
                        <th>Show on feedback page</th>
                        <th>View Details</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {state.feedbacks.map((feedback, index) => {
                        return (
                          <tr key={feedback._id}>
                            {/* <td>
                          <img
                            src={(feedback.images || [])[0]}
                            alt=""
                            class="avatar-sm"
                          />
                        </td> */}
                            <td>
                              <h5 class="text-truncate font-size-14">
                                <a href="#" class="text-dark">
                                  {feedback.name}
                                </a>
                              </h5>
                              <p class="text-muted mb-0">
                                {feedback.description}
                              </p>
                            </td>
                            <td>{feedback.rate}</td>
                            <td>{(feedback.product || {}).name}</td>
                            <td>
                              {feedback.isShow ? (
                                <span
                                  class="badge badge-pill badge-soft-success font-size-12"
                                  onClick={() =>
                                    handleShowOnFeedbackPage(
                                      feedback._id,
                                      false
                                    )
                                  }
                                  style={{ cursor: 'pointer' }}
                                >
                                  Show
                                </span>
                              ) : (
                                <span
                                  class="badge badge-pill badge-soft-warning font-size-12"
                                  onClick={() =>
                                    handleShowOnFeedbackPage(feedback._id, true)
                                  }
                                  style={{ cursor: 'pointer' }}
                                >
                                  Hiden
                                </span>
                              )}
                            </td>
                            <td>
                              <button
                                type="button"
                                class="btn btn-primary btn-sm btn-rounded"
                                onClick={() => {
                                  setState({
                                    ...state,
                                    openModalDetail: true,
                                    feedbackSelected: feedback,
                                  });
                                }}
                              >
                                View Details
                              </button>
                            </td>
                            <td>
                              <div class="dropdown">
                                <a
                                  href="#"
                                  class="dropdown-toggle card-drop"
                                  data-toggle="dropdown"
                                  aria-expanded="false"
                                >
                                  <i class="mdi mdi-dots-horizontal font-size-18"></i>
                                </a>
                                <ul class="dropdown-menu dropdown-menu-right">
                                  {withRole(
                                    [ROLE_ADMIN, SALE_MOD],
                                    auth.role
                                  ) && (
                                    <>
                                      <li>
                                        <a
                                          onClick={() => {
                                            setState({
                                              ...state,
                                              openModalUpdate: true,
                                              feedbackSelected: feedback,
                                            });
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
                                            handleDeleteFeedback(feedback._id)
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
                        handleSearchFeedbacks(page.selected + 1, state.name);
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
    </>
  );
}

FeedbacksPage.propTypes = {};

export default withLayout(FeedbacksPage);
