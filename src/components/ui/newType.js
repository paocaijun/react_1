import React from 'react'
import { Button, Input } from 'antd'
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
			let rows = this.props.listData
			rows.push(this.state.newValue)
			this.props.onAdd(rows)
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
