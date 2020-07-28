import React from 'react';

const Footer = () => (
  <footer id="main-footer">
    <div className="footer-content container">
      <a
        href="https://github.com/robertobarretog"
        target="_blank"
        rel="noopener noreferrer"
      >
        Roberto Barreto &copy; {new Date().getFullYear()}
        <i className="fab fa-github"></i>
      </a>
    </div>
  </footer>
);

export default Footer;
