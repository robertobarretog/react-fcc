import React from 'react';

const Timer = ({ currentMode, currentTime }) => {
  const [mode] = currentMode;
  const [time] = currentTime;

  const convertMilliseconds = (ms, p) => {
    let pattern = p,
      arrayPattern = pattern.split(':'),
      clock = [],
      minutes = Math.floor(ms / 60000), // 1 Minutes = 60000 Milliseconds
      seconds = Math.floor(((ms % 360000) % 60000) / 1000); // 1 Second = 1000 Milliseconds
    // build the clock result
    function createClock(unit) {
      // match the pattern to the corresponding variable
      if (pattern.match(unit)) {
        if (unit.match(/mm/)) {
          addUnitToClock(minutes, unit);
        }
        if (unit.match(/ss/)) {
          addUnitToClock(seconds, unit);
        }
      }
    }
    function addUnitToClock(val, unit) {
      if (val < 10 && unit.length === 2) {
        val = '0' + val;
      }
      clock.push(val); // push the values into the clock array
    }
    // loop over the pattern building out the clock result
    arrayPattern.forEach(pattern => createClock(pattern));
    return clock.join(':');
  };

  return (
    <div className="timer-container">
      <h2 id="timer-label">{mode === 'session' ? 'Session' : 'Break'}</h2>
      <h2 id="time-left">{convertMilliseconds(time, 'mm:ss')}</h2>
    </div>
  );
};

export default Timer;
