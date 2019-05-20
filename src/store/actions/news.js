import * as C from '../action-type'
import api from '@/utils/api'
let newsAction = {
	getNewsListAction: payload => {
		return (dispatch, getState) => {
			getApi().then(res => {
				dispatch({
					type: C.GET_NEWS_LIST,
					payload: res
				})
			})
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
	getDayNewsList: payload => {
		return {
			type: C.GET_DAY_NEWS_LIST,
			payload
		}
	}
}
async function getApi() {
	let res = await api.getNewsList({ type: '1' })
	return res
}
export default newsAction
