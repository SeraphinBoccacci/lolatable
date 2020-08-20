import { useBreakpoint } from "gatsby-plugin-breakpoints";
import PropTypes from "prop-types";
import React from "react";

import MenuSVG from "../../../../images/SVGs/menu";
import { compose } from "../../../../utils/classNames";
import style from "./style.module.css";

const MenuButton = ({ setIsMenuOpenned, isMenuOpenned }) => {
  const breakpoint = useBreakpoint();

  return breakpoint.sm ? (
    <div className={style.menu}>
      <MenuSVG onClick={() => setIsMenuOpenned(true)}></MenuSVG>
    </div>
  ) : (
    <button
      className={compose([style.menu, style.menuBig])}
      onClick={() => setIsMenuOpenned(!isMenuOpenned)}
    >
      Menu
    </button>
  );
};

MenuButton.propTypes = {
  setIsMenuOpenned: PropTypes.func,
  isMenuOpenned: PropTypes.bool,
};

export default MenuButton;
