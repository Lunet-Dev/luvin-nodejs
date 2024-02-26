import React, { useEffect } from "react";
import PropTypes from "prop-types";
import Head from "next/head";
import { useRouter } from "next/router";
import { useSelector, useDispatch } from "react-redux";
import moment from "moment";
import sum from "lodash/sum";
import numeral from "numeral";

import Content from "../../../components/Layout/Content";
import { getOrderDetail } from "../../../actions/order";

const orderStateSelector = (state) => state.order;

function orderDetail(props) {
  const router = useRouter();
  const dispatch = useDispatch();
  const { detail } = useSelector(orderStateSelector);

  useEffect(() => {
    dispatch(getOrderDetail(router.query.orderId));
  }, []);

  const order = detail.order;
  return (
    <div>
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
              {/* <nav class="woocommerce-MyAccount-navigation">
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
                      Địa chỉ
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
              </nav> */}

              <div
                class="woocommerce-MyAccount-content"
                style={{ width: "100%" }}
              >
                <div class="woocommerce-notices-wrapper"></div>
                <p>
                  Đơn hàng #<mark class="order-number">{order._id}</mark> đã
                  được đặt lúc{" "}
                  <mark class="order-date">
                    {moment(order.createdAt).format("mm:hh DD-MM-YYYY")}
                  </mark>{" "}
                  và hiện tại là{" "}
                  <mark class="order-status">{order.status}</mark>.
                </p>

                <section class="woocommerce-order-details">
                  <h2 class="woocommerce-order-details__title">
                    Chi tiết đơn hàng
                  </h2>

                  <table class="woocommerce-table woocommerce-table--order-details shop_table order_details">
                    <thead>
                      <tr>
                        <th class="woocommerce-table__product-name product-name">
                          Sản phẩm
                        </th>
                        <th class="woocommerce-table__product-table product-total">
                          Tổng
                        </th>
                      </tr>
                    </thead>

                    <tbody>
                      {(order.orderDetails || []).map(
                        ({ productId, quantity, totalPrice }) => (
                          <tr class="woocommerce-table__line-item order_item">
                            <td class="woocommerce-table__product-name product-name">
                              <a href="http://luvinhtml.ekipapi.com/shop/t-shirt-with-logo/">
                                {productId.name}
                              </a>{" "}
                              <strong class="product-quantity">
                                ×&nbsp;{quantity}
                              </strong>{" "}
                            </td>

                            <td class="woocommerce-table__product-total product-total">
                              <span class="woocommerce-Price-amount amount">
                                <bdi>
                                  {numeral(totalPrice).format("0,0")}
                                  <span class="woocommerce-Price-currencySymbol">
                                    ₫
                                  </span>
                                </bdi>
                              </span>{" "}
                            </td>
                          </tr>
                        )
                      )}
                    </tbody>

                    <tfoot>
                      <tr>
                        <th scope="row">Tổng số phụ:</th>
                        <td>
                          <span class="woocommerce-Price-amount amount">
                            {numeral(
                              sum(
                                (order.orderDetails || []).map(
                                  ({ totalPrice }) => totalPrice
                                )
                              )
                            ).format("0,0")}
                            <span class="woocommerce-Price-currencySymbol">
                              ₫
                            </span>
                          </span>
                        </td>
                      </tr>
                      {(order.voucher || {}).value && (
                        <tr>
                          <th scope="row">Mã giảm giá:</th>
                          <td>
                            {(() => {
                              if ((order.voucher || {}).type === "percent") {
                                const totalWithoutDiscount = sum(
                                  (order.orderDetails || []).map(
                                    ({ totalPrice }) => totalPrice
                                  )
                                );
                                const discount =
                                  (totalWithoutDiscount / 100) *
                                  (order.voucher || {}).value;
                                return numeral(discount).format("0,0");
                              } else {
                                return numeral(
                                  (order.voucher || {}).value
                                ).format("0,0");
                              }
                            })()}
                            <span class="woocommerce-Price-currencySymbol">
                              ₫
                            </span>
                          </td>
                        </tr>
                      )}
                      <tr>
                        <th scope="row">Phương thức thanh toán:</th>
                        <td>{order.paymentMethod}</td>
                      </tr>
                      <tr>
                        <th scope="row">Tổng cộng:</th>
                        <td>
                          <span class="woocommerce-Price-amount amount">
                            {(() => {
                              const totalWithoutDiscount = sum(
                                (order.orderDetails || []).map(
                                  ({ totalPrice }) => totalPrice
                                )
                              );

                              let discount = 0;
                              if ((order.voucher || {}).value) {
                                if ((order.voucher || {}).type === "percent") {
                                  discount =
                                    (totalWithoutDiscount / 100) *
                                    (order.voucher || {}).value;
                                } else {
                                  discount = (order.voucher || {}).value;
                                }
                              }

                              const total = totalWithoutDiscount - discount;
                              return numeral(total).format("0,0");
                            })()}
                            {/* {numeral(
                              sum(
                                (order.orderDetails || []).map(
                                  ({ totalPrice }) => totalPrice
                                )
                              )
                            ).format("0,0")} */}
                            <span class="woocommerce-Price-currencySymbol">
                              ₫
                            </span>
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">Trạng thái thanh toán:</th>
                        <td>
                          {order.paid ? "Đã thanh toán" : "Chưa thanh toán"}
                        </td>
                      </tr>
                    </tfoot>
                  </table>
                </section>

                <section class="woocommerce-customer-details">
                  <h2 class="woocommerce-column__title">Địa chỉ thanh toán</h2>

                  <address>
                    {order.name}
                    <br />
                    {order.shipAddress}
                    <br />
                    {order.shipCity}
                    <p class="woocommerce-customer-details--phone">
                      {order.phone}
                    </p>
                    <p class="woocommerce-customer-details--email">
                      {order.email}
                    </p>
                  </address>
                </section>
              </div>
            </div>
          </div>
        </main>
      </Content>
    </div>
  );
}

orderDetail.propTypes = {};

export default orderDetail;
