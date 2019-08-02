// fetch
import { message } from 'antd'
import 'whatwg-fetch'
import 'es6-promise'
import store from '@/store/index'
import action from '@/store/actions/common'
const { toggleLoading } = action
import * as C from '@/constants/api.js'

export function request(url, method = 'GET', paramJson) {
	let fetchObj = {
		method: method,
		credentials: 'include',
		headers: {
			Accept: 'application/json, text/plain, */*',
			'Content-Type': 'application/json;charset=UTF-8'
		}
	}
	if (method === 'GET') {
		if (paramJson) {
			url += '?1=1'
			for (let key in paramJson) {
				url += `&${key}`
				url += `=${paramJson[key]}`
			}
		}
	} else {
		fetchObj.body = JSON.stringify(paramJson)
	}
	// {
	// 	method: method,
	// 	credentials: 'include',
	// 	headers: {
	// 		Accept: 'application/json, text/plain, */*',
	// 		'Content-Type': 'application/json;charset=UTF-8'
	// 	},
	// 	body: JSON.stringify(paramJson)
	// }
	return fetch(url, fetchObj).then(response => {
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
	getMusicData: params => post(C.MUSIC_DATA, params),
	editData: params => post(C.EDIT_DATA, params),
	getAreaTree: params => post(C.AREA_TREE, params),
	getNewsList: params => post(C.NEWS_LIST, params),
	getsingerData: params => post(C.SINGER_DATA, params),
	// 博客
	queryBlogData: params => get(C.QUERY_BLOG_DATA, params),
	queryBlogDetail: params => get(C.QUERY_BLOG_DETAIL, params),
	createBlog: params => get(C.CREATE_BLOG, params)
}
