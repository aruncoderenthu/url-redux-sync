// export const TOGGLE_ON = 'TOGGLE_ON';
// export const TOGGLE_OFF = 'TOGGLE_OFF';
export const TOGGLE = 'TOGGLE';
export const SET_TEXT = 'SET_TEXT';

/**
 * Toggle States
 */
// export const ToggleStates = {
//   ON: 'ON',
//   OFF: 'OFF'
// };

/**
 * Action Creators
 */
export function toggle(item) {
    return { type: TOGGLE, item }
}

export function setText(text) {
    return { type: SET_TEXT, text }
}


