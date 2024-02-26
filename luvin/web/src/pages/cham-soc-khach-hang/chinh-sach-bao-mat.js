import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { useSelector, useDispatch } from "react-redux";

import Content from "../../components/Layout/Content";

import { getPage, resetState } from "../../actions/page";

const pageStateSelector = (state) => state.page;
function Ship(props) {
  const dispatch = useDispatch();
  const { pageContent, loading, fetched, errorMessage } = useSelector(
    pageStateSelector
  );

  useEffect(() => {
    dispatch(getPage("privacy-policy"));
  }, []);
  return (
    <Content className="privacy-policy page-template-default page page-id-3 page-child parent-pageid-41 wp-custom-logo theme-hello-elementor woocommerce-no-js elementor-default elementor-kit-76">
      <main
        className="site-main post-48 page type-page status-publish hentry"
        role="main"
      >
        <header className="page-header">
          <h1 className="entry-title">Chính sách giao nhận</h1>{" "}
        </header>
        <div
          className="page-content"
          dangerouslySetInnerHTML={{
            __html: pageContent,
          }}
        ></div>
      </main>
    </Content>
  );
}

// Ship.getInitialProps = async (props) => {
//   const { store, req, accessToken, query } = props.ctx;
//   if (!!req) {
//     store.dispatch(getPage("privacy-policy"));
//   }
//   return {};
// };

export default Ship;
