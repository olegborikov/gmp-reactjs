import {Button} from 'antd';
import React from 'react';
import classes from "./styles.module.css";

function SearchButton() {
  return (
    <>
      <Button className={classes.button} ghost={true} size="large">SEARCH</Button>
    </>
  );
}

export default SearchButton;
