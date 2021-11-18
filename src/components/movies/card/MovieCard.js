import React from "react";
import PropTypes from "prop-types";
import classes from "./MovieCard.module.css";

function MovieCard({title, genres, releaseYear}) {
  return (
    <div className={classes.card}>
      <p>{title}</p>
      <p>{genres.join(' ')}</p>
      <p>{releaseYear}</p>
    </div>
  )
}

MovieCard.propTypes = {
  title: PropTypes.string.isRequired,
  genres: PropTypes.array.isRequired,
  releaseYear: PropTypes.string.isRequired
}
export default MovieCard;
