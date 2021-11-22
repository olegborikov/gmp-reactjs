import "antd/dist/antd.css";
import React from "react";
import ErrorBoundary from "./components/error/ErrorBoundary";
import "./App.css";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <ErrorBoundary>
      <div className="app">
        <Header/>
        <Home/>
        <Footer/>
      </div>
    </ErrorBoundary>
  )
}

export default App
