import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import user from './reducers/users';
import products from './reducers/products';
import files from './reducers/files';
import pagination from './reducers/pagination';
import ads from './reducers/ads';
import product from './reducers/product';
import favoriteStores from './reducers/favoritestores';
import wishlist from './reducers/wishlist';
import fetching from './reducers/fetch';
import store from './reducers/store';
import admin from './reducers/admin';
import profile from './reducers/profile';
import stores from './reducers/stores';
import agent from './reducers/agent';

const rootReducer = combineReducers({
  user,
  files,
  products,
  ads,
  product,
  pagination,
  favoriteStores,
  wishlist,
  fetching,
  store,
  admin,
  profile,
  stores,
  agent,
});

export default createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
