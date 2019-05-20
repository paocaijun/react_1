/*
	编译入口，在webpack.config中申明
*/
import React from 'react'
import ReactDOM from 'react-dom'
import '@/layouts/css/index.scss'
import CRouter from './router/router.js'
import { Provider } from 'react-redux'
import store from './store'
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
