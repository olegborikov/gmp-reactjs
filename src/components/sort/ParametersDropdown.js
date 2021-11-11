import React from 'react';
import SortLabel from "./label/SortLabel";
import {Dropdown, Menu, Space} from "antd";
import {SORT_TYPES} from "../../constants/Constant";
import classes from "./styles.module.css";

function ParametersDropdown() {
  const menu = (
    <Menu>
      {
        SORT_TYPES.map(value => <Menu.Item key={SORT_TYPES.indexOf(value)}>{value}</Menu.Item>)
      }
    </Menu>
  );

  return (
    <div className={classes.dropdown}>
      <Space>
        <SortLabel/>
        <Dropdown overlay={menu}>
          <strong>{SORT_TYPES[0]}</strong>
        </Dropdown>
      </Space>
    </div>
  );
}

export default ParametersDropdown;
