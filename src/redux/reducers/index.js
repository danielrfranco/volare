import { combineReducers } from 'redux';
import reservations from './reservations';
import cities from './cities';

export default combineReducers({
  reservations,
  cities,
});
