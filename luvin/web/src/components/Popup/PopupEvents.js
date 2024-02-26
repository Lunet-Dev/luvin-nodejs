import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Swiper, { Navigation, Autoplay } from "swiper";
import { useSelector, useDispatch } from "react-redux";
import Link from "next/link";

import Portal from "./Portal";

import { getUpcommingEvents, resetState } from "../../actions/events";

const eventsStateSelector = (state) => state.events;

function PopupEvents(props) {
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();
  const { upcomming, occurred } = useSelector(eventsStateSelector);

  const checkDate = () => {
    const today = new Date().toLocaleDateString();
    const lastShowAt = localStorage.getItem("levent");
    if (lastShowAt !== today) {
      setTimeout(() => {
        setShow(true);
        localStorage.setItem("levent", today);
      }, 5000);
    }
  };

  useEffect(() => {
    checkDate();
  }, []);

  useEffect(() => {
    if (show) {
      dispatch(getUpcommingEvents());
      Swiper.use([Navigation, Autoplay]);
    }
  }, [show]);

  const handleClose = () => {
    const today = new Date().toLocaleDateString();
    localStorage.setItem("levent", today);
    setShow(false);
  };

  useEffect(() => {
    if (upcomming.events.length) {
      const eventSwiper = new Swiper(".swiper-event", {
        loop: true,
        autoplay: {
          delay: 4000,
        },
        // Navigation arrows
        navigation: {
          prevEl: ".event-swiper-button-prev",
          nextEl: ".event-swiper-button-next",
        },
      });
    } else {
      setShow(false)
    }
  }, [upcomming.events]);

  return (
    <Portal>
      <style>
        {`
        .swiper-button-next:after, .swiper-container-rtl .swiper-button-prev:after {
          content: '';
      }
      .swiper-button-prev:after, .swiper-container-rtl .swiper-button-next:after {
        content: '';
    }
        `}
      </style>
      <div
        className="dialog-widget dialog-lightbox-widget dialog-type-buttons dialog-type-lightbox elementor-popup-modal"
        id="elementor-popup-modal-635"
        style={{ display: show ? "flex" : "none" }}
      >
        <div className="dialog-widget-content dialog-lightbox-widget-content animated">
          <div className="dialog-header dialog-lightbox-header"></div>
          <div className="dialog-message dialog-lightbox-message">
            <div
              data-elementor-type="popup"
              data-elementor-id="635"
              className="elementor elementor-635 elementor-location-popup"
              data-elementor-settings='{"entrance_animation":"slideInUp","close_button_position":"outside","entrance_animation_duration":{"unit":"px","size":1.2,"sizes":[]},"triggers":{"page_load_delay":10,"page_load":"yes"},"timing":[]}'
              style={{ display: show ? "block" : "none" }}
            >
              <div className="elementor-section-wrap">
                <section
                  data-particle_enable="false"
                  data-particle-mobile-disabled="false"
                  className="elementor-section elementor-top-section elementor-element elementor-element-0b3b94f elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                  data-id="0b3b94f"
                  data-element_type="section"
                >
                  <div className="elementor-container elementor-column-gap-default">
                    <div className="elementor-row">
                      <div
                        className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-d210544"
                        data-id="d210544"
                        data-element_type="column"
                      >
                        <div className="elementor-column-wrap elementor-element-populated">
                          <div className="elementor-widget-wrap">
                            <div
                              className="elementor-element elementor-element-ca4af82 elementor-widget elementor-widget-eael-post-carousel"
                              data-id="ca4af82"
                              data-element_type="widget"
                              data-widget_type="eael-post-carousel.default"
                            >
                              <div className="elementor-widget-container">
                                <div
                                  className="swiper-container-wrap eael-logo-carousel-wrap eael-post-grid-container eael-post-carousel-wrap eael-post-carousel-style-default"
                                  id="eael-post-grid-ca4af82"
                                >
                                  <div
                                    className="swiper-event swiper-container eael-post-carousel eael-post-grid swiper-container-ca4af82 eael-post-appender-ca4af82 swiper-container-initialized swiper-container-horizontal swiper-container-autoheight"
                                    // data-pagination=".swiper-pagination-ca4af82"
                                    // data-arrow-next=".swiper-button-next-ca4af82"
                                    // data-arrow-prev=".swiper-button-prev-ca4af82"
                                    // data-items="1"
                                    // data-items-tablet="1"
                                    // data-items-mobile="1"
                                    // data-margin="20"
                                    // data-effect="slide"
                                    // data-speed="400"
                                    // data-autoplay="4000"
                                    // data-pause-on-hover="true"
                                    // data-loop="1"
                                    // data-grab-cursor="1"
                                    // data-arrows="1"
                                    // style={{ cursor: "grab" }}
                                    // style="cursor: grab;"
                                  >
                                    <div className="swiper-wrapper">
                                      {upcomming.events.map((event) => {
                                        const {
                                          title,
                                          description,
                                          slug,
                                          image,
                                        } = event;
                                        return (
                                          <div className="swiper-slide">
                                            <article className="eael-grid-post eael-post-grid-column">
                                              <div className="eael-grid-post-holder">
                                                <div className="eael-grid-post-holder-inner">
                                                  <div className="eael-entry-media eael-entry-medianone">
                                                    <div className="eael-entry-thumbnail">
                                                      <img src={image} alt="" />
                                                      <Link
                                                        href="/su-kien/[slug].js"
                                                        as={`/su-kien/${slug}`}
                                                      >
                                                        <a></a>
                                                      </Link>
                                                    </div>
                                                  </div>
                                                  <div className="eael-entry-wrapper">
                                                    <header className="eael-entry-header">
                                                      <h2 className="eael-entry-title">
                                                        <Link
                                                          href="/su-kien/[slug].js"
                                                          as={`/su-kien/${slug}`}
                                                        >
                                                          <a
                                                            className="eael-grid-post-link"
                                                            title="Bài viết sự kiện sắp tới"
                                                          >
                                                            {title}
                                                          </a>
                                                        </Link>
                                                      </h2>
                                                    </header>
                                                  </div>
                                                  <div className="eael-entry-content">
                                                    <div className="eael-grid-post-excerpt">
                                                      <div className="eael-post-elements-readmore-wrap">
                                                        <Link
                                                          href="/su-kien/[slug].js"
                                                          as={`/su-kien/${slug}`}
                                                        >
                                                          <a className="eael-post-elements-readmore-btn"></a>
                                                        </Link>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                            </article>
                                          </div>
                                        );
                                      })}
                                    </div>
                                  </div>
                                  <div className="clearfix"></div>
                                  <div
                                    className="swiper-button-next swiper-button-next-ca4af82 event-swiper-button-next"
                                    tabindex="0"
                                    role="button"
                                    aria-label="Next slide"
                                  >
                                    <i className="fa fa-angle-right"></i>
                                  </div>
                                  <div
                                    className="swiper-button-prev swiper-button-prev-ca4af82 event-swiper-button-prev"
                                    tabindex="0"
                                    role="button"
                                    aria-label="Previous slide"
                                  >
                                    <i className="fa fa-angle-left"></i>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div
                              className="elementor-element elementor-element-eb5bb79 elementor-align-center elementor-widget elementor-widget-button"
                              data-id="eb5bb79"
                              data-element_type="widget"
                              data-widget_type="button.default"
                            >
                              <div className="elementor-widget-container">
                                <div className="elementor-button-wrapper">
                                  <Link href="/su-kien">
                                    <a
                                      className="elementor-button-link elementor-button elementor-size-xs"
                                      role="button"
                                    >
                                      <span className="elementor-button-content-wrapper">
                                        <span className="elementor-button-text">
                                          Tất cả sự kiện
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
          <div className="dialog-buttons-wrapper dialog-lightbox-buttons-wrapper"></div>
        </div>
        <div
          className="dialog-close-button dialog-lightbox-close-button"
          onClick={handleClose}
        >
          <i className="eicon-close"></i>
        </div>
      </div>
    </Portal>
  );
}

PopupEvents.propTypes = {};

export default PopupEvents;
