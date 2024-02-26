import React, { useMemo, useEffect } from "react";
import PropTypes from "prop-types";
import Link from "next/link";
import Head from "next/head";
import { useRouter } from "next/router";
import { useSelector, useDispatch } from "react-redux";
import numeral from "numeral";
import capitalize from "lodash/capitalize";
import sum from "lodash/sum";
import includes from "lodash/includes";
import ReactPaginate from "react-paginate";

import Content from "../../components/Layout/Content";
import Loading from "../../components/UI/Loading";

import { getProducts, resetState } from "../../actions/products";
import { addProduct } from "../../actions/cart";

const categoryStateSelector = (state) => state.categories;
const productsStateSelector = (state) => state.products;
const cartStateSelector = (state) => state.cart;

function Category({ categorySlug }) {
  const dispatch = useDispatch();
  const router = useRouter();
  const { categories } = useSelector(categoryStateSelector);
  const {
    products,
    total,
    page,
    limit,
    sort,
    type,
    origin,
    loading,
    fetched,
    errorMessage,
  } = useSelector(productsStateSelector);
  const { products: cartProducts } = useSelector(cartStateSelector);

  const categoryDetail = useMemo(() => {
    return categories.find(({ slug }) => categorySlug === slug) || {};
  }, [categorySlug]);

  const productIdsSelected = useMemo(
    () => cartProducts.map(({ product }) => product._id),
    [cartProducts]
  );

  useEffect(() => {
    if (!products.length) {
      dispatch(getProducts(categorySlug, 12, 1));
    }
    return () => {
      dispatch(resetState());
    };
  }, []);

  useEffect(() => {
    if (Category.isRendered) {
      dispatch(getProducts(router.query.category, 12, 1));
    }
    Category.isRendered = true;
  }, [router.query.category]);

  return (
    <Content className="archive tax-product_cat term-ruou-vang term-15 wp-custom-logo theme-hello-elementor woocommerce woocommerce-page woocommerce-no-js elementor-default elementor-template-full-width elementor-kit-76 elementor-page-503">
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
      .elementor-503 .elementor-element.elementor-element-fd23492 {
        padding: 30px 0px 30px 0px;
      }
      .elementor-503 .elementor-element.elementor-element-9fa1cba {
        text-align: center;
      }
      .elementor-503
        .elementor-element.elementor-element-9fa1cba
        .elementor-heading-title {
        color: #902535;
        font-family: "Arial", Sans-serif;
        font-size: 30px;
        font-weight: 400;
        text-transform: uppercase;
      }
      .elementor-503
        .elementor-element.elementor-element-4f3942e
        > .elementor-container
        > .elementor-row
        > .elementor-column
        > .elementor-column-wrap
        > .elementor-widget-wrap {
        align-content: center;
        align-items: center;
      }
      .elementor-503 .elementor-element.elementor-element-4f3942e {
        padding: 20px 0px 30px 0px;
      }
      .elementor-503
        .elementor-element.elementor-element-477d2cd.elementor-wc-products
        ul.products {
        grid-column-gap: 20px;
        grid-row-gap: 40px;
      }
      .elementor-503
        .elementor-element.elementor-element-477d2cd.elementor-wc-products
        ul.products
        li.product
        .woocommerce-loop-product__title,
      .elementor-503
        .elementor-element.elementor-element-477d2cd.elementor-wc-products
        ul.products
        li.product
        .woocommerce-loop-category__title {
        font-family: "Tahoma", Sans-serif;
        font-size: 18px;
        font-weight: 500;
      }
      .elementor-503
        .elementor-element.elementor-element-477d2cd.elementor-wc-products
        ul.products
        li.product
        .star-rating {
        color: #902535;
      }
      .elementor-503
        .elementor-element.elementor-element-477d2cd.elementor-wc-products
        ul.products
        li.product
        .price {
        color: #902535;
        font-size: 16px;
        font-weight: 400;
      }
      .elementor-503
        .elementor-element.elementor-element-477d2cd.elementor-wc-products
        ul.products
        li.product
        .price
        ins {
        color: #902535;
      }
      .elementor-503
        .elementor-element.elementor-element-477d2cd.elementor-wc-products
        ul.products
        li.product
        .price
        ins
        .amount {
        color: #902535;
      }
      .elementor-503
        .elementor-element.elementor-element-477d2cd.elementor-wc-products
        ul.products
        li.product
        .button {
        color: #902535;
        border-color: #902535;
        border-radius: 1px 1px 1px 1px;
      }
      .elementor-503
        .elementor-element.elementor-element-477d2cd.elementor-wc-products
        ul.products
        li.product
        .button:hover {
        color: #ffffff;
        background-color: #902535;
        border-color: #902535;
      }
      .elementor-503
        .elementor-element.elementor-element-477d2cd.elementor-wc-products
        ul.products
        li.product {
        border-style: solid;
        border-width: 1px 1px 1px 1px;
        padding: 10px 10px 10px 10px;
        border-color: #dfdfdf;
      }
      .elementor-503
        .elementor-element.elementor-element-477d2cd.elementor-wc-products
        ul.products
        li.product
        span.onsale {
        display: block;
      }
      @media (max-width: 1024px) {
        .elementor-503
          .elementor-element.elementor-element-9fa1cba
          .elementor-heading-title {
          font-size: 75px;
        }
        .elementor-503
          .elementor-element.elementor-element-477d2cd.elementor-wc-products
          ul.products {
          grid-column-gap: 20px;
          grid-row-gap: 40px;
        }
      }
      @media (max-width: 767px) {
        .elementor-503
          .elementor-element.elementor-element-9fa1cba
          .elementor-heading-title {
          font-size: 50px;
        }
        .elementor-503
          .elementor-element.elementor-element-477d2cd.elementor-wc-products
          ul.products {
          grid-column-gap: 20px;
          grid-row-gap: 40px;
        }
      } /* Start custom CSS */
      .notitle h5 {
        display: none !important;
      } /* End custom CSS */
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
      .previous, .next {display:none!important}
      `}
      </style>
      <Head>
        <title>{categoryDetail.name} - Luvin</title>
        <meta name="description" content={categoryDetail.description} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={`${categoryDetail.name} - Luvin`} />
        <meta property="og:url" content="https://luvin.com.vn" />
        <meta property="og:site_name" content="Luvin" />
        <meta property="og:image" content={categoryDetail.image} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <link
          rel="stylesheet"
          id="woocommerce-advanced-product-labels-css"
          href="/css/woocommerce-advanced-product-labels/woocommerce-advanced-product-labels.min.css"
          type="text/css"
          media="all"
        />
      </Head>
      {loading && <Loading />}
      <div className="elementor elementor-503 elementor-location-archive product">
        <div className="elementor-section-wrap">
          <section className="elementor-section elementor-top-section elementor-element elementor-element-fd23492 elementor-section-boxed elementor-section-height-default elementor-section-height-default">
            <div className="elementor-container elementor-column-gap-default">
              <div className="elementor-row">
                <div className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-b471e94">
                  <div className="elementor-column-wrap elementor-element-populated">
                    <div className="elementor-widget-wrap">
                      <div
                        style={{ display: "block" }}
                        className="elementor-element elementor-element-9fa1cba elementor-widget elementor-widget-theme-archive-title elementor-page-title elementor-widget-heading"
                      >
                        <div className="elementor-widget-container">
                          <h1 className="elementor-heading-title elementor-size-default">
                            {categoryDetail.name}
                          </h1>
                        </div>
                      </div>
                      <section className="elementor-section elementor-inner-section elementor-element elementor-element-4f3942e elementor-section-content-middle elementor-section-boxed elementor-section-height-default elementor-section-height-default">
                        <div className="elementor-container elementor-column-gap-default">
                          <div className="elementor-row">
                            <div className="elementor-column elementor-col-25 elementor-inner-column elementor-element elementor-element-22b68fc">
                              <div className="elementor-column-wrap elementor-element-populated">
                                <div className="elementor-widget-wrap">
                                  <div className="elementor-element elementor-element-27e2282 elementor-widget elementor-widget-heading">
                                    <div className="elementor-widget-container">
                                      <p className="elementor-heading-title elementor-size-default">
                                        Hiển thị {(page - 1) * limit + 1}–
                                        {page * limit} trên {total} sản phẩm
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="elementor-column elementor-col-25 elementor-inner-column elementor-element elementor-element-2b3f6e1">
                              <div className="elementor-column-wrap elementor-element-populated">
                                <div className="elementor-widget-wrap">
                                  <div className="elementor-element elementor-element-15076ad elementor-widget elementor-widget-html">
                                    <div className="elementor-widget-container">
                                      <div className="elementor-element elementor-element-1a01a6d notitle elementor-widget elementor-widget-wp-widget-woocommerce_layered_nav">
                                        <div className="elementor-widget-container">
                                          <div className="woocommerce widget_layered_nav woocommerce-widget-layered-nav">
                                            <h5>Lọc theo</h5>
                                            <form className="woocommerce-widget-layered-nav-dropdown">
                                              <select
                                                className="woocommerce-widget-layered-nav-dropdown"
                                                tabindex="-1"
                                                aria-hidden="true"
                                                value={sort}
                                                onChange={(event) => {
                                                  dispatch(
                                                    getProducts(
                                                      categorySlug,
                                                      limit,
                                                      1,
                                                      event.target.value,
                                                      type,
                                                      origin
                                                    )
                                                  );
                                                }}
                                              >
                                                <option value="">
                                                  Lọc theo
                                                </option>
                                                <option value="descTime">
                                                  Mới nhất
                                                </option>
                                                <option value="ascPrice">
                                                  Giá từ thấp đến cao
                                                </option>
                                                <option value="descPrice">
                                                  Giá từ cao đến thấp
                                                </option>
                                              </select>
                                            </form>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="elementor-column elementor-col-25 elementor-inner-column elementor-element elementor-element-d3e870e">
                              <div className="elementor-column-wrap elementor-element-populated">
                                <div className="elementor-widget-wrap">
                                  <div className="elementor-element elementor-element-1a01a6d notitle elementor-widget elementor-widget-wp-widget-woocommerce_layered_nav">
                                    <div className="elementor-widget-container">
                                      <div className="woocommerce widget_layered_nav woocommerce-widget-layered-nav">
                                        <h5>Lọc theo</h5>
                                        <form className="woocommerce-widget-layered-nav-dropdown">
                                          <select
                                            className="woocommerce-widget-layered-nav-dropdown dropdown_layered_nav_loai-vang"
                                            value={type}
                                            onChange={(event) => {
                                              dispatch(
                                                getProducts(
                                                  categorySlug,
                                                  limit,
                                                  1,
                                                  sort,
                                                  event.target.value,
                                                  origin
                                                )
                                              );
                                            }}
                                          >
                                            <option value="">
                                              Bất kỳ Loại vang
                                            </option>
                                            <option value="vang đỏ">
                                              Vang đỏ
                                            </option>
                                            <option value="vang hồng">
                                              Vang hồng
                                            </option>
                                            <option value="vang nổ">
                                              Vang nổ
                                            </option>
                                            <option value="vang trắng">
                                              Vang trắng
                                            </option>
                                          </select>
                                        </form>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="elementor-column elementor-col-25 elementor-inner-column elementor-element elementor-element-09fb8ac">
                              <div className="elementor-column-wrap elementor-element-populated">
                                <div className="elementor-widget-wrap">
                                  <div className="elementor-element elementor-element-85e4633 notitle elementor-widget elementor-widget-wp-widget-woocommerce_layered_nav">
                                    <div className="elementor-widget-container">
                                      <div className="woocommerce widget_layered_nav woocommerce-widget-layered-nav">
                                        <h5>Lọc theo</h5>
                                        <form className="woocommerce-widget-layered-nav-dropdown">
                                          <select
                                            className="woocommerce-widget-layered-nav-dropdown dropdown_layered_nav_nguon-goc-vang"
                                            value={origin}
                                            onChange={(event) => {
                                              dispatch(
                                                getProducts(
                                                  categorySlug,
                                                  limit,
                                                  1,
                                                  sort,
                                                  type,
                                                  event.target.value
                                                )
                                              );
                                            }}
                                          >
                                            <option value="">
                                              Bất kỳ Nguồn gốc vang
                                            </option>
                                            <option value="đức">Đức</option>
                                            <option value="hungary">
                                              Hungary
                                            </option>
                                            <option value="new zealand">
                                              New Zealand
                                            </option>
                                            <option value="nga">Nga</option>
                                            <option value="pháp">Pháp</option>
                                            <option value="scotland">
                                              Scotland
                                            </option>
                                            <option value="việt nam">
                                              Việt Nam
                                            </option>
                                          </select>
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
                      <div className="elementor-element elementor-element-477d2cd elementor-products-grid elementor-wc-products elementor-show-pagination-border-yes elementor-widget elementor-widget-wc-archive-products">
                        <div className="elementor-widget-container">
                          <div className="woocommerce columns-4">
                            <div className="woocommerce-notices-wrapper"></div>
                            <ul className="products columns-4">
                              {products.map((product) => {
                                const {
                                  _id,
                                  slug,
                                  ident,
                                  name,
                                  description,
                                  type,
                                  origin,
                                  discount,
                                  price,
                                  reviews,
                                  images,
                                } = product;
                                const discountPercent = Math.ceil(
                                  (discount / price) * 100
                                );

                                const totalRate = sum(
                                  reviews.map(({ rate }) => rate || 0)
                                );
                                const ratePercent =
                                  (totalRate / reviews.length / 5) * 100 || 0;
                                const isInCart = includes(
                                  productIdsSelected,
                                  _id
                                );
                                return (
                                  <li
                                    className="product type-product post-280 status-publish first instock product_cat-banh-mi product_cat-ruou-vang has-post-thumbnail sale shipping-taxable purchasable product-type-simple"
                                    key={ident}
                                  >
                                    <Link
                                      href="/[category]/[slug].js"
                                      as={`/${categorySlug}/${slug}`}
                                    >
                                      <a className="woocommerce-LoopProduct-link woocommerce-loop-product__link">
                                        <img
                                          width="300"
                                          height="360"
                                          src={images[0]}
                                          className="attachment-woocommerce_thumbnail size-woocommerce_thumbnail"
                                          alt=""
                                        />
                                        {!!discountPercent && (
                                          <div className="wapl-label-id-484 label-wrap wapl-corner label-custom wapl-alignnone">
                                            <span
                                              className="woocommerce-advanced-product-label product-label label-custom"
                                              style={{
                                                backgroundColor: "#902535",
                                                color: "#fff",
                                              }}
                                            >
                                              <span className="wapl-label-text">
                                                {discountPercent}%
                                              </span>
                                            </span>
                                          </div>
                                        )}
                                        <h2 className="woocommerce-loop-product__title">
                                          {name}
                                        </h2>
                                        <div
                                          className="star-rating"
                                          role="img"
                                          aria-label={`Được xếp hạng ${
                                            totalRate / reviews.length
                                          } 5 sao`}
                                        >
                                          <span
                                            style={{
                                              width: `${ratePercent || 0}%`,
                                            }}
                                          >
                                            Được xếp hạng{" "}
                                            <strong class="rating">
                                              {totalRate / reviews.length}
                                            </strong>{" "}
                                            5 sao
                                          </span>
                                        </div>
                                        {/* {!!ratePercent && (
                                          
                                        )} */}
                                        <span className="price">
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
                                                {numeral(
                                                  price - discount
                                                ).format("0,0")}
                                                <span className="woocommerce-Price-currencySymbol">
                                                  &#8363;
                                                </span>
                                              </bdi>
                                            </span>
                                          </ins>
                                        </span>
                                      </a>
                                    </Link>
                                    <a
                                      style={{ cursor: "pointer" }}
                                      className={`button product_type_simple add_to_cart_button ajax_add_to_cart ${
                                        isInCart && "added"
                                      }`}
                                      onClick={() =>
                                        dispatch(addProduct(1, product))
                                      }
                                    >
                                      Đặt mua
                                    </a>
                                    {isInCart && (
                                      <Link href="/gio-hang">
                                        <a
                                          className="added_to_cart wc-forward"
                                          title="Xem giỏ hàng"
                                        >
                                          Xem giỏ hàng
                                        </a>
                                      </Link>
                                    )}
                                  </li>
                                );
                              })}
                            </ul>
                            {!!Math.ceil(total / limit) && (
                              <nav className="woocommerce-pagination">
                                <ReactPaginate
                                  previousLabel={() => null}
                                  nextLabel={() => null}
                                  forcePage={page - 1}
                                  breakLabel={"..."}
                                  breakClassName={"break-me"}
                                  pageCount={Math.ceil(total / limit)}
                                  marginPagesDisplayed={2}
                                  pageRangeDisplayed={3}
                                  onPageChange={(page) => {
                                    dispatch(
                                      getProducts(
                                        categorySlug,
                                        limit,
                                        page.selected + 1,
                                        sort,
                                        type,
                                        origin
                                      )
                                    );
                                  }}
                                  containerClassName={"page-numbers"}
                                  activeLinkClassName={"current"}
                                  pageLinkClassName="page-numbers"
                                />
                              </nav>
                            )}
                            {/* <nav className="woocommerce-pagination">
                              <ul className="page-numbers">
                                <li>
                                  <span
                                    aria-current="page"
                                    className="page-numbers current"
                                  >
                                    1
                                  </span>
                                </li>
                                <li>
                                  <a
                                    className="page-numbers"
                                    href="page/2/index.html"
                                  >
                                    2
                                  </a>
                                </li>
                                <li>
                                  <a
                                    className="next page-numbers"
                                    href="page/2/index.html"
                                  >
                                    &rarr;
                                  </a>
                                </li>
                              </ul>
                            </nav> */}
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
    </Content>
  );
}

Category.propTypes = {};

Category.getInitialProps = async (props) => {
  const { store, req, accessToken, query } = props.ctx;
  const { category: categorySlug } = query;
  if (!!req) {
    store.dispatch(getProducts(categorySlug, 12, 1));
  }
  return { categorySlug };
};

export default Category;