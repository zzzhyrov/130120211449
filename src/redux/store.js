import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import uuidCreator from './middleware/uuidCreator';
import reducer from './reducer';

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(uuidCreator))
);

export default store;
