/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './buyProduct.scss';
import { FaStar } from 'react-icons/fa';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import Button from 'react-bootstrap/Button';
import StripeCeckout from 'react-stripe-checkout';

const StarRating = (props) => {
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);
  const makePayment = (token) => {
    let body = {
      token,
      amount: Math.ceil(props.product.price * props.quantity * 100),
    };
    props.pay(body);
  };
  console.log(props);
  return (
    <div class="sided">
      <p>{props.product.name}</p>
      <p>{props.product.description}</p>
      <h4>Cost : {props.product.price}</h4>
      <div id="star">
        {[...Array(5)].map((star, i) => {
          const ratingValue = i + 1;
          return (
            <label>
              <input
                type="radio"
                name="ratting"
                value={ratingValue}
                onClick={() => setRating(ratingValue)}
              />
              <FaStar
                class="star"
                color={ratingValue <= (hover || rating) ? '#ffc107' : '#e4e5e9'}
                size={50}
                onMouseEnter={() => setHover(ratingValue)}
                onMouseLeave={() => setHover(null)}
              />
            </label>
          );
        })}
        <p>the rating is {rating}.</p>
      </div>
      <div class="circle">
        <span id="blue">
          <img src="https://findicons.com/files/icons/766/base_software/128/circle_blue.png" />
        </span>
        <span id="yellow">
          <img src="https://findicons.com/files/icons/766/base_software/128/circle_yellow.png" />
        </span>
        <span id="orange">
          <img src="https://findicons.com/files/icons/766/base_software/128/circle_orange.png" />
        </span>
        <span id="green">
          <img src="https://findicons.com/files/icons/766/base_software/128/circle_green.png" />
        </span>
        <span id="silver">
          <img src="https://findicons.com/files/icons/766/base_software/128/circle_grey.png" />
        </span>
        <span id="red">
          <img src="https://findicons.com/files/icons/766/base_software/128/circle_red.png" />
        </span>
      </div>
      <h4>Estimated Delivery</h4>
      <h4>Available items: {props.product.amount}</h4>
      <DropdownButton id="dropdown-basic-button" title="Quantity">
        <Dropdown.Item href="#/action-1">1</Dropdown.Item>
        <Dropdown.Item href="#/action-2">2</Dropdown.Item>
        <Dropdown.Item href="#/action-3">3</Dropdown.Item>
        <Dropdown.Item href="#/action-3">4</Dropdown.Item>
        <Dropdown.Item href="#/action-3">5</Dropdown.Item>
      </DropdownButton>
      <StripeCeckout
        stripeKey="pk_test_51Gw6p5DCWnftj01CHDFox6ZFihtNyZ0EkHqOxR8uTnYB0jeLLTPfZBPtuRQXcFBSd4McXulw456Dl1Cp6mq3t6lR00booR4E8t"
        token={makePayment}
        name="test"
        amount={props.product.price * props.quantity * 100}
      >
        <button>
          the totel will be here {props.product.price * props.quantity}
        </button>
      </StripeCeckout>{' '}
      <Button variant="outline-primary" onClick={props.actions.addToCart}>
        Add to Cart
      </Button>{' '}
      <Button variant="outline-primary" onClick={props.actions.addToLikes}>
        Like
      </Button>{' '}
      <Button variant="outline-primary" onClick={props.actions.addToWishlist}>
        Add To wishlist
      </Button>{' '}
    </div>
  );
};

export default StarRating;
