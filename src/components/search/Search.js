import React from 'react';
import SearchButton from "./button/SearchButton";
import SearchInput from "./input/SearchInput";
import {Space} from "antd";

function Search() {
  return (
    <>
      <Space>
        <SearchInput/>
        <SearchButton/>
      </Space>
    </>
  );
}

export default Search;
