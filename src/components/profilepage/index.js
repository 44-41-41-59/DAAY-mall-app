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
import {withRouter} from 'react-router-dom';
import {getProfile} from '../../store/actions/profile';



function Profilepage(props) {
  let params= props.match.params.id;
  useEffect(() => {
    props.getProfile(params);
  }, []);


  return (
    <>
      <div id="container">
        <Image id='userImg' src={props.profile.avatar} style={{width:'15%'}} roundedCircle />
        <Card id='userInfo'>     
          <Card.Header as="h5">User Information</Card.Header>
          <Card.Body>
            {/* <Card.Title>Special title treatment</Card.Title> */}
            <Card.Text id='userInfo'>
              Name: {props.profile.username} <br/> <br/>
              Email: {props.profile.email} <br/> <br/>
              Role: {props.profile.role}
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
      {/* <Show condition={props.isUserSame}><h1>Hiiiiiiiiiiiii</h1></Show> */}

      <div id='tabs' style={{minHeight:'80vh'}}>
        <Tabs defaultActiveKey="Wish-list" id="uncontrolled-tab-example">
          <Tab eventKey="Wish-list" title="Wish-list">
            <Wishlist wishlist={props.profile.wishlist}/>
          </Tab>
          <Tab eventKey="Favorite Stores" title="Favorite Stores">
            <FavoriteStores favoriteStores={props.profile.favoriteStores} />
          </Tab>
          <Tab tabClassName={!props.isUserSame ? 'd-none' : ''} eventKey="Orders" title="Orders" >
            <Orders/>
          </Tab>
          <Tab tabClassName={!props.isUserSame ? 'd-none' : ''} eventKey="Viewed Products" title="Viewed Products" >
            <ViewedProducts/>
          </Tab>
          <Tab tabClassName={!props.isUserSame ? 'd-none' : ''} eventKey="Settings" title="Settings" >
            <Settings/>
          </Tab>
        </Tabs>
      </div>
    </>
  );
}

const mapStateToProps = (state) => {
  let isUserSame = false;
  if(state.profile._id === state.user._id){
    isUserSame=true;
  }
  return { user: state.user,  profile:state.profile, isUserSame};
};

const mapDispatchToProps = (dispatch) => ({
  getProfile:(params)=>dispatch(getProfile(params)),
});

export default connect(mapStateToProps,mapDispatchToProps)(withRouter(Profilepage));