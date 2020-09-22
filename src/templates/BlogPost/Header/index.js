import moment from "moment";
import PropTypes from "prop-types";
import React from "react";

import style from "./style.module.css";
const Header = ({ articleTitle, imageSrc, articleDate }) => {
  moment.locale("fr");

  return (
    <header
      className={`
    sm:h-max-content 
    sm:w-max-content 
    max-w-height-screen
    mx-auto 
    overflow-hidden 
    my-8
    `}
    >
      <h1
        className={`
        ${style.title} 
        font-second 
        my-8 
        px-8 
        text-2xl
        sm:text-4xl 
        w-max-content`}
      >
        {articleTitle}
      </h1>
      <img
        className={`
      w-4/5
      sm:w-auto
      h-auto
      sm:h-144
      mx-auto`}
        src={imageSrc}
      ></img>
      <div
        className={`
      w-max-content
      mx-12
      sm:mx-4
      my-8
      `}
      >
        <div
          className={`
        font-main
        text-lg
        sm:text-xl
        mx-2
        `}
        >
          écrit par Lola Beyrieux,
        </div>
        <div
          className={`
        font-third
        text-sm
        sm:text-base
        my-2
        `}
        >{`le ${moment(articleDate).format("dddd D MMMM YYYY")}`}</div>
      </div>
    </header>
  );
};

Header.propTypes = {
  articleTitle: PropTypes.string,
  imageSrc: PropTypes.string,
  articleDate: PropTypes.string,
};

export default Header;
