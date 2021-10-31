import Home from "./components/Home";
import 'antd/dist/antd.css';
import './App.css';
import React from "react";

const App = function App() {
  return React.createElement(
    'div',
    {
      className: 'App'
    },
    React.createElement(Home)
  );
};

export default App;
