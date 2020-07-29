import React from 'react';

const CalcDisplay = ({ calcHist, calc }) => (
  <div id="calc-display">
    {calcHist && <span id="display-history">{calcHist}</span>}
    {calcHist && <div className="line"></div>}
    <span id="display">{calc.join('')}</span>
  </div>
);

export default CalcDisplay;
