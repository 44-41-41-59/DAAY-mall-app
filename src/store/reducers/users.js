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
  wishlist: [
    {
      title: 'electronics',
      image:
        'https://getmyshopping.com/wp-content/uploads/2019/07/Products00.jpg',
    },
    {
      title: 'cosmetics',
      image:
        'https://www.rossanoferretti.com/pub/media/catalog/category/RF-category-product-mobile.png',
    },
  ],
  favoriteStores: [],
  orders: [],
  viewedProducts: [],
  cart: [],
  _id: '',
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
    case 'GET CART PRODUCTS':
      return { ...state, ...payload };
    case 'LOGOUT':
      return initialState;
    default:
      return state;
  }
};
