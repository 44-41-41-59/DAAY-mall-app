import React from 'react';
import { connect } from 'react-redux';
import { MDBInput } from "mdbreact";
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './addProduct.scss';
import { addProduct } from '../../../store/actions/store-products';

function AddProduct(props) {

  let formHandler = (e) => {
    e.preventDefault();
    let formData = {
      name: e.target.name.value,
      amount: e.target.amount.value,
      category: e.target.category.value,
      description: e.target.description.value,
      images: [e.target.images.value],
      price: e.target.price.value,
      sale: e.target.sale.value,
      hidden: e.target.hidden.value,
      storeID: props.user._id,
    };
    console.log('adding products', formData);
    props.addProduct(formData);
  };
  return (
    <div class="productForm">
      <Form onSubmit={formHandler}>
        <h1>Add Product</h1>
        <Form.Group controlId="exampleForm.ControlInput1" >
          {/* <Form.Label>Product Name</Form.Label> */}
          <Form.Control type="text" placeholder="Product Name" name='name' />
          <br />
          {/* <Form.Label>Specification</Form.Label> */}
          <Form.Control type="text" placeholder="Specification" />
          <br />
          {/* <Form.Label>Quantity</Form.Label> */}
          <Form.Control type="number" placeholder="Quantity" name='amount' />
          <br />
          <br />
          {/* <Form.Label>Price</Form.Label> */}
          <Form.Control type="number" placeholder="Price" name='price' />
          <br />
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlTextarea1">
          {/* <Form.Label>Description</Form.Label> */}
          <Form.Control as="textarea" rows="3" placeholder='Description' name='description' />
        </Form.Group>
        <Form.Group>
          <Form.File id="exampleFormControlFile1" label="Upload product photos" name='images' />
        </Form.Group>
        <Form.Control as="select" custom name='category'> {/*make it dynamic*/}
          <option>Choose category</option>
          <option>General</option>
          <option>Food</option>
        </Form.Control>
        <Form.Control type="number" placeholder="Sale" name='sale' />
        <Form.Check label="Hidden" type='radio' name='hidden' value={true} />
        <Form.Check label="Available" type='radio' name='hidden' value={false}/>
        <Button variant="primary" type="submit">
          Add
        </Button>
      </Form>
    </div>
  );
}
const mapStateToProps = (state) => {
  console.log('inside apply comp', state);
  return { user: state.user };
};

const mapDispatchToProps = (dispatch) => ({
  addProduct: (data) => dispatch(addProduct(data)),
});


export default connect(mapStateToProps, mapDispatchToProps)(AddProduct);


// name: { type: String, required: true },
// price: { type: Number, required: true },
// views: { type: Number, default: 0 },
// images: { type: Array },
// amount: { type: Number },
// description: { type: String },
// category: { type: String },
// sale: { type: Number, default: 0 },
// storeID: { type: Schema.Types.ObjectId, required: true },
// hidden: { type: Boolean, default: false },
// Timestamp: {
//   type: Date,
//   default: Date.now,
// },