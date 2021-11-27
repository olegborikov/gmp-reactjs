import React from "react";
import AddMovie from "../../../movie/add/AddMovie";
import PropTypes from "prop-types";
import Button from "../../../common/button/Button";
import {useToggleWindow} from "../../../hooks/useToggleWindow";

function AddAction(props) {
  const [isVisible, toggleVisible] = useToggleWindow()

  return (
    <>
      <Button action={toggleVisible} name="+ ADD MOVIE" size="large" color="black"/>
      {isVisible ? <AddMovie toggleWindow={toggleVisible} action={props.addMovie}/> : null}
    </>
  );
}

AddAction.propTypes = {
  addMovie: PropTypes.func.isRequired
};

export default AddAction;
