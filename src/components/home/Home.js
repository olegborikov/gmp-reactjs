import React from "react";
import classes from "./Home.module.css";
import GenresList from "../filter/GenresList";
import ParametersDropdown from "../sort/ParametersDropdown";
import Movies from "../movies/Movies";
import MoviesLabel from "../movies/label/MoviesLabel";
import {MOVIES} from "../../constants/Constant";

function Home() {
  return (
    <div className={classes.home}>
      <div>
        <GenresList/>
        <div className={classes.dropdown}>
          <ParametersDropdown/>
        </div>
      </div>
      <br/>
        <MoviesLabel moviesAmount={MOVIES.length}/>
      <br/>
        <Movies/>
    </div>
  );
}

export default Home
