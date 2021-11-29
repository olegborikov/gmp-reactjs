import React from "react";
import PropTypes from "prop-types";
import classes from "./MovieCard.module.css";
import Actions from "./actions/Actions";

function MovieCard({movie, deleteMovie, editMovie, showDescription}) {
  const {title, genres, releaseDate} = movie
  return (
    <div className={classes.card}>
      <div className={classes.actions}>
        <Actions movie={movie} deleteMovie={deleteMovie} editMovie={editMovie}/>
      </div>
      <div className={classes.text}>
        <div className={classes.title} onClick={(e) => showDescription(movie.id)}>
          {title}
        </div>
        <div className={classes.year}>
          {releaseDate}
        </div>
        <div className={classes.genres}>
          {genres?.join(", ")}
        </div>
      </div>
    </div>
  )
}

MovieCard.propTypes = {
  deleteMovie: PropTypes.func.isRequired,
  editMovie: PropTypes.func.isRequired,
  showDescription: PropTypes.func.isRequired,
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
}

export default MovieCard;
