import React from "react";
import PropTypes from "prop-types";

import HomeIcon from "@material-ui/icons/Home";
import InfoIcon from "@material-ui/icons/Info";

import HomePage from "./Pages/Home/HomePage";
import AboutPage from "./Pages/About/AboutPage";

export const Routes = [
  {
    path: "/about",
    exact: true,
    page: AboutPage
  },
  {
    path: "/",
    exact: true,
    page: HomePage
  }
];

Routes.propTypes = {
  path: PropTypes.string.isRequired,
  page: PropTypes.element.isRequired
};

export const Links = [
  {
    to: "/",
    name: "Home",
    icon: <HomeIcon />
  },
  {
    to: "/about",
    name: "About",
    icon: <InfoIcon />
  }
];

Links.propTypes = {
  to: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  icon: PropTypes.element
};
