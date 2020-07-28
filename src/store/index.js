import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import user from './reducers/users';
import products from './reducers/products';
import files from './reducers/files';
<<<<<<< HEAD
import wishlist from './reducers/wishlist';
import favoriteStores from './reducers/favoritestores';

import ads from './reducers/ads';
const rootReducer = combineReducers({ user, files, products, ads, wishlist, favoriteStores });
=======
import product from './reducers/product';

import ads from './reducers/ads';
const rootReducer = combineReducers({ user, files, products, ads, product });
>>>>>>> 9608cf03d5f7ff646c928825f5a995e727b13f6d

export default createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
