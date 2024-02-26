import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import pickBy from 'lodash/pickBy';
import identity from 'lodash/identity';
import toastr from 'toastr';
import ReactPaginate from 'react-paginate';
import DatePicker from 'react-datepicker';
import { useRecoilValue } from 'recoil';

import Upload from '../../components/Upload';
import Modal from '../../components/Modal';
import ModalHeader from '../../components/Modal/ModalHeader';
import ModalBody from '../../components/Modal/ModalBody';
import ModalFooter from '../../components/Modal/ModalFooter';

import { getUsers, createUser, updateUser, deleteUser } from '../../apis/users';
import cleanObj from '../../utils/cleanObj';
import withRole from '../../utils/withRole';

import { ROLE_ADMIN, SALE_MOD } from '../../configs';

import withLayout from '../../hocs/withLayout';

import authState from '../../atoms/auth';

const LIMIT = 20;

function ModalUpdateUser({ visible, onClose, user, onUpdated, isCreate }) {
  const [state, setState] = useState({
    name: user.name || '',
    email: user.email || '',
    phone: user.phone || '',
    password: '',
    birthday: user.birthday ? new Date(user.birthday) : '',
    address: user.address || '',
    point: user.point || 0,
    level: user.level || '',
    role: user.role || '',
    avatar: user.avatar || '',

    loading: false,
  });

  const handleChangeUserInfo = (prop, value) => {
    setState({
      ...state,
      [prop]: value,
    });
  };

  const handleSubmit = async (event) => {
    setState({ ...state, loading: true });
    try {
      event.preventDefault();
      const userInfo = {
        name: state.name,
        email: state.email,
        phone: state.phone,
        password: state.password,
        birthday: state.birthday,
        address: state.address,
        point: state.point,
        level: state.level,
        role: state.role,
        avatar: state.avatar,
      };
      cleanObj(userInfo);
      let response = {};
      if (isCreate) {
        response = await createUser(userInfo);
        toastr['success']('Create user success');
      } else {
        response = await updateUser(user._id, userInfo);
        toastr['success']('Update user info success');
      }

      onUpdated(response.data);
    } catch (error) {
      toastr['error'](error.message);
    }
    setState({ ...state, loading: false });
  };

  return (
    <Modal visible={visible}>
      <ModalHeader>
        <h5 class="modal-title">{isCreate ? 'Create user' : 'Update user'}</h5>
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
      <form onSubmit={handleSubmit}>
        <ModalBody>
          <div class="form-group row mb-4">
            <label for="userName" class="col-sm-3 col-form-label">
              Name
            </label>
            <div class="col-sm-9">
              <input
                type="text"
                class="form-control"
                id="userName"
                value={state.name}
                onChange={(event) =>
                  handleChangeUserInfo('name', event.target.value)
                }
              />
            </div>
          </div>
          <div class="form-group row mb-4">
            <label for="userEmail" class="col-sm-3 col-form-label">
              Email
            </label>
            <div class="col-sm-9">
              <input
                type="email"
                class="form-control"
                id="userEmail"
                value={state.email}
                onChange={(event) =>
                  handleChangeUserInfo('email', event.target.value)
                }
              />
            </div>
          </div>
          <div class="form-group row mb-4">
            <label for="userPhone" class="col-sm-3 col-form-label">
              Phone
            </label>
            <div class="col-sm-9">
              <input
                type="tel"
                class="form-control"
                id="userPhone"
                value={state.phone}
                onChange={(event) =>
                  handleChangeUserInfo('phone', event.target.value)
                }
              />
            </div>
          </div>
          <div class="form-group row mb-4">
            <label for="userPassword" class="col-sm-3 col-form-label">
              Password
            </label>
            <div class="col-sm-9">
              <input
                type="password"
                class="form-control"
                id="userPassword"
                value={state.password}
                onChange={(event) =>
                  handleChangeUserInfo('password', event.target.value)
                }
              />
            </div>
          </div>
          <div class="form-group row mb-4">
            <label for="userBirday" class="col-sm-3 col-form-label">
              Birthday
            </label>
            <div class="col-sm-9">
              <DatePicker
                dateFormat="dd/MM/yyyy"
                className="form-control"
                selected={state.birthday}
                onChange={(date) => {
                  handleChangeUserInfo('birthday', date);
                }}
              />
              {/* <input
                class="form-control"
                type="date"
                id="userBirday"
                value={state.birthday}
                onChange={(event) =>
                  handleChangeUserInfo('birthday', event.target.value)
                }
              /> */}
            </div>
          </div>
          <div class="form-group row mb-4">
            <label for="userAddress" class="col-sm-3 col-form-label">
              Address
            </label>
            <div class="col-sm-9">
              <textarea
                required=""
                class="form-control"
                rows="2"
                id="userAddress"
                value={state.address}
                onChange={(event) =>
                  handleChangeUserInfo('address', event.target.value)
                }
              ></textarea>
            </div>
          </div>
          <div class="form-group row mb-4">
            <label for="userPoint" class="col-sm-3 col-form-label">
              Point
            </label>
            <div class="col-sm-9">
              <input
                type="number"
                class="form-control"
                id="userPoint"
                value={state.point}
                onChange={(event) =>
                  handleChangeUserInfo('point', event.target.value)
                }
              />
            </div>
          </div>
          <div class="form-group row mb-4">
            <label for="userPoint" class="col-sm-3 col-form-label">
              Level
            </label>
            <div class="col-sm-9">
              <select
                class="form-control"
                id="level-select"
                value={state.level}
                onChange={(event) =>
                  handleChangeUserInfo('level', event.target.value)
                }
              >
                <option value="">Bzone</option>
                <option value="LEVEL_GOLD">Gold</option>
                <option value="LEVEL_SILVER">Silver</option>
                <option value="LEVEL_PLATINUM">Platinum</option>
              </select>
            </div>
          </div>
          <div class="form-group row mb-4">
            <label for="productDiscount" class="col-sm-3 col-form-label">
              Role
            </label>
            <div class="col-sm-9">
              <select
                class="form-control"
                id="role-select"
                value={state.role}
                onChange={(event) =>
                  handleChangeUserInfo('role', event.target.value)
                }
              >
                <option value="">Thành viên</option>
                <option value="CS_STAFF">CS Staff</option>
                <option value="SALE_STAFF">Sale Staff</option>
                <option value="B3_MOD">B3 MOD</option>
                <option value="SALE_MOD">Sale MOD</option>
                <option value="ROLE_ADMIN">Admin</option>
              </select>
            </div>
          </div>
          <div class="form-group row mb-4">
            <label for="categoryImage" class="col-sm-3 col-form-label">
              Avatar
            </label>
            <div class="col-sm-9">
              <Upload
                initFiles={[state.avatar]}
                onUploaded={(files) => {
                  handleChangeUserInfo('avatar', files[0]);
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

function UsersPage(props) {
  const auth = useRecoilValue(authState);
  const [state, setState] = useState({
    openModalCreate: false,
    openModalUpdate: false,
    userSelected: {},
    users: [],
    total: 0,
    page: 1,
    name: '',
    level: '',
    role: '',
    loading: false,
  });

  const handleChangeSearchValue = (prop, value) => {
    setState({
      ...state,
      [prop]: value,
    });
  };

  const handleSearchUsers = async (page, name, level, role) => {
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
      const response = await getUsers(LIMIT, page, name, level, role);
      newState.users = response.data.users;
      newState.total = response.data.total;
      newState.loading = false;
    } catch (error) {
      newState.loading = false;
      toastr['error'](error.message);
    }
    setState(newState);
  };

  useEffect(() => {
    handleSearchUsers(1, state.name, state.level, state.role);
  }, []);

  const handleDeleteUser = async (userId) => {
    const newState = {
      ...state,
      loading: true,
    };
    try {
      const response = await deleteUser(userId);
      newState.loading = false;
      newState.users = state.users.filter(({ _id }) => _id !== userId);
    } catch (error) {
      newState.loading = false;
      toastr['error'](error.message);
    }
    setState(newState);
  };

  return (
    <>
      {(state.openModalUpdate || state.openModalCreate) && (
        <ModalUpdateUser
          isCreate={state.openModalCreate}
          visible={state.openModalUpdate || state.openModalCreate}
          user={state.userSelected}
          onClose={() => {
            setState({
              ...state,
              openModalUpdate: false,
              openModalCreate: false,
              userSelected: {},
            });
          }}
          onUpdated={(user) => {
            if (state.openModalCreate) {
              setState({
                ...state,
                openModalCreate: false,
                users:
                  state.users.length === LIMIT
                    ? [user, ...state.users].slice(0, -1)
                    : [user, ...state.users],
              });
            } else {
              setState({
                ...state,
                openModalUpdate: false,
                userSelected: {},
                users: state.users.map((_user) => {
                  if (_user._id === user._id) {
                    return user;
                  }
                  return _user;
                }),
              });
            }
          }}
        />
      )}
      <div className="page-content">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <div className="page-title-box d-flex align-items-center justify-content-between">
                <h4 className="mb-0 font-size-18">Users List</h4>

                <div className="page-title-right">
                  {withRole([ROLE_ADMIN], auth.role) && (
                    <button
                      type="submit"
                      class="btn btn-primary w-md"
                      onClick={() => {
                        setState({
                          ...state,
                          openModalCreate: true,
                        });
                      }}
                    >
                      Thêm thành viên
                    </button>
                  )}
                </div>
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
                      handleSearchUsers(1, state.name, state.level, state.role);
                    }}
                  >
                    <div class="form-group">
                      <label for="level-select">Hạng</label>
                      <select
                        class="form-control"
                        id="level-select"
                        value={state.level}
                        onChange={(event) =>
                          handleChangeSearchValue('level', event.target.value)
                        }
                      >
                        <option value="">Tất cả</option>
                        <option value="LEVEL_PLATINUM">Platinum</option>
                        <option value="LEVEL_SILVER">Silver</option>
                        <option value="LEVEL_GOLD">Gold</option>
                        <option value="LEVEL_BZONZE">Bzone</option>
                      </select>
                    </div>
                    <div class="form-group">
                      <label for="role-select">Loại</label>
                      <select
                        class="form-control"
                        id="role-select"
                        value={state.role}
                        onChange={(event) =>
                          handleChangeSearchValue('role', event.target.value)
                        }
                      >
                        <option value="">Tất cả</option>
                        {/* <option value="ROLE_ADMIN">Admin</option>
                        <option value="ROLE_STAFF">Staff</option>
                        <option value="ROLE_MEMBER">Thành viên</option> */}
                        <option value="CS_STAFF">CS Staff</option>
                        <option value="SALE_STAFF">Sale Staff</option>
                        <option value="B3_MOD">B3 MOD</option>
                        <option value="SALE_MOD">Sale MOD</option>
                        <option value="ROLE_ADMIN">Admin</option>
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
                          <th scope="col">Name</th>
                          <th scope="col">Phone</th>
                          <th scope="col">Email</th>
                          <th scope="col">Point</th>
                          <th scope="col">Level</th>
                          <th>Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        {state.users.map((user, index) => {
                          return (
                            <tr key={user._id}>
                              <td>
                                {user.avatar ? (
                                  <img
                                    class="rounded-circle avatar-xs"
                                    src={user.avatar}
                                    alt=""
                                  ></img>
                                ) : (
                                  <div className="avatar-xs">
                                    <span className="avatar-title rounded-circle">
                                      {(user.name || '')
                                        .charAt(0)
                                        .toUpperCase()}
                                    </span>
                                  </div>
                                )}
                              </td>
                              <td>
                                <h5 className="font-size-14 mb-1">
                                  <a className="text-dark">{user.name}</a>
                                </h5>
                                <p className="text-muted mb-0">
                                  {user.address}
                                </p>
                              </td>
                              <td>{user.phone}</td>
                              <td>{user.email}</td>
                              <td>{user.point}</td>
                              <td>
                                <div>
                                  <a className="badge badge-soft-primary font-size-11 m-1">
                                    {user.level}
                                  </a>
                                </div>
                              </td>
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
                                                userSelected: user,
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
                                              handleDeleteUser(user._id)
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
                          handleSearchUsers(
                            page.selected + 1,
                            state.name,
                            state.level,
                            state.role
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
