import {GENRES} from "../../constants/Constant";
import React from 'react';
import GenreItem from "./genreitem/GenreItem";
import classes from "./GenresList.module.css";

function GenresList() {
  return (
    <div className={classes.list}>
      {
        GENRES.map(genre => <GenreItem key={GENRES.indexOf(genre)} name={genre}/>)
      }
    </div>
  )
}

export default GenresList
