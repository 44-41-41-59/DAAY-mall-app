import React, { useEffect, useState } from 'react';
// import BuyProductSlid from './buyProductSlide';
// import BuyProductSided from './buyProductSided';
import { withRouter } from 'react-router-dom';
import { MDBContainer, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter } from 'mdbreact';

import { connect } from 'react-redux';
import { getProduct, addProductReview } from '../../store/actions/products';

import Reviews from './reviews';
// import Product from './buyProductnewForm';
import OneProduct from './product-page';



// import BuyProductSecSlid from './buyProductSecSlide';
function ProductPage(props) {
  const [audio] = useState(new Audio('../../store/actions/Funny.mp3'));
   
  const productID = props.match.params.id;
  
  useEffect(() => {
    audio.play();
    props.getProduct(productID);
  }, [audio, productID, props]);

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
      {<MDBModal isOpen={
        props.fetching.fetchAddCardSuccesses ||
        props.fetching.fetchAddWishListSuccesses} toggle='' side position="top-right">
        <MDBModalHeader >SUCCESS</MDBModalHeader>
        <MDBModalBody>
           the card has been Added successfully to the {props.fetching.fetchAddCardSuccesses?'Cart':'wishlist'} 📦🎁
        </MDBModalBody>
        <MDBModalFooter>
          <MDBBtn color="secondary" >UNDO</MDBBtn>
          <MDBBtn color="primary">DONE</MDBBtn>
        </MDBModalFooter>
      </MDBModal>}
      
      {<MDBModal color='primary' isOpen={props.fetching.fetchModalFailer} toggle='' side position="top-right">
        <MDBModalHeader >SOMETHING WENT WRONG</MDBModalHeader>
        <MDBModalBody>
           you need to login or signup
        </MDBModalBody>
        <MDBModalFooter>
          <MDBBtn color="secondary" >CANCEL</MDBBtn>
          <MDBBtn color="primary">Go to register</MDBBtn>
        </MDBModalFooter>
      </MDBModal>}
    </div>
  );
}

function Modal(){
  return(
    <MDBModal isOpen={this.state.modal6} toggle={this.toggle(6)} side position="top-right">
      <MDBModalHeader toggle={this.toggle(6)}>MDBModal title</MDBModalHeader>
      <MDBModalBody>
           the // has been Added successfully 📦🎁
      </MDBModalBody>
      <MDBModalFooter>
        <MDBBtn color="secondary" onClick={this.toggle(6)}>Close</MDBBtn>
        <MDBBtn color="primary">Save changes</MDBBtn>
      </MDBModalFooter>
    </MDBModal>
  );
}

const mapStateToProps = (state) => {
  return {
    product: state.product,
    user: state.user,
    fetching:state.fetching,
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
