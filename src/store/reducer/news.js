import * as C from '../action-type'
import { combineReducers } from 'redux'
const news = {
	dataList: [],
	loading: false
}
const newsReducer = (state = news, action) => {
	console.log('action_type in news', action.type)
	switch (action.type) {
		case C.GET_NEWS_LIST:
			return {
				dataList: action.payload,
				loading: false
			}
		case C.DEL_NEWS:
			let temp = Object.assign({}, state)
			temp.dataList.splice(action.payload, 1)
			return {
				dataList: temp.dataList,
				loading: false
			}
		default:
			return state
	}
}
const dayNews = {
	dataList: []
}
const dayNewsReducer = (state = dayNews, action) => {
	switch (action.type) {
		case C.GET_DAY_NEWS_LIST:
			return {
				dataList: action.payload
			}
		default:
			return state
	}
}
export default combineReducers({ newsReducer, dayNewsReducer })
