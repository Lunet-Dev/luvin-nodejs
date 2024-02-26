import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import ReactPaginate from 'react-paginate';
import moment from 'moment';
import DatePicker from 'react-datepicker';
import toastr from 'toastr';
import { Select, Spin } from 'antd';
import 'antd/dist/antd.css';
import debounce from 'lodash/debounce';
import { useRecoilValue } from 'recoil';
import numeral from 'numeral';

import Modal from '../../components/Modal';
import ModalHeader from '../../components/Modal/ModalHeader';
import ModalBody from '../../components/Modal/ModalBody';
import ModalFooter from '../../components/Modal/ModalFooter';

import withLayout from '../../hocs/withLayout';
import cleanObj from '../../utils/cleanObj';
import withRole from '../../utils/withRole';

import { ROLE_ADMIN, SALE_MOD } from '../../configs';

import authState from '../../atoms/auth';

import { getUsers } from '../../apis/users';
import {
  getVouchers,
  createVoucher,
  updateVoucher,
  deleteVoucher,
} from '../../apis/vouchers';

const LIMIT = 20;
const { Option } = Select;

function ModalUpdateVoucher({
  visible,
  onClose,
  voucher,
  onUpdated,
  isCreate,
}) {
  const [state, setState] = useState({
    code: voucher.code || '',
    value: voucher.value || 0,
    type: voucher.type || 'price',
    userIds: voucher.userIds || [],
    validAt: voucher.validAt ? new Date(voucher.validAt) : '',
    isAll: voucher.isAll || false,

    values: [],
    users: [],
    loading: false,
    fetching: false,
  });

  const handleChangeVoucherInfo = (prop, value) => {
    setState({
      ...state,
      [prop]: value,
    });
  };

  const handleSubmit = async (event) => {
    setState({ ...state, loading: true });
    try {
      event.preventDefault();
      const voucherInfo = {
        code: state.code,
        type: state.type,
        value: state.value,
        userIds: state.userIds,
        validAt: state.validAt,
        isAll: state.isAll,
      };
      cleanObj(voucherInfo);
      let response = {};
      if (isCreate) {
        response = await createVoucher(voucherInfo);
      } else {
        response = await updateVoucher(voucher._id, voucherInfo);
      }
      onUpdated(response.data);
    } catch (error) {
      toastr['error'](error.message);
    }
    setState({ ...state, loading: false });
  };

  const handleSearchUsers = async (name) => {
    setState({
      ...state,
      fetching: true,
    });
    const newState = {
      ...state,
      fetching: true,
    };
    try {
      const response = await getUsers(10, 1, name, '', '');
      newState.users = response.data.users;
      newState.fetching = false;
    } catch (error) {
      newState.fetching = false;
      toastr['error'](error.message);
    }
    setState(newState);
  };

  return (
    <Modal visible={visible}>
      <ModalHeader>
        <h5 class="modal-title">
          {isCreate ? 'Create voucher' : 'Update voucher'}
        </h5>
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
            <label htmlFor="code" class="col-sm-3 col-form-label">
              Code
            </label>
            <div class="col-sm-9">
              <input
                type="text"
                class="form-control"
                id="code"
                value={state.code}
                onChange={(event) =>
                  handleChangeVoucherInfo('code', event.target.value)
                }
              />
            </div>
          </div>
          <div class="form-group row mb-4">
            <label htmlFor="userAddress" class="col-sm-3 col-form-label">
              Loại giá trị
            </label>
            <div class="col-sm-9">
              <select
                class="form-control"
                id="level-select"
                value={state.type}
                onChange={(event) =>
                  handleChangeVoucherInfo('type', event.target.value)
                }
              >
                <option value="percent">%</option>
                <option value="price">vnđ</option>
              </select>
            </div>
          </div>
          <div class="form-group row mb-4">
            <label htmlFor="value" class="col-sm-3 col-form-label">
              Giá trị
            </label>
            <div class="col-sm-9">
              <input
                type="number"
                class="form-control"
                id="value"
                value={state.value}
                onChange={(event) =>
                  handleChangeVoucherInfo('value', event.target.value)
                }
              />
            </div>
          </div>
          <div class="form-group row mb-4">
            <label htmlFor="users" class="col-sm-3 col-form-label">
              Thành viên (để trống nếu là loại chung)
            </label>
            <div class="col-sm-9">
              <Select
                mode="multiple"
                labelInValue
                value={state.values}
                placeholder="Select users"
                notFoundContent={state.fetching ? <Spin size="small" /> : null}
                filterOption={false}
                onSearch={debounce(handleSearchUsers, 800)}
                onChange={(values) =>
                  setState({
                    ...state,
                    values,
                    userIds: values.map(({ key }) => key),
                  })
                }
                style={{ width: '100%' }}
              >
                {state.users.map((user) => (
                  <Option key={user._id}>{user.name}</Option>
                ))}
              </Select>
            </div>
          </div>
          <div class="form-group row mb-4">
            <label htmlFor="userBirday" class="col-sm-3 col-form-label">
              Valid at
            </label>
            <div class="col-sm-9">
              <DatePicker
                dateFormat="dd/MM/yyyy"
                className="form-control"
                selected={state.validAt}
                onChange={(date) => {
                  handleChangeVoucherInfo('validAt', date);
                }}
              />
            </div>
          </div>
          <div class="form-group row mb-4">
            <label htmlFor="userAddress" class="col-sm-3 col-form-label">
              Loại
            </label>
            <div class="col-sm-9">
              <select
                class="form-control"
                id="level-select"
                value={state.isAll}
                onChange={(event) =>
                  handleChangeVoucherInfo('isAll', event.target.value)
                }
              >
                <option value={true}>Dùng chung</option>
                <option value={false}>Cá nhân</option>
              </select>
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

function VouchersPage(props) {
  const auth = useRecoilValue(authState);
  const [state, setState] = useState({
    openModalCreate: false,
    openModalUpdate: false,
    voucherSelected: {},
    vouchers: [],
    total: 0,
    page: 1,
    code: '',
    type: 0,
    available: 0,
    loading: false,
  });

  const handleChangeSearchValue = (prop, value) => {
    setState({
      ...state,
      [prop]: value,
    });
  };

  const handleSearchVouchers = async (page, code, type, available) => {
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
      const response = await getVouchers(LIMIT, page, code, type, available);
      newState.vouchers = response.data.vouchers;
      newState.total = response.data.total;
      newState.loading = false;
    } catch (error) {
      newState.loading = false;
      toastr['error'](error.message);
    }
    setState(newState);
  };

  useEffect(() => {
    handleSearchVouchers(1, state.code, state.type, state.available);
  }, []);

  const handleDeleteVoucher = async (voucherId) => {
    const newState = {
      ...state,
      loading: true,
    };
    try {
      const response = await deleteVoucher(voucherId);
      newState.loading = false;
      newState.vouchers = state.vouchers.filter(({ _id }) => _id !== voucherId);
    } catch (error) {
      newState.loading = false;
      toastr['error'](error.message);
    }
    setState(newState);
  };

  return (
    <>
      {(state.openModalUpdate || state.openModalCreate) && (
        <ModalUpdateVoucher
          isCreate={state.openModalCreate}
          visible={state.openModalUpdate || state.openModalCreate}
          voucher={state.voucherSelected}
          onClose={() => {
            setState({
              ...state,
              openModalUpdate: false,
              openModalCreate: false,
              voucherSelected: {},
            });
          }}
          onUpdated={(voucher) => {
            if (state.openModalCreate) {
              setState({
                ...state,
                openModalCreate: false,
                vouchers:
                  state.vouchers.length === LIMIT
                    ? [voucher, ...state.vouchers].slice(0, -1)
                    : [voucher, ...state.vouchers],
              });
            } else {
              setState({
                ...state,
                openModalUpdate: false,
                voucherSelected: {},
                vouchers: state.vouchers.map((_voucher) => {
                  if (_voucher._id === voucher._id) {
                    return voucher;
                  }
                  return _voucher;
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
                <h4 className="mb-0 font-size-18">Vouchers List</h4>

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
                      Thêm voucher
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
                      handleSearchVouchers(
                        1,
                        state.code,
                        state.type,
                        state.available
                      );
                    }}
                  >
                    <div class="form-group">
                      <label htmlFor="role-select">Loại</label>
                      <select
                        class="form-control"
                        id="role-select"
                        value={state.type}
                        onChange={(event) => {
                          handleChangeSearchValue('type', event.target.value);
                        }}
                      >
                        <option value={0}>Tất cả</option>
                        <option value={1}>Dùng chung</option>
                        <option value={2}>Cá nhân</option>
                      </select>
                    </div>
                    <div class="form-group">
                      <label htmlFor="role-select">Thời hạn</label>
                      <select
                        class="form-control"
                        id="role-select"
                        value={state.available}
                        onChange={(event) => {
                          handleChangeSearchValue(
                            'available',
                            event.target.value
                          );
                        }}
                      >
                        <option value={0}>Tất cả</option>
                        <option value={1}>Còn hạn</option>
                        <option value={2}>Hết hạn</option>
                      </select>
                    </div>
                    <div class="form-group">
                      <label htmlFor="name-select">Mã</label>
                      <input
                        class="form-control"
                        type="text"
                        id="name-select"
                        value={state.code}
                        onChange={(event) => {
                          handleChangeSearchValue('code', event.target.value);
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
                          <th scope="col">Code</th>
                          <th scope="col">Giá trị</th>
                          <th scope="col">Loại</th>
                          <th scope="col">Thời hạn</th>
                          <th>Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        {state.vouchers.map((voucher, index) => {
                          return (
                            <tr key={voucher._id}>
                              <td></td>
                              <td>{voucher.code}</td>
                              <td>
                                {numeral(voucher.value).format('0,0')}
                                {voucher.type === 'percent' ? '%' : 'đ'}
                              </td>
                              <td>
                                {voucher.isAll ? 'Dùng chung' : 'Cá nhân'}
                              </td>
                              <td>
                                {moment(voucher.validAt).format('DD-MM-YYYY')}
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
                                    {withRole([ROLE_ADMIN], auth.role) && (
                                      <>
                                        <li>
                                          <a
                                            onClick={() => {
                                              setState({
                                                ...state,
                                                openModalUpdate: true,
                                                voucherSelected: voucher,
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
                                            onClick={() => {
                                              handleDeleteVoucher(voucher._id);
                                            }}
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
                          handleSearchVouchers(
                            page.selected + 1,
                            state.code,
                            state.type,
                            state.available
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

VouchersPage.propTypes = {};

export default withLayout(VouchersPage);
