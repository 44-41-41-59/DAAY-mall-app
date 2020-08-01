import React from 'react';
import { MDBRow, MDBCard, MDBCardBody, MDBIcon } from 'mdbreact';
import Card from 'react-bootstrap/Card';


function Reviews(props) {
  let formHandler = (e) => {
    e.preventDefault();
    let formData = {
      review: e.target.review.value,
      rate: e.target.rate.value,
      productID: e.target.productID.value,
    };
    props.addReview(formData);
  };
  return (
    <div>
      <MDBCard>
        <MDBCardBody>
          <MDBRow>
            <div>
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
                <input type='hidden' name='productID' value={props.product._id} />
                <input type='hidden' name='userID' value={props.user._id} />
                <input type='submit' />
              </form>
            </div>
          </MDBRow>
        </MDBCardBody>
      </MDBCard>
      {props.product.reviews.map(review => {
        return (
          <MDBCard
            className="my-5 px-5 pt-4"
            style={{ fontWeight: 300, maxWidth: 600 }}
          >
            <MDBCardBody className="py-0">
              <MDBRow>
                <div className="mdb-feed">

                  <div className="news">
                    <div className="label">
                      <img
                        src={review.userID.avatar}
                        alt='user avatar'
                        className="rounded-circle z-depth-1-half"
                        style={{ width: '50px' }}
                      />
                    </div>
                    <div className="excerpt">
                      <div className="brief">
                        <a href="#!" className="name">
                          {review.userID.username}
                        </a>
                        <div className="date">2 days ago</div>
                      </div>
                      <div className="added-text">
                        {review.review}
                      </div>
                      <div className="feed-footer">
                        <a href="#!" className="like">
                          <MDBIcon icon="heart" />
                          <span>Rate: {review.rate}</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </MDBRow>
            </MDBCardBody>
          </MDBCard>
        );
      })
      }
    </div>
  );
}

export default Reviews;