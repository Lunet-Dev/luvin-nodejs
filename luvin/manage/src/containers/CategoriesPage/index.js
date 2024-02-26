import React, { useState } from 'react';
import PropTypes from 'prop-types';
import toastr from 'toastr';
import { useRecoilValue } from 'recoil';

import Upload from '../../components/Upload';
import Modal from '../../components/Modal';
import ModalHeader from '../../components/Modal/ModalHeader';
import ModalBody from '../../components/Modal/ModalBody';
import ModalFooter from '../../components/Modal/ModalFooter';

import useCategories from '../../hooks/useCategories';

import { updateCategory } from '../../apis/categories';

import withLayout from '../../hocs/withLayout';

import withRole from '../../utils/withRole';

import { ROLE_ADMIN, SALE_MOD, B3_MOD } from '../../configs';
import authState from '../../atoms/auth';

function ModalDetailCategory({ visible, onClose, category }) {
  return (
    <Modal visible={visible}>
      <ModalHeader>
        <h5 class="modal-title">Category Details</h5>
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
              <th scope="row">{category._id}</th>
            </tr>
            <tr>
              <td>
                <div>
                  <h5 class="text-truncate font-size-14">Ident</h5>
                </div>
              </td>
              <th scope="row">{category.ident}</th>
            </tr>
            <tr>
              <td>
                <div>
                  <h5 class="text-truncate font-size-14">Name</h5>
                </div>
              </td>
              <th scope="row">{category.name}</th>
            </tr>
            <tr>
              <td>
                <div>
                  <h5 class="text-truncate font-size-14">Description</h5>
                </div>
              </td>
              <th scope="row">{category.description}</th>
            </tr>
            <tr>
              <td>
                <div>
                  <h5 class="text-truncate font-size-14">Slug</h5>
                </div>
              </td>
              <th scope="row">{category.slug}</th>
            </tr>
            <tr>
              <td>
                <div>
                  <h5 class="text-truncate font-size-14">Image</h5>
                </div>
              </td>
              <th scope="row">
                <div>
                  <img
                    class="img-thumbnail"
                    alt="200x200"
                    width="200"
                    src={category.image}
                    data-holder-rendered="true"
                  ></img>
                </div>
              </th>
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

function ModalUpdateCategory({ visible, onClose, category, onUpdated }) {
  const auth = useRecoilValue(authState);
  const [state, setState] = useState({
    name: category.name || '',
    description: category.description || '',
    image: category.image || '',
    loading: false,
  });

  const handleChangeCategoryInfo = (prop, value) => {
    setState({
      ...state,
      [prop]: value,
    });
  };

  const handleUpdateCategory = async (event) => {
    setState({ ...state, loading: true });
    try {
      event.preventDefault();

      const response = await updateCategory(category.ident, {
        name: state.name,
        description: state.description,
        image: state.image,
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
        <h5 class="modal-title">Update category</h5>
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
      <form onSubmit={handleUpdateCategory}>
        <ModalBody>
          <div class="form-group row mb-4">
            <label for="categoryName" class="col-sm-3 col-form-label">
              Name
            </label>
            <div class="col-sm-9">
              <input
                type="text"
                class="form-control"
                id="categoryName"
                value={state.name}
                onChange={(event) =>
                  handleChangeCategoryInfo('name', event.target.value)
                }
              />
            </div>
          </div>
          <div class="form-group row mb-4">
            <label for="categoryDescription" class="col-sm-3 col-form-label">
              Description
            </label>
            <div class="col-sm-9">
              <textarea
                required=""
                class="form-control"
                rows="3"
                id="categoryDescription"
                value={state.description}
                onChange={(event) =>
                  handleChangeCategoryInfo('description', event.target.value)
                }
              ></textarea>
            </div>
          </div>
          <div class="form-group row mb-4">
            <label for="categoryImage" class="col-sm-3 col-form-label">
              Image
            </label>
            <div class="col-sm-9">
              <Upload
                initFiles={[state.image]}
                onUploaded={(files) => {
                  handleChangeCategoryInfo('image', files[0]);
                }}
                maxFiles={1}
              />
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

function CategoriesPage(props) {
  const auth = useRecoilValue(authState);
  const [categories, setCategoriesState] = useCategories();
  const [state, setState] = useState({
    openModalDetail: false,
    openModalUpdate: false,
    categorySelected: {},
  });

  return (
    <>
      {state.openModalDetail && (
        <ModalDetailCategory
          visible={state.openModalDetail}
          category={state.categorySelected}
          onClose={() => {
            setState({
              ...state,
              openModalDetail: false,
              categorySelected: {},
            });
          }}
        />
      )}
      {state.openModalUpdate && (
        <ModalUpdateCategory
          visible={state.openModalUpdate}
          category={state.categorySelected}
          onClose={() => {
            setState({
              ...state,
              openModalUpdate: false,
              categorySelected: {},
            });
          }}
          onUpdated={(category) => {
            setCategoriesState(
              categories.map((_category) => {
                if (_category.ident === category.ident) {
                  return category;
                }
                return _category;
              })
            );
            setState({
              ...state,
              openModalUpdate: false,
              categorySelected: {},
            });
          }}
        />
      )}

      <div class="page-content">
        <div class="container-fluid">
          <div class="row">
            <div class="col-12">
              <div class="page-title-box d-flex align-items-center justify-content-between">
                <h4 class="mb-0 font-size-18">Categories List</h4>

                {/* <div class="page-title-right">
                  <ol class="breadcrumb m-0">
                    <li class="breadcrumb-item">
                      <a href="javascript: void(0);">Projects</a>
                    </li>
                    <li class="breadcrumb-item active">Projects List</li>
                  </ol>
                </div> */}
              </div>
            </div>
          </div>

          <div class="row">
            <div class="col-lg-12">
              <div class="">
                <div class="table-responsive">
                  <table class="table project-list-table table-nowrap table-centered table-borderless">
                    <thead>
                      <tr>
                        <th scope="col" style={{ width: '100px' }}>
                          #
                        </th>
                        <th>Name</th>
                        <th>Slug</th>
                        <th>Ident</th>
                        <th>View Details</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {categories.map((category, index) => {
                        return (
                          <tr>
                            <td>
                              <img
                                src={category.image}
                                alt=""
                                class="avatar-sm"
                              />
                            </td>
                            <td>
                              <h5 class="text-truncate font-size-14">
                                <a href="#" class="text-dark">
                                  {category.name}
                                </a>
                              </h5>
                              <p class="text-muted mb-0">
                                {category.description}
                              </p>
                            </td>
                            <td>{category.slug}</td>
                            <td>{category.ident}</td>
                            <td>
                              <button
                                type="button"
                                class="btn btn-primary btn-sm btn-rounded"
                                onClick={() => {
                                  setState({
                                    ...state,
                                    openModalDetail: true,
                                    categorySelected: category,
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
                                    [ROLE_ADMIN, SALE_MOD, B3_MOD],
                                    auth.role
                                  ) && (
                                    <li>
                                      <a
                                        onClick={() => {
                                          setState({
                                            ...state,
                                            openModalUpdate: true,
                                            categorySelected: category,
                                          });
                                        }}
                                        class="dropdown-item"
                                      >
                                        <i class="mdi mdi-pencil font-size-16 text-success mr-1"></i>{' '}
                                        Edit
                                      </a>
                                    </li>
                                  )}
                                  {/* <li>
                                    <a href="#" class="dropdown-item">
                                      <i class="mdi mdi-trash-can font-size-16 text-danger mr-1"></i>{' '}
                                      Delete
                                    </a>
                                  </li> */}
                                </ul>
                              </div>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>

          {/* <div class="row">
                            <div class="col-12">
                                <div class="text-center my-3">
                                    <a href="javascript:void(0);" class="text-success"><i class="bx bx-loader bx-spin font-size-18 align-middle mr-2"></i> Load more </a>
                                </div>
                            </div>
                        </div> */}
        </div>
      </div>
    </>
  );
}

CategoriesPage.propTypes = {};

export default withLayout(CategoriesPage);
