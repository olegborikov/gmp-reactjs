import React, {Component} from "react";
import classes from "./AddAction.module.css";
import AddMovie from "../../movie/add/AddMovie";
import PropTypes from "prop-types";

class AddAction extends Component {
  state = {
    isVisible: false
  }
  toggleAddMovieWindow = () => {
    this.setState({
      isVisible: !this.state.isVisible
    });
  }

  render() {
    return (
      <>
        <button className={classes.button} onClick={this.toggleAddMovieWindow}>+ ADD MOVIE</button>
        {this.state.isVisible ? <AddMovie toggleAddMovieWindow={this.toggleAddMovieWindow}
                                          action={this.props.addMovie}/> : null}
      </>
    );
  }
}

AddAction.propTypes = {
  addMovie: PropTypes.func.isRequired
};

export default AddAction;
