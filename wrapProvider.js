import React from "react";

import CursorProvider from "./src/Providers/CursorProvider";

const wrapRootElement = ({ element }) => {
  return <CursorProvider>{element}</CursorProvider>;
};

export default wrapRootElement;
