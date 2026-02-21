import React, { useState } from 'react';
import Header from './components/Header';
import Home from './components/Home';
import Teams from './components/Teams';
import TamilSiraguEvents from './components/TamilSiraguEvents';
import Footer from './components/Footer';
import About from './components/About';

function App() {
  // Default to the home page
  const [currentPage, setCurrentPage] = useState('home');

  // Function to render the correct component based on state
  const renderPage = () => {
    switch (currentPage) {
      // inside the switch statement in App.jsx
      case 'home':
        return <Home setCurrentPage={setCurrentPage} />;
      case 'teams':
        return <Teams />;
      case 'events':
        return <TamilSiraguEvents />;
      case 'about':
        return <About />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#FAF7F2]">
      {/* Header stays at the top always */}
      <Header setCurrentPage={setCurrentPage} currentPage={currentPage} />
      
      {/* Dynamic Page Content */}
      <main className="flex-grow">
        {renderPage()}
      </main>

      {/* Footer stays at the bottom always */}
      <Footer setCurrentPage={setCurrentPage} />
    </div>
  );
}

export default App;