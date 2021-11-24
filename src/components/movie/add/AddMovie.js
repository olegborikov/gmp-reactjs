import React, {Component} from "react";
import classes from "./AddMovie.module.css";
import AddText from "./text/AddText";
import Input from "../../common/input/Input";
import Button from "../../common/button/Button";
import DescriptionArea from "./area/DescriptionArea";
import PropTypes from "prop-types";
import GenresDropdown from "./dropdown/GenresDropdown";

class AddMovie extends Component {
  state = {
    id: this.props.id,
    title: this.props.title,
    releaseDate: this.props.releaseDate,
    movieUrl: this.props.movieUrl,
    rating: this.props.rating,
    genres: this.props.genres ? this.props.genres : [],
    runtime: this.props.runtime,
    overview: this.props.overview
  }

  resetValues = this.internalResetValues.bind(this);

  internalResetValues() {
    this.setState({
      id: this.props.id ? this.props.id : "",
      title: this.props.title ? this.props.title : "",
      releaseDate: this.props.releaseDate ? this.props.releaseDate : "",
      movieUrl: this.props.movieUrl ? this.props.movieUrl : "",
      rating: this.props.rating ? this.props.rating : "",
      genres: this.props.genres ? this.props.genres : [],
      runtime: this.props.runtime ? this.props.runtime : "",
      overview: this.props.overview ? this.props.overview : ""
    })
  }

  render() {
    const onButtonClick = () => {
      let movie = this.state
      this.props.toggleAddMovieWindow()
      this.props.action(movie)
    }

    const onTitleChange = (event) => {
      this.setState({
        title: event.target?.value
      })
    }

    const onDateChange = (event) => {
      this.setState({
        releaseDate: event.target?.value
      })
    }

    const onUrlChange = (event) => {
      this.setState({
        movieUrl: event.target?.value
      })
    }

    const onRatingChange = (event) => {
      this.setState({
        rating: event.target?.value
      })
    }

    const onGenreChange = (event) => {
      const {genres} = this.state
      const updatedGenres = genres?.indexOf(event.target?.value) > -1
        ? genres.filter(genre => genre !== event.target?.value)
        : [...this.state.genres, event.target?.value]
      this.setState({
        genres: updatedGenres
      })
    }

    const onRuntimeChange = (event) => {
      this.setState({
        runtime: event.target?.value
      })
    }

    const onOverviewChange = (event) => {
      this.setState({
        overview: event.target?.value
      })
    }

    return (
      <div className={classes.popup}>
        <Button action={this.props.toggleAddMovieWindow} name="X" color="grey"/>
        <AddText/>
        <div className={classes.inputs}>
          <Input param="TITLE" value={this.state.title} onChange={onTitleChange}/>
          <Input param="RELEASE DATE" value={this.state.releaseDate} onChange={onDateChange}/>
          <Input param="MOVIE URL" value={this.state.movieUrl} onChange={onUrlChange}/>
          <Input param="RATING" value={this.state.rating} onChange={onRatingChange}/>
          <Input param="GENRE" value={this.state.genres} disabled={true}/>
          <Input param="RUNTIME" value={this.state.runtime} onChange={onRuntimeChange}/>
          <GenresDropdown genres={this.state.genres} onChange={onGenreChange}/>
        </div>
        <DescriptionArea value={this.state.overview} onChange={onOverviewChange}/>
        <Button action={this.resetValues} name="RESET" color="grey-red"/>
        <Button name="SUBMIT" action={onButtonClick}/>
      </div>
    )
  }
}

AddMovie.propTypes = {
  action: PropTypes.func,
  toggleAddMovieWindow: PropTypes.func,
  id: PropTypes.number,
  title: PropTypes.string,
  releaseDate: PropTypes.string,
  movieUrl: PropTypes.string,
  rating: PropTypes.number,
  runtime: PropTypes.number,
  overview: PropTypes.string,
  genres: PropTypes.array
};

export default AddMovie;
