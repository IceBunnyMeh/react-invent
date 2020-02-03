import React from "react";
import PropTypes from "prop-types";

import HomeIcon from "@material-ui/icons/Home";
import InfoIcon from "@material-ui/icons/Info";

import HomePage from "./Pages/Home/HomePage";
import AboutPage from "./Pages/About/AboutPage";

export const Routes = [
  {
    path: "/",
    exact: true,
    name: "Home",
    page: HomePage,
    icon: <HomeIcon />
  },
  {
    path: "/about",
    name: "About",
    exact: true,
    page: AboutPage,
    icon: <InfoIcon />
  }
];

Routes.propTypes = {
  path: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  page: PropTypes.element.isRequired,
  icon: PropTypes.element.isRequired
};
