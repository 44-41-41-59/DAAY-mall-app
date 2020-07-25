import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getProducts } from '../../store/actions/products';

import Sorting from './sorting-section';
import Results from './search-results';

import './search.css'

function SearchResults(props) {
  useEffect(() => {
    props.get();
  }, []);
  return (
    <div id='searchPage'>
      <Sorting />
      <Results products={props.data}/>
    </div>    
  );
}

const mapStateToProps = (state) => {
  console.log('mapStateToProps', state.products.results);
  return { data: state.products.results };
};
const mapDispatchToProps = (dispatch) => ({
  get: () => dispatch(getProducts()),
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchResults);
