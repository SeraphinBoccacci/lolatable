/* eslint-disable camelcase */
/* eslint-disable react/display-name */
import { graphql } from "gatsby";
import PropTypes from "prop-types";
import React from "react";

import SEO from "../../view/components/seo";
import Layout from "../../view/layouts/mainLayout";
import Footer from "./Footer";
import Header from "./Header";
import PrismicBlogPostBodyImages from "./slices/PrismicBlogPostBodyImages";
import PrismicBlogPostBodyReseaux from "./slices/PrismicBlogPostBodyReseaux";
import PrismicBlogPostBodyTexte from "./slices/PrismicBlogPostBodyTexte";
import PrismicBlogPostBodyTexteIllustre from "./slices/PrismicBlogPostBodyTexteIllustre";
const sliceMapper = {
  PRISMIC_Blog_postBodyTexte: PrismicBlogPostBodyTexte,
  PRISMIC_Blog_postBodyTexte_illustre: PrismicBlogPostBodyTexteIllustre,
  PRISMIC_Blog_postBodyGallerie_d_image_s_: PrismicBlogPostBodyImages,
  PRISMIC_Blog_postBodyReseaux: PrismicBlogPostBodyReseaux,
};

const BlogPost = ({
  data: {
    prismic: { blog_post, prevArticle, nextArticle },
  },
}) => {
  if (!blog_post || !blog_post.body) return null;

  const posts = [prevArticle, nextArticle].filter(Boolean);

  const metaUrl = `https://lolatable.fr/blog_post/${blog_post._meta.uid}`;

  return (
    <Layout>
      <SEO
        metaTitle={blog_post.article_title}
        metaDescription={`Lisez dès maintenant mon nouvel article sur ${blog_post.article_title} !`}
        metaUrl={metaUrl}
        metaImage={blog_post.cover_image.url}
      ></SEO>
      <Header
        articleTitle={blog_post.article_title}
        articleDate={
          blog_post.article_date || blog_post._meta.last_publication_date
        }
        imageSrc={blog_post.cover_image.url}
      ></Header>
      <main className="w-screen my-12 px-12 font-third">
        {blog_post.body.map((slice) => {
          const Slice = sliceMapper[slice.__typename];

          return Slice ? (
            <Slice sliceIndex={slice.id} slice={slice} key={slice.id}></Slice>
          ) : null;
        })}
      </main>
      <Footer shareUrl={metaUrl} posts={posts}></Footer>
    </Layout>
  );
};

export default BlogPost;

BlogPost.propTypes = {
  data: PropTypes.shape({
    prismic: PropTypes.shape({
      blog_post: PropTypes.shape({
        body: PropTypes.array,
        article_date: PropTypes.string,
        article_title: PropTypes.string,
        cover_image: PropTypes.shape({
          url: PropTypes.string,
        }),
        _meta: {
          last_publication_date: PropTypes.string,
          uid: PropTypes.string,
        },
      }),
      prevArticle: PropTypes.shape({
        article_date: PropTypes.string,
        article_title: PropTypes.string,
        cover_image: PropTypes.shape({
          url: PropTypes.string,
        }),
        _meta: {
          last_publication_date: PropTypes.string,
        },
      }),
      nextArticle: PropTypes.shape({
        article_date: PropTypes.string,
        article_title: PropTypes.string,
        cover_image: PropTypes.shape({
          url: PropTypes.string,
        }),
        _meta: {
          last_publication_date: PropTypes.string,
        },
      }),
    }),
  }),
};

export const query = graphql`
  query PostAndMorePosts(
    $uid: String!
    $paginationPreviousUid: String!
    $paginationPreviousLang: String!
    $paginationNextUid: String!
    $paginationNextLang: String!
  ) {
    prismic {
      blog_post(uid: $uid, lang: "fr-fr") {
        cover_image
        article_catch_phrase
        article_title
        body {
          ... on PRISMIC_Blog_postBodyTexte {
            type
            label
            fields {
              text_field
            }
          }
          ... on PRISMIC_Blog_postBodyTexte_illustre {
            type
            label
            primary {
              illustration
            }
            fields {
              text_field
            }
          }
          ... on PRISMIC_Blog_postBodyReseaux {
            type
            label
            primary {
              caption
              media
            }
          }
          ... on PRISMIC_Blog_postBodyGallerie_d_image_s_ {
            type
            label
            primary {
              caption
            }
            fields {
              image
            }
          }
        }
        city
        article_date
        _meta {
          lastPublicationDate
          uid
          tags
          lang
        }
      }
      prevArticle: blog_post(
        uid: $paginationPreviousUid
        lang: $paginationPreviousLang
      ) {
        _meta {
          uid
          lastPublicationDate
        }
        article_date
        article_title
        cover_image
      }
      nextArticle: blog_post(
        uid: $paginationNextUid
        lang: $paginationNextLang
      ) {
        _meta {
          uid
          lastPublicationDate
        }
        article_date
        article_title
        cover_image
      }
    }
  }
`;
