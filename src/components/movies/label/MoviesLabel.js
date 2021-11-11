import React from 'react';
import {MOVIES} from "../../../constants/Constant";
import classes from "./styles.module.css";

function MoviesLabel() {
  return (
    <div className={classes.label}>
      <strong>{MOVIES.length}</strong> movies found
    </div>
  )
}

export default MoviesLabel;
