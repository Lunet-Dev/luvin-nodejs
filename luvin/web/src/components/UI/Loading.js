import React, { useEffect } from "react";
import PropTypes from "prop-types";

function Loading(props) {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    // document.body.style.position = "relative";
    return () => {
      document.body.style.overflow = "";
      // document.body.style.position = "";
    };
  }, []);
  return (
    <div className="custom-loading">
      <img src="/images/arrows.png" alt="loading" />
    </div>
  );
}

Loading.propTypes = {};

export default Loading;
