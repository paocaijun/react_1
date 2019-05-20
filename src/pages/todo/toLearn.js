import React, { Component } from 'react'
import { Checkbox } from 'antd'
import { connect } from 'react-redux'
import actions from '@/store/actions'
class ToLearn extends Component {
	constructor(props, context) {
		super(props)
		this.state = {
			toLearnData: null
		}
	}
	changeStatus = ev => {
		// 调用action
		this.props.toggleCom(ev.target.itemId)
	}
	componentWillReceiveProps(nextProps) {
		// redux获取数据
		const { todos } = nextProps.todo
		this.setState({
			toLearnData: [...todos]
		})
	}
	componentDidMount() {
		let { getTodoList, addTodo } = this.props
		let datas = [
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
		]
		getTodoList(datas)
	}
	handleTodo(toLearnData) {
		return (
			toLearnData &&
			toLearnData.map((i, index) => {
				return (
					<li key={index}>
						<Checkbox onChange={this.changeStatus} itemId={i.id} checked={i.isComplete} />
						<span className="p20">{i.title}</span>
						<span>{i.isComplete ? '完成' : '未完成'}</span>
					</li>
				)
			})
		)
	}
	render() {
		const { toLearnData } = this.state
		return (
			<div>
				<h3>Learn Plan</h3>
				<div>{this.handleTodo(toLearnData)}</div>
			</div>
		)
	}
}
// export default App
export default connect(
	state => ({
		...state //此时的state就是todos:[...]数据, 将state,actions 注入到props下
	}),
	actions
)(ToLearn)
