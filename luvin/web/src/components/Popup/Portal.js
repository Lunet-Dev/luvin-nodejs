import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

function Portal({ children }) {
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted || !document.getElementById("lv-popup")) return null;
  return ReactDOM.createPortal(children, document.getElementById("lv-popup"));
}

Portal.propTypes = {};

export default Portal;
