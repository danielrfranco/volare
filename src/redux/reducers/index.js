import { combineReducers } from 'redux';
import reservation from './reservation';
import destinations from './destinations';

export default combineReducers({
  reservation,
  destinations,
});
