// import { combineReducers } from 'redux';
import mergeWith from "lodash.mergewith";

import {
    TOGGLE,
} from '../actions/actions';

const initialState = {
    one: true,
    two: false,
    three: true
};

export function urlReduxSync(state = initialState, action) {

    switch(action.type) {

        case TOGGLE:

            return mergeWith({}, state, {
                [action.item] : !state[action.item]
            });

        case 'TEST':
            console.log('TEST');
            return state;

        default:
            return state;
    }
}