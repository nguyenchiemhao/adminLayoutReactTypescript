import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";
import { colors } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    iconContainer: {
      [theme.breakpoints.up("sm")]: {
        minWidth: 47,
        display: "flex",
        justifyItems: "center",
        margin: "0px 0px 0px 10px",
      },
    },
    textStyle: {
      fontWeight: 500
    },
    navLink: {
      textDecoration: 'none',
      color: theme.palette.text.primary
    },
    navActive: {
      '&>div': {
        backgroundColor: "rgba(0, 0, 0, 0.17)"
        // backgroundColor: theme.palette.text.hint
      }
    },
  })
);

export default useStyles