import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import HeaderNav from './headerNav';
import { Link, useHistory } from 'react-router-dom';
import { MDBIcon } from 'mdbreact';
import Show from '../show';
import { useSelector, useDispatch, connect } from 'react-redux';
import { logout } from '../../store/actions/auth';

import './header.css';

function Header(props) {
  const history = useHistory();
  const logedin = useSelector((state) => state.user.logedin);
  const dispatch = useDispatch();
  function handelLogout() {
    dispatch(logout(history));
  }
  return (
    <>
      <header>
        <Navbar bg="light" expand="lg" id="header">
          <div id="logoImg">
            <Link to="/">
              <Navbar.Brand>
                <MDBIcon icon="weight-hanging" id="logoIcon" />
              DAAY-mall
              </Navbar.Brand>
            </Link>
          </div>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <div class="form-group has-search" id="searchFormHeader">
              <span
                class="fa fa-search form-control-feedback"
                id="searchIcon"
              ></span>
              <input type="text" class="form-control" placeholder="Search" />
            </div>
            <Nav className="mr-auto">
              <Show condition={!logedin}>
                {' '}
                <Link to="/auth">sign in</Link>{' '}
              </Show>
              <MDBIcon far icon="user" id="userIcon" />
              <NavDropdown id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">
                Edit Profile
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.1">Profile</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">My orders</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Favorites</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4">Settings</NavDropdown.Item>
                <Show condition={logedin}>
                  <NavDropdown.Item onClick={handelLogout}>
                  Log out
                  </NavDropdown.Item>
                </Show>
              </NavDropdown>

              <p id="numOfitemsAddedToCart">{props.user.cart.length}</p>
              {!props.user._id && (
                <Link to={`/auth`}>
                  <div id="cartIcon" style={{ color: 'black' }}>
                    <MDBIcon icon="shopping-cart" />
                  </div>
                </Link>
              )}
              {props.user._id && (
                <Link to={`/cart/user/${props.user._id}`}>
                  <div id="cartIcon" style={{ color: 'black' }}>
                    <MDBIcon icon="shopping-cart" />
                  </div>
                </Link>
              )}

              <NavDropdown title="Help" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">
                Customer Service
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                Return Poilicy
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                Shipping Policy
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </header>
      <HeaderNav/>
     
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
    fetch: state.fetching,
  };
};

export default connect(mapStateToProps)(Header);
