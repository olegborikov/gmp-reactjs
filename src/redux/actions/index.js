import {ADD_MOVIE, DELETE_MOVIE, SET_ERROR, SET_MOVIES, SET_ORDER, UPDATE_MOVIE} from "../../constants/actionTypes"
import {DEFAULT_FILTER, deleteMovieById, getMovies, postMovie, putMovie} from "../../api-service";
import {GENRES} from "../../constants";
import {all, call, put} from "redux-saga/effects";

export function* rootSaga() {
  yield all([
    moviesSaga(),
  ]);
}

function* moviesSaga() {
  yield all([
    fetchMovies()
  ]);
}

function* fetchMovies() {
  const response = yield call(fetch, DEFAULT_FILTER);
  const movies = yield response.json();
  yield put(setMovies(movies));
}

export const filterMovies = (sortBy, genre, search) => (dispatch, getState) => {
  const sortOrder = getState().currentOrder.toLowerCase()
  getMovies(GENRES.includes(genre?.toLowerCase()) ? genre : "",
    sortBy?.toLowerCase().replaceAll(" ", "_")
    , sortOrder, search)
    .then(movies => dispatch(setMovies(movies)))
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

export const changeOrder = order => ({
  type: SET_ORDER,
  payload: order
})
