import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        container: {
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            color: theme.palette.text.primary,
        },
        title: theme.typography.h4,
        buttonSpacing: {
            margin: theme.spacing(0, 3, 0, 0),
        },
    })
);

export default useStyles