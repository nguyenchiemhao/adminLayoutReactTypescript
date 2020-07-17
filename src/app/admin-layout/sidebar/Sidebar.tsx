import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import classNames from "classnames";
import CustomListItem from "../../common-components/list-item/CustomListItem";
import NestedList from "../../common-components/nested-list/NestedList";
import ADMIN_ROUTES from "../../../commons/AdminRoutes";
import Avatar from "../../common-components/avatar/Avatar";

interface IHeaderProps {
  //props receive from redux
  onSidebarOpen: any;
}

export default function Sidebar({ onSidebarOpen }: IHeaderProps) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Drawer
        variant='persistent'
        className={classNames(classes.drawer, {
          [classes.drawerClose]: !onSidebarOpen,
        })}
        open={onSidebarOpen}
        classes={{
          paper: classNames(
            {
              [classes.drawerClose]: !onSidebarOpen,
            },
            classes.drawerPaper // push side bar under app bar
          ),
        }}
      >
        <Avatar name='Howie C. Nguyen' position='developer' />
        <Divider />
        <List>
          {ADMIN_ROUTES.map((route, index) => (
            <CustomListItem
              icon={<route.icon />}
              title={route.name}
              key={route.path}
              to={route.path}
            />
          ))}
        </List>
        <Divider />
        <NestedList title='Nested List' />
      </Drawer>
    </div>
  );
}

const drawerWidth = 240;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
    },
    menuButton: {
      marginRight: 36,
    },
    hide: {
      display: "none",
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
      height: " 100%",
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
      [theme.breakpoints.down("sm")]: {
        width: 0,
      },
    },
    drawerPaper: {
      width: 240,
      maxWidth: 240,
      position: "relative",
      zIndex: 99,
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
      [theme.breakpoints.down("sm")]: {
        width: 0,
      },
    },
    drawerClose: {
      width: 0,
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    toolbar: {
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-end",
      padding: theme.spacing(0, 1),
      // necessary for content to be below app bar
      ...theme.mixins.toolbar,
    },
    sidebarHeader: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column",
    },
    large: {
      width: theme.spacing(7),
      height: theme.spacing(7),
    },
  })
);
