import React from 'react';
import './profilepage.css';
import Tab from 'react-bootstrap/Tab';  
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Card from 'react-bootstrap/Card';
import { connect } from 'react-redux';



function Settings(props) {
  return (
    <>
      <Tab.Pane>
        <h5> Change Theme </h5> <br/>
        <ButtonGroup aria-label="Basic example">
          <Button variant="secondary">Dark</Button>
          <Button variant="light">Light</Button>
        </ButtonGroup> 

        <Card id='form1'>
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
        </Card>
          
        <Card id='form2' >
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
        </Card>
      </Tab.Pane>

    </>
  );
}

const mapStateToProps = (state) => {
  return { user: state.user};
};

export default connect(mapStateToProps)(Settings);