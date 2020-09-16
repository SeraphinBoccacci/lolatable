/* eslint-disable camelcase */
import PropTypes from "prop-types";
import React, { useEffect, useRef, useState } from "react";

import { compose } from "../../../utils/classNames";
import style from "./style.module.css";

const PrismicBlogPostBodyTexte = ({ slice, sliceIndex }) => {
  const [hasArrows, setHasArrows] = useState(false);
  const container = useRef();
  const content = useRef();

  useEffect(() => {
    setHasArrows(container.current.offsetWidth < content.current.offsetWidth);
  });

  return (
    <div
      className={compose([
        style.imagesGallery,
        hasArrows ? style.galleryWithArrows : "",
      ])}
    >
      <div
        ref={container}
        className={`
w-full
max-w-full
overflow-x-scroll
my-12
`}
      >
        <div
          ref={content}
          className={`
  w-max-content
  mx-auto
  flex
  flex-row
  justify-evenly
  items-center
  `}
        >
          {slice.fields.map(({ image }, index) => (
            <img
              key={`${sliceIndex}-${index}`}
              className={`
        w-96 
        shadow-xl 
        rounded-lg
        mx-4
        `}
              src={image.url}
            ></img>
          ))}
        </div>
      </div>
    </div>
  );
};

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
