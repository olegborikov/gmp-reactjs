import React from "react";
import classes from "./CloseButton.module.css";
import PropTypes from "prop-types";

function CloseButton(props) {
  return (
    <div className={classes.close}>
      <button className={classes.button} onClick={(e) => props.action()}>X</button>
    </div>
  )
}

CloseButton.propTypes = {
  action: PropTypes.func.isRequired
};

export default CloseButton;
