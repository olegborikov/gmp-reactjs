import MovieCard from "./card/MovieCard";
import React from "react";
import classes from "./Movies.module.css";
import PropTypes from "prop-types";

function Movies({movies, deleteMovie, editMovie, showDescription}) {
  return (
    <div className={classes.movies}>
      {
        movies.map(value => <MovieCard key={movies.indexOf(value)} movie={value} deleteMovie={deleteMovie}
                                       editMovie={editMovie} showDescription={showDescription}/>)
      }
    </div>
  )
}

Movies.propTypes = {
  movies: PropTypes.array.isRequired,
  deleteMovie: PropTypes.func.isRequired,
  editMovie: PropTypes.func.isRequired,
  showDescription: PropTypes.func.isRequired
};

export default Movies;
