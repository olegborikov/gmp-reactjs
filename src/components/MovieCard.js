import {Card, Col} from "antd";
import Counter from "./Counter";
import {PureComponent} from "react";
import React from 'react';

class MovieCard extends PureComponent {

  render() {
    return (
      <Col span={8}>
        <Card title={this.props.movie.title}>
          <p>{this.props.movie.genres.join(' ')}</p>
          <p>{this.props.movie.releaseYear}</p>
          <Counter/>
        </Card>
      </Col>
    )
  }
}

export default MovieCard;
