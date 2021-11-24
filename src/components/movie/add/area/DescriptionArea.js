import React from "react";
import classes from "./DescriptionArea.module.css";
import PropTypes from "prop-types";

function DescriptionArea(props) {
  return (
    <div className={classes.area}>
      <div className={classes.param}>DESCRIPTION</div>
      <textarea className={classes.input} onChange={props.onChange} value={props.value}/>
    </div>
  )
}

DescriptionArea.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired
};

export default DescriptionArea;
