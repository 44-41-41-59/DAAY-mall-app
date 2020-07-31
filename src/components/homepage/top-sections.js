import React from 'react';
import './homepage.css';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';


function TopSections(props) {
  return (
    <CardGroup>
      <Card style={{ width: '18rem' }}>
        <a href='#sale' >
          <Card.Img variant="top" src="holder.js/100px200" />
        </a>
      </Card>
      <Card style={{ width: '18rem' }}>
        <a href='#topProducts' >
          <Card.Img variant="top" src="holder.js/100px200" />
        </a>
      </Card>
      <Card style={{ width: '18rem' }}>
        <a href='#new' >
          <Card.Img variant="top" src="holder.js/100px200" />
        </a>
      </Card>
      <Card style={{ width: '18rem' }}>
        <a href='#card-recommended' >
          <Card.Img variant="top" src="holder.js/100px200" />
        </a>
      </Card>
    </CardGroup>
  );
}


export default TopSections;

