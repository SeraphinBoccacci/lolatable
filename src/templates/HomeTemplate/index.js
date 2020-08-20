/* eslint-disable react/display-name */
import { graphql } from "gatsby";
import React from "react";

import Home from "../../view/containers/Home";

const HomeTemplate = (props) => {
  return <Home {...props}></Home>;
};

export default HomeTemplate;

export const query = graphql`
  query loadPagesQuery($city: String!) {
    prismic {
      allBlog_posts(where: { city: $city }) {
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
