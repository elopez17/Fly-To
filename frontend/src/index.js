import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import * as APIUtil from './util/chim_util';
import configureStore from './store/store';
// import App from './App';
import Root from './root.jsx';

document.addEventListener('DOMContentLoaded', () => {
  let store = configureStore();
  // window.getChims = APIUtil.getChims();
  // APIUtil.getAll()();


  ReactDOM.render(<Root  store={store}/>, document.getElementById('root'));
});

