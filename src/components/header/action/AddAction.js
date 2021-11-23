import React, {Component} from "react";
import classes from "./AddAction.module.css";
import AddMovie from "../../movie/add/AddMovie";

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
        {this.state.isVisible ? <AddMovie toggleAddMovieWindow={this.toggleAddMovieWindow}/> : null}
      </>
    );
  }
}

export default AddAction;
