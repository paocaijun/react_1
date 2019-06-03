import React, { Component } from 'react'
import { Checkbox } from 'antd'
import { connect } from 'react-redux'
import actions from '@/store/actions/news'
class ToLearn extends Component {
	constructor(props, context) {
		super(props)
		this.state = {
			toLearnData: null
		}
	}
	changeStatus = ev => {
		const { toggleCom } = this.props
		toggleCom(ev.target.itemId)
	}
	// componentWillReceiveProps有时会在props并没有改变时触发，所以需要自己加判断
	componentWillReceiveProps(nextProps) {
		const { todos } = nextProps.todo
		this.setState({
			toLearnData: [...todos]
		})
	}
	componentDidMount() {
		let { getTodoList } = this.props
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
// export default ToLearn
export default connect(
	state => ({
		...state //此时的state就是todos:[...]数据, 将state,actions 注入到props下
	}),
	actions
)(ToLearn)
