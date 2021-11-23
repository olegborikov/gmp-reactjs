import React from "react";
import classes from "./Input.module.css";
import PropTypes from "prop-types";

function Input(props) {
  return (
    <div className={classes.add}>
      <div className={classes.param}>{props.param}</div>
      <input className={classes.input} value={props.value} onChange={props.onChange}
             disabled={props.disabled}/>
    </div>
  )
}

Input.propTypes = {
  param: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  disabled: PropTypes.bool
};

export default Input;
