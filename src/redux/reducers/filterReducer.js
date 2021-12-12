import {
  SET_ERROR,
  SET_GENRE,
  SET_MOVIES,
  SET_ORDER,
  SET_PARAMETER,
  SET_SELECTED_MOVIE
} from "../../constants/actionTypes"

export default (state = [], action) => {
  switch (action.type) {
    case SET_ERROR:
      return {...state, error: action.error}
    case SET_MOVIES:
      return {...state, movies: action.payload}
    case SET_SELECTED_MOVIE:
      return {...state, selectedMovie: action.payload}
    case SET_GENRE:
      return {...state, currentGenre: action.payload}
    case SET_PARAMETER:
      return {...state, currentParameter: action.payload}
    case SET_ORDER:
      return {...state, currentOrder: action.payload}
    default:
      return state
  }
}
