import React, {useEffect, useState} from "react";
import classes from "./MovieInfoHeader.module.css";
import Logo from "../../logo/Logo";
import {getMovieById} from "../../../api-service";
import {useHistory, useLocation, useParams} from "react-router-dom";
import {navigateToSearch} from "../../../common";

function MovieInfoHeader() {
  const history = useHistory();
  const [movie, setMovie] = useState()
  const {search} = useLocation();
  let searchParams = new URLSearchParams(search);
  const {searchQuery} = useParams();

  const hideDescription = () => {
    searchParams.delete("movie");
    navigateToSearch(history, searchQuery, searchParams)
  }

  useEffect(() => {
    getMovieById(searchParams.get("movie"))
      .then(movie => setMovie(movie))
      .catch(reason => hideDescription())
  },[])

  return (
    <div className={classes.header}>
      <div className={classes.top}>
        <Logo/>
        <div className={classes.loop} onClick={(e) => hideDescription()}>🔎</div>
      </div>
      <br/>
      <div className={classes.info}>
        <div className={classes.title}>
          {movie?.title?.toUpperCase()} ({movie?.vote_average})
        </div>
        <div className={classes.genres}>
          {movie?.genres?.join(", ")}
        </div>
        <div className={classes.date}>
          {movie?.release_date} {movie?.runtime} min
        </div>
        <div className={classes.overview}>
          {movie?.overview}
        </div>
      </div>
    </div>
  )
}

export default MovieInfoHeader
