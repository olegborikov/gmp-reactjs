import React from "react";
import classes from "./ResetButton.module.css";
import PropTypes from "prop-types";

function ResetButton(props) {
  return (
    <div className={classes.reset}>
      <button className={classes.button} onClick={(e) => props.action()}>RESET</button>
    </div>
  )
}

ResetButton.propTypes = {
  action: PropTypes.func.isRequired
};

export default ResetButton;
