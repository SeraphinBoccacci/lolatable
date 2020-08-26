import PropTypes from "prop-types";
import React, { useState } from "react";

import withCursor from "../../../HOCs/withCursor";
import { compose } from "../../../utils/classNames";

const ArticlePreview = (props) => {
  const {
    image,
    articleTitle,
    articleDate,
    index,
    context: { onCursor },
  } = props;

  const [isHover, setIsHover] = useState(false);

  return (
    <>
      <div
        onMouseEnter={() =>
          onCursor("articlePreviewPointer", { articleDate, articleTitle })
        }
        onMouseLeave={() => onCursor(false)}
        onClick={() => onCursor(false)}
        className={compose([
          "rounded-lg",
          "relative",
          "bg-transparent",
          "w-64",
          "h-max-content",
          "mx-4 my-4",
          "overflow-hidden",
          "shadow-xl",
        ])}
        key={`article-preview-${index}`}
      >
        <div
          onMouseEnter={() => setIsHover(true)}
          onMouseLeave={() => setIsHover(false)}
          className={compose([
            "absolute",
            "w-full",
            "h-full",
            "z-10",
            "bg-white",
            "bg-opacity-0",
            "hover:bg-opacity-50",
            "duration-200",
            "group",
          ])}
        ></div>
        <img
          className={compose([
            "w-full",
            "duration-500",
            "rounded-lg",
            isHover ? "translate-z-100" : "translate-z-0",
          ])}
          src={image}
        ></img>
      </div>
    </>
  );
};

ArticlePreview.propTypes = {
  image: PropTypes.string,
  articleTitle: PropTypes.string,
  articleDate: PropTypes.string,
  context: PropTypes.shape({ onCursor: PropTypes.fund }),
  index: PropTypes.number,
};

export default withCursor(ArticlePreview);
