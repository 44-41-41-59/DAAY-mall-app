import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
function Signup(props) {
  return (
    <Card body>
      <Form onSubmit={props.handleSubmit}>
        <h3>SIGNUP</h3>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            required
            type="text"
            name="username"
            // value={props.body.username}
            placeholder="Enter ur lovely name"
            onChange={props.handelChange}
          />
          <Form.Text className="text-muted">
            show us your cool name lady if u r anolla or diana don't kill me pls
          </Form.Text>
        </Form.Group>

        <Form.Group controlId="formBasicUserName">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            onChange={props.handelChange}
            // value={props.body.email}
            name="email"
            required
            type="email"
            placeholder="Enter username"
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.<span role="img" aria-label="Angel">😇</span>
          </Form.Text>
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
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Card>
  );
}

export default Signup;
