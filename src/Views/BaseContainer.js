import React from "react";

import CssBaseline from "@material-ui/core/CssBaseline";
import { useStyles } from "./styles";

import Header from "./Header";
import SideNavBar from "./SideNavBar";
import PageContainer from "./PageContainer";

function BaseContainer() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Header classes={classes} open={open} openDrawer={handleDrawerOpen} />
      <SideNavBar classes={classes} open={open} closeDrawer={handleDrawerClose} />
      <main className={classes.content}>
      <div className={classes.toolbar} />
        <PageContainer />
      </main>
    </div>
  );
}

export default BaseContainer;
