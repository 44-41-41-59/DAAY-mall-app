import React from 'react';
import './homepage.css';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';


export const Sale = (props) => {
  return (
    <CardGroup  style={{ width: '100vw' }}>
      <Card id='title-card'>
        <Card.Title>ON SALE</Card.Title>   
        {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
      </Card>
      <Card >
        <Card.Img variant="top" src="holder.js/100px180" />
      </Card>
      <Card >
        <Card.Img variant="top" src="holder.js/100px180" />
      </Card>
      <Card >
        <Card.Img variant="top" src="holder.js/100px180" />
      </Card>
      <Card >
        <Card.Img variant="top" src="holder.js/100px180" />
      </Card>
    </CardGroup>
  );
};

export const TopRanked = (props) => {
  return (
    <CardGroup  style={{ width: '100vw' }}>
      <Card id='title-card'>
        <Card.Title>Top Ranked</Card.Title>   
        {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
      </Card>
      <Card >
        <Card.Img variant="top" src="holder.js/100px180" />
      </Card>
      <Card >
        <Card.Img variant="top" src="holder.js/100px180" />
      </Card>
      <Card >
        <Card.Img variant="top" src="holder.js/100px180" />
      </Card>
    </CardGroup>
  );
};

export const NewArrivals = (props) => {
  return (
    <CardGroup  style={{ width: '100vw' }}>
      <Card id='title-card'>
        <Card.Title>New Arrivals</Card.Title>   
        {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
      </Card>
      <Card >
        <Card.Img variant="top" src="holder.js/100px180" />
      </Card>
      <Card >
        <Card.Img variant="top" src="holder.js/100px180" />
      </Card>
      <Card >
        <Card.Img variant="top" src="holder.js/100px180" />
      </Card>
      <Card >
        <Card.Img variant="top" src="holder.js/100px180" />
      </Card>
    </CardGroup>
  );
};

export const Recommended = (props) => {
  return (
    <CardGroup  style={{ width: '100vw' }}>
      <Card id='title-card'>
        <Card.Title>Things you will LOVE</Card.Title>         
        {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
      </Card>
      <Card >
        <Card.Img variant="top" src="holder.js/100px180" />
      </Card>
      <Card >
        <Card.Img variant="top" src="holder.js/100px180" />
      </Card>
      <Card >
        <Card.Img variant="top" src="holder.js/100px180" />
      </Card>
    </CardGroup>
  );
};


