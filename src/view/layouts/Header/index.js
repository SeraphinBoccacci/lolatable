/* eslint-disable react/no-unescaped-entities */
import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";

import Menu from "./Menu";
import { RightNode } from "./RightNode";
import style from "./style.module.css";

const Header = ({ headerHeight: headerheight }) => {
  return (
    <header className={style.container}>
      <div
        className="absolute left-0 w-full bg-primary bottom-0"
        style={{ height: headerheight, zIndex: -1, transition: "0.3s" }}
      ></div>
      <Menu></Menu>
      <div className="py-4 px-4 m-0 ">
        <h1 style={{ margin: 0 }}>
          <Link
            to="/"
            className="font-main text-soft_black no-underline text-3xl"
          >
            Lol'à Table
          </Link>
        </h1>
      </div>
      <RightNode></RightNode>
    </header>
  );
};

Header.propTypes = {
  headerHeight: PropTypes.number,
};

export default Header;
