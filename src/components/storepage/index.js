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
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';



function Storepage(props) {
  const storeID = props.match.params.id;
  //  props.store = props.store.results || props.store
  useEffect(() => {
    props.getStore(storeID);
  }, []);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <div style={{ display: 'flex', flexDirection: 'row', minHeight: '100vh' }}>

        <div style={{ width: '20vw', height: '90vh', marginTop: '10vh' }}>
          <div style={{ width: '20vw', height: '90vh', backgroundColor: '#f5f5f5', marginLeft: '20vh' }}>
            <StoreInfo store={props.store} user={props.user} />
          </div>
        </div>
        <div>

          <div style={{ marginLeft: '14vw', marginTop: '16vh', width: '55vw', maxHeight: '55vh' }}>
            <Tabs defaultActiveKey="sale" id="uncontrolled-tab-example">

              <Tab eventKey="sale" title="On sale">
                <OnSale products={props.sale} user={props.user} />
              </Tab>

              <Tab eventKey="products" title="All products"
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  overflow: 'scroll',
                  justifyContent: 'center',
                  maxHeight: '80vh',
                  marginTop: '6vh',
                }}>
                <AllProducts products={props.store.products} user={props.user} />
              </Tab>

              <Tab tabClassName={(!props.owner) ? 'd-none' : ''} eventKey="orders" title="Orders">
                <Orders orders={props.orders} />
              </Tab>
            </Tabs>
          </div>
        </div>
      </div>
      <Reviews
        reviews={props.store.reviews}
        addReview={props.addStoreReview}
        product={props.store}
        user={props.user} />
      {/* <div>
        <div id='store-pageExtra'>
          <StoreInfo store={props.store} />
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
      </div>
      <div>
        <Reviews
          reviews={props.store.reviews}
          addReview={props.addStoreReview}
          product={props.store}
          user={props.user} />
      </div> */}
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