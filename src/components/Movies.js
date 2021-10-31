import MovieCard from "./MovieCard";
import {Col, Row} from 'antd';
import {GENRES, MOVIES} from "../constants/Constant";

function Movies({name, genre}) {
  const movies = MOVIES.filter(movie => genre === 'ALL' ? true : movie.genres.indexOf(GENRES[genre]) > -1)
    .filter(movie => movie.title.toLowerCase().includes(name.toLowerCase()))

  return (
    <Col style={{width: 1000}} span={20} offset={5} className="site-card-wrapper">
      <Row gutter={[15, 15]}>
        {movies.map(value => <MovieCard movie={value}/>)}
      </Row>
    </Col>
  )
}

export default Movies;
