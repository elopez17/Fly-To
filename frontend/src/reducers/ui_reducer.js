import { combineReducers } from 'redux';
import loading from './loading_reducer';
import modalReducer from './modals_reducer';

export default combineReducers({
  loading,
  modal: modalReducer
});