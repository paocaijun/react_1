// fetch
import { message } from 'antd'
import 'whatwg-fetch'
import 'es6-promise'
import store from '@/store/index'
import action from '@/store/actions/common'
const { toggleLoading } = action

export function request(url, method = 'GET', paramsObj) {
	return fetch(url, {
		method: method,
		credentials: 'include',
		headers: {
			Accept: 'application/json, text/plain, */*',
			'Content-Type': 'application/x-www-form-urlencoded'
		},
		body: JSON.stringify(paramsObj) // JSON.stringify(paramsObj)
	}).then(response => {
		return new Promise((resolve, reject) => {
			// 清除loading
			setTimeout(() => {
				store.dispatch(toggleLoading(false))
			}, 500)
			if (response.status === 200) {
				return response
					.json()
					.then(json => {
						resolve(json.data || json)
					})
					.catch(err => {
						reject('err:' + err)
					})
			} else {
				if (response.status === 404) {
					message.error('请检查url是否正确')
					reject('url错啦')
				} else {
					reject('status：' + response.status)
				}
			}
		})
	})
}
let post = (url, params) => request(url, 'POST', params)
let get = (url, params) => request(url, 'GET', params)
export default {
	// music
	getMusicData: params => post('/api/music/datalist', params),
	editData: params => post('/api/xxx', params),
	getAreaTree: params => post('/api/music/areaTree', params),
	getNewsList: params => post('/api/news/newslist', params),
	getsingerData: params => post('/api/music/singerData', params)
}
