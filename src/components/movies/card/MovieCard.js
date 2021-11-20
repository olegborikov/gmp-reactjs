import React from "react";
import PropTypes from "prop-types";
import classes from "./MovieCard.module.css";
import ActionsButton from "./actions/ActionsButton";

function MovieCard({movie}) {
  const {title, genres, releaseYear} = movie
  return (
    <div className={classes.card}>
      <div className={classes.actions}>
        <ActionsButton movie={movie}/>
      </div>
      <div className={classes.text}>
        <div className={classes.title}>
          {title}
        </div>
        <div className={classes.year}>
          {releaseYear}
        </div>
        <div className={classes.genres}>
          {genres.join(', ')}
        </div>
      </div>
    </div>
  )
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    genres: PropTypes.array.isRequired,
    releaseYear: PropTypes.string.isRequired
  })
}
export default MovieCard;
