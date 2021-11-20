import {GENRES} from "../../constants/Constant";
import React from 'react';
import GenreItem from "./genreitem/GenreItem";
import classes from "./GenresList.module.css";

function GenresList(props) {
  return (
    <div className={classes.list}>
      <GenreItem name='All' filterByGenre={props.filterByGenre}/>
      {
        GENRES.map(genre => <GenreItem key={GENRES.indexOf(genre)} name={genre} filterByGenre={props.filterByGenre}/>)
      }
    </div>
  )
}

export default GenresList
