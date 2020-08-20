import React from "react";

import { SocialNetwork } from "../../../../components/SocialNetwork";
import style from "./style.module.css";

export const SocialNetworks = () => {
  return (
    <div className={style.social}>
      <SocialNetwork type="facebook"></SocialNetwork>
      <SocialNetwork type="instagram"></SocialNetwork>
      <SocialNetwork type="twitter"></SocialNetwork>
      <SocialNetwork type="linkedin"></SocialNetwork>
    </div>
  );
};
