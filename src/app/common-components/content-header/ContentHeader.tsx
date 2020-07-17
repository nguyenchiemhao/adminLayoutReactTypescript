import React from "react";
import useStyles from "./ContentHeader.style";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import GetAppIcon from "@material-ui/icons/GetApp";
import ShareIcon from "@material-ui/icons/Share";
import { Box } from "@material-ui/core";

export default function ContentHeader() {
  const classes = useStyles();
  return (
    <div>
      <div className={classes.container}>
        <h2 className={classes.title}>Title</h2>
        <div>
          <Button variant='contained' color='primary' startIcon={<AddIcon />}>
            Create
          </Button>
        </div>
      </div>
      <Box mt={1} style={{ display: "flex", flexDirection: "row" }}>
        <Button className={classes.buttonSpacing} startIcon={<GetAppIcon />}>
          Download
        </Button>{" "}
        <Button className={classes.buttonSpacing} startIcon={<ShareIcon />}>
          Share
        </Button>
      </Box>
    </div>
  );
}
