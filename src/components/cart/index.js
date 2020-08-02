import React, { useEffect } from 'react';
import Cart from './cart';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { getCartProducts, payedUserCart } from '../../store/actions/products';
import { useHistory } from 'react-router-dom';

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.

function App(props) {
  const history = useHistory();
  useEffect(() => {
    props.getCartProducts(props.match.params.id, history);
  }, []);
  return (
    <div className="App">
      <Cart user={props.user} pay={props.payedUserCart} fetch={props.fetch} />
    </div>
  );
}

// export default withRouter(App);
const mapStateToProps = (state) => {
  return { user: state.user, fetch: state.fetching };
};
const actionCreater = (dispatch) => ({
  getCartProducts: (id) => dispatch(getCartProducts(id)),
  payedUserCart: (body, history) => dispatch(payedUserCart(body, history)),
});
export default connect(mapStateToProps, actionCreater)(withRouter(App));
