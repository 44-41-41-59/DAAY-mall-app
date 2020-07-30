import React from 'react';
import { ProSidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import {Link} from 'react-router-dom';
// import Accordion from 'react-bootstrap/Accordion';
// import Card from 'react-bootstrap/Card';
// import Button from 'react-bootstrap/Button';



import './homepage.css';

function SideNav(props) {
  return (

  /*  PLEASE KEEP THIS COMMENT */

  // <Accordion defaultActiveKey="0">
  //   <Card>
  //     <Card.Header>
  //       <Accordion.Toggle as={Button} variant="link" eventKey="0">
  //         Click me!
  //       </Accordion.Toggle>
  //     </Card.Header>
  //     <Accordion.Collapse eventKey="0">
  //       <Card.Body>Hello! I'm the body</Card.Body>
  //     </Accordion.Collapse>
  //   </Card>
  // </Accordion>

  //   <div class="dropdown">
  //   <button class="dropbtn">Dropdown</button>
  //   <div class="dropdown-content">
  //     <a href="#">Link 1</a>
  //     <a href="#">Link 2</a>
  //     <a href="#">Link 3</a>
  //   </div>
  // </div>

    <ProSidebar >
      <Menu >
        <MenuItem>Dashboard</MenuItem>
        <SubMenu title="Home, Pet & Appliances" >
          <MenuItem >  <Link to="/search?category=Household+Items"/> Household Items</MenuItem>
          <MenuItem > <Link to="/search?category=Pet+Products" /> Pet Products </MenuItem>
          <MenuItem > <Link to="/search?category=Garden+Supplies" /> Garden Supplies</MenuItem>

          
        </SubMenu>
        <SubMenu title="Home Improvement & Tools" >
          <MenuItem> <Link to="/search?category=>Home+Improvment+Tools" /> Home Improvment Tools</MenuItem>
          <MenuItem> <Link to="/search?category=Indoor+Lightneing" />Indoor Lightneing</MenuItem>
          <MenuItem> <Link to="/search?category=Outdoor+Lightning" /> Outdoor Lightning</MenuItem>
        </SubMenu>

        <SubMenu title="Outdoor Fun & Sports" >
          <MenuItem> <Link to="/search?category=Sportswear" /> Sportswear</MenuItem>
          <MenuItem>  <Link to="/search?category=Sneakers" /> Sneakers</MenuItem>          
          <MenuItem> <Link to="/search?category=Other+Sports+Equipment"/> Other Sports Equipment</MenuItem>
        </SubMenu>

        <SubMenu title="Automobiles & Motorcycles" >
          <MenuItem> <Link to="/search?category=Maintanace&Care+Tools" /> Maintanace&Care Tools</MenuItem>
          <MenuItem>  <Link to="/search?category=Interior+Accessories" />Interior Accessories</MenuItem>
          <MenuItem> <Link to="/search?category=Exterior+Accessories" /> Exterior Accessories</MenuItem>
        </SubMenu>

        <SubMenu title="Consumer Electronics" >
          <MenuItem> <Link to="/search?category=Smart+Electronics" /> Smart Electronics</MenuItem>
          <MenuItem>  <Link to="/search?category=Home+Audio&Video" /> Home Audio&Video</MenuItem>
          <MenuItem> <Link to="/search?category=Video+Games" />Video Games</MenuItem>
        </SubMenu>
        
        <SubMenu title="Computer, Office & Security" >
          <MenuItem>Component 1</MenuItem>
          <MenuItem>Component 1</MenuItem>
          <MenuItem>Component 1</MenuItem>
        </SubMenu>
        <SubMenu title="Phones & Telecommunications" >
          <MenuItem>Component 1</MenuItem>
          <MenuItem>Component 1</MenuItem>
          <MenuItem>Component 1</MenuItem>
        </SubMenu>
        <SubMenu title="Toys , Kids & Babies" >
          <MenuItem>Component 1</MenuItem>
          <MenuItem>Component 1</MenuItem>
          <MenuItem>Component 1</MenuItem>
        </SubMenu>
        <SubMenu title="Beauty, Health & Hair" >
          <MenuItem>Component 1</MenuItem>
          <MenuItem>Component 1</MenuItem>
          <MenuItem>Component 1</MenuItem>
        </SubMenu>
        <SubMenu title="Men's Fashion" >
          <MenuItem>Component 1</MenuItem>
          <MenuItem>Component 1</MenuItem>
          <MenuItem>Component 1</MenuItem>
        </SubMenu>
        <SubMenu title="Women's Fashion" >
          <MenuItem>Dresses</MenuItem>
          <MenuItem>Tees</MenuItem>
          <MenuItem>Blouses & Shirts</MenuItem>
          <MenuItem>Hoodies & Sweatshirts</MenuItem>
          <MenuItem>Suits & Blazers</MenuItem>
          <MenuItem>Coats & Jackets</MenuItem>
          <MenuItem>Leggings</MenuItem>
          <MenuItem>Skirts</MenuItem>
          <MenuItem>Skirts</MenuItem>
          <MenuItem>Jeans</MenuItem>
          <MenuItem>Cosplay Costumes</MenuItem>
          <MenuItem>Cosplay Costumes</MenuItem>
          <MenuItem>Pajama Sets</MenuItem>
          <MenuItem>Accessories</MenuItem>
          <MenuItem>Bucket Hats</MenuItem>
          <MenuItem>Sunglasses</MenuItem>
          <MenuItem>Belts</MenuItem>
        </SubMenu>
        <SubMenu title="Bags & Shoes" >
          <MenuItem>Component 1</MenuItem>
          <MenuItem>Component 1</MenuItem>
          <MenuItem>Component 1</MenuItem>
        </SubMenu>
        <SubMenu title="Jewelry & Watches" >
          <MenuItem>Component 1</MenuItem>
          <MenuItem>Component 1</MenuItem>
          <MenuItem>Component 1</MenuItem>
        </SubMenu>
      </Menu>
    </ProSidebar>
  );
}

export default SideNav;
