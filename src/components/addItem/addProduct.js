import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './addProduct.scss';

export default function addProduct(props) {
  return (
    <div class="productForm">
      <Form>
        <h1>Add Product</h1>
        <Form.Group controlId="exampleForm.ControlInput1">
          <Form.Label>Product Name</Form.Label>
          <Form.Control type="text" placeholder="Normal text" />
          <br />
          <Form.Label>Specification</Form.Label>
          <Form.Control type="text" placeholder="Normal text" />
          <br />
          <Form.Label>Quantity</Form.Label>
          <Form.Control as="select" defaultValue="Choose...">
            <option>Choose...</option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
            <option>6</option>
            <option>7</option>
            <option>8</option>
            <option>9</option>
            <option>10</option>
            <option>more...</option>
          </Form.Control>
          <br />
          <br />
          <Form.Label>Price</Form.Label>
          <Form.Control type="text" placeholder="Normal text" />
          <br />
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlTextarea1">
          <Form.Label>Extra (description)</Form.Label>
          <Form.Control as="textarea" rows="3" />
        </Form.Group>
        <Form.Group>
          <Form.File id="exampleFormControlFile1" label="Upload product Photo" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}