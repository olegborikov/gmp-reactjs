import React from "react";
import SortLabel from "./label/SortLabel";
import ParametersDropdown from "./parameters/ParametersDropdown";
import classes from "./SortOptions.module.css";
import PropTypes from "prop-types";
import SortOrder from "./order/SortOrder";

function SortOptions(props) {
  return (
    <div className={classes.sort}>
      <SortLabel/>
      <ParametersDropdown sortByParameter={props.sortByParameter} currentParameter={props.currentParameter}/>
      <SortOrder switchOrder={props.switchOrder} isAskOrder={props.isAskOrder}/>
    </div>
  );
}

SortOptions.propTypes = {
  sortByParameter: PropTypes.func.isRequired,
  switchOrder: PropTypes.func.isRequired,
  isAskOrder: PropTypes.bool.isRequired,
  currentParameter: PropTypes.string.isRequired
};

export default SortOptions;
