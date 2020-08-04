import React, { useState } from 'react';
import { MDBRow, MDBCard, MDBCardBody, MDBIcon } from 'mdbreact';
import Card from 'react-bootstrap/Card';
import { FaStar } from 'react-icons/fa';
import { MDBInput, MDBBtn, MDBRating } from 'mdbreact';

function Reviews(props) {
  const [newRating, setNewRating] = useState(null);
  const [rating, setRating] = useState('1');
  const [hover, setHover] = useState(null);
  const [review, setReview] = useState('');

  const [basic] = useState([
    {
      tooltip: '1',
    },
    {
      tooltip: '2',
    },
    {
      tooltip: '3',
      // choosed: true,
    },
    {
      tooltip: '4',
    },
    {
      tooltip: '5',
    },
  ]);
  let ratingHandler = (rate) => {
    setRating(rate);
  };
  let reviewHandler = (e) => {
    console.log(e.target.value);
    setReview(e.target.value);
  };

  let formHandler = (e) => {
    console.log('harr you');
    e.preventDefault();
    let formData = {
      review: review,
      rate: newRating,
      productID: e.target.productID.value,
    };
    props.addReview(formData);
  };
  return (
    <div>
      <MDBCard style={{ margin: '10vh 20vh', display: 'flex', alignItems: 'center' }}>
        <MDBCardBody>
          <MDBRow>
            <div>
              <form onSubmit={formHandler} style={{ display: 'flex', flexDirection: 'row' }}>

                <MDBInput
                  onChange={reviewHandler}
                  type="textarea"
                  label="Add your review here"
                  rows="2"
                  icon="pencil-alt"
                  style={{ width: '45vw' }}
                />
                {[...Array(5)].map((star, i) => {
                  const ratingValue = i + 1;
                  return <label style={{ display: 'flex', alignItems: 'center' }}>
                    <input
                      type="radio"
                      name="rate"
                      value={ratingValue}
                      onClick={() => setRating(ratingValue)}
                      style={{ display: 'none!important', position: 'fixed' }}
                    />
                    <FaStar
                      class="star"
                      size={30}
                      color={ratingValue <= (hover || newRating) ? '#ee9f1e' : '#e4e5e9'}
                      onMouseEnter={() => setHover(ratingValue)}
                      onMouseLeave={() => setHover(null)}
                      onClick={() => setNewRating(ratingValue)}
                    />

                  </label>;
                })}
                <input type='hidden' name='productID' value={props.product._id} />
                <input type='hidden' name='userID' value={props.user._id} />
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <MDBBtn type='submit' color="blue-grey" style={{ maxHeight: '7vh' }}>Add review</MDBBtn>
                </div>
              </form>
            </div>
          </MDBRow>
        </MDBCardBody>

      </MDBCard>
      {props.product.reviews.map(review => {
        return (
          <MDBCard
            className="my-5 px-5 pt-4"
            style={{ margin: '10vh 20vh', fontWeight: 300, minHeight: '30vh', padding: '3vh' }}
          >
            <MDBCardBody className="py-0">
              <MDBRow>
                <div className="mdb-feed">

                  <div className="news" style={{ display: 'flex', flexDirection: 'row' }}>
                    <div className="label">
                      <img
                        src={review.userID.avatar}
                        alt='user avatar'
                        className="rounded-circle z-depth-1-half"
                        style={{ maxWidth: '8vw', textAlign: 'center' }}
                      />
                      <div className="brief" style={{ minWidth: '8vw', textAlign: 'center', paddingTop: '2vh' }}>
                        <a href="#!" className="name">
                          {review.userID.username}
                        </a>
                        <div className="date" style={{ minWidth: '8vw', textAlign: 'center' }}>Just now</div>
                      </div>
                    </div>
                    <div className="excerpt" style={{
                      alignItems: 'center', minWidth: '70vw', display: 'flex', justifyContent: 'space-evenly',
                    }}>
                      <div className="added-text" style={{ textAlign: 'center' }}>
                        {review.review}
                      </div>
                      <div className="feed-footer" >
                        <div style={{ display:'flex', flexDirection:'center', alignItems:'center'}}>
                          {[...Array(review.rate)].map((star, i) => {
                            return <label style={{ display: 'flex', alignItems: 'center' }}>
                              <FaStar
                                class="star"
                                size={30}
                                color='#ee9f1e'
                              />
                            </label>;
                          })}
                          {[...Array(5-review.rate)].map((star, i) => {
                            return <label style={{ display: 'flex', alignItems: 'center' }}>
                              <FaStar
                                class="star"
                                size={30}
                                color='#e4e5e9'
                              />
                            </label>;
                          })}
                        </div>
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

    </div >
  );
}

export default Reviews;