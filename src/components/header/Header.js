import React from "react";
import SearchHeader from "./search/SearchHeader";
import MovieInfoHeader from "./info/MovieInfoHeader";
import {useLocation} from "react-router-dom";

function Header() {
  const {search} = useLocation();
  const params = new URLSearchParams(search);

  return (
    params.get("movie") ? <MovieInfoHeader/> : <SearchHeader/>
  )
}

export default Header;
