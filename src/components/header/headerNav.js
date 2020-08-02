import React from 'react';
import { Link } from 'react-router-dom';
import { connect, useSelector } from 'react-redux';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Show from '../show';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

import {
  MDBNavbar, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBDropdown,
  MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBIcon,
} from 'mdbreact';

function HeaderNav(props) {
  return (
    <MDBNavbar color="bg-light" light expand="md" style={{ height: '6vh' }}>
      <MDBNavbarNav left>
        <Show condition={props.owner}>
          <MDBNavItem>
            <Link style={{ color: '#424242' }} to={`/store/${props.user.stores}`}>
              <MDBIcon icon="store-alt" style={{ color: '#424242', marginRight: '1vw' }} />
              My store
            </Link>
          </MDBNavItem>
        </Show>
      </MDBNavbarNav>
    </MDBNavbar>
  );
}

const mapStateToProps = (state) => {
  let owner = false;
  if (state.user.role === 'owner') {
    owner = true;
  }
  return {
    user: state.user,
    fetch: state.fetching,
    owner,
    store: state.store,
  };
};

export default connect(mapStateToProps)(HeaderNav);

