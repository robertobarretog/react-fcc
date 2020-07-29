import React from 'react';

const PomoType = ({ type, value, active }) => {
  const [length, setLength] = value;
  const typeLower = type.toLowerCase();

  const incrementLength = () => {
    if (length > 1) setLength(length - 1);
  };

  const decrementLength = () => {
    if (length < 60) setLength(length + 1);
  };

  return (
    <div className={typeLower}>
      <h2 id={`${typeLower}-label`}>{type} Length</h2>
      <div className={`${typeLower}-inner`}>
        <button
          id={`${typeLower}-decrement`}
          disabled={active}
          onClick={incrementLength}
        >
          <i className="fas fa-arrow-down"></i>
        </button>
        <span id={`${typeLower}-length`}>{length}</span>
        <button
          id={`${typeLower}-increment`}
          disabled={active}
          onClick={decrementLength}
        >
          <i className="fas fa-arrow-up"></i>
        </button>
      </div>
    </div>
  );
};

export default PomoType;
