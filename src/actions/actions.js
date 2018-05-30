export const TOGGLE_ON = 'TOGGLE_ON';
export const TOGGLE_OFF = 'TOGGLE_OFF';

/**
 * Toggle States
 */
export const ToggleStates = {
  ON: 'ON',
  OFF: 'OFF'
};

/**
 * Action Creators
 */
export function toggleOn(item) {
    return { type: TOGGLE_ON, item }
}

export function toggleOff(item) {
    return { type: TOGGLE_OFF, item }
}

