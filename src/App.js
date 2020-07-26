// import React, { useEffect } from 'react';
import React, { Component } from 'react';
import { checkRemoteUser } from './store/actions/auth';

import './App.css';
import Auth from './components/auth';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import cookie from 'react-cookies';
import Products from './components/product/';
import Homepage from './components/homepage/';
import Header from '../src/components/header';
import Footer from '../src/components/footer';
import Storepage from '../src/components/storepage';
import Profilepage from '../src/components/profilepage';
// import Image from './components/imagetest';

class App extends Component {
  constructor(props) {
    super(props);
  }
  componentWillMount() {
    // cookie.save(
    //   'auth',
    //   'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmMWI2MDVkMzc0MDQ2Mzc2YzU1Y2E0NCIsImlhdCI6MTU5NTcwNTIzOCwiZXhwIjoxNTk2NTY5MjM4fQ.RfOzQ70WC7_zJzJnkJ9TDAFMt_l0R1oV2IweFRYlE-w',
    //   { path: '/' }
    // );
    let auth = cookie.load('auth');
    if (auth) {
      this.props.checkRemoteUser(auth);
    }
  }
  render() {
    return (
      <div className="App">
        <Header />
        {/* <Image /> */}
        <Route exact path="/auth">
          <Auth />
        </Route>
        <Route exact path="/">
          <Homepage />
        </Route>
        <Route exact path="/product">
          <Products />
        </Route>
        <Route exact path="/store">
        <Storepage />
      </Route>
      <Route exact path="/profile">
        <Profilepage />
      </Route>
      <Footer />
}

const mapStateToProps = (state) => {
  return { user: state.user };
};
const actionCreater = (dispatch) => ({
  checkRemoteUser: () => dispatch(checkRemoteUser()),
});
export default connect(mapStateToProps, actionCreater)(App);
