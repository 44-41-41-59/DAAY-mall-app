import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import user from './reducers/users';
import products from './reducers/products';
import files from './reducers/files';
<<<<<<< HEAD
import ads from './reducers/ads';
const rootReducer = combineReducers({ user, files, products, ads });
=======
>>>>>>> 2c6904aa56433c44453efb4ea13c154551fae086

const rootReducer = combineReducers({ user, files, products });
export default createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk)),
);
