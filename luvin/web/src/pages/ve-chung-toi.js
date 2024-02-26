import React, { useEffect } from "react";
import PropTypes from "prop-types";
import Head from "next/head";
import Swiper, { Pagination } from "swiper";
import { useSelector, useDispatch } from "react-redux";
import Link from "next/link";

import Content from "../components/Layout/Content";
// import { getPage, resetState } from "../actions/page";
import { getConfigs } from "../actions/aboutUs";
import {
  getUpcommingEvents,
  getOccurredEvents,
  resetState,
} from "../actions/events";

// const pageStateSelector = (state) => state.page;
const aboutUsStateSelector = (state) => state.aboutUs;
const eventsStateSelector = (state) => state.events;

function AboutUs(props) {
  const dispatch = useDispatch();
  // const { pageContent, loading, fetched, errorMessage } = useSelector(
  //   pageStateSelector
  // );
  const { configs } = useSelector(aboutUsStateSelector);
  const { upcomming, occurred } = useSelector(eventsStateSelector);

  useEffect(() => {
    dispatch(getConfigs());
    dispatch(getOccurredEvents(6, 1, ""));
    return () => {
      dispatch(resetState());
    };
  }, []);

  useEffect(() => {
    Swiper.use([Pagination]);
    const bannerSwiper = new Swiper(".swiper-partner", {
      // loop: true,
      slidesPerView: 4,
      spaceBetween: 10,

      // Navigation arrows
      pagination: {
        el: ".swiper-pagination",
        // type: "bullets",
      },
    });
  }, []);

  return (
    <Content className="page-template-default page page-id-17 page-parent wp-custom-logo theme-hello-elementor woocommerce-no-js elementor-default elementor-kit-76 elementor-page elementor-page-17">
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
      .elementor-17 .elementor-element.elementor-element-7a35563 {
        padding: 50px 0px 50px 0px;
      }
      .elementor-17 .elementor-element.elementor-element-956c3fb {
        text-align: center;
      }
      .elementor-17
        .elementor-element.elementor-element-956c3fb
        .elementor-heading-title {
        color: #902535;
        font-family: "Arial", Sans-serif;
        font-size: 30px;
        font-weight: 400;
        text-transform: uppercase;
      }
      .elementor-17
        .elementor-element.elementor-element-11ea24c:not(.elementor-motion-effects-element-type-background),
      .elementor-17
        .elementor-element.elementor-element-11ea24c
        > .elementor-motion-effects-container
        > .elementor-motion-effects-layer {
        background-color: #f2f2f2;
      }
      .elementor-17 .elementor-element.elementor-element-11ea24c {
        transition: background 0.3s, border 0.3s, border-radius 0.3s,
          box-shadow 0.3s;
        padding: 30px 0px 30px 0px;
      }
      .elementor-17
        .elementor-element.elementor-element-11ea24c
        > .elementor-background-overlay {
        transition: background 0.3s, border-radius 0.3s, opacity 0.3s;
      }
      .elementor-17 .elementor-element.elementor-element-3ee5f8d {
        text-align: center;
      }
      .elementor-17
        .elementor-element.elementor-element-3ee5f8d
        .elementor-heading-title {
        color: #902535;
        font-family: "Arial", Sans-serif;
        font-size: 30px;
        font-weight: 400;
        text-transform: uppercase;
      }
      .elementor-17 .elementor-element.elementor-element-d2ad61b {
        padding: 30px 0px 30px 0px;
      }
      .elementor-17 .elementor-element.elementor-element-be24d73 {
        text-align: center;
      }
      .elementor-17
        .elementor-element.elementor-element-be24d73
        .elementor-heading-title {
        color: #902535;
        font-family: "Arial", Sans-serif;
        font-size: 30px;
        font-weight: 400;
        text-transform: uppercase;
      }
      .elementor-17 .elementor-element.elementor-element-77fecba {
        text-align: center;
      }
      .elementor-msie
        .elementor-17
        .elementor-element.elementor-element-ff6306c
        .elementor-portfolio-item {
        width: calc(100% / 3);
      }
      .elementor-17
        .elementor-element.elementor-element-ff6306c
        .elementor-post__thumbnail__link {
        padding-bottom: calc(0.66 * 100%);
      }
      .elementor-17 .elementor-element.elementor-element-ff6306c:after {
        content: "0.66";
        position: absolute;
        color: transparent;
      }
      .elementor-17 .elementor-element.elementor-element-ff6306c {
        --grid-column-gap: 20px;
        --grid-row-gap: 20px;
      }
      .elementor-17
        .elementor-element.elementor-element-7ddb050:not(.elementor-motion-effects-element-type-background),
      .elementor-17
        .elementor-element.elementor-element-7ddb050
        > .elementor-motion-effects-container
        > .elementor-motion-effects-layer {
        background-color: #f2f2f2;
      }
      .elementor-17 .elementor-element.elementor-element-7ddb050 {
        transition: background 0.3s, border 0.3s, border-radius 0.3s,
          box-shadow 0.3s;
        padding: 30px 0px 30px 0px;
      }
      .elementor-17
        .elementor-element.elementor-element-7ddb050
        > .elementor-background-overlay {
        transition: background 0.3s, border-radius 0.3s, opacity 0.3s;
      }
      .elementor-17 .elementor-element.elementor-element-b7f4d7d {
        text-align: center;
      }
      .elementor-17
        .elementor-element.elementor-element-b7f4d7d
        .elementor-heading-title {
        color: #902535;
        font-family: "Arial", Sans-serif;
        font-size: 30px;
        font-weight: 400;
        text-transform: uppercase;
      }
      .elementor-17 .elementor-element.elementor-element-7a321f9 {
        text-align: center;
      }
      :root {
        --page-title-display: none;
      }
      @media (max-width: 1024px) {
        .elementor-17
          .elementor-element.elementor-element-956c3fb
          .elementor-heading-title {
          font-size: 75px;
        }
        .elementor-17
          .elementor-element.elementor-element-3ee5f8d
          .elementor-heading-title {
          font-size: 75px;
        }
        .elementor-17
          .elementor-element.elementor-element-be24d73
          .elementor-heading-title {
          font-size: 75px;
        }
        .elementor-msie
          .elementor-17
          .elementor-element.elementor-element-ff6306c
          .elementor-portfolio-item {
          width: calc(100% / 2);
        }
        .elementor-17
          .elementor-element.elementor-element-b7f4d7d
          .elementor-heading-title {
          font-size: 75px;
        }
      }
      @media (max-width: 767px) {
        .elementor-17
          .elementor-element.elementor-element-956c3fb
          .elementor-heading-title {
          font-size: 50px;
        }
        .elementor-17
          .elementor-element.elementor-element-3ee5f8d
          .elementor-heading-title {
          font-size: 50px;
        }
        .elementor-17
          .elementor-element.elementor-element-be24d73
          .elementor-heading-title {
          font-size: 50px;
        }
        .elementor-msie
          .elementor-17
          .elementor-element.elementor-element-ff6306c
          .elementor-portfolio-item {
          width: calc(100% / 1);
        }
        .elementor-17
          .elementor-element.elementor-element-b7f4d7d
          .elementor-heading-title {
          font-size: 50px;
        }
      } /* Start custom CSS for text-editor, class: .elementor-element-2672d10 */
      .aboutus-text {
        max-width: 600px;
        margin: 0 auto;
        text-align: center;
      } /* End custom CSS */
      /* Start custom CSS for heading, class: .elementor-element-77fecba */
      .chungnhan-text {
        max-width: 600px;
        margin: 0 auto;
        text-align: center;
      } /* End custom CSS */
      /* Start custom CSS for heading, class: .elementor-element-7a321f9 */
      .chungnhan-text {
        max-width: 600px;
        margin: 0 auto;
        text-align: center;
      } /* End custom CSS */
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
        <title>Về chúng tôi - Luvin</title>
        <meta
          name="description"
          content="Tất cả các sản phẩm rượu vang được lên men tự nhiên và có nồng độ cồn dưới 15 độ"
        />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Về chúng tôi - Luvin" />
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
        className="site-main post-17 page type-page status-publish hentry"
        role="main"
      >
        <div className="page-content">
          <div className="elementor elementor-17">
            <div className="elementor-inner">
              <div className="elementor-section-wrap">
                <section className="elementor-section elementor-top-section elementor-element elementor-element-7a35563 elementor-section-boxed elementor-section-height-default elementor-section-height-default">
                  <div className="elementor-container elementor-column-gap-default">
                    <div className="elementor-row">
                      <div className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-334a5d2">
                        <div className="elementor-column-wrap elementor-element-populated">
                          <div className="elementor-widget-wrap">
                            <div className="elementor-element elementor-element-956c3fb elementor-widget elementor-widget-heading">
                              <div className="elementor-widget-container">
                                <h2 className="elementor-heading-title elementor-size-default">
                                  {configs.title}
                                </h2>
                              </div>
                            </div>
                            <div
                              className="elementor-element elementor-element-2672d10 aboutus-text elementor-widget elementor-widget-text-editor"
                              data-id="2672d10"
                              data-element_type="widget"
                              data-widget_type="text-editor.default"
                            >
                              <div className="elementor-widget-container">
                                <div className="elementor-text-editor elementor-clearfix">
                                  {configs.description}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
                <section className="elementor-section elementor-top-section elementor-element elementor-element-11ea24c elementor-section-boxed elementor-section-height-default elementor-section-height-default">
                  <div className="elementor-container elementor-column-gap-extended">
                    <div className="elementor-row">
                      <div className="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-fa50191">
                        <div className="elementor-column-wrap elementor-element-populated">
                          <div className="elementor-widget-wrap">
                            <div className="elementor-element elementor-element-329834f elementor-widget elementor-widget-image">
                              <div className="elementor-widget-container">
                                <div className="elementor-image">
                                  <img
                                    width="658"
                                    height="539"
                                    src={configs.title2Image}
                                    className="attachment-large size-large"
                                    alt=""
                                    sizes="(max-width: 658px) 100vw, 658px"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-2cc9418">
                        <div className="elementor-column-wrap elementor-element-populated">
                          <div className="elementor-widget-wrap">
                            <div className="elementor-element elementor-element-3ee5f8d elementor-widget elementor-widget-heading">
                              <div className="elementor-widget-container">
                                <h2 className="elementor-heading-title elementor-size-default">
                                  {configs.title2}
                                </h2>
                              </div>
                            </div>
                            <div className="elementor-element elementor-element-4b7f7c4 elementor-widget elementor-widget-text-editor">
                              <div className="elementor-widget-container">
                                <div className="elementor-text-editor elementor-clearfix">
                                  {configs.description2}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
                <section className="elementor-section elementor-top-section elementor-element elementor-element-d2ad61b elementor-section-boxed elementor-section-height-default elementor-section-height-default">
                  <div className="elementor-container elementor-column-gap-default">
                    <div className="elementor-row">
                      <div className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-458b1c4">
                        <div className="elementor-column-wrap elementor-element-populated">
                          <div className="elementor-widget-wrap">
                            <div className="elementor-element elementor-element-be24d73 elementor-widget elementor-widget-heading">
                              <div className="elementor-widget-container">
                                <h2 className="elementor-heading-title elementor-size-default">
                                  {configs.title3}
                                </h2>
                              </div>
                            </div>
                            <div className="elementor-element elementor-element-77fecba chungnhan-text elementor-widget elementor-widget-heading">
                              <div className="elementor-widget-container">
                                {configs.description3}
                              </div>
                            </div>
                            <div className="elementor-element elementor-element-ff6306c elementor-grid-3 elementor-grid-tablet-2 elementor-grid-mobile-1 elementor-widget elementor-widget-portfolio">
                              <div className="elementor-widget-container">
                                <div className="elementor-portfolio elementor-grid elementor-posts-container">
                                  {occurred.events.map((event) => {
                                    const {
                                      title,
                                      description,
                                      slug,
                                      image,
                                      startedAt,
                                      endedAt,
                                    } = event;
                                    return (
                                      <article className="elementor-portfolio-item elementor-post post-608 post type-post status-publish format-standard has-post-thumbnail hentry category-su-kien">
                                        <Link
                                          href="/su-kien/[slug].js"
                                          as={`/su-kien/${slug}`}
                                        >
                                          <a className="elementor-post__thumbnail__link">
                                            <div className="elementor-portfolio-item__img elementor-post__thumbnail">
                                              <img
                                                width="300"
                                                height="200"
                                                src={image}
                                                className="attachment-medium size-medium"
                                                alt=""
                                                sizes="(max-width: 300px) 100vw, 300px"
                                              />
                                            </div>
                                            <div className="elementor-portfolio-item__overlay">
                                              <h3 className="elementor-portfolio-item__title">
                                                {title}
                                              </h3>
                                            </div>
                                          </a>
                                        </Link>
                                      </article>
                                    );
                                  })}
                                  {/* <article className="elementor-portfolio-item elementor-post post-608 post type-post status-publish format-standard has-post-thumbnail hentry category-su-kien">
                                    <a
                                      className="elementor-post__thumbnail__link"
                                      href="../tieu-de-su-kien-da-qua-4/index.html"
                                    >
                                      <div className="elementor-portfolio-item__img elementor-post__thumbnail">
                                        <img
                                          width="300"
                                          height="200"
                                          src="../wp-content/uploads/pexels-helena-lopes-696219-300x200.jpg"
                                          className="attachment-medium size-medium"
                                          alt=""
                                          sizes="(max-width: 300px) 100vw, 300px"
                                        />
                                      </div>
                                      <div className="elementor-portfolio-item__overlay">
                                        <h3 className="elementor-portfolio-item__title">
                                          Tiêu đề Sự kiện đã qua
                                        </h3>
                                      </div>
                                    </a>
                                  </article>
                                  <article className="elementor-portfolio-item elementor-post post-607 post type-post status-publish format-standard has-post-thumbnail hentry category-su-kien">
                                    <a
                                      className="elementor-post__thumbnail__link"
                                      href="../tieu-de-su-kien-da-qua-3/index.html"
                                    >
                                      <div className="elementor-portfolio-item__img elementor-post__thumbnail">
                                        <img
                                          width="300"
                                          height="200"
                                          src="../wp-content/uploads/pexels-helena-lopes-696219-300x200.jpg"
                                          className="attachment-medium size-medium"
                                          alt=""
                                          sizes="(max-width: 300px) 100vw, 300px"
                                        />
                                      </div>
                                      <div className="elementor-portfolio-item__overlay">
                                        <h3 className="elementor-portfolio-item__title">
                                          Tiêu đề sự kiện đã qua
                                        </h3>
                                      </div>
                                    </a>
                                  </article>
                                  <article className="elementor-portfolio-item elementor-post post-606 post type-post status-publish format-standard has-post-thumbnail hentry category-su-kien">
                                    <a
                                      className="elementor-post__thumbnail__link"
                                      href="../tieu-de-su-kien-da-qua-2/index.html"
                                    >
                                      <div className="elementor-portfolio-item__img elementor-post__thumbnail">
                                        <img
                                          width="300"
                                          height="200"
                                          src="../wp-content/uploads/pexels-helena-lopes-696219-300x200.jpg"
                                          className="attachment-medium size-medium"
                                          alt=""
                                          sizes="(max-width: 300px) 100vw, 300px"
                                        />
                                      </div>
                                      <div className="elementor-portfolio-item__overlay">
                                        <h3 className="elementor-portfolio-item__title">
                                          Tiêu đề Sự kiện đã qua
                                        </h3>
                                      </div>
                                    </a>
                                  </article>
                                  <article className="elementor-portfolio-item elementor-post post-605 post type-post status-publish format-standard has-post-thumbnail hentry category-su-kien">
                                    <a
                                      className="elementor-post__thumbnail__link"
                                      href="../tieu-de-su-kien-da-qua/index.html"
                                    >
                                      <div className="elementor-portfolio-item__img elementor-post__thumbnail">
                                        <img
                                          width="300"
                                          height="200"
                                          src="../wp-content/uploads/pexels-helena-lopes-696219-300x200.jpg"
                                          className="attachment-medium size-medium"
                                          alt=""
                                          sizes="(max-width: 300px) 100vw, 300px"
                                        />
                                      </div>
                                      <div className="elementor-portfolio-item__overlay">
                                        <h3 className="elementor-portfolio-item__title">
                                          Tiêu đề sự kiện đã qua
                                        </h3>
                                      </div>
                                    </a>
                                  </article>
                                  <article className="elementor-portfolio-item elementor-post post-604 post type-post status-publish format-standard has-post-thumbnail hentry category-su-kien">
                                    <a
                                      className="elementor-post__thumbnail__link"
                                      href="../tieu-de-su-kien-da-qua-8/index.html"
                                    >
                                      <div className="elementor-portfolio-item__img elementor-post__thumbnail">
                                        <img
                                          width="300"
                                          height="200"
                                          src="../wp-content/uploads/pexels-helena-lopes-696219-300x200.jpg"
                                          className="attachment-medium size-medium"
                                          alt=""
                                          sizes="(max-width: 300px) 100vw, 300px"
                                        />
                                      </div>
                                      <div className="elementor-portfolio-item__overlay">
                                        <h3 className="elementor-portfolio-item__title">
                                          Tiêu đề Sự kiện đã qua
                                        </h3>
                                      </div>
                                    </a>
                                  </article>
                                  <article className="elementor-portfolio-item elementor-post post-603 post type-post status-publish format-standard has-post-thumbnail hentry category-su-kien">
                                    <a
                                      className="elementor-post__thumbnail__link"
                                      href="../tieu-de-su-kien-da-qua-7/index.html"
                                    >
                                      <div className="elementor-portfolio-item__img elementor-post__thumbnail">
                                        <img
                                          width="300"
                                          height="200"
                                          src="../wp-content/uploads/pexels-helena-lopes-696219-300x200.jpg"
                                          className="attachment-medium size-medium"
                                          alt=""
                                          sizes="(max-width: 300px) 100vw, 300px"
                                        />
                                      </div>
                                      <div className="elementor-portfolio-item__overlay">
                                        <h3 className="elementor-portfolio-item__title">
                                          Tiêu đề sự kiện đã qua
                                        </h3>
                                      </div>
                                    </a>
                                  </article> */}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
                <section className="elementor-section elementor-top-section elementor-element elementor-element-7ddb050 elementor-section-boxed elementor-section-height-default elementor-section-height-default">
                  <div className="elementor-container elementor-column-gap-default">
                    <div className="elementor-row">
                      <div className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-5fa446a">
                        <div className="elementor-column-wrap elementor-element-populated">
                          <div className="elementor-widget-wrap">
                            <div className="elementor-element elementor-element-b7f4d7d elementor-widget elementor-widget-heading">
                              <div className="elementor-widget-container">
                                <h2 className="elementor-heading-title elementor-size-default">
                                  {configs.title4}
                                </h2>
                              </div>
                            </div>
                            <div className="elementor-element elementor-element-7a321f9 chungnhan-text elementor-widget elementor-widget-heading">
                              <div className="elementor-widget-container">
                                {configs.description4}
                              </div>
                            </div>
                            <div className="elementor-element elementor-element-65eb585 elementor-pagination-position-outside elementor-widget elementor-widget-image-carousel">
                              <div className="elementor-widget-container">
                                <div
                                  className="elementor-image-carousel-wrapper swiper-container swiper-partner"
                                  dir="ltr"
                                >
                                  <div className="elementor-image-carousel swiper-wrapper">
                                    <div className="swiper-slide">
                                      <figure className="swiper-slide-inner">
                                        <img
                                          className="swiper-slide-image"
                                          src="/images/CBbank-logo.png"
                                          alt="CBbank-logo"
                                        />
                                      </figure>
                                    </div>
                                    <div className="swiper-slide">
                                      <figure className="swiper-slide-inner">
                                        <img
                                          className="swiper-slide-image"
                                          src="/images/logo-ngan-hang-ACB.png"
                                          alt="logo-ngan-hang-ACB"
                                        />
                                      </figure>
                                    </div>
                                    <div className="swiper-slide">
                                      <figure className="swiper-slide-inner">
                                        <img
                                          className="swiper-slide-image"
                                          src="/images/logo-ngan-hang-BIDV.png"
                                          alt="logo-ngan-hang-BIDV"
                                        />
                                      </figure>
                                    </div>
                                    <div className="swiper-slide">
                                      <figure className="swiper-slide-inner">
                                        <img
                                          className="swiper-slide-image"
                                          src="/images/logo-ngan-hang-Sacombank.png"
                                          alt="logo-ngan-hang-Sacombank"
                                        />
                                      </figure>
                                    </div>
                                    <div className="swiper-slide">
                                      <figure className="swiper-slide-inner">
                                        <img
                                          className="swiper-slide-image"
                                          src="/images/logo-ngan-hang-SCB.png"
                                          alt="logo-ngan-hang-SCB"
                                        />
                                      </figure>
                                    </div>
                                    <div className="swiper-slide">
                                      <figure className="swiper-slide-inner">
                                        <img
                                          className="swiper-slide-image"
                                          src="/images/logo-ngan-hang-Techcombank.png"
                                          alt="logo-ngan-hang-Techcombank"
                                        />
                                      </figure>
                                    </div>
                                    <div className="swiper-slide">
                                      <figure className="swiper-slide-inner">
                                        <img
                                          className="swiper-slide-image"
                                          src="/images/logo-ngan-hang-Vietcombank.png"
                                          alt="logo-ngan-hang-Vietcombank"
                                        />
                                      </figure>
                                    </div>
                                    <div className="swiper-slide">
                                      <figure className="swiper-slide-inner">
                                        <img
                                          className="swiper-slide-image"
                                          src="/images/logo-ngan-hang-Vietinbank.png"
                                          alt="logo-ngan-hang-Vietinbank"
                                        />
                                      </figure>
                                    </div>
                                    <div className="swiper-slide">
                                      <figure className="swiper-slide-inner">
                                        <img
                                          className="swiper-slide-image"
                                          src="/images/logo-ngan-hang-VPbank.png"
                                          alt="logo-ngan-hang-VPbank"
                                        />
                                      </figure>
                                    </div>
                                    <div className="swiper-slide">
                                      <figure className="swiper-slide-inner">
                                        <img
                                          className="swiper-slide-image"
                                          src="/images/MSB-bank-logo.png"
                                          alt="MSB-bank-logo"
                                        />
                                      </figure>
                                    </div>
                                    <div className="swiper-slide">
                                      <figure className="swiper-slide-inner">
                                        <img
                                          className="swiper-slide-image"
                                          src="/images/Oceanbank-logo.png"
                                          alt="Oceanbank-logo"
                                        />
                                      </figure>
                                    </div>
                                  </div>
                                  <div className="swiper-pagination"></div>
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
      </main>
    </Content>
  );
}

AboutUs.propTypes = {};

export default AboutUs;
