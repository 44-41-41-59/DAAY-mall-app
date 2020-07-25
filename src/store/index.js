import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import user from './reducers/users';
import products from './reducers/products';


const rootReducer = combineReducers({ user, products });

export default createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk)),
);
