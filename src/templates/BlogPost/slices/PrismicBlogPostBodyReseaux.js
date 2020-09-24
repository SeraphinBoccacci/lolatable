/* eslint-disable camelcase */
import PropTypes from "prop-types";
import React from "react";

import style from "./style.module.css";

const PrismicBlogPostBodyReseaux = ({ slice, sliceIndex }) => {
  const { primary } = slice;
  return primary?.media?.embed_url ? (
    <div
      className={`
  w-144 
  max-w-full 
  my-12 
  mx-auto
  `}
    >
      <hr className="my-8"></hr>
      <p className={style.siteLinkCaption}>{primary.caption}</p>
      <a className={style.siteLink} href={primary.media.embed_url}>
        {primary.media.embed_url}
      </a>
      <hr className="my-8"></hr>
    </div>
  ) : null;
};

PrismicBlogPostBodyReseaux.propTypes = {
  slice: PropTypes.shape({
    primary: PropTypes.shape({
      caption: PropTypes.string,
      media: PropTypes.shape({ embed_url: PropTypes.string }),
    }),
  }),
  sliceIndex: PropTypes.number,
};

export default PrismicBlogPostBodyReseaux;
