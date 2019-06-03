import { createStore, applyMiddleware } from 'redux'
import reducers from './reducer/index.js'
// 被promiseMiddleware替代
// import thunk from 'redux-thunk'
// import { composeWithDevTools } from 'redux-devtools-extension'
// let store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk)))
import promiseMiddleware from './middleware/promiseMiddleware'
let store = createStore(reducers, applyMiddleware(promiseMiddleware))
// console.log('store', store.getState())
export default store
