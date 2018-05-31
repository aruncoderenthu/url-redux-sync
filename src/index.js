import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import ReduxQuerySync from 'redux-query-sync'

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import { createStore } from 'redux';
import { urlReduxSync } from './reducers/reducers';

/*
 * redux-query-sync enhancer
 *
 */
const storeEnhancer = ReduxQuerySync.enhancer({
    params:{
        one: {
            selector: state => state.one,
            action: value => ({type: 'TOGGLE', item: 'one'}),
            stringToValue: string => String(string) === "true" || false,
            defaultValue: false
        },
        two: {
            selector: state => state.two,
            action: value => ({type: 'TOGGLE', item: 'two'}),
            stringToValue: string => String(string) === "true" || false,
            defaultValue: false
        },
        three: {
            selector: state => state.three,
            action: value => ({type: 'TOGGLE', item: 'three'}),
            stringToValue: string => String(string) === "true" || false,
            defaultValue: false
        },
        text: {
            selector: state => state.text,
            action: value => ({type: 'SET_TEXT', text: value}),
            defaultValue: "default"
        }

    },
    initialTruth: 'location',
    replaceState: true
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
