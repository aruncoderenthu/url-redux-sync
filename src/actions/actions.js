// export const TOGGLE_ON = 'TOGGLE_ON';
// export const TOGGLE_OFF = 'TOGGLE_OFF';
export const TOGGLE = 'TOGGLE';
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


