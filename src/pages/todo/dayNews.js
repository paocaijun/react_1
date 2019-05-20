import React from 'react'
import { connect } from 'react-redux'
import actions from '@/store/actions/news'
class TodoList extends React.Component {
	constructor() {
		super()
		this.state = { dataList: [] }
	}
	componentWillReceiveProps(nextProps) {
		const { dataList } = nextProps.newsPage.dayNewsReducer
		this.setState({ dataList: dataList })
	}
	componentWillMount() {
		const { getDayNewsList } = this.props
		let datas = ['张馨予 维权女王', '大兴机场首次试飞', '普京会见美国务卿']
		getDayNewsList(datas)
	}
	handleRender() {
		return (
			this.state.dataList.length > 0 &&
			this.state.dataList.map((item, i) => {
				return (
					<li key={i} className="todo-items">
						<span className="order">{i}</span>
						<span>{item}</span>
					</li>
				)
			})
		)
	}
	render() {
		return (
			<div className="todo-page common-page">
				<div className="bread">
					<span>UI</span>
					<span>/</span>
					<span>DAY_NEWS( 实时新闻 )</span>
				</div>
				<div className="todo-section">
					<ul>{this.handleRender()}</ul>
				</div>
			</div>
		)
	}
}
export default connect(
	state => ({ newsPage: state.news }),
	actions
)(TodoList)
