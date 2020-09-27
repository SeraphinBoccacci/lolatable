/* eslint-disable no-undef */
/* eslint-disable max-len */
require("dotenv").config({
  path: ".env",
});

module.exports = {
  siteMetadata: {
    title: "Lol'à table !",
    description: "Description to do",
    author: "Seraphin Boccacci",
  },
  plugins: [
    {
      resolve: "gatsby-source-prismic-graphql",
      options: {
        repositoryName: "lolablog",
        defaultLang: "fr-fr",
        langs: ["en-us", "fr-fr"],
        accessToken: `${process.env.PRISMIC_ACCESS_TOKEN}`,
        previews: false,
        sharpKeys: [/image|photo|picture/],
        pages: [
          {
            type: "Blog_post",
            match: "/blog_post/:uid",
            component: require.resolve("./src/templates/BlogPost/index.js"),
          },
        ],
      },
    },
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-postcss",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: "gatsby-plugin-breakpoints",
      options: {
        queries: {
          xs: "(max-width: 320px)",
          sm: "(max-width: 720px)",
          hasCursor: "(max-width: 800px)",
          md: "(max-width: 1024px)",
          l: "(max-width: 1536px)",
          portrait: "(orientation: portrait)",
        },
      },
    },
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "Lol'à Table",
        short_name: "Lola",
        start_url: "/",
        background_color: "#ffe8df",
        theme_color: "#ffe8df",
        display: "minimal-ui",
        icon: "src/images/lolatable_logo.png", // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
