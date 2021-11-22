import React, {Component} from "react";
import classes from "./Home.module.css";
import GenresList from "../filter/GenresList";
import ParametersDropdown from "../sort/ParametersDropdown";
import Movies from "../movies/Movies";
import MoviesLabel from "../movies/label/MoviesLabel";
import {MOVIES, SORT_TYPES} from "../../constants/Constant";

class Home extends Component {
  state = {
    movies: MOVIES,
    currentGenre: "All"
  }

  sortByParameter = this.internalSortByParameter.bind(this);
  filterByGenre = this.internalFilterByGenre.bind(this);

  internalSortByParameter(parameter) {
    let {movies} = this.state
    if (parameter === SORT_TYPES[0]) {
      movies = movies.sort((a, b) => b.releaseYear.localeCompare(a.releaseYear))
    } else if (parameter === SORT_TYPES[1]) {
      movies = movies.sort((a, b) => a.title.localeCompare(b.title))
    }
    this.setState({
      movies: movies
    });
  }

  internalFilterByGenre(genre) {
    let movies = MOVIES.filter(movie => genre === "All" ? true : movie.genres.indexOf(genre) > -1)
    this.setState({
      movies: movies,
      currentGenre: genre
    });
  }

  render() {
    const {movies} = this.state
    return (
      <div className={classes.home}>
        <div className={classes.top}>
          <GenresList filterByGenre={this.filterByGenre} currentGenre={this.state.currentGenre}/>
          <ParametersDropdown sortByParameter={this.sortByParameter}/>
        </div>
        <br/>
        <MoviesLabel moviesAmount={movies.length}/>
        <br/>
        <Movies movies={movies}/>
      </div>
    );
  }
}

export default Home
