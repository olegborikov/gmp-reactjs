import React from "react";
import classes from "./Input.module.css";
import PropTypes from "prop-types";

function Input(props) {
  return (
    <div className={classes.add}>
      <div className={classes.param}>{props.param}</div>
      <input className={classes.input} value={props.value}/>
    </div>
  )
}

Input.propTypes = {
  param: PropTypes.string.isRequired
};

export default Input;
