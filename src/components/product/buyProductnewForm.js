import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './buyProductnewForm.scss';
import './buyProduct.scss';
import { FaStar } from 'react-icons/fa';
import { MDBInput } from 'mdbreact';
export default function NewForm(props) {
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);
  const makePayment = (token) => {
    let body = {
      token,
      amount: Math.ceil(props.product.price * props.quantity * 100),
    };
    props.pay(body);
  };
  return (
    <div>
      <main>
        <div class="container">
          <div>
            <div class="grid product" id="containerPhase1" >
              <div class="column-xs-12 column-md-7" >
                <div class="product-gallery">
                  <div class="product-image">
                    <img id="firstImage" alt="" class="active" class="imgSizeProduct" src="https://source.unsplash.com/W1yjvf5idqA" />
                  </div>
                  <ul class="image-list">
                    <li class="image-item"><img src="https://source.unsplash.com/W1yjvf5idqA" alt="" class="imgSizeProduct" /></li>
                    <li class="image-item"><img src="https://source.unsplash.com/VgbUxvW3gS4" alt="" class="imgSizeProduct"/></li>
                    <li class="image-item"><img src="https://source.unsplash.com/5WbYFH0kf_8" alt="" class="imgSizeProduct"/></li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="column-xs-12 column-md-5" id="containerPhase2">
              <h1 id="productH1">Bonsai</h1>
              <h2 id="productH2">$19.99</h2>
              <div class="description">
                <p>The purposes of bonsai are primarily contemplation for the viewer, and the pleasant exercise of effort and ingenuity for the grower.</p>
                <p>By contrast with other plant cultivation practices, bonsai is not intended for production of food or for medicine. Instead, bonsai practice focuses on long-term cultivation and shaping of one or more small trees growing in a container.</p>
                <h5>Quantity :-</h5>
                <MDBInput type="number"/>
                <div id="star">
                  {[...Array(5)].map((star, i) => {
                    const ratingValue = i + 1;
                    return <label>
                      <input type="radio" name="ratting" value={ratingValue} onClick={() => setRating(ratingValue)} />
                      <FaStar class="star" color={ratingValue <= (hover || rating) ? '#26115a' : '#e4e5e9'} size={30} onMouseEnter={() => setHover(ratingValue)} onMouseLeave={() => setHover(null)} /></label>;
                  })}
                  <p>the rating is <span id="starNumber">{rating}</span> .</p>
                </div>
                <h5>Estimated Delivery</h5>
                <h5>Available items</h5>
              </div>
              <button class="add-to-cart">Add To Cart</button>
            </div>
          </div>

          <div class="grid related-products">
            <div class="column-xs-12">
              <h3 id="alsoLike">You may also like</h3>
            </div>

            <div class="youMayLike">
              <div id="likeImage1">
                <img src="https://source.unsplash.com/miziNqvJx5M" alt=""/>
                <h4>Succulent</h4>
                <p class="price">$19.99</p>
              </div>
              <div id="likeImage2">
                <img src="https://source.unsplash.com/2y6s0qKdGZg" alt=""/>
                <h4>Terranium</h4>
                <p class="price">$19.99</p>
              </div>
              <div id="likeImage3">
                <img src="https://source.unsplash.com/6Rs76hNbIWE" alt=""/>
                <h4>Cactus</h4>
                <p class="price">$19.99</p>
              </div>
            </div>
          </div>

        </div>
      </main>
    </div> 
  );
};


 