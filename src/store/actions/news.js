import * as C from '../action-type'
import api from '@/utils/api'
let newsAction = {
	getNewsListAction: payload => {
		// return (dispatch, getState) => {
		// 	getApi().then(res => {
		// 		dispatch({
		// 			type: C.GET_NEWS_LIST,
		// 			payload: res
		// 		})
		// 	})
		// }
		return {
			types: [C.GET_NEWS_LIST_REQUEST, C.GET_NEWS_LIST_SUCESS, C.GET_NEWS_LIST_FAIL],
			promise: client => client.get('/api/news/newslist'),
			afterSuccess: (dispatch, getState, result) => {
				// console.log('arguments', dispatch, getState, result)
			}
		}
	},
	delNewsAction: payload => {
		return (dispatch, getState) => {
			dispatch({
				type: C.DEL_NEWS,
				payload
			})
		}
	},
	addNewsAction: payload => {
		return dispatch => {
			dispatch({
				type: C.ADD_NEWS,
				payload
			})
		}
	},
	getDayNewsList: payload => {
		return {
			type: C.GET_DAY_NEWS_LIST,
			payload
		}
	},
	getTodoList: function(payload) {
		return {
			type: C.GET_TODO_LIST,
			payload
		}
	},
	toggleCom: function(payload) {
		return {
			type: C.TOGGLE_COM,
			payload
		}
	}
}
async function getApi() {
	let res = await api.getNewsList({ type: '1' })
	return res
}
export default newsAction
