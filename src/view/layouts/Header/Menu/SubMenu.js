import { AnimatePresence, motion } from "framer-motion";
import { Link } from "gatsby";
import { useBreakpoint } from "gatsby-plugin-breakpoints";
import PropTypes from "prop-types";
import React from "react";

import { menuVariants } from "../../../../constants/animations";
import style from "./Cities/style.module.css";

const SubMenu = ({ city, index, opennedSubMenuIndex }) => {
  const breakpoint = useBreakpoint();

  return breakpoint.sm ? (
    <div className="w-72 justify-evenly bg-secondary py-2 my-1">
      {city.subMenu.map((category, indexCat) => (
        <Link
          key={`city-${index}-sub-menu-category-${indexCat}`}
          to={`/${city.value}/${category.value}`}
        >
          <h5 className={style.menuSubElement}>{category.label}</h5>
        </Link>
      ))}
    </div>
  ) : (
    <AnimatePresence exitBeforeEnter>
      {opennedSubMenuIndex === index ? (
        <motion.div
          key={`city-${index}-sub-menu`}
          variants={menuVariants}
          initial="initial"
          animate="enter"
          exit="exit"
          className="fixed top-0 left-72 h-screen bg-secondary overflow-hidden"
        >
          <div className="w-72 h-144 justify-evenly my-12">
            {city.subMenu.map((category, indexCat) => (
              <Link
                key={`city-${index}-sub-menu-category-${indexCat}`}
                to={`/${city.value}/${category.value}`}
              >
                <h5 className={style.menuSubElement}>{category.label}</h5>
              </Link>
            ))}
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
};

SubMenu.propTypes = {
  city: PropTypes.shape({
    subMenu: PropTypes.array,
    value: PropTypes.string,
  }),
  index: PropTypes.number,
  opennedSubMenuIndex: PropTypes.number,
};

export default SubMenu;
