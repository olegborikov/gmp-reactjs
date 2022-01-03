import MovieCard from "./card/MovieCard";
import React, {useEffect} from "react";
import classes from "./Movies.module.css";
import {filterMovies} from "../../redux/actions";
import {connect} from "react-redux";
import {useNavigate, useParams, useSearchParams} from "react-router-dom";

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

function Movies(props) {
  const navigate = useNavigate();
  const {searchQuery} = useParams();
  let [searchParams] = useSearchParams();

  const showDescription = (id) => {
    searchParams.set("movie", id);
    navigate(`/search${searchQuery ? "/" + searchQuery : ""}?${searchParams.toString()}`)
  }

  useEffect(() => {
    props.filterMovies(searchParams.get("sortBy"), searchParams.get("genre"), searchQuery)
  }, [searchParams.get("sortBy"), searchParams.get("genre"), searchQuery, props.currentOrder])

  return (
    <div className={classes.movies}>
      {
        props.movies.map(value => <MovieCard key={props.movies.indexOf(value)} movie={value}
                                             showDescription={showDescription}/>)
      }
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(Movies)
