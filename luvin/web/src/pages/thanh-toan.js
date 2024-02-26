import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Link from "next/link";
import Head from "next/head";
import { useSelector, useDispatch } from "react-redux";
import numeral from "numeral";
import sum from "lodash/sum";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";

import Content from "../components/Layout/Content";
import Loading from "../components/UI/Loading";

import { login as loginAction } from "../actions/auth";
import {
  createOrder,
  redeemVoucher as redeemVoucherAction,
} from "../actions/order";

import cities from "../constants/cities";

const cartStateSelector = (state) => state.cart;
const authStateSelector = (state) => state.auth;
const orderStateSelector = (state) => state.order;

const regexp = /^[0-9\b]+$/;

function Checkout(props) {
  const dispatch = useDispatch();
  const { products } = useSelector(cartStateSelector);
  const { userInfo, login, register } = useSelector(authStateSelector);
  const {
    loading,
    success,
    fetched,
    errorMessage,
    redeemVoucher,
  } = useSelector(orderStateSelector);

  const [state, setState] = useState({
    expandedLogin: false,
    expandedVoucher: false,
    paymentMethod: "cod",
    openLoginModal: false,
    openErrorModal: false,
    loginInfo: {
      phone: "",
      password: "",
    },
    orderInfo: {
      name: "",
      address: "",
      city: "",
      phone: "",
      email: "",
      note: "",
    },
    voucherCode: "",
  });

  useEffect(() => {
    if (fetched && errorMessage) {
      setState({ ...state, openErrorModal: true });
    }
  }, [fetched, errorMessage]);

  useEffect(() => {
    if (userInfo._id) {
      setState({
        ...state,
        openLoginModal: false,
        orderInfo: {
          ...state.orderInfo,
          name: userInfo.name,
          address: userInfo.address || "",
          phone: userInfo.phone,
          email: userInfo.email || "",
        },
      });
    }
  }, [userInfo]);

  const handleChangeLoginInfo = (prop, value) => {
    setState({
      ...state,
      loginInfo: {
        ...state.loginInfo,
        [prop]: value,
      },
    });
  };

  const handleLogin = (event) => {
    event.preventDefault();
    dispatch(loginAction(state.loginInfo.phone, state.loginInfo.password));
  };

  const handleChangeOrderInfo = (prop, value) => {
    setState({
      ...state,
      orderInfo: {
        ...state.orderInfo,
        [prop]: value,
      },
    });
  };

  const handleOrder = (event) => {
    event.preventDefault();
    if (!userInfo._id) {
      setState({
        ...state,
        openLoginModal: true,
      });
      return;
    }
    const _products = {};
    products.map(({ amount, product }) => {
      _products[product.ident] = amount;
    });

    dispatch(
      createOrder({
        ...state.orderInfo,
        paymentMethod: state.paymentMethod,
        products: _products,
        voucher: redeemVoucher.voucherData._id,
      })
    );
  };

  const handleRedeemVoucher = (event) => {
    event.preventDefault();
    dispatch(redeemVoucherAction(state.voucherCode));
  };

  return (
    <Content className="page-template-default page page-id-9 wp-custom-logo theme-hello-elementor woocommerce-checkout woocommerce-page woocommerce-no-js elementor-default elementor-kit-76 eael-woo-checkout">
      <style id="elementor-frontend-inline-css" type="text/css">
        {`
          .elementor-kit-76 {
        --e-global-color-primary: #0f0f0f;
        --e-global-color-secondary: #3f3f3f;
        --e-global-color-text: #2f2f2f;
        --e-global-color-accent: #61ce70;
        --e-global-typography-primary-font-weight: 600;
        --e-global-typography-secondary-font-weight: 400;
        --e-global-typography-text-font-weight: 400;
        --e-global-typography-accent-font-weight: 500;
        font-size: 15px;
        line-height: 1.4em;
      }
      .elementor-kit-76 a {
        color: var(--e-global-color-primary);
      }
      .elementor-kit-76 a:hover {
        color: var(--e-global-color-text);
      }
      .elementor-kit-76 h1 {
        color: var(--e-global-color-text);
        font-family: "Arial", Sans-serif;
        font-size: 36px;
      }
      .elementor-kit-76 h2 {
        color: var(--e-global-color-text);
        font-family: "Arial", Sans-serif;
        font-size: 32px;
      }
      .elementor-kit-76 h3 {
        color: var(--e-global-color-text);
        font-family: "Arial", Sans-serif;
        font-size: 28px;
      }
      .elementor-kit-76 h4 {
        color: var(--e-global-color-text);
        font-family: "Arial", Sans-serif;
        font-size: 25px;
      }
      .elementor-kit-76 h5 {
        color: var(--e-global-color-text);
        font-family: "Tahoma", Sans-serif;
        font-size: 23px;
      }
      .elementor-section.elementor-section-boxed > .elementor-container {
        max-width: 1140px;
      }
      .elementor-widget:not(:last-child) {
        margin-bottom: 20px;
      }
      
      h1.entry-title {
        display: var(--page-title-display);
      }
      @media (max-width: 1024px) {
        .elementor-section.elementor-section-boxed > .elementor-container {
          max-width: 1025px;
        }
      }
      @media (max-width: 767px) {
        .elementor-section.elementor-section-boxed > .elementor-container {
          max-width: 768px;
        }
      }
      .elementor-78
        .elementor-element.elementor-element-3cf488a
        > .elementor-container {
        min-height: 100px;
      }
      .elementor-78
        .elementor-element.elementor-element-3cf488a
        > .elementor-container:after {
        content: "";
        min-height: inherit;
      }
      .elementor-78
        .elementor-element.elementor-element-3cf488a
        > .elementor-container
        > .elementor-row
        > .elementor-column
        > .elementor-column-wrap
        > .elementor-widget-wrap {
        align-content: center;
        align-items: center;
      }
      .elementor-78
        .elementor-element.elementor-element-3cf488a:not(.elementor-motion-effects-element-type-background),
      .elementor-78
        .elementor-element.elementor-element-3cf488a
        > .elementor-motion-effects-container
        > .elementor-motion-effects-layer {
        background-color: #ffffff;
      }
      .elementor-78 .elementor-element.elementor-element-3cf488a {
        transition: background 0.3s, border 0.3s, border-radius 0.3s,
          box-shadow 0.3s;
      }
      .elementor-78
        .elementor-element.elementor-element-3cf488a
        > .elementor-background-overlay {
        transition: background 0.3s, border-radius 0.3s, opacity 0.3s;
      }
      .elementor-78
        .elementor-element.elementor-element-3bd1853
        > .elementor-column-wrap
        > .elementor-widget-wrap
        > .elementor-widget:not(.elementor-widget__width-auto):not(.elementor-widget__width-initial):not(:last-child):not(.elementor-absolute) {
        margin-bottom: 0px;
      }
      .elementor-78
        .elementor-element.elementor-element-3bd1853
        > .elementor-element-populated {
        padding: 0px 0px 0px 0px;
      }
      .elementor-78
        .elementor-element.elementor-element-9f109fa
        .elementor-menu-toggle {
        margin: 0 auto;
      }
      .elementor-78
        .elementor-element.elementor-element-9f109fa
        .elementor-nav-menu
        .elementor-item {
        font-size: 14px;
      }
      .elementor-78
        .elementor-element.elementor-element-9f109fa
        .elementor-nav-menu--main
        .elementor-item {
        color: #0f0f0f;
        padding-left: 10px;
        padding-right: 10px;
      }
      .elementor-78
        .elementor-element.elementor-element-ad94921
        .elementor-menu-toggle {
        margin-right: auto;
      }
      .elementor-78
        .elementor-element.elementor-element-ad94921
        .elementor-nav-menu
        .elementor-item {
        font-size: 14px;
      }
      .elementor-78
        .elementor-element.elementor-element-ad94921
        .elementor-nav-menu--main
        .elementor-item {
        color: #0f0f0f;
      }
      .elementor-78
        .elementor-element.elementor-element-ad94921
        .elementor-nav-menu--dropdown
        a,
      .elementor-78
        .elementor-element.elementor-element-ad94921
        .elementor-menu-toggle {
        color: #ffffff;
      }
      .elementor-78
        .elementor-element.elementor-element-ad94921
        .elementor-nav-menu--dropdown {
        background-color: #711a27;
      }
      .elementor-78
        .elementor-element.elementor-element-ad94921
        .elementor-nav-menu--dropdown
        a:hover,
      .elementor-78
        .elementor-element.elementor-element-ad94921
        .elementor-nav-menu--dropdown
        a.elementor-item-active,
      .elementor-78
        .elementor-element.elementor-element-ad94921
        .elementor-nav-menu--dropdown
        a.highlighted {
        background-color: #902535;
      }
      .elementor-78
        .elementor-element.elementor-element-ad94921
        .elementor-nav-menu--dropdown
        a.elementor-item-active {
        background-color: #902535;
      }
      .elementor-78
        .elementor-element.elementor-element-ad94921
        div.elementor-menu-toggle {
        color: #0f0f0f;
      }
      .elementor-78 .elementor-element.elementor-element-081392e {
        text-align: center;
      }
      .elementor-78
        .elementor-element.elementor-element-081392e
        .elementor-heading-title {
        color: #902535;
        font-family: "UTM Roman Classic", Sans-serif;
      }
      .elementor-78
        .elementor-element.elementor-element-7cba798.elementor-column
        > .elementor-column-wrap
        > .elementor-widget-wrap {
        justify-content: flex-end;
      }
      .elementor-78
        .elementor-element.elementor-element-7cba798
        > .elementor-column-wrap
        > .elementor-widget-wrap
        > .elementor-widget:not(.elementor-widget__width-auto):not(.elementor-widget__width-initial):not(:last-child):not(.elementor-absolute) {
        margin-bottom: 0px;
      }
      .elementor-78
        .elementor-element.elementor-element-7cba798
        > .elementor-element-populated {
        padding: 0px 0px 0px 0px;
      }
      .elementor-78
        .elementor-element.elementor-element-c4ada8e
        > .elementor-container
        > .elementor-row
        > .elementor-column
        > .elementor-column-wrap
        > .elementor-widget-wrap {
        align-content: center;
        align-items: center;
      }
      .elementor-78
        .elementor-element.elementor-element-65e8073.elementor-column
        > .elementor-column-wrap
        > .elementor-widget-wrap {
        justify-content: flex-end;
      }
      .elementor-78
        .elementor-element.elementor-element-9b56687
        .elementor-icon-wrapper {
        text-align: right;
      }
      .elementor-78
        .elementor-element.elementor-element-9b56687.elementor-view-stacked
        .elementor-icon {
        background-color: #0f0f0f;
      }
      .elementor-78
        .elementor-element.elementor-element-9b56687.elementor-view-framed
        .elementor-icon,
      .elementor-78
        .elementor-element.elementor-element-9b56687.elementor-view-default
        .elementor-icon {
        color: #0f0f0f;
        border-color: #0f0f0f;
      }
      .elementor-78
        .elementor-element.elementor-element-9b56687.elementor-view-framed
        .elementor-icon,
      .elementor-78
        .elementor-element.elementor-element-9b56687.elementor-view-default
        .elementor-icon
        svg {
        fill: #0f0f0f;
      }
      .elementor-78
        .elementor-element.elementor-element-9b56687
        .elementor-icon {
        font-size: 20px;
      }
      .elementor-78
        .elementor-element.elementor-element-9b56687
        .elementor-icon
        i,
      .elementor-78
        .elementor-element.elementor-element-9b56687
        .elementor-icon
        svg {
        transform: rotate(0deg);
      }
      .elementor-bc-flex-widget
        .elementor-78
        .elementor-element.elementor-element-38f65ed.elementor-column
        .elementor-column-wrap {
        align-items: center;
      }
      .elementor-78
        .elementor-element.elementor-element-38f65ed.elementor-column.elementor-element[data-element_type="column"]
        > .elementor-column-wrap.elementor-element-populated
        > .elementor-widget-wrap {
        align-content: center;
        align-items: center;
      }
      .elementor-78
        .elementor-element.elementor-element-38f65ed.elementor-column
        > .elementor-column-wrap
        > .elementor-widget-wrap {
        justify-content: flex-end;
      }
      .elementor-78
        .elementor-element.elementor-element-39d530e
        .elementor-menu-cart__toggle {
        text-align: center;
      }
      .elementor-78
        .elementor-element.elementor-element-39d530e
        .elementor-menu-cart__toggle
        .elementor-button {
        color: #0f0f0f;
        border-width: 0px;
        padding: 0px 0px 0px 0px;
      }
      .elementor-78
        .elementor-element.elementor-element-39d530e
        .elementor-menu-cart__toggle
        .elementor-button-icon {
        color: #0f0f0f;
        font-size: 20px;
      }
      .elementor-78
        .elementor-element.elementor-element-39d530e
        .elementor-menu-cart__subtotal {
        font-size: 16px;
        font-weight: 400;
      }
      .elementor-78
        .elementor-element.elementor-element-39d530e
        .elementor-menu-cart__product-name,
      .elementor-78
        .elementor-element.elementor-element-39d530e
        .elementor-menu-cart__product-name
        a {
        color: #0f0f0f;
      }
      .elementor-78
        .elementor-element.elementor-element-39d530e
        .elementor-menu-cart__product-price {
        color: #0f0f0f;
      }
      .elementor-78
        .elementor-element.elementor-element-39d530e
        .elementor-menu-cart__footer-buttons {
        grid-column-gap: 8px;
        grid-row-gap: 8px;
      }
      .elementor-78
        .elementor-element.elementor-element-39d530e
        .elementor-button--view-cart {
        color: #902535;
        background-color: #ffffff;
        border-style: solid;
        border-width: 1px 1px 1px 1px;
        border-color: #902535;
      }
      .elementor-78
        .elementor-element.elementor-element-39d530e
        .elementor-button--checkout {
        color: #ffffff;
        background-color: #902535;
        border-style: solid;
        border-width: 1px 1px 1px 1px;
        border-color: #902535;
      }
      .elementor-78
        .elementor-element.elementor-element-5c400ae
        > .elementor-container
        > .elementor-row
        > .elementor-column
        > .elementor-column-wrap
        > .elementor-widget-wrap {
        align-content: center;
        align-items: center;
      }
      .elementor-78
        .elementor-element.elementor-element-5c400ae:not(.elementor-motion-effects-element-type-background),
      .elementor-78
        .elementor-element.elementor-element-5c400ae
        > .elementor-motion-effects-container
        > .elementor-motion-effects-layer {
        background-color: #ffffff;
      }
      .elementor-78 .elementor-element.elementor-element-5c400ae {
        border-style: solid;
        border-width: 0px 0px 2px 0px;
        border-color: #f0f0f0;
        transition: background 0.3s, border 0.3s, border-radius 0.3s,
          box-shadow 0.3s;
        padding: 0px 0px 10px 0px;
      }
      .elementor-78
        .elementor-element.elementor-element-5c400ae
        > .elementor-background-overlay {
        transition: background 0.3s, border-radius 0.3s, opacity 0.3s;
      }
      .elementor-78
        .elementor-element.elementor-element-58acc29
        .elementor-menu-toggle {
        margin-left: auto;
      }
      .elementor-78
        .elementor-element.elementor-element-58acc29
        .elementor-nav-menu
        .elementor-item {
        font-size: 16px;
        font-weight: 400;
        text-transform: uppercase;
      }
      .elementor-78
        .elementor-element.elementor-element-58acc29
        .elementor-nav-menu--main
        .elementor-item {
        color: #0f0f0f;
        padding-top: 10px;
        padding-bottom: 10px;
      }
      .elementor-78
        .elementor-element.elementor-element-58acc29
        .elementor-nav-menu--main
        .elementor-item:hover,
      .elementor-78
        .elementor-element.elementor-element-58acc29
        .elementor-nav-menu--main
        .elementor-item.elementor-item-active,
      .elementor-78
        .elementor-element.elementor-element-58acc29
        .elementor-nav-menu--main
        .elementor-item.highlighted,
      .elementor-78
        .elementor-element.elementor-element-58acc29
        .elementor-nav-menu--main
        .elementor-item:focus {
        color: #000000;
      }
      body:not(.rtl)
        .elementor-78
        .elementor-element.elementor-element-58acc29
        .elementor-nav-menu--layout-horizontal
        .elementor-nav-menu
        > li:not(:last-child) {
        margin-right: 10px;
      }
      body.rtl
        .elementor-78
        .elementor-element.elementor-element-58acc29
        .elementor-nav-menu--layout-horizontal
        .elementor-nav-menu
        > li:not(:last-child) {
        margin-left: 10px;
      }
      .elementor-78
        .elementor-element.elementor-element-58acc29
        .elementor-nav-menu--main:not(.elementor-nav-menu--layout-horizontal)
        .elementor-nav-menu
        > li:not(:last-child) {
        margin-bottom: 10px;
      }
      .elementor-78
        .elementor-element.elementor-element-58acc29
        .elementor-nav-menu--dropdown
        a,
      .elementor-78
        .elementor-element.elementor-element-58acc29
        .elementor-menu-toggle {
        color: #0f0f0f;
      }
      .elementor-78
        .elementor-element.elementor-element-58acc29
        .elementor-nav-menu--dropdown {
        background-color: #f6f6f6;
      }
      .elementor-78
        .elementor-element.elementor-element-58acc29
        .elementor-nav-menu--dropdown
        a:hover,
      .elementor-78
        .elementor-element.elementor-element-58acc29
        .elementor-nav-menu--dropdown
        a.elementor-item-active,
      .elementor-78
        .elementor-element.elementor-element-58acc29
        .elementor-nav-menu--dropdown
        a.highlighted {
        background-color: #f0f0f0;
      }
      .elementor-78
        .elementor-element.elementor-element-58acc29
        .elementor-nav-menu--dropdown
        .elementor-item,
      .elementor-78
        .elementor-element.elementor-element-58acc29
        .elementor-nav-menu--dropdown
        .elementor-sub-item {
        text-transform: uppercase;
      }
      .elementor-78
        .elementor-element.elementor-element-58acc29
        .elementor-nav-menu--dropdown
        a {
        padding-left: 10px;
        padding-right: 10px;
        padding-top: 9px;
        padding-bottom: 9px;
      }
      .elementor-78
        .elementor-element.elementor-element-1171155.elementor-column
        > .elementor-column-wrap
        > .elementor-widget-wrap {
        justify-content: flex-end;
      }
      @media (max-width: 1024px) {
        .elementor-78 .elementor-element.elementor-element-ad94921 {
          z-index: 299;
        }
      }
      @media (max-width: 767px) {
        .elementor-78
          .elementor-element.elementor-element-3cf488a
          > .elementor-container {
          min-height: 125px;
        }
        .elementor-78
          .elementor-element.elementor-element-3cf488a
          > .elementor-container:after {
          content: "";
          min-height: inherit;
        }
        .elementor-78 .elementor-element.elementor-element-3bd1853 {
          width: 15%;
        }
        .elementor-78
          .elementor-element.elementor-element-3bd1853
          > .elementor-column-wrap
          > .elementor-widget-wrap
          > .elementor-widget:not(.elementor-widget__width-auto):not(.elementor-widget__width-initial):not(:last-child):not(.elementor-absolute) {
          margin-bottom: 0px;
        }
        .elementor-78
          .elementor-element.elementor-element-ad94921
          .elementor-nav-menu--dropdown
          .elementor-item,
        .elementor-78
          .elementor-element.elementor-element-ad94921
          .elementor-nav-menu--dropdown
          .elementor-sub-item {
          font-size: 16px;
        }
        .elementor-78
          .elementor-element.elementor-element-ad94921
          .elementor-nav-menu--dropdown
          a {
          padding-top: 10px;
          padding-bottom: 10px;
        }
        .elementor-78
          .elementor-element.elementor-element-ad94921
          > .elementor-widget-container {
          padding: 0px 0px 0px 10px;
        }
        .elementor-78 .elementor-element.elementor-element-ad94921 {
          z-index: 1999;
        }
        .elementor-78 .elementor-element.elementor-element-831c070 {
          width: 65%;
        }
        .elementor-78 .elementor-element.elementor-element-081392e {
          text-align: center;
        }
        .elementor-78
          .elementor-element.elementor-element-081392e
          .elementor-heading-title {
          font-size: 21px;
        }
        .elementor-78 .elementor-element.elementor-element-7cba798 {
          width: 20%;
        }
        .elementor-78 .elementor-element.elementor-element-65e8073 {
          width: 50%;
        }
        .elementor-78 .elementor-element.elementor-element-38f65ed {
          width: 50%;
        }
      }
      @media (min-width: 768px) {
        .elementor-78 .elementor-element.elementor-element-3bd1853 {
          width: 30%;
        }
        .elementor-78 .elementor-element.elementor-element-831c070 {
          width: 40%;
        }
        .elementor-78 .elementor-element.elementor-element-7cba798 {
          width: 28.665%;
        }
        .elementor-78 .elementor-element.elementor-element-65e8073 {
          width: 84.845%;
        }
        .elementor-78 .elementor-element.elementor-element-38f65ed {
          width: 15%;
        }
        .elementor-78 .elementor-element.elementor-element-d20e4e0 {
          width: 64.956%;
        }
        .elementor-78 .elementor-element.elementor-element-1171155 {
          width: 35%;
        }
      } /* Start custom CSS for woocommerce-menu-cart, class: .elementor-element-39d530e */
      .cartsider .elementor-button.elementor-size-md {
        padding: 10px !important;
      } /* End custom CSS */
      /* Start Custom Fonts CSS */
      @font-face {
        font-family: "UTM Roman Classic";
        font-style: normal;
        font-weight: normal;
        font-display: auto;
        src: url("../wp-content/uploads/UTM-Roman-Classic.ttf")
          format("truetype");
      }
      /* End Custom Fonts CSS */
      .elementor-115
        .elementor-element.elementor-element-cf0268f:not(.elementor-motion-effects-element-type-background),
      .elementor-115
        .elementor-element.elementor-element-cf0268f
        > .elementor-motion-effects-container
        > .elementor-motion-effects-layer {
        background-color: #000000;
      }
      .elementor-115 .elementor-element.elementor-element-cf0268f {
        transition: background 0.3s, border 0.3s, border-radius 0.3s,
          box-shadow 0.3s;
        padding: 50px 0px 50px 0px;
      }
      .elementor-115
        .elementor-element.elementor-element-cf0268f
        > .elementor-background-overlay {
        transition: background 0.3s, border-radius 0.3s, opacity 0.3s;
      }
      .elementor-bc-flex-widget
        .elementor-115
        .elementor-element.elementor-element-a8e0fab.elementor-column
        .elementor-column-wrap {
        align-items: space-evenly;
      }
      .elementor-115
        .elementor-element.elementor-element-a8e0fab.elementor-column.elementor-element[data-element_type="column"]
        > .elementor-column-wrap.elementor-element-populated
        > .elementor-widget-wrap {
        align-content: space-evenly;
        align-items: space-evenly;
      }
      .elementor-115
        .elementor-element.elementor-element-ca7c6ee
        .elementor-nav-menu--main
        .elementor-item {
        color: #fcfcfc;
        padding-left: 0px;
        padding-right: 0px;
        padding-top: 3px;
        padding-bottom: 3px;
      }
      body:not(.rtl)
        .elementor-115
        .elementor-element.elementor-element-ca7c6ee
        .elementor-nav-menu--layout-horizontal
        .elementor-nav-menu
        > li:not(:last-child) {
        margin-right: 5px;
      }
      body.rtl
        .elementor-115
        .elementor-element.elementor-element-ca7c6ee
        .elementor-nav-menu--layout-horizontal
        .elementor-nav-menu
        > li:not(:last-child) {
        margin-left: 5px;
      }
      .elementor-115
        .elementor-element.elementor-element-ca7c6ee
        .elementor-nav-menu--main:not(.elementor-nav-menu--layout-horizontal)
        .elementor-nav-menu
        > li:not(:last-child) {
        margin-bottom: 5px;
      }
      .elementor-115
        .elementor-element.elementor-element-ca7c6ee
        .elementor-nav-menu--dropdown
        a,
      .elementor-115
        .elementor-element.elementor-element-ca7c6ee
        .elementor-menu-toggle {
        color: #ffffff;
      }
      .elementor-115
        .elementor-element.elementor-element-ca7c6ee
        .elementor-nav-menu--dropdown {
        background-color: #000000;
      }
      .elementor-115 .elementor-element.elementor-element-f5e10b4 {
        --divider-border-style: solid;
        --divider-color: #f0f0f0;
        --divider-border-width: 1px;
      }
      .elementor-115
        .elementor-element.elementor-element-f5e10b4
        .elementor-divider-separator {
        width: 72%;
        margin: 0 auto;
        margin-left: 0;
      }
      .elementor-115
        .elementor-element.elementor-element-f5e10b4
        .elementor-divider {
        text-align: left;
        padding-top: 15px;
        padding-bottom: 15px;
      }
      .elementor-115
        .elementor-element.elementor-element-91c28d5
        .elementor-icon-list-icon
        i {
        color: #e9e9e9;
        font-size: 14px;
      }
      .elementor-115
        .elementor-element.elementor-element-91c28d5
        .elementor-icon-list-icon
        svg {
        fill: #e9e9e9;
        width: 14px;
      }
      .elementor-115
        .elementor-element.elementor-element-91c28d5
        .elementor-icon-list-item:hover
        .elementor-icon-list-icon
        i {
        color: #e9e9e9;
      }
      .elementor-115
        .elementor-element.elementor-element-91c28d5
        .elementor-icon-list-item:hover
        .elementor-icon-list-icon
        svg {
        fill: #e9e9e9;
      }
      .elementor-115
        .elementor-element.elementor-element-91c28d5
        .elementor-icon-list-text {
        color: #e9e9e9;
      }
      .elementor-bc-flex-widget
        .elementor-115
        .elementor-element.elementor-element-4767519.elementor-column
        .elementor-column-wrap {
        align-items: space-evenly;
      }
      .elementor-115
        .elementor-element.elementor-element-4767519.elementor-column.elementor-element[data-element_type="column"]
        > .elementor-column-wrap.elementor-element-populated
        > .elementor-widget-wrap {
        align-content: space-evenly;
        align-items: space-evenly;
      }
      .elementor-115
        .elementor-element.elementor-element-4767519
        > .elementor-element-populated {
        padding: 0px 0px 0px 40px;
      }
      .elementor-115
        .elementor-element.elementor-element-9c57137
        .elementor-heading-title {
        color: #ffffff;
        font-family: "UTM Roman Classic", Sans-serif;
        font-size: 18px;
      }
      .elementor-115
        .elementor-element.elementor-element-910bf8d
        .elementor-text-editor {
        columns: 1;
      }
      .elementor-115 .elementor-element.elementor-element-910bf8d {
        color: #ffffff;
        font-size: 14px;
      }
      .elementor-115 .elementor-element.elementor-element-6d34ef4 {
        --divider-border-style: solid;
        --divider-color: #f0f0f0;
        --divider-border-width: 1px;
      }
      .elementor-115
        .elementor-element.elementor-element-6d34ef4
        .elementor-divider-separator {
        width: 75%;
        margin: 0 auto;
        margin-left: 0;
      }
      .elementor-115
        .elementor-element.elementor-element-6d34ef4
        .elementor-divider {
        text-align: left;
        padding-top: 20px;
        padding-bottom: 20px;
      }
      .elementor-115
        .elementor-element.elementor-element-5b09c0f
        .elementor-icon-list-icon
        i {
        color: #ffffff;
        font-size: 14px;
      }
      .elementor-115
        .elementor-element.elementor-element-5b09c0f
        .elementor-icon-list-icon
        svg {
        fill: #ffffff;
        width: 14px;
      }
      .elementor-115
        .elementor-element.elementor-element-5b09c0f
        .elementor-icon-list-text {
        color: #ffffff;
      }
      .elementor-115
        .elementor-element.elementor-element-5b09c0f
        .elementor-icon-list-item,
      .elementor-115
        .elementor-element.elementor-element-5b09c0f
        .elementor-icon-list-item
        a {
        font-size: 14px;
      }
      .elementor-115 .elementor-element.elementor-element-a7a46ea {
        text-align: left;
      }
      .elementor-115
        .elementor-element.elementor-element-1c4289e
        > .elementor-container
        > .elementor-row
        > .elementor-column
        > .elementor-column-wrap
        > .elementor-widget-wrap {
        align-content: center;
        align-items: center;
      }
      .elementor-115
        .elementor-element.elementor-element-1c4289e:not(.elementor-motion-effects-element-type-background),
      .elementor-115
        .elementor-element.elementor-element-1c4289e
        > .elementor-motion-effects-container
        > .elementor-motion-effects-layer {
        background-color: #ffffff;
      }
      .elementor-115 .elementor-element.elementor-element-1c4289e {
        transition: background 0.3s, border 0.3s, border-radius 0.3s,
          box-shadow 0.3s;
      }
      .elementor-115
        .elementor-element.elementor-element-1c4289e
        > .elementor-background-overlay {
        transition: background 0.3s, border-radius 0.3s, opacity 0.3s;
      }
      .elementor-115 .elementor-element.elementor-element-794662a {
        text-align: left;
      }
      .elementor-115
        .elementor-element.elementor-element-794662a
        .elementor-heading-title {
        color: var(--e-global-color-primary);
      }
      .elementor-115 .elementor-element.elementor-element-c055d26 {
        text-align: right;
      }
      .elementor-115
        .elementor-element.elementor-element-c055d26
        .elementor-heading-title {
        color: #902535;
        font-family: "UTM Roman Classic", Sans-serif;
      }
      @media (min-width: 768px) {
        .elementor-115 .elementor-element.elementor-element-a8e0fab {
          width: 23%;
        }
        .elementor-115 .elementor-element.elementor-element-2201b28 {
          width: 48%;
        }
        .elementor-115 .elementor-element.elementor-element-4767519 {
          width: 29%;
        }
      }
      @media (max-width: 1024px) {
        .elementor-115
          .elementor-element.elementor-element-ca7c6ee
          .elementor-nav-menu--main
          .elementor-item {
          padding-left: 0px;
          padding-right: 0px;
          padding-top: 0px;
          padding-bottom: 0px;
        }
        body:not(.rtl)
          .elementor-115
          .elementor-element.elementor-element-ca7c6ee
          .elementor-nav-menu--layout-horizontal
          .elementor-nav-menu
          > li:not(:last-child) {
          margin-right: 0px;
        }
        body.rtl
          .elementor-115
          .elementor-element.elementor-element-ca7c6ee
          .elementor-nav-menu--layout-horizontal
          .elementor-nav-menu
          > li:not(:last-child) {
          margin-left: 0px;
        }
        .elementor-115
          .elementor-element.elementor-element-ca7c6ee
          .elementor-nav-menu--main:not(.elementor-nav-menu--layout-horizontal)
          .elementor-nav-menu
          > li:not(:last-child) {
          margin-bottom: 0px;
        }
        .elementor-115
          .elementor-element.elementor-element-ca7c6ee
          .elementor-nav-menu--dropdown
          a {
          padding-left: 0px;
          padding-right: 0px;
          padding-top: 3px;
          padding-bottom: 3px;
        }
        .elementor-115
          .elementor-element.elementor-element-4767519
          > .elementor-element-populated {
          padding: 0px 0px 0px 10px;
        }
      }
      @media (max-width: 767px) {
        .elementor-115
          .elementor-element.elementor-element-ca7c6ee
          > .elementor-widget-container {
          padding: 0px 0px 0px 40px;
        }
        .elementor-115 .elementor-element.elementor-element-ca7c6ee {
          width: 60%;
          max-width: 60%;
        }
        .elementor-115
          .elementor-element.elementor-element-f5e10b4
          .elementor-divider {
          text-align: center;
        }
        .elementor-115
          .elementor-element.elementor-element-f5e10b4
          .elementor-divider-separator {
          margin: 0 auto;
          margin-center: 0;
        }
        .elementor-115
          .elementor-element.elementor-element-91c28d5
          > .elementor-widget-container {
          padding: 5px 0px 0px 0px;
        }
        .elementor-115 .elementor-element.elementor-element-91c28d5 {
          width: 40%;
          max-width: 40%;
        }
        .elementor-115 .elementor-element.elementor-element-459073a {
          text-align: center;
        }
        .elementor-115
          .elementor-element.elementor-element-459073a
          > .elementor-widget-container {
          padding: 10px 0px 20px 0px;
        }
        .elementor-115
          .elementor-element.elementor-element-4767519
          > .elementor-element-populated {
          padding: 0px 20px 10px 20px;
        }
        .elementor-115
          .elementor-element.elementor-element-910bf8d
          .elementor-text-editor {
          text-align: left;
        }
        .elementor-115
          .elementor-element.elementor-element-6d34ef4
          .elementor-divider {
          text-align: center;
        }
        .elementor-115
          .elementor-element.elementor-element-6d34ef4
          .elementor-divider-separator {
          margin: 0 auto;
          margin-center: 0;
        }
        .elementor-115 .elementor-element.elementor-element-794662a {
          text-align: center;
        }
        .elementor-115 .elementor-element.elementor-element-c055d26 {
          text-align: center;
        }
        .elementor-115
          .elementor-element.elementor-element-c055d26
          .elementor-heading-title {
          font-size: 24px;
        }
      } /* Start custom CSS for text-editor, class: .elementor-element-910bf8d */
      .footer-oh p {
        margin-bottom: 0;
      }
      .footer-oh p span {
        float: right;
      } /* End custom CSS */
      /* Start Custom Fonts CSS */
      @font-face {
        font-family: "UTM Roman Classic";
        font-style: normal;
        font-weight: normal;
        font-display: auto;
        src: url("../wp-content/uploads/UTM-Roman-Classic.ttf")
          format("truetype");
      }
      /* End Custom Fonts CSS */
      .elementor-575 .elementor-element.elementor-element-7e33cd2 {
        text-align: center;
      }
      .elementor-575 .elementor-element.elementor-element-2fb750c {
        text-align: center;
      }
      .elementor-575 .elementor-element.elementor-element-ff972bc {
        text-align: center;
      }
      .elementor-575
        .elementor-element.elementor-element-ff972bc
        .elementor-heading-title {
        font-size: 16px;
      }
      .elementor-575
        .elementor-element.elementor-element-f5a567e
        .elementor-button {
        text-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);
        fill: #ffffff;
        color: #ffffff;
        background-color: #902535;
        border-style: solid;
        border-width: 1px 1px 1px 1px;
        border-color: #902535;
      }
      .elementor-575
        .elementor-element.elementor-element-ecf7768
        .elementor-button {
        text-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);
        fill: #111111;
        color: #111111;
        background-color: #ffffff;
        border-style: solid;
        border-width: 1px 1px 1px 1px;
        border-color: #dfdfdf;
      }
      #elementor-popup-modal-575 .dialog-message {
        width: 400px;
        height: auto;
      }
      #elementor-popup-modal-575 {
        justify-content: center;
        align-items: center;
        pointer-events: all;
        background-color: rgba(0, 0, 0, 0.8);
      }
      #elementor-popup-modal-575 .dialog-widget-content {
        animation-duration: 1.2s;
        box-shadow: 2px 8px 23px 3px rgba(0, 0, 0, 0.2);
      }
        `}
      </style>
      <Head>
        <title>Thanh toán - Luvin</title>
        <meta
          name="description"
          content="Tất cả các sản phẩm rượu vang được lên men tự nhiên và có nồng độ cồn dưới 15 độ"
        />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Thanh toán - Luvin" />
        <meta property="og:url" content="https://luvin.com.vn" />
        <meta property="og:site_name" content="Luvin" />
        <meta
          property="og:image"
          content="https://luvin.com.vn/images/banner.jpg"
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
      </Head>
      {loading && <Loading />}
      <Modal
        open={state.openErrorModal}
        onClose={() => setState({ ...state, openErrorModal: false })}
      >
        <p style={{ color: "red", fontSize: "20px" }}>Lỗi</p>
        <p style={{ color: "red", fontSize: "18px" }}>{errorMessage}</p>
      </Modal>
      <Modal
        open={state.openLoginModal}
        onClose={() => setState({ ...state, openLoginModal: false })}
      >
        <form
          className="woocommerce-form woocommerce-form-login login"
          onSubmit={handleLogin}
          style={{ display: "block", padding: "30px" }}
        >
          {login.errorMessage && (
            <p style={{ color: "red", fontSize: "14px" }}>
              {login.errorMessage}
            </p>
          )}
          <p>Vui lòng đăng nhập để tiếp tục thanh toán!</p>

          <p className="form-row">
            <label for="username">
              Số điện thoại&nbsp;
              <span className="required">*</span>
            </label>
            <input
              style={{ marginTop: "10px" }}
              type="tel"
              required
              className="input-text"
              name="username"
              id="username"
              autocomplete="username"
              value={state.loginInfo.phone}
              onChange={(event) => {
                let telephone = event.target.value;

                // if value is not blank, then test the regex
                if (telephone === "" || regexp.test(telephone)) {
                  handleChangeLoginInfo("phone", telephone);
                }
              }}
            />
          </p>
          <p className="form-row">
            <label for="password">
              Mật khẩu&nbsp;<span className="required">*</span>
            </label>
            <input
              required
              style={{ marginTop: "10px" }}
              className="input-text"
              type="password"
              name="password"
              id="password"
              autocomplete="current-password"
              value={state.loginInfo.password}
              onChange={(event) =>
                handleChangeLoginInfo("password", event.target.value)
              }
            />
          </p>
          <div className="clear"></div>

          <p className="form-row">
            <label className="woocommerce-form__label woocommerce-form__label-for-checkbox woocommerce-form-login__rememberme">
              <input
                className="woocommerce-form__input woocommerce-form__input-checkbox"
                name="rememberme"
                type="checkbox"
                id="rememberme"
                value="forever"
              />
              <span>Ghi nhớ mật khẩu</span>
            </label>
            <button
              type="submit"
              className="woocommerce-button button woocommerce-form-login__submit"
              name="login"
              value="Đăng nhập"
              style={{ marginTop: "10px" }}
            >
              Đăng nhập
            </button>
          </p>
          <p className="lost_password">
            <Link href="/tai-khoan/quen-mat-khau">
              <a>Quên mật khẩu?</a>
            </Link>
            <Link href="/dang-ky">
              <a style={{ float: "right" }}>Đăng ký</a>
            </Link>
          </p>
          {/* <p className="lost_password">
            
          </p> */}

          <div className="clear"></div>
        </form>
      </Modal>
      <main
        className="site-main post-9 page type-page status-publish hentry"
        role="main"
      >
        <header className="page-header">
          <h1 className="entry-title">Thanh toán</h1>
        </header>
        <div className="page-content">
          <div className="woocommerce">
            {!userInfo._id && (
              <>
                <div className="woocommerce-form-login-toggle">
                  <div className="woocommerce-info">
                    Bạn đã có tài khoản?
                    <a
                      onClick={() =>
                        setState({
                          ...state,
                          expandedLogin: !state.expandedLogin,
                        })
                      }
                      className="showlogin"
                      style={{
                        // color: "#CC3366",
                        cursor: "pointer",
                      }}
                    >
                      Ấn vào đây để đăng nhập
                    </a>
                  </div>
                </div>
                <form
                  className="woocommerce-form woocommerce-form-login login"
                  onSubmit={handleLogin}
                  style={{ display: state.expandedLogin ? "block" : "none" }}
                >
                  {login.errorMessage && (
                    <p style={{ color: "red", fontSize: "14px" }}>
                      {login.errorMessage}
                    </p>
                  )}
                  <p>
                    Nếu trước đây bạn đã mua hàng của chúng tôi, vui lòng đăng
                    nhập. Nếu bạn là khách hàng mới, vui lòng tiếp tục nhập phần
                    thông tin thanh toán.
                  </p>

                  <p className="form-row form-row-first">
                    <label for="username">
                      Số điện thoại&nbsp;<span className="required">*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      className="input-text"
                      name="username"
                      id="username"
                      autocomplete="username"
                      value={state.loginInfo.phone}
                      onChange={(event) => {
                        let telephone = event.target.value;

                        // if value is not blank, then test the regex
                        if (telephone === "" || regexp.test(telephone)) {
                          handleChangeLoginInfo("phone", telephone);
                        }
                      }}
                    />
                  </p>
                  <p className="form-row form-row-last">
                    <label for="password">
                      Mật khẩu&nbsp;<span className="required">*</span>
                    </label>
                    <input
                      className="input-text"
                      required
                      type="password"
                      name="password"
                      id="password"
                      autocomplete="current-password"
                      value={state.loginInfo.password}
                      onChange={(event) =>
                        handleChangeLoginInfo("password", event.target.value)
                      }
                    />
                  </p>
                  <div className="clear"></div>

                  <p className="form-row">
                    <label className="woocommerce-form__label woocommerce-form__label-for-checkbox woocommerce-form-login__rememberme">
                      <input
                        className="woocommerce-form__input woocommerce-form__input-checkbox"
                        name="rememberme"
                        type="checkbox"
                        id="rememberme"
                        value="forever"
                      />
                      <span>Ghi nhớ mật khẩu</span>
                    </label>
                    <button
                      type="submit"
                      className="woocommerce-button button woocommerce-form-login__submit"
                      name="login"
                      value="Đăng nhập"
                    >
                      Đăng nhập
                    </button>
                  </p>
                  <p className="lost_password">
                    <Link href="/tai-khoan/quen-mat-khau">
                      <a>Quên mật khẩu?</a>
                    </Link>
                  </p>

                  <div className="clear"></div>
                </form>
              </>
            )}

            <div className="woocommerce-form-coupon-toggle">
              <div className="woocommerce-info">
                Bạn có mã ưu đãi?
                <a
                  onClick={() =>
                    setState({
                      ...state,
                      expandedVoucher: !state.expandedVoucher,
                    })
                  }
                  className="showcoupon"
                  style={{
                    // color: "#CC3366",
                    cursor: "pointer",
                  }}
                >
                  Ấn vào đây để nhập mã
                </a>
              </div>
            </div>

            <form
              className="checkout_coupon woocommerce-form-coupon"
              style={{ display: state.expandedVoucher ? "block" : "none" }}
              // method="post"
              onSubmit={handleRedeemVoucher}
            >
              <p>Nếu bạn có mã giảm giá, vui lòng điền vào phía bên dưới.</p>

              <p className="form-row form-row-first">
                <input
                  type="text"
                  name="coupon_code"
                  className="input-text"
                  placeholder="Mã ưu đãi"
                  id="coupon_code"
                  value={state.voucherCode}
                  onChange={(event) => {
                    setState({ ...state, voucherCode: event.target.value });
                  }}
                />
              </p>

              <p className="form-row form-row-last">
                <button
                  type="submit"
                  className="button"
                  name="apply_coupon"
                  value="Áp dụng"
                >
                  Áp dụng
                </button>
              </p>

              <div className="clear"></div>
            </form>
            <div className="woocommerce-notices-wrapper"></div>
            <form
              name="checkout"
              className="checkout woocommerce-checkout"
              onSubmit={handleOrder}
            >
              <div className="col2-set" id="customer_details">
                <div className="col-1">
                  <div className="woocommerce-billing-fields">
                    <h3>Thông tin thanh toán</h3>

                    <div className="woocommerce-billing-fields__field-wrapper">
                      <p
                        className="form-row form-row-first validate-required"
                        id="billing_first_name_field"
                        data-priority="10"
                      >
                        <label for="billing_first_name" className="">
                          Tên&nbsp;
                          <abbr className="required" title="bắt buộc">
                            *
                          </abbr>
                        </label>
                        <span className="woocommerce-input-wrapper">
                          <input
                            type="text"
                            className="input-text"
                            name="billing_first_name"
                            id="billing_first_name"
                            placeholder=""
                            autocomplete="given-name"
                            value={state.orderInfo.name}
                            onChange={(event) =>
                              handleChangeOrderInfo("name", event.target.value)
                            }
                          />
                        </span>
                      </p>
                      <p
                        className="form-row form-row-wide address-field validate-required"
                        id="billing_address_1_field"
                        data-priority="50"
                      >
                        <label for="billing_address_1" className="">
                          Địa chỉ&nbsp;
                          <abbr className="required" title="bắt buộc">
                            *
                          </abbr>
                        </label>
                        <span className="woocommerce-input-wrapper">
                          <input
                            type="text"
                            className="input-text"
                            name="billing_address_1"
                            id="billing_address_1"
                            placeholder="Địa chỉ"
                            autocomplete="address-line1"
                            value={state.orderInfo.address}
                            onChange={(event) =>
                              handleChangeOrderInfo(
                                "address",
                                event.target.value
                              )
                            }
                          />
                        </span>
                      </p>
                      <p
                        className="form-row form-row-wide address-field validate-required"
                        id="billing_city_field"
                        data-priority="70"
                      >
                        <label for="billing_city" className="">
                          Tỉnh / Thành phố&nbsp;
                          <abbr className="required" title="bắt buộc">
                            *
                          </abbr>
                        </label>
                        <span className="woocommerce-input-wrapper">
                          {/* <input
                            type="text"
                            className="input-text"
                            name="billing_city"
                            id="billing_city"
                            placeholder=""
                            value=""
                            autocomplete="address-level2"
                          /> */}
                          <select
                            name="billing_city"
                            id="billing_city"
                            value={state.orderInfo.city}
                            className="input-text"
                            onChange={(event) =>
                              handleChangeOrderInfo("city", event.target.value)
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
                      <p
                        className="form-row form-row-wide address-field validate-state"
                        id="billing_state_field"
                        // style="display: none"
                      >
                        <label for="billing_state" className="">
                          Bang / Hạt&nbsp;
                          <span className="optional">(tuỳ chọn)</span>
                        </label>
                        <span className="woocommerce-input-wrapper">
                          <input
                            type="tel"
                            className="input-text"
                            name="billing_phone"
                            id="billing_phone"
                            placeholder=""
                            autocomplete="tel"
                            value={state.orderInfo.phone}
                            onChange={(event) =>
                              handleChangeOrderInfo("phone", event.target.value)
                            }
                          />
                        </span>
                      </p>
                      <p
                        className="form-row form-row-wide validate-required validate-email"
                        id="billing_email_field"
                        data-priority="110"
                      >
                        <label for="billing_email" className="">
                          Địa chỉ email&nbsp;
                          <abbr className="required" title="bắt buộc">
                            *
                          </abbr>
                        </label>
                        <span className="woocommerce-input-wrapper">
                          <input
                            type="email"
                            className="input-text"
                            name="billing_email"
                            id="billing_email"
                            placeholder=""
                            autocomplete="email"
                            value={state.orderInfo.email}
                            onChange={(event) =>
                              handleChangeOrderInfo("email", event.target.value)
                            }
                          />
                        </span>
                      </p>
                    </div>
                  </div>
                  {/* 
                  <div className="woocommerce-account-fields">
                    <div className="create-account">
                      <p
                        className="form-row validate-required"
                        id="account_username_field"
                        data-priority=""
                      >
                        <label for="account_username" className="">
                          Tên đăng nhập tài khoản bằng Số điện thoại&nbsp;
                          <abbr className="required" title="bắt buộc">
                            *
                          </abbr>
                        </label>
                        <span className="woocommerce-input-wrapper">
                          <input
                            type="text"
                            className="input-text"
                            name="account_username"
                            id="account_username"
                            placeholder="Số điện thoại"
                            value=""
                          />
                        </span>
                      </p>
                      <p
                        className="form-row validate-required"
                        id="account_password_field"
                        data-priority=""
                      >
                        <label for="account_password" className="">
                          Tạo mật khẩu của tài khoản&nbsp;
                          <abbr className="required" title="bắt buộc">
                            *
                          </abbr>
                        </label>
                        <span className="woocommerce-input-wrapper">
                          <input
                            type="password"
                            className="input-text"
                            name="account_password"
                            id="account_password"
                            placeholder="Mật khẩu"
                            value=""
                          />
                        </span>
                      </p>
                      <div className="clear"></div>
                    </div>
                  </div> */}
                </div>

                <div className="col-2">
                  <div className="woocommerce-shipping-fields"></div>
                  <div className="woocommerce-additional-fields">
                    <h3>Thông tin bổ sung</h3>

                    <div className="woocommerce-additional-fields__field-wrapper">
                      <p
                        className="form-row notes"
                        id="order_comments_field"
                        data-priority=""
                      >
                        <label for="order_comments" className="">
                          Ghi chú đơn hàng&nbsp;
                          <span className="optional">(tuỳ chọn)</span>
                        </label>
                        <span className="woocommerce-input-wrapper">
                          <textarea
                            name="order_comments"
                            className="input-text"
                            id="order_comments"
                            placeholder="Ghi chú về đơn hàng, ví dụ: thời gian hay chỉ dẫn địa điểm giao hàng chi tiết hơn."
                            rows="2"
                            cols="5"
                            value={state.orderInfo.note}
                            onChange={(event) =>
                              handleChangeOrderInfo("note", event.target.value)
                            }
                          ></textarea>
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <h3 id="order_review_heading">Đơn hàng của bạn</h3>

              <div
                id="order_review"
                className="woocommerce-checkout-review-order"
              >
                <table className="shop_table woocommerce-checkout-review-order-table">
                  <thead>
                    <tr>
                      <th className="product-name">Sản phẩm</th>
                      <th className="product-total">Tạm tính</th>
                    </tr>
                  </thead>
                  <tbody>
                    {products.map(({ amount, product }) => {
                      const { name, price, discount } = product;
                      return (
                        <tr className="cart_item">
                          <td className="product-name">
                            {name}&nbsp;
                            <strong className="product-quantity">
                              &times;&nbsp;{amount}
                            </strong>
                          </td>
                          <td className="product-total">
                            <span className="woocommerce-Price-amount amount">
                              <bdi>
                                {numeral(price - discount).format("0,0")}
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
                  <tfoot>
                    {redeemVoucher.voucherData.value && (
                      <tr className="cart-subtotal">
                        <th>Giảm giá</th>
                        <td>
                          <span className="woocommerce-Price-amount amount">
                            <bdi>
                              {(() => {
                                const totalWithoutDiscount = sum(
                                  products.map(({ amount, product = {} }) => {
                                    const realPrice =
                                      amount *
                                      ((product.price || 0) -
                                        (product.discount || 0));
                                    return realPrice;
                                  })
                                );
                                let discount = 0;
                                if (redeemVoucher.voucherData.value) {
                                  if (
                                    redeemVoucher.voucherData.type === "percent"
                                  ) {
                                    discount =
                                      (totalWithoutDiscount / 100) *
                                      redeemVoucher.voucherData.value;
                                  } else {
                                    discount = redeemVoucher.voucherData.value;
                                  }
                                }
                                return numeral(discount).format("0,0");
                              })()}
                              <span className="woocommerce-Price-currencySymbol">
                                &#8363;
                              </span>
                            </bdi>
                          </span>
                        </td>
                      </tr>
                    )}
                    {/* <tr className="cart-subtotal">
                      <th>Tạm tính</th>
                      <td>
                        <span className="woocommerce-Price-amount amount">
                          <bdi>
                            3.070.000
                            <span className="woocommerce-Price-currencySymbol">
                              &#8363;
                            </span>
                          </bdi>
                        </span>
                      </td>
                    </tr> */}

                    <tr className="order-total">
                      <th>Tổng</th>
                      <td>
                        <strong>
                          <span className="woocommerce-Price-amount amount">
                            <bdi>
                              {(() => {
                                const totalWithoutDiscount = sum(
                                  products.map(({ amount, product = {} }) => {
                                    const realPrice =
                                      amount *
                                      ((product.price || 0) -
                                        (product.discount || 0));
                                    return realPrice;
                                  })
                                );
                                let discount = 0;
                                if (redeemVoucher.voucherData.value) {
                                  if (
                                    redeemVoucher.voucherData.type === "percent"
                                  ) {
                                    discount =
                                      (totalWithoutDiscount / 100) *
                                      redeemVoucher.voucherData.value;
                                  } else {
                                    discount = redeemVoucher.voucherData.value;
                                  }
                                }
                                const total = totalWithoutDiscount - discount;
                                return numeral(total).format("0,0");
                              })()}
                              <span className="woocommerce-Price-currencySymbol">
                                &#8363;
                              </span>
                            </bdi>
                          </span>
                        </strong>
                      </td>
                    </tr>
                  </tfoot>
                </table>
                <div id="payment" className="woocommerce-checkout-payment">
                  <ul className="wc_payment_methods payment_methods methods">
                    <li
                      className="wc_payment_method payment_method_cod"
                      onClick={() =>
                        setState({ ...state, paymentMethod: "cod" })
                      }
                    >
                      <input
                        id="payment_method_cod"
                        type="radio"
                        className="input-radio"
                        name="payment_method"
                        value="cod"
                        checked={state.paymentMethod === "cod" ? "checked" : ""}
                      />

                      <label for="payment_method_cod">
                        Trả tiền mặt khi nhận hàng
                      </label>
                      <div
                        className="payment_box payment_method_cod"
                        style={{
                          display:
                            state.paymentMethod === "cod" ? "block" : "none",
                        }}
                      >
                        <p>Trả tiền mặt khi giao hàng</p>
                      </div>
                    </li>
                    <li
                      className="wc_payment_method payment_method_vnpay"
                      onClick={() =>
                        setState({ ...state, paymentMethod: "vnpay" })
                      }
                    >
                      <input
                        id="payment_method_vnpay"
                        type="radio"
                        className="input-radio"
                        name="payment_method"
                        value="vnpay"
                        checked={
                          state.paymentMethod === "vnpay" ? "checked" : ""
                        }
                      />

                      <label for="payment_method_vnpay">
                        Thanh toán qua VNPAY
                      </label>
                      <div
                        className="payment_box payment_method_vnpay"
                        style={{
                          display:
                            state.paymentMethod === "vnpay" ? "block" : "none",
                        }}
                      >
                        <p>Thanh toán trực tuyến qua VNPAY</p>
                      </div>
                    </li>
                  </ul>
                  <div className="form-row place-order">
                    <noscript>
                      Trình duyệt của bạn không hỗ trợ JavaScript, hoặc nó bị vô
                      hiệu hóa, hãy đảm bảo bạn nhấp vào
                      <em>Cập nhật giỏ hàng</em> trước khi bạn thanh toán. Bạn
                      có thể phải trả nhiều hơn số tiền đã nói ở trên, nếu bạn
                      không làm như vậy. <br />
                      <button
                        type="submit"
                        className="button alt"
                        name="woocommerce_checkout_update_totals"
                        value="Cập nhật tổng"
                      >
                        Cập nhật tổng
                      </button>
                    </noscript>

                    <div className="woocommerce-terms-and-conditions-wrapper">
                      <div className="woocommerce-privacy-policy-text">
                        <p>
                          Thông tin cá nhân của bạn sẽ được sử dụng để xử lý đơn
                          hàng, tăng trải nghiệm sử dụng website, và cho các mục
                          đích cụ thể khác đã được mô tả trong
                          <a
                            href="../cham-soc-khach-hang/chinh-sach-bao-mat/index.html"
                            className="woocommerce-privacy-policy-link"
                            target="_blank"
                          >
                            chính sách riêng tư
                          </a>
                          .
                        </p>
                      </div>
                    </div>

                    <button
                      type="submit"
                      className="button alt"
                      name="woocommerce_checkout_place_order"
                      id="place_order"
                      value="Đặt hàng"
                      data-value="Đặt hàng"
                    >
                      Đặt hàng
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </main>
    </Content>
  );
}

Checkout.propTypes = {};

export default Checkout;
