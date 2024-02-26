import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import sum from 'lodash/sum';
import numeral from 'numeral';
import toastr from 'toastr';
import ReactPaginate from 'react-paginate';
import moment from 'moment';
import { useRecoilValue } from 'recoil';

import Modal from '../../components/Modal';
import ModalHeader from '../../components/Modal/ModalHeader';
import ModalBody from '../../components/Modal/ModalBody';
import ModalFooter from '../../components/Modal/ModalFooter';

import usePos from '../../hooks/usePos';

import {
  getOrders,
  //   createOrder,
  updateOrder,
  deleteOrder,
  pushToPos,
} from '../../apis/orders';
import cleanObj from '../../utils/cleanObj';

import withLayout from '../../hocs/withLayout';

import withRole from '../../utils/withRole';

import { ROLE_ADMIN, SALE_MOD, SALE_STAFF, CS_STAFF } from '../../configs';
import authState from '../../atoms/auth';

const LIMIT = 20;

function ModalSelectPos({ visible, onClose, order, onUpdated }) {
  const [pos] = usePos();
  const [state, setState] = useState({
    loading: false,
    pos: '',
  });

  useEffect(() => {
    if (!state.pos) {
      setState({ ...state, pos: (pos[0] || {})._id || '' });
    }
  }, [pos]);

  const handleSendToPos = async () => {
    if (state.loading) return;
    setState({ ...state, loading: true });
    try {
      if (!state.pos) {
        toastr['error']('Vui lòng chọn POS');
        return;
      }
      const response = await pushToPos(state.pos, order._id);
      toastr['success']('Gửi đến POS thành công');
      onUpdated(response.data);
      // onClose();
    } catch (error) {
      toastr['error'](error.message);
    }
    setState({ ...state, loading: false });
  };

  return (
    <Modal visible={visible}>
      <ModalHeader>
        <h5 class="modal-title">Select pos</h5>
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
        <div class="form-group row mb-4">
          <label for="orderStatus" class="col-sm-3 col-form-label">
            Pos
          </label>
          <div class="col-sm-9">
            <select
              class="form-control"
              id="orderStatus"
              value={state.pos}
              onChange={
                (event) =>
                  setState({
                    ...state,
                    pos: event.target.value,
                  })
                // handleChangeUserInfo('pos', event.target.value)
              }
            >
              {pos.map(({ name, _id }) => (
                <option value={_id}>{name}</option>
              ))}
              {/* <option value="">Chưa xử lý</option>
                <option value="Processing">Đang xử lý</option>
                <option value="Shipped">Đang giao hàng</option>
                <option value="Delivered">Đã nhận</option>
                <option value="Cancelled">Đã Hủy</option> */}
            </select>
          </div>
        </div>
      </ModalBody>
      <ModalFooter>
        <button type="button" class="btn btn-secondary" onClick={onClose}>
          Close
        </button>
        <button
          type="submit"
          class="btn btn-primary w-md"
          onClick={handleSendToPos}
        >
          {state.loading && (
            <i class="bx bx-loader bx-spin font-size-16 align-middle mr-2"></i>
          )}
          Submit
        </button>
      </ModalFooter>
    </Modal>
  );
}

