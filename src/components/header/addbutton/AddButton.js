import React, {Component} from 'react';
import classes from "./AddButton.module.css";
import AddMovie from "../../movie/add/AddMovie";

class AddButton extends Component {
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
        {this.state.isVisible ? <AddMovie toggleAddMovieWindow={this.toggleAddMovieWindow}/> : null}
      </>
    );
  }
}

export default AddButton;
