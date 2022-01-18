import 'isomorphic-fetch';
import 'babel-polyfill';
import React from "react";
import ErrorBoundary from "./components/error/ErrorBoundary";
import "./App.css";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Footer from "./components/footer/Footer";
import {Redirect, Route, Switch} from "react-router-dom";
import NotFound from "./components/error/notfound/NotFound";
import {hot} from "react-hot-loader";
import {Provider} from "react-redux";

function App({store}) {
  return (
    <ErrorBoundary>
      <Provider store={store}>
        <div className="app">
          <Switch>
            {["/search", "/search/:searchQuery"].map(path => <Route path={path}>
              <Header/>
              <Home/>
              <Footer/>
            </Route>)}
            <Route path="/">
              <Redirect to="search"/>
            </Route>
            <Route path="*">
              <NotFound/>
            </Route>
          </Switch>
        </div>
      </Provider>
    </ErrorBoundary>
  )
}

export default hot(module)(App);
