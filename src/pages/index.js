import { graphql } from "gatsby";
import PropTypes from "prop-types";
import React from "react";

import Home from "../view/containers/Home";

const IndexPage = (props) => {
  return <Home {...props}></Home>;
};

IndexPage.propTypes = {
  data: PropTypes.shape({
    prismic: PropTypes.shape({
      allBlog_posts: PropTypes.shape({
        edges: PropTypes.array,
      }),
    }),
  }),
};

export default IndexPage;

export const query = graphql`
  query PostsQuery {
    prismic {
      allBlog_posts {
        edges {
          node {
            _meta {
              lastPublicationDate
              uid
            }
            article_title
            article_date
            cover_image
          }
        }
      }
    }
  }
`;
