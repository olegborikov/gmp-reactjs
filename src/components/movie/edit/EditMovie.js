import React from "react";
import AddMovie from "../add/AddMovie";
import PropTypes from "prop-types";

function EditMovie(props) {
  return (
    <AddMovie toggleAddMovieWindow={props.toggleEditMovieWindow}
              title={props.movie.title} releaseDate={props.movie.releaseDate} genres={props.movie.genres}/>
  )
}

EditMovie.propTypes = {
  toggleEditMovieWindow: PropTypes.func.isRequired,
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    genres: PropTypes.array.isRequired,
    releaseDate: PropTypes.string.isRequired
  })
};

export default EditMovie;
