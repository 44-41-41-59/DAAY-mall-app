import React from 'react';

import SideNav from './side-nav';
import MainCrousel from './main-crousel';
import TopSections from './top-sections';
import { Sale, TopRanked, NewArrivals, Recommended } from './sections';

import Container from 'react-bootstrap/Container';
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
          <Row>
            <MainCrousel />
          </Row>
          <Row>
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


      {/* <div style={{ display: 'flex' }}>
        <SideNav />
        <div id='adv-main-sections'>
          <MainCrousel />
          <TopSections />
        </div>
      </div>

      <Sale />
      <TopRanked />
      <NewArrivals />
      <Recommended /> */}
    </>
  );
}

export default Homepage;

