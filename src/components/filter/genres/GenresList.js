import {GENRES} from "../../../constants";
import React, {useEffect} from "react";
import GenreItem from "./item/GenreItem";
import classes from "./GenresList.module.css";
import {useNavigate, useParams, useSearchParams} from "react-router-dom";

function GenresList() {
  const navigate = useNavigate();
  let [searchParams] = useSearchParams();
  const {searchQuery} = useParams();
  const genre = searchParams.get("genre")?.toLowerCase()

  const changeGenre = (newGenre) => {
    searchParams.set("genre", newGenre);
    navigate(`/search${searchQuery ? "/" + searchQuery : ""}?${searchParams.toString()}`)
  }

  useEffect(() => {
    if (genre !== "all" && !GENRES.includes(genre)) {
      changeGenre("all")
    }
  })

  return (
    <div className={classes.list}>
      <GenreItem name="all" current={genre} changeGenre={changeGenre}/>
      {
        GENRES.map(g => <GenreItem key={GENRES.indexOf(g)} name={g} current={genre} changeGenre={changeGenre}/>)
      }
    </div>
  )
}

export default GenresList
