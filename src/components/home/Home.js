import React, {useEffect, useState} from "react";
import classes from "./Home.module.css";
import GenresList from "../filter/genres/GenresList";
import Movies from "../movies/Movies";
import MoviesLabel from "../movies/label/MoviesLabel";
import {SORT_TYPES} from "../../constants/Constant";
import SortOptions from "../sort/SortOptions";
import PropTypes from "prop-types";

function Home(props) {
  const [movies, setMovies] = useState(props.movies);
  const [currentGenre, setCurrentGenre] = useState("All");
  const [isAskOrder, setAskOrder] = useState(true);

  useEffect(() => {
    setMovies(props.movies)
  }, [props.movies])

  const sortByParameter = (parameter) => {
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
    setMovies(sortedMovies)
  }

  const filterByGenre = (genre) => {
    const filteredMovies = props.movies.filter(movie => genre === "All" ? true : movie.genres.indexOf(genre) > -1)
    setMovies(filteredMovies)
    setCurrentGenre(genre)
    setAskOrder(true)
  }

  const switchOrder = () => {
    let orderedMovies = [...movies]
    orderedMovies.reverse()
    setMovies(orderedMovies)
    setAskOrder(!isAskOrder)
  }

  return (
    <div className={classes.home}>
      <div className={classes.top}>
        <GenresList filterByGenre={filterByGenre} currentGenre={currentGenre}/>
        <SortOptions sortByParameter={sortByParameter} switchOrder={switchOrder} isAskOrder={isAskOrder}/>
      </div>
      <br/>
      <MoviesLabel moviesAmount={movies.length}/>
      <br/>
      <Movies movies={movies} deleteMovie={props.deleteMovie} editMovie={props.editMovie}
              selectDescription={props.selectDescription}/>
    </div>
  );
}

Home.propTypes = {
  movies: PropTypes.array.isRequired,
  deleteMovie: PropTypes.func.isRequired,
  editMovie: PropTypes.func.isRequired,
  selectDescription: PropTypes.func.isRequired
};

export default Home
