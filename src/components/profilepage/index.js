import React, { useEffect } from 'react';
import './profilepage.css';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
import { connect } from 'react-redux';
import Tab from 'react-bootstrap/Tab'; 
import Tabs from 'react-bootstrap/Tabs'; 
import Wishlist from './wishlist';
import FavoriteStores from './favoritestores';
import Orders from './orders';
import ViewedProducts from './viewesproducts';
import Settings from './settings';
import {getWishlist} from '../../store/actions/wishlist';
import {getFavoriteStores} from '../../store/actions/favoritestore';


function Profilepage(props) {

  useEffect(() => {
    props.getWishlist();
    props.getFavoriteStores();
  }, []);


  return (
    <>
      <div id="container">
        <Image id='userImg' src={props.user.avatar} style={{width:'15%'}} roundedCircle />
        <Card id='userInfo'>     
          <Card.Header as="h5">User Information</Card.Header>
          <Card.Body>
            {/* <Card.Title>Special title treatment</Card.Title> */}
            <Card.Text id='userInfo'>
              Name: {props.user.username} <br/> <br/>
              Email: {props.user.email} <br/> <br/>
              Role: {props.user.role}
            </Card.Text>
          </Card.Body>
        </Card>
      </div>

      <div id='tabs' >
        <Tabs defaultActiveKey="Wish-list" id="uncontrolled-tab-example">
          <Tab eventKey="Wish-list" title="Wish-list">
            <Wishlist wishlist={props.wishlist}/>
          </Tab>
          <Tab eventKey="Favorite Stores" title="Favorite Stores">
            <FavoriteStores favoriteStores={props.favoriteStores.favoriteStores} />
          </Tab>
          <Tab eventKey="Orders" title="Orders" >
            <Orders/>
          </Tab>
          <Tab eventKey="Viewed Products" title="Viewed Products" >
            <ViewedProducts/>
          </Tab>
          <Tab eventKey="Settings" title="Settings" >
            <Settings/>
          </Tab>
        </Tabs>
      </div>
    </>
  );
}

const mapStateToProps = (state) => {
  console.log('staaateeee',state);
  let wishlistArr=[];
  if(state.wishlist.results){
    wishlistArr=state.wishlist.results;
  }
  return { user: state.user,wishlist:wishlistArr, favoriteStores:state.favoriteStores};
};

const mapDispatchToProps = (dispatch) => ({
  getWishlist: () => dispatch(getWishlist()),
  getFavoriteStores: () => dispatch(getFavoriteStores()),
});

export default connect(mapStateToProps,mapDispatchToProps)(Profilepage);