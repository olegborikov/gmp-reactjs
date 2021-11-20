import React from 'react';
import AddMovie from "../add/AddMovie";

function EditMovie(props) {
  return (
    <AddMovie toggleAddMovieWindow={props.toggleEditMovieWindow}
              title={props.movie.title} releaseYear={props.movie.releaseYear} genres={props.movie.genres}/>
  )
}

export default EditMovie;
