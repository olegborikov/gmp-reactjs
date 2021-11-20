import React from 'react';
import classes from "./AddMovie.module.css";
import CloseButton from "../button/close/CloseButton";
import AddText from "./text/AddText";
import AddInput from "./input/AddInput";
import ConfirmButton from "../button/confirm/ConfirmButton";
import ResetButton from "../button/reset/ResetButton";
import DescriptionArea from "./area/DescriptionArea";

function AddMovie(props) {
  return (
    <div className={classes.popup}>
      <CloseButton action={props.toggleAddMovieWindow}/>
      <AddText/>
      <div className={classes.inputs}>
        <AddInput param='TITLE' value={props.title}/>
        <AddInput param='RELEASE DATE' value={props.releaseYear}/>
        <AddInput param='MOVIE URL'/>
        <AddInput param='RATING'/>
        <AddInput param='GENRE' value={props.genres}/>
        <AddInput param='RUNTIME'/>
      </div>
      <DescriptionArea/>
      <ResetButton action={props.toggleAddMovieWindow}/>
      <ConfirmButton name="SUBMIT" action={props.toggleAddMovieWindow}/>
    </div>
  )
}

export default AddMovie;
