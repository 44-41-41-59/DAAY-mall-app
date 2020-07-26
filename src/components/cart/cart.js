import React from 'react';
import Image from 'react-bootstrap/Image';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import './cart.scss';


export default function cart(props) {

  return (
    <div class="myBody">
      <h1>My Cart (3)</h1>
      <div id="part1">
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
      <h2>Total : sum of prices</h2>
    </div>
  );
}

