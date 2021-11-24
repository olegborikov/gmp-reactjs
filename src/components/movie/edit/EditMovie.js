import React from "react";
import AddMovie from "../add/AddMovie";
import PropTypes from "prop-types";

function EditMovie(props) {
  return (
    <AddMovie toggleAddMovieWindow={props.toggleEditMovieWindow}
              action={props.editMovie}
              id={props.movie.id}
              title={props.movie.title}
              releaseDate={props.movie.releaseDate}
              movieUrl={props.movie.movieUrl}
              rating={props.movie.rating}
              runtime={props.movie.runtime}
              overview={props.movie.overview}
              genres={props.movie.genres}/>
  )
}

EditMovie.propTypes = {
  toggleEditMovieWindow: PropTypes.func.isRequired,
  editMovie: PropTypes.func.isRequired,
  movie: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    releaseDate: PropTypes.string.isRequired,
    movieUrl: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    runtime: PropTypes.number.isRequired,
    overview: PropTypes.string.isRequired,
    genres: PropTypes.array.isRequired
  })
};

export default EditMovie;
