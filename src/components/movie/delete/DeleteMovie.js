import React from "react";
import classes from "./DeleteMovie.module.css";
import DeleteText from "./text/DeleteText";
import Button from "../../common/button/Button";
import PropTypes from "prop-types";

function DeleteMovie(props) {
  const onButtonClick = () => {
    props.toggleDeleteMovieWindow()
    props.deleteMovie(props.id)
  }

  return (
    <div className={classes.popup}>
      <Button action={props.toggleDeleteMovieWindow} name="X" color="grey"/>
      <DeleteText/>
      <Button name="CONFIRM" action={onButtonClick}/>
    </div>
  )
}

DeleteMovie.propTypes = {
  toggleDeleteMovieWindow: PropTypes.func.isRequired,
  deleteMovie: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired
};

export default DeleteMovie;
