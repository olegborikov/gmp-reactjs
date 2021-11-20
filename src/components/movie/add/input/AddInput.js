import React from 'react';
import classes from "./AddInput.module.css";

function AddInput(props) {
  return (
    <div className={classes.add}>
      <div className={classes.param}>{props.param}</div>
      <input className={classes.input} value={props.value}/>
    </div>
  )
}

export default AddInput;
