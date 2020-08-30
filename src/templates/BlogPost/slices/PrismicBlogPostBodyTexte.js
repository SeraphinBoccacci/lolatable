/* eslint-disable camelcase */
import { RichText } from "prismic-reactjs";
import PropTypes from "prop-types";
import React from "react";

import htmlSerializer from "../../../utils/htmlSerializer";

const PrismicBlogPostBodyTexte = ({ slice, sliceIndex }) => (
  <div
    className={`
  w-144 
  max-w-full 
  my-12 
  mx-auto
  `}
  >
    {slice.fields.map(({ text_field }, index) => (
      <div key={`${sliceIndex}-${index}`} className="my-8">
        <RichText
          render={text_field}
          htmlSerializer={htmlSerializer}
        ></RichText>
      </div>
    ))}
  </div>
);

PrismicBlogPostBodyTexte.propTypes = {
  slice: PropTypes.shape({
    id: PropTypes.string,
    fields: PropTypes.arrayOf(
      PropTypes.shape({
        text_field: PropTypes.array,
      })
    ),
  }),
  sliceIndex: PropTypes.number,
};

export default PrismicBlogPostBodyTexte;
