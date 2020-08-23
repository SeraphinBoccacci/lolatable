/* eslint-disable camelcase */
import { RichText } from "prismic-reactjs";
import PropTypes from "prop-types";
import React from "react";

import { compose } from "../../../utils/classNames";
import htmlSerializer from "../../../utils/htmlSerializer";

const alignMapper = {
  image_on_right: "flex-row-reverse",
  image_on_left: "flex-row",
};

const PrismicBlogPostBodyTexteIllustre = ({ slice, sliceIndex }) => {
  return (
    <div
      className={compose([
        "my-8 flex justify-evenly items-center ",
        alignMapper[slice.label] || "flex-row",
      ])}
    >
      <img
        className="w-96 shadow-xl rounded-lg"
        src={slice.primary.illustration.url}
      ></img>
      <div className="w-112">
        {slice.fields.map(({ text_field }, index) => (
          <div key={`${sliceIndex}-${index}`}>
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
