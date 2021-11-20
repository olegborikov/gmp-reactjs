import React from 'react';
import classes from "./CloseButton.module.css";

function CloseButton(props) {
  return (
    <div className={classes.close}>
      <button className={classes.button} onClick={(e) => props.action()}>X</button>
    </div>
  )
}

export default CloseButton;
