import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useSelector, useDispatch, connect } from 'react-redux';
import {
  MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBDropdown,
  MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBIcon,
} from 'mdbreact';
import { If, Then, Else } from '../if/if';
import Show from '../show';

import { logout } from '../../store/actions/auth';

import './header.css';

function Header(props) {
  const history = useHistory();
  const logedin = useSelector((state) => state.user.logedin);
  const dispatch = useDispatch();
  function handelLogout() {
    dispatch(logout(history));
  }
  let state = {
    isOpen: false,
  };

  let toggleCollapse = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };
  return (
    <>
      <MDBNavbar color="#b1bace mdb-color lighten-4" dark expand="md" sticky='top'>
        <MDBNavbarBrand>
          <Link to="/">
            <img src='https://i.ibb.co/3pmPmvc/logo2-white-cropped.png' alt='logo' />
            {/* <img src='https://i.ibb.co/jk0Gc5H/logo2-black-cropped.png' alt='logo' /> */}
          </Link>
        </MDBNavbarBrand>
        <MDBNavbarToggler onClick={toggleCollapse} />
        <MDBCollapse id="navbarCollapse3" isOpen={state.isOpen} navbar>
          <MDBNavbarNav left>
            <MDBNavItem active>
              <MDBNavLink to='/'>Home</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to='/stores'>Stores</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to='/aboutus'>About us</MDBNavLink>
            </MDBNavItem>
          </MDBNavbarNav>
          <MDBNavbarNav right>
            <div class="form-group has-search" id="searchFormHeader">
              <span
                class="fa fa-search form-control-feedback"
                id="searchIcon"
              ></span>
              <input type="text" class="form-control" placeholder="Search" />
            </div>

            <MDBNavItem>
              <MDBDropdown>
                <MDBDropdownToggle nav caret >
                  <div className="d-none d-md-inline">
                    <MDBIcon icon="question-circle" style={{ marginRight: '1vw' }} />
                    Help
                  </div>
                </MDBDropdownToggle>
                <MDBDropdownMenu className="dropdown-default">
                  <MDBDropdownItem >
                    <Link to='/customerservice'>Customer Service</Link>
                  </MDBDropdownItem>
                  <MDBDropdownItem >
                    <Link to=''>Website Policies</Link>
                  </MDBDropdownItem>
                  <MDBDropdownItem >
                    <Link to=''>FAQ</Link>
                  </MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavItem>

            <If condition={!logedin}>
              <Then>
                <MDBNavItem>

                  <MDBDropdownToggle nav >
                    <Link to='/auth' style={{ color: 'white' }}>
                      <div className="d-none d-md-inline">
                        <i class="fas fa-user"></i>
                        Login
                      </div>
                    </Link>
                  </MDBDropdownToggle>
                </MDBNavItem>
              </Then>
              <Else>
                <MDBNavItem>
                  <MDBDropdown>
                    <MDBDropdownToggle nav caret>
                      <div className="d-none d-md-inline">
                        <i class="fas fa-user" style={{ marginRight: '1vw' }}></i>
                        Profile
                      </div>
                    </MDBDropdownToggle>
                    <MDBDropdownMenu className="dropdown-default">
                      <MDBDropdownItem >
                        <Link to={`/profile/${props.user._id}`}>My profile</Link>
                      </MDBDropdownItem>
                      <Show condition={props.user.role==='owner'}>
                        <MDBDropdownItem >
                          <Link to={`/store/${props.user.stores}`}>My store</Link>
                        </MDBDropdownItem>
                      </Show>
                      <MDBDropdownItem >
                        <Link to={`/profile/${props.user._id}`}>My orders</Link>
                      </MDBDropdownItem>
                      <MDBDropdownItem >
                        <Link to={`/profile/${props.user._id}`}>Favorites</Link>
                      </MDBDropdownItem>
                      <MDBDropdownItem>
                        <Link to={`/profile/${props.user._id}`}>Settings</Link>
                      </MDBDropdownItem>
                      <MDBDropdownItem onClick={handelLogout}>
                        <Link>Logout</Link>
                      </MDBDropdownItem>
                    </MDBDropdownMenu>
                  </MDBDropdown>
                </MDBNavItem>
                <MDBNavItem>
                  <MDBDropdown>
                    <MDBDropdownToggle nav >
                      <div className="d-none d-md-inline" style={{ marginRight: '1vw' }}>
                        <Link to={`/cart/user/${props.user._id}`} style={{ color: 'white' }}>
                          <MDBIcon icon="shopping-cart" style={{ marginRight: '1vw' }} />
                          Cart {props.user.cart.length}
                        </Link>
                      </div>
                    </MDBDropdownToggle>
                  </MDBDropdown>
                </MDBNavItem>
              </Else>
            </If>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBNavbar>
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
