import React from "react";
import SearchHeader from "./search/SearchHeader";
import MovieInfoHeader from "./info/MovieInfoHeader";
import {useSearchParams} from "react-router-dom";

function Header() {
  const [searchParams] = useSearchParams();

  return (
    searchParams.get("movie") ?
      <MovieInfoHeader/>
      : <SearchHeader/>
  )
}

export default Header
