import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { MDBContainer, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter } from 'mdbreact';

import {
  getProducts,
  getSearchedProducts,
  getCategorySearchProducts,
} from '../../store/actions/products';
import Sorting from './sorting-section';
import Results from './search-results';

import { If, Else, Then } from '../if/if.js';

// import Form from 'react-bootstrap/Form';
// import Button from 'react-bootstrap/Button';
// import FormControl from 'react-bootstrap/FormControl';

import './search.scss';
// import { Pagination } from 'react-bootstrap';

function SearchResults(props) {
  let searchQuery = props.location.search;
  let search = (e) => {
    e.preventDefault();
    let searched = e.target.searchTermInput.value;
    props.getSearchedProducts(`${searched}`);
  };

  useEffect(() => {
    props.get();
    if (searchQuery) {
      props.getCategorySearchProducts(searchQuery);
    }
  }, []);

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: '5vh',
        marginRight: '5vh',
        marginLeft: '5vh',
      }}>
      <div
        style={{
          backgroundColor: '#f5f5f5',
          width: '20vw',
          padding: '5vh',
          height:'70vh',
          position:'fixed',
        }}
      >
        <form
          class="form-group has-search"
          onSubmit={search}
          style={{
            display: 'flex',
            flexDirection: 'row',
          }}
        >
          <button
            type="submit"
            class="fa fa-search form-control-feedback"
            id="searchIcon-side"
            style={{ padding: '0vh', margin: '0vh' }}
          />
          <input
            list="browsers"
            class="form-control"
            placeholder="Search"
            name="searchTermInput"
            id="searchInput-side"
          // onChange={handelSearchCange}
          />
          <datalist id="browsers">
            {props.suggestions.map((item) => {
              return <option value={item.name.slice(0, 25)} />;
            })}
          </datalist>

          {/* <Button variant="info" type="submit" size="md" id='searchBtn-side' >Search</Button> */}
        </form>

        <Sorting />
      </div>

      <div>
        <If condition={props.searchTerm}>
          <Then>
            <If condition={props.sortBy}>
              {/* <p>Results for: {props.searchTerm}..., Filters: {props.sortBy}</p> */}
              <Then>
                <div>
                  <Results productList={props.sortedProducts} />
                </div>
              </Then>
              <Else>
                <div>
                  <Results productList={props.searchedProducts} />
                </div>
              </Else>
            </If>
          </Then>
          <Else>
            <Results productList={props.data} />
          </Else>
        </If>
      </div>
      {<MDBModal isOpen={
        props.fetching.fetchAddCardSuccesses ||
        props.fetching.fetchAddWishListSuccesses} toggle='' side position="top-right">
        <MDBModalHeader >SUCCESS</MDBModalHeader>
        <MDBModalBody>
          the card has been Added successfully to the {props.fetching.fetchAddCardSuccesses ? 'Cart' : 'wishlist'} 📦🎁
        </MDBModalBody>
        <MDBModalFooter>
          <MDBBtn id='bluebtnpr' >UNDO</MDBBtn>
          <MDBBtn id='orangebtnpr'>DONE</MDBBtn>
        </MDBModalFooter>
      </MDBModal>}

      {<MDBModal color='primary' isOpen={props.fetching.fetchModalFailer} toggle='' side position="top-right">
        <MDBModalHeader >SOMETHING WENT WRONG</MDBModalHeader>
        <MDBModalBody>
          you need to login or signup
        </MDBModalBody>
        <MDBModalFooter>
          <MDBBtn id='bluebtnpr' >CANCEL</MDBBtn>
          <MDBBtn id='orangebtnpr'>Go to register</MDBBtn>
        </MDBModalFooter>
      </MDBModal>}
    </div>
  );
}

const mapStateToProps = (state) => {
  let products = state.products;
  return {
    data: products.results,
    searchTerm: products.searchTerm,
    suggestions: products.suggestions,
    searchedProducts: products.searchedProducts,
    sortBy: products.sortBy,
    sortedProducts: products.sortedProducts,
    currentPage: state.pagination.currentPage,
    itemPerpage: state.pagination.itemPerpage,
    fetching: state.fetching,
  };
};
const mapDispatchToProps = (dispatch) => ({
  get: () => dispatch(getProducts()),
  getSearchedProducts: (searchTerm) =>
    dispatch(getSearchedProducts(searchTerm)),
  getCategorySearchProducts: (searchTerm) =>
    dispatch(getCategorySearchProducts(searchTerm)),
  // getSearchProducts: (str) => dispatch(getSearchProducts(str)),
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(SearchResults));
