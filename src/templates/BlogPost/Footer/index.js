/* eslint-disable react/no-unescaped-entities */
import PropTypes from "prop-types";
import React from "react";

import ArticlePreview from "../../../view/components/ArticlePreview";
import ShareButton from "../../../view/components/ShareButton";
import style from "./style.module.css";

const Footer = ({ posts, shareUrl }) => {
  return (
    <footer
      className={`
    w-full 
    flex
    flex-col
    `}
    >
      <div className="w-max-content mx-auto my-12">
        <ShareButton shareUrl={shareUrl}></ShareButton>
      </div>
      <hr></hr>
      {posts.length ? (
        <div className="w-full">
          <h3 className="w-max-content mx-auto my-8 font-second text-xl">
            Plus d'articles :
          </h3>
          <div className={style.more_posts}>
            {posts.map((post) => {
              const isLandscape =
                post.cover_image.dimensions.height <
                post.cover_image.dimensions.width;

              return post.cover_image.url ? (
                <ArticlePreview
                  key={post._meta.uid}
                  to={`/blog_post/${post._meta.uid}`}
                  articleDate={
                    post.article_date || post._meta.last_publication_date
                  }
                  articleTitle={post.article_title}
                  image={post.cover_image.url}
                  isLandscape={isLandscape}
                ></ArticlePreview>
              ) : null;
            })}
          </div>
          <div></div>
        </div>
      ) : null}
    </footer>
  );
};

Footer.propTypes = {
  posts: PropTypes.array,
  shareUrl: PropTypes.string,
};

export default Footer;
