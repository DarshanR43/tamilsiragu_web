import React, { useState, useEffect } from 'react';
import logoPlaceholder from '../Asserts/Test.png';

const Header = ({ setCurrentPage, currentPage }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (page) => {
    setCurrentPage(page);
    setIsMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav className={`fixed w-full top-0 z-50 transition-all duration-300 border-b-2 ${
      scrolled 
        ? 'bg-[#5C1615]/95 backdrop-blur-md border-[#D4AF37]/30 py-2 shadow-[0_4px_20px_rgba(0,0,0,0.3)]' 
        : 'bg-gradient-to-r from-[#4A1212] to-[#5C1615] border-transparent py-4'
    }`}>
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6">
        {/* Logo Section */}
        <div
          className="flex items-center gap-4 cursor-pointer group"
          onClick={() => handleNavClick('home')}
        >
          <div className="w-12 h-12 rounded-full bg-[#FFF9EE] p-1 flex items-center justify-center transition-all duration-500 group-hover:rotate-[360deg] border-2 border-[#D4AF37]">
            <img src={logoPlaceholder} alt="Tamil Siragu Logo" className="w-full h-full object-contain rounded-full" />
          </div>
          <div className="flex flex-col">
            <span className="text-xl md:text-2xl font-bold text-[#FFF9EE] tracking-wider drop-shadow-md">
              தமிழ் சிறகு
            </span>
            <span className="text-[0.65rem] text-[#D4AF37] uppercase tracking-[0.3em] font-serif">
              Amrita Siragu
            </span>
          </div>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden flex flex-col justify-center gap-1.5 w-8 h-8 z-[1001]"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 bg-[#D4AF37] transition-transform duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-6 h-0.5 bg-[#D4AF37] transition-opacity duration-300 ${isMenuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-0.5 bg-[#D4AF37] transition-transform duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>

        {/* Navigation Links */}
        <ul className={`
          flex flex-col md:flex-row md:items-center gap-6 md:gap-8 absolute md:static top-full left-0 w-full md:w-auto
          bg-[#5C1615] md:bg-transparent px-6 py-8 md:p-0 transition-all duration-300 origin-top border-b-2 border-[#D4AF37]/20 md:border-none
          ${isMenuOpen ? 'opacity-100 scale-y-100' : 'opacity-0 scale-y-0 md:opacity-100 md:scale-y-100'}
        `}>
          {['home', 'teams', 'events', 'about'].map((page) => (
            <li key={page}>
              <button
                onClick={() => handleNavClick(page)}
                className={`
                  relative text-sm uppercase tracking-widest font-serif font-medium transition-colors duration-300
                  ${currentPage === page ? 'text-[#D4AF37]' : 'text-[#FFF9EE]/80 hover:text-[#FFF9EE]'}
                `}
              >
                {page === 'home' ? 'Home' : page === 'teams' ? 'Team' : page === 'events' ? 'Events' : 'About'}
                {currentPage === page && (
                  <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-[#D4AF37] rotate-45 hidden md:block" />
                )}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Header;