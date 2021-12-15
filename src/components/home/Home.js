import React from "react";
import classes from "./Home.module.css";
import GenresList from "../filter/genres/GenresList";
import Movies from "../movies/Movies";
import MoviesLabel from "../movies/label/MoviesLabel";
import SortOptions from "../sort/SortOptions";
import PropTypes from "prop-types";
import {connect} from "react-redux";

function mapStateToProps(state) {
  const {movies} = state
  const {error} = state

  return {
    totalAmount: movies?.totalAmount,
    error: error?.toString()
  }
}

function Home(props) {
  return (
    <div className={classes.home}>
      {
        props.error ?<p className={classes.error}>{props.error}</p>
          : <>
            <div className={classes.top}>
              <GenresList/>
              <SortOptions/>
            </div>
            <br/>
            <MoviesLabel moviesAmount={props.totalAmount}/>
            <br/>
            <Movies showDescription={props.showDescription}/>
          </>
      }
    </div>
  );
}

Home.propTypes = {
  showDescription: PropTypes.func.isRequired
};

export default connect(mapStateToProps)(Home)
