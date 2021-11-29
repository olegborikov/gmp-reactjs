import React from "react";
import classes from "./SearchHeader.module.css";
import PropTypes from "prop-types";
import Logo from "../../logo/Logo";
import AddAction from "./action/AddAction";
import SearchLabel from "../../search/label/SearchLabel";
import Search from "../../search/Search";

function SearchHeader(props) {
  return (
    <div className={classes.header}>
      <div className={classes.top}>
        <Logo/>
        <AddAction addMovie={props.addMovie}/>
      </div>
      <br/>
      <br/>
      <div className={classes.search}>
        <SearchLabel/>
        <br/>
        <Search/>
      </div>
    </div>
  )
}

SearchHeader.propTypes = {
  addMovie: PropTypes.func.isRequired,
  isDescriptionVisible: PropTypes.bool.isRequired
};

export default SearchHeader
