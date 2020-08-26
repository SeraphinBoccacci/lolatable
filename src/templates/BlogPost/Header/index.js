import moment from "moment";
import PropTypes from "prop-types";
import React from "react";

import style from "./style.module.css";
const Header = ({ articleTitle, imageSrc, articleDate }) => {
  moment.locale("fr");

  return (
    <header className="h-max-content w-max-content max-w-screen mx-auto overflow-hidden my-8">
      <h1 className={style.title}>{articleTitle}</h1>
      <img className="h-144 mx-auto" src={imageSrc}></img>
      <div className="w-max-content mx-4 my-8">
        <div className="font-main text-xl mx-2">écrit par Lola Beyrieux,</div>
        <div className="font-third text-m my-2">{`le ${moment(
          articleDate
        ).format("dddd D MMMM YYYY")}`}</div>
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
