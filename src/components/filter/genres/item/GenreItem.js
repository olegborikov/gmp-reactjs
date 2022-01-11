import React from "react";
import PropTypes from "prop-types";
import classes from "./GenreItem.module.css";

function GenreItem(props) {
  return (
    <button className={`${classes.item} ${(props.isActive ? classes.active : "")}`} onClick={props.changeGenre}>
      {props.name}
    </button>
  )
}

GenreItem.propTypes = {
  name: PropTypes.string.isRequired,
  isActive: PropTypes.bool.isRequired,
  changeGenre: PropTypes.func.isRequired,
};

export default GenreItem
