import React from "react";
import PropTypes from "prop-types";
import classes from "./GenreItem.module.css";

function GenreItem(props) {
  return (
    <button className={`${classes.item} ${(props.name === props.current ? classes.active : "")}`}
            onClick={(e) => props.changeGenre(e.target?.value)} value={props.name}>
      {props.name}
    </button>
  )
}

GenreItem.propTypes = {
  name: PropTypes.string.isRequired,
  current: PropTypes.string.isRequired,
  changeGenre: PropTypes.func.isRequired,
};

export default GenreItem
