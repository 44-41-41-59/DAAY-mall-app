import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';

import Products from './components/product/';
import Homepage from './components/homepage/';
import Header from '../src/components/header';
import Footer from '../src/components/footer';


function App() {
  return (
    <div className="App">
      <Header />

      <Route exact path="/">
        <Homepage />
      </Route>

      <Route exact path="/product">
        <Products />
      </Route>

      <Footer />
    </div>
  );
}

export default App;
