import MovieCard from "./card/MovieCard";
import React from "react";
import classes from "./Movies.module.css";
import PropTypes from "prop-types";

function Movies({movies}) {
  return (
    <div className={classes.movies}>
      {
        movies.map(value => <MovieCard key={movies.indexOf(value)} movie={value}/>)
      }
    </div>
  )
}

Movies.propTypes = {
  movies: PropTypes.array.isRequired
};

export default Movies;
