import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { compose } from "../../../../utils/classNames";

const backgroundVariants = {
  initial: {
    opacity: 0,
  },
  enter: {
    opacity: 0.5,
    transition: { duration: 0.5, ease: [0.48, 0.15, 0.25, 0.96] },
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.5, ease: [0.48, 0.15, 0.25, 0.96] },
  },
};

const menuVariants = {
  initial: {
    width: 0,
  },
  enter: {
    width: "18rem",
    transition: { duration: 0.5, ease: [0.48, 0.15, 0.25, 0.96] },
  },
  exit: {
    width: 0,
    transition: { duration: 0.5, ease: [0.48, 0.15, 0.25, 0.96] },
  },
};

const Menu = () => {
  const [isMenuOpenned, setIsMenuOpenned] = useState(false);
  return (
    <>
      <button
        onClick={() => setIsMenuOpenned(true)}
        className={compose([
          "bg-transparent",
          "w-48",
          "border-transparent",
          "text-soft_black",
          "font-second",
          "text-lg",
        ])}
      >
        Menu
      </button>

      <AnimatePresence exitBeforeEnter>
        {isMenuOpenned ? (
          <>
            <motion.div
              key="menu-background"
              variants={backgroundVariants}
              initial="initial"
              animate="enter"
              exit="exit"
              className="fixed top-0 left-0 w-screen h-screen bg-soft_black "
              onClick={() => setIsMenuOpenned(false)}
            ></motion.div>
            <motion.div
              key="home-menu"
              variants={menuVariants}
              initial="initial"
              animate="enter"
              exit="exit"
              className="fixed  top-0 left-0 h-screen bg-white"
            ></motion.div>
          </>
        ) : null}
      </AnimatePresence>
    </>
  );
};

export default Menu;
