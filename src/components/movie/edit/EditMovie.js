import React from "react";
import AddMovie from "../add/AddMovie";
import PropTypes from "prop-types";

function EditMovie(props) {
  return (
    <AddMovie toggleWindow={props.toggleWindow}
              id={props.movie.id}
              title={props.movie.title}
              release_date={props.movie.release_date}
              poster_path={props.movie.poster_path}
              vote_average={props.movie.vote_average}
              runtime={props.movie.runtime}
              overview={props.movie.overview}
              genres={props.movie.genres}/>
  )
}

EditMovie.propTypes = {
  toggleWindow: PropTypes.func.isRequired,
  movie: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    release_date: PropTypes.string,
    poster_path: PropTypes.string,
    vote_average: PropTypes.number,
    runtime: PropTypes.number,
    overview: PropTypes.string,
    genres: PropTypes.array
  })
};

export default EditMovie;
