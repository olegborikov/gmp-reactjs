import React from 'react';
import classes from "./MoviesLabel.module.css";

function MoviesLabel(props) {
  return (
    <div className={classes.label}>
      <strong>{props.moviesAmount}</strong> movies found
    </div>
  )
}

export default MoviesLabel;
