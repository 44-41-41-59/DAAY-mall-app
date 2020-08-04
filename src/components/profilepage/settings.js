import React, { useState } from 'react';
import './profilepage.css';
import Tab from 'react-bootstrap/Tab';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Card from 'react-bootstrap/Card';
import {MDBBtn} from 'mdbreact';
import { connect, useSelector, useDispatch } from 'react-redux';
import { changePasswordRequest } from '../../store/actions/auth';

function Settings(props) {
  const dispatch = useDispatch();
  const [changePassword, setchangePasswod] = useState({ error: false });
  function handelChangePassword(e) {
    setchangePasswod({ ...changePassword, [e.target.name]: e.target.value });
    console.log(changePassword);
  }
  function handelSubmitNewPassword(e) {
    e.preventDefault();
    if (changePassword.confirmnewpassword === changePassword.newpassword) {
      console.log('nice');
      dispatch(changePasswordRequest(changePassword));
    } else {
      setchangePasswod({ ...changePassword, error: true });
    }
  }

  return (
    <>
      <Tab.Pane>
        <h5 id='titletheme'> Theme </h5>
        <ButtonGroup aria-label="Basic example">
          <Button variant="dark">Dark</Button>
          <Button variant="light">Light</Button>
        </ButtonGroup>
        <Card id="form1">
          <Form id="chnagepassword" onSubmit={handelSubmitNewPassword}>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Current Passwrord</Form.Label>
              <Form.Control
                type="password"
                name="current"
                onChange={handelChangePassword}
                required
              />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                name="newpassword"
                onChange={handelChangePassword}
                required
              />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control
                type="password"
                name="confirmnewpassword"
                onChange={handelChangePassword}
                required
              />
            </Form.Group>
            {changePassword.error && 'your password not match'}
            <MDBBtn id='submitbutton'>Submit</MDBBtn>
            {/* <Button id='submitbutton' type="submit">
              Submit
            </Button> */}
          </Form>
        </Card>
        <Card id="form2">
          <Form id="changingcountry">
            <Form.Label>Choose your Country</Form.Label>
            <Dropdown>
              <Dropdown.Toggle variant="light" id="dropdown-basic">
                Country
              </Dropdown.Toggle >
              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Jordan</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Canada</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Australia</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Form.Label>Choose Currency</Form.Label>
            <Dropdown>
              <Dropdown.Toggle variant="light" id="dropdown-basic">
                Currency
              </Dropdown.Toggle>
              <Form.Group controlId="formBasicPassword">
                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">JOD</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">
                    Dollar
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Form.Group>
            </Dropdown>
            <MDBBtn id='submitbutton2'>Submit</MDBBtn>
            {/* <Button variant="primary" type="submit">
              Save
            </Button> */}
          </Form>
        </Card>
      </Tab.Pane>
    </>
  );
}

const mapStateToProps = (state) => {
  return { user: state.user };
};

export default connect(mapStateToProps)(Settings);
