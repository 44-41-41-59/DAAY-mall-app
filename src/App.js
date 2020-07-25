import React from 'react';
import './App.css';
import Auth from './components/auth';
import { Route } from 'react-router-dom';
import Products from './components/product/';
import Homepage from './components/homepage/';
import Header from '../src/components/header';
import Footer from '../src/components/footer';
import SearchResults from '../src/components/search/';


function App() {
  return (
    <div className="App">
      <Header />
      <Route exact path="/auth">
        <Auth />
      </Route>
      <Route exact path="/">
        <Homepage />
      </Route>
      <Route exact path="/product">
        <Products />
      </Route>
      <Route exact path="/search">
        <SearchResults />
      </Route>
      <Footer />
    </div>
  );
}

export default App;
