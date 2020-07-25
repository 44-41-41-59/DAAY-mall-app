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
    <div class="sided">
      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
      <h4>Cost : $$$$$</h4>
      <div id="star">
        {[...Array(5)].map((star, i) => {
          const ratingValue = i + 1;
          return <label>
            <input type="radio" name="ratting" value={ratingValue} onClick={() => setRating(ratingValue)} />
            <FaStar class="star" color={ratingValue <= (hover || rating) ? '#ffc107' : '#e4e5e9'} size={50} onMouseEnter={() => setHover(ratingValue)} onMouseLeave={() => setHover(null)} /></label>;
        })}
        <p>the rating is {rating}.</p>
      </div>
      <h4>Color :</h4>
      <div class="circle">
        <span id="blue"><img src="https://findicons.com/files/icons/766/base_software/128/circle_blue.png" /></span>
        <span id="yellow"><img src="https://findicons.com/files/icons/766/base_software/128/circle_yellow.png" /></span>
        <span id="orange"><img src="https://findicons.com/files/icons/766/base_software/128/circle_orange.png" /></span>
        <span id="green"><img src="https://findicons.com/files/icons/766/base_software/128/circle_green.png" /></span>
        <span id="silver"><img src="https://findicons.com/files/icons/766/base_software/128/circle_grey.png" /></span>
        <span id="red"><img src="https://findicons.com/files/icons/766/base_software/128/circle_red.png" /></span>
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

  );
};

export default StarRating;