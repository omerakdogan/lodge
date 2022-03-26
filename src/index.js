import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './router/AppRouter';
import { store } from './store/store';
import { Provider } from 'react-redux';
import './scss/styles.scss';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <AppRouter />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);


