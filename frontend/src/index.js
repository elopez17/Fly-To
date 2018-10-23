import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import * as APIUtil from './util/api_util';
import configureStore from './store/store';
import App from './App';

document.addEventListener('DOMContentLoaded', () => {
  let store = configureStore();
  // window.getAll = APIUtil.getAll();
  // APIUtil.getAll()();
  ReactDOM.render(<App store={store}/>, document.getElementById('root'));
});

