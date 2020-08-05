import React, { useState } from 'react';
import { connect } from 'react-redux';
import { useHistory} from 'react-router-dom';
import { addStore } from '../../store/actions/store';
import Dropdown from 'react-bootstrap/Dropdown';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import { handleUpload } from '../../store/actions/files';
import { MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter } from 'mdbreact';

// import Image from '../imagetest/index';



function ApplyStore(props) {
  const history =  useHistory();
  const [modal, setModal] = useState(false);
  const [images, setImage] = useState({});

  const handleChange = (e) => {
    if (e.target.files.length > 0) {
      setImage(e.target.files);
    }
  };
  const handleUpload = () => {
    props.handleUpload('storeLogo', images);
  };

  let submitFormHandler = (e) => {
    e.preventDefault();
    props.addStore(e.target, props.images);
    setModal(true);
  };
  let hideModal = () => {
    setModal(false);
  };

  return (
    <div id='addstoreform' >
    <Card>
      <Form onSubmit={submitFormHandler} id='store-apply-form'>
        <Form.Row>
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Store name</Form.Label>
            <Form.Control  type='text' name='name' />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>Store logo</Form.Label>
            <Form.Control type='file' onChange={handleChange} />
            <div onClick={handleUpload} style={{backgroundColor:'#5254AF',display:'inline-block',border:'1% , solid #5254AF',color:'white',cursor:'pointer'}}>Upload</div>
          </Form.Group>
        </Form.Row>

        <Form.Label>Store logo</Form.Label>
        <DropdownButton id="dropdown-basic-button" title="Dropdown button">
          <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
        </DropdownButton>
        <Form.Group controlId="formGridAddress2">
          <Form.Label>Address 2</Form.Label>
          <Form.Control placeholder="Apartment, studio, or floor" />
        </Form.Group>

        <Form.Row>
          <Form.Group as={Col} controlId="formGridCity">
            <Form.Label>City</Form.Label>
            <Form.Control />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridState">
            <Form.Label>State</Form.Label>
            <Form.Control as="select" defaultValue="Choose...">
              <option>Choose...</option>
              <option>...</option>
            </Form.Control>
          </Form.Group>

          <Form.Group as={Col} controlId="formGridZip">
            <Form.Label>Zip</Form.Label>
            <Form.Control />
          </Form.Group>
        </Form.Row>

        <Form.Group id="formGridCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>

        <Button variant="primary" type="submit">
    Submit
        </Button>
      </Form>
    </Card>

      <MDBModal isOpen={props.fetching.fetchModalStoreSuccess}  size="lg">
        <MDBModalHeader >{props.store.results?props.store.results.name:props.store.name} has been added successfully.</MDBModalHeader>
        <MDBModalBody>
         your store has been added successfully but you need to wait for your store to be approved. 
        </MDBModalBody>
        <MDBModalFooter>
          <MDBBtn color="secondary" onClick={()=>history.push('/')}>Back to main page</MDBBtn>
          <MDBBtn color="primary" onClick={()=>history.push(`/store/${props.store.results?props.store.results._id:props.store._id}`)}>see my store page</MDBBtn>
        </MDBModalFooter>
      </MDBModal>

    </div>
  );
}

const mapStateToProps = (state) => {
  console.log('??????????????///', state.files);
  return { user: state.user, images:state.files.images,fetching:state.fetching,store:state.store };
};

const mapDispatchToProps = (dispatch) => ({
  addStore: (target, logo) => dispatch(addStore(target, logo)),
  handleUpload: (spaceName, images) =>
    dispatch(handleUpload(spaceName, images)),
});


export default connect(mapStateToProps, mapDispatchToProps)(ApplyStore);
// name: '',
// logo: '',
// category: ['general', 'food'],
// closing: { type: String },
// opening: { type: String },
// images: { type: Array },
// products: {type: Array},
// products: [product],
// status:   type: String,  default: 'pending', enum: ['pending', 'rejected', 'approved'],
// country: { type: String, toLowerCase: true, required: true },
// city: { type: String, toLowerCase: true, required: true },
// contactNumber: { type: Number, required: true },
// ownerID: { type: String, required: true },