import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
function Signup(props) {
  return (
    <Card body>
      {props.fetch.signupFailed && <p id='signupErrMsg' >{props.fetch.signupErrorMsg.message}</p>}
      <Form onSubmit={props.handleSubmit}>
        <h3>SIGNUP</h3>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Username</Form.Label>
          <Form.Control
            required
            type="text"
            name="username"
            // value={props.body.username}
            placeholder="Enter your username"
            onChange={props.handelChange}
          />
        </Form.Group>

        <Form.Group controlId="formBasicUserName">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            onChange={props.handelChange}
            // value={props.body.email}
            name="email"
            required
            type="email"
            placeholder="Enter email"
          />
        </Form.Group>

        <Form.Group id='radioButtons'>
          <Form.Check type="radio" inline label="User" id='user' name="role" value="user" onChange={props.handelChange} />
          <Form.Check type="radio" inline label="Owner" id='owner' name="role" value="owner" onChange={props.handelChange} />
          {/* <Form.Check type="radio" inline label="customer service agent" id='customerServiceAgent' name="role" value="customer service agent" /> */}
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            name="password"
            // value={props.body.password}
            onChange={props.handelChange}
            required
            type="password"
            placeholder="Password"
          />
        </Form.Group>
        <Form.Group controlId="formBasicCheckbox">
          <Form.Check
            required
            type="checkbox"
            label="I read all the roles and understand it"
          />
        </Form.Group>
        <Button id='signupbutton' variant="primary" type="submit">
          Signup
        </Button>
      </Form>
    </Card>
  );
}

export default Signup;
