import React from "react";
import AddMovie from "../add/AddMovie";
import PropTypes from "prop-types";

function EditMovie(props) {
  return (
    <AddMovie toggleAddMovieWindow={props.toggleEditMovieWindow}
              title={props.movie.title} releaseYear={props.movie.releaseYear} genres={props.movie.genres}/>
  )
}

EditMovie.propTypes = {
  toggleEditMovieWindow: PropTypes.func.isRequired,
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    genres: PropTypes.array.isRequired,
    releaseYear: PropTypes.string.isRequired
  })
};

export default EditMovie;
