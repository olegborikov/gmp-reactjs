import MovieCard from "./card/MovieCard";
import React, {useEffect} from "react";
import classes from "./Movies.module.css";
import {filterMovies} from "../../redux/actions";
import {connect} from "react-redux";
import {useHistory, useLocation, useParams} from "react-router-dom";
import {navigateToSearch} from "../../common";

function Movies(props) {
  const history = useHistory();
  const {searchQuery} = useParams();
  const {search} = useLocation();
  let searchParams = new URLSearchParams(search);

  const showDescription = (id) => {
    searchParams.set("movie", id)
    navigateToSearch(history, searchQuery, searchParams)
  }

  useEffect(() => {
    props.filterMovies(searchParams.get("sortBy"), searchParams.get("genre"), searchQuery)
  }, [searchParams.get("sortBy"), searchParams.get("genre"), searchQuery, props.currentOrder])

  return (
    <div className={classes.movies}>
      {
        props.movies.map(value => <MovieCard key={value.id} movie={value}
                                             showDescription={() => showDescription(value.id)}/>)
      }
    </div>
  )
}

function mapStateToProps(state) {
  const {movies} = state
  return {
    movies: movies?.data,
    currentOrder: state.currentOrder
  }
}

const mapDispatchToProps = dispatch => ({
  filterMovies: (sortBy, genre, search) => dispatch(filterMovies(sortBy, genre, search))
})

export default connect(mapStateToProps, mapDispatchToProps)(Movies)
