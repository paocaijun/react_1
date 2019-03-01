import React from 'react'
import NewType from '@/components/ui/newType'
class TodoList extends React.Component {
	constructor() {
		super()
		this.bb = 'constructor'
		this.state = {
			todolist: ['维秘关闭53家门店新', '环球度假区将开园新', '韩国生育率跌破1', '嫦娥四号第三月昼']
		}
	}
	// 去掉了getInitialState这个hook函数
	componentWillMount() {
		console.log('this', this.state)
	}
	render() {
		return (
			<div>
				<NewType listData={this.state.todolist} />
				<ul>
					{this.state.todolist.map((item, i) => {
						return (
							<li key={i}>
								<span>{item}</span>
								<span>delete</span>
							</li>
						)
					})}
				</ul>
				<span>todo</span>
			</div>
		)
	}
}
export default TodoList
