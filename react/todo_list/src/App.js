import React from 'react';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Tutorial from './components/Tutorial';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div>
      <Header />
      <MainContent />
      <Tutorial />
      <Footer />
    </div>
  );
}

export default App;
