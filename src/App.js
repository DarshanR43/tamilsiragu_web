import React from 'react';
import Events from './components/TamilSiraguEvents';
import Footer from './components/Footer';
import Header from './components/Header';
import Teams from './components/Teams';
import Home from './components/Home';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header/>
      <Events />
      <Footer/>
      <Teams/>
      <Home></Home>
    </div>
  );
}

export default App;