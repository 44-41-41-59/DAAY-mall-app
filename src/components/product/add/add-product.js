import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './addProduct.scss';
import Show from '../../show/index';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { handleUpload } from '../../../store/actions/files';
import { addProduct } from '../../../store/actions/store-products';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { MDBContainer, MDBBtn, MDBModal, MDBModalBody, MDBModalFooter, MDBModalHeader } from 'mdbreact';




function AddProduct(props) {
  const [step, setStep] = useState({ section: 1, active: 1 });
  const [images, setImage] = useState({});
  const [specsInputs, setSpecsInputs] = useState({ inputs: ['input-0'] });
  const [hidden, setHidden] = useState({ radio: 'available' });
  const linkTarget = {
    pathname: '/add/product',
    key: Math.random(),
    state: {
      applied: true,
    },
  };



  const handleChange = (e) => {
    if (e.target.files.length > 0) {
      setImage(e.target.files);
    }
  };
  const handleUpload = () => {
    console.log('harrr you');
    props.handleUpload('storeLogo', images);
  };
  const addSpecsField = () => {
    let newInput = `input-${specsInputs.inputs.length}`;
    setSpecsInputs(prevState => ({ inputs: prevState.inputs.concat([newInput]) }));
  };


  let formHandler = (e) => {
    e.preventDefault();
    let specsEntries = {};
    for (let i = 0; i < e.target.specifications.length; i++) {
      specsEntries[e.target.specifications[i].value] = e.target.specifications[i + 1].value;
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
      hidden: (e.target.hidden.value === 'hidden') ? true : false,
      storeID: props.user._id,
    };

    console.log('adding products', formData);
    props.addProduct(formData);
  };

  return (
    <div class="row">
      <div class="col-md-12" id='addSection'>

        <ul class="stepper stepper-horizontal" id='stepperDiana'>

          <li class={step.active === 1 ? 'active' : ''} onClick={() => setStep({ section: 1, active: 1 })}>
            <Link>
              <span class="circle">1</span>
              <span class="label">Upload images</span>
            </Link>
          </li>

          <li class={step.active === 2 ? 'active' : ''} onClick={() => setStep({ section: 2, active: 2 })}>
            <Link>
              <span class="circle">2</span>
              <span class="label">Add details</span>
            </Link>
          </li>

          <li class={step.active === 3 ? 'active' : ''} onClick={() => setStep({ section: 3, active: 3 })}>
            <Link>
              <span class="circle">2</span>
              <span class="label">Add more products!</span>
            </Link>
          </li>

        </ul>

        <form onSubmit={formHandler} style={{ minHeight: '65vh' }}>

          <div style={{ display: (step.section === 1) ? 'block' : 'none' }}>
            <div style={{ display: 'flex', justifyContent: 'center', minHeight: '50vh', alignItems: 'center' }}>
              <div className="input-group" style={{ width: '50vw' }}>
                <div className="input-group-prepend">
                  <span
                    style={{ borderRadius: '5px', minWidth: '5vw', paddingLeft: '1vw', marginRight: '2vw', cursor: 'pointer' }}
                    className="input-group-text"
                    id="inputGroupFileAddon01"
                    onClick={handleUpload}
                  >
                    Upload
                  </span>
                </div>
                <div className="custom-file">
                  <input
                    multiple
                    type="file"
                    className="custom-file-input"
                    id="inputGroupFile01"
                    aria-describedby="inputGroupFileAddon01"
                    name='images'
                    onChange={handleChange}
                  />
                  <label className="custom-file-label" htmlFor="inputGroupFile01">
                    Choose Images for your product
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div style={{ display: (step.section === 2) ? 'block' : 'none' }}>
            <div id='formInputs'>
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
                          <Form.Control type="text" key={`${input}-key`} placeholder='Spec' name={`${input}-key`} />
                          <Form.Control type="text" key={`${input}-value`} placeholder='Value' name={`${input}-value`} />
                        </>
                      );
                    })}
                  </div>
                </Form.Label>

                <div style={{ backgroundColor: '#5254af', minWidth: '100%', textAlign: 'center', color: 'white', borderRadius: '5px' }} onClick={() => addSpecsField()}>+</div>
              </Form.Group>

              <Form.Group controlId="exampleForm.ControlTextarea1">

                <Form.Control as="select" custom name='category' style={{marginBottom:'6vh'}}> {/*make it dynamic*/}
                  <option>Choose category</option>
                  <option>General</option>
                  <option>Food</option>
                </Form.Control>
                {/* <Form.Label>Description</Form.Label> */}

                <Form.Control as="textarea" rows="5" placeholder='Description' name='description' />
              </Form.Group>

              <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Control type="number" placeholder="Sale percentage %" name='sale' min="0" max="100" step="1" />
                <div style={{display:'flex', flexDirection:'row', width:'20vw',     justifyContent: 'center'}}>
                <label id='apl' style={{textAlign:'center'}} >
                  Hidden
                  <input
                    type='radio'
                    onClick={() => setHidden({ radio: 'hidden' })}
                    checked={hidden.radio === 'hidden' ? true : false}
                    name='hidden'
                    value='hidden'
                    style={{ marginTop: '2vh', marginBottom: '2vh', width: '5vw' }}
                  />
                </label>
                <label id='apl' style={{textAlign:'center'}}>
                  Available
                  <input
                    type='radio'
                    onClick={() => setHidden({ radio: 'available' })}
                    checked={hidden.radio === 'available' ? true : false}
                    name='hidden'
                    value='available'
                    style={{ marginTop: '2vh', marginBottom: '2vh', width: '5vw' }}
                  />
                </label>

                </div>
                {/* <Form.Check 
                label="Hidden"
                 type='radio'
                  name='hidden'
                   value={true}
                    />
                <Form.Check label="Available" type='radio' name='hidden' value={false} checked /> */}

              </Form.Group>

            </div>
          </div>
          <div style={{ display: (step.section === 3) ? 'block' : 'none' }}>
            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', margin: '20vh' }}>
              <MDBBtn id='orangebtnpr' type="submit" style={{ marginRight: '10vw' }}>
                Add product to The Store
              </MDBBtn>
              <Link to={linkTarget} onClick={()=>setStep({ section: 1, active: 1 })}>Add more products</Link> {/*not correct!!*/}
            </div>
          </div>

        </form>

      </div>
    </div >

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
