import "./index.css";

import { registerLinkResolver } from "gatsby-source-prismic-graphql";

import { linkResolver } from "./src/utils/linkResolver";
import wrapProvider from "./wrapProvider";

registerLinkResolver(linkResolver);

export const wrapRootElement = wrapProvider;
