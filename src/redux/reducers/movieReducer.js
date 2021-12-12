import {ADD_MOVIE, DELETE_MOVIE, UPDATE_MOVIE} from "../../constants/actionTypes"

// TODO stub reducer for next module
export default (state = [], action) => {
  switch (action.type) {
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
