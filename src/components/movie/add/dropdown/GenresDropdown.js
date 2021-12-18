import React from "react";
import classes from "./GenresDropdown.module.css";
import PropTypes from "prop-types";
import {GENRES} from "../../../../constants";
import {useToggleWindow} from "../../../../hooks/useToggleWindow";
import {Field} from "formik";

function GenresDropdown(props) {
  const [isVisible, toggleVisible] = useToggleWindow()
  const genres = [...new Set([...GENRES, ...props.initGenres])];

  return (
    <div className={classes.dropdown}>
      <div onClick={(e) => toggleVisible()}>
        >
      </div>
      {isVisible ?
        <div className={classes.list}>
          {
            genres.map(genre =>
              <li className={classes.li} key={genres.indexOf(genre)}>
                <Field type="checkbox" checked={props.currentGenres?.indexOf(genre) > -1} value={genre}
                       onChange={props.setGenres} name="genres"/>
                <label>{genre}</label>
              </li>
            )
          }
        </div>
        : null}
    </div>
  )
}

GenresDropdown.propTypes = {
  currentGenres: PropTypes.array.isRequired,
  setGenres: PropTypes.func.isRequired,
};

export default GenresDropdown;
