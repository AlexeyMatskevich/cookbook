import { createStore } from 'redux';
import combineReducers from '../root'

export const store = createStore(combineReducers);