import "antd/dist/antd.css";
import React, {useEffect, useState} from "react";
import ErrorBoundary from "./components/error/ErrorBoundary";
import "./App.css";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Footer from "./components/footer/Footer";
import {MOVIES} from "./constants/Constant";

function App() {
  const [movies, setMovies] = useState(MOVIES);
  const [selectedMovie, setSelectedMovie] = useState({});
  const [isDescriptionVisible, setDescriptionVisible] = useState(false);

  useEffect(() => {
    setMovies(MOVIES)
  }, [])

  const selectDescription = (id) => {
    setSelectedMovie(movies.find(movie => movie.id === id))
    setDescriptionVisible(true)
  }

  const selectSearch = () => {
    setDescriptionVisible(false)
  }

  const addMovie = (movie) => {
    movie.id = movies.length + 1
    setMovies([...movies, movie])
  }

  const deleteMovie = (id) => {
    const updatedMovies = movies.filter(movie => movie.id !== id)
    setMovies(updatedMovies)
  }

  const editMovie = (movie) => {
    const updatedMovies = movies.filter(currentMovie => currentMovie.id !== movie.id)
    setMovies([...updatedMovies, movie])
  }

  return (
    <ErrorBoundary>
      <div className="app">
        <Header addMovie={addMovie} isDescriptionVisible={isDescriptionVisible} selectSearch={selectSearch} movie={selectedMovie}/>
        <Home movies={movies} deleteMovie={deleteMovie} editMovie={editMovie} selectDescription={selectDescription}/>
        <Footer/>
      </div>
    </ErrorBoundary>
  )
}

export default App
