import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import ReduxQuerySync from 'redux-query-sync'

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

// import configureStore from './store/configureStore';
// import INITIAL_STATE from './reducers/initialState';
import { createStore } from 'redux';
import { urlReduxSync } from './reducers/reducers';

/*
 * redux-query-sync enhancer
 */
const params = {
  one: {
      selector: state => state.one,
      action: value => ({type: 'TEST_ACTION', payload: 'payload'})
  },
  two: {
      selector: state => state.two,
      action: value => ({type: 'TEST_ACTION', payload: 'payload'})
  },
  three: {
      selector: state => state.three,
      action: value => ({type: 'TEST_ACTION', payload: 'payload'})
  }
};
const initialTruth = 'location';
const replaceState = true;

const storeEnhancer = ReduxQuerySync.enhancer({
    params,
    initialTruth,
    replaceState
});

/*
 * Create Redux Store
 */
const store = createStore(
    urlReduxSync,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    storeEnhancer
);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, document.getElementById('root'));
registerServiceWorker();
