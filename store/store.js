import { applyMiddleware, createStore } from 'redux'
import rootReducers from '../reducer/root'
import logMiddleware from '../middleware/log'
import apiMiddleware from '../middleware/api'

const store = createStore(
  rootReducers,
  applyMiddleware(logMiddleware, apiMiddleware)
);

export default store