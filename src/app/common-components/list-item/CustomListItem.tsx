import React, { ReactNode, useState } from "react";
import ListItem from "@material-ui/core/ListItem";
import useStyles from "./CustomListItem.style";
import classNames from "classnames";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import { Link as RouterLink, NavLink } from "react-router-dom";

interface ICustomListItemProps {
  icon: JSX.Element | React.ReactNode | any;
  title: string;
  to?: string;
  onClick?: any;
  rightIcon?: JSX.Element | any;
}

export default function CustomListItem({ to = "", ...resProps }: ICustomListItemProps) {
  const classes = useStyles();

  return (
    <NavLink activeClassName={classes.navActive} to={to} className={classes.navLink} exact>
      <ListItem button onClick={resProps.onClick}>
        <ListItemIcon className={classNames(classes.iconContainer)}>{resProps.icon}</ListItemIcon>
        <p className={classes.textStyle}>{resProps.title}</p>
        {resProps.rightIcon}
      </ListItem>
    </NavLink>
  );
}
