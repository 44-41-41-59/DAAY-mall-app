import React, { useState } from 'react';
import { connect } from 'react-redux';
import { getSortingSetting } from '../../store/actions/products';

import { FaStar } from 'react-icons/fa';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import { MDBInput } from 'mdbreact';

import './search.scss';

function Sorting(props) {
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);
  const [sorting, setSorting] = useState({ radio: '' });
  // sortBy, sortPriceRange, sortRating

  let changesort = (sort) => {
    setSorting({ radio: sort });
    props.getSortingSetting(sort, '', '');
  };

  let changeHandler = (e) => {
    let sortingName = e.target.name;
    let sortingValue = e.target.value;
    if (sortingName === 'sortby') {
      props.getSortingSetting(sortingValue, '', '');
    } else if (sortingName === 'rating') {
      props.getSortingSetting('', '', sortingValue);
    } else if (sortingName === 'priceRangeDropdown') {
      props.getSortingSetting('', sortingValue, '');
    } else if (sortingName === 'minPrice') {
      props.getSortingSetting('', sortingValue, '');
    } else if (sortingName === 'maxPrice') {
      props.getSortingSetting('', sortingValue, '');
    }
  };

  return (
    <div>
      <section >
        <p class="font-weight-bold form-field">Sort by:</p>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <label >
            Price
            <input
              type='radio'
              onClick={() => changesort('price')}
              checked={sorting.radio === 'price' ? true : false}
              value='price'
              style={{ marginTop: '2vh', marginBottom: '2vh' }}
            />
          </label>
          <label>
            New
            <input
              type='radio'
              onClick={() => changesort('new')}
              checked={sorting.radio === 'new' ? true : false}
              value='new'
              style={{ marginTop: '2vh', marginBottom: '2vh' }}
            />
          </label>
          <label>
            Top Ranked
            <input
              type='radio'
              onClick={() => changesort('top-ranked')}
              checked={sorting.radio === 'top-ranked' ? true : false}
              value='top-ranked'
              style={{ marginTop: '2vh', marginBottom: '2vh' }}
            />
          </label>
        </div>
      </section>

      <section>

        <p class="font-weight-bold form-field">Customer Reviews</p>

        <div class="rating">
          {[...Array(5)].map((star, i) => {
            const ratingValue = i + 1;
            return (
              <label>
                <input type="radio" name="rating" value={ratingValue} onClick={() => setRating(ratingValue)} onChange={changeHandler} />
                <FaStar class="star" color={ratingValue <= (hover || rating) ? '#ec9f05' : '#c8e2fa'} size={25} onMouseEnter={() => setHover(ratingValue)} onMouseLeave={() => setHover(null)} />
              </label>
            );
          })}
          {/* <p>{rating}</p> */}
        </div>
      </section>

      <section>

        <p class="font-weight-bold form-field">Price</p>
        <select class="custom-select" name='priceRangeDropdown' onChange={changeHandler}>
          <option selected>Price range</option>
          <option value="0-25">UNDER 25$</option>
          <option value="25-50">$25 TO $50</option>
          <option value="50-100">$50 TO $100</option>
          <option value="100-200">$100 TO $200</option>
          <option value="200">$200 & ABOVE</option>
        </select>

        <div id='price-range' style={{ width:'15vw', marginTop: '5vh' }}>
          <InputGroup size="sm" className="mb-3">
            <InputGroup.Prepend>
              <InputGroup.Text id="inputGroup-sizing-sm">
                MIN
              </InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl
              aria-label="Small"
              name='minPrice'
              aria-describedby="inputGroup-sizing-sm"
              onChange={changeHandler}
            />
            <InputGroup.Prepend>
              <InputGroup.Text id="inputGroup-sizing-sm" >
                MAX
              </InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl
              aria-label="Small"
              aria-describedby="inputGroup-sizing-sm"
              name='maxPrice'
              onChange={changeHandler}
            />
          </InputGroup>
        </div>

      </section>

    </div>
  );
}

const mapStateToProps = (state) => {
  let products = state.products;
  return { data: products.results, searchTerm: products.searchTerm, searchedProducts: products.searchedProducts };
};


const mapDispatchToProps = (dispatch) => ({
  getSortingSetting: (sortBy, sortPriceRange, sortRating) => dispatch(getSortingSetting(sortBy, sortPriceRange, sortRating)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Sorting);
