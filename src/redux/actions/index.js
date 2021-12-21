import {
  ADD_MOVIE, DELETE_MOVIE,
  SET_ERROR,
  SET_GENRE,
  SET_MOVIES,
  SET_ORDER,
  SET_PARAMETER,
  SET_SELECTED_MOVIE, UPDATE_MOVIE
} from "../../constants/actionTypes"
import {deleteMovieById, getMovieById, getMovies, postMovie, putMovie} from "../../api-service";

export const filterMovies = () => (dispatch, getState) => {
  const genre = getState().currentGenre === "All" ? "" : getState().currentGenre
  const sortBy = getState().currentParameter.toLowerCase().replaceAll(" ", "_")
  const sortOrder = getState().currentOrder.toLowerCase()
  getMovies(genre, sortBy, sortOrder)
    .then(movies => dispatch(setMovies(movies)))
    .catch(reason => dispatch(setError(reason)))
}

export const findMovieById = (dispatch, id) => {
  getMovieById(id)
    .then(movie => dispatch(setSelectedMovie(movie)))
    .catch(reason => dispatch(setError(reason)))
}

export const addMovie = (dispatch, movie) => {
  postMovie(movie)
    .then((data) => dispatch(addMovieAction(data)))
    .catch(reason => dispatch(setError(reason)))
}

export const updateMovie = (dispatch, movie) => {
  putMovie(movie)
    .then((data) => dispatch(updateMovieAction(data)))
    .catch(reason => dispatch(setError(reason)))
}

export const deleteMovie = (dispatch, id) => {
  deleteMovieById(id)
    .then(() => dispatch(deleteMovieAction(id)))
    .catch(reason => dispatch(setError(reason)))
}

export const setError = (reason) => ({
  type: SET_ERROR,
  error: reason
})

export const addMovieAction = movie => ({
  type: ADD_MOVIE,
  payload: movie
})

export const updateMovieAction = movie => ({
  type: UPDATE_MOVIE,
  payload: movie
})

export const deleteMovieAction = id => ({
  type: DELETE_MOVIE,
  payload: id
})

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
