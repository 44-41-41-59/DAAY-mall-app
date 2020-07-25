import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import user from './reducers/users';

const rootReducer = combineReducers({ user });

export default createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
