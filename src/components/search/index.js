import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import {
  getProducts,
  getSearchedProducts,
  getSearchProducts,
} from '../../store/actions/products';
import Sorting from './sorting-section';
import Results from './search-results';

import { If, Else, Then } from '../if/if.js';

// import Form from 'react-bootstrap/Form';
// import Button from 'react-bootstrap/Button';
// import FormControl from 'react-bootstrap/FormControl';

import './search.css';
// import { Pagination } from 'react-bootstrap';

function SearchResults(props) {
  let search = (e) => {
    e.preventDefault();
    let searched = e.target.searchTermInput.value;
    props.getSearchedProducts(searched);
  };

  // function handelSearchCange(e) {
  //   console.log(e.target.value);
  //   props.getSearchProducts(e.target.value);
  // }

  useEffect(() => {
    props.get();
  }, []);

  console.log('conso++++++++++++++++++++++++', props.searchedProducts);
  return (
    <div id="search-page-cont">
      <div id="left-sort-section">
        {/* <Form inline onSubmit={search} id='search-form-side'>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" name='searchTermInput' id='searchInput-side' />
          <Button variant="info" type="submit" size="md" id='searchBtn-side' >Search</Button>
        </Form> */}
        <form
          class="form-group has-search"
          id="search-form-side"
          onSubmit={search}
        >
          <button
            type="submit"
            class="fa fa-search form-control-feedback"
            id="searchIcon-side"
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

      <div id="searchPage">
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
    </div>
  );
}

const mapStateToProps = (state) => {
  console.log('hello', state);
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
  };
};
const mapDispatchToProps = (dispatch) => ({
  get: () => dispatch(getProducts()),
  getSearchedProducts: (searchTerm) =>
    dispatch(getSearchedProducts(searchTerm)),
  // getSearchProducts: (str) => dispatch(getSearchProducts(str)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchResults);
