import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import FormControl from 'react-bootstrap/FormControl';
import Image from 'react-bootstrap/Image';
import './header.css';

export default function Header(props) {
  return (
    <header>
      <Navbar bg="light" expand="lg" >
        <Navbar.Brand href="#home" >
          DAAY-mall
        </Navbar.Brand>
        
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-success">Search</Button>
        </Form>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto" >
            <Image src="https://cdn0.iconfinder.com/data/icons/set-ui-app-android/32/8-512.png"/>
            <NavDropdown  id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Edit Profile</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">My orders</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Favorites</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">Settings</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">Log out</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Cart" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">View Cart</NavDropdown.Item>
            </NavDropdown>
            
            <NavDropdown title="Help" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Customer Service</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Return Poilicy</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Shipping Policy</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      
    </header>
  );
}
