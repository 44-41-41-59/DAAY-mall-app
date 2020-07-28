import React, { useEffect } from 'react';
import Cart from './cart';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { getCartProducts, payedUserCart } from '../../store/actions/products';
// import Charger from './carger';

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.

function App(props) {
  useEffect(() => {
    console.log('hellofdfdsf', props.match.params.id);
    props.getCartProducts(props.match.params.id);
  }, []);
  console.log(props);
  return (
    <div className="App">
      <Cart user={props.user} pay={props.payedUserCart} />
    </div>
  );
}

// export default withRouter(App);
const mapStateToProps = (state) => {
  return { user: state.user };
};
const actionCreater = (dispatch) => ({
  getCartProducts: (id) => dispatch(getCartProducts(id)),
  payedUserCart: (body) => dispatch(payedUserCart(body)),
});
export default connect(mapStateToProps, actionCreater)(withRouter(App));
