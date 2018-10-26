import { combineReducers } from 'redux';
import quotes from './quotes_reducer';
import origin from './origin_reducer';
import results from './results_reducer';
import places from './places_reducer';
import geo from './geo_reducer';

const flightsReducer = combineReducers({
  quotes,
  origin,
  results,
  places,
  geo,
});

export default flightsReducer;