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
// import AddProduct from './components/product/add/';
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
import Break from './components/customerService/Admin/break';
import { test, socket } from './service/socket';
import Stores from '../src/components/storespage/index';
import NotFound from '../src/components/notfound/notfound';
import WebSitePolicie from './components/webSitePolicies/';
import FAQ from './components/FAQ/';
import OwnerDashboard from './components/ownerDashboard';
import Freeze from './components/Freeze/';
import AdminPage from './components/adminPage/';


import Test from '../src/components/customerService/Admin/index1';
import Policies from './components/webSitePolicies';

import AddProduct from './components/product/add/add-product';

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
          {/* <AddProduct /> */}
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
        <Route exact path="/customerservicetest">
          <Test />
        </Route>
        <Route exact path="/break">
          <Break />
        </Route>
        <Route exact path="/webSitePolicies">
          <WebSitePolicie />
        </Route>
        <Route exact path="/faq">
          <FAQ />
        </Route>
        <Route exact path="/stores">
          <Stores />
        </Route>
        <Route exact path="/dashboard/store/:id">
          <OwnerDashboard />
        </Route>
        <Route exact path="/admin/adminPage">
          <AdminPage />
        </Route>
        <Route exact path="/admin/freeze">
          <Freeze />
        </Route>
        {/* <Route exact={true} path="*">
          <NotFound  />
        </Route> */}
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
