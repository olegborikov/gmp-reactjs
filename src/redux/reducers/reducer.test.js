import reducer from "./reducer"
import {ADD_MOVIE, DELETE_MOVIE, SET_ERROR, SET_MOVIES, SET_ORDER, UPDATE_MOVIE} from "../../constants/actionTypes"

it("set error test", () => {
  const error = "Error description"
  const movies = {
    totalAmount: 1,
    data: [{id: 1, title: "movie name 1"}]
  }
  const state = {
    movies: movies
  }
  const action = {
    type: SET_ERROR,
    error: error
  }
  const expected = {
    movies: movies,
    error: error
  }

  const actual = reducer(state, action)

  expect(actual)
    .toEqual(expected)
})

it("add movie test", () => {
  const state = {
    movies: {
      totalAmount: 1,
      data: [{id: 1, title: "movie name 1"}]
    }
  }
  const action = {
    type: ADD_MOVIE,
    payload: {id: 2, title: "movie name 2"},
  }
  const expected = {
    movies: {
      totalAmount: 2,
      data: [{id: 1, title: "movie name 1"}, {id: 2, title: "movie name 2"}]
    },
    error: null
  }

  const actual = reducer(state, action)

  expect(actual)
    .toEqual(expected)
})

it("update movie test", () => {
  const state = {
    movies: {
      totalAmount: 2,
      data: [{id: 1, title: "movie name 1"}, {id: 2, title: "movie name 2"}]
    }
  }
  const action = {
    type: UPDATE_MOVIE,
    payload: {id: 2, title: "updated movie name 2"},
  }
  const expected = {
    movies: {
      totalAmount: 2,
      data: [{id: 1, title: "movie name 1"}, {id: 2, title: "updated movie name 2"}]
    },
    error: null
  }

  const actual = reducer(state, action)

  expect(actual)
    .toEqual(expected)
})

it("delete movie test", () => {
  const state = {
    movies: {
      totalAmount: 2,
      data: [{id: 1, title: "movie name 1"}, {id: 2, title: "movie name 2"}]
    }
  }
  const action = {
    type: DELETE_MOVIE,
    payload: 2
  }
  const expected = {
    movies: {
      totalAmount: 1,
      data: [{id: 1, title: "movie name 1"}]
    },
    error: null
  }

  const actual = reducer(state, action)

  expect(actual)
    .toEqual(expected)
})

it("set movies test", () => {
  const movies = {
    totalAmount: 1,
    data: [{id: 1, title: "movie name 1"}]
  }
  const state = {}
  const action = {
    type: SET_MOVIES,
    payload: movies
  }
  const expected = {
    movies: movies,
    error: null
  }

  const actual = reducer(state, action)

  expect(actual)
    .toEqual(expected)
})

it("set order test", () => {
  const order = "ASC"
  const state = {}
  const action = {
    type: SET_ORDER,
    payload: order
  }
  const expected = {
    currentOrder: order,
    error: null
  }

  const actual = reducer(state, action)

  expect(actual)
    .toEqual(expected)
})

it("default test", () => {
  const state = {
    movies: {
      totalAmount: 2,
      data: [{id: 1, title: "movie name 1"}, {id: 2, title: "movie name 2"}]
    }
  }
  const action = {
    type: ""
  }

  const actual = reducer(state, action)

  expect(actual)
    .toEqual(state)
})
