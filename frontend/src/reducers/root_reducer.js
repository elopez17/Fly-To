import { combineReducers } from 'redux';
import flights from './flights_reducer';
import ui from './ui_reducer';
import errors from './errors_reducer';

const rootReducer = combineReducers({
  flights,
  ui,
  errors
});
// keep track of place ids


export default rootReducer;