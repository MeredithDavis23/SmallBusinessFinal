import { applyMiddleware, createStore } from 'redux'
import reducers from './Reducers'
import state from './State'
import thunk from "redux-thunk"

export default createStore(reducers, state, applyMiddleware(thunk))