import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import user from './reducers/users';
import products from './reducers/products';
import files from './reducers/files';
import wishlist from './reducers/wishlist';
import favoriteStores from './reducers/favoritestores';

import ads from './reducers/ads';
const rootReducer = combineReducers({ user, files, products, ads, wishlist, favoriteStores });

export default createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk)),
);
