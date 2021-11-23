import React from "react";
import classes from "./DeleteMovie.module.css";
import DeleteText from "./text/DeleteText";
import CloseButton from "../button/close/CloseButton";
import ConfirmButton from "../button/confirm/ConfirmButton";
import PropTypes from "prop-types";

function DeleteMovie(props) {
  const onButtonClick = () => {
    props.toggleDeleteMovieWindow()
    props.deleteMovie(props.id)
  }

  return (
    <div className={classes.popup}>
      <CloseButton action={props.toggleDeleteMovieWindow}/>
      <DeleteText/>
      <ConfirmButton name="CONFIRM" action={onButtonClick}/>
    </div>
  )
}

DeleteMovie.propTypes = {
  toggleDeleteMovieWindow: PropTypes.func.isRequired,
  deleteMovie: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired
};

export default DeleteMovie;
