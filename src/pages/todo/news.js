import React from 'react'
import NewType from '@/components/ui/newType'
import { Icon } from 'antd'
import { connect } from 'react-redux'
import actions from '@/store/actions/news'
const { getNewsListAction, delNewsAction } = actions

class TodoList extends React.Component {
	constructor(props) {
		super(props)
		this.state = { dataList: [] }
	}

	handleAdd(rows) {
		this.setState({ todolist: rows })
	}
	componentWillReceiveProps(nextProps) {
		const { dataList } = nextProps.newsPage.newsReducer
		this.setState({ dataList: dataList })
		// 删除数据之后会自动更新props
		console.log('nextProps', nextProps)
	}
	componentWillMount() {
		const { getNewsListAction } = this.props
		getNewsListAction()
	}
	handleDel(i) {
		const { delNewsAction } = this.props
		delNewsAction(i)
	}

	render() {
		return (
			<div className="todo-page common-page">
				<div className="bread">
					<span>UI</span>
					<span>/</span>
					<span>TODO_NEWS</span>
				</div>
				<div className="todo-section">
					<NewType listData={this.state.dataList} onAdd={this.handleAdd} />
					<ul>
						{this.state.dataList &&
							this.state.dataList.map((item, i) => {
								return (
									<li key={i} className="todo-items">
										<span className="order">{i}</span>
										<span>{item.title}</span>
										<span
											className="delete-icon"
											onClick={() => {
												this.handleDel(i)
											}}
											data-key={i}>
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
// 放置actions的位置
const mapDispatchToProps = (dispatch, ownProps) => {
	return {
		getNewsListAction(data) {
			dispatch(getNewsListAction(data))
		},
		delNewsAction(data) {
			dispatch(delNewsAction(data))
		}
	}
}
export default connect(
	state => ({ newsPage: state.news }), // news与reducer文件的名字匹配，非state对象的名字
	mapDispatchToProps
)(TodoList)
