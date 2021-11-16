import React from 'react';
import PropTypes from "prop-types";
import classes from "./GenreItem.module.css";

function GenreItem(props) {
  return (
    <button className={classes.item}>
      {props.name}
    </button>
  )
}

GenreItem.propTypes = {
  name: PropTypes.string.isRequired
};

export default GenreItem
