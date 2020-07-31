import React, { useState } from 'react';
import './profilepage.css';
import Tab from 'react-bootstrap/Tab';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Card from 'react-bootstrap/Card';
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
        <h5> Change Theme </h5> <br />
        <ButtonGroup aria-label="Basic example">
          <Button variant="secondary">Dark</Button>
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
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Card>
        <Card id="form2">
          <Form id="changingcountry">
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
                  <Dropdown.Item href="#/action-2">
                    Another action
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-3">
                    Something else
                  </Dropdown.Item>
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
  return { user: state.user };
};

export default connect(mapStateToProps)(Settings);
