import React from "react";
import classes from "./SearchInput.module.css";
import PropTypes from "prop-types";

function SearchInput(props) {
  return (
    <input className={classes.input} value={props.search} onChange={(e) => props.setSearch(e.target.value)}/>
  );
}

SearchInput.propTypes = {
  search: PropTypes.string.isRequired,
  setSearch: PropTypes.func.isRequired
};

export default SearchInput;
