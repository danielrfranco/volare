import { combineReducers } from 'redux';
import reservation from './reservation';
import destinations from './destinations';
import reservationsCart from './reservationsCart';

export default combineReducers({
  reservation,
  destinations,
  reservationsCart,
});
