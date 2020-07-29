import React from 'react';
import reactLogo from '../image/reactlogo.png';
import fccLogo from '../image/fcclogo.png';

const Home = () => (
  <div className="Home">
    <h1 className="title">FCC - Front End Libraries</h1>
    <p className="lead">
      This project contains different apps built with React, use the navigation
      menu to explore them
    </p>
    <p>Built as part of freeCodeCamp's Front End Libraries Certification</p>
    <div className="home-logos">
      <a href="http://reactjs.org" target="_blank" rel="noopener noreferrer">
        <img src={reactLogo} alt="React logo" />
      </a>
      <a
        href="https://www.freecodecamp.org/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={fccLogo} alt="freeCodeCamp logo" />
      </a>
    </div>
  </div>
);

export default Home;
