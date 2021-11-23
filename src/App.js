import "antd/dist/antd.css";
import React, {Component} from "react";
import ErrorBoundary from "./components/error/ErrorBoundary";
import "./App.css";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Footer from "./components/footer/Footer";
import {MOVIES} from "./constants/Constant";

class App extends Component {
  state = {
    movies: MOVIES
  }

  addMovie = this.internalAddMovie.bind(this);
  deleteMovie = this.internalDeleteMovie.bind(this);
  editMovie = this.internalEditMovie.bind(this);

  internalAddMovie(movie) {
    movie.id = this.state.movies.length + 1
    this.setState({
      movies: [...this.state.movies, movie]
    });
  }

  internalDeleteMovie(id) {
    const movies = this.state.movies
    const updatedMovies = movies.filter(movie => movie.id !== id)
    this.setState({
      movies: updatedMovies
    })
  }

  internalEditMovie(movie) {
    const movies = this.state.movies
    const updatedMovies = movies.filter(currentMovie => currentMovie.id !== movie.id)
    this.setState({
      movies: [...updatedMovies, movie]
    });
  }

  render() {
    return (
      <ErrorBoundary>
        <div className="app">
          <Header addMovie={this.addMovie}/>
          <Home movies={this.state.movies} deleteMovie={this.deleteMovie} editMovie={this.editMovie}/>
          <Footer/>
        </div>
      </ErrorBoundary>
    )
  }
}

export default App
