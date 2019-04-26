// 编写actionCreator ，是一个函数，返回一个对象，action是对象
import * as C from './action-type'
let actions = {
	addTodo: function(payload) {
		return {
			type: C.ADD_TODO,
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
export default actions
