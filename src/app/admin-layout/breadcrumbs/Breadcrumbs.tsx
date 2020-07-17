import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import BreadcrumbsUI from "@material-ui/core/Breadcrumbs";
import Link from "@material-ui/core/Link";
import HomeIcon from "@material-ui/icons/Home";
import { withRouter } from "react-router-dom";

interface IRouterProps {
  location: { pathname?: string };
  history: { push: any };
}

function capitalizeFirstLetter(word: string) {
  return word.charAt(0).toUpperCase() + word.slice(1);
}

function Breadcrumbs({ history, location }: IRouterProps) {
  const classes = useStyles();
  const { pathname } = location;
  const pathNames = pathname?.split("/").filter((x) => x !== "admin" && x);
  return (
    <BreadcrumbsUI aria-label='breadcrumb'>
      {pathname === "/admin" ? (
        <Typography color='inherit' className={classes.link}>
          <HomeIcon className={classes.icon} />
          Home
        </Typography>
      ) : (
        <Link
          color='inherit'
          href='/admin'
          onClick={() => history.push("/admin")}
          className={classes.link}
        >
          <HomeIcon className={classes.icon} />
          Home
        </Link>
      )}
      {pathNames?.map((path, index) => {
        const isLast = index === pathNames.length - 1;
        return isLast ? (
          <Typography color='textPrimary' className={classes.link} key={path}>
            {capitalizeFirstLetter(path)}
          </Typography>
        ) : (
          <Link
            color='inherit'
            href={`/${path}`}
            onClick={() => history.push(`/${path}`)}
            className={classes.link}
            key={path}
          >
            {capitalizeFirstLetter(path)}
          </Link>
        );
      })}
    </BreadcrumbsUI>
  );
}

export default withRouter(Breadcrumbs);

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    wrapperContainer: {
      margin: theme.spacing(2),
    },
    link: {
      display: "flex",
    },
    icon: {
      marginRight: theme.spacing(0.5),
      width: 20,
      height: 20,
    },
  })
);
