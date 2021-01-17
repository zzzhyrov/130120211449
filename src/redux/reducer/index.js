import { combineReducers } from 'redux';
import managers from './managers';
import reviews from './reviews';
import users from './users';

export default combineReducers({
  managers,
  reviews,
  users,
});
