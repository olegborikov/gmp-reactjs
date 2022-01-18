import axios from "axios";

const BASE_URL = "http://localhost:4000/movies";
const SEPARATOR = "/";
const LIMIT_AND_SEARCH_BY = "?limit=100&searchBy=title";
export const DEFAULT_FILTER = BASE_URL + "?sortOrder=ASC&sortBy=VOTE_AVERAGE";

export const getMovies = (filter, sortBy, sortOrder, search) => {
  return axios.get(BASE_URL + LIMIT_AND_SEARCH_BY, {
    params: {filter, sortBy, sortOrder, search}
  }).then(response => response.data)
}

export const getMovieById = (id) => {
  return axios.get(BASE_URL + SEPARATOR + id)
    .then(response => response.data)
}

export const postMovie = (movie) => {
  return axios.post(BASE_URL + SEPARATOR, movie)
    .then(response => response.data)
}

export const putMovie = (movie) => {
  return axios.put(BASE_URL + SEPARATOR, movie)
    .then(response => response.data)
}

export const deleteMovieById = (id) => {
  return axios.delete(BASE_URL + SEPARATOR + id)
    .then(response => response.data)
}
