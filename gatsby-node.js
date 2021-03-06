/* eslint-disable no-undef */
/* eslint-disable comma-dangle */
/* eslint-disable indent */

const path = require("path");

const cities = [
  {
    value: "Paris",
    label: "Paris",
    subMenu: [
      { value: "restaurants", label: "Restaurants" },
      { value: "bars-and-terraces", label: "Bars et terrasses" },
      { value: "special-vg", label: "Special VG" },
      { value: "favourites", label: "Coups de cœur" },
      { value: "chef-portrait", label: "Portraits de chefs" },
    ],
  },
  {
    value: "Lyon",
    label: "Lyon",
    subMenu: [
      { value: "restaurants", label: "Restaurants" },
      { value: "bars-and-terraces", label: "Bars et terrasses" },
      { value: "special-vg", label: "Special VG" },
      { value: "favourites", label: "Coups de cœur" },
      { value: "chef-portrait", label: "Portraits de chefs" },
    ],
  },
  {
    value: "Villefranche",
    label: "Villefranche-sur-Saône",
    subMenu: [
      { value: "restaurants", label: "Restaurants" },
      { value: "bars-and-terraces", label: "Bars et terrasses" },
      { value: "special-vg", label: "Special VG" },
      { value: "favourites", label: "Coups de cœur" },
      { value: "chef-portrait", label: "Portraits de chefs" },
    ],
  },
];

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const homeTemplate = path.resolve("src/templates/HomeTemplate/index.js");

  cities.forEach(({ value }) => {
    createPage({
      path: `${value}`,
      component: homeTemplate,
      context: {
        city: value,
      },
    });
  });
};
