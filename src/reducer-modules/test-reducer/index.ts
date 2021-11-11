import { stateInterface, initialState } from './_state';
import { INCREMENT_DECREMENT_ACTION, CHANGESIZE_ACTION } from './_action';

export const reducer = (
  state = initialState,
  action: INCREMENT_DECREMENT_ACTION | CHANGESIZE_ACTION,
): stateInterface => {
  switch (action.type) {
    case 'INCREMENT':
      return {
        ...state,
        currentNumber: state.currentNumber + action.payload.number,
      };
    case 'DECREMENT':
      return {
        ...state,
        currentNumber: state.currentNumber - action.payload.number,
      };
    case 'CHANGESIZE':
      return {
        ...state,
        size: action.payload.size,
      };
    default:
      return state;
  }
};
