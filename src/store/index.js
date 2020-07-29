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

const rootReducer = combineReducers({
  user,
  files,
  products,
  ads,
  product,
  pagination,
  favoriteStores,
  wishlist,
});

export default createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
