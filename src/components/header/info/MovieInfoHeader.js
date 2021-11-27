import React from "react";
import PropTypes from "prop-types";
import classes from "./MovieInfoHeader.module.css";
import Logo from "../../logo/Logo";

function MovieInfoHeader(props) {
  return (
    <div className={classes.header}>
      <div className={classes.top}>
        <Logo/>
        <div className={classes.loop} onClick={(e) => props.selectSearch()}>🔎</div>
      </div>
      <br/>
      <div className={classes.info}>
        <div className={classes.title}>
          {props.movie.title?.toUpperCase()} ({props.movie.rating})
        </div>
        <div className={classes.genres}>
          {props.movie.genres?.join(", ")}
        </div>
        <div className={classes.date}>
          {props.movie.releaseDate} {props.movie.runtime} min
        </div>
        <div className={classes.overview}>
          {props.movie.overview}
        </div>
      </div>


     {/* <div className={classes.text}>
        <div className={classes.title} onClick={(e) => selectDescription(movie.id)}>
          {title}
        </div>
        <div className={classes.year}>
          {releaseDate}
        </div>
        <div className={classes.genres}>
          {genres.join(", ")}
        </div>
      </div>*/}
    </div>
  )
}

MovieInfoHeader.propTypes = {
  selectSearch:PropTypes.func.isRequired,
  movie: PropTypes.object.isRequired
};

export default MovieInfoHeader
