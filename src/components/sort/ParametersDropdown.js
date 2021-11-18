import React from 'react';
import SortLabel from "./label/SortLabel";
import {SORT_TYPES} from "../../constants/Constant";
import classes from "./ParametersDropdown.module.css";

function ParametersDropdown() {
  return (
    <div className={classes.dropdown}>
      <SortLabel/>
      <select className={classes.select}>
        {
          SORT_TYPES.map(value => <option key={SORT_TYPES.indexOf(value)}>{value}</option>)
        }
      </select>
    </div>
  );
}

export default ParametersDropdown;
