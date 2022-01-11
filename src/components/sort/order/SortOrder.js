import React from "react";
import classes from "./SortOrder.module.css";
import {connect} from "react-redux";
import {changeOrder} from "../../../redux/actions";

function SortOrder(props) {
  const newOrder = props.currentOrder === "ASC" ? "DESC" : "ASC"
  return (
    <div className={classes.order} onClick={(e) => props.changeOrder(newOrder)}>
      {props.currentOrder === "ASC" ? "▲" : "▼"}
    </div>
  );
}

function mapStateToProps(state) {
  return {
    currentOrder: state.currentOrder
  }
}

const mapDispatchToProps = dispatch => ({
  changeOrder: (order) => dispatch(changeOrder(order))
})

export default connect(mapStateToProps, mapDispatchToProps)(SortOrder)
