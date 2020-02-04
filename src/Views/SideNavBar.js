import React from "react";
import clsx from "clsx";
import { useTheme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";

import { ListItem, ListItemIcon, ListItemText } from "@material-ui/core";
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

import ListItemLink from "../Helpers/ListItemLink";
import { Links } from "../Routes";

function SideNavBar(props) {
  const { classes, open, closeDrawer, userName } = props;
  const theme = useTheme();

  const [selectedIndex, setSelectedIndex] = React.useState(Links[0].name);

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };

  return (
    <Drawer
      variant="permanent"
      className={clsx(classes.drawer, {
        [classes.drawerOpen]: open,
        [classes.drawerClose]: !open
      })}
      classes={{
        paper: clsx({
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open
        })
      }}
    >
      <div className={classes.toolbar}>
        <IconButton onClick={closeDrawer}>
          {theme.direction === "rtl" ? (
            <ChevronRightIcon />
          ) : (
            <ChevronLeftIcon />
          )}
        </IconButton>
      </div>
      <Divider />
      <List>
        {Links.map((link, index) => (
          <ListItemLink
            to={link.to}
            primary={link.name}
            icon={link.icon ? link.icon : null}
            selected={selectedIndex}
            handleListItemClick={handleListItemClick}
            classes={classes}
            key={index}
          />
        ))}
      </List>
      <div className={clsx(classes.fillHeight)} />
      <Divider />
      <List>
        <ListItem>
          <ListItemIcon>
            <AccountCircleIcon />
            </ListItemIcon>
            <ListItemText primary={userName ? userName : "Anonymous"} />
          </ListItem>
      </List>
    </Drawer>
  );
}

export default SideNavBar;
