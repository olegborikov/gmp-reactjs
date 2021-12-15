import React from "react";
import classes from "./DeleteMovie.module.css";
import DeleteText from "./text/DeleteText";
import Button from "../../common/button/Button";
import PropTypes from "prop-types";

function DeleteMovie(props) {
  const onButtonClick = () => {
    props.toggleWindow()
  }

  return (
    <div className={classes.popup}>
      <Button action={props.toggleWindow} name="X" color="grey"/>
      <DeleteText/>
      <Button name="CONFIRM" action={onButtonClick}/>
    </div>
  )
}

DeleteMovie.propTypes = {
  toggleWindow: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired
};

export default DeleteMovie;
