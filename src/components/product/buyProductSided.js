// /* eslint-disable jsx-a11y/alt-text */
// import React, { useState } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import './buyProduct.scss';
// import { FaStar } from 'react-icons/fa';

// const StarRating = (props) => {
//   const [rating, setRating] = useState(null);
//   const [hover, setHover] = useState(null);
//   const makePayment = (token) => {
//     let body = {
//       token,
//       amount: Math.ceil(props.product.price * props.quantity * 100),
//     };
//     props.pay(body);
//   };
//   console.log(props);
//   return (
//     <div>
//       <div id="star">
//         {[...Array(5)].map((star, i) => {
//           const ratingValue = i + 1;
//           return <label>
//             <input type="radio" name="ratting" value={ratingValue} onClick={() => setRating(ratingValue)} />
//             <FaStar class="star" color={ratingValue <= (hover || rating) ? '#26115a' : '#e4e5e9'} size={30} onMouseEnter={() => setHover(ratingValue)} onMouseLeave={() => setHover(null)} /></label>;
//         })}
//         <p>the rating is <span id="starNumber">{rating}</span> .</p>
//       </div>
//     </div>
//   );
// };
// export default StarRating;
