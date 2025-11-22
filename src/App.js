import React, { useState } from 'react';
import Header from './components/Header';
import Home from './components/Home';
import Teams from './components/Teams';
import TamilSiraguEvents from './components/TamilSiraguEvents';
import Footer from './components/Footer';
import './App.css';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch(currentPage) {
      case 'home':
        return <Home />;
      case 'teams':
        return <Teams />;
      case 'events':
        return <TamilSiraguEvents />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="App">
      <Header setCurrentPage={setCurrentPage} currentPage={currentPage} />
      {renderPage()}
      <Footer />
    </div>
  );
}

export default App;