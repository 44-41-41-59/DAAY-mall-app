import React from 'react';

import SideNav from './side-nav';
import MainCrousel from './main-crousel';
import TopSections from './top-sections';

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
        <Col id='right-section'>
          <Row id='crousel-id'>
            <MainCrousel />
          </Row>
          <Row id='top-sections-id'>
            <TopSections />
          </Row>
        </Col>
      </Row>
      <Row>
        <Sale />
      </Row>
      <Row>
        <TopRanked />
      </Row>
      <Row>
        <NewArrivals />
      </Row>
      <Row>
        <Recommended />
      </Row>
    </>
  );
}

export default Homepage;

