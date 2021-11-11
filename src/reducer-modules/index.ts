import { combineReducers } from 'redux';
// reducers
import { reducer as counter } from './test-reducer';

const reducers = combineReducers({ counter });

export type RootState = ReturnType<typeof reducers>;
export default reducers;
