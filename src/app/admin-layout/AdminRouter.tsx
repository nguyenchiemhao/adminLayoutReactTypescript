import React from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import ADMIN_ROUTES from "../../commons/AdminRoutes";
import Box from "@material-ui/core/Box";
import Breadcrumbs from "./breadcrumbs/Breadcrumbs";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    contentContainer: {
      width: "100%",
      minHeight: "100%",
      backgroundColor: theme.palette.grey[100],
    },
  })
);

function AdminRouter() {
  const classes = useStyles();
  return (
    <div className={classes.contentContainer}>
      <Box m={2} ml={4}>
        <Breadcrumbs />
        <Switch>
          {ADMIN_ROUTES.map((route) => (
            <Route key={route.key} path={route.path} exact={true} component={route.component} />
          ))}
        </Switch>
      </Box>
    </div>
  );
}

export default withRouter(AdminRouter);
