import React, {useCallback, useState} from "react";
import DeleteMovie from "../../../movie/delete/DeleteMovie";
import EditMovie from "../../../movie/edit/EditMovie";
import PropTypes from "prop-types";
import Button from "../../../common/button/Button";

function Actions(props) {
  const [isEditVisible, setEditVisible] = useState(false)
  const [isDeleteVisible, setDeleteVisible] = useState(false)

  const toggleEditMovieWindow = useCallback(
    () => setEditVisible(!isEditVisible),
    [isEditVisible]
  )

  const toggleDeleteMovieWindow = useCallback(
    () => setDeleteVisible(!isDeleteVisible),
    [isDeleteVisible]
  )

  return (
    <>
      <div>
        <Button action={toggleEditMovieWindow} name="Edit" color="grey"/>
        {isEditVisible ?
          <EditMovie toggleWindow={toggleEditMovieWindow}
                     movie={props.movie}
                     editMovie={props.editMovie}/> : null}
      </div>
      <div>
        <Button action={toggleDeleteMovieWindow} name="Delete" color="grey"/>
        {isDeleteVisible ? <DeleteMovie toggleWindow={toggleDeleteMovieWindow}
                                        id={props.movie.id}
                                        deleteMovie={props.deleteMovie}/> : null}
      </div>
    </>
  )
}

Actions.propTypes = {
  deleteMovie: PropTypes.func.isRequired,
  editMovie: PropTypes.func.isRequired,
  movie: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    releaseDate: PropTypes.string.isRequired,
    movieUrl: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    runtime: PropTypes.number.isRequired,
    overview: PropTypes.string.isRequired,
    genres: PropTypes.array.isRequired
  })
};

export default Actions;
