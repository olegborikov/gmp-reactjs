import React from "react";
import {Field} from "formik";
import classes from "./InputField.module.css";
import PropTypes from "prop-types";

function InputField(props) {
  return (
    <div className={classes.add}>
      <div className={classes.param}>{props.label}</div>
      <Field
        autoComplete="off"
        as={props.as ? props.as : null}
        type={props.type ? props.type : null}
        className={classes.input}
        name={props.name}
        validate={props.validate}
      />
      {props.error && props.touched && <div className={classes.error}>{props.error}</div>}
    </div>
  )
}

InputField.propTypes = {
  as: PropTypes.string,
  type: PropTypes.string,
  label: PropTypes.string.isRequired,
  validate: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired
};

export default InputField
