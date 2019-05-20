import { createStore, applyMiddleware } from 'redux'
import reducers from './reducer/index.js'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
let store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk)))
// console.log('store', store.getState())
export default store
