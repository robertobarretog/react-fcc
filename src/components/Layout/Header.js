import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  const toggleNav = () => {
    document.querySelector('.main-nav').classList.toggle('active');
  };

  return (
    <header>
      <nav className="navbar">
        <span className="navbar-toggle" onClick={toggleNav}>
          <i className="fas fa-bars"></i>
        </span>
        <span className="nav-logo">FCC React Apps</span>
        <ul className="main-nav">
          <li>
            <NavLink
              exact
              to="/"
              className="nav-link"
              activeClassName="current"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/drum-machine"
              className="nav-link"
              activeClassName="current"
            >
              Drum Machine
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/pomodoro"
              className="nav-link"
              activeClassName="current"
            >
              Pomodoro Clock
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/calculator"
              className="nav-link"
              activeClassName="current"
            >
              Calculator
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/markdown"
              className="nav-link"
              activeClassName="current"
            >
              Markdown
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
