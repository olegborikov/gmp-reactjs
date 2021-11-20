import React from 'react';
import classes from "./ResetButton.module.css";

function ResetButton(props) {
  return (
    <div className={classes.reset}>
      <button className={classes.button} onClick={(e) => props.action()}>RESET</button>
    </div>
  )
}

export default ResetButton;
