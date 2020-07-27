import React, { useState } from 'react';

import { FaStar } from 'react-icons/fa';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';

import './search.css';

function Sorting(props) {
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);
  // sortBy, sortPriceRange, sortRating

  let changeHandler = (e) => {
    console.log('sooooooooooooooooooorting', e.target.sortby);
  };

  return (
    <div id='sorting-div'>
      <section class="sort-box-1">
        <h6 class="font-weight-bold form-field">Sort by:</h6>
        <div class='sortby-wrapper'>
          <Form.Check custom type='radio' id='custom-radio' label='PRICE' name='sortby' onChange={changeHandler} value='price' />
          <Form.Check custom type='radio' id='custom-radio' label='NEW' name='sortby' onChange={changeHandler} />
          <Form.Check custom type='radio' id='custom-radio' label='TOP RANKED' name='sortby' onChange={changeHandler} />
        </div>

      </section>

      <section class="sort-box-1">

        <h6 class="font-weight-bold form-field">Avg. Customer Review</h6>

        <div class="rating">
          {[...Array(5)].map((star, i) => {
            const ratingValue = i + 1;
            return (
              <label>
                <input type="radio" name="ratting" value={ratingValue} onClick={() => setRating(ratingValue)} />

                <FaStar class="star" color={ratingValue <= (hover || rating) ? '#ffc107' : '#e4e5e9'} size={25} onMouseEnter={() => setHover(ratingValue)} onMouseLeave={() => setHover(null)} />
              </label>
            );
          })}
          {/* <p>{rating}</p> */}
        </div>
      </section>

      <section class="sort-box-1">

        <h6 class="font-weight-bold form-field">Price</h6>
        <select class="custom-select" name='priceRange-dropdown' onChange={changeHandler}>
          <option selected>Open this select menu</option>
          <option value="0-25">UNDER 25$</option>
          <option value="25-50">$25 TO $50</option>
          <option value="50-100">$50 TO $100</option>
          <option value="100-200">$100 TO $200</option>
          <option value="200">$200 & ABOVE</option>

        </select>
        <div id='price-range'>

        </div>

        <InputGroup size="sm" className="mb-3">
          <InputGroup.Prepend>
            <InputGroup.Text id="inputGroup-sizing-sm" name='minPrice' onChange={changeHandler}>MIN</InputGroup.Text>
          </InputGroup.Prepend>
          <FormControl aria-label="Small" aria-describedby="inputGroup-sizing-sm" />
          <InputGroup.Prepend>
            <InputGroup.Text id="inputGroup-sizing-sm" name='maxPrice' onChange={changeHandler}>MAX</InputGroup.Text>
          </InputGroup.Prepend>
          <FormControl aria-label="Small" aria-describedby="inputGroup-sizing-sm" />
        </InputGroup>

      </section>

    </div>
  );
}


export default Sorting;
