import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './buyProductnewForm.scss';
import './buyProduct.scss';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { FaStar } from 'react-icons/fa';
import { MDBBtn, MDBIcon, MDBCard, MDBNavbar } from 'mdbreact';
import { If, Then, Else } from '../if/if';
import {
  addCart,
  addLike,
  addWishlist,
  payedUserCart,
} from '../../store/actions/products';
import './one-product.css';
import product from '.';

function OneProduct(props) {
  const [quantity, setQuantity] = useState({ value: 1 });

  let decrease = () => {
    setQuantity({ value: quantity.value - 1 });
  };

  let increase = () => {
    setQuantity({ value: quantity.value + 1 });
  };

  function addToCart() {
    console.log('harrr you');
    props.addCart({ products: props.product._id, quantity: quantity.value, userID: props.user._id });
  }
  function addToWishlist() {
    props.addWishlist({ productID: props.product._id });
  }
  function addToLikes() {
    props.addLike({ productID: props.product._id });
  }

  const makePayment = (token) => {
    let body = {
      token,
      amount: Math.ceil(props.product.price * props.quantity * 100),
    };
    props.pay(body);
  };
  let sum = 0;
  let ratingStars = [];
  let noRate = false;
  let noRateStars = [];
  let emptyRatingStars = [];
  let priceAfterSale = 0;
  props.product.reviews.forEach(review => {
    sum = sum + review.rate;
  });
  let avg = Math.ceil(sum / props.product.reviews.length);
  for (let i = 0; i < avg; i++) {
    ratingStars.push(' ');
  }
  for (let i = 0; i < 5 - avg; i++) {
    emptyRatingStars.push(' ');
  }
  if (isNaN(avg)) {
    noRate = true;
    for (let i = 0; i < 5; i++) {
      noRateStars.push(' ');
    }
  }
  if (props.product.sale) {
    priceAfterSale = Math.floor(props.product.price - (props.product.price * (props.product.sale / 100)));
  }

  return (
    <div>
      <MDBCard
        class="container"
        style={{ maxHeight: '80vh', display: 'flex', flexDirection: 'row', justifyContent: 'center', margin: '5vh 20vh' }}
      >
        <div
          id='leftside-product'
          style={{ width: '50vw', margin: '5vh', padding: '6vh 8vh' }}
        >
          <div style={{ minHeight: '60vh' }}>
            <div id='info-product' style={{ padding: '5vh' }} >
              <h1 style={{ fontSize: '1.3rem' }}>{props.product.name}</h1>
              <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'left', alignItems: 'center' }}>
                <div>
                  <span style={{ color: 'gray', marginRight: '1vw' }}>{props.product.views} Views</span>
                  <If condition={!noRate}>
                    <Then>
                      {ratingStars.map(star => {
                        return <MDBIcon icon='star' />;
                      })}
                      {emptyRatingStars.map(star => {
                        return <MDBIcon far icon='star' />;
                      })}
                    </Then>
                    <Else>
                      {noRateStars.map(star => {
                        return <MDBIcon far icon='star' />;
                      })}
                    </Else>
                  </If>

                </div>
              </div>
              <p style={{ color: 'gray' }}>{props.product.Timestamp.split('T')[0]}</p>
              <p style={{ color: 'gray' }}>{props.product.category}</p>

              <div style={{ margin: '5vh 0vh' }}>
                <If condition={!props.product.sale}>
                  <Then>
                    <span className='float-left font-weight-bold' style={{ fontSize: '1rem' }}>
                      <strong>{props.product.price} JOD</strong>
                    </span>
                  </Then>
                  <Else>
                    <span className='float-left font-weight-bold' style={{ fontSize: '1rem', textDecoration: 'line-through', marginRight: '1vw', color: 'red' }}>
                      <strong>{props.product.price} JOD</strong>
                    </span>
                    <span className='float-left font-weight-bold' style={{ fontSize: '1rem' }}>
                      <strong>{priceAfterSale} JOD</strong>
                    </span>
                  </Else>
                </If>
              </div>
            </div>
            <div
              id='footer-product'
              style={{
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
                padding: '3vh',
                // justifyContent: 'center',
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'center' }}>
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}
                >
                  <div
                    className="def-number-input number-input"
                    style={{
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      alignSelf: 'center',
                      width: '5vw',
                      marginBottom: '0px',
                    }}
                  >
                    <button onClick={decrease} className="minus"></button>
                    <input
                      className="quantity"
                      name="quantity"
                      value={quantity.value}
                      onChange={() => console.log('change')}
                      type="number"
                      style={{
                        maxWidth: '2vw',
                        textAlign: 'center',
                      }} />
                    <button onClick={increase} className="plus"></button>
                  </div>
                  <MDBBtn id='bluebtnpr' onClick={addToCart}>Add to cart</MDBBtn>

                </div>
                <MDBBtn id='orangebtnpr' style={{ width: '44%' }} onClick={addToWishlist}>Add to wishlist</MDBBtn>

              </div>

            </div>

          </div>
        </div>

        <div
          id='rightside-product'
          style={{ width: '30vw', margin: '5vh' }}
        >
          <div
            style={{ maxHeight: '60vh' }}
          >
            <div
              id='bigimage-product'
              style={{
                width: '25vw',
                display: 'flex',
                justifyContent: 'center',
              }}
            >
              <img
                src={props.product.images}
                alt='product'
                style={{
                  width: '25vw',
                }}
              />
            </div>
            <div
              id='samllimages-product'
              style={{
                width: '25vw',
                display: 'flex',
                justifyContent: 'space-between',
              }}
            >
              <img src={props.product.images} style={{ width: '7vw', marginTop: '1vw' }} alt='product' />
              <img src={props.product.images} style={{ width: '7vw', marginTop: '1vw' }} alt='product' />
              <img src={props.product.images} style={{ width: '7vw', marginTop: '1vw' }} alt='product' />
            </div>
          </div>
        </div>
      </MDBCard>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.user,
    product: state.product,
    reviews: state.reviews,
  };
};

const mapDispatchToProps = (dispatch) => ({
  addCart: (body) => dispatch(addCart(body)),
  addLike: (body) => dispatch(addLike(body)),
  addWishlist: (body) => dispatch(addWishlist(body)),
  payedUserCart: (body) => dispatch(payedUserCart(body)),
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(OneProduct));



