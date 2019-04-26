import React from 'react'

import NewType from '@/components/ui/newType'
import { Icon } from 'antd'
import imgUrl from '@/layouts/img/1.jpg'
import 'whatwg-fetch'
import 'es6-promise'
import { rejects } from 'assert'
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
	testfn(pa) {
		fetch('/api/portal/login', {
			method: 'GET',
			credentials: 'include'
		})
			.then(response => {
				return response.json().then(json => {
					if (response.ok) {
						return json
					} else {
						console.log('失败', response.status)
					}
				})
			})
			.then(response => {
				console.log(111, response)
			})
			.catch(error => {
				console.log(222, error.message)
			})
	}

	componentDidMount() {
		this.testfn(20)
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
