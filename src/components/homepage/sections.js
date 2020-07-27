import React from 'react';
import './homepage.css';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Container from 'react-bootstrap/Container';

export const Sale = (props) => {
  return (
    <CardGroup style={{ width: '100vw' }}>
      <Card id="title-card">
        <Card.Title>ON SALE</Card.Title>
        {/* <Card.Img variant="top" src="holder.js/100px200" /> */}
      </Card>
      <Container id="slide-container">
        {props.products.mainProducts.onSeal &&
          props.products.mainProducts.onSeal.map((item) => {
            return (
              <Card>
                <Card.Img variant="top" src={item.images} />
              </Card>
            );
          })}
      </Container>
    </CardGroup>
  );
};

export const TopRanked = (props) => {
  return (
    <CardGroup style={{ width: '100vw' }}>
      <Card id="title-card">
        <Card.Title>Top Ranked</Card.Title>
        {/* <Card.Img variant="top" src="holder.js/100px200" /> */}
      </Card>
      <Container id="slide-container">
        {props.products.mainProducts.ranked &&
          props.products.mainProducts.ranked.map((item) => {
            return (
              <Card>
                <Card.Img variant="top" src={item.images} />
              </Card>
            );
          })}
      </Container>
    </CardGroup>
  );
};

export const NewArrivals = (props) => {
  console.log(props, 'bsbs');
  return (
    <CardGroup style={{ width: '100vw' }}>
      <Card id="title-card">
        <Card.Title>New Arrivals</Card.Title>
        {/* <Card.Img variant="top" src="holder.js/100px200" /> */}
      </Card>
      <Container id="slide-container">
        {props.products.mainProducts.newst &&
          props.products.mainProducts.newst.map((item) => {
            return (
              <Card>
                <Card.Img variant="top" src={item.images} />
              </Card>
            );
          })}
      </Container>
    </CardGroup>
  );
};

export const Recommended = (props) => {
  return (
    <CardGroup style={{ width: '100vw' }} id="card-recommended">
      <Card id="title-card">
        <Card.Title>Things you will LOVE</Card.Title>
        {/* <Card.Img variant="top" src="holder.js/100px200" /> */}
      </Card>
      <Container id="slide-container">
        <Card>
          <Card.Img variant="top" src="holder.js/100px200" />
        </Card>
        <Card>
          <Card.Img variant="top" src="holder.js/100px200" />
        </Card>
        <Card>
          <Card.Img variant="top" src="holder.js/100px200" />
        </Card>
        <Card>
          <Card.Img variant="top" src="holder.js/100px200" />
        </Card>
        <Card>
          <Card.Img variant="top" src="holder.js/100px200" />
        </Card>
      </Container>
    </CardGroup>
  );
};
