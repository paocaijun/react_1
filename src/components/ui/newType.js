import React from 'react'
import { Button } from 'antd'
class TodoItem extends React.Component {
	constructor() {
		super()
	}
	render() {
		return (
			<div>
				<Button type="primary">Primary</Button>
				<span>{this.props.listData}111</span>
			</div>
		)
	}
}
export default TodoItem
