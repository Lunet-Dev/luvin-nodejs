import React, { useState, useEffect, useLayoutEffect } from "react";
import PropTypes from "prop-types";
import Link from "next/link";
import { useRouter } from "next/router";
import sum from "lodash/sum";
import numeral from "numeral";
import { useSelector, useDispatch } from "react-redux";

import { toggleCartMenu, removeProduct } from "../../actions/cart";

const categoryStateSelector = (state) => state.categories;
const cartStateSelector = (state) => state.cart;

function Header(props) {
  const router = useRouter();
  const [searchValue, setSearchValue] = useState("");
  const dispatch = useDispatch();
  const { categories } = useSelector(categoryStateSelector);
  const { openCartMenu, products } = useSelector(cartStateSelector);
  const [opentMobileMenu, setOpenMobileMenu] = useState(false);
  const [innerWidth, setInnerWidth] = useState(0);

  const handleSearch = (event) => {
    event.preventDefault();
    router.push(`/tim-kiem?name=${searchValue}`);
  };

  // useEffect(() => {
  //   setInnerWidth(window.innerWidth);
  // }, [])

  useLayoutEffect(() => {
    function updateSize() {
      setInnerWidth(window.innerWidth);
    }
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  return (
    <div className="elementor elementor-78 elementor-location-header">
      <style>
        {`
          .menu-item-has-children:hover .elementor-nav-menu--dropdown {
            display: block;
          }
          .arrow {
            border: solid white;
            border-width: 0 3px 3px 0;
            display: inline-block;
            padding: 3px;
            color: white
          }
          .down {
            transform: rotate(45deg);
            -webkit-transform: rotate(45deg);
          }
        `}
      </style>
      <div className="elementor-section-wrap">
        <section className="elementor-section elementor-top-section elementor-element elementor-element-3cf488a elementor-section-content-middle elementor-section-height-min-height elementor-section-boxed elementor-section-height-default elementor-section-items-middle">
          <div className="elementor-container elementor-column-gap-default">
            <div className="elementor-row">
              <div className="elementor-column elementor-col-16 elementor-top-column elementor-element elementor-element-3bd1853">
                <div className="elementor-column-wrap elementor-element-populated">
                  <div className="elementor-widget-wrap">
                    <div className="elementor-element elementor-element-9f109fa elementor-nav-menu__align-left elementor-hidden-tablet elementor-hidden-phone elementor-nav-menu--indicator-classic elementor-nav-menu--indicator-classNameic elementor-nav-menu--dropdown-tablet elementor-nav-menu__text-align-aside elementor-nav-menu--toggle elementor-nav-menu--burger elementor-widget elementor-widget-nav-menu">
                      <div className="elementor-widget-container">
                        <nav
                          role="navigation"
                          className="elementor-nav-menu--main elementor-nav-menu__container elementor-nav-menu--layout-horizontal e--pointer-none"
                        >
                          <ul
                            id="menu-1-9f109fa"
                            className="elementor-nav-menu"
                          >
                            <li className="menu-reset-left menu-item menu-item-type-post_type menu-item-object-page menu-item-56">
                              <Link href="/uu-dai">
                                <a className="elementor-item">Ưu đãi</a>
                              </Link>
                            </li>
                            <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-53">
                              <Link href="/y-kien-khach-hang">
                                <a className="elementor-item">
                                  Ý kiến khách hàng
                                </a>
                              </Link>
                            </li>
                          </ul>
                        </nav>
                        <div
                          className="elementor-menu-toggle"
                          role="button"
                          tabIndex="0"
                          aria-label="Menu Toggle"
                          aria-expanded="false"
                        >
                          <i className="eicon-menu-bar" aria-hidden="true"></i>
                          <span className="elementor-screen-only">Menu</span>
                        </div>
                        <nav
                          className="elementor-nav-menu--dropdown elementor-nav-menu__container"
                          role="navigation"
                          aria-hidden="true"
                        >
                          <ul
                            id="menu-2-9f109fa"
                            className="elementor-nav-menu"
                          >
                            <li className="menu-reset-left menu-item menu-item-type-post_type menu-item-object-page menu-item-56">
                              <Link href="/uu-dai">
                                <a className="elementor-item">Ưu đãi</a>
                              </Link>
                            </li>
                            <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-53">
                              <Link href="/y-kien-khach-hang">
                                <a className="elementor-item">
                                  Ý kiến khách hàng
                                </a>
                              </Link>
                            </li>
                          </ul>
                        </nav>
                      </div>
                    </div>
                    <div className="elementor-element elementor-element-ad94921 elementor-nav-menu--stretch elementor-hidden-desktop elementor-nav-menu__align-left elementor-nav-menu--indicator-classNameic elementor-nav-menu--dropdown-tablet elementor-nav-menu__text-align-aside elementor-nav-menu--toggle elementor-nav-menu--burger elementor-widget elementor-widget-nav-menu">
                      <div className="elementor-widget-container">
                        <nav
                          role="navigation"
                          className="elementor-nav-menu--main elementor-nav-menu__container elementor-nav-menu--layout-horizontal e--pointer-none"
                        >
                          <ul
                            id="menu-1-ad94921"
                            className="elementor-nav-menu"
                          >
                            <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item page_item page-item-2 current_page_item menu-item-708">
                              <Link href="/">
                                <a
                                  aria-current="page"
                                  className="elementor-item elementor-item-active"
                                >
                                  Trang chủ
                                </a>
                              </Link>
                            </li>
                            <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-709">
                              <Link href="/shop">
                                <a className="elementor-item has-submenu">
                                  Sản phẩm
                                  <span className="sub-arrow">
                                    <i className="fa"></i>
                                  </span>
                                </a>
                              </Link>
                              <ul className="sub-menu elementor-nav-menu--dropdown">
                                <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-723">
                                  <Link href="/uu-dai">
                                    <a className="elementor-sub-item">Ưu đãi</a>
                                  </Link>
                                </li>
                                {categories.map(({ name, slug, ident }) => (
                                  <li
                                    className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-722"
                                    key={ident}
                                  >
                                    <Link href="/[category]" as={`/${slug}`}>
                                      <a className="elementor-sub-item">
                                        {name}
                                      </a>
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </li>
                            <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-711">
                              <Link href="/tasty">
                                <a className="elementor-item">Tasty</a>
                              </Link>
                            </li>
                            <li className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-712">
                              <Link href="/su-kien">
                                <a className="elementor-item">Sự kiện</a>
                              </Link>
                            </li>
                            <li className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-has-children menu-item-713">
                              <Link href="/tin-tuc">
                                <a className="elementor-item has-submenu">
                                  Tin tức
                                  <span className="sub-arrow">
                                    <i className="fa"></i>
                                  </span>
                                </a>
                              </Link>
                              <ul className="sub-menu elementor-nav-menu--dropdown">
                                <li className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-714">
                                  <Link href="/tin-tuc">
                                    <a className="elementor-sub-item">
                                      Bài viết
                                    </a>
                                  </Link>
                                </li>
                                <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-725">
                                  <Link href="/video">
                                    <a className="elementor-sub-item">Video</a>
                                  </Link>
                                </li>
                                <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-884">
                                  <Link href="/faq">
                                    <a className="elementor-sub-item">Faq</a>
                                  </Link>
                                </li>
                              </ul>
                            </li>
                            <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-717">
                              <Link href="/ve-chung-toi">
                                <a className="elementor-item">Về chúng tôi</a>
                              </Link>
                            </li>
                            <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-718">
                              <Link href="/y-kien-khach-hang">
                                <a className="elementor-item">
                                  Ý kiến khách hàng
                                </a>
                              </Link>
                            </li>
                          </ul>
                        </nav>
                        <div
                          className={`elementor-menu-toggle ${
                            opentMobileMenu && "elementor-active"
                          }`}
                          role="button"
                          tabIndex="0"
                          aria-label="Menu Toggle"
                          aria-expanded="false"
                          onClick={() => setOpenMobileMenu(!opentMobileMenu)}
                        >
                          <i className="eicon-menu-bar" aria-hidden="true"></i>
                          <span className="elementor-screen-only">Menu</span>
                        </div>
                        <nav
                          className="elementor-nav-menu--dropdown elementor-nav-menu__container"
                          role="navigation"
                          aria-hidden="true"
                          style={{
                            top: "33px",
                            left: "-10px",
                            width: `${innerWidth}px`,
                          }}
                        >
                          <ul
                            id="menu-2-ad94921"
                            className="elementor-nav-menu"
                          >
                            <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item page_item page-item-2 current_page_item menu-item-708">
                              <Link href="/">
                                <a
                                  aria-current="page"
                                  className="elementor-item elementor-item-active"
                                >
                                  Trang chủ
                                </a>
                              </Link>
                            </li>
                            <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-709">
                              <a className="elementor-item has-submenu">
                                Sản phẩm
                                <span className="sub-arrow">
                                  <i className="fa arrow down"></i>
                                </span>
                              </a>
                              <ul className="sub-menu elementor-nav-menu--dropdown">
                                <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-723">
                                  <Link href="/uu-dai">
                                    <a className="elementor-sub-item">Ưu đãi</a>
                                  </Link>
                                </li>
                                {categories.map(({ name, slug, ident }) => (
                                  <li className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-722">
                                    <Link href="/[category]" as={`/${slug}`}>
                                      <a className="elementor-sub-item">
                                        {name}
                                      </a>
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </li>
                            <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-711">
                              <Link href="/tasty">
                                <a className="elementor-item">Tasty</a>
                              </Link>
                            </li>
                            <li className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-712">
                              <Link href="/su-kien">
                                <a className="elementor-item">Sự kiện</a>
                              </Link>
                            </li>
                            <li className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-has-children menu-item-713">
                              <a className="elementor-item has-submenu">
                                Tin tức
                                <span className="sub-arrow">
                                  <i className="fa arrow down"></i>
                                </span>
                              </a>
                              <ul className="sub-menu elementor-nav-menu--dropdown">
                                <li className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-714">
                                  <Link href="/tin-tuc">
                                    <a className="elementor-sub-item">
                                      Bài viết
                                    </a>
                                  </Link>
                                </li>
                                <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-725">
                                  <Link href="/video">
                                    <a className="elementor-sub-item">Video</a>
                                  </Link>
                                </li>
                                <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-884">
                                  <Link href="/faq">
                                    <a className="elementor-sub-item">Faq</a>
                                  </Link>
                                </li>
                              </ul>
                            </li>
                            <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-717">
                              <Link href="/ve-chung-toi">
                                <a className="elementor-item">Về chúng tôi</a>
                              </Link>
                            </li>
                            <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-718">
                              <Link href="/y-kien-khach-hang">
                                <a className="elementor-item">
                                  Ý kiến khách hàng
                                </a>
                              </Link>
                            </li>
                          </ul>
                        </nav>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="elementor-column elementor-col-66 elementor-top-column elementor-element elementor-element-831c070">
                <div className="elementor-column-wrap elementor-element-populated">
                  <div className="elementor-widget-wrap">
                    <div className="elementor-element elementor-element-081392e elementor-widget elementor-widget-theme-site-title elementor-widget-heading">
                      <div className="elementor-widget-container">
                        <h1 className="elementor-heading-title elementor-size-default">
                          <Link href="/">
                            <a>LuVin Gourmet</a>
                          </Link>
                        </h1>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="elementor-column elementor-col-16 elementor-top-column elementor-element elementor-element-7cba798">
                <div className="elementor-column-wrap elementor-element-populated">
                  <div className="elementor-widget-wrap">
                    <section className="elementor-section elementor-inner-section elementor-element elementor-element-c4ada8e elementor-section-content-middle elementor-section-boxed elementor-section-height-default elementor-section-height-default">
                      <div className="elementor-container elementor-column-gap-no">
                        <div className="elementor-row">
                          <div className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-65e8073">
                            <div className="elementor-column-wrap elementor-element-populated">
                              <div className="elementor-widget-wrap">
                                <div className="elementor-element elementor-element-9b56687 elementor-view-default elementor-widget elementor-widget-icon">
                                  <div className="elementor-widget-container">
                                    <div className="elementor-icon-wrapper">
                                      <Link href="/tai-khoan">
                                        <a className="elementor-icon">
                                          <i
                                            aria-hidden="true"
                                            className="far fa-user-circle"
                                          ></i>
                                        </a>
                                      </Link>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-38f65ed">
                            <div className="elementor-column-wrap elementor-element-populated">
                              <div className="elementor-widget-wrap">
                                <div className="elementor-element elementor-element-39d530e toggle-icon--cart-solid cartsider elementor-menu-cart--items-indicator-bubble elementor-menu-cart--show-divider-yes elementor-menu-cart--show-remove-button-yes elementor-menu-cart--buttons-inline elementor-widget elementor-widget-woocommerce-menu-cart">
                                  <div className="elementor-widget-container">
                                    <div className="elementor-menu-cart__wrapper">
                                      <div
                                        className={`elementor-menu-cart__container elementor-lightbox ${
                                          openCartMenu &&
                                          "elementor-menu-cart--shown"
                                        }`}
                                        onClick={(event) => {
                                          if (
                                            event.target !==
                                            document.getElementById(
                                              "close-button"
                                            )
                                          ) {
                                            dispatch(toggleCartMenu());
                                          }
                                        }}
                                      >
                                        <div
                                          className="elementor-menu-cart__main"
                                          aria-expanded="false"
                                        >
                                          <div
                                            id="close-button"
                                            className="elementor-menu-cart__close-button"
                                            onClick={() =>
                                              dispatch(toggleCartMenu())
                                            }
                                          ></div>
                                          {!!products.length ? (
                                            <div className="widget_shopping_cart_content">
                                              {products.map(
                                                (
                                                  { amount, product = {} },
                                                  index
                                                ) => {
                                                  return (
                                                    <div
                                                      className="elementor-menu-cart__products woocommerce-mini-cart cart woocommerce-cart-form__contents"
                                                      key={index}
                                                    >
                                                      <div className="elementor-menu-cart__product woocommerce-cart-form__cart-item cart_item">
                                                        <div className="elementor-menu-cart__product-image product-thumbnail">
                                                          <a>
                                                            <img
                                                              width="300"
                                                              height="360"
                                                              src={
                                                                (product.images ||
                                                                  [])[0]
                                                              }
                                                              className="attachment-woocommerce_thumbnail size-woocommerce_thumbnail"
                                                              alt=""
                                                              loading="lazy"
                                                            />
                                                          </a>
                                                        </div>

                                                        <div
                                                          className="elementor-menu-cart__product-name product-name"
                                                          data-title="Product"
                                                        >
                                                          <a>{product.name}</a>
                                                        </div>

                                                        <div
                                                          className="elementor-menu-cart__product-price product-price"
                                                          data-title="Price"
                                                        >
                                                          <span className="quantity">
                                                            {amount} ×{" "}
                                                            <span className="woocommerce-Price-amount amount">
                                                              <bdi>
                                                                {numeral(
                                                                  (product.price ||
                                                                    0) -
                                                                    (product.discount ||
                                                                      0)
                                                                ).format("0,0")}
                                                                <span className="woocommerce-Price-currencySymbol">
                                                                  ₫
                                                                </span>
                                                              </bdi>
                                                            </span>
                                                          </span>{" "}
                                                        </div>

                                                        <div className="elementor-menu-cart__product-remove product-remove">
                                                          <a
                                                            onClick={() =>
                                                              dispatch(
                                                                removeProduct(
                                                                  index
                                                                )
                                                              )
                                                            }
                                                            aria-label="Remove this item"
                                                            data-product_sku="woo-album"
                                                          ></a>
                                                        </div>
                                                      </div>
                                                    </div>
                                                  );
                                                }
                                              )}

                                              <div className="elementor-menu-cart__subtotal">
                                                <strong>Tạm tính:</strong>{" "}
                                                <span className="woocommerce-Price-amount amount">
                                                  <bdi>
                                                    {numeral(
                                                      sum(
                                                        products.map(
                                                          ({
                                                            amount,
                                                            product = {},
                                                          }) => {
                                                            const realPrice =
                                                              amount *
                                                              ((product.price ||
                                                                0) -
                                                                (product.discount ||
                                                                  0));
                                                            return realPrice;
                                                          }
                                                        )
                                                      )
                                                    ).format("0,0")}
                                                    <span className="woocommerce-Price-currencySymbol">
                                                      ₫
                                                    </span>
                                                  </bdi>
                                                </span>{" "}
                                              </div>
                                              <div className="elementor-menu-cart__footer-buttons">
                                                <Link href="/gio-hang">
                                                  <a className="elementor-button elementor-button--view-cart elementor-size-md">
                                                    <span className="elementor-button-text">
                                                      Xem giỏ hàng
                                                    </span>
                                                  </a>
                                                </Link>
                                                <Link href="/thanh-toan">
                                                  <a className="elementor-button elementor-button--checkout elementor-size-md">
                                                    <span className="elementor-button-text">
                                                      Thanh toán
                                                    </span>
                                                  </a>
                                                </Link>
                                              </div>
                                            </div>
                                          ) : (
                                            "Chưa có sản phẩm nào trong giỏ hàng"
                                          )}
                                        </div>
                                      </div>
                                      <div className="elementor-menu-cart__toggle elementor-button-wrapper">
                                        <a
                                          id="elementor-menu-cart__toggle_button"
                                          className="elementor-button elementor-size-sm"
                                          onClick={() =>
                                            dispatch(toggleCartMenu())
                                          }
                                        >
                                          <span className="elementor-button-text">
                                            <span className="woocommerce-Price-amount amount">
                                              <bdi>
                                                {sum(
                                                  products.map(
                                                    ({ amount }) => amount
                                                  )
                                                )}
                                                <span className="woocommerce-Price-currencySymbol">
                                                  &#8363;
                                                </span>
                                              </bdi>
                                            </span>
                                          </span>
                                          <span
                                            className="elementor-button-icon"
                                            data-counter={sum(
                                              products.map(
                                                ({ amount }) => amount
                                              )
                                            )}
                                          >
                                            <i
                                              className="eicon"
                                              aria-hidden="true"
                                            ></i>
                                            <span className="elementor-screen-only">
                                              Cart
                                            </span>
                                          </span>
                                        </a>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </section>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="elementor-section elementor-top-section elementor-element elementor-element-5c400ae elementor-hidden-tablet elementor-hidden-phone elementor-section-content-middle elementor-section-boxed elementor-section-height-default elementor-section-height-default">
          <div className="elementor-container elementor-column-gap-no">
            <div className="elementor-row">
              <div className="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-d20e4e0">
                <div className="elementor-column-wrap elementor-element-populated">
                  <div className="elementor-widget-wrap">
                    <div className="elementor-element elementor-element-58acc29 elementor-nav-menu__align-left elementor-nav-menu--stretch elementor-nav-menu--indicator-angle header-menu elementor-nav-menu--dropdown-tablet elementor-nav-menu__text-align-aside elementor-nav-menu--toggle elementor-nav-menu--burger elementor-widget elementor-widget-nav-menu">
                      <div className="elementor-widget-container">
                        <nav
                          role="navigation"
                          className="elementor-nav-menu--main elementor-nav-menu__container elementor-nav-menu--layout-horizontal e--pointer-none"
                        >
                          <ul
                            id="menu-1-58acc29"
                            className="elementor-nav-menu"
                          >
                            <li className="menu-reset-left menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-377">
                              <Link href="/shop">
                                <a className="elementor-item has-submenu">
                                  Sản phẩm
                                  <span className="sub-arrow">
                                    <i className="fa"></i>
                                  </span>
                                </a>
                              </Link>
                              <ul className="sub-menu elementor-nav-menu--dropdown">
                                {categories.map(({ name, slug, ident }) => (
                                  <li
                                    className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-378"
                                    key={ident}
                                  >
                                    <Link href="/[category]" as={`/${slug}`}>
                                      <a className="elementor-sub-item">
                                        {name}
                                      </a>
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </li>
                            <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-28">
                              <Link href="/tasty">
                                <a className="elementor-item">Tasty</a>
                              </Link>
                            </li>
                            <li className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-29">
                              <Link href="/su-kien">
                                <a className="elementor-item">Sự kiện</a>
                              </Link>
                            </li>
                            <li className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-has-children menu-item-356">
                              <Link href="/tin-tuc">
                                <a className="elementor-item has-submenu">
                                  Blog
                                  <span className="sub-arrow">
                                    <i className="fa"></i>
                                  </span>
                                </a>
                              </Link>
                              <ul className="sub-menu elementor-nav-menu--dropdown">
                                <li className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-385">
                                  <Link href="/tin-tuc">
                                    <a className="elementor-sub-item">
                                      Tin tức
                                    </a>
                                  </Link>
                                </li>
                                <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-445">
                                  <Link href="/video">
                                    <a className="elementor-sub-item">Video</a>
                                  </Link>
                                </li>
                                <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-883">
                                  <Link href="/faq">
                                    <a className="elementor-sub-item">Faq</a>
                                  </Link>
                                </li>
                              </ul>
                            </li>
                            <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-30">
                              <Link href="/ve-chung-toi">
                                <a className="elementor-item">Về chúng tôi</a>
                              </Link>
                            </li>
                          </ul>
                        </nav>
                        <div
                          className="elementor-menu-toggle"
                          role="button"
                          tabIndex="0"
                          aria-label="Menu Toggle"
                          aria-expanded="false"
                        >
                          <i className="eicon-menu-bar" aria-hidden="true"></i>
                          <span className="elementor-screen-only">Menu</span>
                        </div>
                        <nav
                          className="elementor-nav-menu--dropdown elementor-nav-menu__container"
                          role="navigation"
                          aria-hidden="true"
                        >
                          <ul
                            id="menu-2-58acc29"
                            className="elementor-nav-menu"
                          >
                            <li className="menu-reset-left menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-377">
                              <Link href="/shop">
                                <a className="elementor-item has-submenu">
                                  Sản phẩm
                                  <span className="sub-arrow">
                                    <i className="fa"></i>
                                  </span>
                                </a>
                              </Link>
                              <ul className="sub-menu elementor-nav-menu--dropdown">
                                {categories.map(({ name, slug, ident }) => (
                                  <li
                                    className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-378"
                                    key={ident}
                                  >
                                    <Link href="/[category]" as={`/${slug}`}>
                                      <a className="elementor-sub-item">
                                        {name}
                                      </a>
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </li>
                            <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-28">
                              <Link href="/tasty">
                                <a className="elementor-item">Tasty</a>
                              </Link>
                            </li>
                            <li className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-29">
                              <Link href="/su-kien">
                                <a className="elementor-item">Sự kiện</a>
                              </Link>
                            </li>
                            <li className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-has-children menu-item-356">
                              <Link href="/tin-tuc">
                                <a className="elementor-item has-submenu">
                                  Blog
                                  <span className="sub-arrow">
                                    <i className="fa"></i>
                                  </span>
                                </a>
                              </Link>
                              <ul className="sub-menu elementor-nav-menu--dropdown">
                                <li className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-385">
                                  <Link href="/tin-tuc">
                                    <a className="elementor-sub-item">
                                      Tin tức
                                    </a>
                                  </Link>
                                </li>
                                <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-445">
                                  <Link href="/video">
                                    <a className="elementor-sub-item">Video</a>
                                  </Link>
                                </li>
                                <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-883">
                                  <Link href="/faq">
                                    <a className="elementor-sub-item">Faq</a>
                                  </Link>
                                </li>
                              </ul>
                            </li>
                            <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-30">
                              <Link href="/ve-chung-toi">
                                <a className="elementor-item">Về chúng tôi</a>
                              </Link>
                            </li>
                          </ul>
                        </nav>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-1171155">
                <div className="elementor-column-wrap elementor-element-populated">
                  <div className="elementor-widget-wrap">
                    <div className="elementor-element elementor-element-f745f44 header-search elementor-widget elementor-widget-wp-widget-woocommerce_product_search">
                      <div className="elementor-widget-container">
                        <div className="woocommerce widget_product_search">
                          <form
                            role="search"
                            className="woocommerce-product-search"
                            onSubmit={handleSearch}
                          >
                            <label
                              className="screen-reader-text"
                              htmlFor="woocommerce-product-search-field-0"
                            >
                              Tìm kiếm:
                            </label>
                            <input
                              type="search"
                              id="woocommerce-product-search-field-0"
                              className="search-field"
                              placeholder="Tìm sản phẩm&hellip;"
                              value={searchValue}
                              onChange={(event) =>
                                setSearchValue(event.target.value)
                              }
                              name="s"
                            />
                            <button type="submit" value="Tìm kiếm">
                              Tìm kiếm
                            </button>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

Header.propTypes = {};

export default Header;
