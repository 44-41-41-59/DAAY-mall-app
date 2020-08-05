import React from 'react';

import SideNav from './side-nav';
import MainCrousel from './main-crousel';
import TopSections from './top-sections';
import { connect } from 'react-redux';
import { getMainPageProducts } from '../../store/actions/products';
import { MDBContainer, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter } from 'mdbreact';

import { Sale, TopRanked, NewArrivals } from './sections';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


import './homepage.css';

function Homepage(props) {
  return (
    <>
      <Row id='mainCont'>
        <Col id="left-section">
          <SideNav />
        </Col>
        <Col id="right-section" style={{maxWidth:'75vw'}}>
          <Row id="crousel-id">
            <MainCrousel ads={props.ads} />
          </Row>
          <TopSections />
        </Col>
      </Row>
      <Row id='sliderRow'>
        <Sale products={props.mainProducts} />
      </Row>
      <Row id='sliderRow'>
        <TopRanked products={props.mainProducts} />
      </Row>
      <Row id='sliderRow'>
        <NewArrivals products={props.mainProducts} />
      </Row>
      {<MDBModal isOpen={
        props.fetching.fetchAddCardSuccesses ||
        props.fetching.fetchAddWishListSuccesses} toggle='' side position="top-right">
          <MDBModalHeader >SUCCESS</MDBModalHeader>
          <MDBModalBody>
           the card has been Added successfully to the {props.fetching.fetchAddCardSuccesses?'Cart':'wishlist'} 📦🎁
          </MDBModalBody>
          <MDBModalFooter>
            <MDBBtn color="secondary" >UNDO</MDBBtn>
            <MDBBtn color="primary">DONE</MDBBtn>
          </MDBModalFooter>
        </MDBModal>}
      
      {<MDBModal color='primary' isOpen={props.fetching.fetchModalFailer} toggle='' side position="top-right">
          <MDBModalHeader >SOMETHING WENT WRONG</MDBModalHeader>
          <MDBModalBody>
           you need to login or signup
          </MDBModalBody>
          <MDBModalFooter>
            <MDBBtn color="secondary" >CANCEL</MDBBtn>
            <MDBBtn color="primary">Go to register</MDBBtn>
          </MDBModalFooter>
        </MDBModal>}

        <MDBModal isOpen={props.fetching.loginModal}  side position="top-right">
          <MDBModalBody>
           Welcome back {props.user.username}
          </MDBModalBody> 
        </MDBModal>
    </>
  );
}

const mapStateToProps = (state) => {
  return { mainProducts: state.products, ads: state.ads,fetching:state.fetching,user:state.user };
};
const actionCreater = (dispatch) => ({
  getMainPageProducts: () => dispatch(getMainPageProducts()),
});
export default connect(mapStateToProps, actionCreater)(Homepage);
