let initialState = {
  logedin: false,
  username: '',
  email: '',
  avatar:
    'https://cdn0.iconfinder.com/data/icons/set-ui-app-android/32/8-512.png',
  role: '',
  acl: [],
  paymentsHistory: [],
  confirmed: false,
  wishlist: [ ],
  favoriteStores: [],
  orders: [],
  views: [],
  cart: [],
  _id: '',
  stores:'',
};

export default (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
  case 'GET CART PRODUCTS':
    return { ...state, ...payload };
  // case 'CHECKOUT PAYMENT':
  //   return { ...state, cart:[] };
  case 'ADDCART':
    state.cart.push(payload.cart);
    return {...state};
  case 'LOGIN':
    console.log(payload);
    return { ...state, ...payload, logedin: true };
  case 'DELETE CARD FROM CART':
    let cart =  state.cart.filter(item=> item._id !==  payload);
    return { ...state, cart };
  case 'LOGOUT':
    return initialState;
  default:
    return state;
  }
};
