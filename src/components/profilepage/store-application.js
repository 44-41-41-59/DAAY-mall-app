import React, { useState } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { addStore } from '../../store/actions/store';
import Dropdown from 'react-bootstrap/Dropdown';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import { handleUpload } from '../../store/actions/files';
import { MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter } from 'mdbreact';
import axios from 'axios';

// import Image from '../imagetest/index';



function ApplyStore(props) {
  const history = useHistory();
  const [modal, setModal] = useState(false);
  const [images, setImage] = useState({});
  const [countries, setCountries] = useState([]);

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

  let getCountries = () => {
    axios.get('https://restcountries.eu/rest/v2/all').then(response => {
      let countriesList = response.data.map(item => item.name);
      setCountries(countriesList);

    }).catch(err => console.log(err));
  };
  return (
    <>
      <div id='addstorepage'>

        <h3 id='addstore3title' >Add a store</h3>
        <h5>These information will be used as your default store information.</h5>
        <hr />

        <div id='addstoreformcontainer' >
          <Card>
            <form onSubmit={submitFormHandler} id='addstoreform' >
              <div class="form-row">
                <div class="form-group col-md-6">
                  <label for="inputEmail4">Store Name</label>
                  <input type="text" class="form-control" id="inputEmail4" name='name' />
                </div>

                <div class="form-group col-md-4">
                  <label for='categories'>Category</label>
                  <select id="categories" name="category" class="form-control">
                    <option value="general">General</option>
                    <option value="Bottoms">Bottoms</option>
                    <option value="T-shirts">T-shirts</option>
                    <option value="Outerwear & Jackets">Outerwear & Jackets</option>
                    <option value="Dresses">Dresses</option>
                    <option value="Tees">Tees</option>
                    <option value="Blouses & Shirts">Blouses & Shirts</option>
                    <option value="Hoodies & Sweatshirts">Hoodies & Sweatshirts</option>
                    <option value="Suits & Blazers">Suits & Blazers</option>
                    <option value="Coats & Jackets">Coats & Jackets</option>
                    <option value="Leggings">Leggings</option>
                    <option value="Skirts">Skirts</option>
                    <option value="Jeans">Jeans</option>
                    <option value="Cosplay Costumes">Cosplay Costumes</option>
                    <option value="Pajama Sets">Pajama Sets</option>
                    <option value="Accessories">Accessories</option>
                    <option value="Bucket Hats">Bucket Hats</option>
                    <option value="Sunglasses">Sunglasses</option>
                    <option value="Women's Luggage & Bags">Women's Luggage & Bags</option>
                    <option value="Women's Shoes">Women's Shoes</option>
                    <option value="Men's Luggage & Bags">Men's Luggage & Bags</option>
                    <option value="Men's Shoes">Men's Shoes</option>
                    <option value="Women's Watches">Women's Watches</option>
                    <option value="Men's Watches">Men's Watches</option>
                    <option value="Wedding & Engagement">Wedding & Engagement</option>
                    <option value="Mother & Baby Items">Mother & Baby Items</option>
                    <option value="Baby Clothing & Shoes">Baby Clothing & Shoes</option>
                    <option value="Makeup">Makeup</option>
                    <option value="Nail Art & Tools">Nail Art & Tools</option>
                    <option value="Household Items">Household Items</option>
                    <option value="Pet Products">Pet Products</option>
                    <option value="Garden Supplies">Garden Supplies</option>
                    <option value="Home Improvment Tools">Home Improvment Tools</option>
                    <option value="Indoor Lightin">Indoor Lightin</option>
                    <option value="Outdoor Lighting">Outdoor Lighting</option>
                    <option value="Sportswear">Sportswear</option>
                    <option value="Sneakers">Sneakers</option>
                    <option value="Other Sports Equipment">Other Sports Equipment</option>
                    <option value="Interior Accessories">Interior Accessories</option>
                    <option value="Exterior Accessories">Exterior Accessories</option>
                    <option value="Smart Electronics">Smart Electronics</option>
                    <option value="Home Audio&Video">Home Audio&Video</option>
                    <option value="Video Games">Video Games</option>
                    <option value="Laptops">Laptops</option>
                    <option value="Office Electronics">Office Electronics</option>
                    <option value="Storage Devices">Storage Devices</option>
                    <option value="Mobile Phones">Mobile Phones</option>
                    <option value="Mobile Phone Accessories">Mobile Phone Accessories</option>
                  </select>
                </div>
              </div>


              <div class="form-group col-md-6">
                <label for='logo'>Store Logo</label>
                <input type='file' onChange={handleChange} id='logo' class='form-control-file' />
                <div id='uploadbutton' onClick={handleUpload} class="btn btn-primary">Upload</div>
              </div>


              <div class="form-row">
                <div class="form-group col-md-6">
                  <label for='country'>Country</label>
                  <select onClick={getCountries} class="form-control" name='country'>
                    <option>Select country</option>
                    {countries.map(country => {
                      return <option value={country}>{country}</option>;
                    })}
                  </select>
                  {/* <input type='text' name='country' class="form-control" id="inputCity"/> */}
                </div>

                <div class="form-group col-md-4">
                  <label type='text' name='city'>City</label>
                  <input type='text' class="form-control" id="city" />
                </div>
                <div class="form-group col-md-2">
                  <label for="inputZip">Zip</label>
                  <input type="text" class="form-control" id="inputZip" />
                </div>

                <div class="form-group col-md-4">
                  <label for='contactNumber'>Contact Number</label>
                  <input type="text" class="form-control" id="contactNumber" />
                </div>

              </div>
              <div class="form-group">
                <div class="form-check">
                  <input class="form-check-input" type="checkbox" id="gridCheck" />
                  <label class="form-check-label" for="gridCheck">
                    I agree on DAAY-mall instructions and policies
                  </label>
                </div>
              </div>

              <input type='hidden' value={props.user._id} name='ownerID' />

              <button id='submitbutton' type="submit" class="btn btn-primary">Add my Store</button>
            </form>
          </Card>

          <MDBModal isOpen={props.fetching.fetchModalStoreSuccess} size="lg">
            <MDBModalHeader >{props.store.results ? props.store.results.name : props.store.name} has been added successfully.</MDBModalHeader>
            <MDBModalBody>
              your store has been added successfully but you need to wait for your store to be approved.
            </MDBModalBody>
            <MDBModalFooter>
              <MDBBtn id='bluebtnpr' onClick={() => history.push('/')}>Back to main page</MDBBtn>
              <MDBBtn id='orangebtnpr' onClick={() => history.push(`/store/${props.store.results ? props.store.results._id : props.store._id}`)}>see my store page</MDBBtn>
            </MDBModalFooter>
          </MDBModal>

        </div>
      </div>
    </>
  );
}

const mapStateToProps = (state) => {
  console.log('??????????????///', state.files);
  return { user: state.user, images: state.files.images, fetching: state.fetching, store: state.store };
};

const mapDispatchToProps = (dispatch) => ({
  addStore: (target, logo) => dispatch(addStore(target, logo)),
  handleUpload: (spaceName, images) =>
    dispatch(handleUpload(spaceName, images)),
});


export default connect(mapStateToProps, mapDispatchToProps)(ApplyStore);
