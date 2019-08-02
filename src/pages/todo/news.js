import React from 'react'
import NewType from '@/components/ui/newType'
import { Icon } from 'antd'
import { connect } from 'react-redux'
import actions from '@/store/actions/news'
import actionsIndex from '@/store/actions/common'
import img1 from '@/layouts/img/1.jpg'
import img2 from '@/layouts/img/2.jpg'
import $ from 'jquery'

import '@/utils/picPreview'

const { getNewsListAction, delNewsAction, addNewsAction } = actions
const { toggleLoading } = actionsIndex

class TodoList extends React.Component {
	constructor(props) {
		super(props)
		this.state = { dataList: [] }
	}

	handleAdd = title => {
		const { addNewsAction } = this.props
		addNewsAction({ title: title, dated: new Date() })
	}
	componentWillReceiveProps(nextProps) {
		const { dataList } = nextProps.newsPage.newsReducer
		this.setState({ dataList: dataList })
		// 删除数据之后会自动更新props
		// console.log('nextProps in news', nextProps)
	}
	componentWillMount() {
		const { getNewsListAction, toggleLoading } = this.props
		// toggleLoading(true)
		getNewsListAction()
	}
	componentDidMount() {
		let yn = new yPreview()
		yn.init({
			name: 'yourNewName',
			elem: 'preview-image'
		})
		// this.doPrint('todo-section')
	}
	// 打印
	doPrint(elClass) {
		let iframe = document.querySelector('#printWrap')
		if (!iframe) {
			let el = document.querySelector(`.${elClass}`)
			if (el) {
				iframe = document.createElement('IFRAME')
				iframe.setAttribute('id', 'printWrap')
				iframe.setAttribute('style', 'position:absolute;width:0;height:0;top:100px;left:-500px;top:-500px;')
				document.body.appendChild(iframe)
				let doc = iframe.contentWindow.document
				doc.write('<div>' + el.innerHTML + '</div>')
				doc.close()
				// iframe.contentWindow.focus()
			}
		}
		iframe.contentWindow.print()
	}
	scroll() {
		var content = $('#content').html()
		$('#search-btn').click(function() {
			$('#content').html(content)
			var searchText = $('#search').val()
			if (searchText.length == 0) {
				return false
			}
			var regExp = new RegExp(searchText, 'g')
			var newHtml = content.replace(
				regExp,
				'<span id="result" style="background:yellow;color:red;">' + searchText + '</span>'
			)
			$('#content').html(newHtml)
			var X = $('#result').offset().top
			var Y = $('#result').offset().left
			window.scrollTo(X, Y)
		})
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
				<div>
					<img src={img1} alt="" className="preview-image" />
					<img src={img2} alt="" className="preview-image" />
				</div>
				<div className="todo-section">
					<NewType onAdd={this.handleAdd} />
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
		},
		addNewsAction(data) {
			dispatch(addNewsAction(data))
		},
		toggleLoading(data) {
			dispatch(toggleLoading(data))
		}
	}
}
export default connect(
	state => ({ newsPage: state.news }), // news与reducer文件的名字匹配，非state对象的名字
	mapDispatchToProps
)(TodoList)
