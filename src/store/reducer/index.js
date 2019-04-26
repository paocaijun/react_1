import * as C from '../actions/action-type'
const initState = {
	todos: [
		{
			id: parseInt(Math.random() * 100000), // 多取几位，数据不容易重复
			isComplete: true,
			title: '学习 react'
		},
		{
			id: parseInt(Math.random() * 100000),
			isComplete: false,
			title: '学习 redux'
		},
		{
			id: parseInt(Math.random() * 100000),
			isComplete: false,
			title: '学习 node'
		}
	],
	test: 'test数据'
}
// action参数对应action返回的对象
function reducer(state = initState, action) {
	let newState
	switch (action.type) {
		case C.ADD_TODO:
			newState = {
				todos: [...state, action.payload]
			}
			break
		case C.TOGGLE_COM:
			newState = {
				...state,
				todos: state.todos.map(i => {
					// 不同slice ,要返回一个基于state更新后的新对象
					if (i.id == action.payload) {
						i.isComplete = !i.isComplete
					}
					return i
				})
			}
			break
		default:
			newState = state
			break
	}
	return newState
}
export default reducer
