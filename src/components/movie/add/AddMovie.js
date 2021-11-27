import React, {useState} from "react";
import classes from "./AddMovie.module.css";
import AddText from "./text/AddText";
import Input from "../../common/input/Input";
import Button from "../../common/button/Button";
import DescriptionArea from "./area/DescriptionArea";
import PropTypes from "prop-types";
import GenresDropdown from "./dropdown/GenresDropdown";

function AddMovie(props) {
  const [id, setId] = useState(props.id);
  const [title, setTitle] = useState(props.title);
  const [releaseDate, setReleaseDate] = useState(props.releaseDate);
  const [movieUrl, setMovieUrl] = useState(props.movieUrl);
  const [rating, setRating] = useState(props.rating);
  const [genres, setGenres] = useState(props.genres ? props.genres : []);
  const [runtime, setRuntime] = useState(props.runtime);
  const [overview, setOverview] = useState(props.overview);

  const resetValues = () => {
    setId(props.id ? props.id : "")
    setTitle(props.title ? props.title : "")
    setReleaseDate(props.releaseDate ? props.releaseDate : "")
    setMovieUrl(props.movieUrl ? props.movieUrl : "")
    setRating(props.rating ? props.rating : "")
    setGenres(props.genres ? props.genres : [])
    setRuntime(props.runtime ? props.runtime : "")
    setOverview(props.overview ? props.overview : "")
  }

  const onButtonClick = () => {
    const movie = {
      id: id,
      title: title,
      releaseDate: releaseDate,
      movieUrl: movieUrl,
      rating: rating,
      genres: genres,
      runtime: runtime,
      overview: overview,
    }
    props.toggleWindow()
    props.action(movie)
  }

  const onTitleChange = (event) => setTitle(event.target?.value)

  const onDateChange = (event) => setReleaseDate(event.target?.value)

  const onUrlChange = (event) => setMovieUrl(event.target?.value)

  const onRatingChange = (event) => setRating(event.target?.value)

  const onGenreChange = (event) => {
    const updatedGenres = genres?.indexOf(event.target?.value) > -1
      ? genres.filter(genre => genre !== event.target?.value)
      : [...genres, event.target?.value]
    setGenres(updatedGenres)
  }

  const onRuntimeChange = (event) => setRuntime(event.target?.value)

  const onOverviewChange = (event) => setOverview(event.target?.value)

  return (
    <div className={classes.popup}>
      <Button action={props.toggleWindow} name="X" color="grey"/>
      <AddText/>
      <div className={classes.inputs}>
        <Input param="TITLE" value={title} onChange={onTitleChange}/>
        <Input param="RELEASE DATE" value={releaseDate} onChange={onDateChange}/>
        <Input param="MOVIE URL" value={movieUrl} onChange={onUrlChange}/>
        <Input param="RATING" value={rating} onChange={onRatingChange}/>
        <Input param="GENRE" value={genres} disabled={true}/>
        <Input param="RUNTIME" value={runtime} onChange={onRuntimeChange}/>
        <GenresDropdown genres={genres} onChange={onGenreChange}/>
      </div>
      <DescriptionArea value={overview} onChange={onOverviewChange}/>
      <Button action={resetValues} name="RESET" color="grey-red"/>
      <Button name="SUBMIT" action={onButtonClick}/>
    </div>
  )
}

AddMovie.propTypes = {
  action: PropTypes.func.isRequired,
  toggleWindow: PropTypes.func.isRequired,
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
