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

  console.log('conso++++++++++++++++++++++++', props.searchedProducts);
  return (
    <div id='search-page-cont'>

      <div id='left-sort-section'>

        {/* <Form inline onSubmit={search} id='search-form-side'>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" name='searchTermInput' id='searchInput-side' />
          <Button variant="info" type="submit" size="md" id='searchBtn-side' >Search</Button>
        </Form> */}
        <form class="form-group has-search" id='search-form-side' onSubmit={search}>
          <button type="submit" class="fa fa-search form-control-feedback" id='searchIcon-side'/>
          <input type="text" class="form-control" placeholder="Search" name='searchTermInput' id='searchInput-side'/>
          {/* <Button variant="info" type="submit" size="md" id='searchBtn-side' >Search</Button> */}
        </form>

        <Sorting />
      </div>

      <div id='searchPage'>
        <If condition={props.searchTerm}>
          <Then>
            <If condition={props.sortBy}>
              {/* <p>Results for: {props.searchTerm}..., Filters: {props.sortBy}</p> */}
              <Then>
                <div>
                  <Results products={props.sortedProducts} />
                </div>
              </Then>
              <Else>
                <div>
                  <Results products={props.searchedProducts} />
                </div>
              </Else>
            </If>
          </Then>
          <Else>
            <Results products={props.data} />
          </Else>
        </If>

      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  console.log('hello', state);
  let products = state.products;
  return { data: products.results, searchTerm: products.searchTerm, searchedProducts: products.searchedProducts, sortBy: products.sortBy, sortedProducts: products.sortedProducts };
};
const mapDispatchToProps = (dispatch) => ({
  get: () => dispatch(getProducts()),
  getSearchedProducts: (searchTerm) => dispatch(getSearchedProducts(searchTerm)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchResults);