function ModalDetailOrder({ visible, onClose, order }) {
  // const total = sum(order.orderDetails.map(({ totalPrice }) => totalPrice));

  const totalWithoutDiscount = sum(
    (order.orderDetails || []).map(({ totalPrice }) => totalPrice)
  );

  let discount = 0;
  if (order.voucher && order.voucher.value) {
    if (order.voucher.type === 'percent') {
      discount = (totalWithoutDiscount / 100) * order.voucher.value;
    } else {
      discount = order.voucher.value;
    }
  }

  const total = totalWithoutDiscount - discount;
  return (
    <Modal visible={visible}>
      <ModalHeader>
        <h5 class="modal-title">Order Details</h5>
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
              <th scope="row">{order._id}</th>
            </tr>
            <tr>
              <td>
                <div>
                  <h5 class="text-truncate font-size-14">Name</h5>
                </div>
              </td>
              <th scope="row">{order.name}</th>
            </tr>
            <tr>
              <td>
                <div>
                  <h5 class="text-truncate font-size-14">Phone</h5>
                </div>
              </td>
              <th scope="row">{order.phone}</th>
            </tr>
            <tr>
              <td>
                <div>
                  <h5 class="text-truncate font-size-14">Email</h5>
                </div>
              </td>
              <th scope="row">{order.email}</th>
            </tr>
            <tr>
              <td>
                <div>
                  <h5 class="text-truncate font-size-14">Address</h5>
                </div>
              </td>
              <th scope="row">{order.shipAddress}</th>
            </tr>
            <tr>
              <td>
                <div>
                  <h5 class="text-truncate font-size-14">City</h5>
                </div>
              </td>
              <th scope="row">{order.shipCity}</th>
            </tr>
            <tr>
              <td>
                <div>
                  <h5 class="text-truncate font-size-14">Note</h5>
                </div>
              </td>
              <th scope="row">{order.note}</th>
            </tr>
            {order.voucher && order.voucher.value && (
              <tr>
                <td>
                  <div>
                    <h5 class="text-truncate font-size-14">Voucher</h5>
                  </div>
                </td>
                <th scope="row">{order.voucher.code}</th>
              </tr>
            )}
          </tbody>
        </table>
        <div class="table-responsive">
          <table class="table table-centered table-nowrap">
            <thead>
              <tr>
                <th scope="col">Product</th>
                <th scope="col">Product Name</th>
                <th scope="col">Price</th>
              </tr>
            </thead>
            <tbody>
              {order.orderDetails.map((orderDetail) => {
                const product = orderDetail.productId || {};

                return (
                  <tr>
                    <th scope="row">
                      <div>
                        <img
                          src={(product.images || [])[0]}
                          alt=""
                          class="avatar-sm"
                        />
                      </div>
                    </th>
                    <td>
                      <div>
                        <h5 class="text-truncate font-size-14">
                          {product.name}
                        </h5>
                        <p class="text-muted mb-0">x{orderDetail.quantity}</p>
                      </div>
                    </td>
                    <td>{numeral(orderDetail.totalPrice).format('0,0')}</td>
                  </tr>
                );
              })}
              {!!discount && (
                <tr>
                  <td colspan="2">
                    <h6 class="m-0 text-right">Discount:</h6>
                  </td>
                  <td>{numeral(discount).format('0,0')}</td>
                </tr>
              )}
              <tr>
                <td colspan="2">
                  <h6 class="m-0 text-right">Total:</h6>
                </td>
                <td>{numeral(total).format('0,0')}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </ModalBody>
      <ModalFooter>
        <button type="button" class="btn btn-secondary" onClick={onClose}>
          Close
        </button>
      </ModalFooter>
    </Modal>
  );
}

