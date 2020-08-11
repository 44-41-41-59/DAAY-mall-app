import React from 'react';
import { ProSidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import { Link } from 'react-router-dom';


import './homepage.css';

function SideNav(props) {
  return (
    <ProSidebar>
      <Menu >
        <MenuItem><Link to="/products?category=general" />General</MenuItem>

        <SubMenu title="Men's Fashion" id='sideNavSubMenu'>
          <MenuItem id='sideNavSubMenu'>Bottoms</MenuItem>
          <MenuItem id='sideNavSubMenu'>T-shirts</MenuItem>
          <MenuItem id='sideNavSubMenu'>Outerwear & Jackets</MenuItem>
        </SubMenu>

        <SubMenu title="Women's Fashion" id='sideNavSubMenu'>
          <MenuItem id='sideNavSubMenu'>  <Link to="/products?category=Dresses" /> Dresses</MenuItem>
          <MenuItem id='sideNavSubMenu'>Tees</MenuItem>
          <MenuItem id='sideNavSubMenu'>Blouses & Shirts</MenuItem>
          <MenuItem id='sideNavSubMenu'>Hoodies & Sweatshirts</MenuItem>
          <MenuItem id='sideNavSubMenu'>Suits & Blazers</MenuItem>
          <MenuItem id='sideNavSubMenu'>Coats & Jackets</MenuItem>
          <MenuItem id='sideNavSubMenu'>Leggings</MenuItem>
          <MenuItem id='sideNavSubMenu'>Skirts</MenuItem>
          <MenuItem id='sideNavSubMenu'>Skirts</MenuItem>
          <MenuItem id='sideNavSubMenu'>Jeans</MenuItem>
          <MenuItem id='sideNavSubMenu'>Cosplay Costumes</MenuItem>
          <MenuItem id='sideNavSubMenu'>Cosplay Costumes</MenuItem>
          <MenuItem id='sideNavSubMenu'>Pajama Sets</MenuItem>
          <MenuItem id='sideNavSubMenu'>Accessories</MenuItem>
          <MenuItem id='sideNavSubMenu'>Bucket Hats</MenuItem>
          <MenuItem id='sideNavSubMenu'>Sunglasses</MenuItem>
          <MenuItem id='sideNavSubMenu'>Belts</MenuItem>
        </SubMenu>

        <SubMenu title="Bags & Shoes" id='sideNavSubMenu'>
          <MenuItem id='sideNavSubMenu'>Women's Luggage & Bags</MenuItem>
          <MenuItem id='sideNavSubMenu'>Women's Shoes</MenuItem>
          <MenuItem id='sideNavSubMenu'>Men's Luggage & Bags</MenuItem>
          <MenuItem id='sideNavSubMenu'>Men's Shoes</MenuItem>
        </SubMenu>

        <SubMenu title="Jewelry & Watches" id='sideNavSubMenu'>
          <MenuItem id='sideNavSubMenu'>Women's Watches</MenuItem>
          <MenuItem id='sideNavSubMenu'>Men's Watches</MenuItem>
          <MenuItem id='sideNavSubMenu'>Wedding & Engagement</MenuItem>
        </SubMenu>

        <SubMenu title="Toys , Kids & Babies" id='sideNavSubMenu'>
          <MenuItem id='sideNavSubMenu'>Mother & Baby Items</MenuItem>
          <MenuItem id='sideNavSubMenu'>Baby Clothing & Shoes</MenuItem>
        </SubMenu>

        <SubMenu title="Beauty, Health & Hair" id='sideNavSubMenu'>
          <MenuItem id='sideNavSubMenu'>Makeup</MenuItem>
          <MenuItem id='sideNavSubMenu'>Nail Art & Tools</MenuItem>
        </SubMenu>

        <SubMenu title="Home, Pet & Appliances" id='sideNavSubMenu'>
          <MenuItem id='sideNavSubMenu'>  <Link to="/products?category=Household+Items" /> Household Items</MenuItem>
          <MenuItem id='sideNavSubMenu'> <Link to="/products?category=Pet+Products" /> Pet Products </MenuItem>
          <MenuItem id='sideNavSubMenu'> <Link to="/products?category=Garden+Supplies" />Garden Supplies</MenuItem>
        </SubMenu>

        <SubMenu title="Home Improvement & Tools" id='sideNavSubMenu'>
          <MenuItem id='sideNavSubMenu'> <Link to="/products?category=>Home+Improvment+Tools" /> Home Improvment Tools</MenuItem>
          <MenuItem id='sideNavSubMenu'> <Link to="/products?category=Indoor+Lightneing" />Indoor Lighting</MenuItem>
          <MenuItem id='sideNavSubMenu'> <Link to="/products?category=Outdoor+Lightning" /> Outdoor Lighting</MenuItem>
        </SubMenu>

        <SubMenu title="Outdoor Fun & Sports" id='sideNavSubMenu'>
          <MenuItem id='sideNavSubMenu'> <Link to="/products?category=Sportswear" /> Sportswear</MenuItem>
          <MenuItem id='sideNavSubMenu'>  <Link to="/products?category=Sneakers" /> Sneakers</MenuItem>
          <MenuItem id='sideNavSubMenu'> <Link to="/products?category=Other+Sports+Equipment" /> Other Sports Equipment</MenuItem>
        </SubMenu>

        <SubMenu title="Automobiles & Motorcycles" id='sideNavSubMenu'>
          <MenuItem id='sideNavSubMenu'> <Link to="/products?category=Maintanace&Care+Tools" /> Other Sports Equipment</MenuItem>
          <MenuItem id='sideNavSubMenu'>  <Link to="/products?category=Interior+Accessories" />Interior Accessories</MenuItem>
          <MenuItem id='sideNavSubMenu'> <Link to="/products?category=Exterior+Accessories" />Exterior Accessories</MenuItem>
        </SubMenu>

        <SubMenu title="Consumer Electronics" id='sideNavSubMenu'>
          <MenuItem id='sideNavSubMenu'> <Link to="/products?category=Smart+Electronics" /> Smart Electronics</MenuItem>
          <MenuItem id='sideNavSubMenu'>  <Link to="/products?category=Home+Audio&Video" /> Home Audio&Video</MenuItem>
          <MenuItem id='sideNavSubMenu'> <Link to="/products?category=Video+Games" />Video Games</MenuItem>
        </SubMenu>

        <SubMenu title="Computer, Office & Security" id='sideNavSubMenu'>
          <MenuItem id='sideNavSubMenu'>Laptops</MenuItem>
          <MenuItem id='sideNavSubMenu'>Office Electronics</MenuItem>
          <MenuItem id='sideNavSubMenu'>Storage Devices</MenuItem>
        </SubMenu>

        <SubMenu title="Phones & Telecommunications" id='sideNavSubMenu'>
          <MenuItem id='sideNavSubMenu'>Mobile Phones</MenuItem>
          <MenuItem id='sideNavSubMenu'>Mobile Phone Accessories</MenuItem>
        </SubMenu>

      </Menu>
    </ProSidebar>
  );
}

export default SideNav;
