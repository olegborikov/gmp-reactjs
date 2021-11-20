import React from 'react';
import classes from "./DescriptionArea.module.css";

function DescriptionArea(props) {
  return (
    <div className={classes.add}>
      <div className={classes.param}>DESCRIPTION</div>
      <textarea className={classes.input}/>
    </div>
  )
}

export default DescriptionArea;
