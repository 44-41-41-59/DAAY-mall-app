import React from 'react';
// import './storepage.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Accordion from 'react-bootstrap/Accordion';
import Row from 'react-bootstrap/Row';

function New (){
  return (
    <Card>
      <Card.Header>
        <Accordion.Toggle as={Button} variant="link" eventKey="1">
        New   
        </Accordion.Toggle>
      </Card.Header>
      <Accordion.Collapse eventKey="1">
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
              <Card.Img variant="top" id="upload" src="https://digitalsynopsis.com/wp-content/uploads/2015/10/gif-icons-menu-transition-animations-attachment.gif" />
            </Card>
          </Row>
        </Card.Body>
      </Accordion.Collapse>
    </Card>
  );
}

export default New;