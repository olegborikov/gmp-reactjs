import React from "react";
import SortLabel from "./label/SortLabel";
import classes from "./ParametersDropdown.module.css";
import {SORT_TYPES} from "../../constants/Constant";
import PropTypes from "prop-types";

function ParametersDropdown(props) {
  return (
    <div className={classes.dropdown}>
      <SortLabel/>
      <select className={classes.select} onChange={(e) => props.sortByParameter(e.target?.value)}>
        <option disabled selected>NONE</option>
        {
          SORT_TYPES.map(value => <option key={SORT_TYPES.indexOf(value)}>{value}</option>)
        }
      </select>
    </div>
  );
}

ParametersDropdown.propTypes = {
  sortByParameter: PropTypes.func.isRequired
};

export default ParametersDropdown;
