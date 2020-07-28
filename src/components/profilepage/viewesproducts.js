import React from 'react';
import './profilepage.css';
import Tab from 'react-bootstrap/Tab'; 
import Row from 'react-bootstrap/Row'; 
import Card from 'react-bootstrap/Card'; 
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';
import ButtonGroup from 'react-bootstrap/ButtonGroup';


function Wishlist(props) {
  return (
    <>
      <Tab.Pane eventKey="fourth">
        <Row>
          {props.user.wishlist.map((product)=>{
            return(
              <Card>
                <Card.Img variant="top" src={product.image} />
                <Card.Title>{product.title}</Card.Title>
              </Card>
            );
          })}
        </Row>
      </Tab.Pane>
      <Tab.Pane eventKey="fifth">
              Change Theme 
        <ButtonGroup aria-label="Basic example">
          <Button variant="secondary">Dark</Button>
          <Button variant="light">Light</Button>
        </ButtonGroup>
      
        <Form id='chnagepassword' >
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Current Passwrord</Form.Label>
            <Form.Control type="email"  />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password"  />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control type="passwrod2" />
          </Form.Group>
          <Button variant="primary" type="submit">
                         Submit
          </Button>
        </Form>

        <Form id='changingcountry' >
          <Form.Label>Choose your Country</Form.Label>
          <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
    Country
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <Form.Label>Choose Currency</Form.Label>
          <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
    Currency
            </Dropdown.Toggle>
            <Form.Group controlId="formBasicPassword">
              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
              </Dropdown.Menu>
            </Form.Group>
          </Dropdown>
          <Button variant="primary" type="submit">
                         Save
          </Button>
        </Form>
      </Tab.Pane>
    </>
  );
}

export default Wishlist;
