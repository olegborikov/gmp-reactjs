import React from "react";
import PropTypes from "prop-types";
import SearchHeader from "./search/SearchHeader";
import MovieInfoHeader from "./info/MovieInfoHeader";

function Header(props) {
  return (
    props.isDescriptionVisible ?
      <MovieInfoHeader selectSearch={props.selectSearch}/>
      : <SearchHeader/>
  )
}

Header.propTypes = {
  isDescriptionVisible: PropTypes.bool.isRequired,
  selectSearch: PropTypes.func.isRequired
};

export default Header
