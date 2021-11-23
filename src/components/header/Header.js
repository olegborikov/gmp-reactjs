import React from "react";
import classes from "./Header.module.css";
import Search from "../search/Search";
import Logo from "../logo/Logo";
import AddAction from "./action/AddAction";
import SearchLabel from "../search/label/SearchLabel";

function Header() {
  return (
    <div className={classes.header}>
      <div className={classes.top}>
        <Logo/>
        <AddAction/>
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
