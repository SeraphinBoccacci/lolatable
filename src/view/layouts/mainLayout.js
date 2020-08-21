import PropTypes from "prop-types";
import React from "react";

import Header from "./Header";

const Layout = ({ children, headerHeight }) => {
  return (
    <div className="fixed top-0 left-0 w-screen h-screen flex flex-col">
      <Header headerHeight={headerHeight} />
      <div
        style={{
          padding: "90px 0 1.45rem",
        }}
      >
        {children}
      </div>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  headerHeight: PropTypes.number,
};

export default Layout;
