import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import AvatarUI from "@material-ui/core/Avatar";

interface IAvatarProps {
  name: string;
  position?: string;
  urlImage?: string;
}

export default function Avatar({ name, position, urlImage }: IAvatarProps) {
  const classes = useStyles();
  return (
    <div className={classes.avatarContainer}>
      <AvatarUI alt={name} src={urlImage} className={classes.large} />
      <div className={classes.name}>{name}</div>
      <div className={classes.position}>{position}</div>
    </div>
  );
}
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    avatarContainer: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column",
      margin: theme.spacing(2, 0),
    },
    large: {
      width: theme.spacing(7),
      height: theme.spacing(7),
    },
    name: theme.typography.subtitle1,
    position: theme.typography.caption,
  })
);
