/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useRef, useState } from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";

import Header from "../components/Header";

import style from "./style.module.css";
import { compose } from "../../utils/classNames";

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  const currentScrolledHeight = useRef(0);
  const componentRef = React.createRef();
  const [headerHeight, setHeaderHeight] = useState(200);

  const handleScroll = () => {
    const scrolled = componentRef?.current?.scrollTop || 0;

    if (scrolled < 50) {
      const currentHeaderHeight = 100 - scrolled * 2;
      setHeaderHeight(currentHeaderHeight);
    } else if (headerHeight) {
      setHeaderHeight(0);
    }

    currentScrolledHeight.current = scrolled;
  };

  const ex = [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRlC7q8pRgNfdJde8imb69cVZ3Atx3AvoMMmA&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSuDq93da95O2JKT21ZELUQMREGpkK3c-avyA&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcROsZ9E7f9cFS5Dkw0A3Lyxo-dKhEgTeGPCYw&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTeMAY3Z-205kWN7XF5u2F8GdNrSs6-RvcMOw&usqp=CAU",
    "https://lyon.citycrunch.fr/wp-content/uploads/sites/3/2020/01/Food_Traboule_Lyon_3.jpg",
    "https://lh3.googleusercontent.com/proxy/jf_-3BDud4UWG14P-XjxGmEpw6XF8J-Zpg6esuSm-RP8Bh7fAdSSgkgSZCQRuEgGwqoRcPVjFtxAhBzRWuMOehRt98nANaXKQezQO6uQ96y3vgMfF5Tt5-xBBGDQlUZ6cIC0YfvFjmyyYYvY3w",
    "https://www.lyonresto.com/contenu/photo_restaurant/0_photo_automatique_big/victoire_et_thomas/008_2018_-_Victoire_et_Thomas_00001.jpg",
  ];

  const getIcons = () => {
    return [
      ...ex,
      ...ex,
      ...ex,
      ...ex,
      ...ex,
      ...ex,
      ...ex,
      ...ex,
      ...ex,
    ].map((link, i) => (
      <img className="w-64 mx-4 my-4" key={i} src={link}></img>
    ));
  };

  return (
    <div className="fixed top-0 left-0 w-screen h-screen flex flex-col">
      <Header
        headerHeight={headerHeight}
        siteTitle={data.site.siteMetadata.title}
      />
      <div
        style={{
          padding: "90px 0 1.45rem",
        }}
      >
        <div
          className={compose([
            "relative",
            "h-screen_without_header",
            " w-screen",
            "overflow-hidden",
          ])}
        >
          <div className={style.top_fader}></div>
          <div
            ref={componentRef}
            onScroll={handleScroll}
            className={compose([
              "absolute",
              "top-0",
              "z-0",
              "h-screen_without_header",
              "w-screen",
              "bg-primary",
              "overflow-scroll",
            ])}
          >
            <div
              className="mx-6 flex flex-row flex-wrap items-center"
              style={{ height: "max-content" }}
            >
              {getIcons()}
            </div>
          </div>
          <div className={style.bottom_fader}></div>
        </div>
      </div>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
