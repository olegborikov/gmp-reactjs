import React from "react";
import {Form, Formik} from "formik";
import classes from "./DeleteMovie.module.css";
import DeleteText from "./text/DeleteText";
import Button from "../../common/button/Button";
import PropTypes from "prop-types";
import {deleteMovie} from "../../../redux/actions";
import {connect} from "react-redux";

function DeleteMovie(props) {
  const onButtonClick = () => {
    props.deleteMovie(props.id)
    props.toggleWindow()
  }

  return (
    <div className={classes.popup}>
      <Button action={props.toggleWindow} name="X" color="grey"/>
      <Formik onSubmit={() => onButtonClick()} initialValues={""}>
        <Form>
          <DeleteText/>
          <Button name="CONFIRM" submit={true}/>
        </Form>
      </Formik>
    </div>
  )
}

DeleteMovie.propTypes = {
  toggleWindow: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired
};

const mapDispatchToProps = dispatch => ({
  deleteMovie: (id) => deleteMovie(dispatch, id)
})

export default connect(null, mapDispatchToProps)(DeleteMovie)
