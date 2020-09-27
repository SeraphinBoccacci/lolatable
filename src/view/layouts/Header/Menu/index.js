import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";

import { compose } from "../../../../utils/classNames";
import Cities from "./Cities";
import MenuButton from "./MenuButton";
import style from "./style.module.css";

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
  const [opennedSubMenuIndex, setOpennedSubMenuIndex] = useState(null);

  return (
    <div
      onMouseEnter={() => setIsMenuOpenned(true)}
      onMouseLeave={() => setIsMenuOpenned(false)}
      onClick={() => setIsMenuOpenned(!isMenuOpenned)}
      className="h-full"
    >
      <MenuButton
        setIsMenuOpenned={setIsMenuOpenned}
        isMenuOpenned={isMenuOpenned}
      ></MenuButton>
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
              className={compose([
                "fixed top-0 left-0 h-screen bg-white",
                opennedSubMenuIndex ? "" : "overflow-hidden",
              ])}
            >
              <div className="w-72">
                <div className="relative w-full">
                  <h3 className={style.menuTitle}>Par ville</h3>
                  <Cities
                    setOpennedSubMenuIndex={setOpennedSubMenuIndex}
                    opennedSubMenuIndex={opennedSubMenuIndex}
                  ></Cities>
                </div>

                <h3 className={style.menuTitle}>Par mots clés</h3>
                <h3 className={style.menuTitle}>Par ville</h3>
              </div>
            </motion.div>
          </>
        ) : null}
      </AnimatePresence>
    </div>
  );
};

export default Menu;
