import { combineReducers } from 'redux';
import reservation from './reservation';
import destinations from './destinations';
import order from './order';
import cart from './cart';

export default combineReducers({
  reservation,
  destinations,
  order,
  cart,
});
