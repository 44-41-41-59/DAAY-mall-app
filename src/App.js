import React from 'react';
import './App.css';
import Products from '../src/components/product/app.js';
import Homepage from './components/homepage/';
import Header from '../src/components/header';
import Footer from '../src/components/footer';


function App() {
  return (
    <div className="App">
      <Header />
      <Homepage />
      <Products />
      <Footer />
    </div>
  );
}

export default App;
