import React from 'react';

const Footer = () => (
  <footer className="main-footer">
    <div className="footer-content">
      <span>Roberto Barreto &copy; {new Date().getFullYear()}</span>
      <a
        href="https://github.com/robertobarretog"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fab fa-github fa-2x"></i>
      </a>
    </div>
  </footer>
);

export default Footer;
