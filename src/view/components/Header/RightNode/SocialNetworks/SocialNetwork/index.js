/* eslint-disable camelcase */
import React from "react";
import style from "./style.module.css";

export const SocialNetwork = (props) => {
  // eslint-disable-next-line react/prop-types
  const { type } = props;

  const icon_fa = {
    facebook: " fa-facebook",
    twitter: "fa-twitter",
    instagram: "fa-instagram",
    linkedin: "fa-linkedin",
  }[type];

  return (
    <a href="#" className={style.social_link + " " + style[type]}>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span className={`fa ${icon_fa}`} aria-hidden="true"></span>
    </a>
  );
};
