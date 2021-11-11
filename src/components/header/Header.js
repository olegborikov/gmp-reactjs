import React from "react";
import classes from './styles.module.css';
import Search from "../search/Search";
import Logo from "../logo/Logo";
import {Col, Row} from "antd";
import AddButton from "./addbutton/AddButton";
import SearchLabel from "../search/label/SearchLabel";

function Header() {
  return (
    <div className={classes.header}>
      <Row>
        <Col offset={1}>
          <Logo/>
        </Col>
        <Col offset={18}>
          <AddButton/>
        </Col>
      </Row>
      <br/>
      <Row>
        <Col span={5} offset={5}>
          <SearchLabel/>
        </Col>
      </Row>
      <br/>
      <Row>
        <Col span={6} offset={5}>
          <Search/>
        </Col>
      </Row>
    </div>
  )
}

export default Header
