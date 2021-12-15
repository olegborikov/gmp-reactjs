import "antd/dist/antd.css";
import React, {useState} from "react";
import ErrorBoundary from "./components/error/ErrorBoundary";
import "./App.css";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Footer from "./components/footer/Footer";

function App() {
  const [isDescriptionVisible, setDescriptionVisible] = useState(false);

  const showDescription = () => {
    setDescriptionVisible(true)
  }

  const selectSearch = () => {
    setDescriptionVisible(false)
  }

  return (
    <ErrorBoundary>
      <div className="app">
        <Header isDescriptionVisible={isDescriptionVisible} selectSearch={selectSearch}/>
        <Home showDescription={showDescription}/>
        <Footer/>
      </div>
    </ErrorBoundary>
  )
}

export default App
