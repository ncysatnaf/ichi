import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from '../reducers/index'
import devTools from 'remote-redux-devtools'
import createLogger from 'redux-logger'

const createStoreWithMiddleware = compose(
  applyMiddleware(thunk, createLogger()),
)(createStore)

export default function configureStore(initialState) {
  const store = createStoreWithMiddleware(rootReducer, initialState)

  return store
}