import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getProducts, getSearchedProducts } from '../../store/actions/products';

import Sorting from './sorting-section';
import Results from './search-results';

import { If, Else, Then } from '../if/if.js';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import FormControl from 'react-bootstrap/FormControl';

import './search.css';

function SearchResults(props) {
  let search = (e) => {
    e.preventDefault();
    let searched = e.target.searchTermInput.value;
    props.getSearchedProducts(searched);
  };

  useEffect(() => {
    props.get();
  }, []);

  return (
    <div id='searchPage'>

      <Form inline onSubmit={search}>
        <FormControl type="text" placeholder="Search" className="mr-sm-2" name='searchTermInput' />
        <Button variant="outline-success" type="submit" >Search</Button>
      </Form>

      <Sorting />
      <If condition={props.searchTerm}>
        <Then>
          <p>Results for: {props.searchTerm}...</p>
          <div>
            <Results products={props.searchedProducts} />
          </div>
        </Then>

        <Else>
          <Results products={props.data} />
        </Else>

      </If>

    </div>
  );
}

const mapStateToProps = (state) => {
  let products = state.products;
  return { data: products.results, searchTerm: products.searchTerm, searchedProducts: products.searchedProducts };
};
const mapDispatchToProps = (dispatch) => ({
  get: () => dispatch(getProducts()),
  getSearchedProducts: (searchTerm) => dispatch(getSearchedProducts(searchTerm)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchResults);
