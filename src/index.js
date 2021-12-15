import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css'
import rootReducer from './modules/rootReducer';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

const store = createStore(rootReducer);

ReactDOM.render(
  <Provider store={store}>
  <App />
</Provider>,
  document.getElementById('root')
);