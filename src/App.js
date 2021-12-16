import "./App.css";
import React, { useEffect, useState } from "react";
import Main from "./components/Synth";
import * as Tone from "tone";

const App = () => {
  const [showSynth, toggleShowSynth] = useState(false);
  // const context = new Tone.Context({ latencyHint: "interactive" });
  //     Tone.setContext(context);

  const tog = () => {
    toggleShowSynth(!showSynth);
    Tone.start();
    console.log("audio is ready");
    console.log("toggleView");
  };

  return (
    <div className="app">
      <h3>Filo</h3>
      {showSynth ? (
        <div>
          <button onClick={tog}>stop</button>
          <Main />
        </div>
      ) : (
        <button onClick={tog}>start</button>
      )}

      {/* showSynth ? <Main /> : "loading" */}
    </div>
  );
};

export default App;
