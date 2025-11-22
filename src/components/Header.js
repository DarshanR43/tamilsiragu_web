import React, { useState } from 'react';
import './Header.css';
import logoPlaceholder from '../Asserts/Test.png';

const Header = ({ setCurrentPage, currentPage }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavClick = (page) => {
    setCurrentPage(page);
    setIsMenuOpen(false);
    window.scrollTo(0, 0);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo" onClick={() => handleNavClick('home')} style={{ cursor: 'pointer' }}>
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
            <a 
              href="#home" 
              className={`navbar-link ${currentPage === 'home' ? 'active' : ''}`}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('home');
              }}
            >
              Home
            </a>
          </li>
          <li className="navbar-item">
            <a 
              href="#teams" 
              className={`navbar-link ${currentPage === 'teams' ? 'active' : ''}`}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('teams');
              }}
            >
              Meet Our Team
            </a>
          </li>
          <li className="navbar-item">
            <a 
              href="#events" 
              className={`navbar-link ${currentPage === 'events' ? 'active' : ''}`}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('events');
              }}
            >
              Events
            </a>
          </li>
          <li className="navbar-item">
            <a 
              href="#about" 
              className="navbar-link"
              onClick={() => setIsMenuOpen(false)}
            >
              About Us
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;