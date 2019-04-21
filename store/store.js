import { applyMiddleware, createStore } from 'redux';
import rootReducers from '../reducer/root'
import logMiddleware from '../middleware/log';

export const store = createStore(rootReducers, applyMiddleware(logMiddleware));