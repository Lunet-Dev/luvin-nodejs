import React, { useEffect } from "react";
import PropTypes from "prop-types";
import Head from "next/head";
import { useSelector, useDispatch } from "react-redux";
import numeral from "numeral";
import Link from "next/link";

import { getConfigs } from "../actions/tasty";

import Content from "../components/Layout/Content";

const tastyStateSelector = (state) => state.tasty;

function tasty(props) {
  const dispatch = useDispatch();
  const { configs } = useSelector(tastyStateSelector);
  useEffect(() => {
    dispatch(getConfigs());
  }, []);
  return (
    <Content className="page-template-default page page-id-14 logged-in wp-custom-logo theme-hello-elementor woocommerce-js elementor-default elementor-kit-76 elementor-page elementor-page-14">
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
      .elementor-14 .elementor-element.elementor-element-e94d107 {
        margin-top: 30px;
        margin-bottom: 30px;
      }
      .elementor-14
        .elementor-element.elementor-element-bb571ca:not(.elementor-motion-effects-element-type-background)
        > .elementor-column-wrap,
      .elementor-14
        .elementor-element.elementor-element-bb571ca
        > .elementor-column-wrap
        > .elementor-motion-effects-container
        > .elementor-motion-effects-layer {
        background-image: url("../wp-content/uploads/bg.jpg");
      }
      .elementor-14
        .elementor-element.elementor-element-bb571ca
        > .elementor-element-populated {
        transition: background 0.3s, border 0.3s, border-radius 0.3s,
          box-shadow 0.3s;
        padding: 100px 100px 100px 100px;
      }
      .elementor-14
        .elementor-element.elementor-element-bb571ca
        > .elementor-element-populated
        > .elementor-background-overlay {
        transition: background 0.3s, border-radius 0.3s, opacity 0.3s;
      }
      .elementor-14
        .elementor-element.elementor-element-db3fcf5
        .elementor-heading-title {
        color: #ffffff;
        font-family: "UTM Roman Classic", Sans-serif;
        font-size: 36px;
      }
      .elementor-14 .elementor-element.elementor-element-6346cbb {
        --divider-border-style: solid;
        --divider-color: #ffffff;
        --divider-border-width: 2px;
      }
      .elementor-14
        .elementor-element.elementor-element-6346cbb
        .elementor-divider-separator {
        width: 120px;
      }
      .elementor-14
        .elementor-element.elementor-element-6346cbb
        .elementor-divider {
        padding-top: 15px;
        padding-bottom: 15px;
      }
      .elementor-14
        .elementor-element.elementor-element-d995e72
        .elementor-heading-title {
        color: #ffffff;
        line-height: 1.4em;
      }
      .elementor-14
        .elementor-element.elementor-element-8e3ad8d
        > .elementor-container
        > .elementor-row
        > .elementor-column
        > .elementor-column-wrap
        > .elementor-widget-wrap {
        align-content: flex-start;
        align-items: flex-start;
      }
      .elementor-14 .elementor-element.elementor-element-8e3ad8d {
        margin-top: 0px;
        margin-bottom: 0px;
        padding: 0px 0px 0px 0px;
      }
      .elementor-14
        .elementor-element.elementor-element-429b651
        > .elementor-column-wrap
        > .elementor-widget-wrap
        > .elementor-widget:not(.elementor-widget__width-auto):not(.elementor-widget__width-initial):not(:last-child):not(.elementor-absolute) {
        margin-bottom: 20px;
      }
      .elementor-14
        .elementor-element.elementor-element-429b651
        > .elementor-element-populated {
        margin: 0px 0px 0px 0px;
      }
      .elementor-14
        .elementor-element.elementor-element-1bf3fca
        .elementor-heading-title {
        color: var(--e-global-color-primary);
        font-family: "UTM Roman Classic", Sans-serif;
      }
      .elementor-14
        .elementor-element.elementor-element-1bf3fca
        > .elementor-widget-container {
        padding: 0px 0px 80px 0px;
      }
      .elementor-14
        .elementor-element.elementor-element-dbab895
        .elementor-heading-title {
        color: var(--e-global-color-primary);
        font-family: "UTM Roman Classic", Sans-serif;
        font-size: 26px;
      }
      .elementor-14
        .elementor-element.elementor-element-ee32282
        .elementor-heading-title {
        line-height: 1.4em;
      }
      .elementor-14 .elementor-element.elementor-element-5225857 {
        border-style: solid;
        border-width: 1px 1px 1px 1px;
        border-color: #dfdfdf;
        transition: background 0.3s, border 0.3s, border-radius 0.3s,
          box-shadow 0.3s;
        margin-top: 0px;
        margin-bottom: 10px;
        padding: 10px 10px 10px 10px;
      }
      .elementor-14
        .elementor-element.elementor-element-5225857
        > .elementor-background-overlay {
        transition: background 0.3s, border-radius 0.3s, opacity 0.3s;
      }
      .elementor-14
        .elementor-element.elementor-element-446644f
        .elementor-heading-title {
        color: var(--e-global-color-primary);
        font-family: "UTM Roman Classic", Sans-serif;
      }
      .elementor-14
        .elementor-element.elementor-element-205ae99
        .elementor-icon-list-items:not(.elementor-inline-items)
        .elementor-icon-list-item:not(:last-child) {
        padding-bottom: calc(5px / 2);
      }
      .elementor-14
        .elementor-element.elementor-element-205ae99
        .elementor-icon-list-items:not(.elementor-inline-items)
        .elementor-icon-list-item:not(:first-child) {
        margin-top: calc(5px / 2);
      }
      .elementor-14
        .elementor-element.elementor-element-205ae99
        .elementor-icon-list-items.elementor-inline-items
        .elementor-icon-list-item {
        margin-right: calc(5px / 2);
        margin-left: calc(5px / 2);
      }
      .elementor-14
        .elementor-element.elementor-element-205ae99
        .elementor-icon-list-items.elementor-inline-items {
        margin-right: calc(-5px / 2);
        margin-left: calc(-5px / 2);
      }
      body.rtl
        .elementor-14
        .elementor-element.elementor-element-205ae99
        .elementor-icon-list-items.elementor-inline-items
        .elementor-icon-list-item:after {
        left: calc(-5px / 2);
      }
      body:not(.rtl)
        .elementor-14
        .elementor-element.elementor-element-205ae99
        .elementor-icon-list-items.elementor-inline-items
        .elementor-icon-list-item:after {
        right: calc(-5px / 2);
      }
      .elementor-14
        .elementor-element.elementor-element-205ae99
        .elementor-icon-list-icon
        i {
        font-size: 14px;
      }
      .elementor-14
        .elementor-element.elementor-element-205ae99
        .elementor-icon-list-icon
        svg {
        width: 14px;
      }
      .elementor-14
        .elementor-element.elementor-element-dbf0963
        .elementor-price-list-header {
        font-size: 14px;
        font-weight: 400;
      }
      .elementor-14
        .elementor-element.elementor-element-dbf0963
        .elementor-price-list-separator {
        border-bottom-style: none;
      }
      body.rtl
        .elementor-14
        .elementor-element.elementor-element-dbf0963
        .elementor-price-list-image {
        padding-left: calc(20px / 2);
      }
      body.rtl
        .elementor-14
        .elementor-element.elementor-element-dbf0963
        .elementor-price-list-image
        + .elementor-price-list-text {
        padding-right: calc(20px / 2);
      }
      body:not(.rtl)
        .elementor-14
        .elementor-element.elementor-element-dbf0963
        .elementor-price-list-image {
        padding-right: calc(20px / 2);
      }
      body:not(.rtl)
        .elementor-14
        .elementor-element.elementor-element-dbf0963
        .elementor-price-list-image
        + .elementor-price-list-text {
        padding-left: calc(20px / 2);
      }
      .elementor-14
        .elementor-element.elementor-element-dbf0963
        .elementor-price-list
        li:not(:last-child) {
        margin-bottom: 0px;
      }
      .elementor-14
        .elementor-element.elementor-element-dbf0963
        .elementor-price-list-item {
        align-items: flex-start;
      }
      .elementor-14 .elementor-element.elementor-element-0ac3a21 {
        border-style: solid;
        border-width: 1px 1px 1px 1px;
        border-color: #dfdfdf;
        transition: background 0.3s, border 0.3s, border-radius 0.3s,
          box-shadow 0.3s;
        margin-top: 0px;
        margin-bottom: 10px;
        padding: 10px 10px 10px 10px;
      }
      .elementor-14
        .elementor-element.elementor-element-0ac3a21
        > .elementor-background-overlay {
        transition: background 0.3s, border-radius 0.3s, opacity 0.3s;
      }
      .elementor-14
        .elementor-element.elementor-element-7c791c8
        .elementor-heading-title {
        color: var(--e-global-color-primary);
        font-family: "UTM Roman Classic", Sans-serif;
      }
      .elementor-14
        .elementor-element.elementor-element-3a0264e
        .elementor-icon-list-items:not(.elementor-inline-items)
        .elementor-icon-list-item:not(:last-child) {
        padding-bottom: calc(5px / 2);
      }
      .elementor-14
        .elementor-element.elementor-element-3a0264e
        .elementor-icon-list-items:not(.elementor-inline-items)
        .elementor-icon-list-item:not(:first-child) {
        margin-top: calc(5px / 2);
      }
      .elementor-14
        .elementor-element.elementor-element-3a0264e
        .elementor-icon-list-items.elementor-inline-items
        .elementor-icon-list-item {
        margin-right: calc(5px / 2);
        margin-left: calc(5px / 2);
      }
      .elementor-14
        .elementor-element.elementor-element-3a0264e
        .elementor-icon-list-items.elementor-inline-items {
        margin-right: calc(-5px / 2);
        margin-left: calc(-5px / 2);
      }
      body.rtl
        .elementor-14
        .elementor-element.elementor-element-3a0264e
        .elementor-icon-list-items.elementor-inline-items
        .elementor-icon-list-item:after {
        left: calc(-5px / 2);
      }
      body:not(.rtl)
        .elementor-14
        .elementor-element.elementor-element-3a0264e
        .elementor-icon-list-items.elementor-inline-items
        .elementor-icon-list-item:after {
        right: calc(-5px / 2);
      }
      .elementor-14
        .elementor-element.elementor-element-3a0264e
        .elementor-icon-list-icon
        i {
        font-size: 14px;
      }
      .elementor-14
        .elementor-element.elementor-element-3a0264e
        .elementor-icon-list-icon
        svg {
        width: 14px;
      }
      .elementor-14
        .elementor-element.elementor-element-2ad13ed
        .elementor-price-list-header {
        font-size: 14px;
        font-weight: 400;
      }
      .elementor-14
        .elementor-element.elementor-element-2ad13ed
        .elementor-price-list-separator {
        border-bottom-style: none;
      }
      body.rtl
        .elementor-14
        .elementor-element.elementor-element-2ad13ed
        .elementor-price-list-image {
        padding-left: calc(20px / 2);
      }
      body.rtl
        .elementor-14
        .elementor-element.elementor-element-2ad13ed
        .elementor-price-list-image
        + .elementor-price-list-text {
        padding-right: calc(20px / 2);
      }
      body:not(.rtl)
        .elementor-14
        .elementor-element.elementor-element-2ad13ed
        .elementor-price-list-image {
        padding-right: calc(20px / 2);
      }
      body:not(.rtl)
        .elementor-14
        .elementor-element.elementor-element-2ad13ed
        .elementor-price-list-image
        + .elementor-price-list-text {
        padding-left: calc(20px / 2);
      }
      .elementor-14
        .elementor-element.elementor-element-2ad13ed
        .elementor-price-list
        li:not(:last-child) {
        margin-bottom: 0px;
      }
      .elementor-14
        .elementor-element.elementor-element-2ad13ed
        .elementor-price-list-item {
        align-items: flex-start;
      }
      .elementor-14 .elementor-element.elementor-element-ef029ec {
        border-style: solid;
        border-width: 1px 1px 1px 1px;
        border-color: #dfdfdf;
        transition: background 0.3s, border 0.3s, border-radius 0.3s,
          box-shadow 0.3s;
        margin-top: 0px;
        margin-bottom: 10px;
        padding: 10px 10px 10px 10px;
      }
      .elementor-14
        .elementor-element.elementor-element-ef029ec
        > .elementor-background-overlay {
        transition: background 0.3s, border-radius 0.3s, opacity 0.3s;
      }
      .elementor-14
        .elementor-element.elementor-element-0de7bac
        .elementor-heading-title {
        color: var(--e-global-color-primary);
        font-family: "UTM Roman Classic", Sans-serif;
      }
      .elementor-14
        .elementor-element.elementor-element-49fad78
        .elementor-icon-list-items:not(.elementor-inline-items)
        .elementor-icon-list-item:not(:last-child) {
        padding-bottom: calc(5px / 2);
      }
      .elementor-14
        .elementor-element.elementor-element-49fad78
        .elementor-icon-list-items:not(.elementor-inline-items)
        .elementor-icon-list-item:not(:first-child) {
        margin-top: calc(5px / 2);
      }
      .elementor-14
        .elementor-element.elementor-element-49fad78
        .elementor-icon-list-items.elementor-inline-items
        .elementor-icon-list-item {
        margin-right: calc(5px / 2);
        margin-left: calc(5px / 2);
      }
      .elementor-14
        .elementor-element.elementor-element-49fad78
        .elementor-icon-list-items.elementor-inline-items {
        margin-right: calc(-5px / 2);
        margin-left: calc(-5px / 2);
      }
      body.rtl
        .elementor-14
        .elementor-element.elementor-element-49fad78
        .elementor-icon-list-items.elementor-inline-items
        .elementor-icon-list-item:after {
        left: calc(-5px / 2);
      }
      body:not(.rtl)
        .elementor-14
        .elementor-element.elementor-element-49fad78
        .elementor-icon-list-items.elementor-inline-items
        .elementor-icon-list-item:after {
        right: calc(-5px / 2);
      }
      .elementor-14
        .elementor-element.elementor-element-49fad78
        .elementor-icon-list-icon
        i {
        font-size: 14px;
      }
      .elementor-14
        .elementor-element.elementor-element-49fad78
        .elementor-icon-list-icon
        svg {
        width: 14px;
      }
      .elementor-14
        .elementor-element.elementor-element-bd2e39f
        .elementor-price-list-header {
        font-size: 14px;
        font-weight: 400;
      }
      .elementor-14
        .elementor-element.elementor-element-bd2e39f
        .elementor-price-list-separator {
        border-bottom-style: none;
      }
      body.rtl
        .elementor-14
        .elementor-element.elementor-element-bd2e39f
        .elementor-price-list-image {
        padding-left: calc(20px / 2);
      }
      body.rtl
        .elementor-14
        .elementor-element.elementor-element-bd2e39f
        .elementor-price-list-image
        + .elementor-price-list-text {
        padding-right: calc(20px / 2);
      }
      body:not(.rtl)
        .elementor-14
        .elementor-element.elementor-element-bd2e39f
        .elementor-price-list-image {
        padding-right: calc(20px / 2);
      }
      body:not(.rtl)
        .elementor-14
        .elementor-element.elementor-element-bd2e39f
        .elementor-price-list-image
        + .elementor-price-list-text {
        padding-left: calc(20px / 2);
      }
      .elementor-14
        .elementor-element.elementor-element-bd2e39f
        .elementor-price-list
        li:not(:last-child) {
        margin-bottom: 0px;
      }
      .elementor-14
        .elementor-element.elementor-element-bd2e39f
        .elementor-price-list-item {
        align-items: flex-start;
      }
      .elementor-14 .elementor-element.elementor-element-1aaa530 {
        border-style: solid;
        border-width: 1px 1px 1px 1px;
        border-color: #dfdfdf;
        transition: background 0.3s, border 0.3s, border-radius 0.3s,
          box-shadow 0.3s;
        margin-top: 0px;
        margin-bottom: 10px;
        padding: 10px 10px 10px 10px;
      }
      .elementor-14
        .elementor-element.elementor-element-1aaa530
        > .elementor-background-overlay {
        transition: background 0.3s, border-radius 0.3s, opacity 0.3s;
      }
      .elementor-14
        .elementor-element.elementor-element-7ddfe5b
        .elementor-heading-title {
        color: var(--e-global-color-primary);
        font-family: "UTM Roman Classic", Sans-serif;
      }
      .elementor-14
        .elementor-element.elementor-element-802e488
        .elementor-icon-list-items:not(.elementor-inline-items)
        .elementor-icon-list-item:not(:last-child) {
        padding-bottom: calc(5px / 2);
      }
      .elementor-14
        .elementor-element.elementor-element-802e488
        .elementor-icon-list-items:not(.elementor-inline-items)
        .elementor-icon-list-item:not(:first-child) {
        margin-top: calc(5px / 2);
      }
      .elementor-14
        .elementor-element.elementor-element-802e488
        .elementor-icon-list-items.elementor-inline-items
        .elementor-icon-list-item {
        margin-right: calc(5px / 2);
        margin-left: calc(5px / 2);
      }
      .elementor-14
        .elementor-element.elementor-element-802e488
        .elementor-icon-list-items.elementor-inline-items {
        margin-right: calc(-5px / 2);
        margin-left: calc(-5px / 2);
      }
      body.rtl
        .elementor-14
        .elementor-element.elementor-element-802e488
        .elementor-icon-list-items.elementor-inline-items
        .elementor-icon-list-item:after {
        left: calc(-5px / 2);
      }
      body:not(.rtl)
        .elementor-14
        .elementor-element.elementor-element-802e488
        .elementor-icon-list-items.elementor-inline-items
        .elementor-icon-list-item:after {
        right: calc(-5px / 2);
      }
      .elementor-14
        .elementor-element.elementor-element-802e488
        .elementor-icon-list-icon
        i {
        font-size: 14px;
      }
      .elementor-14
        .elementor-element.elementor-element-802e488
        .elementor-icon-list-icon
        svg {
        width: 14px;
      }
      .elementor-14
        .elementor-element.elementor-element-3d75c98
        .elementor-price-list-header {
        font-size: 14px;
        font-weight: 400;
      }
      .elementor-14
        .elementor-element.elementor-element-3d75c98
        .elementor-price-list-separator {
        border-bottom-style: none;
      }
      body.rtl
        .elementor-14
        .elementor-element.elementor-element-3d75c98
        .elementor-price-list-image {
        padding-left: calc(20px / 2);
      }
      body.rtl
        .elementor-14
        .elementor-element.elementor-element-3d75c98
        .elementor-price-list-image
        + .elementor-price-list-text {
        padding-right: calc(20px / 2);
      }
      body:not(.rtl)
        .elementor-14
        .elementor-element.elementor-element-3d75c98
        .elementor-price-list-image {
        padding-right: calc(20px / 2);
      }
      body:not(.rtl)
        .elementor-14
        .elementor-element.elementor-element-3d75c98
        .elementor-price-list-image
        + .elementor-price-list-text {
        padding-left: calc(20px / 2);
      }
      .elementor-14
        .elementor-element.elementor-element-3d75c98
        .elementor-price-list
        li:not(:last-child) {
        margin-bottom: 0px;
      }
      .elementor-14
        .elementor-element.elementor-element-3d75c98
        .elementor-price-list-item {
        align-items: flex-start;
      }
      .elementor-14 .elementor-element.elementor-element-1299cfb {
        border-style: solid;
        border-width: 1px 1px 1px 1px;
        border-color: #dfdfdf;
        transition: background 0.3s, border 0.3s, border-radius 0.3s,
          box-shadow 0.3s;
        margin-top: 0px;
        margin-bottom: 10px;
        padding: 10px 10px 10px 10px;
      }
      .elementor-14
        .elementor-element.elementor-element-1299cfb
        > .elementor-background-overlay {
        transition: background 0.3s, border-radius 0.3s, opacity 0.3s;
      }
      .elementor-14
        .elementor-element.elementor-element-f425097
        .elementor-heading-title {
        color: var(--e-global-color-primary);
        font-family: "UTM Roman Classic", Sans-serif;
      }
      .elementor-14
        .elementor-element.elementor-element-c8822ac
        .elementor-icon-list-items:not(.elementor-inline-items)
        .elementor-icon-list-item:not(:last-child) {
        padding-bottom: calc(5px / 2);
      }
      .elementor-14
        .elementor-element.elementor-element-c8822ac
        .elementor-icon-list-items:not(.elementor-inline-items)
        .elementor-icon-list-item:not(:first-child) {
        margin-top: calc(5px / 2);
      }
      .elementor-14
        .elementor-element.elementor-element-c8822ac
        .elementor-icon-list-items.elementor-inline-items
        .elementor-icon-list-item {
        margin-right: calc(5px / 2);
        margin-left: calc(5px / 2);
      }
      .elementor-14
        .elementor-element.elementor-element-c8822ac
        .elementor-icon-list-items.elementor-inline-items {
        margin-right: calc(-5px / 2);
        margin-left: calc(-5px / 2);
      }
      body.rtl
        .elementor-14
        .elementor-element.elementor-element-c8822ac
        .elementor-icon-list-items.elementor-inline-items
        .elementor-icon-list-item:after {
        left: calc(-5px / 2);
      }
      body:not(.rtl)
        .elementor-14
        .elementor-element.elementor-element-c8822ac
        .elementor-icon-list-items.elementor-inline-items
        .elementor-icon-list-item:after {
        right: calc(-5px / 2);
      }
      .elementor-14
        .elementor-element.elementor-element-c8822ac
        .elementor-icon-list-icon
        i {
        font-size: 14px;
      }
      .elementor-14
        .elementor-element.elementor-element-c8822ac
        .elementor-icon-list-icon
        svg {
        width: 14px;
      }
      .elementor-14
        .elementor-element.elementor-element-cabc5be
        .elementor-price-list-header {
        font-size: 14px;
        font-weight: 400;
      }
      .elementor-14
        .elementor-element.elementor-element-cabc5be
        .elementor-price-list-separator {
        border-bottom-style: none;
      }
      body.rtl
        .elementor-14
        .elementor-element.elementor-element-cabc5be
        .elementor-price-list-image {
        padding-left: calc(20px / 2);
      }
      body.rtl
        .elementor-14
        .elementor-element.elementor-element-cabc5be
        .elementor-price-list-image
        + .elementor-price-list-text {
        padding-right: calc(20px / 2);
      }
      body:not(.rtl)
        .elementor-14
        .elementor-element.elementor-element-cabc5be
        .elementor-price-list-image {
        padding-right: calc(20px / 2);
      }
      body:not(.rtl)
        .elementor-14
        .elementor-element.elementor-element-cabc5be
        .elementor-price-list-image
        + .elementor-price-list-text {
        padding-left: calc(20px / 2);
      }
      .elementor-14
        .elementor-element.elementor-element-cabc5be
        .elementor-price-list
        li:not(:last-child) {
        margin-bottom: 0px;
      }
      .elementor-14
        .elementor-element.elementor-element-cabc5be
        .elementor-price-list-item {
        align-items: flex-start;
      }
      .elementor-14 .elementor-element.elementor-element-31f2549 {
        border-style: solid;
        border-width: 1px 1px 1px 1px;
        border-color: #dfdfdf;
        transition: background 0.3s, border 0.3s, border-radius 0.3s,
          box-shadow 0.3s;
        margin-top: 0px;
        margin-bottom: 10px;
        padding: 10px 10px 10px 10px;
      }
      .elementor-14
        .elementor-element.elementor-element-31f2549
        > .elementor-background-overlay {
        transition: background 0.3s, border-radius 0.3s, opacity 0.3s;
      }
      .elementor-14
        .elementor-element.elementor-element-5dacda6
        .elementor-heading-title {
        color: var(--e-global-color-primary);
        font-family: "UTM Roman Classic", Sans-serif;
      }
      .elementor-14
        .elementor-element.elementor-element-f90e4df
        .elementor-icon-list-items:not(.elementor-inline-items)
        .elementor-icon-list-item:not(:last-child) {
        padding-bottom: calc(5px / 2);
      }
      .elementor-14
        .elementor-element.elementor-element-f90e4df
        .elementor-icon-list-items:not(.elementor-inline-items)
        .elementor-icon-list-item:not(:first-child) {
        margin-top: calc(5px / 2);
      }
      .elementor-14
        .elementor-element.elementor-element-f90e4df
        .elementor-icon-list-items.elementor-inline-items
        .elementor-icon-list-item {
        margin-right: calc(5px / 2);
        margin-left: calc(5px / 2);
      }
      .elementor-14
        .elementor-element.elementor-element-f90e4df
        .elementor-icon-list-items.elementor-inline-items {
        margin-right: calc(-5px / 2);
        margin-left: calc(-5px / 2);
      }
      body.rtl
        .elementor-14
        .elementor-element.elementor-element-f90e4df
        .elementor-icon-list-items.elementor-inline-items
        .elementor-icon-list-item:after {
        left: calc(-5px / 2);
      }
      body:not(.rtl)
        .elementor-14
        .elementor-element.elementor-element-f90e4df
        .elementor-icon-list-items.elementor-inline-items
        .elementor-icon-list-item:after {
        right: calc(-5px / 2);
      }
      .elementor-14
        .elementor-element.elementor-element-f90e4df
        .elementor-icon-list-icon
        i {
        font-size: 14px;
      }
      .elementor-14
        .elementor-element.elementor-element-f90e4df
        .elementor-icon-list-icon
        svg {
        width: 14px;
      }
      .elementor-14
        .elementor-element.elementor-element-f8125cb
        .elementor-price-list-header {
        font-size: 14px;
        font-weight: 400;
      }
      .elementor-14
        .elementor-element.elementor-element-f8125cb
        .elementor-price-list-separator {
        border-bottom-style: none;
      }
      body.rtl
        .elementor-14
        .elementor-element.elementor-element-f8125cb
        .elementor-price-list-image {
        padding-left: calc(20px / 2);
      }
      body.rtl
        .elementor-14
        .elementor-element.elementor-element-f8125cb
        .elementor-price-list-image
        + .elementor-price-list-text {
        padding-right: calc(20px / 2);
      }
      body:not(.rtl)
        .elementor-14
        .elementor-element.elementor-element-f8125cb
        .elementor-price-list-image {
        padding-right: calc(20px / 2);
      }
      body:not(.rtl)
        .elementor-14
        .elementor-element.elementor-element-f8125cb
        .elementor-price-list-image
        + .elementor-price-list-text {
        padding-left: calc(20px / 2);
      }
      .elementor-14
        .elementor-element.elementor-element-f8125cb
        .elementor-price-list
        li:not(:last-child) {
        margin-bottom: 0px;
      }
      .elementor-14
        .elementor-element.elementor-element-f8125cb
        .elementor-price-list-item {
        align-items: flex-start;
      }
      .elementor-14 .elementor-element.elementor-element-689c791 {
        border-style: solid;
        border-width: 1px 1px 1px 1px;
        border-color: #dfdfdf;
        transition: background 0.3s, border 0.3s, border-radius 0.3s,
          box-shadow 0.3s;
        margin-top: 0px;
        margin-bottom: 9px;
        padding: 10px 10px 10px 10px;
      }
      .elementor-14
        .elementor-element.elementor-element-689c791
        > .elementor-background-overlay {
        transition: background 0.3s, border-radius 0.3s, opacity 0.3s;
      }
      .elementor-14
        .elementor-element.elementor-element-c8c3287
        .elementor-heading-title {
        color: var(--e-global-color-primary);
        font-family: "UTM Roman Classic", Sans-serif;
      }
      .elementor-14
        .elementor-element.elementor-element-754b1e4
        .elementor-icon-list-items:not(.elementor-inline-items)
        .elementor-icon-list-item:not(:last-child) {
        padding-bottom: calc(5px / 2);
      }
      .elementor-14
        .elementor-element.elementor-element-754b1e4
        .elementor-icon-list-items:not(.elementor-inline-items)
        .elementor-icon-list-item:not(:first-child) {
        margin-top: calc(5px / 2);
      }
      .elementor-14
        .elementor-element.elementor-element-754b1e4
        .elementor-icon-list-items.elementor-inline-items
        .elementor-icon-list-item {
        margin-right: calc(5px / 2);
        margin-left: calc(5px / 2);
      }
      .elementor-14
        .elementor-element.elementor-element-754b1e4
        .elementor-icon-list-items.elementor-inline-items {
        margin-right: calc(-5px / 2);
        margin-left: calc(-5px / 2);
      }
      body.rtl
        .elementor-14
        .elementor-element.elementor-element-754b1e4
        .elementor-icon-list-items.elementor-inline-items
        .elementor-icon-list-item:after {
        left: calc(-5px / 2);
      }
      body:not(.rtl)
        .elementor-14
        .elementor-element.elementor-element-754b1e4
        .elementor-icon-list-items.elementor-inline-items
        .elementor-icon-list-item:after {
        right: calc(-5px / 2);
      }
      .elementor-14
        .elementor-element.elementor-element-754b1e4
        .elementor-icon-list-icon
        i {
        font-size: 14px;
      }
      .elementor-14
        .elementor-element.elementor-element-754b1e4
        .elementor-icon-list-icon
        svg {
        width: 14px;
      }
      .elementor-14
        .elementor-element.elementor-element-c6fb44f
        .elementor-price-list-header {
        font-size: 14px;
        font-weight: 400;
      }
      .elementor-14
        .elementor-element.elementor-element-c6fb44f
        .elementor-price-list-separator {
        border-bottom-style: none;
      }
      body.rtl
        .elementor-14
        .elementor-element.elementor-element-c6fb44f
        .elementor-price-list-image {
        padding-left: calc(20px / 2);
      }
      body.rtl
        .elementor-14
        .elementor-element.elementor-element-c6fb44f
        .elementor-price-list-image
        + .elementor-price-list-text {
        padding-right: calc(20px / 2);
      }
      body:not(.rtl)
        .elementor-14
        .elementor-element.elementor-element-c6fb44f
        .elementor-price-list-image {
        padding-right: calc(20px / 2);
      }
      body:not(.rtl)
        .elementor-14
        .elementor-element.elementor-element-c6fb44f
        .elementor-price-list-image
        + .elementor-price-list-text {
        padding-left: calc(20px / 2);
      }
      .elementor-14
        .elementor-element.elementor-element-c6fb44f
        .elementor-price-list
        li:not(:last-child) {
        margin-bottom: 0px;
      }
      .elementor-14
        .elementor-element.elementor-element-c6fb44f
        .elementor-price-list-item {
        align-items: flex-start;
      }
      .elementor-14
        .elementor-element.elementor-element-f2188e7:not(.elementor-motion-effects-element-type-background)
        > .elementor-column-wrap,
      .elementor-14
        .elementor-element.elementor-element-f2188e7
        > .elementor-column-wrap
        > .elementor-motion-effects-container
        > .elementor-motion-effects-layer {
        background-image: url("../wp-content/uploads/tuibg.jpg");
        background-position: center center;
        background-repeat: no-repeat;
        background-size: cover;
      }
      .elementor-14
        .elementor-element.elementor-element-f2188e7
        > .elementor-element-populated {
        transition: background 0.3s, border 0.3s, border-radius 0.3s,
          box-shadow 0.3s;
        margin: 0px 0px 30px 0px;
        padding: 0px 0px 0px 0px;
      }
      .elementor-14
        .elementor-element.elementor-element-f2188e7
        > .elementor-element-populated
        > .elementor-background-overlay {
        transition: background 0.3s, border-radius 0.3s, opacity 0.3s;
      }
      .elementor-14
        .elementor-element.elementor-element-25c7bf6:not(.elementor-motion-effects-element-type-background),
      .elementor-14
        .elementor-element.elementor-element-25c7bf6
        > .elementor-motion-effects-container
        > .elementor-motion-effects-layer {
        background-color: #ffffff;
      }
      .elementor-14 .elementor-element.elementor-element-25c7bf6 {
        transition: background 0.3s, border 0.3s, border-radius 0.3s,
          box-shadow 0.3s;
      }
      .elementor-14
        .elementor-element.elementor-element-25c7bf6
        > .elementor-background-overlay {
        transition: background 0.3s, border-radius 0.3s, opacity 0.3s;
      }
      .elementor-14
        .elementor-element.elementor-element-a3a6888
        > .elementor-element-populated {
        transition: background 0.3s, border 0.3s, border-radius 0.3s,
          box-shadow 0.3s;
      }
      .elementor-14
        .elementor-element.elementor-element-a3a6888
        > .elementor-element-populated
        > .elementor-background-overlay {
        transition: background 0.3s, border-radius 0.3s, opacity 0.3s;
      }
      .elementor-14
        .elementor-element.elementor-element-f419677
        > .elementor-widget-container {
        margin: 0px 0px -62px 0px;
      }
      .elementor-14 .elementor-element.elementor-element-4442451 {
        text-align: center;
      }
      .elementor-14
        .elementor-element.elementor-element-4442451
        .elementor-heading-title {
        color: #ffffff54;
        font-size: 43px;
        text-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);
        mix-blend-mode: overlay;
      }
      .elementor-14
        .elementor-element.elementor-element-4442451
        > .elementor-widget-container {
        margin: 0px 0px 0px 0px;
        padding: 80px 0px 50px 0px;
      }
      .elementor-14
        .elementor-element.elementor-element-f2e5db8
        .elementor-heading-title {
        color: #ffffff;
      }
      .elementor-14
        .elementor-element.elementor-element-f2e5db8
        > .elementor-widget-container {
        padding: 0px 30px 0px 30px;
      }
      .elementor-14
        .elementor-element.elementor-element-706d2e1
        .elementor-heading-title {
        color: #ffffff;
      }
      .elementor-14
        .elementor-element.elementor-element-706d2e1
        > .elementor-widget-container {
        padding: 0px 30px 0px 30px;
      }
      .elementor-14 .elementor-element.elementor-element-9caddec {
        padding: 0px 20px 0px 20px;
      }
      .elementor-14
        .elementor-element.elementor-element-865b5ba
        .elementor-heading-title {
        color: #ffffff;
      }
      .elementor-14
        .elementor-element.elementor-element-5bacde8
        .elementor-price-list-header {
        color: #ffffff;
        font-size: 14px;
        font-weight: 600;
      }
      .elementor-14
        .elementor-element.elementor-element-5bacde8
        .elementor-price-list-separator {
        border-bottom-style: dotted;
        border-bottom-width: 2px;
      }
      body.rtl
        .elementor-14
        .elementor-element.elementor-element-5bacde8
        .elementor-price-list-image {
        padding-left: calc(20px / 2);
      }
      body.rtl
        .elementor-14
        .elementor-element.elementor-element-5bacde8
        .elementor-price-list-image
        + .elementor-price-list-text {
        padding-right: calc(20px / 2);
      }
      body:not(.rtl)
        .elementor-14
        .elementor-element.elementor-element-5bacde8
        .elementor-price-list-image {
        padding-right: calc(20px / 2);
      }
      body:not(.rtl)
        .elementor-14
        .elementor-element.elementor-element-5bacde8
        .elementor-price-list-image
        + .elementor-price-list-text {
        padding-left: calc(20px / 2);
      }
      .elementor-14
        .elementor-element.elementor-element-5bacde8
        .elementor-price-list
        li:not(:last-child) {
        margin-bottom: 0px;
      }
      .elementor-14
        .elementor-element.elementor-element-5bacde8
        .elementor-price-list-item {
        align-items: flex-start;
      }
      .elementor-14 .elementor-element.elementor-element-7a02586 {
        --divider-border-style: solid;
        --divider-color: #ffffff;
        --divider-border-width: 1px;
      }
      .elementor-14
        .elementor-element.elementor-element-7a02586
        .elementor-divider-separator {
        width: 100%;
      }
      .elementor-14
        .elementor-element.elementor-element-7a02586
        .elementor-divider {
        padding-top: 15px;
        padding-bottom: 15px;
      }
      .elementor-14 .elementor-element.elementor-element-9cf7234 {
        padding: 0px 20px 0px 20px;
      }
      .elementor-14
        .elementor-element.elementor-element-4d9c782
        .elementor-heading-title {
        color: #ffffff;
      }
      .elementor-14
        .elementor-element.elementor-element-02e2091
        .elementor-price-list-header {
        color: #ffffff;
        font-size: 14px;
        font-weight: 600;
      }
      .elementor-14
        .elementor-element.elementor-element-02e2091
        .elementor-price-list-separator {
        border-bottom-style: dotted;
        border-bottom-width: 2px;
      }
      body.rtl
        .elementor-14
        .elementor-element.elementor-element-02e2091
        .elementor-price-list-image {
        padding-left: calc(20px / 2);
      }
      body.rtl
        .elementor-14
        .elementor-element.elementor-element-02e2091
        .elementor-price-list-image
        + .elementor-price-list-text {
        padding-right: calc(20px / 2);
      }
      body:not(.rtl)
        .elementor-14
        .elementor-element.elementor-element-02e2091
        .elementor-price-list-image {
        padding-right: calc(20px / 2);
      }
      body:not(.rtl)
        .elementor-14
        .elementor-element.elementor-element-02e2091
        .elementor-price-list-image
        + .elementor-price-list-text {
        padding-left: calc(20px / 2);
      }
      .elementor-14
        .elementor-element.elementor-element-02e2091
        .elementor-price-list
        li:not(:last-child) {
        margin-bottom: 0px;
      }
      .elementor-14
        .elementor-element.elementor-element-02e2091
        .elementor-price-list-item {
        align-items: flex-start;
      }
      .elementor-14 .elementor-element.elementor-element-8d3a758 {
        --divider-border-style: solid;
        --divider-color: #ffffff;
        --divider-border-width: 1px;
      }
      .elementor-14
        .elementor-element.elementor-element-8d3a758
        .elementor-divider-separator {
        width: 100%;
      }
      .elementor-14
        .elementor-element.elementor-element-8d3a758
        .elementor-divider {
        padding-top: 15px;
        padding-bottom: 15px;
      }
      .elementor-14 .elementor-element.elementor-element-a37aa73 {
        padding: 0px 20px 0px 20px;
      }
      .elementor-14
        .elementor-element.elementor-element-09b2b81
        .elementor-heading-title {
        color: #ffffff;
      }
      .elementor-14
        .elementor-element.elementor-element-2d5c630
        .elementor-price-list-header {
        color: #ffffff;
        font-size: 14px;
        font-weight: 600;
      }
      .elementor-14
        .elementor-element.elementor-element-2d5c630
        .elementor-price-list-separator {
        border-bottom-style: dotted;
        border-bottom-width: 2px;
      }
      body.rtl
        .elementor-14
        .elementor-element.elementor-element-2d5c630
        .elementor-price-list-image {
        padding-left: calc(20px / 2);
      }
      body.rtl
        .elementor-14
        .elementor-element.elementor-element-2d5c630
        .elementor-price-list-image
        + .elementor-price-list-text {
        padding-right: calc(20px / 2);
      }
      body:not(.rtl)
        .elementor-14
        .elementor-element.elementor-element-2d5c630
        .elementor-price-list-image {
        padding-right: calc(20px / 2);
      }
      body:not(.rtl)
        .elementor-14
        .elementor-element.elementor-element-2d5c630
        .elementor-price-list-image
        + .elementor-price-list-text {
        padding-left: calc(20px / 2);
      }
      .elementor-14
        .elementor-element.elementor-element-2d5c630
        .elementor-price-list
        li:not(:last-child) {
        margin-bottom: 0px;
      }
      .elementor-14
        .elementor-element.elementor-element-2d5c630
        .elementor-price-list-item {
        align-items: flex-start;
      }
      .elementor-14 .elementor-element.elementor-element-17c40c6 {
        --divider-border-style: solid;
        --divider-color: #ffffff;
        --divider-border-width: 1px;
      }
      .elementor-14
        .elementor-element.elementor-element-17c40c6
        .elementor-divider-separator {
        width: 100%;
      }
      .elementor-14
        .elementor-element.elementor-element-17c40c6
        .elementor-divider {
        padding-top: 15px;
        padding-bottom: 15px;
      }
      .elementor-14 .elementor-element.elementor-element-b448e82 {
        padding: 0px 20px 0px 20px;
      }
      .elementor-14
        .elementor-element.elementor-element-8b58ee9
        .elementor-heading-title {
        color: #ffffff;
      }
      .elementor-14
        .elementor-element.elementor-element-686f372
        .elementor-price-list-header {
        color: #ffffff;
        font-size: 14px;
        font-weight: 600;
      }
      .elementor-14
        .elementor-element.elementor-element-686f372
        .elementor-price-list-separator {
        border-bottom-style: dotted;
        border-bottom-width: 2px;
      }
      body.rtl
        .elementor-14
        .elementor-element.elementor-element-686f372
        .elementor-price-list-image {
        padding-left: calc(20px / 2);
      }
      body.rtl
        .elementor-14
        .elementor-element.elementor-element-686f372
        .elementor-price-list-image
        + .elementor-price-list-text {
        padding-right: calc(20px / 2);
      }
      body:not(.rtl)
        .elementor-14
        .elementor-element.elementor-element-686f372
        .elementor-price-list-image {
        padding-right: calc(20px / 2);
      }
      body:not(.rtl)
        .elementor-14
        .elementor-element.elementor-element-686f372
        .elementor-price-list-image
        + .elementor-price-list-text {
        padding-left: calc(20px / 2);
      }
      .elementor-14
        .elementor-element.elementor-element-686f372
        .elementor-price-list
        li:not(:last-child) {
        margin-bottom: 0px;
      }
      .elementor-14
        .elementor-element.elementor-element-686f372
        .elementor-price-list-item {
        align-items: flex-start;
      }
      .elementor-14
        .elementor-element.elementor-element-eba8155
        .elementor-button {
        text-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);
        fill: #ffffff;
        color: #ffffff;
        background-color: #02010100;
        border-style: solid;
        border-width: 1px 1px 1px 1px;
      }
      .elementor-14
        .elementor-element.elementor-element-eba8155
        > .elementor-widget-container {
        padding: 10px 30px 0px 30px;
      }
      :root {
        --page-title-display: none;
      }
      @media (max-width: 1024px) {
        .elementor-14 .elementor-element.elementor-element-e94d107 {
          margin-top: 0px;
          margin-bottom: 30px;
        }
        .elementor-14 .elementor-element.elementor-element-5225857 {
          padding: 10px 0px 5px 0px;
        }
        .elementor-14
          .elementor-element.elementor-element-dbf0963
          .elementor-price-list-header {
          font-size: 12px;
        }
        .elementor-14
          .elementor-element.elementor-element-2ad13ed
          .elementor-price-list-header {
          font-size: 12px;
        }
        .elementor-14
          .elementor-element.elementor-element-bd2e39f
          .elementor-price-list-header {
          font-size: 12px;
        }
        .elementor-14
          .elementor-element.elementor-element-3d75c98
          .elementor-price-list-header {
          font-size: 12px;
        }
        .elementor-14
          .elementor-element.elementor-element-cabc5be
          .elementor-price-list-header {
          font-size: 12px;
        }
        .elementor-14
          .elementor-element.elementor-element-f8125cb
          .elementor-price-list-header {
          font-size: 12px;
        }
        .elementor-14
          .elementor-element.elementor-element-c6fb44f
          .elementor-price-list-header {
          font-size: 12px;
        }
      }
      @media (max-width: 767px) {
        .elementor-14
          .elementor-element.elementor-element-bb571ca
          > .elementor-element-populated {
          padding: 20px 20px 20px 20px;
        }
        .elementor-14
          .elementor-element.elementor-element-1bf3fca
          > .elementor-widget-container {
          padding: 0px 0px 20px 0px;
        }
        .elementor-14
          .elementor-element.elementor-element-205ae99
          > .elementor-widget-container {
          padding: 0px 0px 10px 0px;
        }
        .elementor-14
          .elementor-element.elementor-element-3a0264e
          > .elementor-widget-container {
          padding: 0px 0px 10px 0px;
        }
        .elementor-14
          .elementor-element.elementor-element-49fad78
          > .elementor-widget-container {
          padding: 0px 0px 10px 0px;
        }
        .elementor-14
          .elementor-element.elementor-element-802e488
          > .elementor-widget-container {
          padding: 0px 0px 10px 0px;
        }
        .elementor-14
          .elementor-element.elementor-element-c8822ac
          > .elementor-widget-container {
          padding: 0px 0px 10px 0px;
        }
        .elementor-14
          .elementor-element.elementor-element-f90e4df
          > .elementor-widget-container {
          padding: 0px 0px 10px 0px;
        }
        .elementor-14
          .elementor-element.elementor-element-754b1e4
          > .elementor-widget-container {
          padding: 0px 0px 10px 0px;
        }
        .elementor-14
          .elementor-element.elementor-element-eba8155
          > .elementor-widget-container {
          padding: 0px 0px 20px 30px;
        }
      } /* Start custom CSS for heading, class: .elementor-element-d995e72 */
      .tasty-covertext {
        max-width: 500px;
      } /* End custom CSS */
      /* Start custom CSS for icon-list, class: .elementor-element-205ae99 */
      .tasty-box-left {
        width: 70% !important;
        float: left;
        display: inline-block;
        margin-bottom: 0 !important;
      }

      @media screen and (max-width: 600px) {
        .tasty-box-left {
          width: 100% !important;
          float: none;
          display: inline-block;
          margin-bottom: 0 !important;
        }
      } /* End custom CSS */
      /* Start custom CSS for price-list, class: .elementor-element-dbf0963 */
      .tasty-box-right {
        display: inline-block;
        width: 30% !important;
        float: right;
        border-left: 1px solid #dfdfdf;
        padding-left: 20px;
      }

      @media screen and (max-width: 600px) {
        .tasty-box-right {
          display: inline-block;
          width: 100% !important;
          float: none;
          border-left: none;
          padding-left: 0px;
        }
      } /* End custom CSS */
      /* Start custom CSS for icon-list, class: .elementor-element-3a0264e */
      .tasty-box-left {
        width: 70% !important;
        float: left;
        display: inline-block;
        margin-bottom: 0 !important;
      }

      @media screen and (max-width: 600px) {
        .tasty-box-left {
          width: 100% !important;
          float: none;
          display: inline-block;
          margin-bottom: 0 !important;
        }
      } /* End custom CSS */
      /* Start custom CSS for icon-list, class: .elementor-element-49fad78 */
      .tasty-box-left {
        width: 70% !important;
        float: left;
        display: inline-block;
        margin-bottom: 0 !important;
      }

      @media screen and (max-width: 600px) {
        .tasty-box-left {
          width: 100% !important;
          float: none;
          display: inline-block;
          margin-bottom: 0 !important;
        }
      } /* End custom CSS */
      /* Start custom CSS for icon-list, class: .elementor-element-802e488 */
      .tasty-box-left {
        width: 70% !important;
        float: left;
        display: inline-block;
        margin-bottom: 0 !important;
      }

      @media screen and (max-width: 600px) {
        .tasty-box-left {
          width: 100% !important;
          float: none;
          display: inline-block;
          margin-bottom: 0 !important;
        }
      } /* End custom CSS */
      /* Start custom CSS for icon-list, class: .elementor-element-c8822ac */
      .tasty-box-left {
        width: 70% !important;
        float: left;
        display: inline-block;
        margin-bottom: 0 !important;
      }

      @media screen and (max-width: 600px) {
        .tasty-box-left {
          width: 100% !important;
          float: none;
          display: inline-block;
          margin-bottom: 0 !important;
        }
      } /* End custom CSS */
      /* Start custom CSS for icon-list, class: .elementor-element-f90e4df */
      .tasty-box-left {
        width: 70% !important;
        float: left;
        display: inline-block;
        margin-bottom: 0 !important;
      }

      @media screen and (max-width: 600px) {
        .tasty-box-left {
          width: 100% !important;
          float: none;
          display: inline-block;
          margin-bottom: 0 !important;
        }
      } /* End custom CSS */
      /* Start custom CSS for icon-list, class: .elementor-element-754b1e4 */
      .tasty-box-left {
        width: 70% !important;
        float: left;
        display: inline-block;
        margin-bottom: 0 !important;
      }

      @media screen and (max-width: 600px) {
        .tasty-box-left {
          width: 100% !important;
          float: none;
          display: inline-block;
          margin-bottom: 0 !important;
        }
      } /* End custom CSS */
      /* Start custom CSS for heading, class: .elementor-element-4442451 */
      .degtext {
        width: 80%;
        max-width: 80%;
        margin: 0 auto;
        -ms-transform: rotate(-10deg); /* IE 9 */
        transform: rotate(-10deg); /* Standard syntax */
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
        <title>Tasty - Luvin</title>
        <meta
          name="description"
          content="Tất cả các sản phẩm rượu vang được lên men tự nhiên và có nồng độ cồn dưới 15 độ"
        />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Tasty - Luvin" />
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
        className="site-main post-14 page type-page status-publish hentry"
        role="main"
      >
        <div className="page-content">
          <div className="elementor elementor-14">
            <div className="elementor-inner">
              <div className="elementor-section-wrap">
                <section className="elementor-section elementor-top-section elementor-element elementor-element-e94d107 elementor-section-boxed elementor-section-height-default elementor-section-height-default">
                  <div className="elementor-container elementor-column-gap-default">
                    <div className="elementor-row">
                      <div className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-bb571ca">
                        <div
                          className="elementor-column-wrap elementor-element-populated"
                          style={{
                            background: `url("${configs.ctaImage}")`,
                          }}
                        >
                          <div className="elementor-widget-wrap">
                            <div className="elementor-element elementor-element-db3fcf5 elementor-widget elementor-widget-heading">
                              <div className="elementor-widget-container">
                                <h2 className="elementor-heading-title elementor-size-default">
                                  {configs.title}
                                </h2>
                              </div>
                            </div>
                            <div className="elementor-element elementor-element-6346cbb elementor-widget-divider--view-line elementor-widget elementor-widget-divider">
                              <div className="elementor-widget-container">
                                <div className="elementor-divider">
                                  <span className="elementor-divider-separator"></span>
                                </div>
                              </div>
                            </div>
                            <div className="elementor-element elementor-element-d995e72 tasty-covertext elementor-widget elementor-widget-heading">
                              <div className="elementor-widget-container">
                                <p className="elementor-heading-title elementor-size-default">
                                  {configs.ctaDescription}
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
                <section className="elementor-section elementor-top-section elementor-element elementor-element-8e3ad8d elementor-section-content-top elementor-section-boxed elementor-section-height-default elementor-section-height-default">
                  <div className="elementor-container elementor-column-gap-wide">
                    <div className="elementor-row">
                      <div className="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-429b651">
                        <div className="elementor-column-wrap elementor-element-populated">
                          <div className="elementor-widget-wrap">
                            <div className="elementor-element elementor-element-1bf3fca elementor-widget elementor-widget-heading">
                              <div className="elementor-widget-container">
                                <h2 className="elementor-heading-title elementor-size-default">
                                  {configs.title1}
                                </h2>
                              </div>
                            </div>
                            <div className="elementor-element elementor-element-dbab895 elementor-widget elementor-widget-heading">
                              <div className="elementor-widget-container">
                                <h5 className="elementor-heading-title elementor-size-default">
                                  {configs.title2}
                                </h5>
                              </div>
                            </div>
                            <div className="elementor-element elementor-element-ee32282 elementor-widget elementor-widget-heading">
                              <div className="elementor-widget-container">
                                <p className="elementor-heading-title elementor-size-default">
                                  {configs.ctaDescription2}
                                </p>
                              </div>
                            </div>
                            {(configs.products || []).map((product) => (
                              <section className="elementor-section elementor-inner-section elementor-element elementor-element-5225857 elementor-section-boxed elementor-section-height-default elementor-section-height-default">
                                <div className="elementor-container elementor-column-gap-default">
                                  <div className="elementor-row">
                                    <div className="elementor-column elementor-col-100 elementor-inner-column elementor-element elementor-element-3480371">
                                      <div className="elementor-column-wrap elementor-element-populated">
                                        <div className="elementor-widget-wrap">
                                          <div className="elementor-element elementor-element-446644f elementor-widget elementor-widget-heading">
                                            <div className="elementor-widget-container">
                                              <h5 className="elementor-heading-title elementor-size-default">
                                                {product.name}
                                              </h5>
                                            </div>
                                          </div>
                                          <div className="elementor-element elementor-element-205ae99 elementor-align-left tasty-box-left elementor-icon-list--layout-traditional elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list">
                                            <div className="elementor-widget-container">
                                              <ul className="elementor-icon-list-items">
                                                <li className="elementor-icon-list-item">
                                                  <span className="elementor-icon-list-icon">
                                                    <i
                                                      aria-hidden="true"
                                                      className="fas fa-wine-glass-alt"
                                                    ></i>
                                                  </span>
                                                  <span className="elementor-icon-list-text">
                                                    {product.type}
                                                  </span>
                                                </li>
                                                <li className="elementor-icon-list-item">
                                                  <span className="elementor-icon-list-icon">
                                                    <i
                                                      aria-hidden="true"
                                                      className="fas fa-stroopwafel"
                                                    ></i>
                                                  </span>
                                                  <span className="elementor-icon-list-text">
                                                    {product.origin}
                                                  </span>
                                                </li>
                                                <li className="elementor-icon-list-item">
                                                  <span className="elementor-icon-list-icon">
                                                    <i
                                                      aria-hidden="true"
                                                      className="fas fa-map-marker-alt"
                                                    ></i>
                                                  </span>
                                                  <span className="elementor-icon-list-text">
                                                    {product.description}
                                                  </span>
                                                </li>
                                              </ul>
                                            </div>
                                          </div>
                                          <div className="elementor-element elementor-element-dbf0963 tasty-box-right elementor-widget elementor-widget-price-list">
                                            <div className="elementor-widget-container">
                                              <ul className="elementor-price-list">
                                                <li>
                                                  <a
                                                    className="elementor-price-list-item"
                                                    href="#"
                                                  >
                                                    <div className="elementor-price-list-text">
                                                      <div className="elementor-price-list-header">
                                                        <span className="elementor-price-list-title">
                                                          25ml
                                                        </span>
                                                        <span className="elementor-price-list-price">
                                                          {numeral(
                                                            product.price25
                                                          ).format("0,0")}
                                                        </span>
                                                      </div>
                                                    </div>
                                                  </a>
                                                </li>
                                                <li>
                                                  <a
                                                    className="elementor-price-list-item"
                                                    href="#"
                                                  >
                                                    <div className="elementor-price-list-text">
                                                      <div className="elementor-price-list-header">
                                                        <span className="elementor-price-list-title">
                                                          75ml
                                                        </span>
                                                        <span className="elementor-price-list-price">
                                                          {numeral(
                                                            product.price75
                                                          ).format("0,0")}
                                                        </span>
                                                      </div>
                                                    </div>
                                                  </a>
                                                </li>
                                                <li>
                                                  <a
                                                    className="elementor-price-list-item"
                                                    href="#"
                                                  >
                                                    <div className="elementor-price-list-text">
                                                      <div className="elementor-price-list-header">
                                                        <span className="elementor-price-list-title">
                                                          125ml
                                                        </span>
                                                        <span className="elementor-price-list-price">
                                                          {numeral(
                                                            product.price125
                                                          ).format("0,0")}
                                                        </span>
                                                      </div>
                                                    </div>
                                                  </a>
                                                </li>
                                                <li>
                                                  <a
                                                    className="elementor-price-list-item"
                                                    href="#"
                                                  >
                                                    <div className="elementor-price-list-text">
                                                      <div className="elementor-price-list-header">
                                                        <span className="elementor-price-list-title">
                                                          Bottle
                                                        </span>
                                                        <span className="elementor-price-list-price">
                                                          {numeral(
                                                            product.bottle
                                                          ).format("0,0")}
                                                        </span>
                                                      </div>
                                                    </div>
                                                  </a>
                                                </li>
                                              </ul>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </section>
                            ))}
                          </div>
                        </div>
                      </div>
                      <div className="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-f2188e7">
                        <div
                          className="elementor-column-wrap elementor-element-populated"
                          // style={{
                          //   background:
                          //     'url("images/quaitui1.png")',
                          // }}
                        >
                          <div className="elementor-widget-wrap">
                            <section className="elementor-section elementor-inner-section elementor-element elementor-element-25c7bf6 elementor-section-boxed elementor-section-height-default elementor-section-height-default">
                              <div className="elementor-container elementor-column-gap-default">
                                <div className="elementor-row">
                                  <div className="elementor-column elementor-col-100 elementor-inner-column elementor-element elementor-element-a3a6888">
                                    <div className="elementor-column-wrap elementor-element-populated">
                                      <div className="elementor-widget-wrap">
                                        <div className="elementor-element elementor-element-f419677 elementor-widget elementor-widget-image">
                                          <div className="elementor-widget-container">
                                            <div className="elementor-image">
                                              <img
                                                width="352"
                                                height="302"
                                                src="images/quaitui1.png"
                                                className="attachment-large size-large"
                                                alt=""
                                                sizes="(max-width: 352px) 100vw, 352px"
                                              />
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </section>
                            <div className="elementor-element elementor-element-4442451 degtext elementor-widget elementor-widget-heading">
                              <div className="elementor-widget-container">
                                <h2 className="elementor-heading-title elementor-size-default">
                                  {configs.housePoursTitle}
                                </h2>
                              </div>
                            </div>
                            <div className="elementor-element elementor-element-f2e5db8 elementor-widget elementor-widget-heading">
                              <div className="elementor-widget-container">
                                <p className="elementor-heading-title elementor-size-default">
                                  {configs.housePoursDescription}
                                </p>
                              </div>
                            </div>
                            <section className="elementor-section elementor-inner-section elementor-element elementor-element-9caddec elementor-section-boxed elementor-section-height-default elementor-section-height-default">
                              <div className="elementor-container elementor-column-gap-default">
                                <div className="elementor-row">
                                  <div
                                    className="elementor-column elementor-col-100 elementor-inner-column elementor-element elementor-element-b09def2"
                                    data-id="b09def2"
                                    data-element_type="column"
                                  >
                                    <div className="elementor-column-wrap elementor-element-populated">
                                      <div className="elementor-widget-wrap">
                                        <div className="elementor-element elementor-element-865b5ba elementor-widget elementor-widget-heading">
                                          <div className="elementor-widget-container">
                                            <h5 className="elementor-heading-title elementor-size-default">
                                              {configs.sparklingTitle}
                                            </h5>
                                          </div>
                                        </div>
                                        <div className="elementor-element elementor-element-5bacde8 elementor-widget elementor-widget-price-list">
                                          <div className="elementor-widget-container">
                                            <ul className="elementor-price-list">
                                              {(configs.housePours || []).map(
                                                (housePour) => (
                                                  <li>
                                                    <a
                                                      className="elementor-price-list-item"
                                                      href="#"
                                                    >
                                                      <div className="elementor-price-list-text">
                                                        <div className="elementor-price-list-header">
                                                          <span className="elementor-price-list-title">
                                                            {housePour.name}
                                                          </span>
                                                          <span className="elementor-price-list-separator"></span>
                                                          <span className="elementor-price-list-price">
                                                            {numeral(
                                                              housePour.price
                                                            ).format("0,0")}
                                                          </span>
                                                        </div>
                                                      </div>
                                                    </a>
                                                  </li>
                                                )
                                              )}
                                            </ul>
                                          </div>
                                        </div>
                                        <div className="elementor-element elementor-element-7a02586 elementor-widget-divider--view-line elementor-widget elementor-widget-divider">
                                          <div className="elementor-widget-container">
                                            <div className="elementor-divider">
                                              <span className="elementor-divider-separator"></span>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </section>
                            <div className="elementor-element elementor-element-eba8155 elementor-widget elementor-widget-button">
                              <div className="elementor-widget-container">
                                <div className="elementor-button-wrapper">
                                  <Link href="/shop">
                                    <a
                                      className="elementor-button-link elementor-button elementor-size-sm"
                                      role="button"
                                    >
                                      <span className="elementor-button-content-wrapper">
                                        <span className="elementor-button-text">
                                          Mua sắm ngay
                                        </span>
                                      </span>
                                    </a>
                                  </Link>
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

tasty.propTypes = {};

// tasty.getInitialProps = async (props) => {
//   const { store, req, accessToken, query } = props.ctx;
//   if (!!req) {
//     store.dispatch(getConfigs());
//   }
//   return {};
// };

export default tasty;
