import {GENRES} from "../../../constants";
import React, {useEffect} from "react";
import GenreItem from "./item/GenreItem";
import classes from "./GenresList.module.css";
import {useHistory, useLocation, useParams} from "react-router-dom";
import {navigateToSearch} from "../../../common";

function GenresList() {
  const history = useHistory();
  const {search} = useLocation();
  let searchParams = new URLSearchParams(search);
  const {searchQuery} = useParams();
  const genre = searchParams.get("genre")?.toLowerCase()

  const changeGenre = (newGenre) => {
    searchParams.set("genre", newGenre);
    navigateToSearch(history, searchQuery, searchParams)
  }

  useEffect(() => {
    if (genre !== "all" && !GENRES.includes(genre)) {
      changeGenre("all")
    }
  })

  return (
    <div className={classes.list}>
      <GenreItem name="all" isActive={genre === "all"} changeGenre={() => changeGenre("all")}/>
      {
        GENRES.map(g => <GenreItem key={g} name={g} isActive={genre === g} changeGenre={() => changeGenre(g)}/>)
      }
    </div>
  )
}

export default GenresList
