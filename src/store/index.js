import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import user from './reducers/users';
import files from './reducers/files';
const rootReducer = combineReducers({ user, files });

export default createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
