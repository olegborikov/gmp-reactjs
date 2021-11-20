import React from 'react';
import classes from "./ConfirmButton.module.css";

function ConfirmButton(props) {
  return (
    <div className={classes.confirm}>
      <button className={classes.button} onClick={(e) => props.action()}>{props.name}</button>
    </div>
  )
}

export default ConfirmButton;
