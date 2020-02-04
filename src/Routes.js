import React from "react";
import PropTypes from "prop-types";

import DashboardIcon from "@material-ui/icons/Dashboard";
import ShowChartIcon from "@material-ui/icons/ShowChart";
import AssignmentIcon from "@material-ui/icons/Assignment";
import HistoryIcon from "@material-ui/icons/History";
import SettingsIcon from "@material-ui/icons/Settings";
import InfoIcon from "@material-ui/icons/Info";

import HomePage from "./Pages/Dashboard/HomePage";
import AnalyticsPage from "./Pages/Analytics/AnalyticsPage";
import TaskList from "./Pages/TasksList/TaskList";
import HistoryPage from "./Pages/History/HistoryPage";
import SettingsPage from "./Pages/Settings/SettingsPage";
import AboutPage from "./Pages/About/AboutPage";

export const Routes = [
  {
    path: "/about",
    exact: true,
    page: AboutPage
  },
  {
    path: "/settings",
    exact: true,
    page: SettingsPage
  },
  {
    path: "/history",
    exact: true,
    page: HistoryPage
  },
  {
    path: "/tasks",
    exact: true,
    page: TaskList
  },
  {
    path: "/analytics",
    exact: true,
    page: AnalyticsPage
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
    name: "Dashboard",
    icon: <DashboardIcon />
  },
  {
    to: "/",
    name: "Analytics",
    icon: <ShowChartIcon />
  },
  {
    to: "/",
    name: "Task List",
    icon: <AssignmentIcon />
  },
  {
    to: "/",
    name: "History",
    icon: <HistoryIcon />
  },
  {
    to: "/",
    name: "Settings",
    icon: <SettingsIcon />
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
