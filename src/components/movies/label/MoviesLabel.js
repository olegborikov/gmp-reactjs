import React from "react";
import classes from "./MoviesLabel.module.css";
import PropTypes from "prop-types";

function MoviesLabel(props) {
  return (
    <div className={classes.label}>
      <strong>{props.moviesAmount}</strong> movies found
    </div>
  )
}

MoviesLabel.propTypes = {
  moviesAmount: PropTypes.number.isRequired
};

export default MoviesLabel;
