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
    case ADD_MOVIE:
      const moviesAfterAdd = {
        ...state.movies,
        totalAmount: state.movies.totalAmount + 1,
        data: [...state.movies.data, action.payload]
      }
      return {...state, movies: moviesAfterAdd, error: null}
    case UPDATE_MOVIE:
      const moviesAfterUpdate = {
        ...state.movies,
        data: state.movies.data.map(currentMovie => currentMovie.id === action.payload.id ? action.payload : currentMovie)
      }
      return {...state, movies: moviesAfterUpdate, error: null}
    case DELETE_MOVIE:
      const moviesAfterDelete = {
        ...state.movies,
        totalAmount: state.movies.totalAmount - 1,
        data: state.movies.data.filter(movie => movie.id !== action.payload)
      }
      return {...state, movies: moviesAfterDelete, error: null}
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
    default:
      return state
  }
}
