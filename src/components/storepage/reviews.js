import React from 'react';
import Card from 'react-bootstrap/Card'; 
import { Link } from 'react-router-dom';

function Reviews(props) {
  let formHandler = (e) => {
    console.log('check here');
    e.preventDefault();
    let formData = {
      review: e.target.review.value,
      rate: e.target.rate.value,
      storeID: e.target.storeID.value,
      // userID:  e.target.userID.value,
    };
    props.addReview(formData);
  };

  return (
    <div class="reviewsStore">
      
      <form onSubmit={formHandler} id="reviewsBackground">
        <h1>Reviews</h1>
        <label for='review'>
          Review
          <input type='text' name='review' />
        </label>
        <label for='rate1'>
          1
          <input type='radio' name='rate' value='1' id='rate1' />
        </label>
        <label for='rate2'>
          2
          <input type='radio' name='rate' value='2' id='rate2' />
        </label>
        <label for='rate3'>
          3
          <input type='radio' name='rate' value='3' id='rate3' />
        </label>
        <label for='rate4'>
          4
          <input type='radio' name='rate' value='4' id='rate4' />
        </label>
        <label for='rate15'>
          5
          <input type='radio' name='rate' value='5' id='rate5' />
        </label>
        <input type='hidden' name='storeID' value={props.store._id} />
        <input type='hidden' name='userID' value={props.user._id} />
        <input type='submit' />
      </form>
      <div>
        
        {props.reviews.map(review => {
          return (
            <div>
              <div class="codepen-wrapper">
                <figure class="review">
                  <figcaption class="review__person">
                    <img src="http://alexsommers.com/codepen/user-6.jpg" alt="User 1" class="review__photo" />
                    <div class="review__info">
                      <p class="review__info--name"><Link to={`/profile/${review.userID._id}`} >
                        <h1 as="h5">{review.userID.username}</h1>
                      </Link></p>
                      <p class="review__info--date"> April 26, 2020</p>
                    </div>
                    <div class="review__rating">{review.rate}⍟</div>
                  </figcaption>
                  <blockquote class="review__text">
                    {review.review}
                  </blockquote>
                </figure>
              </div>
              <div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Reviews;