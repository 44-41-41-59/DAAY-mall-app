import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './buyProductnewForm.scss';
import './buyProduct.scss';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { FaStar } from 'react-icons/fa';
import { MDBInput } from 'mdbreact';
import {
  addCart,
  addLike,
  addWishlist,
  payedUserCart,
} from '../../store/actions/products';
import './one-product.css';

function OneProduct(props) {
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);
  const [quantity, setQuantity] = useState({value:1});

  let decrease = () => {
    setQuantity({ value: quantity.value - 1 });
  };

  let increase = () => {
    setQuantity({ value: quantity.value + 1 });
  };

  function addToCart() {
    console.log('uuuuuuuuuuuu', props.productID);
    props.addCart({ products: props.productID, quantity, userID: props.user._id });
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
  return (
    <div >
      <div class="container" style={{display:'flex', flexDirection:'row'}}>

        <div id='rightside-product'>
          <div id='info-product'>
            <p>Title</p>
            <p>Rating</p>
            <p>Views</p>
            <p>Price + if there is sale</p>
            <p>Available quantity</p>
          </div>
          <div id='footer-product'>
            <div>
              <button>add to cart</button>
              <div className="def-number-input number-input">
                <button onClick={decrease} className="minus"></button>
                <input className="quantity" name="quantity" value={quantity.value} onChange={() => console.log('change')}
                  type="number" />
                <button onClick={increase} className="plus"></button>
              </div>
              {/* <input name='quantity' placeholder='quantity' /> */}
            </div>
            <button>add to wishlist</button>
          </div>
        </div>

        <div id='leftside-product'>
          <div id='bigimage-product'>
            <img src='' alt='product' />
          </div>
          <div id='samllimages-product'>
            <img src='' alt='product' />
            <img src='' alt='product' />
            <img src='' alt='product' />
          </div>
        </div>
      </div>
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



