import React from "react";
import classes from "./Footer.module.css";
import Logo from "../logo/Logo";

function Footer() {
  return (
    <div className={classes.footer}>
      <Logo/>
    </div>
  )
}

export default Footer
