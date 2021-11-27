import React, {useCallback, useState} from "react";
import classes from "./GenresDropdown.module.css";
import PropTypes from "prop-types";
import {GENRES} from "../../../../constants/Constant";

function GenresDropdown(props) {
  const [isVisible, setVisible] = useState(false)

  const toggleDropdown = useCallback(
    () => setVisible(!isVisible),
    [isVisible]
  )

  return (
    <div className={classes.dropdown}>
      <div onClick={(e) => toggleDropdown()}>
        >
      </div>
      {isVisible ?
        <div className={classes.list}>
          {
            GENRES.map(genre =>
              <li className={classes.li} key={GENRES.indexOf(genre)}>
                <input type="checkbox" checked={props.genres?.indexOf(genre) > -1} value={genre}
                       onChange={props.onChange}/>
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
  genres: PropTypes.array.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default GenresDropdown;
