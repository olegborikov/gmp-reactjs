import React from 'react';
import classes from "./DeleteMovie.module.css";
import DeleteText from "./text/DeleteText";
import CloseButton from "../button/close/CloseButton";
import ConfirmButton from "../button/confirm/ConfirmButton";

function DeleteMovie(props) {
  return (
    <div className={classes.popup}>
      <CloseButton action={props.toggleDeleteMovieWindow}/>
      <DeleteText/>
      <ConfirmButton name="CONFIRM" action={props.toggleDeleteMovieWindow}/>
    </div>
  )
}

export default DeleteMovie;
