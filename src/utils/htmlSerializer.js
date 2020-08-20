/* eslint-disable react/display-name */
import { Elements } from "prismic-richtext";
import React from "react";

import {
  Em,
  Heading1,
  Heading2,
  Heading3,
  Heading4,
  Heading5,
  Heading6,
  Hyperlink,
  Image,
  List,
  ListItem,
  OList,
  OListItem,
  Paragraph,
  Strong,
} from "../view/components/prismicHtml";
import { linkResolver } from "./linkResolver";

// -- HTML Serializer
// This function will be used to change the way the HTML is loaded
const htmlSerializer = function (type, element, content, children, key) {
  const resolver = {
    [Elements.heading1]: () => {
      return <Heading1>{children}</Heading1>;
    },
    [Elements.heading2]: () => {
      return <Heading2>{children}</Heading2>;
    },
    [Elements.heading3]: () => {
      return <Heading3>{children}</Heading3>;
    },
    [Elements.heading4]: () => {
      return <Heading4>{children}</Heading4>;
    },
    [Elements.heading5]: () => {
      return <Heading5>{children}</Heading5>;
    },
    [Elements.heading6]: () => {
      return <Heading6>{children}</Heading6>;
    },
    [Elements.hyperlink]: () => {
      const targetAttr = element.data.target
        ? { target: element.data.target }
        : {};
      const relAttr = element.data.target ? { rel: "noopener" } : {};
      const props = Object.assign(
        {
          className: "link-class",
          href: element.data.url || linkResolver(element.data),
        },
        targetAttr,
        relAttr
      );
      return <Hyperlink {...props}>{children}</Hyperlink>;
    },
    [Elements.image]: () => {
      return (
        <Image
          className="shadow-xl"
          src={element.url}
          alt={element.alt || ""}
        ></Image>
      );
    },
    [Elements.label]: () => {},
    [Elements.list]: () => {
      return <List>{children}</List>;
    },
    [Elements.listItem]: () => {
      return <ListItem>{children}</ListItem>;
    },
    [Elements.oList]: () => {
      return <OList>{children}</OList>;
    },
    [Elements.oListItem]: () => {
      return <OListItem> {children}</OListItem>;
    },
    [Elements.paragraph]: () => {
      return <Paragraph>{children}</Paragraph>;
    },

    [Elements.strong]: () => {
      return <Strong>{children}</Strong>;
    },
    [Elements.em]: () => {
      return <Em>{children}</Em>;
    },
  };

  const HtmlElement = resolver[type];

  return HtmlElement ? <HtmlElement key={key}></HtmlElement> : null;
};

export default htmlSerializer;
