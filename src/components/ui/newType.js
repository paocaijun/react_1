import React from 'react'
import { Button, Input, message } from 'antd'
class TodoItem extends React.Component {
	constructor() {
		super()
		this.state = {
			newValue: ''
		}
		this.changeVal = this.changeVal.bind(this)
	}
	handleNew(ev) {
		if (this.state.newValue != '') {
			this.props.onAdd(this.state.newValue)
			this.setState({ newValue: '' })
		} else {
			message.info('请输入内容')
		}
	}
	changeVal(ev) {
		const { value } = ev.target
		this.setState({ newValue: value })
	}
	render() {
		return (
			<div className="new-type">
				<Input value={this.state.newValue} onChange={this.changeVal} onPressEnter={() => this.handleNew()} />
				<Button type="primary" onClick={() => this.handleNew()}>
					新增
				</Button>
			</div>
		)
	}
}
export default TodoItem
