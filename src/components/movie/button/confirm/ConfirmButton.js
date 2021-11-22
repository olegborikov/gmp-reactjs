import React from "react";
import classes from "./ConfirmButton.module.css";
import PropTypes from "prop-types";

function ConfirmButton(props) {
  return (
    <div className={classes.confirm}>
      <button className={classes.button} onClick={(e) => props.action()}>{props.name}</button>
    </div>
  )
}

ConfirmButton.propTypes = {
  action: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired
};

export default ConfirmButton;
