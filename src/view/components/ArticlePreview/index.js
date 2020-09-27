import { Link } from "gatsby";
import { useBreakpoint } from "gatsby-plugin-breakpoints";
import moment from "moment";
import PropTypes from "prop-types";
import React, { useState } from "react";

import withCursor from "../../../HOCs/withCursor";
import { compose } from "../../../utils/classNames";
import style from "./style.module.css";

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

  const breakpoint = useBreakpoint();

  return (
    <Link to={to}>
      <div
        onMouseEnter={() =>
          onCursor("articlePreviewPointer", { articleDate, articleTitle })
        }
        onMouseLeave={() => onCursor(false)}
        onClick={() => onCursor(false)}
        className={compose([
          style.container,
          "rounded-lg",
          "relative",
          "bg-transparent",
          "my-10",
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
            "duration-200",
            "group",
            "hover:bg-opacity-50",
          ])}
        ></div>
        <div
          style={{
            background: `url(${image})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center center",
          }}
          className={`
          duration-500
          rounded-lg
          ${isLandscape ? style.horizontal_content : style.vertical_content}
          ${isHover ? "translate-z-100" : "translate-z-0"}
          max-w-full
          `}
        >
          {breakpoint.hasCursor ? (
            <div className="absolute w-full bottom-0">
              <h3
                style={{ backdropFilter: "blur(5px)" }}
                className={compose([
                  "w-max-content",
                  "px-4",
                  "py-1",
                  "mx-auto",
                  "text-center",
                  "font-main",
                  "text-2xl",
                ])}
              >
                {articleTitle}
              </h3>
              <h4
                style={{ backdropFilter: "blur(5px)" }}
                className={compose([
                  "w-max-content",
                  "px-4",
                  "py-1",
                  "mx-auto",
                  "mb-2",
                  "text-center",
                  "font-second",
                  "text-xs",
                ])}
              >
                {moment(articleDate).format("DD-MM-YYYY")}
              </h4>
            </div>
          ) : null}
        </div>
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
