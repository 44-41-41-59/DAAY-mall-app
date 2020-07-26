import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
function Login(props) {
  return (
    <Card body>
      <Form onSubmit={props.handleSubmitLogin}>
        <h3>LOGIN</h3>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            required
            type="email"
            name="email"
            // value={props.body.email}
            onChange={props.handelChange}
            placeholder="Enter email"
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            required
            type="password"
            onChange={props.handelChange}
            name="password"
            placeholder="Password"
            // value={props.body.password}
          />
        </Form.Group>
        <Form.Group required controlId="formBasicCheckbox">
          {/* <Form.Check required type="checkbox" label="Check me out" /> */}
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Card>
  );
}

export default Login;
