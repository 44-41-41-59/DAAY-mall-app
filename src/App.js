import React from 'react';
import './App.css';
import Aside from '../src/components/header';
import { Route } from 'react-router-dom';
import Auth from './components/auth';

function App() {
  return (
    <div className="App">
      <Route exact path="/auth">
        <Auth />
      </Route>
      <Aside />
      <h1>HELLO WORLD!!</h1>
    </div>
  );
}

export default App;
