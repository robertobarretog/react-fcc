import React from 'react';

const Controls = ({ activeStatus, handleReset }) => {
  const [active, setActive] = activeStatus;
  return (
    <div className="controls">
      <button id="start_stop" onClick={() => setActive(!active)}>
        {active ? (
          <i className="fas fa-pause"></i>
        ) : (
          <i className="fas fa-play"></i>
        )}
      </button>
      <button id="reset" onClick={handleReset}>
        <i className="fas fa-sync-alt"></i>
      </button>
    </div>
  );
};

export default Controls;
