import React from 'react';
import Image from 'react-bootstrap/Image';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import StripeCeckout from 'react-stripe-checkout';
import './cart.scss';

export default function Cart(props) {
  const makePayment = (token) => {
    let body = { token, amount: 132 };
    props.pay(body);
  };
  return (
    <div class="myBody">
      <h1>My Cart ({props.user.cart.length})</h1>
      {props.user.cart.map((item) => {
        return (
          <div>
            <p>image => {item.products.images[0]}</p>
            <p>name => {item.products.name}</p>
            <p>price => {item.products.price}</p>
            <p>seal => {item.products.seal}</p>
          </div>
        );
      })}

      <p>
        total =>{' '}
        {props.user.cart.reduce((pre, cur) => pre + cur.products.price, 0)}
      </p>
      <StripeCeckout
        stripeKey="pk_test_51Gw6p5DCWnftj01CHDFox6ZFihtNyZ0EkHqOxR8uTnYB0jeLLTPfZBPtuRQXcFBSd4McXulw456Dl1Cp6mq3t6lR00booR4E8t"
        token={makePayment}
        name="test"
        amount={
          props.user.cart.reduce((pre, cur) => pre + cur.products.price, 0) *
          100
        }
      >
        <button>
          the totel will be here{' '}
          {props.user.cart.reduce((pre, cur) => pre + cur.products.price, 0)}
        </button>
      </StripeCeckout>
    </div>
  );
}

{
  /* <div id="part1">
  <div class="image">
    <Image src="holder.js/230x230" rounded />
  </div>
  <div class="accordion">
    <Accordion defaultActiveKey="0">
      <Card>
        <Card.Header>
          <Accordion.Toggle as={Button} variant="link" eventKey="0">
            Item Description
          </Accordion.Toggle>
        </Card.Header>
        <Accordion.Collapse eventKey="0">
          <Card.Body>bla bla bla</Card.Body>
        </Accordion.Collapse>
      </Card>
      <Card>
        <Card.Header>
          <Accordion.Toggle as={Button} variant="link" eventKey="1">
            Item Details
          </Accordion.Toggle>
        </Card.Header>
        <Accordion.Collapse eventKey="1">
          <Card.Body>
            <ul>
              <li>rate : 1-5 stars</li>
              <li>color : whatever</li>
              <li>quantity : number</li>
              <li>price : number</li>
            </ul>
          </Card.Body>
        </Accordion.Collapse>
      </Card>
    </Accordion>
  </div>
</div>
<div id="part2">
  <div class="image">
    <Image src="holder.js/230x230" rounded />
  </div>
  <div class="accordion">
    <Accordion defaultActiveKey="0">
      <Card>
        <Card.Header>
          <Accordion.Toggle as={Button} variant="link" eventKey="0">
            Item Description
          </Accordion.Toggle>
        </Card.Header>
        <Accordion.Collapse eventKey="0">
          <Card.Body>bla bla bla</Card.Body>
        </Accordion.Collapse>
      </Card>
      <Card>
        <Card.Header>
          <Accordion.Toggle as={Button} variant="link" eventKey="1">
            Item Details
          </Accordion.Toggle>
        </Card.Header>
        <Accordion.Collapse eventKey="1">
          <Card.Body>
            <ul>
              <li>rate : 1-5 stars</li>
              <li>color : whatever</li>
              <li>quantity : number</li>
              <li>price : number</li>
            </ul>
          </Card.Body>
        </Accordion.Collapse>
      </Card>
    </Accordion>
  </div>
</div>
<div id="part3">
  <div class="image">
    <Image src="holder.js/230x230" rounded />
  </div>
  <div class="accordion">
    <Accordion defaultActiveKey="0">
      <Card>
        <Card.Header>
          <Accordion.Toggle as={Button} variant="link" eventKey="0">
            Item Description
          </Accordion.Toggle>
        </Card.Header>
        <Accordion.Collapse eventKey="0">
          <Card.Body>bla bla bla</Card.Body>
        </Accordion.Collapse>
      </Card>
      <Card>
        <Card.Header>
          <Accordion.Toggle as={Button} variant="link" eventKey="1">
            Item Details
          </Accordion.Toggle>
        </Card.Header>
        <Accordion.Collapse eventKey="1">
          <Card.Body>
            <ul>
              <li>rate : 1-5 stars</li>
              <li>color : whatever</li>
              <li>quantity : number</li>
              <li>price : number</li>
            </ul>
          </Card.Body>
        </Accordion.Collapse>
      </Card>
    </Accordion>
  </div>
</div>
<h2>Total : sum of prices</h2> */
}
