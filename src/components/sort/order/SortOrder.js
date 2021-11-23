import React from "react";
import PropTypes from "prop-types";
import classes from "./SortOrder.module.css";

function SortOrder(props) {
  return (
    <div className={classes.order} onClick={(e) => props.switchOrder()}>
      {props.isAskOrder ? '▲' : '▼'}
    </div>
  );
}

SortOrder.propTypes = {
  switchOrder: PropTypes.func.isRequired,
  isAskOrder: PropTypes.bool.isRequired
};

export default SortOrder;
