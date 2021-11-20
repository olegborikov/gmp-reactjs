import MovieCard from "./card/MovieCard";
import React from 'react';
import classes from "./Movies.module.css";

function Movies({movies}) {
  return (
    <div className={classes.movies}>
      {
        movies.map(value => <MovieCard key={movies.indexOf(value)} movie={value}/>)
      }
    </div>
  )
}

export default Movies;
