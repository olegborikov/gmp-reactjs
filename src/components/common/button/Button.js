import React from "react";
import classes from "./Button.module.css";
import PropTypes from "prop-types";

function Button(props) {
  return (
    <div className={classes.confirm}>
      <button className={`${(props.size === 'large' ? classes.large : classes.small)} 
              ${(props.color === 'black' ? classes.black :
                props.color === 'grey' ? classes.grey :
                props.color === 'grey-red' ? classes.greyred : classes.red)}`}
              onClick={(e) => props.action()}>{props.name}</button>
    </div>
  )
}

Button.propTypes = {
  action: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  size: PropTypes.string,
  color: PropTypes.string
};

export default Button;
