import React from 'react'
import NewType from '@/components/ui/newType'
import { Icon } from 'antd'
import imgUrl from '@/layouts/img/1.jpg'

class TodoList extends React.Component {
	constructor() {
		super()
		this.state = {
			todolist: ['维秘关闭53家门店新', '环球度假区将开园新', '韩国生育率跌破1', '嫦娥四号第三月昼']
		}
		this.handleAdd = this.handleAdd.bind(this)
		this.handleDel = this.handleDel.bind(this)
	}

	handleAdd(rows) {
		this.setState({ todolist: rows })
	}
	handleDel(key) {
		const rows = [...this.state.todolist]
		rows.splice(key, 1)
		this.setState({ todolist: rows })
	}
	componentDidMount() {
		class Person {
			constructor(x, y) {
				this.x = x
				this.y = y
			}
			toSay() {
				console.log('say', this.x)
			}
			toDo() {
				console.log('this', this)
				this.toSay()
			}
		}
		let p1 = new Person('哈哈')
		p1.toDo()
	}
	render() {
		return (
			<div className="todo-page common-page">
				<div className="bread">
					<span>UI</span>
					<span>/</span>
					<span>TODOLIST</span>
				</div>
				<div className="todo-section">
					<NewType listData={this.state.todolist} onAdd={this.handleAdd} />
					<ul>
						{this.state.todolist.map((item, i) => {
							return (
								<li key={i} className="todo-items">
									<span className="order">{i}</span>
									<span>{item}</span>
									<span className="delete-icon" onClick={() => this.handleDel(i)} data-key={i}>
										<Icon type="close" />
									</span>
								</li>
							)
						})}
					</ul>
				</div>
			</div>
		)
	}
}
export default TodoList
