import PropTypes from "prop-types";
import React from "react";

import { compose } from "../../../utils/classNames";
import { SocialNetwork } from "../SocialNetwork";
import style from "./style.module.css";

const ShareButton = ({ shareUrl }) => {
  return (
    <div className={compose([style.btn_share])}>
      <span className={style.btn_text}>Share</span>
      <span className={style.btn_icon}>
        <svg
          t="1580465783605"
          viewBox="0 0 1024 1024"
          p-id="9773"
          width="18"
          height="18"
        >
          <path
            d="M767.99994 585.142857q75.995429 0 129.462857 53.394286t53.394286 129.462857-53.394286 129.462857-129.462857 53.394286-129.462857-53.394286-53.394286-129.462857q0-6.875429 1.170286-19.456l-205.677714-102.838857q-52.589714 49.152-124.562286 49.152-75.995429 0-129.462857-53.394286t-53.394286-129.462857 53.394286-129.462857 129.462857-53.394286q71.972571 0 124.562286 49.152l205.677714-102.838857q-1.170286-12.580571-1.170286-19.456 0-75.995429 53.394286-129.462857t129.462857-53.394286 129.462857 53.394286 53.394286 129.462857-53.394286 129.462857-129.462857 53.394286q-71.972571 0-124.562286-49.152l-205.677714 102.838857q1.170286 12.580571 1.170286 19.456t-1.170286 19.456l205.677714 102.838857q52.589714-49.152 124.562286-49.152z"
            p-id="9774"
            fill="#ffffff"
          ></path>
        </svg>
      </span>
      <ul className={compose([style.social_icons])}>
        <li>
          <SocialNetwork shareUrl={shareUrl} type="facebook"></SocialNetwork>
        </li>
        <li>
          <SocialNetwork shareUrl={shareUrl} type="twitter"></SocialNetwork>
        </li>
        <li>
          <SocialNetwork shareUrl={shareUrl} type="instagram"></SocialNetwork>
        </li>
        <li>
          <SocialNetwork shareUrl={shareUrl} type="linkedin"></SocialNetwork>
        </li>
      </ul>
    </div>
  );
};

ShareButton.defaultProps = {
  shareUrl: "https://lolatable.fr",
};

ShareButton.propTypes = {
  shareUrl: PropTypes.string,
};

export default ShareButton;
