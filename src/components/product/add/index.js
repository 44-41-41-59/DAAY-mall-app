import React from 'react';
import Item from './addProduct';
import {closeModal} from '../../../store/actions/store-products';
import {useSelector,useDispatch} from 'react-redux';
import { MDBContainer, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter } from 'mdbreact';


function AddProduct() {
  const fetching = useSelector(state => state.fetching);  
  const dispatch = useDispatch();  
  return (
    <div >
      <Item />
      <MDBModal isOpen={fetching.fetchAddProductSuccesses} toggle={dispatch(closeModal())}>
        <MDBModalHeader toggle={dispatch(closeModal())}>SUCCESS</MDBModalHeader>
        <MDBModalBody>
        The product has been added successfully
        </MDBModalBody>
        <MDBModalFooter>
          {/* <MDBBtn color="secondary" onClick={dispatch(closeModal())}>UNDO</MDBBtn> */}
          <MDBBtn id='orangebtnpr'>OKAY</MDBBtn>
        </MDBModalFooter> 
      </MDBModal>
    </div>
  );
}

export default AddProduct;

