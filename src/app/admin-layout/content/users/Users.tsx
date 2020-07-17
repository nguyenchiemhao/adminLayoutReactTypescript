import React, { Component } from "react";
import { Box } from "@material-ui/core";
import ContentHeader from "../../../common-components/content-header/ContentHeader";

export default class Users extends Component {
  render() {
    return (
      <Box mt={2}>
        <ContentHeader />
        User management
      </Box>
    );
  }
}
