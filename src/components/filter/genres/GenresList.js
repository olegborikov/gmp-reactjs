import {GENRES} from "../../../constants/Constant";
import React from "react";
import GenreItem from "./item/GenreItem";
import classes from "./GenresList.module.css";
import PropTypes from "prop-types";

function GenresList(props) {
  return (
    <div className={classes.list}>
      <GenreItem name="All" filterByGenre={props.filterByGenre} currentGenre={props.currentGenre}/>
      {
        GENRES.map(genre => <GenreItem key={GENRES.indexOf(genre)} name={genre} filterByGenre={props.filterByGenre}
                                       currentGenre={props.currentGenre}/>)
      }
    </div>
  )
}

GenresList.propTypes = {
  currentGenre: PropTypes.string.isRequired,
  filterByGenre: PropTypes.func.isRequired
};

export default GenresList
