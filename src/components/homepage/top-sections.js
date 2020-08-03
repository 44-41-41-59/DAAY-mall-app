import React from 'react';
import './homepage.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function TopSections(props) {
  return (

    <Row>
      <Col style={{ backgroundColor: 'red', height: '30vh' }}>
        <a href='#saleSection' >
          <img style={{ width: '100%', height: '30vh' }}
            src='https://blog.vancity.com/wp-content/uploads/2017/05/SaleSigns-iStock-Blog-1000x484.jpg'
            alt='sale banner'
          />
        </a>
      </Col>
      <Col style={{ backgroundColor: 'blue', height: '30vh' }}>
        <a href='#topSection' >
          <img style={{ width: '100%', height: '30vh' }}
            src='https://image.freepik.com/free-vector/abstract-sale-composition-with-watercolor-style_23-2147817804.jpg'
            alt='best seller banner'
          />
        </a>
      </Col>
      <Col style={{ backgroundColor: 'yellow', height: '30vh' }}>
        <a href='#newSection' >
          <img style={{ width: '100%', height: '30vh' }}
            src='https://image.freepik.com/free-vector/abstract-sale-composition-with-watercolor-style_23-2147817804.jpg'
            alt='new banner'
          />
        </a>
      </Col>
    </Row>
  );
}


export default TopSections;

