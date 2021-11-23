import React, {Component, useState} from "react";
import classes from "./GenresDropdown.module.css";
import PropTypes from "prop-types";
import {GENRES} from "../../../../constants/Constant";

class GenresDropdown extends Component {
  state = {
    isVisible: false
  }

  render() {
    return (
      <div className={classes.dropdown}>
        <div onClick={(e) => this.setState({isVisible: !this.state.isVisible})}>
          >
        </div>
        {this.state.isVisible ?
          <div className={classes.list}>
            {
              GENRES.map(genre =>
                <li className={classes.li} key={GENRES.indexOf(genre)}>
                  <input type="checkbox" checked={this.props.genres?.indexOf(genre) > -1} value={genre}
                         onChange={this.props.onChange}/>
                  <label>{genre}</label>
                </li>
              )
            }
          </div>
          : null}
      </div>
    )
  }
}

GenresDropdown.propTypes = {
  genres: PropTypes.array.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default GenresDropdown;
