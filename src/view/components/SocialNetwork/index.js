/* eslint-disable camelcase */
import PropTypes from "prop-types";
import React from "react";
import {
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  WhatsappShareButton,
} from "react-share";

import { compose } from "../../../utils/classNames";
import style from "./style.module.css";

export const SocialNetwork = (props) => {
  const { type, socialLink, shareUrl } = props;

  const icon_fa = {
    facebook: "fa-facebook",
    twitter: "fa-twitter",
    instagram: "fa-instagram",
    linkedin: "fa-linkedin",
  }[type];

  const SocialShareButton = {
    facebook: FacebookShareButton,
    twitter: TwitterShareButton,
    instagram: WhatsappShareButton,
    linkedin: LinkedinShareButton,
  }[type];

  return shareUrl ? (
    <SocialShareButton
      className={compose([style.social_link, style[type]])}
      url={shareUrl}
    >
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span className={`fa ${icon_fa}`} aria-hidden="true"></span>
    </SocialShareButton>
  ) : (
    <a href={socialLink} className={compose([style.social_link, style[type]])}>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span className={`fa ${icon_fa}`} aria-hidden="true"></span>
    </a>
  );
};

SocialNetwork.defaultProps = {
  socialLink: "https://lolatable.fr",
};

SocialNetwork.propTypes = {
  type: PropTypes.string,
  breakpoint: PropTypes.object,
  socialLink: PropTypes.string,
  shareUrl: PropTypes.string,
};
