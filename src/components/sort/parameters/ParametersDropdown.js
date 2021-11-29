import React from "react";
import classes from "./ParametersDropdown.module.css";
import {SORT_TYPES} from "../../../constants/Constant";
import PropTypes from "prop-types";

function ParametersDropdown(props) {
  return (
    <div className={classes.dropdown}>
      <select className={classes.select} onChange={(e) => props.sortByParameter(e.target?.value)}>
        {
          SORT_TYPES.map(value => <option key={SORT_TYPES.indexOf(value)}
                                          selected={props.currentParameter === value}>{value}</option>)
        }
      </select>
    </div>
  );
}

ParametersDropdown.propTypes = {
  sortByParameter: PropTypes.func.isRequired
};

export default ParametersDropdown;
