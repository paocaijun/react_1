// 编写actionCreator ，是一个函数，返回一个对象，action是对象
// 在调用此action的页面引入action，redux内不引入
import * as C from '../action-type'
let actions = {
	toggleLoading: function(payload) {
		return {
			type: C.TOGGLE_LOADING,
			payload
		}
	}
}
export default actions
