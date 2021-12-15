import React from "react";
import PropTypes from "prop-types";
import classes from "./GenreItem.module.css";
import {changeGenre} from "../../../../redux/actions";
import {connect} from "react-redux";

function mapStateToProps(state) {
  return {
    currentGenre: state.currentGenre
  }
}

const mapDispatchToProps = dispatch => ({
  changeGenre: (genre) => dispatch(changeGenre(genre))
})

function GenreItem(props) {
  return (
    <button className={`${classes.item} ${(props.name === props.currentGenre ? classes.active : "")}`}
            onClick={(e) => props.changeGenre(e.target?.value)} value={props.name}>
      {props.name}
    </button>
  )
}

GenreItem.propTypes = {
  name: PropTypes.string.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(GenreItem)
