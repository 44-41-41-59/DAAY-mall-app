import React from 'react';
import './homepage.css';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Container from 'react-bootstrap/Container';



export const Sale = (props) => {
  return (
    <CardGroup style={{ width: '100vw' }}>
      <Card id='title-card'>
        <Card.Title>ON SALE</Card.Title>
        {/* <Card.Img variant="top" src="holder.js/100px200" /> */}
      </Card>
      <Container id='slide-container'>
        <Card >
          <Card.Img variant="top" src="holder.js/100px200" />
        </Card>
        <Card >
          <Card.Img variant="top" src="holder.js/100px200" />
        </Card>
        <Card >
          <Card.Img variant="top" src="holder.js/100px200" />
        </Card>
        <Card >
          <Card.Img variant="top" src="holder.js/100px200" />
        </Card>
        <Card >
          <Card.Img variant="top" src="holder.js/100px200" />
        </Card>
        <Card >
          <Card.Img variant="top" src="holder.js/100px200" />
        </Card>
        <Card >
          <Card.Img variant="top" src="holder.js/100px200" />
        </Card>
        <Card >
          <Card.Img variant="top" src="holder.js/100px200" />
        </Card>
      </Container>

    </CardGroup>
  );
};

export const TopRanked = (props) => {
  return (
    <CardGroup style={{ width: '100vw' }}>
      <Card id='title-card'>
        <Card.Title>Top Ranked</Card.Title>
        {/* <Card.Img variant="top" src="holder.js/100px200" /> */}
      </Card>
      <Container id='slide-container'>
        <Card >
          <Card.Img variant="top" src="holder.js/100px200" />
        </Card>
        <Card >
          <Card.Img variant="top" src="holder.js/100px200" />
        </Card>
        <Card >
          <Card.Img variant="top" src="holder.js/100px200" />
        </Card>
        <Card >
          <Card.Img variant="top" src="holder.js/100px200" />
        </Card>
        <Card >
          <Card.Img variant="top" src="holder.js/100px200" />
        </Card>
        <Card >
          <Card.Img variant="top" src="holder.js/100px200" />
        </Card>
      </Container>

    </CardGroup>
  );
};

export const NewArrivals = (props) => {
  return (
    <CardGroup style={{ width: '100vw' }}>
      <Card id='title-card'>
        <Card.Title>New Arrivals</Card.Title>
        {/* <Card.Img variant="top" src="holder.js/100px200" /> */}
      </Card>
      <Container id='slide-container'>
        <Card >
          <Card.Img variant="top" src="holder.js/100px200" />
        </Card>
        <Card >
          <Card.Img variant="top" src="holder.js/100px200" />
        </Card>
        <Card >
          <Card.Img variant="top" src="holder.js/100px200" />
        </Card>
        <Card >
          <Card.Img variant="top" src="holder.js/100px200" />
        </Card>
        <Card >
          <Card.Img variant="top" src="holder.js/100px200" />
        </Card>
        <Card >
          <Card.Img variant="top" src="holder.js/100px200" />
        </Card>
      </Container>
    </CardGroup>
  );
};

export const Recommended = (props) => {
  return (
    <CardGroup style={{ width: '100vw' }} id='card-recommended' >
      <Card id='title-card'>
        <Card.Title>Things you will LOVE</Card.Title>
        {/* <Card.Img variant="top" src="holder.js/100px200" /> */}
      </Card>
      <Container id='slide-container'>
        <Card >
          <Card.Img variant="top" src="holder.js/100px200" />
        </Card>
        <Card >
          <Card.Img variant="top" src="holder.js/100px200" />
        </Card>
        <Card >
          <Card.Img variant="top" src="holder.js/100px200" />
        </Card>
        <Card >
          <Card.Img variant="top" src="holder.js/100px200" />
        </Card>
        <Card >
          <Card.Img variant="top" src="holder.js/100px200" />
        </Card>
      </Container>

    </CardGroup>
  );
};


