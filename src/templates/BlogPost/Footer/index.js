/* eslint-disable react/no-unescaped-entities */
import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";

import ArticlePreview from "../../../view/components/ArticlePreview";
import ShareButton from "../../../view/components/ShareButton";

const Footer = ({ posts }) => {
  return (
    <footer className="flex flex-col">
      <div className="w-max-content mx-auto my-12">
        <ShareButton></ShareButton>
      </div>
      <hr></hr>
      {posts.length ? (
        <div>
          <h3 className="w-max-content mx-auto my-8 font-second text-xl">
            Plus d'articles :
          </h3>
          <div className="flex flex-row justify-evenly my-16">
            {posts.map((post) =>
              post.cover_image.url ? (
                <Link to={`/blog_posts/${post._meta.uid}`} key={post._meta.uid}>
                  <ArticlePreview
                    articleDate={
                      post.article_date || post._meta.last_publication_date
                    }
                    articleTitle={post.article_title}
                    image={post.cover_image.url}
                  ></ArticlePreview>
                </Link>
              ) : null
            )}
          </div>
          <div></div>
        </div>
      ) : null}
    </footer>
  );
};

Footer.propTypes = {
  posts: PropTypes.array,
};

export default Footer;
