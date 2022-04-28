import * as Tone from "tone";
import React, { useEffect } from "react";
import { useDispatch, useSelector, connect } from "react-redux";

const main = () => {
  const keyboard = ["a", "w", "s", "e", "d", "f", "t", "g", "y", "h", "u", "j"];

  const synth = new Tone.PolySynth().toDestination();
  synth.set({ volume: -15 });

  const handleChange = (key) => {
    Tone.context.resume()
    console.log(key)
    synth.triggerAttackRelease(["C4", "E4", "G4", "B4"], 1);
  };

  const handleKeyDown = (e) => {
    Tone.context.resume()
    if (keyboard.includes(e.key)){
      let key = e.key.toUpperCase();
      let oct = "3";
      let newNote = key + oct ;
      console.log(newNote);
      synth.triggerAttackRelease([newNote], 1 )
    }
  }

  return (
    <div >
      <input onKeyPress={handleKeyDown} />
    </div>
  );
};

export default connect(null)(main);
