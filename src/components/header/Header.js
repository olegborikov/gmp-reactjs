import React from "react";
import PropTypes from "prop-types";
import SearchHeader from "./search/SearchHeader";
import MovieInfoHeader from "./info/MovieInfoHeader";

function Header(props) {
  return (
    props.isDescriptionVisible ?
      <MovieInfoHeader movie={props.movie} selectSearch={props.selectSearch}/>
      : <SearchHeader addMovie={props.addMovie} isDescriptionVisible={props.isDescriptionVisible}/>
  )
}

Header.propTypes = {
  addMovie: PropTypes.func.isRequired,
  isDescriptionVisible: PropTypes.bool.isRequired,
  selectSearch: PropTypes.func.isRequired,
  movie: PropTypes.object
};

export default Header
