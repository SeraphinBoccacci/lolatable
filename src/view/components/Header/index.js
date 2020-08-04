import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import Menu from "./Menu";
import { RightNode } from "./RightNode";
import { compose } from "../../../utils/classNames";

const Header = ({ siteTitle, headerHeight }) => {
  return (
    <header
      className={compose([
        "fixed",
        "z-20",
        "w-screen",
        "h-header",
        "flex",
        "flex-row",
        "justify-between",
        "px-6",
      ])}
    >
      <div
        className="absolute left-0 w-full bg-primary bottom-0"
        style={{ height: headerHeight, zIndex: -1, transition: "0.3s" }}
      ></div>
      <Menu></Menu>
      <div className="py-4 px-4 m-0 ">
        <h1 style={{ margin: 0 }}>
          <Link
            to="/"
            className="font-main text-soft_black no-underline text-3xl"
          >
            {siteTitle}
          </Link>
        </h1>
      </div>
      <RightNode></RightNode>
    </header>
  );
};

Header.propTypes = {
  siteTitle: PropTypes.string,
  headerHeight: PropTypes.number,
};

Header.defaultProps = {
  siteTitle: "",
};

export default Header;
