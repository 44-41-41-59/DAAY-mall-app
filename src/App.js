// import React, { useEffect } from 'react';
import React, { Component } from 'react';
import { checkRemoteUser } from './store/actions/auth';
import { getMainPageProducts } from './store/actions/products';
import { getAdvertising } from './store/actions/ads';

import './App.css';
import Auth from './components/auth';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import cookie from 'react-cookies';
import Products from './components/product/';
import Carts from './components/cart/';
import AddProduct from './components/product/add/';
import Homepage from './components/homepage/';
import Header from '../src/components/header';
import Footer from '../src/components/footer';
import SearchResults from '../src/components/search/';
import Storepage from '../src/components/storepage';
import Profilepage from '../src/components/profilepage';
import StoreApplicationPage from './components/profilepage/store-application';
import Aboutus from './components/aboutUs/';

class App extends Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
  }
  async componentWillMount() {
    console.log('hiiiiiiiiiiiiiiiiiiii');
    let auth = cookie.load('auth');
    if (auth) {
      this.props.checkRemoteUser(auth);
    }
    await this.props.getMainPageProducts();
    await this.props.getAdvertising();
  }
  render() {
    return (
      <div className="App">
        <Header />
        <Route exact path="/auth">
          <Auth />
        </Route>
        <Route exact path="/">
          <Homepage />
        </Route>
        <Route exact path="/product/:id">
          <Products />
        </Route>
        <Route exact path="/cart/user/:id">
          <Carts />
        </Route>
        <Route exact path="/addproduct">
          <AddProduct />
        </Route>
        <Route exact path="/user/applystore">
          <StoreApplicationPage />
        </Route>
        <Route exact path="/store">
          <Storepage />
        </Route>
        <Route exact path="/profile">
          <Profilepage />
        </Route>
        <Route exact path="/search">
          <SearchResults />
        </Route>
        <Route exact path="/aboutUs">
          <Aboutus />
        </Route>
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { user: state.user };
};
const actionCreater = (dispatch) => ({
  checkRemoteUser: () => dispatch(checkRemoteUser()),
  getMainPageProducts: () => dispatch(getMainPageProducts()),
  getAdvertising: () => dispatch(getAdvertising()),
});
export default connect(mapStateToProps, actionCreater)(App);
