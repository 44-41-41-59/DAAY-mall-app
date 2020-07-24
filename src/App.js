import React from 'react';
import './App.css';

import Homepage from './components/homepage/';
import Header from '../src/components/header';
import Footer from '../src/components/footer';


function App() {
  return (
    <div className="App">
      <Homepage />
      <Header />
      <Footer />
    </div>
  );
}

export default App;
