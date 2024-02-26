import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Cookie from "js-cookie";
import Link from "next/link";

import Portal from "./Portal";

function PopupAgeConfirm(props) {
  const [show, setShow] = useState(false);
  const handleClose = () => {
    Cookie.set("lvage", "over18", { expires: 30 });
    setShow(false);
  };

  const checkAge = () => {
    const age = Cookie.get("lvage");
    if (!age || age !== "over18") {
      setTimeout(() => {
        setShow(true);
      }, 4000);
    }
  };

  useEffect(() => {
    checkAge();
  }, []);

  return (
    <Portal>
      <div
        className="dialog-widget dialog-lightbox-widget dialog-type-buttons dialog-type-lightbox elementor-popup-modal"
        id="elementor-popup-modal-575"
        style={{ display: show ? "flex" : "none" }}
      >
        <div className="dialog-widget-content dialog-lightbox-widget-content animated">
          <div className="dialog-header dialog-lightbox-header"></div>
          <div className="dialog-message dialog-lightbox-message">
            <div
              className="elementor elementor-575 elementor-location-popup"
              style={{ display: show ? "block" : "none" }}
            >
              <div className="elementor-section-wrap">
                <section
                  data-particle_enable="false"
                  data-particle-mobile-disabled="false"
                  className="elementor-section elementor-top-section elementor-element elementor-element-a0ec87f elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                  data-id="a0ec87f"
                  data-element_type="section"
                >
                  <div className="elementor-container elementor-column-gap-default">
                    <div className="elementor-row">
                      <div
                        className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-4a727f6"
                        data-id="4a727f6"
                        data-element_type="column"
                      >
                        <div className="elementor-column-wrap elementor-element-populated">
                          <div className="elementor-widget-wrap">
                            <div
                              className="elementor-element elementor-element-7e33cd2 elementor-widget elementor-widget-image"
                              data-id="7e33cd2"
                              data-element_type="widget"
                              data-widget_type="image.default"
                            >
                              <div className="elementor-widget-container">
                                <div className="elementor-image">
                                  <img
                                    src="images/logo2001.png"
                                    title="logo200"
                                    alt="logo200"
                                  />{" "}
                                </div>
                              </div>
                            </div>
                            <div
                              className="elementor-element elementor-element-2fb750c elementor-widget elementor-widget-heading"
                              data-id="2fb750c"
                              data-element_type="widget"
                              data-widget_type="heading.default"
                            >
                              <div className="elementor-widget-container">
                                <h5 className="elementor-heading-title elementor-size-default">
                                  Luvin chào mừng bạn!
                                </h5>{" "}
                              </div>
                            </div>
                            <div
                              className="elementor-element elementor-element-ff972bc elementor-widget elementor-widget-heading"
                              data-id="ff972bc"
                              data-element_type="widget"
                              data-widget_type="heading.default"
                            >
                              <div className="elementor-widget-container">
                                <p className="elementor-heading-title elementor-size-default">
                                  Vui lòng xác nhận độ tuổi
                                </p>{" "}
                              </div>
                            </div>
                            <section
                              data-particle_enable="false"
                              data-particle-mobile-disabled="false"
                              className="elementor-section elementor-inner-section elementor-element elementor-element-6e4e897 elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                              data-id="6e4e897"
                              data-element_type="section"
                            >
                              <div className="elementor-container elementor-column-gap-default">
                                <div className="elementor-row">
                                  <div
                                    className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-64ad8be"
                                    data-id="64ad8be"
                                    data-element_type="column"
                                  >
                                    <div className="elementor-column-wrap elementor-element-populated">
                                      <div className="elementor-widget-wrap">
                                        <div
                                          className="elementor-element elementor-element-f5a567e elementor-align-justify elementor-widget elementor-widget-button"
                                          data-id="f5a567e"
                                          data-element_type="widget"
                                          data-widget_type="button.default"
                                        >
                                          <div className="elementor-widget-container">
                                            <div className="elementor-button-wrapper">
                                              <a
                                                className="elementor-button-link elementor-button elementor-size-sm"
                                                role="button"
                                                onClick={handleClose}
                                              >
                                                <span className="elementor-button-content-wrapper">
                                                  <span className="elementor-button-text">
                                                    Tôi trên 18 tuổi
                                                  </span>
                                                </span>
                                              </a>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div
                                    className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-659332d"
                                    data-id="659332d"
                                    data-element_type="column"
                                  >
                                    <div className="elementor-column-wrap elementor-element-populated">
                                      <div className="elementor-widget-wrap">
                                        <div
                                          className="elementor-element elementor-element-ecf7768 elementor-align-justify elementor-widget elementor-widget-button"
                                          data-id="ecf7768"
                                          data-element_type="widget"
                                          data-widget_type="button.default"
                                        >
                                          <div className="elementor-widget-container">
                                            <div className="elementor-button-wrapper">
                                              <Link href="/tre-vi-thanh-nien">
                                                <a
                                                  className="elementor-button-link elementor-button elementor-size-sm"
                                                  role="button"
                                                >
                                                  <span className="elementor-button-content-wrapper">
                                                    <span className="elementor-button-text">
                                                      Tôi dưới 18 tuổi
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
                  </div>
                </section>
              </div>
            </div>
          </div>
          <div className="dialog-buttons-wrapper dialog-lightbox-buttons-wrapper"></div>
          <div className="dialog-close-button dialog-lightbox-close-button">
            <i className="eicon-close"></i>
          </div>
        </div>
      </div>
    </Portal>
  );
}

PopupAgeConfirm.propTypes = {};

export default PopupAgeConfirm;
