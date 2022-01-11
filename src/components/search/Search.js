import React, {useState} from "react";
import SearchInput from "./input/SearchInput";
import Button from "../common/button/Button";
import classes from "./Search.module.css";
import {useNavigate, useParams, useSearchParams} from "react-router-dom";
import {navigateToSearch} from "../../common";

function Search() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const {searchQuery} = useParams();
  const [search, setSearch] = useState(searchQuery ? searchQuery : "")
  return (
    <div className={classes.search}>
      <SearchInput search={search} setSearch={setSearch}/>
      <Button name="SEARCH" size="large" action={() => navigateToSearch(navigate, search, searchParams)}/>
    </div>
  );
}

export default Search
