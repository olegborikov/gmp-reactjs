import React from "react";
import classes from "./AddMovie.module.css";
import AddText from "./text/AddText";
import Button from "../../common/button/Button";
import PropTypes from "prop-types";
import {addMovie, updateMovie} from "../../../redux/actions";
import {connect} from "react-redux";
import {Form, Formik, useFormik} from "formik";
import InputField from "./field/InputField";
import GenresDropdown from "./dropdown/GenresDropdown";
import GenresField from "./genres/GenresField";

const mapDispatchToProps = dispatch => ({
  addMovie: (movie) => addMovie(dispatch, movie),
  updateMovie: (movie) => updateMovie(dispatch, movie)
})

function validate(value, condition) {
  let error;
  if (!value) {
    error = "Required";
  } else if (condition(value)) {
    error = "Invalid value";
  }
  return error;
}

const validateTitle = (value) => validate(value, (value) => value.length < 2 || value.length > 50)

const validateDate = (value) => validate(value, (value) => !value.match(/^\d{4}-\d{1,2}-\d{1,2}$/))

const validateUrl = (value) => validate(value, (value) => !value.match(/^http.*$/))

const validateDescription = (value) => validate(value, (value) => value.length < 5)

const validateRating = (value) => validate(value, (value) => value < 0 || value > 10)

const validateRuntime = (value) => validate(value, (value) => value < 1 || value > 500)

function AddMovie(props) {
  const onButtonClick = (values) => {
    if (formik.values.genres.length > 0) {
      values.genres = formik.values.genres
    }
    props.id ? props.updateMovie(values) : props.addMovie(values)
    props.toggleWindow()
  }

  const initialValues = {
    id: props.id,
    title: props.title ? props.title : "",
    release_date: props.release_date ? props.release_date : "",
    poster_path: props.poster_path ? props.poster_path : "",
    vote_average: props.vote_average ? props.vote_average : "",
    runtime: props.runtime ? props.runtime : "",
    overview: props.overview ? props.overview : ""
  }

  const initialValuesGenres = {
    genres: props.genres ? [...props.genres] : []
  }

  const formik = useFormik({
    initialValues: initialValuesGenres
  });

  return (
    <div className={classes.popup}>
      <Button action={props.toggleWindow} name="X" color="grey"/>
      <Formik
        onReset={(values, actions) => {
          actions.setValues(initialValues)
          formik.getFieldHelpers("genres").setValue(initialValuesGenres.genres)
        }}
        onSubmit={(values) => onButtonClick(values)} initialValues={initialValues}
      >
        {({errors, touched}) => (
          <Form>
            <AddText/>
            <div className={classes.inputs}>
              <InputField label="TITLE" validate={validateTitle} name="title" error={errors.title}
                          touched={touched.title}/>
              <InputField label="RELEASE DATE" validate={validateDate} name="release_date" error={errors.release_date}
                          touched={touched.release_date}/>
              <InputField label="MOVIE URL" validate={validateUrl} name="poster_path" error={errors.poster_path}
                          touched={touched.poster_path}/>
              <InputField label="RATING" type="number" validate={validateRating} name="vote_average"
                          error={errors.vote_average} touched={touched.vote_average}/>
              <GenresField value={formik.values.genres}/>
              <InputField label="RUNTIME" type="number" validate={validateRuntime} name="runtime" error={errors.runtime}
                          touched={touched.runtime}/>
              <GenresDropdown initGenres={initialValuesGenres.genres} currentGenres={formik.values.genres}
                              setGenres={formik.handleChange}/>
            </div>
            <InputField label="DESCRIPTION" as="textarea" validate={validateDescription} name="overview"
                        error={errors.overview} touched={touched.overview}/>
            <Button name="RESET" reset={true} color="grey-red"/>
            <Button name="CONFIRM" submit={true}/>
          </Form>
        )}
      </Formik>
    </div>
  )
}

AddMovie.propTypes = {
  toggleWindow: PropTypes.func.isRequired,
  id: PropTypes.number,
  title: PropTypes.string,
  release_date: PropTypes.string,
  poster_path: PropTypes.string,
  vote_average: PropTypes.number,
  runtime: PropTypes.number,
  overview: PropTypes.string,
  genres: PropTypes.array
};

export default connect(null, mapDispatchToProps)(AddMovie)
