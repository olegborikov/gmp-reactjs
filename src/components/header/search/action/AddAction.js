import React from "react";
import AddMovie from "../../../movie/add/AddMovie";
import Button from "../../../common/button/Button";
import {useToggleWindow} from "../../../../hooks/useToggleWindow";

function AddAction(props) {
  const [isVisible, toggleVisible] = useToggleWindow()

  return (
    <>
      <Button action={toggleVisible} name="+ ADD MOVIE" size="large" color="black"/>
      {isVisible ? <AddMovie toggleWindow={toggleVisible}/> : null}
    </>
  );
}

export default AddAction;
