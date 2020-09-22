import React from "react";

import { SocialNetwork } from "../../../../components/SocialNetwork";
import style from "./style.module.css";

export const SocialNetworks = () => {
  return (
    <div className={style.social}>
      {/* Actually disable because those two medias has not an account for LolaTable */}
      {/* <SocialNetwork type="facebook"></SocialNetwork> */}
      <SocialNetwork
        type="instagram"
        socialLink="https://www.instagram.com/lolatable.fr/"
      ></SocialNetwork>
      {/* <SocialNetwork type="twitter"></SocialNetwork> */}
      <SocialNetwork
        type="linkedin"
        socialLink="https://www.linkedin.com/in/lola-beyrieux-515941125/"
      ></SocialNetwork>
    </div>
  );
};
