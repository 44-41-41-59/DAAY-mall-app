import React from 'react';
// import './storepage.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Accordion from 'react-bootstrap/Accordion';
import Row from 'react-bootstrap/Row';

function OnSale (){
  return (
    <Card>
      <Card.Header>
        <Accordion.Toggle as={Button} variant="link" eventKey="0">
         On Sale
        </Accordion.Toggle>
      </Card.Header>
      <Accordion.Collapse eventKey="0">
        <Card.Body>
          <Row>
            <Card>
              <Card.Img variant="top" src="holder.js/200x200" />
              <Card.Title>Card Title</Card.Title>
            </Card>
            <Card >
              <Card.Img variant="top" src="holder.js/200x200" />
              <Card.Title>Card Title</Card.Title>
            </Card>
            <Card >
              <Card.Img variant="top" src="holder.js/200x200" />
              <Card.Title>Card Title</Card.Title>
            </Card>
            <Card >
              <Card.Img variant="top" src="holder.js/200x200" />
              <Card.Title>Card Title</Card.Title>
            </Card>
            <Card >
              <Card.Img variant="top" src="holder.js/200x200" />
              <Card.Title>Card Title</Card.Title>
            </Card>
            <Card >
              <Card.Img variant="top" src="holder.js/200x200" />
              <Card.Title>Card Title</Card.Title>
            </Card>
            <Card >
              <Card.Img variant="top" src="holder.js/200x200" />
              <Card.Title>Card Title</Card.Title>
            </Card>
            <Card >
              <Card.Img variant="top" src="holder.js/200x200" />
              <Card.Title>Card Title</Card.Title>
            </Card>
            <Card >
              <Card.Img variant="top" src="holder.js/200x200" />
              <Card.Title>Card Title</Card.Title>
            </Card>
            <Card >
              <Card.Img variant="top" src="holder.js/200x200" />
              <Card.Title>Card Title</Card.Title>
            </Card>
            <Card >
              <Card.Img variant="top" src="holder.js/200x200" />
              <Card.Title>Card Title</Card.Title>
            </Card>
            <Card >
              <Card.Img variant="top" src="holder.js/200x200" />
              <Card.Title>Card Title</Card.Title>
            </Card>
          </Row>
        </Card.Body>
      </Accordion.Collapse>
    </Card>
  );
}

export default OnSale;