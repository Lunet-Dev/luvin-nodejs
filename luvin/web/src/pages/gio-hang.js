import React from "react";
import PropTypes from "prop-types";
import Link from "next/link";
import Head from "next/head";
import sum from "lodash/sum";
import numeral from "numeral";
import { useSelector, useDispatch } from "react-redux";

import Content from "../components/Layout/Content";

import { removeProduct } from "../actions/cart";

const cartStateSelector = (state) => state.cart;

function Cart(props) {
  const dispatch = useDispatch();
  const { products } = useSelector(cartStateSelector);
  return (
    <Content className="page-template-default page page-id-8 wp-custom-logo theme-hello-elementor woocommerce-cart woocommerce-page woocommerce-no-js elementor-default elementor-kit-76">
      <Head>
        <title>Giỏ hàng - Luvin</title>
        <meta
          name="description"
          content="Tất cả các sản phẩm rượu vang được lên men tự nhiên và có nồng độ cồn dưới 15 độ"
        />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Giỏ hàng - Luvin" />
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
        className="site-main post-8 page type-page status-publish hentry"
        role="main"
      >
        <header className="page-header">
          <h1 className="entry-title" style={{ display: "block" }}>
            Giỏ hàng
          </h1>
        </header>
        <div className="page-content">
          <div className="woocommerce">
            <div className="woocommerce-notices-wrapper"></div>
            <form className="woocommerce-cart-form">
              <table
                className="shop_table shop_table_responsive cart woocommerce-cart-form__contents"
                cellspacing="0"
              >
                <thead>
                  <tr>
                    <th className="product-remove">&nbsp;</th>
                    <th className="product-thumbnail">&nbsp;</th>
                    <th className="product-name">Sản phẩm</th>
                    <th className="product-price">Giá</th>
                    <th className="product-quantity">Số lượng</th>
                    <th className="product-subtotal">Tạm tính</th>
                  </tr>
                </thead>

                <tbody>
                  {products.map(({ amount, product = {} }, index) => {
                    return (
                      <tr
                        className="woocommerce-cart-form__cart-item cart_item"
                        key={index}
                      >
                        <td className="product-remove">
                          <a
                            className="remove"
                            onClick={() => dispatch(removeProduct(index))}
                          >
                            &times;
                          </a>
                        </td>

                        <td className="product-thumbnail">
                          {/* <Link
                            href="/[category]/[slug].js"
                            as={`/${categorySlug}/${slug}`}
                          > */}
                          <a>
                            <img
                              width="300"
                              height="360"
                              src={(product.images || [])[0]}
                              className="attachment-woocommerce_thumbnail size-woocommerce_thumbnail"
                              alt=""
                            />
                          </a>
                          {/* </Link> */}
                        </td>

                        <td className="product-name" data-title="Sản phẩm">
                          {/* <Link
                            href="/[category]/[slug].js"
                            as={`/${categorySlug}/${slug}`}
                          > */}
                          <a>{product.name}</a>
                          {/* </Link> */}
                        </td>

                        <td className="product-price" data-title="Giá">
                          <span className="woocommerce-Price-amount amount">
                            <bdi>
                              {numeral(
                                (product.price || 0) - (product.discount || 0)
                              ).format("0,0")}
                              <span className="woocommerce-Price-currencySymbol">
                                &#8363;
                              </span>
                            </bdi>
                          </span>
                        </td>

                        <td className="product-quantity" data-title="Số lượng">
                          <div className="quantity">
                            <label
                              className="screen-reader-text"
                              for="quantity_5f9cb99753d5b"
                            >
                              Số lượng
                            </label>
                            <input
                              type="number"
                              id="quantity_5f9cb99753d5b"
                              className="input-text qty text"
                              step="1"
                              min="0"
                              max=""
                              value={amount}
                              placeholder=""
                              inputmode="numeric"
                            />
                          </div>
                        </td>

                        <td className="product-subtotal" data-title="Tạm tính">
                          <span className="woocommerce-Price-amount amount">
                            <bdi>
                              {numeral(
                                ((product.price || 0) -
                                  (product.discount || 0)) *
                                  amount
                              ).format("0,0")}
                              <span className="woocommerce-Price-currencySymbol">
                                &#8363;
                              </span>
                            </bdi>
                          </span>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </form>

            <div className="cart-collaterals">
              <div className="cart_totals">
                <h2>Cộng giỏ hàng</h2>

                <table
                  cellspacing="0"
                  className="shop_table shop_table_responsive"
                >
                  <tr className="cart-subtotal">
                    <th>Tạm tính</th>
                    <td data-title="Tạm tính">
                      <span className="woocommerce-Price-amount amount">
                        <bdi>
                          {numeral(
                            sum(
                              products.map(({ amount, product = {} }) => {
                                const realPrice =
                                  amount *
                                  ((product.price || 0) -
                                    (product.discount || 0));
                                return realPrice;
                              })
                            )
                          ).format("0,0")}
                          <span className="woocommerce-Price-currencySymbol">
                            &#8363;
                          </span>
                        </bdi>
                      </span>
                    </td>
                  </tr>

                  <tr className="order-total">
                    <th>Tổng</th>
                    <td data-title="Tổng">
                      <strong>
                        <span className="woocommerce-Price-amount amount">
                          <bdi>
                            {numeral(
                              sum(
                                products.map(({ amount, product = {} }) => {
                                  const realPrice =
                                    amount *
                                    ((product.price || 0) -
                                      (product.discount || 0));
                                  return realPrice;
                                })
                              )
                            ).format("0,0")}
                            <span className="woocommerce-Price-currencySymbol">
                              &#8363;
                            </span>
                          </bdi>
                        </span>
                      </strong>
                    </td>
                  </tr>
                </table>

                <div className="wc-proceed-to-checkout">
                  <Link href="/thanh-toan">
                    <a className="checkout-button button alt wc-forward">
                      Tiến hành thanh toán
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </Content>
  );
}

Cart.propTypes = {};

export default Cart;
