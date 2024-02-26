import React, { useMemo, useEffect } from "react";
import PropTypes from "prop-types";
import { useSelector, useDispatch } from "react-redux";
import Head from "next/head";

import Content from "../../components/Layout/Content";
import Loading from "../../components/UI/Loading";

import { getFaq, resetState } from "../../actions/faq";

const faqStateSelector = (state) => state.faq;
function DetailFaq({ faqSlug }) {
  const dispatch = useDispatch();
  const { post = {}, loading, fetched, errorMessage } = useSelector(
    faqStateSelector
  );

  const { title, content, slug, type, image, video } = useMemo(() => post, [
    post,
  ]);

  useEffect(() => {
    if (!post._id) {
      dispatch(getFaq(faqSlug));
    }
    return () => {
      dispatch(resetState());
    };
  }, []);

  return (
    <Content className="post-template-default single single-post postid-603 single-format-standard wp-custom-logo theme-hello-elementor woocommerce-js elementor-default elementor-kit-76 elementor-page-592">
      <Head>
        <title>{title} - Luvin</title>
        <meta
          name="description"
          content="Tất cả các sản phẩm rượu vang được lên men tự nhiên và có nồng độ cồn dưới 15 độ"
        />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={`${title} - Luvin`} />
        <meta property="og:url" content="https://luvin.com.vn" />
        <meta property="og:site_name" content="Luvin" />
        <meta property="og:image" content={image} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
      </Head>
      {loading && <Loading />}
      <div className="elementor elementor-592 elementor-location-single post-603 post type-post status-publish format-standard has-post-thumbnail hentry category-su-kien">
        <div className="elementor-section-wrap">
          <section className="elementor-section elementor-top-section elementor-element elementor-element-a974a59 elementor-section-boxed elementor-section-height-default elementor-section-height-default">
            <div className="elementor-container elementor-column-gap-default">
              <div className="elementor-row">
                <div className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-c5d87eb">
                  <div className="elementor-column-wrap elementor-element-populated">
                    <div className="elementor-widget-wrap">
                      <div
                        className="elementor-element elementor-element-73c18c3 elementor-widget elementor-widget-theme-post-title elementor-page-title elementor-widget-heading"
                        style={{ display: "block" }}
                      >
                        <div className="elementor-widget-container">
                          <h1 className="elementor-heading-title elementor-size-default">
                            {title}
                          </h1>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="elementor-section elementor-top-section elementor-element elementor-element-dfa280d elementor-section-boxed elementor-section-height-default elementor-section-height-default">
            <div className="elementor-container elementor-column-gap-default">
              <div className="elementor-row">
                <div className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-b0a1783">
                  <div className="elementor-column-wrap elementor-element-populated">
                    <div className="elementor-widget-wrap">
                      <div className="elementor-element elementor-element-61a23a1 elementor-widget elementor-widget-theme-post-content">
                        <div
                          className="elementor-widget-container"
                          dangerouslySetInnerHTML={{
                            __html: content,
                          }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="elementor-section elementor-top-section elementor-element elementor-element-4d0c553 elementor-section-boxed elementor-section-height-default elementor-section-height-default">
            <div className="elementor-container elementor-column-gap-default">
              <div className="elementor-row">
                <div className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-8445a15">
                  <div className="elementor-column-wrap elementor-element-populated">
                    <div className="elementor-widget-wrap">
                      <div className="elementor-element elementor-element-f2be387 elementor-share-buttons--skin-framed elementor-share-buttons--shape-circle elementor-share-buttons--align-center elementor-share-buttons--view-icon-text elementor-grid-0 elementor-share-buttons--color-official elementor-widget elementor-widget-share-buttons">
                        <div className="elementor-widget-container">
                          <div className="elementor-grid">
                            <div className="elementor-grid-item">
                              <div className="elementor-share-btn elementor-share-btn_facebook">
                                <span className="elementor-share-btn__icon">
                                  <i
                                    className="fab fa-facebook"
                                    aria-hidden="true"
                                  ></i>
                                  <span className="elementor-screen-only">
                                    Share on facebook
                                  </span>
                                </span>
                                <div className="elementor-share-btn__text">
                                  <span className="elementor-share-btn__title">
                                    Facebook
                                  </span>
                                </div>
                              </div>
                            </div>
                            <div className="elementor-grid-item">
                              <div className="elementor-share-btn elementor-share-btn_twitter">
                                <span className="elementor-share-btn__icon">
                                  <i
                                    className="fab fa-twitter"
                                    aria-hidden="true"
                                  ></i>
                                  <span className="elementor-screen-only">
                                    Share on twitter
                                  </span>
                                </span>
                                <div className="elementor-share-btn__text">
                                  <span className="elementor-share-btn__title">
                                    Twitter
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
            </div>
          </section>
        </div>
      </div>
    </Content>
  );
}

DetailFaq.propTypes = {};

DetailFaq.getInitialProps = async (props) => {
  const { store, req, accessToken, query } = props.ctx;
  const { slug: faqSlug } = query;
  if (!!req) {
    store.dispatch(getFaq(faqSlug));
  }
  return { faqSlug };
};

export default DetailFaq;
