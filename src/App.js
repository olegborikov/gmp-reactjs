import "antd/dist/antd.css";
import React from "react";
import ErrorBoundary from "./components/error/ErrorBoundary";
import "./App.css";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Footer from "./components/footer/Footer";
import {BrowserRouter as Router, Navigate, Route, Routes} from "react-router-dom";
import NotFound from "./components/error/notfound/NotFound";

function App() {
  return (
    <ErrorBoundary>
      <Router>
        <div className="app">
          <Routes>
            {["/search", "/search/:searchQuery"].map(path => <Route path={path} element={<>
              <Header/>
              <Home/>
              <Footer/>
            </>}/>)}
            <Route path="/" element={<Navigate to="search"/>}/>
            <Route path="*" element={<NotFound/>}/>
          </Routes>
        </div>
      </Router>
    </ErrorBoundary>
  )
}

export default App
