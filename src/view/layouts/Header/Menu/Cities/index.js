import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";

import cities from "../../../../../constants/cities";
import SubMenu from "../SubMenu";
import style from "./style.module.css";

const Cities = ({ opennedSubMenuIndex, setOpennedSubMenuIndex }) => {
  return (
    <div>
      {cities.map((city, index) => (
        <div
          onMouseEnter={() => setOpennedSubMenuIndex(index)}
          onMouseLeave={() => setOpennedSubMenuIndex(null)}
          key={`city-${index}`}
          className="relative w-full"
        >
          <Link to={`/${city.value}`}>
            <h4 className={style.menuElement}>{city.label}</h4>
          </Link>
          <SubMenu
            city={city}
            index={index}
            opennedSubMenuIndex={opennedSubMenuIndex}
          ></SubMenu>
        </div>
      ))}
    </div>
  );
};

Cities.propTypes = {
  opennedSubMenuIndex: PropTypes.number,
  setOpennedSubMenuIndex: PropTypes.func,
};

export default Cities;
