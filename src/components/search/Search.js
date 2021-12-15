import React from "react";
import SearchInput from "./input/SearchInput";
import Button from "../common/button/Button";
import classes from "./Search.module.css";

function Search() {
  return (
    <div className={classes.search}>
      <SearchInput/>
      <Button name="SEARCH" size="large" action={() => {
      }}/>
    </div>
  );
}

export default Search;
