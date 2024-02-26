import React, { useEffect } from "react";

import Header from "./Header";
import Footer from "./Footer";

const Content = ({ children, className, withoutHeaderFooter }) => {
  useEffect(() => {
    const targetElm = document.body;
    targetElm.className = className || "";
  }, []);

  return (
    <>
      {!withoutHeaderFooter && <Header />}
      {children}
      {!withoutHeaderFooter && <Footer />}
    </>
  );
};

export default Content;
