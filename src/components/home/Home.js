import React, {Component} from "react";
import classes from "./Home.module.css";
import GenresList from "../filter/genres/GenresList";
import Movies from "../movies/Movies";
import MoviesLabel from "../movies/label/MoviesLabel";
import {SORT_TYPES} from "../../constants/Constant";
import SortOptions from "../sort/SortOptions";
import PropTypes from "prop-types";

class Home extends Component {
  state = {
    movies: this.props.movies,
    currentGenre: "All",
    isAskOrder: true
  }

  componentDidUpdate(prevProps) {
    if (prevProps.movies !== this.props.movies) {
      this.setState({
        movies: this.props.movies
      })
    }
  }

  sortByParameter = this.internalSortByParameter.bind(this);
  filterByGenre = this.internalFilterByGenre.bind(this);
  switchOrder = this.internalSwitchOrder.bind(this);

  internalSortByParameter(parameter) {
    let {movies} = this.state
    let sortedMovies
    if (parameter === SORT_TYPES[0]) {
      sortedMovies = movies.sort((a, b) => a.title.localeCompare(b.title))
    } else if (parameter === SORT_TYPES[1]) {
      sortedMovies = movies.sort((a, b) => a.releaseDate.localeCompare(b.releaseDate))
    } else if (parameter === SORT_TYPES[2]) {
      sortedMovies = movies.sort((a, b) => a.rating - b.rating)
    } else if (parameter === SORT_TYPES[3]) {
      sortedMovies = movies.sort((a, b) => a.runtime - b.runtime)
    }
    this.setState({
      movies: sortedMovies
    });
  }

  internalFilterByGenre(genre) {
    let movies = this.props.movies
    let filteredMovies = movies.filter(movie => genre === "All" ? true : movie.genres.indexOf(genre) > -1)
    this.setState({
      movies: filteredMovies,
      currentGenre: genre,
      isAskOrder: true
    });
  }

  internalSwitchOrder() {
    let {movies} = this.state
    let orderedMovies = movies.reverse()
    this.setState({
      movies: orderedMovies,
      isAskOrder: !this.state.isAskOrder
    });
  }

  render() {
    const {movies} = this.state
    return (
      <div className={classes.home}>
        <div className={classes.top}>
          <GenresList filterByGenre={this.filterByGenre} currentGenre={this.state.currentGenre}/>
          <SortOptions sortByParameter={this.sortByParameter} switchOrder={this.switchOrder}
                       isAskOrder={this.state.isAskOrder}/>
        </div>
        <br/>
        <MoviesLabel moviesAmount={movies.length}/>
        <br/>
        <Movies movies={movies} deleteMovie={this.props.deleteMovie} editMovie={this.props.editMovie}/>
      </div>
    );
  }
}

Home.propTypes = {
  movies: PropTypes.array.isRequired,
  deleteMovie: PropTypes.func.isRequired,
  editMovie: PropTypes.func.isRequired
};

export default Home
