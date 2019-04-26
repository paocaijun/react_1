/*
	redux测试组件，在router文件内放开注释
*/
import React, { Component } from 'react'
import { connect } from 'react-redux'
import actions from './store/actions'
class App extends Component {
	constructor(props, context) {
		super(props)
		// this.changeStatus = this.changeStatus.bind(this)
	}
	// 获取ev修改this的写法
	changeStatus = ev => {
		// 调用action
		this.props.toggleCom(ev.target.value)
	}
	getTodoList() {
		console.log('this.props.todos', this.props)
		return this.props.todos.map((i, index) => {
			return (
				<li key={index}>
					{i.title}
					<span>{i.isComplete ? '完成' : '未完成'}</span>
					<input type="checkbox" value={i.id} onChange={this.changeStatus} />
				</li>
			)
		})
	}
	componentWillMount() {
		console.log('{this}', this, this.props)
	}
	// 页面路由已注释，可放开
	render() {
		return (
			<div>
				<div className="hello" onClick={this.toCount}>
					{this.props.test}
				</div>
				<div>{this.getTodoList()}</div>
			</div>
		)
	}
}
// export default App
export default connect(
	state => ({
		...state //此时的state就是todos:[...]数据
	}),
	actions
)(App)
