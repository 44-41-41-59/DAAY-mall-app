import React, { useEffect, useState } from 'react';
// import BuyProductSlid from './buyProductSlide';
// import BuyProductSided from './buyProductSided';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { getProduct, addProductReview } from '../../store/actions/products';

import Reviews from './reviews';
// import Product from './buyProductnewForm';
import OneProduct from './product-page';



// import BuyProductSecSlid from './buyProductSecSlide';
function ProductPage(props) {
  const productID = props.match.params.id;
  
  useEffect(() => {
    props.getProduct(productID);
  }, []);

  return (
    <div >
      {/* <Product
        product={props.product}
        productID={productID}
      // actions={{ addToLikes, addToCart, addToWishlist }}
      // pay={props.payedUserCart}
      // quantity={quantity}
      /> */}

      <OneProduct
        product={props.product}
        productID={productID}
      // actions={{ addToLikes, addToCart, addToWishlist }}
      // pay={props.payedUserCart}
      // quantity={quantity}
      />
      <Reviews
        reviews={props.product.reviews}
        addReview={props.addProductReview}
        product={props.product}
        user={props.user}
      />
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    product: state.product,
    user: state.user,
  };
};
const mapDispatchToProps = (dispatch) => ({
  getProduct: (id) => dispatch(getProduct(id)),
  // addCart: (body) => dispatch(addCart(body)),
  // addLike: (body) => dispatch(addLike(body)),
  // addWishlist: (body) => dispatch(addWishlist(body)),
  // payedUserCart: (body) => dispatch(payedUserCart(body)),
  addProductReview: (reviewData) => dispatch(addProductReview(reviewData)),
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(ProductPage));
