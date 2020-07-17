import React from "react";
import useStyle from "./PageNotFound.style";
// import classNames from "classnames";

function PageNotFound() {
  const classes = useStyle();

  return (
    <div className={classes.container}>
      <h1 style={{ textAlign: "center" }}>Ops~! 404 Not found</h1>
      <div className={classes.spriteImage} />
    </div>
  );
}
export default PageNotFound;
