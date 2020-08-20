import PropTypes from "prop-types";
import React from "react";

import style from "./style.module.css";

const Header = ({ articleTitle, imageSrc, articleDate }) => (
  <header className="h-max-content w-max-content max-w-screen mx-auto overflow-hidden my-8">
    <h1 className={style.title}>{articleTitle}</h1>
    <img className="h-144 mx-auto" src={imageSrc}></img>
    <div className="w-max-content mx-4 my-8">
      <span className="font-main text-xl mx-2">By Lola Beyrieux,</span>
      <span className="font-third text-m">{`le ${articleDate}`}</span>
    </div>
  </header>
);

Header.propTypes = {
  articleTitle: PropTypes.string,
  imageSrc: PropTypes.string,
  articleDate: PropTypes.string,
};

export default Header;
