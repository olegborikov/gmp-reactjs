import axios from "axios";

const baseUrl = "http://localhost:4000";
const moviesEndpoint = "/movies";

export const getMovies = (filter, sortBy, sortOrder) => {
  return axios.get(baseUrl + moviesEndpoint, {
    params: {filter, sortBy, sortOrder}
  }).then(response => response.data)
}

export const getMovieById = (id) => {
  return axios.get(baseUrl + moviesEndpoint + "/" + id)
    .then(response => response.data)
}
