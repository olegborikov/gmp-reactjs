import React from "react";
import classes from "./ParametersDropdown.module.css";
import {SORT_TYPES} from "../../../constants";
import {changeParameter} from "../../../redux/actions";
import {connect} from "react-redux";

function mapStateToProps(state) {
  return {
    currentParameter: state.currentParameter
  }
}

const mapDispatchToProps = dispatch => ({
  changeParameter: (parameter) => dispatch(changeParameter(parameter))
})

function ParametersDropdown(props) {
  return (
    <div className={classes.dropdown}>
      <select className={classes.select} onChange={(e) => props.changeParameter(e.target?.value)}>
        {
          SORT_TYPES.map(value => <option key={SORT_TYPES.indexOf(value)}
                                          selected={props.currentParameter === value}>{value}</option>)
        }
      </select>
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(ParametersDropdown)
