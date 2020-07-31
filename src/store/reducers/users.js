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
  viewedProducts: [],
  cart: [],
  _id: '',
  stores:'',
};

export default (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
  case 'GET CART PRODUCTS':
    return { ...state, ...payload };
  case 'ADDCART':
    return {...state, ...payload};
  case 'LOGIN':
    return { ...state, ...payload, logedin: true };
  case 'LOGOUT':
    return initialState;
  default:
    return state;
  }
};
