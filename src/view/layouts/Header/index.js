/* eslint-disable react/no-unescaped-entities */
import { Link } from "gatsby";
import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";

import Logo from "../../../images/logo.js";
import Menu from "./Menu";
import { RightNode } from "./RightNode";
import style from "./style.module.css";

const Header = (props) => {
  const { headerHeight: headerheight } = props;
  const [hasLogo, setHasLogo] = useState(false);

  useEffect(() => setHasLogo(window.innerWidth > 450));

  return (
    <header className={style.container}>
      <div
        className="absolute left-0 w-full bg-primary bottom-0"
        style={{ height: headerheight, zIndex: -1, transition: "0.3s" }}
      ></div>
      <Menu></Menu>
      <div className="my-auto">
        <h1 style={{ margin: 0 }}>
          <Link
            to="/"
            className="font-main text-soft_black no-underline text-3xl"
          >
            <div className="flex flex-row">
              {hasLogo ? <Logo></Logo> : null}
              <h1 className={style.mainTitle}>Lol'à Table</h1>
            </div>
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
