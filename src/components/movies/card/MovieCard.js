import React from "react";
import PropTypes from "prop-types";
import classes from "./MovieCard.module.css";
import Actions from "./actions/Actions";
import {findMovieById} from "../../../redux/actions";
import {connect} from "react-redux";

const mapDispatchToProps = dispatch => ({
  findMovieById: (id) => findMovieById(dispatch, id)
})

function MovieCard(props) {
  const {title, genres, release_date} = props.movie
  const style = {
    backgroundImage: "url(" + props.movie.poster_path + ")",
    backgroundSize: "cover",
  }

  const clickHandler = () => {
    props.findMovieById(props.movie.id)
    props.showDescription()
  }

  return (
    <div className={classes.card} style={style}>
      <div className={classes.actions}>
        <Actions movie={props.movie}/>
      </div>
      <div className={classes.blank}/>
      <div className={classes.text}>
        <div className={classes.title} onClick={(e) => clickHandler()}>
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

export default connect(null, mapDispatchToProps)(MovieCard)