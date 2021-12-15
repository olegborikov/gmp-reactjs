import {
  ADD_MOVIE,
  DELETE_MOVIE,
  SET_ERROR,
  SET_GENRE,
  SET_MOVIES,
  SET_ORDER,
  SET_PARAMETER,
  SET_SELECTED_MOVIE,
  UPDATE_MOVIE
} from "../../constants/actionTypes"

export default (state = [], action) => {
  switch (action.type) {
    case SET_ERROR:
      return {...state, error: action.error}
    case SET_MOVIES:
      return {...state, movies: action.payload, error: null}
    case SET_SELECTED_MOVIE:
      return {...state, selectedMovie: action.payload, error: null}
    case SET_GENRE:
      return {...state, currentGenre: action.payload, error: null}
    case SET_PARAMETER:
      return {...state, currentParameter: action.payload, error: null}
    case SET_ORDER:
      return {...state, currentOrder: action.payload, error: null}
    // TODO stub reducer for next module
    case ADD_MOVIE:
      return state
    case UPDATE_MOVIE:
      return state
    case DELETE_MOVIE:
      return state
    default:
      return state
  }
}
