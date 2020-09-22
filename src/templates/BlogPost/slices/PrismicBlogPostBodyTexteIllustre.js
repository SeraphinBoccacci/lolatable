/* eslint-disable camelcase */
import { RichText } from "prismic-reactjs";
import PropTypes from "prop-types";
import React from "react";

import htmlSerializer from "../../../utils/htmlSerializer";
import style from "./style.module.css";

const alignMapper = {
  image_on_right: style.right_alignment,
  image_on_left: style.left_alignment,
};

const PrismicBlogPostBodyTexteIllustre = ({ slice, sliceIndex }) => {
  return (
    <div
      className={`
        my-16
        sm:my-8
        max-w-full 
        h-max-content
        flex 
        justify-evenly 
        items-center
        ${alignMapper[slice.label] || style.left_alignment}
        `}
    >
      <img
        className={`
        w-96
        max-w-full
        shadow-xl
        rounded-lg
        `}
        src={slice.primary.illustration.url}
      ></img>
      <div
        className={`
      w-112
      max-w-full
      my-4
      `}
      >
        {slice.fields.map(({ text_field }, index) => (
          <div key={`PrismicBlogPostBodyTexteIllustre-${sliceIndex}-${index}`}>
            <RichText
              render={text_field}
              htmlSerializer={htmlSerializer}
            ></RichText>
          </div>
        ))}
      </div>
    </div>
  );
};

PrismicBlogPostBodyTexteIllustre.propTypes = {
  slice: PropTypes.shape({
    id: PropTypes.string,
    label: PropTypes.string,
    fields: PropTypes.arrayOf(
      PropTypes.shape({
        text_field: PropTypes.array,
      })
    ),
    primary: PropTypes.shape({
      illustration: PropTypes.shape({ url: PropTypes.string }),
    }),
  }),
  sliceIndex: PropTypes.number,
};

export default PrismicBlogPostBodyTexteIllustre;
