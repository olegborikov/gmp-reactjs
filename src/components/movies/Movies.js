import MovieCard from "./card/MovieCard";
import {Row} from 'antd';
import {MOVIES} from "../../constants/Constant";
import React from 'react';

function Movies() {
  return (
    <Row gutter={[30, 30]}>
      {
        MOVIES.map(value => <MovieCard key={MOVIES.indexOf(value)} title={value.title} genres={value.genres}
                                       releaseYear={value.releaseYear}/>)
      }
    </Row>
  )
}

export default Movies;
