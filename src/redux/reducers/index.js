import { combineReducers } from 'redux';
import reservation from './reservation';
import destinations from './destinations';
import order from './order';

export default combineReducers({
  reservation,
  destinations,
  order,
});
