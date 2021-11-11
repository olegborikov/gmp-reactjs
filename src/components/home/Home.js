import React from "react";
import classes from "./styles.module.css";
import GenresTab from "../filter/GenresTab";
import {Col, Row} from "antd";
import ParametersDropdown from "../sort/ParametersDropdown";
import Movies from "../movies/Movies";
import MoviesLabel from "../movies/label/MoviesLabel";

function Home() {
  return (
    <div className={classes.home}>
      <Row>
        <Col offset={1}>
          <GenresTab/>
        </Col>
        <Col offset={11}>
          <ParametersDropdown/>
        </Col>
      </Row>
      <br/>
      <Row>
        <Col offset={1}>
          <MoviesLabel/>
        </Col>
      </Row>
      <br/>
      <Row>
        <Col span={21} offset={1}>
          <Movies/>
        </Col>
      </Row>
    </div>
  );
}

export default Home
