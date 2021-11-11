import {GENRES} from "../../constants/Constant";
import {Col, Tabs} from "antd";
import React from 'react';
import classes from "./styles.module.css";

const {TabPane} = Tabs;

function GenresTab() {
  return (
    <Col>
      <Tabs size="large" defaultActiveKey='ALL'>
        <TabPane className={classes.tab} tab='All' key='ALL'/>
        {
          GENRES.map(genre => <TabPane className={classes.tab} tab={genre} key={GENRES.indexOf(genre)}/>)
        }
      </Tabs>
    </Col>
  )
}

export default GenresTab
