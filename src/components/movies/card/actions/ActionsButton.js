import React, {Component} from "react";
import classes from "./ActionsButton.module.css";
import DeleteMovie from "../../../movie/delete/DeleteMovie";
import EditMovie from "../../../movie/edit/EditMovie";
import PropTypes from "prop-types";

class ActionsButton extends Component {
  state = {
    isDeleteVisible: false,
    isEditVisible: false
  }

  toggleDeleteMovieWindow = () => {
    this.setState({
      isDeleteVisible: !this.state.isDeleteVisible
    });
  }

  toggleEditMovieWindow = () => {
    this.setState({
      isEditVisible: !this.state.isEditVisible
    });
  }

  render() {
    return (
      <>
        <div>
          <button className={classes.button} onClick={this.toggleEditMovieWindow}>Edit</button>
          {this.state.isEditVisible ?
            <EditMovie toggleEditMovieWindow={this.toggleEditMovieWindow} movie={this.props.movie}/> : null}
        </div>
        <div>
          <button className={classes.button} onClick={this.toggleDeleteMovieWindow}>Delete</button>
          {this.state.isDeleteVisible ? <DeleteMovie toggleDeleteMovieWindow={this.toggleDeleteMovieWindow}/> : null}
        </div>
      </>
    )
  }
}

ActionsButton.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    genres: PropTypes.array.isRequired,
    releaseDate: PropTypes.string.isRequired
  })
};

export default ActionsButton;
