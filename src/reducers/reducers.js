// import { combineReducers } from 'redux';
import mergeWith from "lodash.mergewith";

import {
    TOGGLE_ON,
    TOGGLE_OFF
} from '../actions/actions';
import { ToggleStates } from '../actions/actions';

const initialState = {
    one: 'ON',
    two: 'OFF',
    three: 'ON'
};

export function urlReduxSync(state = initialState, action) {

    switch(action.type) {

        case TOGGLE_ON:

            return mergeWith({}, state, {
                [action.item] : ToggleStates.ON
            });

        case TOGGLE_OFF:
            console.log(action.type);

            return mergeWith({}, state, {
                [action.item] : ToggleStates.OFF
            });

        case 'TEST':
            console.log('TEST');
            return state;

        default:
            return state;
    }
}