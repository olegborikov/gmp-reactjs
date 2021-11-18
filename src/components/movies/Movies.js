import MovieCard from "./card/MovieCard";
import {MOVIES} from "../../constants/Constant";
import React from 'react';
import classes from "./Movies.module.css";

function Movies() {
  return (
    <div className={classes.movies}>
      {
        MOVIES.map(value => <MovieCard key={MOVIES.indexOf(value)} title={value.title} genres={value.genres} releaseYear={value.releaseYear}/>)
      }
    </div>
  )
}

export default Movies;
