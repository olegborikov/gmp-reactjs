import MovieCard from "./card/MovieCard";
import React, {useEffect} from "react";
import classes from "./Movies.module.css";
import PropTypes from "prop-types";
import {filterMovies} from "../../redux/actions";
import {connect} from "react-redux";

function mapStateToProps(state) {
  const {movies} = state
  return {
    movies: movies?.data,
    currentGenre: state.currentGenre,
    currentParameter: state.currentParameter,
    currentOrder: state.currentOrder,
  }
}

const mapDispatchToProps = dispatch => ({
  filterMovies: (genre, sortBy, sortOrder) => filterMovies(dispatch, genre, sortBy, sortOrder)
})

function Movies(props) {
  useEffect(() => {
    props.filterMovies(props.currentGenre, props.currentParameter, props.currentOrder)
  }, [props.currentGenre, props.currentParameter, props.currentOrder])

  return (
    <div className={classes.movies}>
      {
        props.movies.map(value => <MovieCard key={props.movies.indexOf(value)} movie={value}
                                             showDescription={props.showDescription}/>)
      }
    </div>
  )
}

Movies.propTypes = {
  showDescription: PropTypes.func.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(Movies)
