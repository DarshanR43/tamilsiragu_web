import React from 'react';
import Events from './components/TamilSiraguEvents';
import Footer from './components/Footer';
import Header from './components/Header';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header/>
      <Events />
      <Footer/>
    </div>
  );
}

export default App;