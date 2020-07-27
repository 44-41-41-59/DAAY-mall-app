import React, { useEffect } from 'react';

import SideNav from './side-nav';
import MainCrousel from './main-crousel';
import TopSections from './top-sections';
import { connect } from 'react-redux';
import { getMainPageProducts } from '../../store/actions/products';

import { Sale, TopRanked, NewArrivals, Recommended } from './sections';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import './homepage.css';

function Homepage(props) {
  return (
    <>
      <Row>
        <Col>
          <SideNav />
        </Col>
        <Col id="right-section">
          <Row id="crousel-id">
            <MainCrousel ads={props.ads} />
          </Row>
          <Row id="top-sections-id">
            <TopSections />
          </Row>
        </Col>
      </Row>
      <Row>
        <Sale products={props.mainProducts} />
      </Row>
      <Row>
        <TopRanked products={props.mainProducts} />
      </Row>
      <Row>
        <NewArrivals products={props.mainProducts} />
      </Row>
      <Row>
        <Recommended products={props.mainProducts} />
      </Row>
    </>
  );
}

const mapStateToProps = (state) => {
  console.log(state.products, 'mapState');
  return { mainProducts: state.products, ads: state.ads };
};
const actionCreater = (dispatch) => ({
  getMainPageProducts: () => dispatch(getMainPageProducts()),
});
export default connect(mapStateToProps, actionCreater)(Homepage);
