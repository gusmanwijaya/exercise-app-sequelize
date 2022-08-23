import {
  combineReducers,
  legacy_createStore as createStore,
  applyMiddleware,
  compose,
} from 'redux';
import thunk from 'redux-thunk';

import loadingReducers from './loading/reducers';
import sessionReducers from './session/reducers';
import profileReducers from './profile/reducers';
import foodReducers from './food/reducers';
import transactionReducers from './transaction/reducers';

const composerEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducers = combineReducers({
  loadingReducers,
  sessionReducers,
  profileReducers,
  foodReducers,
  transactionReducers,
});

const store = createStore(
  rootReducers,
  composerEnhancer(applyMiddleware(thunk)),
);

export default store;
