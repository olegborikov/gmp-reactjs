import React from "react";
import classes from "./DeleteMovie.module.css";
import DeleteText from "./text/DeleteText";
import CloseButton from "../button/close/CloseButton";
import ConfirmButton from "../button/confirm/ConfirmButton";
import PropTypes from "prop-types";

function DeleteMovie(props) {
  return (
    <div className={classes.popup}>
      <CloseButton action={props.toggleDeleteMovieWindow}/>
      <DeleteText/>
      <ConfirmButton name="CONFIRM" action={props.toggleDeleteMovieWindow}/>
    </div>
  )
}

DeleteMovie.propTypes = {
  toggleDeleteMovieWindow: PropTypes.func.isRequired
};

export default DeleteMovie;
