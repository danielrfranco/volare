import { combineReducers } from 'redux';
import reservations from './reservations';
import destinations from './destinations';

export default combineReducers({
  reservations,
  destinations,
});
