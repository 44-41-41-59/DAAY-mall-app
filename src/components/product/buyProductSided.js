/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './buyProduct.scss';
import { FaStar } from 'react-icons/fa';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import Button from 'react-bootstrap/Button';

const StarRating = () => {
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);
  return (
    <div class="space">
      <div class="sided">
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
        <h4>Cost : $$$$$</h4>
        <div id="star">
          {[...Array(5)].map((star, i) => {
            const ratingValue = i + 1;
            return <label>
              <input type="radio" name="ratting" value={ratingValue} onClick={() => setRating(ratingValue)} />
              <FaStar class="star" color={ratingValue <= (hover || rating) ? '#26115a' : '#e4e5e9'} size={30} onMouseEnter={() => setHover(ratingValue)} onMouseLeave={() => setHover(null)} /></label>;
          })}
          <p>the rating is <span id="starNumber">{rating}</span> .</p>
        </div>
        <h4>Estimated Delivery</h4>
        <h4>Available items</h4>
        <DropdownButton id="dropdown-basic-button" title="Quantity">
          <Dropdown.Item href="#/action-1">1</Dropdown.Item>
          <Dropdown.Item href="#/action-2">2</Dropdown.Item>
          <Dropdown.Item href="#/action-3">3</Dropdown.Item>
          <Dropdown.Item href="#/action-3">4</Dropdown.Item>
          <Dropdown.Item href="#/action-3">5</Dropdown.Item>
        </DropdownButton>
        <Button variant="outline-primary">Buy Item</Button>{' '}
        <Button variant="outline-primary">Add to Cart</Button>{' '}
            
      </div>
    </div>

  );
};

export default StarRating;