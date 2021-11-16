import React from "react";
import classes from './Header.module.css';
import Search from "../search/Search";
import Logo from "../logo/Logo";
import AddButton from "./addbutton/AddButton";
import SearchLabel from "../search/label/SearchLabel";

function Header() {
  return (
    <div className={classes.header}>
      <div>
        <Logo/>
        <div className={classes.button}>
          <AddButton/>
        </div>
      </div>
      <br/>
      <br/>
      <div className={classes.search}>
        <SearchLabel/>
        <br/>
        <Search/>
      </div>
    </div>
  )
}

export default Header
