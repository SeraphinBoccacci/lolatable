/* eslint-disable react/display-name */
// eslint-disable-next-line max-len
import { AnimatePresence, motion } from "framer-motion";
import PropTypes from "prop-types";
import React, { useEffect, useRef, useState } from "react";

import Fork from "../../images/fork";
import { compose } from "../../utils/classNames";
import ArticlePreviewPointer from "./Cursors/ArticlePreviewPointer";
import style from "./style.module.css";

export const CursorContext = React.createContext("cursorContext");

const SUPPORTED_CURSORS = [false, "articlePreviewPointer", "right", "left"];

const switchCursor = {
  initial: { height: 0, width: 0, opacity: 0 },
  enter: {
    height: "max-content",
    width: "max-content",
    opacity: 1,
    transition: { duration: 0.5, ease: [0.48, 0.15, 0.25, 0.96] },
  },
  exit: {
    height: 0,
    width: 0,
    opacity: 0,
    transition: { duration: 0.3, ease: [0.48, 0.15, 0.25, 0.96] },
  },
};

const CursorProvider = ({ children }) => {
  const [cursor, setCursor] = useState(false);
  const ref = useRef();

  const onMouseMove = (event) => {
    const { pageX: x, pageY: y } = event;

    if (ref?.current?.style) {
      ref.current.style.left = `${x}px`;
      ref.current.style.top = `${y}px`;
    }
  };

  useEffect(() => {
    document.addEventListener("mousemove", onMouseMove);

    return () => {
      document.removeEventListener("mousemove", onMouseMove);
    };
  });

  const onCursor = (cursorType, cursorProps = {}) => {
    const validCursorType =
      (SUPPORTED_CURSORS.includes(cursorType) && cursorType) || false;

    setCursor({ cursorType: validCursorType, cursorProps });
  };

  const CursorNode = {
    articlePreviewPointer: () => (
      <ArticlePreviewPointer {...cursor.cursorProps}></ArticlePreviewPointer>
    ),
  }[cursor.cursorType];

  return (
    <CursorContext.Provider value={{ onCursor }}>
      <div className={compose([style.movable])} ref={ref}>
        <AnimatePresence>
          {CursorNode ? (
            <motion.div
              initial="initial"
              animate="enter"
              exit="exit"
              variants={switchCursor}
              key="other"
            >
              <CursorNode></CursorNode>
            </motion.div>
          ) : (
            <motion.div
              initial="initial"
              animate="enter"
              exit="exit"
              variants={switchCursor}
              key="initial"
              className="w-full transform"
            >
              <Fork></Fork>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {children}
    </CursorContext.Provider>
  );
};

CursorProvider.propTypes = {
  children: PropTypes.object,
};

export default CursorProvider;
