import {Card, Col} from "antd";
import React from "react";
import PropTypes from "prop-types";
import classes from "./styles.module.css";

function MovieCard({title, genres, releaseYear}) {
  return (
    <Col flex="435px">
      <Card bordered={false} className={classes.card}>
        <p>{title}</p>
        <p>{genres.join(' ')}</p>
        <p>{releaseYear}</p>
      </Card>
    </Col>
  )
}

MovieCard.propTypes = {
  title: PropTypes.string.isRequired,
  genres: PropTypes.array.isRequired,
  releaseYear: PropTypes.string.isRequired
}
export default MovieCard;
