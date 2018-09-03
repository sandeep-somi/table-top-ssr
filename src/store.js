import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import * as reducers from './redux/reducers';

const reducer = combineReducers({
  ...reducers
})

const configureStore = preloadedState => {
  const store = createStore(reducer, preloadedState, applyMiddleware(thunk));
  return store
}

const store = configureStore();

export default store;