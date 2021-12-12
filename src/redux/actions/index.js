import {
  ADD_MOVIE,
  DELETE_MOVIE,
  SET_GENRE,
  SET_MOVIES,
  SET_ORDER,
  SET_PARAMETER,
  SET_SELECTED_MOVIE,
  UPDATE_MOVIE
} from "../../constants/actionTypes"
import {getMovieById, getMovies} from "../../api-service";

// TODO stub action for next module
export const addMovie = movie => ({
  type: ADD_MOVIE,
  payload: movie
})

// TODO stub action for next module
export const updateMovie = movie => ({
  type: UPDATE_MOVIE,
  payload: movie
})

// TODO stub action for next module
export const deleteMovie = id => ({
  type: DELETE_MOVIE,
  payload: id
})

export const filterMovies = (dispatch, genre, sortBy, sortOrder) => {
  getMovies(genre === "All" ? "" : genre,
    sortBy.toLowerCase().replaceAll(" ", "_"),
    sortOrder.toLowerCase())
    .then(movies => {
      dispatch(setMovies(movies))
    })
}

export const findMovieById = (dispatch, id) => {
  getMovieById(id)
    .then(movie => {
      dispatch(setSelectedMovie(movie))
    })
}

export const setMovies = (movies) => ({
  type: SET_MOVIES,
  payload: movies
})

export const setSelectedMovie = (movie) => ({
  type: SET_SELECTED_MOVIE,
  payload: movie
})

export const changeGenre = genre => ({
  type: SET_GENRE,
  payload: genre
})

export const changeParameter = parameter => ({
  type: SET_PARAMETER,
  payload: parameter
})

export const changeOrder = order => ({
  type: SET_ORDER,
  payload: order
})
