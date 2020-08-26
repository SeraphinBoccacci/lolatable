import "moment/locale/fr";

import moment from "moment";
import React from "react";

import CursorProvider from "./src/Providers/CursorProvider";

const wrapRootElement = ({ element }) => {
  moment().locale("fr");
  return <CursorProvider>{element}</CursorProvider>;
};

export default wrapRootElement;
