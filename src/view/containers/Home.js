import PropTypes from "prop-types";
import React, { useRef, useState } from "react";

import { compose } from "../../utils/classNames";
import ArticlePreview from "../components/ArticlePreview";
import SEO from "../components/seo";
import Layout from "../layouts/mainLayout";
import style from "./style.module.css";

const HomeTemplate = (props) => {
  const { data } = props;

  const currentScrolledHeight = useRef(0);
  const componentRef = React.createRef();
  const [headerHeight, setHeaderHeight] = useState(200);

  const handleScroll = () => {
    const scrolled = componentRef?.current?.scrollTop || 0;

    if (scrolled < 50) {
      const currentHeaderHeight = 100 - scrolled * 2;
      setHeaderHeight(currentHeaderHeight);
    } else if (headerHeight) {
      setHeaderHeight(0);
    }

    currentScrolledHeight.current = scrolled;
  };

  return (
    <Layout headerHeight={headerHeight}>
      <SEO title="Home" />
      <div
        className={compose([
          "relative",
          "h-screen_without_header",
          " w-screen",
          "overflow-hidden",
        ])}
      >
        <div className={style.top_fader}></div>
        <div
          ref={componentRef}
          onScroll={handleScroll}
          className={compose([
            "absolute",
            "top-0",
            "z-0",
            "py-12",
            "h-screen_without_header",
            "w-screen",
            "bg-primary",
            "overflow-scroll",
          ])}
        >
          <div
            className={compose([
              "mx-6",
              "flex",
              "flex-row",
              "flex-wrap",
              "justify-evenly",
              "items-center",
              "h-max-content",
            ])}
          >
            {data?.prismic?.allBlog_posts?.edges.map(({ node }) => {
              const isLandscape =
                node.cover_image.dimensions.height <
                node.cover_image.dimensions.width;

              return node.cover_image.url ? (
                <ArticlePreview
                  key={node._meta.uid}
                  to={`/blog_post/${node._meta.uid}`}
                  articleDate={
                    node.article_date || node._meta.last_publication_date
                  }
                  articleTitle={node.article_title}
                  image={node.cover_image.url}
                  isLandscape={isLandscape}
                ></ArticlePreview>
              ) : null;
            }) || null}
          </div>
        </div>
        <div className={style.bottom_fader}></div>
      </div>
    </Layout>
  );
};

HomeTemplate.propTypes = {
  data: PropTypes.shape({
    prismic: PropTypes.shape({
      allBlog_posts: PropTypes.shape({
        edges: PropTypes.array,
      }),
    }),
  }),
};

export default HomeTemplate;
