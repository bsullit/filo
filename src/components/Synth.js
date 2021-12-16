import * as Tone from "tone";
import React, { useEffect } from "react";
import { useDispatch, useSelector, connect } from "react-redux";

const main = () => {
  const keyboard = ["a", "w", "s", "e", "d", "f", "t", "g", "y", "h", "u", "j"];

  const synth = new Tone.PolySynth().toDestination();
  synth.set({ volume: -15 });

  const handleChange = () => {
    Tone.context.resume()
    synth.triggerAttackRelease(["C4", "E4", "G4", "B4"], 1);
  };

  return (
    <div >
      <button onClick={handleChange()} />
    </div>
  );
};

export default connect(null)(main);
