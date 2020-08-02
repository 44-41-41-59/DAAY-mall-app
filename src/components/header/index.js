import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import HeaderNav from './headerNav';
import { Link, useHistory } from 'react-router-dom';
import {
  MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBDropdown,
  MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBIcon,
} from 'mdbreact';
import Show from '../show';
import { useSelector, useDispatch, connect } from 'react-redux';
import { logout } from '../../store/actions/auth';
import { If, Then, Else } from '../if/if';


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
              <MDBNavLink to="#!">Stores</MDBNavLink>
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
                <MDBDropdownToggle nav >
                  <div className="d-none d-md-inline">
                    <MDBIcon icon="question-circle" />
                    Help
                  </div>
                </MDBDropdownToggle>
                {/* <MDBDropdownMenu className="dropdown-default">
                  <MDBDropdownItem >
                    <Link to=''>Customer Service</Link>
                  </MDBDropdownItem>
                  <MDBDropdownItem >
                    <Link to=''>Return Policy</Link>
                  </MDBDropdownItem>
                  <MDBDropdownItem >
                    <Link to=''>Shipping Policy</Link>
                  </MDBDropdownItem>
                  <MDBDropdownItem >
                    <Link to=''>FAQ</Link>
                  </MDBDropdownItem>
                </MDBDropdownMenu> */}
              </MDBDropdown>
            </MDBNavItem>

            <MDBNavItem>
              <If condition={!logedin}>
                <Then>
                  <MDBDropdownToggle nav >
                    <Link to='/auth' style={{ color: 'white' }}>
                      <div className="d-none d-md-inline">
                        <i class="fas fa-user"></i>
                        Login
                      </div>
                    </Link>
                  </MDBDropdownToggle>
                </Then>
                <Else>
                  <MDBDropdown>
                    <MDBDropdownToggle nav caret>
                      <div className="d-none d-md-inline">
                        <Link to={`/cart/user/${props.user._id}`} style={{ color: 'white', marginLeft: '1vw' }}>
                          <MDBIcon icon="shopping-cart" />
                          Cart ({props.user.cart.length})
                        </Link>
                      </div>
                      <div className="d-none d-md-inline">
                        <i class="fas fa-user"></i>
                        Profile
                      </div>
                    </MDBDropdownToggle>
                    <MDBDropdownMenu className="dropdown-default">
                      <MDBDropdownItem >
                        <Link to={`/profile/${props.user._id}`}>My profile</Link>
                      </MDBDropdownItem>
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
                </Else>
              </If>
            </MDBNavItem>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBNavbar>
      <Show condition={props.user.role==='owner'}>
        <HeaderNav />
      </Show>
    </>

    // <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky="top">
    //   <Navbar.Brand href="#home">DAAY-mall</Navbar.Brand>
    //   <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    //   <Navbar.Collapse id="responsive-navbar-nav">
    //     <Nav className="mr-auto">
    //       <Nav.Link href="#features">Features</Nav.Link>
    //       <Nav.Link href="#pricing">Pricing</Nav.Link>
    //       <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
    //         <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
    //         <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
    //         <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
    //         <NavDropdown.Divider />
    //         <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
    //       </NavDropdown>
    //     </Nav>
    //     <Nav>
    //       <Nav.Link href="#deets">More deets</Nav.Link>
    //       <Nav.Link eventKey={2} href="#memes">
    //         Dank memes
    //       </Nav.Link>
    //     </Nav>
    //   </Navbar.Collapse>
    // </Navbar>
    // <>
    //   <header>
    //     <Navbar bg="light" expand="lg" id="header">
    //       <div id="logoImg">
    //         <Link to="/">
    //           <Navbar.Brand>
    //             <MDBIcon icon="weight-hanging" id="logoIcon" />
    //           DAAY-mall
    //           </Navbar.Brand>
    //         </Link>
    //       </div>

    //       <Navbar.Toggle aria-controls="basic-navbar-nav" />
    //       <Navbar.Collapse id="basic-navbar-nav">
    //         <div class="form-group has-search" id="searchFormHeader">
    //           <span
    //             class="fa fa-search form-control-feedback"
    //             id="searchIcon"
    //           ></span>
    //           <input type="text" class="form-control" placeholder="Search" />
    //         </div>
    //         <Nav className="mr-auto">
    //           <Show condition={!logedin}>
    //             {' '}
    //             <Link to="/auth">sign in</Link>{' '}
    //           </Show>
    //           <MDBIcon far icon="user" id="userIcon" />
    //           <NavDropdown id="basic-nav-dropdown">
    //             <NavDropdown.Item>
    //               <Link to={`/profile/${props.user._id}`}>Profile</Link>
    //             </NavDropdown.Item>
    //             <NavDropdown.Item >My orders</NavDropdown.Item>
    //             <NavDropdown.Item >Favorites</NavDropdown.Item>
    //             <NavDropdown.Item>Settings</NavDropdown.Item>
    //             <Show condition={logedin}>
    //               <NavDropdown.Item onClick={handelLogout}>
    //               Log out
    //               </NavDropdown.Item>
    //             </Show>
    //           </NavDropdown>

    //           <p id="numOfitemsAddedToCart">{props.user.cart.length}</p>
    //           {!props.user._id && (
    //             <Link to={`/auth`}>
    //               <div id="cartIcon" style={{ color: 'black' }}>
    //                 <MDBIcon icon="shopping-cart" />
    //               </div>
    //             </Link>
    //           )}
    //           {props.user._id && (
    //             <Link to={`/cart/user/${props.user._id}`}>
    //               <div id="cartIcon" style={{ color: 'black' }}>
    //                 <MDBIcon icon="shopping-cart" />
    //               </div>
    //             </Link>
    //           )}

    //           <NavDropdown title="Help" id="basic-nav-dropdown">
    //             <NavDropdown.Item href="#action/3.1">
    //             Customer Service
    //             </NavDropdown.Item>
    //             <NavDropdown.Item href="#action/3.2">
    //             Return Poilicy
    //             </NavDropdown.Item>
    //             <NavDropdown.Item href="#action/3.3">
    //             Shipping Policy
    //             </NavDropdown.Item>
    //           </NavDropdown>
    //         </Nav>
    //       </Navbar.Collapse>
    //     </Navbar>
    //   </header>
    //   <HeaderNav/>

    // </>
  );
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
    fetch: state.fetching,
  };
};

export default connect(mapStateToProps)(Header);
