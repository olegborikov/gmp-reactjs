import React, {useEffect, useState} from "react";
import classes from "./Home.module.css";
import GenresList from "../filter/genres/GenresList";
import Movies from "../movies/Movies";
import MoviesLabel from "../movies/label/MoviesLabel";
import {SORT_TYPES} from "../../constants/Constant";
import SortOptions from "../sort/SortOptions";
import PropTypes from "prop-types";

function Home(props) {
  const [movies, setMovies] = useState([]);
  const [currentGenre, setCurrentGenre] = useState("All");
  const [currentParameter, setCurrentParameter] = useState("TITLE");
  const [isAskOrder, setAskOrder] = useState(true);

  useEffect(() => {
    const filteredMovies = filterByGenre(props.movies, currentGenre)
    const sortedMovies = sortByParameter(filteredMovies, currentParameter)
    setMovies(sortedMovies)
  }, [props.movies])

  const sortByParameterAction = (parameter) => {
    let sortedMovies = sortByParameter(movies, parameter)
    setCurrentParameter(setCurrentParameter)
    setMovies(sortedMovies)
  }

  const sortByParameter = (movies, parameter) => {
    let sortedMovies = [...movies]
    if (parameter === SORT_TYPES[0]) {
      sortedMovies.sort((a, b) => a.title.localeCompare(b.title))
    } else if (parameter === SORT_TYPES[1]) {
      sortedMovies.sort((a, b) => a.releaseDate.localeCompare(b.releaseDate))
    } else if (parameter === SORT_TYPES[2]) {
      sortedMovies.sort((a, b) => a.rating - b.rating)
    } else if (parameter === SORT_TYPES[3]) {
      sortedMovies.sort((a, b) => a.runtime - b.runtime)
    }
    return sortedMovies;
  }

  const filterByGenreAction = (genre) => {
    const filteredMovies = filterByGenre(props.movies, genre)
    const sortedMovies = sortByParameter(filteredMovies, currentParameter)
    setMovies(sortedMovies)
    setCurrentGenre(genre)
    setAskOrder(true)
  }

  const filterByGenre = (movies, genre) => {
    return movies.filter(movie => genre === "All" ? true : movie.genres.indexOf(genre) > -1)
  }

  const switchOrderAction = () => {
    let orderedMovies = switchOrder(movies)
    setMovies(orderedMovies)
    setAskOrder(!isAskOrder)
  }

  const switchOrder = (movies) => {
    let orderedMovies = [...movies]
    return orderedMovies.reverse()
  }

  return (
    <div className={classes.home}>
      <div className={classes.top}>
        <GenresList filterByGenre={filterByGenreAction} currentGenre={currentGenre}/>
        <SortOptions sortByParameter={sortByParameterAction} switchOrder={switchOrderAction} isAskOrder={isAskOrder}
                     currentParameter={currentParameter}/>
      </div>
      <br/>
      <MoviesLabel moviesAmount={movies.length}/>
      <br/>
      <Movies movies={movies} deleteMovie={props.deleteMovie} editMovie={props.editMovie}
              showDescription={props.showDescription}/>
    </div>
  );
}

Home.propTypes = {
  movies: PropTypes.array.isRequired,
  deleteMovie: PropTypes.func.isRequired,
  editMovie: PropTypes.func.isRequired,
  showDescription: PropTypes.func.isRequired
};

export default Home
