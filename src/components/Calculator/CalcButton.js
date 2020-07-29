import React from 'react';

const CalcButton = ({ value, btnId, type, handleClick }) => (
  <button value={value} id={btnId} className={type} onClick={handleClick}>
    {value}
  </button>
);

export default CalcButton;
