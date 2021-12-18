import axios from "axios";

const BASE_URL = "http://localhost:4000/movies";
const SEPARATOR = "/";

export const getMovies = (filter, sortBy, sortOrder) => {
  return axios.get(BASE_URL, {
    params: {filter, sortBy, sortOrder}
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
