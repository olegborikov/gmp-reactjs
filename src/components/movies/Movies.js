import MovieCard from "./card/MovieCard";
import React from "react";
import classes from "./Movies.module.css";
import PropTypes from "prop-types";

function Movies({movies, deleteMovie, editMovie}) {
  return (
    <div className={classes.movies}>
      {
        movies.map(value => <MovieCard key={movies.indexOf(value)} movie={value}
                                       deleteMovie={deleteMovie} editMovie={editMovie}/>)
      }
    </div>
  )
}

Movies.propTypes = {
  movies: PropTypes.array.isRequired,
  deleteMovie: PropTypes.func.isRequired,
  editMovie: PropTypes.func.isRequired
};

export default Movies;
