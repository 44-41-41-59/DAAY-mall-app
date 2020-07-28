import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import user from './reducers/users';
import products from './reducers/products';
import files from './reducers/files';
import product from './reducers/product';

import ads from './reducers/ads';
const rootReducer = combineReducers({ user, files, products, ads, product });

export default createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
