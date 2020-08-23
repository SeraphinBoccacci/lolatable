/* eslint-disable camelcase */
import PropTypes from "prop-types";
import React from "react";

const PrismicBlogPostBodyTexte = ({ slice, sliceIndex }) => (
  <div className="w-full overflow-x-scroll my-12 mx-auto">
    <div className="w-max-content mx-auto flex flex-row justify-evenly items-center">
      {slice.fields.map(({ image }, index) => (
        <img
          key={`${sliceIndex}-${index}`}
          className="w-96 shadow-xl rounded-lg mx-4 "
          src={image.url}
        ></img>
      ))}
    </div>
  </div>
);

PrismicBlogPostBodyTexte.propTypes = {
  slice: PropTypes.shape({
    id: PropTypes.string,
    fields: PropTypes.arrayOf(
      PropTypes.shape({
        image: PropTypes.shape({
          url: PropTypes.string,
        }),
      })
    ),
  }),
  sliceIndex: PropTypes.number,
};

export default PrismicBlogPostBodyTexte;
