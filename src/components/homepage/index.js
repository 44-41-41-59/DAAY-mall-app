import React from 'react';

import SideNav from './side-nav';
import MainCrousel from './main-crousel';
import TopSections from './top-sections';
import { connect } from 'react-redux';
import { getMainPageProducts } from '../../store/actions/products';

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
        <Col id="right-section">
          <Row id="crousel-id">
            <MainCrousel ads={props.ads} />
          </Row>
          <TopSections />
        </Col>
      </Row>
      <Row id='sliderRow'>
        <Sale products={props.mainProducts} id='saleSection' />
      </Row>
      <Row id='sliderRow'>
        <TopRanked products={props.mainProducts} />
      </Row>
      <Row id='sliderRow'>
        <NewArrivals products={props.mainProducts} />
      </Row>
    </>
  );
}

const mapStateToProps = (state) => {
  return { mainProducts: state.products, ads: state.ads };
};
const actionCreater = (dispatch) => ({
  getMainPageProducts: () => dispatch(getMainPageProducts()),
});
export default connect(mapStateToProps, actionCreater)(Homepage);
