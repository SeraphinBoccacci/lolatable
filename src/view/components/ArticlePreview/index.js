import { Link } from "gatsby";
import PropTypes from "prop-types";
import React, { useState } from "react";

import withCursor from "../../../HOCs/withCursor";
import { compose } from "../../../utils/classNames";

const ArticlePreview = (props) => {
  const {
    to,
    image,
    articleTitle,
    articleDate,
    index,
    isLandscape,
    context: { onCursor },
  } = props;

  const [isHover, setIsHover] = useState(false);

  return (
    <Link to={to}>
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
          "m-10",
          "overflow-hidden",
          "shadow-xl",
          "w-max-content",
          "h-max-content",
          "max-w-full",
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
            "duration-500",
            "rounded-lg",
            isLandscape ? "h-48 md:h-64" : "w-48 md:w-64",
            isHover ? "translate-z-100" : "translate-z-0",
            "max-w-full",
          ])}
          src={image}
        ></img>
      </div>
    </Link>
  );
};

ArticlePreview.propTypes = {
  to: PropTypes.string.isRequired,
  image: PropTypes.string,
  articleTitle: PropTypes.string,
  articleDate: PropTypes.string,
  context: PropTypes.shape({ onCursor: PropTypes.fund }),
  index: PropTypes.number,
  isLandscape: PropTypes.bool,
};

export default withCursor(ArticlePreview);
