import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import './storepage.scss';
import StoreInfo from './store-info';
import Button from 'react-bootstrap/Button';
import Accordion from 'react-bootstrap/Accordion';
import OnSale from './onsale';
import Orders from './orders';
import AllProducts from './all-products';
import { getStore, addStoreReview } from '../../store/actions/store';
import Reviews from '../product/reviews';
import { If, Else, Then } from '../if/if.js';
import NotFound from '../notfound/notfound';


function Storepage(props) {
  const storeID = props.match.params.id;
  //  props.store = props.store.results || props.store
  useEffect(() => {
    props.getStore(storeID);
  }, []);

  return (
    <div id='store-page'>
      <div id='store-pageExtra'>
        <StoreInfo store={props.store} />
        {/* <div class='categoryButtons' >
        <Button variant="outline-secondary">Categories</Button>{' '}
        <Button variant="outline-secondary">General</Button>{' '}
        <Button variant="outline-secondary">+</Button>{' '}
      </div> */}

      </div>
      <Accordion defaultActiveKey="1">
        <If condition={props.owner}>
          <Then>
            <Orders orders={props.orders} />
          </Then>
        </If>
        <div>
          <AllProducts products={props.store.products} />
          <OnSale products={props.sale} />
        </div>
      </Accordion>
      {/* <New />
        <Summer />
        <InStock /> */}
      <Reviews
        reviews={props.store.reviews}
        addReview={props.addStoreReview}
        product={props.store}
        user={props.user} />
    </div>
  );
}

const mapStateToProps = (state) => {
  let owner = false;
  let sale = state.store.products.filter(product => product.sale);
  if (state.user && state.store) {
    if (state.user._id && state.store.ownerID) {
      console.log('userID', state.user._id, 'storeID', state.store.ownerID._id);
      if (state.user._id === state.store.ownerID._id) {
        owner = true;
      }
    }
  }

  return {
    user: state.user,
    store: state.store,
    sale,
    orders: (state.store) ? (state.store.orders) : [],
    owner: owner,
  };
};
const mapDispatchToProps = (dispatch) => ({
  getStore: (storeID) => dispatch(getStore(storeID)),
  addStoreReview: (reviewData) => dispatch(addStoreReview(reviewData)),
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Storepage));