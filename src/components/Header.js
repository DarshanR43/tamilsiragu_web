import React, { useState } from 'react';
import './Header.css';
import logoPlaceholder from '../Asserts/Test.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <img src={logoPlaceholder} alt="Tamil Siragu Logo" className="logo-image" />
          <span className="logo-text">தமிழ் சிறகு</span>
        </div>

        <button 
          className={`menu-toggle ${isMenuOpen ? 'active' : ''}`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <ul className={`navbar-menu ${isMenuOpen ? 'active' : ''}`}>
          <li className="navbar-item">
            <a href="#home" className="navbar-link">Home</a>
          </li>
          <li className="navbar-item">
            <a href="#team" className="navbar-link">Meet Our Team</a>
          </li>
          <li className="navbar-item">
            <a href="events.js" className="navbar-link">Events</a>
          </li>
          <li className="navbar-item">
            <a href="#about" className="navbar-link">About Us</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;