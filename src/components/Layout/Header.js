import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <header>
    <div className="container">
      <nav id="main-nav">
        <ul>
          <li>
            <NavLink exact to="/" activeClassName="current">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/drum-machine" activeClassName="current">
              Drum Machine
            </NavLink>
          </li>
          <li>
            <NavLink to="/pomodoro" activeClassName="current">
              Pomodoro Clock
            </NavLink>
          </li>
          <li>
            <NavLink to="/calculator" activeClassName="current">
              Calculator
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  </header>
);

export default Header;
