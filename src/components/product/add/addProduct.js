import React, { useState } from 'react';
import { connect } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './addProduct.scss';
import { addProduct } from '../../../store/actions/store-products';
import { handleUpload } from '../../../store/actions/files';


function AddProduct(props) {
  const [images, setImage] = useState({});
  const [specsInputs, setSpecsInputs] = useState({ inputs: ['input-0'] });

  const handleChange = (e) => {
    if (e.target.files.length > 0) {
      setImage(e.target.files);
    }
  };
  const handleUpload = () => {
    props.handleUpload('storeLogo', images);
  };
  const addSpecsField = () => {
    let newInput = `input-${specsInputs.inputs.length}`;
    setSpecsInputs(prevState => ({ inputs: prevState.inputs.concat([newInput]) }));
  };


  let formHandler = (e) => {
    e.preventDefault();

    let specsEntries = {};
    for(let i = 0; i<e.target.specifications.length; i++) {
      specsEntries[e.target.specifications[i].value] = e.target.specifications[i+1].value;
      i++;
    }

    let formData = {
      name: e.target.name.value,
      amount: e.target.amount.value,
      category: e.target.category.value,
      description: e.target.description.value,
      images: props.images,
      specs: specsEntries,
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
          {/* <Form.Label>Quantity</Form.Label> */}
          <Form.Control type="number" placeholder="Quantity" name='amount' min="1" />
          <br />
          <br />
          {/* <Form.Label>Price</Form.Label> */}
          <Form.Control type="number" placeholder="Price JOD" name='price' step='0.01' />
          <br />
        </Form.Group>

        <Form.Group controlId="specifications">         
          <Form.Label>
            Specifications
            <div id="dynamicInput">
              {specsInputs.inputs.map(input => {
                return (
                  <>
                    <Form.Control type="text" key={`${input}-key`} placeholder='Spec' name={`${input}-key`}/>
                    <Form.Control type="text" key={`${input}-value`} placeholder='Value' name={`${input}-value`} />
                  </>
                );
              })}
            </div>
          </Form.Label>

          <div style={{ backgroundColor: 'gray' }} onClick={() => addSpecsField()}>+</div>
        </Form.Group>

        <Form.Group controlId="exampleForm.ControlTextarea1">
          {/* <Form.Label>Description</Form.Label> */}
          <Form.Control as="textarea" rows="3" placeholder='Description' name='description' />
        </Form.Group>
        <Form.Group>
          <Form.File id="exampleFormControlFile1" label="Upload product photos" name='images' multiple onChange={handleChange} />
          <div onClick={handleUpload} style={{ backgroundColor: 'gray' }}>Upload</div> {/* Dont make it a button!! */}
        </Form.Group>
        <Form.Control as="select" custom name='category'> {/*make it dynamic*/}
          <option>Choose category</option>
          <option>General</option>
          <option>Food</option>
        </Form.Control>
        <Form.Control type="number" placeholder="Sale percentage %" name='sale' min="0" max="100" step="1" />
        <Form.Check label="Hidden" type='radio' name='hidden' value={true} />
        <Form.Check label="Available" type='radio' name='hidden' value={false} checked />
        <Button variant="primary" type="submit">
          Add
        </Button>
      </Form>
    </div>
  );
}
const mapStateToProps = (state) => {
  console.log('inside apply comp', state);
  return { user: state.user, images: state.files.images };
};

const mapDispatchToProps = (dispatch) => ({
  addProduct: (data) => dispatch(addProduct(data)),
  handleUpload: (spaceName, images) =>
    dispatch(handleUpload(spaceName, images)),
});


export default connect(mapStateToProps, mapDispatchToProps)(AddProduct);
