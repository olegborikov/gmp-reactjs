import React from "react";
import PropTypes from "prop-types";
import classes from "./MovieCard.module.css";
import Actions from "./actions/Actions";

function MovieCard(props) {
  const {title, genres, release_date} = props.movie
  const style = {
    backgroundImage: "url(" + props.movie.poster_path + ")",
    backgroundSize: "cover",
  }

  return (
    <div className={classes.card} style={style}>
      <div className={classes.actions}>
        <Actions movie={props.movie}/>
      </div>
      <div className={classes.blank}/>
      <div className={classes.text}>
        <div className={classes.title} onClick={props.showDescription}>
          {title}
        </div>
        <div className={classes.year}>
          {release_date}
        </div>
        <div>
          {genres?.join(", ")}
        </div>
      </div>
    </div>
  )
}

MovieCard.propTypes = {
  showDescription: PropTypes.func.isRequired,
  movie: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    release_date: PropTypes.string.isRequired,
    genres: PropTypes.array.isRequired
  })
}

export default MovieCard
