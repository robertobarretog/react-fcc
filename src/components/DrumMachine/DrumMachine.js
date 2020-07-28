import React, { useState, useEffect } from 'react';

import DrumPad from './DrumPad';
import { sounds } from '../../utils/sounds';
import classes from './DrumMachine.module.css';

const DrumMachine = () => {
  const [soundName, setSoundName] = useState('');

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const handleKeyDown = e => {
    sounds.forEach(sound => {
      if (e.keyCode === sound.keyCode) {
        document.getElementById(sound.name).click();
      }
    });
  };

  const playAudio = audioElId => {
    document.getElementById(audioElId).currentTime = 0;
    document.getElementById(audioElId).play();
  };

  const toggleActiveBtn = btnId => {
    document.getElementById(btnId).classList.add('active');
    setTimeout(() => {
      document.getElementById(btnId).classList.remove('active');
    }, 100);
  };

  const keyClicked = (btnId, audioElId) => {
    playAudio(audioElId);
    toggleActiveBtn(btnId);
    setSoundName(btnId);
  };

  const drumPads = sounds.map(sound => (
    <DrumPad {...sound} letter={sound.key} keyClicked={keyClicked} />
  ));

  return (
    <div id="drum-machine" className={classes.DrumApp}>
      <h1 className={classes.title}>JavaScript Drum Machine</h1>
      <p className={classes.info}>
        Click the buttons or press the keys on your keyboard to play sounds
      </p>
      <div className={classes.DrumPads}>{drumPads}</div>
      <p id="display">{soundName || 'Press a key'}</p>
    </div>
  );
};

export default DrumMachine;
