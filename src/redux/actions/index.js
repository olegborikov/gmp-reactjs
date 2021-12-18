import {
  SET_ERROR,
  SET_GENRE,
  SET_MOVIES,
  SET_ORDER,
  SET_PARAMETER,
  SET_SELECTED_MOVIE
} from "../../constants/actionTypes"
import {deleteMovieById, getMovieById, getMovies, postMovie, putMovie} from "../../api-service";

export const filterMovies = () => (dispatch, getState) => {
  const genre = getState().currentGenre
  const sortBy = getState().currentParameter
  const sortOrder = getState().currentOrder
  getMovies(genre === "All" ? "" : genre,
    sortBy.toLowerCase().replaceAll(" ", "_"),
    sortOrder.toLowerCase())
    .then(movies => {
      dispatch(setMovies(movies))
    })
    .catch(reason => {
      dispatch(setError(reason));
    })
}

export const findMovieById = (dispatch, id) => {
  getMovieById(id)
    .then(movie => {
      dispatch(setSelectedMovie(movie))
    })
    .catch(reason => {
      dispatch(setError(reason));
    })
}

export const addMovie = (dispatch, movie) => {
  postMovie(movie)
    .then(() => dispatch(filterMovies()))
    .catch(reason => {
      dispatch(setError(reason));
    })
}

export const updateMovie = (dispatch, movie) => {
  putMovie(movie)
    .then(() => dispatch(filterMovies()))
    .catch(reason => {
      dispatch(setError(reason));
    })
}

export const deleteMovie = (dispatch, id) => {
  deleteMovieById(id)
    .then(() => dispatch(filterMovies()))
    .catch(reason => {
      dispatch(setError(reason));
    })
}

export const setError = (reason) => ({
  type: SET_ERROR,
  error: reason
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
