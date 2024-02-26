import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { useSelector, useDispatch } from "react-redux";
import { useRouter } from "next/router";
import Head from "next/head";
import sum from "lodash/sum";
import numeral from "numeral";
import moment from "moment";
import Link from "next/link";

import Content from "../../components/Layout/Content";

import {
  login as loginAction,
  register as registerAction,
  logout as logoutAction,
  updateUserInfo as updateUserInfoAction,
  updatePassword as updatePasswordAction,
} from "../../actions/auth";

import { getOrderHistory as getOrderHistoryAction } from "../../actions/order";

import cities from "../../constants/cities";

const authStateSelector = (state) => state.auth;
const orderStateSelector = (state) => state.order;

function OrderHistory(prop) {
  const dispatch = useDispatch();
  const { history } = useSelector(orderStateSelector);
  useEffect(() => {
    dispatch(getOrderHistoryAction());
  }, []);
  return (
    <table class="woocommerce-orders-table woocommerce-MyAccount-orders shop_table shop_table_responsive my_account_orders account-orders-table">
      <thead>
        <tr>
          <th class="woocommerce-orders-table__header woocommerce-orders-table__header-order-number">
            <span class="nobr">Đơn hàng</span>
          </th>
          <th class="woocommerce-orders-table__header woocommerce-orders-table__header-order-date">
            <span class="nobr">Ngày</span>
          </th>
          <th class="woocommerce-orders-table__header woocommerce-orders-table__header-order-status">
            <span class="nobr">Tình trạng</span>
          </th>
          <th class="woocommerce-orders-table__header woocommerce-orders-table__header-order-total">
            <span class="nobr">Tổng</span>
          </th>
          <th class="woocommerce-orders-table__header woocommerce-orders-table__header-order-actions">
            <span class="nobr">Các thao tác</span>
          </th>
        </tr>
      </thead>

      <tbody>
        {history.orders.map((order) => {
          // const total = sum(
          //   order.orderDetails.map(({ totalPrice }) => totalPrice)
          // );
          const totalWithoutDiscount = sum(
            (order.orderDetails || []).map(({ totalPrice }) => totalPrice)
          );

          let discount = 0;
          if (order.voucher && order.voucher.value) {
            if (order.voucher.type === "percent") {
              discount = (totalWithoutDiscount / 100) * order.voucher.value;
            } else {
              discount = order.voucher.value;
            }
          }

          const total = totalWithoutDiscount - discount;

          const quantity = sum(
            order.orderDetails.map(({ quantity }) => quantity)
          );
          return (
            <tr class="woocommerce-orders-table__row woocommerce-orders-table__row--status-cancelled order">
              <td
                class="woocommerce-orders-table__cell woocommerce-orders-table__cell-order-number"
                data-title="Đơn hàng"
              >
                <Link
                  href="/tai-khoan/view-order/[orderId].js"
                  as={`/tai-khoan/view-order/${order._id}`}
                >
                  <a>{order._id} </a>
                </Link>
              </td>
              <td
                class="woocommerce-orders-table__cell woocommerce-orders-table__cell-order-date"
                data-title="Ngày"
              >
                <time datetime="2020-11-02T10:41:03+00:00">
                  {" "}
                  {moment(order.createdAt).format("DD-MM-YYYY")}
                </time>
              </td>
              <td
                class="woocommerce-orders-table__cell woocommerce-orders-table__cell-order-status"
                data-title="Tình trạng"
              >
                {order.status}
              </td>
              <td
                class="woocommerce-orders-table__cell woocommerce-orders-table__cell-order-total"
                data-title="Tổng"
              >
                <span class="woocommerce-Price-amount amount">
                  {numeral(total).format("0,0")}
                  <span class="woocommerce-Price-currencySymbol">₫</span>
                </span>{" "}
                cho {quantity} mục
              </td>
              <td
                class="woocommerce-orders-table__cell woocommerce-orders-table__cell-order-actions"
                data-title="Các thao tác"
              >
                <Link
                  href="/tai-khoan/view-order/[orderId].js"
                  as={`/tai-khoan/view-order/${order._id}`}
                >
                  <a class="woocommerce-button button view">Xem</a>
                </Link>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

function ChangePassword(prop) {
  const dispatch = useDispatch();
  const { userInfo, updatePassword } = useSelector(authStateSelector);

  const [state, setState] = useState({
    oldPass: "",
    newPass: "",
    confirmNewPass: "",
  });

  const handleChangePassword = (prop, value) => {
    setState({
      ...state,
      [prop]: value,
    });
  };

  const handleUpdatePassword = (event) => {
    console.log("on here");
    event.preventDefault();
    if (state.newPass !== state.confirmNewPass) {
      alert("Mật khẩu mới không khớp!");
    }
    dispatch(
      updatePasswordAction({
        userId: userInfo._id,
        oldPassword: state.oldPass,
        newPassword: state.newPass,
      })
    );
  };

  return (
    <form
      class="woocommerce-EditAccountForm edit-account"
      onSubmit={handleUpdatePassword}
    >
      <fieldset>
        <legend>Thay đổi mật khẩu</legend>

        <p class="woocommerce-form-row woocommerce-form-row--wide form-row form-row-wide">
          <label for="password_current">Mật khẩu hiện tại</label>
          <input
            required
            type="password"
            class="woocommerce-Input woocommerce-Input--password input-text"
            name="password_current"
            id="password_current"
            autocomplete="off"
            value={state.oldPass}
            onChange={(event) =>
              handleChangePassword("oldPass", event.target.value)
            }
          />
        </p>
        <p class="woocommerce-form-row woocommerce-form-row--wide form-row form-row-wide">
          <label for="password_1">Mật khẩu mới</label>
          <input
            required
            type="password"
            class="woocommerce-Input woocommerce-Input--password input-text"
            name="password_1"
            id="password_1"
            autocomplete="off"
            value={state.newPass}
            onChange={(event) =>
              handleChangePassword("newPass", event.target.value)
            }
          />
        </p>
        <p class="woocommerce-form-row woocommerce-form-row--wide form-row form-row-wide">
          <label for="password_2">Xác nhận mật khẩu mới</label>
          <input
            required
            type="password"
            class="woocommerce-Input woocommerce-Input--password input-text"
            name="password_2"
            id="password_2"
            autocomplete="off"
            value={state.confirmNewPass}
            onChange={(event) =>
              handleChangePassword("confirmNewPass", event.target.value)
            }
          />
        </p>
      </fieldset>
      {updatePassword.errorMessage && (
        <p style={{ color: "red", fontSize: "14px" }}>
          {updatePassword.errorMessage}
        </p>
      )}
      {updatePassword.success && (
        <p style={{ color: "green", fontSize: "14px" }}>
          Đổi mật khẩu thành công
        </p>
      )}
      <p>
        <button
          style={{ marginTop: "10px" }}
          type="submit"
          class="woocommerce-Button button"
          name="save_account_details"
          value="Lưu thay đổi"
        >
          Lưu thay đổi
        </button>
      </p>
    </form>
  );
}

function Adress(prop) {
  const dispatch = useDispatch();
  const { userInfo, updateUserInfo } = useSelector(authStateSelector);
  const [state, setState] = useState({
    name: userInfo.name || "",
    email: userInfo.email || "",
    phone: userInfo.phone || "",
    address: userInfo.address || "",
    city: userInfo.city || "",
  });

  const handleChangeInfo = (prop, value) => {
    setState({
      ...state,
      [prop]: value,
    });
  };

  const handleUpdateInfo = (event) => {
    event.preventDefault();
    dispatch(updateUserInfoAction(userInfo._id, state));
  };

  return (
    <form onSubmit={handleUpdateInfo}>
      <h3>Địa chỉ thanh toán</h3>
      <div class="woocommerce-address-fields">
        <div class="woocommerce-address-fields__field-wrapper">
          <p
            class="form-row form-row-wide"
            id="billing_company_field"
            data-priority="30"
          >
            <label for="billing_company" class="">
              Tên&nbsp;
              <abbr class="required" title="bắt buộc">
                *
              </abbr>
            </label>
            <span class="woocommerce-input-wrapper">
              <input
                required
                type="text"
                class="input-text "
                name="billing_company"
                id="billing_company"
                placeholder=""
                value={state.name}
                onChange={(event) =>
                  handleChangeInfo("name", event.target.value)
                }
              />
            </span>
          </p>

          <p
            class="form-row form-row-first validate-required"
            id="billing_first_name_field"
            data-priority="10"
          >
            <label for="billing_first_name" class="">
              Phone&nbsp;
              <abbr class="required" title="bắt buộc">
                *
              </abbr>
            </label>
            <span class="woocommerce-input-wrapper">
              <input
                required
                type="tel"
                class="input-text "
                name="billing_first_name"
                id="billing_first_name"
                placeholder=""
                autocomplete="given-name"
                value={state.phone}
                onChange={(event) =>
                  handleChangeInfo("phone", event.target.value)
                }
              />
            </span>
          </p>
          <p
            class="form-row form-row-last validate-required"
            id="billing_last_name_field"
            data-priority="20"
          >
            <label for="billing_last_name" class="">
              Email&nbsp;
              <abbr class="required" title="bắt buộc">
                *
              </abbr>
            </label>
            <span class="woocommerce-input-wrapper">
              <input
                required
                type="email"
                class="input-text "
                name="billing_last_name"
                id="billing_last_name"
                placeholder=""
                value={state.email}
                onChange={(event) =>
                  handleChangeInfo("email", event.target.value)
                }
              />
            </span>
          </p>

          <p
            class="form-row address-field validate-required form-row-wide"
            id="billing_address_1_field"
            data-priority="50"
          >
            <label for="billing_address_1" class="">
              Địa chỉ&nbsp;
              <abbr class="required" title="bắt buộc">
                *
              </abbr>
            </label>
            <span class="woocommerce-input-wrapper">
              <input
                required
                type="text"
                class="input-text "
                name="billing_address_1"
                id="billing_address_1"
                placeholder="Địa chỉ"
                autocomplete="address-line1"
                data-placeholder="Địa chỉ"
                value={state.address}
                onChange={(event) =>
                  handleChangeInfo("address", event.target.value)
                }
              />
            </span>
          </p>
          <p
            class="form-row address-field validate-required form-row-wide"
            id="billing_address_1_field"
            data-priority="50"
          >
            <label for="billing_address_1" class="">
              Tỉnh / Thành phố &nbsp;
              <abbr class="required" title="bắt buộc">
                *
              </abbr>
            </label>

            <span class="woocommerce-input-wrapper">
              {/* <input
                type="text"
                class="input-text "
                name="billing_address_1"
                id="billing_address_1"
                placeholder="Địa chỉ"
                autocomplete="address-line1"
                data-placeholder="Địa chỉ"
                value={state.address}
                onChange={(event) =>
                  handleChangeInfo("address", event.target.value)
                }
              /> */}
              <select
                name="billing_city"
                id="billing_city"
                value={state.city}
                className="input-text"
                onChange={(event) =>
                  handleChangeInfo("city", event.target.value)
                }
              >
                {cities.map((city, index) => (
                  <option key={index} value={city}>
                    {city}
                  </option>
                ))}
              </select>
            </span>
          </p>
        </div>

        <p>
          <button
            type="submit"
            class="button"
            name="save_address"
            value="Lưu địa chỉ"
          >
            Lưu địa chỉ
          </button>
        </p>
        {updateUserInfo.errorMessage && (
          <p style={{ color: "red", fontSize: "14px" }}>
            {updateUserInfo.errorMessage}
          </p>
        )}
        {updateUserInfo.success && (
          <p style={{ color: "green", fontSize: "14px" }}>
            Cập nhật thông tin thành công!
          </p>
        )}
      </div>
    </form>
  );
}
function index(props) {
  const dispatch = useDispatch();
  const router = useRouter();

  const { userInfo, login, register } = useSelector(authStateSelector);

  const [state, setState] = useState({
    tabActive: 1,
  });

  useEffect(() => {
    if (!userInfo._id) {
      router.push("/dang-nhap");
    }
  }, [userInfo._id]);

  return (
    <Content className="page-template-default page page-id-10 wp-custom-logo theme-hello-elementor woocommerce-account woocommerce-page woocommerce-no-js elementor-default elementor-kit-76">
      <Head>
        <title>Tài khoản - Luvin</title>
        <meta
          name="description"
          content="Tất cả các sản phẩm rượu vang được lên men tự nhiên và có nồng độ cồn dưới 15 độ"
        />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={`Tài khoản - Luvin`} />
        <meta property="og:url" content="https://luvin.com.vn" />
        <meta property="og:site_name" content="Luvin" />
        <meta
          property="og:image"
          content="https://luvin.com.vn/images/banner.jpg"
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
      </Head>
      <main
        className="site-main post-10 page type-page status-publish hentry"
        role="main"
      >
        <header className="page-header">
          <h1 className="entry-title">Tài khoản</h1>
        </header>
        <div className="page-content">
          <div class="woocommerce">
            <nav class="woocommerce-MyAccount-navigation">
              <ul>
                <li class="woocommerce-MyAccount-navigation-link woocommerce-MyAccount-navigation-link--dashboard is-active">
                  <a
                    style={{ cursor: "pointer" }}
                    onClick={() => setState({ ...state, tabActive: 1 })}
                  >
                    Bảng điều khiển
                  </a>
                </li>
                <li class="woocommerce-MyAccount-navigation-link woocommerce-MyAccount-navigation-link--orders">
                  <a
                    style={{ cursor: "pointer" }}
                    onClick={() => setState({ ...state, tabActive: 2 })}
                  >
                    Đơn hàng
                  </a>
                </li>
                <li class="woocommerce-MyAccount-navigation-link woocommerce-MyAccount-navigation-link--edit-address">
                  <a
                    style={{ cursor: "pointer" }}
                    onClick={() => setState({ ...state, tabActive: 3 })}
                  >
                    Thông tin cá nhân
                  </a>
                </li>
                <li class="woocommerce-MyAccount-navigation-link woocommerce-MyAccount-navigation-link--edit-account">
                  <a
                    style={{ cursor: "pointer" }}
                    onClick={() => setState({ ...state, tabActive: 4 })}
                  >
                    Đổi mật khẩu
                  </a>
                </li>
                <li class="woocommerce-MyAccount-navigation-link woocommerce-MyAccount-navigation-link--customer-logout">
                  <a
                    style={{ cursor: "pointer" }}
                    onClick={() => {
                      router.push("/");
                      dispatch(logoutAction());
                    }}
                  >
                    Đăng xuất
                  </a>
                </li>
              </ul>
            </nav>

            <div class="woocommerce-MyAccount-content">
              {state.tabActive === 1 && (
                <>
                  <p>
                    Xin chào <strong>{userInfo.name}</strong> (không phải{" "}
                    <strong>{userInfo.name}</strong>?{" "}
                    <a
                      style={{ cursor: "pointer" }}
                      onClick={() => {
                        router.push("/");
                        dispatch(logoutAction());
                      }}
                    >
                      Đăng xuất
                    </a>
                    )
                  </p>

                  {/* <p>
                    From your account dashboard you can view your{" "}
                    <a href="http://luvinhtml.ekipapi.com/tai-khoan/orders/">
                      recent orders
                    </a>
                    , manage your{" "}
                    <a href="http://luvinhtml.ekipapi.com/tai-khoan/edit-address/">
                      billing address
                    </a>
                    , and{" "}
                    <a href="http://luvinhtml.ekipapi.com/tai-khoan/edit-account/">
                      edit your password and account details
                    </a>
                    .
                  </p> */}
                </>
              )}
              {state.tabActive === 2 && <OrderHistory />}
              {state.tabActive === 3 && <Adress />}
              {state.tabActive === 4 && <ChangePassword />}
            </div>
          </div>
        </div>
      </main>
    </Content>
  );
}

index.propTypes = {};

export default index;
