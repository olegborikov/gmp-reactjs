import Search from "./Search";
import Movies from "./Movies";
import {Row, Space} from "antd";
import {useState} from "react";
import GenresTab from "./GenresTab";
import React from 'react';

function Home() {
  const [genre, setGenre] = useState('ALL')
  const [name, setName] = useState('')

  return (
    <div className='home-wrapper'>
      <Space direction={'vertical'}>
        <Row>
          <Search onNameSearch={setName}/>
        </Row>
        <Row gutter={[15, 15]}>
          <GenresTab onTabSwitch={setGenre}/>
        </Row>
        <Row>
          <Movies genre={genre} name={name}/>
        </Row>
      </Space>
    </div>
  );
}

export default Home;
