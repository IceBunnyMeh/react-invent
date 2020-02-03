import React, { useMemo, forwardRef } from "react";
import PropTypes from "prop-types";

import { Link } from "react-router-dom";
import { ListItem, ListItemIcon, ListItemText } from "@material-ui/core";

function ListItemLink(props) {
  const { icon, primary, to } = props;

  const renderLink = useMemo(
    () =>
      forwardRef((linkProps, ref) => <Link ref={ref} to={to} {...linkProps} />),
    [to]
  );

  return (
    <li>
      <ListItem button component={renderLink}>
        <ListItemIcon>{icon}</ListItemIcon>
        <ListItemText primary={primary} />
      </ListItem>
    </li>
  );
}

ListItemLink.propTypes = {
  icon: PropTypes.element,
  primary: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired
};


export default ListItemLink;
