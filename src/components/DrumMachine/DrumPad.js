import React from 'react';

import classes from './DrumMachine.module.css';

const DrumPad = ({ name, source, letter, keyClicked }) => (
  <div
    className={classes.DrumPad}
    id={name}
    onClick={() => keyClicked(name, letter)}
  >
    <audio src={source} className="clip" id={letter}></audio>
    <p>{letter}</p>
  </div>
);

export default DrumPad;
