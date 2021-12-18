import React from "react";
import {Field} from "formik";
import classes from "./GenresField.module.css";

function GenresField(props) {
  return (
    <div className={classes.add}>
      <div className={classes.param}>GENRES</div>
      <Field
        disabled={true}
        className={classes.input}
        name="genres"
        value={props.value}
      />
    </div>
  )
}

export default GenresField
