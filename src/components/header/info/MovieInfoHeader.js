import React from "react";
import PropTypes from "prop-types";
import classes from "./MovieInfoHeader.module.css";
import Logo from "../../logo/Logo";
import {connect} from "react-redux";

function mapStateToProps(state) {
  return {
    movie: state.selectedMovie
  }
}

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
          {props.movie?.title?.toUpperCase()} ({props.movie?.vote_average})
        </div>
        <div className={classes.genres}>
          {props.movie?.genres?.join(", ")}
        </div>
        <div className={classes.date}>
          {props.movie?.release_date} {props.movie?.runtime} min
        </div>
        <div className={classes.overview}>
          {props.movie?.overview}
        </div>
      </div>
    </div>
  )
}

MovieInfoHeader.propTypes = {
  selectSearch: PropTypes.func.isRequired,
  movie: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    release_date: PropTypes.string.isRequired,
    genres: PropTypes.array.isRequired
  })
};

export default connect(mapStateToProps)(MovieInfoHeader)
