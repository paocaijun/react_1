import { combineReducers } from 'redux'
import * as C from '../action-type'
const initState = {}

const loading = (state = false, action) => {
	switch (action.type) {
		case C.TOGGLE_LOADING:
			return action.payload
		default:
			return state
	}
}
const commonReducer = (state = initState, action) => {
	let newState = {}
	return newState || state
}
export default combineReducers({ commonReducer, loading })
