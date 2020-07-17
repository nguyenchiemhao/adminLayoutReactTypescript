import { createStyles, Theme, makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    listTitle: {
      fontWeight: 600,
      fontSize: theme.typography.fontSize + 4
    },
    root: {
      width: '100%',
      maxWidth: 240,
      backgroundColor: theme.palette.background.paper,
    },
    nested: {
      paddingLeft: theme.spacing(4),
    },
  }))

export default useStyles