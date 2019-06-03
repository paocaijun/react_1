import * as C from '../action-type'
import { combineReducers } from 'redux'
const news = {
	dataList: [],
	loading: false
}
const newsReducer = (state = news, action) => {
	// console.log('action_type in news', action)
	let temp
	switch (action.type) {
		case C.GET_NEWS_LIST_SUCESS:
			return {
				dataList: action.result.data.data,
				loading: false
			}
		case C.DEL_NEWS:
			temp = Object.assign({}, state) // state已经是最新的数据了，可直接在state上删除
			temp.dataList.splice(action.payload, 1)
			return {
				dataList: temp.dataList,
				loading: false
			}
		case C.ADD_NEWS:
			temp = Object.assign({}, state)
			temp.dataList.unshift(action.payload)
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
