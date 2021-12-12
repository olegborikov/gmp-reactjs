import React from "react";
import DeleteMovie from "../../../movie/delete/DeleteMovie";
import EditMovie from "../../../movie/edit/EditMovie";
import PropTypes from "prop-types";
import Button from "../../../common/button/Button";
import {useToggleWindow} from "../../../../hooks/useToggleWindow";

function Actions(props) {
  const [isEditVisible, toggleEdit] = useToggleWindow()
  const [isDeleteVisible, toggleDelete] = useToggleWindow()

  return (
    <>
      <div>
        <Button action={toggleEdit} name="Edit" color="grey"/>
        {isEditVisible ?
          <EditMovie toggleWindow={toggleEdit}
                     movie={props.movie}/> : null}
      </div>
      <div>
        <Button action={toggleDelete} name="Delete" color="grey"/>
        {isDeleteVisible ? <DeleteMovie toggleWindow={toggleDelete}
                                        id={props.movie.id}/> : null}
      </div>
    </>
  )
}

Actions.propTypes = {
  movie: PropTypes.object.isRequired
};

export default Actions;
