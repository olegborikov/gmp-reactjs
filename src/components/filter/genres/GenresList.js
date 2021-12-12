import {GENRES} from "../../../constants";
import React from "react";
import GenreItem from "./item/GenreItem";
import classes from "./GenresList.module.css";

function GenresList() {
  return (
    <div className={classes.list}>
      <GenreItem name="All"/>
      {
        GENRES.map(genre => <GenreItem key={GENRES.indexOf(genre)} name={genre}/>)
      }
    </div>
  )
}

export default GenresList
