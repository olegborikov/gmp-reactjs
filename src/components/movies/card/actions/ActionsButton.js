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
            <EditMovie toggleEditMovieWindow={this.toggleEditMovieWindow}
                       movie={this.props.movie}
                       editMovie={this.props.editMovie}/> : null}
        </div>
        <div>
          <button className={classes.button} onClick={this.toggleDeleteMovieWindow}>Delete</button>
          {this.state.isDeleteVisible ? <DeleteMovie toggleDeleteMovieWindow={this.toggleDeleteMovieWindow}
                                                     id={this.props.movie.id}
                                                     deleteMovie={this.props.deleteMovie}/> : null}
        </div>
      </>
    )
  }
}

ActionsButton.propTypes = {
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

export default ActionsButton;
