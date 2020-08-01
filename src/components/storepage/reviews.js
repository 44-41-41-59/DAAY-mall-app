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
    <div>
      <div>
        {props.reviews.map(review => {
          return (
            <Card>
              <Link to={`/profile/${review.userID._id}`} >
                <Card.Header as="h5">{review.userID.username}</Card.Header>
              </Link>
              <Card.Body>
                <Card.Text>
                  Rate: {review.rate} , Review: {review.review}
                </Card.Text>
              </Card.Body>
            </Card>
          );
        })}
      </div>
      <form onSubmit={formHandler}>
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

    </div>
  );
}

export default Reviews;