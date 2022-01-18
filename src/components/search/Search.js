import React, {useState} from "react";
import SearchInput from "./input/SearchInput";
import Button from "../common/button/Button";
import classes from "./Search.module.css";
import {useHistory, useLocation, useParams} from "react-router-dom";
import {navigateToSearch} from "../../common";

function Search() {
  const history = useHistory();
  const {params} = useLocation();
  const searchParams = new URLSearchParams(params);
  const {searchQuery} = useParams();
  const [search, setSearch] = useState(searchQuery ? searchQuery : "")
  return (
    <div className={classes.search}>
      <SearchInput search={search} setSearch={setSearch}/>
      <Button name="SEARCH" size="large" action={() => navigateToSearch(history, search, searchParams)}/>
    </div>
  );
}

export default Search
