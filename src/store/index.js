import { createStore } from 'redux'
import reducer from './reducer/index.js'
let store = createStore(reducer)
console.log('store', store.getState())
export default store
