import React from 'react';

import './DrumMachine.css';

const DrumPad = ({ name, source, letter, keyClicked }) => (
  <div className="drum-pad" id={name} onClick={() => keyClicked(name, letter)}>
    <audio src={source} className="clip" id={letter}></audio>
    <p>{letter}</p>
  </div>
);

export default DrumPad;
