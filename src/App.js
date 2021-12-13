import "./App.css";
import React from "react";
import { Provider } from 'react-redux'
import Main from "./Synth";

const App = () => {
  return (
    <div className="app">
      <h3>Filo</h3>
      <Main/>
    </div>
  );
}

export default  App;
