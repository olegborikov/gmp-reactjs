import React, {useState} from "react";
import SearchInput from "./input/SearchInput";
import Button from "../common/button/Button";
import classes from "./Search.module.css";
import {useNavigate, useParams, useSearchParams} from "react-router-dom";

function Search() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const {searchQuery} = useParams();
  const [search, setSearch] = useState(searchQuery ? searchQuery : "")
  return (
    <div className={classes.search}>
      <SearchInput search={search} setSearch={setSearch}/>
      <Button name="SEARCH" size="large" action={(e) => navigate(`/search/${search}?${searchParams.toString()}`)}/>
    </div>
  );
}

export default Search
