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
    <>
      <div id='addstorepage'>

        <h3 id='addstore3title' >Add a store</h3>
        <h5>These information will be used as your default store information.</h5>
        <hr/>

        <div id='addstoreformcontainer' >
          <Card>
            <form onSubmit={submitFormHandler} id='addstoreform' >
              <div class="form-row">
                <div class="form-group col-md-6">
                  <label for="inputEmail4">Store Name</label>
                  <input type="text" class="form-control" id="inputEmail4" name='name'/>
                </div>


                <div class="form-group col-md-4">
                  <label for='categories'>Category</label>
                  <select id="categories" name="category" class="form-control">
                    <option value="general">General</option>
                    <option value="food">food</option>
                  </select>
                </div>
              </div>


              <div class="form-group col-md-6">
                <label for='logo'>Store Logo</label>
                <input  type='file' onChange={handleChange} id="logo" />
                <div id='uploadbutton' onClick={handleUpload} class="btn btn-primary">Upload</div>
              </div>
             

              <div class="form-row">
                <div class="form-group col-md-6">
                  <label for='country'>Country</label>
                  <input type='text' name='country' class="form-control" id="inputCity"/>
                </div>

                <div class="form-group col-md-4">
                  <label type='text' name='city'>City</label>
                  <input type='text' class="form-control" id="city"/>
                </div>
                <div class="form-group col-md-2">
                  <label for="inputZip">Zip</label>
                  <input type="text" class="form-control" id="inputZip"/>
                </div>

                <div class="form-group col-md-4">
                  <label for='contactNumber'>Contact Number</label>
                  <input type="text" class="form-control" id="contactNumber"/>
                </div>

              </div>
              <div class="form-group">
                <div class="form-check">
                  <input class="form-check-input" type="checkbox" id="gridCheck"/>
                  <label class="form-check-label" for="gridCheck">
        I agree on DAAY-mall instructions and policies
                  </label>
                </div>
              </div>

              <input type='hidden' value={props.user._id} name='ownerID' />

              <button id='submitbutton' type="submit" class="btn btn-primary">Add my Store</button>
            </form>
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
      </div>
    </>
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