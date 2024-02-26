import React, { useState, useMemo, useEffect } from "react";
import PropTypes from "prop-types";
import { useSelector, useDispatch } from "react-redux";
import numeral from "numeral";
import capitalize from "lodash/capitalize";
import { useRouter } from "next/router";
import Head from "next/head";
import Carousel, { Dots } from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";
import includes from "lodash/includes";
import Link from "next/link";

import Content from "../../components/Layout/Content";
import Loading from "../../components/UI/Loading";

import { getProduct, resetState } from "../../actions/product";
import { sendFeedback as sendFeedbackAction } from "../../actions/feedback";
import { addProduct, openCartMenu } from "../../actions/cart";

const productStateSelector = (state) => state.product;
const feedbackStateSelector = (state) => state.feedback;
const authStateSelector = (state) => state.auth;
const cartStateSelector = (state) => state.cart;

function DetailProduct({ productSlug }) {
  const dispatch = useDispatch();
  const router = useRouter();
  const { product, loading, fetched, errorMessage } = useSelector(
    productStateSelector
  );
  const { sendFeedback } = useSelector(feedbackStateSelector);
  const { userInfo, login, register } = useSelector(authStateSelector);

  const {
    _id,
    name,
    description,
    slug,
    images = [],
    quantity,
    price,
    type,
    origin,
    discount,
    reviews = [],
  } = useMemo(() => product, [product]);

  const [state, setState] = useState({
    tabActive: 1,
    productAmount: 1,
    value: 0,
    review: {
      rate: 5,
      email: userInfo.email || "",
      name: userInfo.name || "",
      description: "",
      product: product._id || "",
    },
  });

  useEffect(() => {
    setState({
      ...state,
      review: {
        ...state.review,
        product: _id,
      },
    });
  }, [_id]);

  const discountPercent = useMemo(() => (discount / price) * 100, [
    discount,
    price,
  ]);

  useEffect(() => {
    if (!product._id) {
      dispatch(getProduct(productSlug));
    }
    return () => {
      dispatch(resetState());
    };
  }, []);

  const handleChangeReview = (prop, value) => {
    setState({
      ...state,
      review: {
        ...state.review,
        [prop]: value,
      },
    });
  };

  const { products: cartProducts } = useSelector(cartStateSelector);
  const handleSendFeedback = (event) => {
    event.preventDefault();
    dispatch(sendFeedbackAction(state.review));
  };

  const productIdsSelected = useMemo(
    () => cartProducts.map(({ product }) => product._id),
    [cartProducts]
  );

  const isInCart = includes(productIdsSelected, _id);

  // useEffect(() => {
  //   if (DetailProduct.isRendered) {
  //     dispatch(getProduct(router.query.slug, 12, 1));
  //   }
  //   DetailProduct.isRendered = true;
  // }, [router.query.slug]);

  return (
    <Content className="product-template-default single single-product postid-263 wp-custom-logo theme-hello-elementor woocommerce woocommerce-page woocommerce-no-js elementor-default elementor-template-full-width elementor-kit-76 elementor-page-667">
      <style id="elementor-frontend-inline-css" type="text/css">
        {`.elementor-kit-76 {
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
        src: url("../../wp-content/uploads/UTM-Roman-Classic.ttf")
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
        src: url("../../wp-content/uploads/UTM-Roman-Classic.ttf")
          format("truetype");
      }
      /* End Custom Fonts CSS */
      .elementor-667 .elementor-element.elementor-element-3cef354 {
        padding: 30px 0px 30px 0px;
      }
      .elementor-667
        .elementor-element.elementor-element-61ca339:not(.elementor-motion-effects-element-type-background)
        > .elementor-column-wrap,
      .elementor-667
        .elementor-element.elementor-element-61ca339
        > .elementor-column-wrap
        > .elementor-motion-effects-container
        > .elementor-motion-effects-layer {
        background-color: #ffffff;
      }
      .elementor-667
        .elementor-element.elementor-element-61ca339
        > .elementor-element-populated {
        border-style: solid;
        border-width: 1px 1px 1px 1px;
        border-color: #dfdfdf;
        transition: background 0.3s, border 0.3s, border-radius 0.3s,
          box-shadow 0.3s;
      }
      .elementor-667
        .elementor-element.elementor-element-61ca339
        > .elementor-element-populated
        > .elementor-background-overlay {
        transition: background 0.3s, border-radius 0.3s, opacity 0.3s;
      }
      .elementor-667
        .elementor-element.elementor-element-605425c
        .elementor-heading-title {
        font-family: "Tahoma", Sans-serif;
        font-size: 26px;
        line-height: 1.4em;
      }
      .woocommerce
        .elementor-667
        .elementor-element.elementor-element-659290a
        .star-rating {
        color: #cc3366;
      }
      .woocommerce
        .elementor-667
        .elementor-element.elementor-element-673c794
        .price {
        color: #902535;
      }
      .woocommerce
        .elementor-667
        .elementor-element.elementor-element-673c794
        .price
        ins {
        color: #902535;
        font-family: "Tahoma", Sans-serif;
        font-weight: 400;
        text-decoration: none;
      }
      .elementor-667 .elementor-element.elementor-element-6912e3d .cart button {
        border-radius: 1px 1px 1px 1px;
        color: #902535;
        background-color: #ffffff;
        border-color: #902535;
        transition: all 0.2s;
      }
      .elementor-667
        .elementor-element.elementor-element-6912e3d
        .cart
        button:hover {
        color: #ffffff;
        background-color: var(--e-global-color-primary);
        border-color: var(--e-global-color-primary);
      }
      .elementor-667
        .elementor-element.elementor-element-6912e3d
        .quantity
        .qty {
        transition: all 0.2s;
      }
      .woocommerce
        .elementor-667
        .elementor-element.elementor-element-a6746ee
        .woocommerce-tabs
        ul.wc-tabs
        li
        a {
        font-family: "Tahoma", Sans-serif;
      }
      body.elementor-page-667:not(.elementor-motion-effects-element-type-background),
      body.elementor-page-667
        > .elementor-motion-effects-container
        > .elementor-motion-effects-layer {
        background-color: #f2f2f2;
      }
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
      }`}
      </style>
      <Head>
        <title>{name} - Luvin</title>
        <meta name="description" content={description} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={`${name} - Luvin`} />
        <meta property="og:url" content="https://luvin.com.vn" />
        <meta property="og:site_name" content="Luvin" />
        <meta property="og:image" content={images[0]} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
      </Head>
      {(loading || sendFeedback.loading) && <Loading />}
      {isInCart && (
        <div class="woocommerce-notices-wrapper">
          <div class="woocommerce-message" role="alert">
            <Link href="/gio-hang">
              <a tabindex="1" class="button wc-forward">
                Xem giỏ hàng
              </a>
            </Link>
            “{name}” đã được thêm vào giỏ hàng.{" "}
          </div>
        </div>
      )}
      <div className="elementor elementor-667 elementor-location-single post-263 product type-product status-publish has-post-thumbnail product_cat-banh-mi product_cat-ruou-vang pa_loai-do-do-nguoi pa_nguon-goc-khac-viet-nam first instock sale shipping-taxable purchasable product-type-simple product">
        <div className="elementor-section-wrap">
          <section className="elementor-section elementor-top-section elementor-element elementor-element-3cef354 elementor-section-boxed elementor-section-height-default elementor-section-height-default">
            <div className="elementor-container elementor-column-gap-default">
              <div className="elementor-row">
                <div className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-61ca339">
                  <div className="elementor-column-wrap elementor-element-populated">
                    <div className="elementor-widget-wrap">
                      <section className="elementor-section elementor-inner-section elementor-element elementor-element-c473513 elementor-section-boxed elementor-section-height-default elementor-section-height-default">
                        <div className="elementor-container elementor-column-gap-wide">
                          <div className="elementor-row">
                            <div className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-1b6e117">
                              <div className="elementor-column-wrap elementor-element-populated">
                                <div className="elementor-widget-wrap">
                                  <div className="elementor-element elementor-element-51066a0 yes elementor-widget elementor-widget-woocommerce-product-images">
                                    <div className="elementor-widget-container">
                                      <Carousel
                                        value={state.value}
                                        slides={images.map((img) => (
                                          <img src={img} />
                                        ))}
                                        onChange={(value) => {
                                          setState({ ...state, value });
                                        }}
                                      />
                                      <Dots
                                        number={images.length}
                                        thumbnails={images.map((img) => (
                                          <img
                                            src={img}
                                            width="50px"
                                            height="50px"
                                          />
                                        ))}
                                        value={state.value}
                                        onChange={(value) => {
                                          setState({ ...state, value });
                                        }}
                                      />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-efddc46">
                              <div className="elementor-column-wrap elementor-element-populated">
                                <div className="elementor-widget-wrap">
                                  <div className="elementor-element elementor-element-605425c elementor-widget elementor-widget-woocommerce-product-title elementor-page-title elementor-widget-heading">
                                    <div className="elementor-widget-container">
                                      <h1 className="product_title entry-title elementor-heading-title elementor-size-default">
                                        {name}
                                      </h1>
                                    </div>
                                  </div>
                                  <div className="elementor-element elementor-element-64b817e elementor-widget elementor-widget-woocommerce-product-short-description">
                                    <div className="elementor-widget-container">
                                      <div className="woocommerce-product-details__short-description">
                                        <p>{description}</p>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="elementor-element elementor-element-c84fa27 elementor-widget elementor-widget-html">
                                    <div className="elementor-widget-container">
                                      <p className="arterm">
                                        <i className="fas fa-wine-bottle"></i>
                                        &nbsp;{capitalize(type)}
                                      </p>
                                      <p className="arterm">
                                        <i className="fas fa-globe-africa"></i>
                                        &nbsp;{capitalize(origin)}
                                      </p>
                                    </div>
                                  </div>
                                  <div className="elementor-element elementor-element-673c794 elementor-widget elementor-widget-woocommerce-product-price">
                                    <div className="elementor-widget-container">
                                      <p className="price">
                                        {!!discountPercent && (
                                          <del>
                                            <span className="woocommerce-Price-amount amount">
                                              <bdi>
                                                {numeral(price).format("0,0")}
                                                <span className="woocommerce-Price-currencySymbol">
                                                  &#8363;
                                                </span>
                                              </bdi>
                                            </span>
                                          </del>
                                        )}{" "}
                                        <ins>
                                          <span className="woocommerce-Price-amount amount">
                                            <bdi>
                                              {numeral(price - discount).format(
                                                "0,0"
                                              )}
                                              <span className="woocommerce-Price-currencySymbol">
                                                &#8363;
                                              </span>
                                            </bdi>
                                          </span>
                                        </ins>
                                      </p>
                                    </div>
                                  </div>
                                  <div className="elementor-element elementor-element-6912e3d elementor-widget elementor-widget-woocommerce-product-add-to-cart">
                                    <div className="elementor-widget-container">
                                      <div className="elementor-add-to-cart elementor-product-simple">
                                        <form className="cart">
                                          <div className="quantity">
                                            <input
                                              type="number"
                                              id="quantity_5fd85234d8afa"
                                              className="input-text qty text"
                                              step="1"
                                              min="1"
                                              max=""
                                              name="quantity"
                                              title="SL"
                                              placeholder=""
                                              value={state.productAmount}
                                              onChange={(event) =>
                                                setState({
                                                  ...state,
                                                  productAmount: parseInt(
                                                    event.target.value
                                                  ),
                                                })
                                              }
                                            />
                                          </div>

                                          <button
                                            name="add-to-cart"
                                            className="single_add_to_cart_button button alt"
                                            onClick={(event) => {
                                              event.preventDefault();
                                              // dispatch(openCartMenu());
                                              dispatch(
                                                addProduct(
                                                  state.productAmount,
                                                  product
                                                )
                                              );
                                              setState({
                                                ...state,
                                                productAmount: 1,
                                              });
                                            }}
                                          >
                                            Đặt mua
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
                      <section className="elementor-section elementor-inner-section elementor-element elementor-element-54eeaa3 elementor-section-boxed elementor-section-height-default elementor-section-height-default">
                        <div className="elementor-container elementor-column-gap-wide">
                          <div className="elementor-row">
                            <div className="elementor-column elementor-col-100 elementor-inner-column elementor-element elementor-element-895ef0b">
                              <div className="elementor-column-wrap elementor-element-populated">
                                <div className="elementor-widget-wrap">
                                  <div className="elementor-element elementor-element-a6746ee elementor-widget elementor-widget-woocommerce-product-data-tabs">
                                    <div className="elementor-widget-container">
                                      <div className="woocommerce-tabs wc-tabs-wrapper">
                                        <ul
                                          className="tabs wc-tabs"
                                          role="tablist"
                                        >
                                          <li
                                            className={`reviews_tab ${
                                              state.tabActive === 1 && "active"
                                            }`}
                                            aria-controls="tab-description"
                                            onClick={() =>
                                              setState({
                                                ...state,
                                                tabActive: 1,
                                              })
                                            }
                                          >
                                            <a>Mô tả</a>
                                          </li>
                                          <li
                                            className={`reviews_tab ${
                                              state.tabActive === 2 && "active"
                                            }`}
                                            aria-controls="tab-additional_information"
                                            onClick={() =>
                                              setState({
                                                ...state,
                                                tabActive: 2,
                                              })
                                            }
                                          >
                                            <a>Thông tin bổ sung</a>
                                          </li>
                                          <li
                                            className={`reviews_tab ${
                                              state.tabActive === 3 && "active"
                                            }`}
                                            aria-controls="tab-reviews"
                                            onClick={() =>
                                              setState({
                                                ...state,
                                                tabActive: 3,
                                              })
                                            }
                                          >
                                            <a>Đánh giá (0)</a>
                                          </li>
                                        </ul>
                                        {state.tabActive === 1 && (
                                          <div
                                            className="woocommerce-Tabs-panel woocommerce-Tabs-panel--description panel entry-content wc-tab"
                                            id="tab-description"
                                            role="tabpanel"
                                            aria-labelledby="tab-title-description"
                                          >
                                            <h2>Mô tả</h2>

                                            <p>{description}</p>
                                          </div>
                                        )}
                                        {state.tabActive === 2 && (
                                          <div
                                            className="woocommerce-Tabs-panel woocommerce-Tabs-panel--additional_information panel entry-content wc-tab"
                                            id="tab-additional_information"
                                            role="tabpanel"
                                            aria-labelledby="tab-title-additional_information"
                                          >
                                            <h2>Thông tin bổ sung</h2>

                                            <table className="woocommerce-product-attributes shop_attributes">
                                              <tr className="woocommerce-product-attributes-item woocommerce-product-attributes-item--attribute_pa_loai-do">
                                                <th className="woocommerce-product-attributes-item__label">
                                                  Loại đồ
                                                </th>
                                                <td className="woocommerce-product-attributes-item__value">
                                                  <p>
                                                    <a>{capitalize(type)}</a>
                                                  </p>
                                                </td>
                                              </tr>
                                              <tr className="woocommerce-product-attributes-item woocommerce-product-attributes-item--attribute_pa_nguon-goc-khac">
                                                <th className="woocommerce-product-attributes-item__label">
                                                  Nguồn gốc khác
                                                </th>
                                                <td className="woocommerce-product-attributes-item__value">
                                                  <p>
                                                    <a>{capitalize(origin)}</a>
                                                  </p>
                                                </td>
                                              </tr>
                                            </table>
                                          </div>
                                        )}
                                        {state.tabActive === 3 && (
                                          <div
                                            className="woocommerce-Tabs-panel woocommerce-Tabs-panel--reviews panel entry-content wc-tab"
                                            id="tab-reviews"
                                            role="tabpanel"
                                            aria-labelledby="tab-title-reviews"
                                          >
                                            <div
                                              id="reviews"
                                              className="woocommerce-Reviews"
                                            >
                                              <div id="comments">
                                                <h2 className="woocommerce-Reviews-title">
                                                  Đánh giá
                                                </h2>

                                                <p className="woocommerce-noreviews">
                                                  Chưa có đánh giá nào.
                                                </p>
                                                {!!reviews.length && (
                                                  <ol className="commentlist">
                                                    {reviews.map(
                                                      ({
                                                        name,
                                                        email,
                                                        rate,
                                                        title,
                                                        description,
                                                        createdAt,
                                                        avatar,
                                                      }) => (
                                                        <li
                                                          className="review byuser comment-author-le bypostauthor even thread-even depth-1"
                                                          id="li-comment-2"
                                                        >
                                                          <div
                                                            id="comment-2"
                                                            className="comment_container"
                                                          >
                                                            <img
                                                              alt=""
                                                              src={avatar}
                                                              className="avatar avatar-60 photo"
                                                              height="60"
                                                              width="60"
                                                              loading="lazy"
                                                            />
                                                            <div className="comment-text">
                                                              <div
                                                                className="star-rating"
                                                                role="img"
                                                                aria-label="Được xếp hạng 5 5 sao"
                                                              >
                                                                <span
                                                                  style={{
                                                                    width: `${
                                                                      (rate /
                                                                        5) *
                                                                      100
                                                                    }%`,
                                                                  }}
                                                                >
                                                                  Được xếp hạng{" "}
                                                                  <strong className="rating">
                                                                    {rate}
                                                                  </strong>{" "}
                                                                  5 sao
                                                                </span>
                                                              </div>
                                                              <p className="meta">
                                                                <strong className="woocommerce-review__author">
                                                                  {name}
                                                                </strong>
                                                                <span className="woocommerce-review__dash">
                                                                  –
                                                                </span>{" "}
                                                                <time className="woocommerce-review__published-date">
                                                                  {createdAt}
                                                                </time>
                                                              </p>

                                                              <div className="description">
                                                                <p>
                                                                  {description}
                                                                </p>
                                                              </div>
                                                            </div>
                                                          </div>
                                                        </li>
                                                      )
                                                    )}
                                                  </ol>
                                                )}
                                              </div>

                                              <div id="review_form_wrapper">
                                                <div id="review_form">
                                                  <div
                                                    id="respond"
                                                    className="comment-respond"
                                                  >
                                                    <span
                                                      id="reply-title"
                                                      className="comment-reply-title"
                                                    >
                                                      Hãy là người đầu tiên nhận
                                                      xét &ldquo;Zuccardi
                                                      Premium Malbec Tasting
                                                      Case&rdquo;
                                                      <small>
                                                        <a
                                                          rel="nofollow"
                                                          id="cancel-comment-reply-link"
                                                          href="index.html#respond"
                                                          style={{
                                                            display: "none",
                                                          }}
                                                        >
                                                          Hủy
                                                        </a>
                                                      </small>
                                                    </span>
                                                    <form
                                                      onSubmit={
                                                        handleSendFeedback
                                                      }
                                                      id="commentform"
                                                      className="comment-form"
                                                      novalidate
                                                    >
                                                      <p className="comment-notes">
                                                        <span id="email-notes">
                                                          Email của bạn sẽ không
                                                          được hiển thị công
                                                          khai.
                                                        </span>
                                                        Các trường bắt buộc được
                                                        đánh dấu
                                                        <span className="required">
                                                          *
                                                        </span>
                                                      </p>
                                                      <div className="comment-form-rating">
                                                        <label for="rating">
                                                          Đánh giá của bạn&nbsp;
                                                          <span className="required">
                                                            *
                                                          </span>
                                                        </label>
                                                        <select
                                                          name="rating"
                                                          id="rating"
                                                          value={
                                                            state.review.rate
                                                          }
                                                        >
                                                          <option value={5}>
                                                            Rất tốt
                                                          </option>
                                                          <option value={4}>
                                                            Tốt
                                                          </option>
                                                          <option value={3}>
                                                            Trung bình
                                                          </option>
                                                          <option value={2}>
                                                            Không tệ
                                                          </option>
                                                          <option value={1}>
                                                            Rất tệ
                                                          </option>
                                                        </select>
                                                      </div>
                                                      <p className="comment-form-comment">
                                                        <label for="comment">
                                                          Nhận xét của bạn&nbsp;
                                                          <span className="required">
                                                            *
                                                          </span>
                                                        </label>
                                                        <textarea
                                                          id="comment"
                                                          name="comment"
                                                          cols="45"
                                                          rows="8"
                                                          value={
                                                            state.review
                                                              .description
                                                          }
                                                          onChange={(event) =>
                                                            handleChangeReview(
                                                              "description",
                                                              event.target.value
                                                            )
                                                          }
                                                        ></textarea>
                                                      </p>
                                                      <p className="comment-form-author">
                                                        <label for="author">
                                                          Tên&nbsp;
                                                          <span className="required">
                                                            *
                                                          </span>
                                                        </label>
                                                        <input
                                                          id="author"
                                                          name="author"
                                                          type="text"
                                                          size="30"
                                                          value={
                                                            state.review.name
                                                          }
                                                          onChange={(event) =>
                                                            handleChangeReview(
                                                              "name",
                                                              event.target.value
                                                            )
                                                          }
                                                        />
                                                      </p>
                                                      <p className="comment-form-email">
                                                        <label for="email">
                                                          Email&nbsp;
                                                          <span className="required">
                                                            *
                                                          </span>
                                                        </label>
                                                        <input
                                                          id="email"
                                                          name="email"
                                                          type="email"
                                                          size="30"
                                                          value={
                                                            state.review.email
                                                          }
                                                          onChange={(event) =>
                                                            handleChangeReview(
                                                              "email",
                                                              event.target.value
                                                            )
                                                          }
                                                        />
                                                      </p>
                                                      {sendFeedback.success && (
                                                        <p
                                                          style={{
                                                            color: "green",
                                                            fontSize: "14px",
                                                          }}
                                                        >
                                                          Gửi nhận xét thành
                                                          công!
                                                        </p>
                                                      )}
                                                      {sendFeedback.errorMessage && (
                                                        <p
                                                          style={{
                                                            color: "red",
                                                            fontSize: "14px",
                                                          }}
                                                        >
                                                          {
                                                            sendFeedback.errorMessage
                                                          }
                                                        </p>
                                                      )}
                                                      <p className="form-submit">
                                                        <input
                                                          name="submit"
                                                          type="submit"
                                                          id="submit"
                                                          className="submit"
                                                          value="Gửi đi"
                                                        />
                                                      </p>
                                                    </form>
                                                  </div>
                                                </div>
                                              </div>

                                              <div className="clear"></div>
                                            </div>
                                          </div>
                                        )}
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
        </div>
      </div>
    </Content>
  );
}

DetailProduct.propTypes = {};

DetailProduct.getInitialProps = async (props) => {
  const { store, req, accessToken, query } = props.ctx;
  const { slug: productSlug } = query;
  if (!!req) {
    store.dispatch(getProduct(productSlug));
  }
  return { productSlug };
};

export default DetailProduct;
