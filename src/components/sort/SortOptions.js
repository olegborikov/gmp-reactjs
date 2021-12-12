import React from "react";
import SortLabel from "./label/SortLabel";
import ParametersDropdown from "./parameters/ParametersDropdown";
import classes from "./SortOptions.module.css";
import SortOrder from "./order/SortOrder";

function SortOptions() {
  return (
    <div className={classes.sort}>
      <SortLabel/>
      <ParametersDropdown/>
      <SortOrder/>
    </div>
  );
}

export default SortOptions
