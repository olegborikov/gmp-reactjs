import React from "react";
import classes from "./DeleteText.module.css";

function DeleteText() {
  return (
    <>
      <p className={classes.label}>DELETE MOVIE</p>
      <p className={classes.text}>Are you sure you want to delete this movie?</p>
    </>
  )
}

export default DeleteText;
