import React from 'react';
// import './storepage.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Accordion from 'react-bootstrap/Accordion';
import Row from 'react-bootstrap/Row';

function InStock (){
  return (
    <Card>
      <Card.Header>
        <Accordion.Toggle as={Button} variant="link" eventKey="3">
        In Stock   
        </Accordion.Toggle>
      </Card.Header>
      <Accordion.Collapse eventKey="3">
        <Card.Body>
          <Row>
            <Card>
              <Card.Img variant="top" src="holder.js/200x200" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
              </Card.Body>
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

export default InStock;