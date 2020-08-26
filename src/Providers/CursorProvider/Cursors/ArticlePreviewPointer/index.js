import moment from "moment";
import PropTypes from "prop-types";
import React from "react";

import { compose } from "../../../../utils/classNames";

const ArticlePreviewPointer = (props) => {
  const { articleTitle, articleDate } = props;

  return (
    <div className="w-64 flex-no-wrap">
      <h3 className={compose(["text-center", "font-main", "text-2xl"])}>
        {articleTitle}
      </h3>
      <h4 className={compose(["text-center", "font-second", "text-xs"])}>
        {moment(articleDate).format("DD-MM-YYYY")}
      </h4>
    </div>
  );
};

ArticlePreviewPointer.propTypes = {
  articleTitle: PropTypes.string,
  articleDate: PropTypes.string,
};

export default ArticlePreviewPointer;
