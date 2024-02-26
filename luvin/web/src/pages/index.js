import React, { useEffect, useState } from "react";
import Head from "next/head";
import Link from "next/link";
import Swiper, { Navigation, Autoplay } from "swiper";
import { useSelector, useDispatch } from "react-redux";
import ModalVideo from "react-modal-video";

import "swiper/swiper-bundle.css";

import Content from "../components/Layout/Content";
import PopupEvent from "../components/Popup/PopupEvents";
import PopupAgeConfirm from "../components/Popup/PopupAgeConfirm";

import { getNews, resetState as resetNewState } from "../actions/news";
import { getVideos, resetState as resetVideoState } from "../actions/videos";

const configsStateSelector = (state) => state.configs;
const categoriesStateSelector = (state) => state.categories;
const videosStateSelector = (state) => state.videos;
const newsStateSelector = (state) => state.news;

export default function Home() {
  const dispatch = useDispatch();
  const { configs } = useSelector(configsStateSelector);
  const { categories } = useSelector(categoriesStateSelector);

  const { videos } = useSelector(videosStateSelector);
  const { news } = useSelector(newsStateSelector);

  const [videoSelected, setVideoSelected] = useState("");

  useEffect(() => {
    dispatch(getNews(6, 1));
    dispatch(getVideos(1, 1));
    Swiper.use([Navigation, Autoplay]);
    const bannerSwiper = new Swiper(".swiper-banner", {
      loop: true,
      autoplay: {
        delay: 5000,
      },
      // Navigation arrows
      navigation: {
        prevEl: ".banner-swiper-button-prev",
        nextEl: ".banner-swiper-button-next",
      },
    });

    return () => {
      dispatch(resetNewState());
      dispatch(resetVideoState());
    };
  }, []);

  useEffect(() => {
    if (news.length) {
      const blogSwiper = new Swiper(".swiper-blog", {
        loop: true,
        autoplay: {
          delay: 5000,
        },

        // Navigation arrows
        navigation: {
          prevEl: ".blog-swiper-button-prev",
          nextEl: ".blog-swiper-button-next",
        },
      });
    }
  }, [news]);

  return (
    <Content className="home page-template-default page page-id-2 wp-custom-logo theme-hello-elementor woocommerce-no-js elementor-default elementor-kit-76 elementor-page elementor-page-2">
      <style id="cb70d11b8">
        {`
            .clearfix::before,
      .clearfix::after {
        content: " ";
        display: table;
        clear: both;
      }
      .eael-testimonial-slider.nav-top-left,
      .eael-testimonial-slider.nav-top-right,
      .eael-team-slider.nav-top-left,
      .eael-team-slider.nav-top-right,
      .eael-logo-carousel.nav-top-left,
      .eael-logo-carousel.nav-top-right,
      .eael-post-carousel.nav-top-left,
      .eael-post-carousel.nav-top-right,
      .eael-product-carousel.nav-top-left,
      .eael-product-carousel.nav-top-right {
        padding-top: 40px;
      }
      .eael-contact-form input[type="text"],
      .eael-contact-form input[type="email"],
      .eael-contact-form input[type="url"],
      .eael-contact-form input[type="tel"],
      .eael-contact-form input[type="date"],
      .eael-contact-form input[type="number"],
      .eael-contact-form textarea {
        background: #fff;
        box-shadow: none;
        -webkit-box-shadow: none;
        float: none;
        height: auto;
        margin: 0;
        outline: 0;
        width: 100%;
      }
      .eael-contact-form input[type="submit"] {
        border: 0;
        float: none;
        height: auto;
        margin: 0;
        padding: 10px 20px;
        width: auto;
        -webkit-transition: all 0.25s linear 0s;
        -o-transition: all 0.25s linear 0s;
        transition: all 0.25s linear 0s;
      }
      .eael-contact-form.placeholder-hide input::-webkit-input-placeholder,
      .eael-contact-form.placeholder-hide textarea::-webkit-input-placeholder {
        opacity: 0;
        visibility: hidden;
      }
      .eael-contact-form.placeholder-hide input::-moz-placeholder,
      .eael-contact-form.placeholder-hide textarea::-moz-placeholder {
        opacity: 0;
        visibility: hidden;
      }
      .eael-contact-form.placeholder-hide input:-ms-input-placeholder,
      .eael-contact-form.placeholder-hide textarea:-ms-input-placeholder {
        opacity: 0;
        visibility: hidden;
      }
      .eael-contact-form.placeholder-hide input:-moz-placeholder,
      .eael-contact-form.placeholder-hide textarea:-moz-placeholder {
        opacity: 0;
        visibility: hidden;
      }
      .eael-custom-radio-checkbox input[type="checkbox"],
      .eael-custom-radio-checkbox input[type="radio"] {
        -webkit-appearance: none;
        -moz-appearance: none;
        border-style: solid;
        border-width: 0;
        outline: none;
        min-width: 1px;
        width: 15px;
        height: 15px;
        background: #ddd;
        padding: 3px;
      }
      .eael-custom-radio-checkbox input[type="checkbox"]:before,
      .eael-custom-radio-checkbox input[type="radio"]:before {
        content: "";
        width: 100%;
        height: 100%;
        padding: 0;
        margin: 0;
        display: block;
      }
      .eael-custom-radio-checkbox input[type="checkbox"]:checked:before,
      .eael-custom-radio-checkbox input[type="radio"]:checked:before {
        background: #999;
        -webkit-transition: all 0.25s linear 0s;
        -o-transition: all 0.25s linear 0s;
        transition: all 0.25s linear 0s;
      }
      .eael-custom-radio-checkbox input[type="radio"] {
        border-radius: 50%;
      }
      .eael-custom-radio-checkbox input[type="radio"]:before {
        border-radius: 50%;
      }
      .eael-post-elements-readmore-btn {
        font-size: 12px;
        font-weight: 500;
        -webkit-transition: all 300ms ease-in-out;
        -o-transition: all 300ms ease-in-out;
        transition: all 300ms ease-in-out;
        display: inline-block;
      }
      .elementor-lightbox .dialog-widget-content {
        width: 100%;
        height: 100%;
      }
      .eael-contact-form-align-left,
      .elementor-widget-eael-weform.eael-contact-form-align-left
        .eael-weform-container {
        margin: 0 auto 0 0;
      }
      .eael-contact-form-align-center,
      .elementor-widget-eael-weform.eael-contact-form-align-center
        .eael-weform-container {
        float: none;
        margin: 0 auto;
      }
      .eael-contact-form-align-right,
      .elementor-widget-eael-weform.eael-contact-form-align-right
        .eael-weform-container {
        margin: 0 0 0 auto;
      }
      .eael-post-grid-container .eael-post-grid {
        margin: 0 -10px;
      }
      .eael-post-grid-container .eael-post-grid .eael-grid-post {
        float: left;
        padding: 10px;
      }
      .eael-post-carousel .eael-grid-post {
        float: none;
        padding: 0;
      }
      .eael-grid-post-holder {
        border: 1px solid rgba(0, 0, 0, 0.1);
      }
      .eael-grid-post-holder-inner {
        height: 100%;
      }
      .eael-entry-media {
        position: relative;
      }
      .eael-entry-overlay {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 2;
        -webkit-transition: opacity 0.2s ease-in-out,
          -webkit-transform 0.25s cubic-bezier(0.19, 1, 0.22, 1);
        transition: opacity 0.2s ease-in-out,
          -webkit-transform 0.25s cubic-bezier(0.19, 1, 0.22, 1);
        -o-transition: opacity 0.2s ease-in-out,
          transform 0.25s cubic-bezier(0.19, 1, 0.22, 1);
        transition: opacity 0.2s ease-in-out,
          transform 0.25s cubic-bezier(0.19, 1, 0.22, 1);
        transition: opacity 0.2s ease-in-out,
          transform 0.25s cubic-bezier(0.19, 1, 0.22, 1),
          -webkit-transform 0.25s cubic-bezier(0.19, 1, 0.22, 1);
      }
      .eael-entry-overlay > a {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 3;
      }
      .eael-entry-title {
        margin: 10px 0 5px;
        font-size: 1.2em;
      }
      .eael-entry-thumbnail img {
        width: 100%;
        max-width: 100%;
        vertical-align: middle;
      }
      .eael-entry-thumbnail > img {
        height: 100%;
      }
      .eael-entry-footer .eael-author-avatar {
        width: 50px;
      }
      .eael-entry-footer .eael-author-avatar .avatar {
        border-radius: 50%;
      }
      .eael-post-grid .eael-entry-footer .eael-entry-meta {
        padding-left: 8px;
        text-align: left;
      }
      .eael-grid-post .eael-entry-meta {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-orient: horizontal;
        -webkit-box-direction: normal;
        -ms-flex-direction: row;
        flex-direction: row;
        white-space: nowrap;
      }
      .eael-grid-post .eael-entry-footer .eael-entry-meta {
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
        -ms-flex-direction: column;
        flex-direction: column;
      }
      .eael-entry-meta > div {
        font-size: 12px;
        line-height: 1.2;
        padding-bottom: 5px;
      }
      .eael-grid-post-excerpt p {
        margin: 0;
        font-size: 14px;
      }
      .eael-entry-meta .eael-entry-footer .eael-posted-by {
        display: block;
      }
      .eael-grid-post .eael-entry-wrapper,
      .eael-grid-post .eael-entry-footer {
        padding: 15px;
      }
      .eael-post-grid
        .eael-entry-wrapper
        > .eael-entry-meta
        span.eael-posted-on {
        padding-left: 5px;
      }
      .eael-post-grid
        .eael-entry-wrapper
        > .eael-entry-meta
        span.eael-posted-on::before {
        content: "";
        font-family: "Font Awesome 5 Free";
        font-weight: 700;
        color: inherit;
        opacity: 0.4;
        font-size: 0.8em;
        padding-right: 7px;
      }
      .eael-entry-media {
        position: relative;
      }
      .eael-entry-overlay {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        justify-content: center;
      }
      .eael-entry-overlay > i {
        color: #fff;
      }
      .eael-entry-overlay.fade-in {
        visibility: hidden;
        opacity: 0;
        -webkit-transition: 300ms;
        -o-transition: 300ms;
        transition: 300ms;
      }
      .eael-entry-media:hover .eael-entry-overlay.fade-in {
        visibility: visible;
        opacity: 1;
      }
      .eael-entry-media:hover .eael-entry-overlay.fade-in > i {
        -webkit-transform: translate(0);
        -ms-transform: translate(0);
        transform: translate(0);
        opacity: 1;
      }
      .eael-entry-overlay.zoom-in {
        -webkit-transform: scale(0.9);
        -ms-transform: scale(0.9);
        transform: scale(0.9);
        visibility: hidden;
        opacity: 0;
        -webkit-transition: 300ms;
        -o-transition: 300ms;
        transition: 300ms;
      }
      .eael-entry-media:hover .eael-entry-overlay.zoom-in {
        visibility: visible;
        opacity: 1;
        -webkit-transform: scale(1);
        -ms-transform: scale(1);
        transform: scale(1);
      }
      .eael-entry-overlay.slide-up {
        -webkit-transform: translateY(100%);
        -ms-transform: translateY(100%);
        transform: translateY(100%);
        visibility: hidden;
        opacity: 0;
        -webkit-transition: 300ms;
        -o-transition: 300ms;
        transition: 300ms;
      }
      .eael-entry-media:hover .eael-entry-overlay.slide-up {
        -webkit-transform: translateY(0);
        -ms-transform: translateY(0);
        transform: translateY(0);
        visibility: visible;
        opacity: 1;
      }
      .eael-entry-media {
        overflow: hidden;
      }
      .eael-entry-media.grid-hover-style-fade-in .eael-entry-overlay {
        opacity: 0;
      }
      .eael-entry-media.grid-hover-style-fade-in:hover .eael-entry-overlay {
        opacity: 1;
      }
      .eael-entry-media.grid-hover-style-none .eael-entry-overlay {
        display: none;
      }
      .eael-entry-overlay.none {
        opacity: 0;
      }
      .eael-entry-media.grid-hover-style-zoom-in .eael-entry-overlay {
        -webkit-transform: scale(0.4);
        -ms-transform: scale(0.4);
        transform: scale(0.4);
        opacity: 0;
      }
      .eael-entry-media.grid-hover-style-zoom-in:hover .eael-entry-overlay {
        -webkit-transform: scale(1);
        -ms-transform: scale(1);
        transform: scale(1);
        opacity: 1;
      }
      .eael-entry-media.grid-hover-style-animate-down .eael-entry-overlay {
        -webkit-transform: translateY(-100%);
        -ms-transform: translateY(-100%);
        transform: translateY(-100%);
      }
      .eael-entry-media.grid-hover-style-animate-down .eael-entry-overlay > i {
        -webkit-transform: translateY(-100px);
        -ms-transform: translateY(-100px);
        transform: translateY(-100px);
        -webkit-transition-delay: 100ms;
        -o-transition-delay: 100ms;
        transition-delay: 100ms;
        -webkit-transition-duration: 300ms;
        -o-transition-duration: 300ms;
        transition-duration: 300ms;
      }
      .eael-entry-media.grid-hover-style-animate-down:hover
        .eael-entry-overlay {
        -webkit-transform: translate(0);
        -ms-transform: translate(0);
        transform: translate(0);
      }
      .eael-entry-media.grid-hover-style-animate-down:hover
        .eael-entry-overlay
        > i {
        -webkit-transform: translateY(0);
        -ms-transform: translateY(0);
        transform: translateY(0);
      }
      .eael-entry-media.grid-hover-style-animate-up .eael-entry-overlay {
        -webkit-transform: translateY(100%);
        -ms-transform: translateY(100%);
        transform: translateY(100%);
        visibility: hidden;
        opacity: 0;
      }
      .eael-entry-media.grid-hover-style-animate-up .eael-entry-overlay > i {
        -webkit-transform: translateY(100px);
        -ms-transform: translateY(100px);
        transform: translateY(100px);
        -webkit-transition-delay: 100ms;
        -o-transition-delay: 100ms;
        transition-delay: 100ms;
        -webkit-transition-duration: 300ms;
        -o-transition-duration: 300ms;
        transition-duration: 300ms;
      }
      .eael-entry-media.grid-hover-style-animate-up:hover .eael-entry-overlay {
        -webkit-transform: translate(0);
        -ms-transform: translate(0);
        transform: translate(0);
        visibility: visible;
        opacity: 1;
      }
      .eael-entry-media.grid-hover-style-animate-up:hover
        .eael-entry-overlay
        > i {
        -webkit-transform: translateY(0);
        -ms-transform: translateY(0);
        transform: translateY(0);
      }
      @media only screen and (min-width: 1025px) {
        .elementor-element.elementor-grid-eael-col-1 {
          position: relative;
        }
        .elementor-element.elementor-grid-eael-col-1 .eael-grid-post {
          width: 100%;
          float: left;
        }
        .elementor-element.elementor-grid-eael-col-2 {
          position: relative;
        }
        .elementor-element.elementor-grid-eael-col-2 .eael-grid-post {
          width: 50%;
          float: left;
        }
        .elementor-element.elementor-grid-eael-col-2
          .eael-grid-post:nth-of-type(2n) {
          margin-right: 0 !important;
        }
        .elementor-element.elementor-grid-eael-col-2
          .eael-grid-post:nth-of-type(2n + 1) {
          clear: left;
        }
        .elementor-element.elementor-grid-eael-col-3 {
          position: relative;
        }
        .elementor-element.elementor-grid-eael-col-3 .eael-grid-post {
          width: 33.3333%;
          float: left;
        }
        .elementor-element.elementor-grid-eael-col-3
          .eael-grid-post:nth-of-type(3n) {
          margin-right: 0 !important;
        }
        .elementor-element.elementor-grid-eael-col-3
          .eael-grid-post:nth-of-type(3n + 1) {
          clear: left;
        }
        .elementor-element.elementor-grid-eael-col-4 {
          position: relative;
        }
        .elementor-element.elementor-grid-eael-col-4 .eael-grid-post {
          width: 25%;
          float: left;
        }
        .elementor-element.elementor-grid-eael-col-4
          .eael-grid-post:nth-of-type(4n) {
          margin-right: 0 !important;
        }
        .elementor-element.elementor-grid-eael-col-4
          .eael-grid-post:nth-of-type(4n + 1) {
          clear: left;
        }
        .elementor-element.elementor-grid-eael-col-5 {
          position: relative;
        }
        .elementor-element.elementor-grid-eael-col-5 .eael-grid-post {
          width: 20%;
          float: left;
        }
        .elementor-element.elementor-grid-eael-col-5
          .eael-grid-post:nth-of-type(5n) {
          margin-right: 0 !important;
        }
        .elementor-element.elementor-grid-eael-col-5
          .eael-grid-post:nth-of-type(5n + 1) {
          clear: left;
        }
        .elementor-element.elementor-grid-eael-col-6 {
          position: relative;
        }
        .elementor-element.elementor-grid-eael-col-6 .eael-grid-post {
          width: 16%;
          float: left;
        }
        .elementor-element.elementor-grid-eael-col-6
          .eael-grid-post:nth-of-type(6n) {
          margin-right: 0 !important;
        }
        .elementor-element.elementor-grid-eael-col-6
          .eael-grid-post:nth-of-type(6n + 1) {
          clear: left;
        }
      }
      @media only screen and (max-width: 1024px) and (min-width: 766px) {
        .elementor-element.elementor-grid-tablet-eael-col-1 {
          position: relative;
        }
        .elementor-element.elementor-grid-tablet-eael-col-1 .eael-grid-post {
          width: 100%;
          float: left;
        }
        .elementor-element.elementor-grid-tablet-eael-col-2 {
          position: relative;
        }
        .elementor-element.elementor-grid-tablet-eael-col-2 .eael-grid-post {
          width: 50%;
          float: left;
        }
        .elementor-element.elementor-grid-tablet-eael-col-2
          .eael-grid-post:nth-of-type(2n) {
          margin-right: 0 !important;
        }
        .elementor-element.elementor-grid-tablet-eael-col-2
          .eael-grid-post:nth-of-type(2n + 1) {
          clear: left;
        }
        .elementor-element.elementor-grid-tablet-eael-col-3 {
          position: relative;
        }
        .elementor-element.elementor-grid-tablet-eael-col-3 .eael-grid-post {
          width: 33.3333%;
          float: left;
        }
        .elementor-element.elementor-grid-tablet-eael-col-3
          .eael-grid-post:nth-of-type(3n) {
          margin-right: 0 !important;
        }
        .elementor-element.elementor-grid-tablet-eael-col-3
          .eael-grid-post:nth-of-type(3n + 1) {
          clear: left;
        }
        .elementor-element.elementor-grid-tablet-eael-col-4 {
          position: relative;
        }
        .elementor-element.elementor-grid-tablet-eael-col-4 .eael-grid-post {
          width: 25%;
          float: left;
        }
        .elementor-element.elementor-grid-tablet-eael-col-4
          .eael-grid-post:nth-of-type(4n) {
          margin-right: 0 !important;
        }
        .elementor-element.elementor-grid-tablet-eael-col-4
          .eael-grid-post:nth-of-type(4n + 1) {
          clear: left;
        }
        .elementor-element.elementor-grid-tablet-eael-col-5 {
          position: relative;
        }
        .elementor-element.elementor-grid-tablet-eael-col-5 .eael-grid-post {
          width: 20%;
          float: left;
        }
        .elementor-element.elementor-grid-tablet-eael-col-5
          .eael-grid-post:nth-of-type(5n) {
          margin-right: 0 !important;
        }
        .elementor-element.elementor-grid-tablet-eael-col-5
          .eael-grid-post:nth-of-type(5n + 1) {
          clear: left;
        }
        .elementor-element.elementor-grid-tablet-eael-col-6 {
          position: relative;
        }
        .elementor-element.elementor-grid-tablet-eael-col-6 .eael-grid-post {
          width: 16%;
          float: left;
        }
        .elementor-element.elementor-grid-tablet-eael-col-6
          .eael-grid-post:nth-of-type(6n) {
          margin-right: 0 !important;
        }
        .elementor-element.elementor-grid-tablet-eael-col-6
          .eael-grid-post:nth-of-type(6n + 1) {
          clear: left;
        }
      }
      @media only screen and (max-width: 767px) {
        .elementor-element.elementor-grid-mobile-eael-col-1 {
          position: relative;
        }
        .elementor-element.elementor-grid-mobile-eael-col-1 .eael-grid-post {
          width: 100%;
          float: left;
        }
        .elementor-element.elementor-grid-mobile-eael-col-2 {
          position: relative;
        }
        .elementor-element.elementor-grid-mobile-eael-col-2 .eael-grid-post {
          width: 50%;
          float: left;
        }
        .elementor-element.elementor-grid-mobile-eael-col-2
          .eael-grid-post:nth-of-type(2n) {
          margin-right: 0 !important;
        }
        .elementor-element.elementor-grid-mobile-eael-col-2
          .eael-grid-post:nth-of-type(2n + 1) {
          clear: left;
        }
        .elementor-element.elementor-grid-mobile-eael-col-3 {
          position: relative;
        }
        .elementor-element.elementor-grid-mobile-eael-col-3 .eael-grid-post {
          width: 33.3333%;
          float: left;
        }
        .elementor-element.elementor-grid-mobile-eael-col-3
          .eael-grid-post:nth-of-type(3n) {
          margin-right: 0 !important;
        }
        .elementor-element.elementor-grid-mobile-eael-col-3
          .eael-grid-post:nth-of-type(3n + 1) {
          clear: left;
        }
        .elementor-element.elementor-grid-mobile-eael-col-4 {
          position: relative;
        }
        .elementor-element.elementor-grid-mobile-eael-col-4 .eael-grid-post {
          width: 25%;
          float: left;
        }
        .elementor-element.elementor-grid-mobile-eael-col-4
          .eael-grid-post:nth-of-type(4n) {
          margin-right: 0 !important;
        }
        .elementor-element.elementor-grid-mobile-eael-col-4
          .eael-grid-post:nth-of-type(4n + 1) {
          clear: left;
        }
        .elementor-element.elementor-grid-mobile-eael-col-5 {
          position: relative;
        }
        .elementor-element.elementor-grid-mobile-eael-col-5 .eael-grid-post {
          width: 20%;
          float: left;
        }
        .elementor-element.elementor-grid-mobile-eael-col-5
          .eael-grid-post:nth-of-type(5n) {
          margin-right: 0 !important;
        }
        .elementor-element.elementor-grid-mobile-eael-col-5
          .eael-grid-post:nth-of-type(5n + 1) {
          clear: left;
        }
        .elementor-element.elementor-grid-mobile-eael-col-6 {
          position: relative;
        }
        .elementor-element.elementor-grid-mobile-eael-col-6 .eael-grid-post {
          width: 16%;
          float: left;
        }
        .elementor-element.elementor-grid-mobile-eael-col-6
          .eael-grid-post:nth-of-type(6n) {
          margin-right: 0 !important;
        }
        .elementor-element.elementor-grid-mobile-eael-col-6
          .eael-grid-post:nth-of-type(6n + 1) {
          clear: left;
        }
      }
      .eael-author-avatar > a {
        display: block;
      }
      .eael-entry-footer {
        overflow: hidden;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
      }
      .eael-entry-footer > div {
        display: inline-block;
        float: left;
      }
      .post-carousel-categories {
        position: absolute;
        left: 0;
        top: 0;
        z-index: 11;
        width: 100%;
        margin: 0;
        padding: 15px;
        text-align: left;
        visibility: hidden;
        opacity: 0;
        -webkit-transition: 300ms;
        -o-transition: 300ms;
        transition: 300ms;
      }
      .post-carousel-categories li {
        display: inline-block;
        text-transform: capitalize;
        margin-right: 5px;
        position: relative;
      }
      .post-carousel-categories li:after {
        content: ",";
        color: #fff;
      }
      .post-carousel-categories li:last-child:after {
        display: none;
      }
      .post-carousel-categories li a {
        color: #fff;
      }
      .eael-entry-media:hover .post-carousel-categories {
        visibility: visible;
        opacity: 1;
      }
      .eael-post-grid-style-three .eael-meta-posted-on {
        min-width: 60px;
        height: 50px;
        padding: 5px;
        display: -webkit-inline-box;
        display: -ms-inline-flexbox;
        display: inline-flex;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        justify-content: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        border-radius: 4px;
        -webkit-box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.5);
        box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.5);
        text-align: center;
        font-size: 16px;
        line-height: 18px;
        margin-top: 12px;
        margin-left: 12px;
      }
      .eael-post-grid-style-three .eael-meta-posted-on span {
        display: block;
      }
      .eael-post-grid-style-two .eael-entry-meta {
        -webkit-box-align: baseline;
        -ms-flex-align: baseline;
        align-items: baseline;
      }
      .eael-post-grid-style-two .eael-entry-meta .eael-meta-posted-on {
        padding: 0;
        font-size: 12px;
        margin-right: 15px;
        color: #929292;
      }
      .eael-post-grid-style-two .eael-entry-meta .eael-meta-posted-on i {
        margin-right: 7px;
      }
      .eael-post-grid-style-two .eael-entry-meta .post-meta-categories {
        list-style: none;
        display: -webkit-inline-box;
        display: -ms-inline-flexbox;
        display: inline-flex;
        -ms-flex-flow: wrap;
        flex-flow: wrap;
        margin: 0;
        padding-left: 0;
      }
      .eael-post-grid-style-two .eael-entry-meta .post-meta-categories li {
        font-size: 12px;
        margin-right: 7px;
        color: #929292;
      }
      .eael-post-grid-style-two
        .eael-entry-meta
        .post-meta-categories
        li:last-child {
        margin-right: 0;
      }
      .eael-post-grid-style-two .eael-entry-meta .post-meta-categories li a {
        color: #929292;
      }
      .rtl .eael-grid-post .eael-entry-footer {
        direction: ltr;
      }
      .eael-post-carousel.grayscale-normal img {
        -webkit-filter: grayscale(100%);
        filter: grayscale(100%);
      }
      .eael-post-carousel.grayscale-normal .swiper-slide:hover img {
        -webkit-filter: none;
        filter: none;
      }
      .eael-post-carousel.grayscale-hover .swiper-slide:hover img {
        -webkit-filter: grayscale(100%);
        filter: grayscale(100%);
      }
      .eael-post-carousel.swiper-container .swiper-slide {
        text-align: center;
      }
      .eael-post-carousel .eael-grid-post-holder {
        -webkit-transition: all 0.3s ease;
        -o-transition: all 0.3s ease;
        transition: all 0.3s ease;
      }
      .eael-post-carousel .eael-entry-thumbnail > img,
      .swiper-container-wrap .eael-post-carousel .swiper-slide img {
        height: 100%;
        width: 100%;
        -o-object-fit: cover;
        object-fit: cover;
      }
      .eael-post-carousel .eael-entry-medianone {
        position: relative;
      }
      .eael-post-carousel .eael-entry-content {
        padding: 0 15px;
      }
      .eael-entry-thumbnail {
        position: relative;
      }
      .eael-entry-thumbnail a {
        position: absolute;
        left: 0;
        top: 0;
        height: 100%;
        width: 100%;
      }
      .eael-post-carousel .eael-post-carousel-title a {
        color: inherit;
      }
      .eael-author-avatar > a {
        display: block;
      }
      .eael-entry-footer {
        overflow: hidden;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
      }
      .eael-entry-footer > div {
        display: inline-block;
        float: left;
      }
      .post_carousel_meta_alignment-right .eael-entry-meta {
        text-align: right;
        -webkit-box-align: end;
        -ms-flex-align: end;
        align-items: flex-end;
        -webkit-box-pack: end;
        -ms-flex-pack: end;
        justify-content: flex-end;
      }
      .post_carousel_meta_alignment-center .eael-entry-meta {
        text-align: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        justify-content: center;
      }
      .post_carousel_meta_alignment-right .eael-entry-footer > div {
        float: right;
      }
      .post_carousel_meta_alignment-right .eael-entry-footer {
        display: block;
      }
      .post_carousel_meta_alignment-right .eael-entry-footer .eael-entry-meta {
        text-align: right;
        padding-left: 0;
        padding-right: 15px;
      }
      .post_carousel_meta_alignment-center .eael-entry-footer > div {
        float: none;
        display: block;
      }
      .post_carousel_meta_alignment-center .eael-entry-footer {
        margin: 0 auto 15px;
        display: -webkit-inline-box;
        display: -ms-inline-flexbox;
        display: inline-flex;
      }
      .swiper-container.eael-post-carousel.show-read-more-button
        .eael-post-elements-readmore-btn {
        display: inline-block;
      }
      .eael-post-carousel-wrap .swiper-button-prev i {
        -webkit-transform: rotate(0deg);
        -ms-transform: rotate(0deg);
        transform: rotate(0deg);
      }
      .eael-entry-media:hover .eael-entry-overlay.zoom-in {
        -webkit-transform: scale(1);
        -ms-transform: scale(1);
        transform: scale(1);
        visibility: visible;
        opacity: 1;
      }
      .eael-entry-media:hover .eael-entry-overlay.fade-in {
        visibility: visible;
        opacity: 1;
      }
      .eael-entry-media:hover .eael-entry-overlay.slide-up {
        -webkit-transform: translateY(0);
        -ms-transform: translateY(0);
        transform: translateY(0);
        visibility: visible;
        opacity: 1;
      }
      .eael-post-block-item-holder .eael-entry-media {
        overflow: hidden;
      }
      .eael-entry-overlay.none {
        background: none !important;
      }
      .eael-post-carousel-wrap .eael-logo-carousel-wrap .swiper-button-prev i {
        -webkit-transform: rotate(0deg);
        -ms-transform: rotate(0deg);
        transform: rotate(0deg);
      }
      .eael-logo-carousel-wrap.swiper-container-wrap .swiper-pagination {
        bottom: 10px;
        left: 0;
        width: 100%;
      }
      .eael-logo-carousel-wrap.swiper-container-wrap-dots-outside
        .swiper-pagination {
        position: static;
      }
      .eael-logo-carousel-wrap.swiper-container-wrap .swiper-pagination-bullet {
        background: #ccc;
        margin: 0 4px;
        opacity: 1;
        height: 8px;
        width: 8px;
        -webkit-transition: all 0.3s ease;
        -o-transition: all 0.3s ease;
        transition: all 0.3s ease;
      }
      .eael-logo-carousel-wrap.swiper-container-wrap
        .swiper-pagination-bullet-active {
        background: #000;
      }
      .eael-logo-carousel-wrap.swiper-container-wrap .swiper-button-next,
      .eael-logo-carousel-wrap.swiper-container-wrap .swiper-button-prev {
        background-image: none;
        outline: none;
      }
      .eael-post-grid-container
        .eael-post-grid.eael-post-carousel
        .eael-grid-post {
        width: 100%;
      }
      .post-carousel-categories {
        position: absolute;
        left: 0;
        top: 0;
        z-index: 11;
        width: 100%;
        margin: 0;
        padding: 15px;
        text-align: left;
      }
      .post-carousel-categories li {
        display: inline-block;
        text-transform: capitalize;
        margin-right: 5px;
        position: relative;
      }
      .post-carousel-categories li:after {
        content: ",";
        color: #fff;
      }
      .post-carousel-categories li:last-child:after {
        display: none;
      }
      .post-carousel-categories li a {
        color: #fff;
      }
      .eael-post-carousel-wrap .eael-entry-content-btn {
        margin-top: 15px;
      }
      .eael-post-carousel-style-three .eael-entry-content {
        padding: 0 15px 15px 15px;
      }
      .eael-post-carousel-style-three .eael-meta-posted-on {
        min-width: 60px;
        height: 50px;
        display: -webkit-inline-box;
        display: -ms-inline-flexbox;
        display: inline-flex;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        justify-content: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        border-radius: 4px;
        -webkit-box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.5);
        box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.5);
        text-align: center;
        font-size: 16px;
        line-height: 18px;
        padding: 5px;
        margin-top: 5px;
      }
      .eael-post-carousel-style-three .eael-meta-posted-on span {
        display: block;
      }
      .eael-post-carousel-style-two .eael-entry-content {
        padding: 0 15px;
      }
      .eael-post-carousel-style-two .eael-entry-footer-two {
        padding: 15px;
      }
      .eael-post-carousel-style-two .eael-entry-meta {
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
      }
      .eael-post-carousel-style-two .eael-entry-meta .eael-meta-posted-on {
        padding: 0;
        font-size: 12px;
        margin-right: 15px;
        color: #929292;
      }
      .eael-post-carousel-style-two .eael-entry-meta .eael-meta-posted-on i {
        margin-right: 7px;
      }
      .eael-post-carousel-style-two .eael-entry-meta .post-meta-categories {
        list-style: none;
        display: -webkit-inline-box;
        display: -ms-inline-flexbox;
        display: inline-flex;
        margin: 0;
      }
      .eael-post-carousel-style-two .eael-entry-meta .post-meta-categories li {
        font-size: 12px;
        margin-right: 7px;
        color: #929292;
      }
      .eael-post-carousel-style-two
        .eael-entry-meta
        .post-meta-categories
        li
        a {
        color: #929292;
      }
      .eael-post-carousel-style-two
        .eael-entry-meta
        .post-meta-categories
        li:last-child {
        margin-right: 0;
      }`}
      </style>
      <Head>
        <title>Luvin - Thưởng thức cuộc sống</title>
        <meta
          name="description"
          content="Tất cả các sản phẩm rượu vang được lên men tự nhiên và có nồng độ cồn dưới 15 độ"
        />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Luvin - Thưởng thức cuộc sống" />
        <meta property="og:url" content="https://luvin.com.vn" />
        <meta property="og:site_name" content="Luvin" />
        <meta
          property="og:image"
          content="https://luvin.com.vn/images/banner.jpg"
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
      </Head>
      <ModalVideo
        channel="youtube"
        autoplay
        isOpen={!!videoSelected}
        videoId={videoSelected}
        onClose={() => setVideoSelected("")}
      />
      <main
        className="site-main post-2 page type-page status-publish hentry"
        role="main"
      >
        <PopupEvent />
        <PopupAgeConfirm />
        <div className="page-content">
          <div className="elementor elementor-2">
            <div className="elementor-inner">
              <div className="elementor-section-wrap">
                <section className="elementor-section elementor-top-section elementor-element elementor-element-b3e8910 elementor-section-full_width elementor-section-height-min-height elementor-section-height-default elementor-section-items-middle">
                  <div className="elementor-container elementor-column-gap-no">
                    <div className="elementor-row">
                      <div className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-ec0e8a4">
                        <div className="elementor-column-wrap elementor-element-populated">
                          <div className="elementor-widget-wrap">
                            <div className="elementor-element elementor-element-4d6f905 elementor--h-position-center elementor--v-position-middle elementor-arrows-position-inside elementor-widget elementor-widget-slides">
                              <div className="elementor-widget-container">
                                <div className="elementor-swiper">
                                  <div
                                    className="elementor-slides-wrapper elementor-main-swiper swiper-container swiper-banner"
                                    dir="ltr"
                                    data-animation="fadeInUp"
                                  >
                                    <div className="swiper-wrapper elementor-slides">
                                      {configs.banners.map((image) => (
                                        <div
                                          className="elementor-repeater-item-e2a8157 swiper-slide"
                                          key={image}
                                        >
                                          <div
                                            className="swiper-slide-bg"
                                            style={{
                                              backgroundImage: `url(${image})`,
                                            }}
                                          ></div>
                                          <div className="swiper-slide-inner">
                                            <div className="swiper-slide-contents"></div>
                                          </div>
                                        </div>
                                      ))}
                                    </div>
                                    <div className="elementor-swiper-button elementor-swiper-button-prev banner-swiper-button-prev">
                                      <i
                                        className="eicon-chevron-left"
                                        aria-hidden="true"
                                      />
                                      <span className="elementor-screen-only">
                                        Previous
                                      </span>
                                    </div>
                                    <div className="elementor-swiper-button elementor-swiper-button-next banner-swiper-button-next">
                                      <i
                                        className="eicon-chevron-right"
                                        aria-hidden="true"
                                      />
                                      <span className="elementor-screen-only">
                                        Next
                                      </span>
                                    </div>
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
                <section className="elementor-section elementor-top-section elementor-element elementor-element-5c8672e elementor-section-boxed elementor-section-height-default elementor-section-height-default">
                  <div className="elementor-container elementor-column-gap-default">
                    <div className="elementor-row">
                      <div className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-16fd017">
                        <div className="elementor-column-wrap elementor-element-populated">
                          <div className="elementor-widget-wrap">
                            <div className="elementor-element elementor-element-cfcda50 elementor-icon-list--layout-inline elementor-align-center elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list">
                              <div className="elementor-widget-container">
                                <ul className="elementor-icon-list-items elementor-inline-items">
                                  <li className="elementor-icon-list-item elementor-inline-item">
                                    <span className="elementor-icon-list-icon">
                                      <i
                                        aria-hidden="true"
                                        className="fas fa-map-marked-alt"
                                      ></i>
                                    </span>
                                    <span className="elementor-icon-list-text">
                                      L1-13 Vincom Center 15A - Nguyễn Chí Thanh
                                      - Đống Đa - Hà Nội
                                    </span>
                                  </li>
                                  <li className="elementor-icon-list-item elementor-inline-item">
                                    <span className="elementor-icon-list-icon">
                                      <i
                                        aria-hidden="true"
                                        className="far fa-envelope"
                                      ></i>
                                    </span>
                                    <span className="elementor-icon-list-text">
                                      info@luvin.com.vn
                                    </span>
                                  </li>
                                  <li className="elementor-icon-list-item elementor-inline-item">
                                    <span className="elementor-icon-list-icon">
                                      <i
                                        aria-hidden="true"
                                        className="fas fa-phone-square-alt"
                                      ></i>
                                    </span>
                                    <span className="elementor-icon-list-text">
                                      84.76.855.3838 - 84.989.27.3838
                                    </span>
                                  </li>
                                  <li className="elementor-icon-list-item elementor-inline-item">
                                    <a
                                      href="https://g.page/LuVinGourmetNCT?share"
                                      target="_blank"
                                    >
                                      <span className="elementor-icon-list-icon">
                                        <i
                                          aria-hidden="true"
                                          className="fas fa-map-marked-alt"
                                        ></i>
                                      </span>
                                      <span className="elementor-icon-list-text">
                                        Chỉ đường
                                      </span>
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
                <section className="elementor-section elementor-top-section elementor-element elementor-element-517afdb elementor-section-boxed elementor-section-height-default elementor-section-height-default">
                  <div className="elementor-container elementor-column-gap-default">
                    <div className="elementor-row">
                      <div className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-fe4362b">
                        <div className="elementor-column-wrap elementor-element-populated">
                          <div className="elementor-widget-wrap">
                            <div className="elementor-element elementor-element-5a08c2d elementor-widget elementor-widget-heading">
                              <div className="elementor-widget-container">
                                <h2 className="elementor-heading-title elementor-size-default">
                                  {configs.slogan}
                                </h2>
                              </div>
                            </div>
                            <div className="elementor-element elementor-element-77613ad elementor-widget elementor-widget-heading">
                              <div className="elementor-widget-container">
                                <p className="elementor-heading-title elementor-size-default">
                                  {configs.description}
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
                <section className="elementor-section elementor-top-section elementor-element elementor-element-447286e home-card elementor-section-boxed elementor-section-height-default elementor-section-height-default">
                  <div className="elementor-container elementor-column-gap-default">
                    <div className="elementor-row">
                      {categories.map(
                        ({ ident, slug, name, description, image }) => (
                          <div
                            className="elementor-column elementor-col-25 elementor-top-column elementor-element elementor-element-1a170ed"
                            key={ident}
                          >
                            <div className="elementor-column-wrap elementor-element-populated">
                              <div className="elementor-widget-wrap">
                                <div className="elementor-element elementor-element-e5d2ac1 elementor-widget elementor-widget-image">
                                  <div className="elementor-widget-container">
                                    <div className="elementor-image">
                                      <Link href="/[category]" as={`/${slug}`}>
                                        <a>
                                          <img
                                            width="400"
                                            height="420"
                                            src={image}
                                            className="attachment-large size-large"
                                            alt=""
                                            sizes="(max-width: 400px) 100vw, 400px"
                                          />
                                        </a>
                                      </Link>
                                    </div>
                                  </div>
                                </div>
                                <div className="elementor-element elementor-element-a6cf860 elementor-cta--valign-middle home-cta-box elementor-cta--skin-classic elementor-animated-content elementor-bg-transform elementor-bg-transform-zoom-in elementor-widget elementor-widget-call-to-action">
                                  <div className="elementor-widget-container">
                                    <div className="elementor-cta">
                                      <div className="elementor-cta__content">
                                        <h2 className="elementor-cta__title elementor-cta__content-item elementor-content-item">
                                          {name}
                                        </h2>

                                        <div className="elementor-cta__description elementor-cta__content-item elementor-content-item">
                                          {description}
                                        </div>

                                        <div className="elementor-cta__button-wrapper elementor-cta__content-item elementor-content-item">
                                          <Link
                                            href="/[category]"
                                            as={`/${slug}`}
                                          >
                                            <a className="elementor-cta__button elementor-button elementor-size-sm">
                                              Xem thêm
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
                        )
                      )}
                    </div>
                  </div>
                </section>
                <section
                  className="elementor-section elementor-top-section elementor-element elementor-element-9d6b616 elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                  style={{
                    backgroundImage: `url(${configs.ctaImage})`,
                  }}
                >
                  <div className="elementor-container elementor-column-gap-default">
                    <div className="elementor-row">
                      <div className="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-135dca1">
                        <div className="elementor-column-wrap elementor-element-populated">
                          <div className="elementor-widget-wrap">
                            <div className="elementor-element elementor-element-c96c3f3 elementor-cta--skin-cover elementor-cta--valign-middle elementor-widget elementor-widget-call-to-action">
                              <div className="elementor-widget-container">
                                <div className="elementor-cta">
                                  <div className="elementor-cta__bg-wrapper">
                                    <div className="elementor-cta__bg elementor-bg"></div>
                                    <div className="elementor-cta__bg-overlay"></div>
                                  </div>
                                  <div className="elementor-cta__content">
                                    <h2 className="elementor-cta__title elementor-cta__content-item elementor-content-item">
                                      {configs.ctaTitle}
                                    </h2>

                                    <div className="elementor-cta__description elementor-cta__content-item elementor-content-item">
                                      {configs.ctaDescription}
                                    </div>

                                    <div className="elementor-cta__button-wrapper elementor-cta__content-item elementor-content-item">
                                      <a
                                        className="elementor-cta__button elementor-button elementor-size-xs"
                                        href={configs.ctaUrl}
                                      >
                                        Xem ngay
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-503ff12">
                        <div className="elementor-column-wrap">
                          <div className="elementor-widget-wrap"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
                <section className="elementor-section elementor-top-section elementor-element elementor-element-133c334 elementor-section-boxed elementor-section-height-default elementor-section-height-default">
                  <div className="elementor-container elementor-column-gap-default">
                    <div className="elementor-row">
                      <div className="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-d492930">
                        <div className="elementor-column-wrap elementor-element-populated">
                          <div className="elementor-widget-wrap">
                            <div className="elementor-element elementor-element-9fda2b9 elementor-widget elementor-widget-heading">
                              <div className="elementor-widget-container">
                                <Link href="/video">
                                  <h2 className="elementor-heading-title elementor-size-default">
                                    Video
                                  </h2>
                                </Link>
                              </div>
                            </div>
                            <div className="elementor-element elementor-element-5bc48ab elementor-aspect-ratio-169 elementor-widget elementor-widget-video">
                              <div className="elementor-widget-container">
                                <div className="elementor-wrapper elementor-open-lightbox">
                                  <div
                                    className="elementor-custom-embed-image-overlay"
                                    data-elementor-open-lightbox="yes"
                                    data-elementor-lightbox='{"type":"video","videoType":"youtube","url":"https:\/\/www.youtube.com\/embed\/rI7GbeQ-odg?feature=oembed&amp;start&amp;end&amp;wmode=opaque&amp;loop=0&amp;controls=1&amp;mute=0&amp;rel=0&amp;modestbranding=1","modalOptions":{"id":"elementor-lightbox-5bc48ab","entranceAnimation":"","entranceAnimation_tablet":"","entranceAnimation_mobile":"","videoAspectRatio":"169"}}'
                                    onClick={() => {
                                      const { video } = videos[0];
                                      const [, query] = video.split("?");
                                      const [v] = (query || "").split("&");
                                      const videoId = (v || "").replace(
                                        "v=",
                                        ""
                                      );
                                      setVideoSelected(videoId);
                                    }}
                                  >
                                    <img
                                      width="1280"
                                      height="720"
                                      src={(videos[0] || {}).image}
                                      className="attachment-full size-full"
                                      alt=""
                                      sizes="(max-width: 1280px) 100vw, 1280px"
                                    />
                                    <div
                                      className="elementor-custom-embed-play"
                                      role="button"
                                    >
                                      <i
                                        className="eicon-play"
                                        aria-hidden="true"
                                      ></i>
                                      <span className="elementor-screen-only">
                                        Chơi Video
                                      </span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-0412ad8">
                        <div className="elementor-column-wrap elementor-element-populated">
                          <div className="elementor-widget-wrap">
                            <div className="elementor-element elementor-element-64e59c6 elementor-widget elementor-widget-heading">
                              <div className="elementor-widget-container">
                                <Link href="/tin-tuc">
                                  <h2 className="elementor-heading-title elementor-size-default">
                                    Blog
                                  </h2>
                                </Link>
                              </div>
                            </div>
                            <div className="elementor-element elementor-element-2028771 home-post-carousel elementor-arrows-position-inside elementor-widget elementor-widget-image-carousel">
                              <div className="elementor-widget-container">
                                <div
                                  className="elementor-image-carousel-wrapper swiper-container swiper-blog"
                                  dir="ltr"
                                >
                                  <div className="elementor-image-carousel swiper-wrapper">
                                    {news.map(({ title, slug, image }) => {
                                      return (
                                        <div className="swiper-slide">
                                          <Link
                                            href="/tin-tuc/[slug].js"
                                            as={`/tin-tuc/${slug}`}
                                          >
                                            <a
                                              data-elementor-open-lightbox="yes"
                                              data-elementor-lightbox-slideshow="2028771"
                                              data-elementor-lightbox-title="pexels-ylanite-koppens-2820146"
                                            >
                                              <figure className="swiper-slide-inner">
                                                <img
                                                  className="swiper-slide-image"
                                                  src={image}
                                                  alt={title}
                                                />
                                                <figcaption className="elementor-image-carousel-caption">
                                                  {title}
                                                </figcaption>
                                              </figure>
                                            </a>
                                          </Link>
                                        </div>
                                      );
                                    })}
                                  </div>
                                  <div className="elementor-swiper-button elementor-swiper-button-prev blog-swiper-button-prev">
                                    <i
                                      className="eicon-chevron-left"
                                      aria-hidden="true"
                                    ></i>
                                    <span className="elementor-screen-only">
                                      Previous
                                    </span>
                                  </div>
                                  <div className="elementor-swiper-button elementor-swiper-button-next blog-swiper-button-next">
                                    <i
                                      className="eicon-chevron-right"
                                      aria-hidden="true"
                                    ></i>
                                    <span className="elementor-screen-only">
                                      Next
                                    </span>
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
      </main>
    </Content>
  );
}
