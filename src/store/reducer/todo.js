import * as C from '../action-type'
const initState = {
	todos: [],
	test: 'test数据'
}
// action参数对应action返回的对象,reducer返回新的state对象
const todoReducer = (state = initState, action) => {
	let newState
	switch (action.type) {
		case C.GET_TODO_LIST:
			newState = {
				todos: action.payload
			}
			break
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
export default todoReducer