function ModalUpdateOrder({ visible, onClose, order, onUpdated, isCreate }) {
  const auth = useRecoilValue(authState);
  const [state, setState] = useState({
    name: order.name || '',
    email: order.email || '',
    phone: order.phone || '',
    shipAddress: order.shipAddress || '',
    shipCity: order.shipCity || '',
    status: order.status || '',
    paid: order.paid || '',
    note: order.note || '',

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
      const orderInfo = {
        name: state.name,
        email: state.email,
        phone: state.phone,
        shipAddress: state.shipAddress,
        shipCity: state.shipCity,
        status: state.status,
        paid: state.paid,
        note: state.note,
      };
      cleanObj(orderInfo);
      let response = {};
      if (isCreate) {
        // response = await createOrder(orderInfo);
      } else {
        response = await updateOrder(order._id, orderInfo);
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
        <h5 class="modal-title">
          {isCreate ? 'Create order' : 'Update order'}
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
            <label for="userAddress" class="col-sm-3 col-form-label">
              Address
            </label>
            <div class="col-sm-9">
              <textarea
                required=""
                class="form-control"
                rows="2"
                id="userAddress"
                value={state.shipAddress}
                onChange={(event) =>
                  handleChangeUserInfo('shipAddress', event.target.value)
                }
              ></textarea>
            </div>
          </div>
          <div class="form-group row mb-4">
            <label for="userCity" class="col-sm-3 col-form-label">
              City
            </label>
            <div class="col-sm-9">
              <input
                type="tel"
                class="form-control"
                id="userCity"
                value={state.shipCity}
                onChange={(event) =>
                  handleChangeUserInfo('shipCity', event.target.value)
                }
              />
            </div>
          </div>
          <div class="form-group row mb-4">
            <label for="orderStatus" class="col-sm-3 col-form-label">
              Status
            </label>
            <div class="col-sm-9">
              <select
                class="form-control"
                id="orderStatus"
                value={state.status}
                onChange={(event) =>
                  handleChangeUserInfo('status', event.target.value)
                }
              >
                <option value="">Chưa xử lý</option>
                <option value="Processing">Đang xử lý</option>
                <option value="Shipped">Đang giao hàng</option>
                <option value="Delivered">Đã nhận</option>
                <option value="Cancelled">Đã Hủy</option>
              </select>
            </div>
          </div>
          {withRole([ROLE_ADMIN, SALE_MOD], auth.role) && (
            <>
              <div class="form-group row mb-4">
                <label for="orderpaid" class="col-sm-3 col-form-label">
                  Trạng thái thanh toán
                </label>
                <div class="col-sm-9">
                  <select
                    class="form-control"
                    id="orderpaid"
                    value={state.paid}
                    onChange={(event) =>
                      handleChangeUserInfo('paid', event.target.value)
                    }
                  >
                    <option value="">Chưa thanh toán</option>
                    <option value="true">Đã thanh toán</option>
                  </select>
                </div>
              </div>
              <div class="form-group row mb-4">
                <label for="orderNote" class="col-sm-3 col-form-label">
                  Note
                </label>
                <div class="col-sm-9">
                  <textarea
                    required=""
                    class="form-control"
                    rows="2"
                    id="orderNote"
                    value={state.note}
                    onChange={(event) =>
                      handleChangeUserInfo('note', event.target.value)
                    }
                  ></textarea>
                </div>
              </div>
            </>
          )}
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

function OrdersPage(props) {
  const auth = useRecoilValue(authState);
  const [state, setState] = useState({
    openModalSelectPos: false,
    openModalCreate: false,
    openModalUpdate: false,
    orderSelected: {},
    orders: [],
    total: 0,
    page: 1,
    name: '',
    status: '',
    paymentMethod: '',
    paid: 0,
    loading: false,
  });

  const handleChangeSearchValue = (prop, value) => {
    setState({
      ...state,
      [prop]: value,
    });
  };

  const handleSearchOrders = async (
    page,
    name,
    status,
    paymentMethod,
    paid
  ) => {
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
      const response = await getOrders(
        LIMIT,
        page,
        name,
        status,
        paymentMethod,
        paid
      );
      newState.orders = response.data.orders;
      newState.total = response.data.total;
      newState.loading = false;
    } catch (error) {
      newState.loading = false;
      toastr['error'](error.message);
    }
    setState(newState);
  };

  useEffect(() => {
    handleSearchOrders(
      1,
      state.name,
      state.status,
      state.paymentMethod,
      state.paid
    );
  }, []);

  const handleDeleteOrder = async (orderId) => {
    const newState = {
      ...state,
      loading: true,
    };
    try {
      const response = await deleteOrder(orderId);
      newState.loading = false;
      newState.orders = state.orders.filter(({ _id }) => _id !== orderId);
    } catch (error) {
      newState.loading = false;
      toastr['error'](error.message);
    }
    setState(newState);
  };

  return (
    <>
      {state.openModalSelectPos && (
        <ModalSelectPos
          visible={state.openModalSelectPos}
          order={state.orderSelected}
          onClose={() => {
            setState({
              ...state,
              openModalSelectPos: false,
              orderSelected: {},
            });
          }}
          onUpdated={(order) => {
            if (state.openModalCreate) {
              setState({
                ...state,
                openModalCreate: false,
                orders:
                  state.orders.length === LIMIT
                    ? [order, ...state.orders].slice(0, -1)
                    : [order, ...state.orders],
              });
            } else {
              setState({
                ...state,
                openModalUpdate: false,
                orderSelected: {},
                orders: state.orders.map((_order) => {
                  if (_order._id === order._id) {
                    return order;
                  }
                  return _order;
                }),
              });
            }
          }}
        />
      )}
      {state.openModalDetail && (
        <ModalDetailOrder
          visible={state.openModalDetail}
          order={state.orderSelected}
          onClose={() => {
            setState({
              ...state,
              openModalDetail: false,
              orderSelected: {},
            });
          }}
        />
      )}
      {(state.openModalUpdate || state.openModalCreate) && (
        <ModalUpdateOrder
          isCreate={state.openModalCreate}
          visible={state.openModalUpdate || state.openModalCreate}
          order={state.orderSelected}
          onClose={() => {
            setState({
              ...state,
              openModalUpdate: false,
              openModalCreate: false,
              orderSelected: {},
            });
          }}
          onUpdated={(order) => {
            if (state.openModalCreate) {
              setState({
                ...state,
                openModalCreate: false,
                orders:
                  state.orders.length === LIMIT
                    ? [order, ...state.orders].slice(0, -1)
                    : [order, ...state.orders],
              });
            } else {
              setState({
                ...state,
                openModalUpdate: false,
                orderSelected: {},
                orders: state.orders.map((_order) => {
                  if (_order._id === order._id) {
                    return order;
                  }
                  return _order;
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
                <h4 className="mb-0 font-size-18">Orders List</h4>

                {/* <div className="page-title-right">
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
                </div> */}
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-2">
              <div class="card">
                <div class="card-body">
                  <h4 class="card-title mb-4">Filter</h4>
                  <form
                    onSubmit={(event) => {
                      event.preventDefault();
                      handleSearchOrders(
                        1,
                        state.name,
                        state.status,
                        state.paymentMethod,
                        state.paid
                      );
                    }}
                  >
                    <div class="form-group">
                      <label for="status-select">Trạng thái</label>
                      <select
                        class="form-control"
                        id="status-select"
                        value={state.status}
                        onChange={(event) =>
                          handleChangeSearchValue('status', event.target.value)
                        }
                      >
                        <option value="">Tất cả</option>
                        <option value="Not processed">Chưa xử lý</option>
                        <option value="Processing">Đang xử lý</option>
                        <option value="Shipped">Đang giao hàng</option>
                        <option value="Delivered">Đã nhận</option>
                        <option value="Cancelled">Đã Hủy</option>
                      </select>
                    </div>
                    <div class="form-group">
                      <label for="paymentMethod-select">
                        Phương thức thanh toán
                      </label>
                      <select
                        class="form-control"
                        id="paymentMethod-select"
                        value={state.paymentMethod}
                        onChange={(event) =>
                          handleChangeSearchValue(
                            'paymentMethod',
                            event.target.value
                          )
                        }
                      >
                        <option value="">Tất cả</option>
                        <option value="cod">Cod</option>
                        <option value="vnpay">VNPay</option>
                      </select>
                    </div>
                    <div class="form-group">
                      <label for="paid-select">Trạng thái thanh toán</label>
                      <select
                        class="form-control"
                        id="paid-select"
                        value={state.paid}
                        onChange={(event) =>
                          handleChangeSearchValue('paid', event.target.value)
                        }
                      >
                        <option value={0}>Tất cả</option>
                        <option value={1}>Chưa thanh toán</option>
                        <option value={2}>Đã thanh toán</option>
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
            <div className="col-lg-10">
              <div className="card">
                <div className="card-body">
                  <div className="table-responsive">
                    <table className="table table-centered table-nowrap table-hover">
                      <thead className="thead-light">
                        <tr>
                          <th scope="col" style={{ width: '70px' }}>
                            #ID
                          </th>
                          <th scope="col">Name</th>
                          <th scope="col">Thời gian</th>
                          <th scope="col">Tổng tiền</th>
                          <th scope="col">Trạng thái</th>
                          <th scope="col">Hình thức thanh toán</th>
                          <th scope="col">Chi tiết</th>
                          <th>Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        {state.orders.map((order, index) => {
                          // const total = sum(
                          //   order.orderDetails.map(
                          //     ({ totalPrice }) => totalPrice
                          //   )
                          // );
                          const totalWithoutDiscount = sum(
                            (order.orderDetails || []).map(
                              ({ totalPrice }) => totalPrice
                            )
                          );

                          let discount = 0;
                          if (order.voucher && order.voucher.value) {
                            if (order.voucher.type === 'percent') {
                              discount =
                                (totalWithoutDiscount / 100) *
                                order.voucher.value;
                            } else {
                              discount = order.voucher.value;
                            }
                          }

                          const total = totalWithoutDiscount - discount;
                          return (
                            <tr key={order.lid}>
                              <td>
                                <b>{order.lid}</b>
                              </td>
                              <td>
                                <h5 className="font-size-14 mb-1">
                                  <a className="text-dark">{order.name}</a>
                                </h5>
                                <p className="text-muted mb-0">
                                  {order.address}
                                </p>
                              </td>
                              <td>
                                {moment(order.createdAt).format(
                                  'hh:mm DD-MM-YYYY'
                                )}
                                {/* {order.createdAt} */}
                              </td>
                              <td>{numeral(total).format('0,0')}</td>
                              <td>
                                {(() => {
                                  if (order.status === 'Not processed') {
                                    return (
                                      <span class="badge badge-pill badge-soft-warning font-size-12">
                                        {order.status}
                                      </span>
                                    );
                                  } else if (order.status === 'Cancelled') {
                                    return (
                                      <span class="badge badge-pill badge-soft-danger font-size-12">
                                        {order.status}
                                      </span>
                                    );
                                  } else {
                                    return (
                                      <span class="badge badge-pill badge-soft-success font-size-12">
                                        {order.status}
                                      </span>
                                    );
                                  }
                                })()}
                              </td>
                              <td>
                                {(() => {
                                  if (order.paymentMethod === 'cod') {
                                    return (
                                      <i class="fas fa-money-bill-alt mr-1"></i>
                                    );
                                  } else if (order.paymentMethod === 'vnpay') {
                                    return <i class="bx bx-credit-card"></i>;
                                  }
                                })()}{' '}
                                {order.paymentMethod} /{' '}
                                {order.paid
                                  ? 'Đã thanh toán'
                                  : 'Chưa thanh toán'}
                              </td>
                              <td>
                                <button
                                  type="button"
                                  class="btn btn-primary btn-sm btn-rounded"
                                  onClick={() => {
                                    setState({
                                      ...state,
                                      openModalDetail: true,
                                      orderSelected: order,
                                    });
                                  }}
                                >
                                  View Details
                                </button>
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
                                      [
                                        ROLE_ADMIN,
                                        SALE_MOD,
                                        SALE_STAFF,
                                        CS_STAFF,
                                      ],
                                      auth.role
                                    ) && (
                                      <>
                                        <li>
                                          <a
                                            onClick={() => {
                                              setState({
                                                ...state,
                                                openModalSelectPos: true,
                                                orderSelected: order,
                                              });
                                            }}
                                            class="dropdown-item"
                                          >
                                            <i class="bx bx-send font-size-16 text-success mr-1"></i>{' '}
                                            Gửi đến POS
                                          </a>
                                        </li>
                                        <li>
                                          <a
                                            onClick={() => {
                                              setState({
                                                ...state,
                                                openModalUpdate: true,
                                                orderSelected: order,
                                              });
                                            }}
                                            class="dropdown-item"
                                          >
                                            <i class="mdi mdi-pencil font-size-16 text-success mr-1"></i>{' '}
                                            Chỉnh sửa
                                          </a>
                                        </li>
                                        {withRole(
                                          [ROLE_ADMIN, SALE_MOD],
                                          auth.role
                                        ) && (
                                          <li>
                                            <a
                                              onClick={() =>
                                                handleDeleteOrder(order._id)
                                              }
                                              class="dropdown-item"
                                            >
                                              <i class="mdi mdi-trash-can font-size-16 text-danger mr-1"></i>{' '}
                                              Xóa
                                            </a>
                                          </li>
                                        )}
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
                          handleSearchOrders(
                            page.selected + 1,
                            state.name,
                            state.status,
                            state.paymentMethod,
                            state.paid
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

OrdersPage.propTypes = {};

export default withLayout(OrdersPage);
