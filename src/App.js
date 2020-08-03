// import React, { useEffect } from 'react';
import React, { Component } from 'react';
import { checkRemoteUser } from './store/actions/auth';
import { getMainPageProducts } from './store/actions/products';
import { getAdvertising } from './store/actions/ads';
import './App.css';
import Auth from './components/register';
import { Route, Link } from 'react-router-dom';
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
import Dashboard from '../src/components/admin';
import CustomerServiceAdmin from './components/customerService/Admin';
import CustomerServiceClient from './components/customerService/Client';
import { test, socket } from './service/socket';
import Stores from '../src/components/storespage/index';


class App extends Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
    let socket;
  }
  async componentWillMount() {
    let auth = await cookie.load('auth');
    if (auth) {
      this.props.checkRemoteUser(auth);
    }
    await this.props.getMainPageProducts();
    await this.props.getAdvertising();
  }
  componentDidMount() {
    setTimeout(() => {
      let { username, avatar, _id } = this.props.user;
      test({
        username,
        avatar,
        _id,
      });
      console.log(socket);
      socket.emit('massege', { name: 'helo' });
      socket.on('test', () => {
        console.log('hello ladies');
      });

      console.log(this.props.user);
    }, 1200);
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
        <Route exact path="/add/product">
          <AddProduct />
        </Route>
        <Route exact path="/user/applystore">
          <StoreApplicationPage />
        </Route>
        <Route exact path="/store/:id">
          <Storepage />
        </Route>
        <Route exact path="/profile/:id">
          <Profilepage />
        </Route>
        <Route exact path="/products/">
          <SearchResults />
        </Route>
        <Route exact path="/aboutUs">
          <Aboutus />
        </Route>
        <Route exact path="/admin/dashboard">
          <Dashboard />
        </Route>
        <Route exact path="/admin/customerservice">
          <CustomerServiceAdmin />
        </Route>
        <Route exact path="/customerservice">
          <CustomerServiceClient />
        </Route>
        <Route exact path="/stores">
          <Stores />
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
