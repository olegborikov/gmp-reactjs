import React from "react";
import classes from "./AddMovie.module.css";
import CloseButton from "../button/close/CloseButton";
import AddText from "./text/AddText";
import Input from "../../common/input/Input";
import ConfirmButton from "../button/confirm/ConfirmButton";
import ResetButton from "../button/reset/ResetButton";
import DescriptionArea from "./area/DescriptionArea";
import PropTypes from "prop-types";

function AddMovie(props) {
  return (
    <div className={classes.popup}>
      <CloseButton action={props.toggleAddMovieWindow}/>
      <AddText/>
      <div className={classes.inputs}>
        <Input param="TITLE" value={props.title}/>
        <Input param="RELEASE DATE" value={props.releaseDate}/>
        <Input param="MOVIE URL"/>
        <Input param="RATING"/>
        <Input param="GENRE" value={props.genres}/>
        <Input param="RUNTIME"/>
      </div>
      <DescriptionArea/>
      <ResetButton action={props.toggleAddMovieWindow}/>
      <ConfirmButton name="SUBMIT" action={props.toggleAddMovieWindow}/>
    </div>
  )
}

AddMovie.propTypes = {
  toggleAddMovieWindow: PropTypes.func.isRequired,
  title: PropTypes.string,
  releaseDate: PropTypes.string,
  genres: PropTypes.array
};

export default AddMovie;
