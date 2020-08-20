/* eslint-disable react/prop-types */
/* eslint-disable react/display-name */
import { Link } from "gatsby";
import React from "react";

import style from "./style.module.css";

export const Heading1 = ({ children }) => {
  return <h1 className={style.heading1}>{children}</h1>;
};

export const Heading2 = ({ children }) => {
  return <h2 className={style.heading2}>{children}</h2>;
};

export const Heading3 = ({ children }) => {
  return <h3 className={style.heading3}>{children}</h3>;
};

export const Heading4 = ({ children }) => {
  return <h4 className={style.heading4}>{children}</h4>;
};

export const Heading5 = ({ children }) => {
  return <h5 className={style.heading5}>{children}</h5>;
};

export const Heading6 = ({ children }) => {
  return <h6 className={style.heading6}>{children}</h6>;
};

export const Hyperlink = ({ children, ...props }) => {
  return <Link {...props}>{children}</Link>;
};
export const Image = ({ element, children }) => {
  return (
    <img
      className={style.image}
      src={element.url}
      alt={element.alt || ""}
    ></img>
  );
};
export const Label = ({ children }) => {
  return <div>{children}</div>;
};

export const List = ({ children }) => {
  return <ul className={style.list}>{children}</ul>;
};

export const ListItem = ({ children }) => {
  return <li className={style.listItem}>{children}</li>;
};

export const OList = ({ children }) => {
  return <ul className={style.oList}>{children}</ul>;
};

export const OListItem = ({ children }) => {
  return <li className={style.oListItem}> {children}</li>;
};

export const Paragraph = ({ children }) => {
  return <p className={style.paragraph}>{children}</p>;
};

export const Strong = ({ children }) => {
  return <b>{children}</b>;
};

export const Em = ({ children }) => {
  return <em>{children}</em>;
};
