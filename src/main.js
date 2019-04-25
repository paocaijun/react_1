import React from 'react'
import ReactDOM from 'react-dom'
import '@/layouts/css/index.scss'
import CRouter from './router.js'
import { Provider } from 'react-redux'
import store from './store'
// import { createStore } from 'redux'
// console.log('React', React)
// const rootReducer = function(state, action) {
// 	if (typeof state === 'undefined') {
// 		return 0
// 	}
// 	switch (action.type) {
// 		case 'add_five':
// 			return state + 5
// 		case 'add_ten':
// 			return state + 10
// 		default:
// 			return state
// 	}
// 	return state
// }
// createStore生成store,store是保存数据的地方
// const store = createStore(rootReducer)
// 定义render函数,Component为CRouter
const render = Component => {
	ReactDOM.render(
		<div className="main-index">
			<Provider store={store}>
				<Component />
			</Provider>
		</div>,
		document.getElementById('app')
	)
}
render(CRouter)

// ReactDOM.render(<div>Hello World1111</div>, document.getElementById("app"));
