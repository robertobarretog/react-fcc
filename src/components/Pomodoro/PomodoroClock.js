import React, { useEffect, useState, useRef } from 'react';
import useInterval from '../../hooks/useInterval';

import PomoType from './PomoType';
import Timer from './Timer';
import Controls from './Controls';
import alarm from '../../audio/beep.mp3';
import './PomodoroClock.css';

const PomodoroClock = () => {
  const [breakLength, setBreakLength] = useState(5);
  const [sessionLength, setSessionLength] = useState(25);
  const [mode, setMode] = useState('session');
  const [time, setTime] = useState(sessionLength * 60 * 1000);
  const [active, setActive] = useState(false);
  const beep = useRef();

  useInterval(() => setTime(time - 1000), active ? 1000 : null);

  useEffect(() => {
    setTime(sessionLength * 60 * 1000);
  }, [sessionLength]);

  useEffect(() => {
    if (time === 0 && mode === 'session') {
      beep.current.play();
      setMode('break');
      setTime(breakLength * 60 * 1000);
      setActive(false);
    } else if (time === 0 && mode === 'break') {
      beep.current.play();
      setMode('session');
      setTime(sessionLength * 60 * 1000);
      setActive(false);
    }
  }, [time, breakLength, sessionLength, mode]);

  const resetClock = () => {
    beep.current.pause();
    beep.current.currentTime = 0;
    setActive(false);
    setMode('session');
    setBreakLength(5);
    setSessionLength(25);
    setTime(25 * 60 * 1000);
  };

  return (
    <div className="pomodoro-container">
      <h1 className="title">Pomodoro Clock</h1>
      <div className="length-container">
        <PomoType
          type="Break"
          value={[breakLength, setBreakLength]}
          active={active}
        />
        <PomoType
          type="Session"
          value={[sessionLength, setSessionLength]}
          active={active}
        />
      </div>
      <Timer currentMode={[mode, setMode]} currentTime={[time, setTime]} />
      <Controls activeStatus={[active, setActive]} handleReset={resetClock} />
      <audio id="beep" ref={beep} src={alarm} />
    </div>
  );
};

export default PomodoroClock;
