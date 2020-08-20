import "./index.css";

import { registerLinkResolver } from "gatsby-source-prismic-graphql";
import React from "react";

import CursorProvider from "./src/Providers/CursorProvider";
import { linkResolver } from "./src/utils/linkResolver";

export const wrapRootElement = ({ element }) => {
  return <CursorProvider>{element}</CursorProvider>;
};

registerLinkResolver(linkResolver);
