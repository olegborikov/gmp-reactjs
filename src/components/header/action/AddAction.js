import React, {Component} from "react";
import AddMovie from "../../movie/add/AddMovie";
import PropTypes from "prop-types";
import Button from "../../common/button/Button";

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
        <Button action={this.toggleAddMovieWindow} name="+ ADD MOVIE" size="large" color="black"/>
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
