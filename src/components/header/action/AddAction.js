import React, {useCallback, useState} from "react";
import AddMovie from "../../movie/add/AddMovie";
import PropTypes from "prop-types";
import Button from "../../common/button/Button";

function AddAction(props) {
  const [isVisible, setVisible] = useState(false)

  const toggleWindow = useCallback(
    () => setVisible(!isVisible),
    [isVisible]
  )
  return (
    <>
      <Button action={toggleWindow} name="+ ADD MOVIE" size="large" color="black"/>
      {isVisible ? <AddMovie toggleWindow={toggleWindow} action={props.addMovie}/> : null}
    </>
  );
}

AddAction.propTypes = {
  addMovie: PropTypes.func.isRequired
};

export default AddAction;
