import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// redux settings
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducers from './reducer-modules';
// report web vitals
import reportWebVitals from './reportWebVitals';

const store = createStore(reducers);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);

reportWebVitals();
